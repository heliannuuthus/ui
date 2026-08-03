import { parse } from '@babel/parser';
import MagicString, { type SourceMap } from 'magic-string';

interface ComponentImport {
  imported: string;
  modulePath: string;
}

interface TransformResult {
  code: string;
  map: SourceMap;
}

interface ViteLikePlugin {
  enforce: 'pre';
  name: string;
  transform(code: string, id: string): TransformResult | null;
}

declare const __HELIANNUUTHUS_UI_IMPORTS__: Record<string, ComponentImport>;

type ParsedStatement = ReturnType<typeof parse>['program']['body'][number];

export interface HeliannuuthusUIOptions {
  /**
   * `global` injects one deduplicated stylesheet and is the predictable default.
   * `components` loads smaller component styles for narrow selections.
   */
  styles?: 'components' | 'global';
}

interface RewrittenImport {
  code: string;
  hasRuntimeComponent: boolean;
}

function rewriteImport(
  statement: ParsedStatement,
  styleStrategy: NonNullable<HeliannuuthusUIOptions['styles']>
): RewrittenImport {
  if (statement.type !== 'ImportDeclaration') {
    throw new Error('@heliannuuthus/ui: expected an import declaration.');
  }

  const statementIsTypeOnly = statement.importKind === 'type';
  const importsByModule = new Map<string, string[]>();
  let hasRuntimeComponent = false;

  for (const specifier of statement.specifiers) {
    if (specifier.type !== 'ImportSpecifier') {
      throw new Error(
        '@heliannuuthus/ui only supports named imports from the package root.'
      );
    }

    const publicName =
      specifier.imported.type === 'Identifier'
        ? specifier.imported.name
        : specifier.imported.value;
    const localName = specifier.local.name;
    const componentImport = __HELIANNUUTHUS_UI_IMPORTS__[publicName];

    if (!componentImport) {
      throw new Error(
        `@heliannuuthus/ui: "${publicName}" is not a public named export.`
      );
    }

    const isComponent = componentImport.modulePath.startsWith('_components/');
    const isTypeOnly = statementIsTypeOnly || specifier.importKind === 'type';
    const modulePath =
      isComponent && styleStrategy !== 'components'
        ? componentImport.modulePath.replace(
            '_components/',
            '_internal/components/'
          )
        : componentImport.modulePath;
    const importedBinding =
      componentImport.imported === localName
        ? componentImport.imported
        : `${componentImport.imported} as ${localName}`;
    const rewrittenSpecifier =
      specifier.importKind === 'type' && !statementIsTypeOnly
        ? `type ${importedBinding}`
        : importedBinding;
    const moduleImports = importsByModule.get(modulePath) ?? [];

    moduleImports.push(rewrittenSpecifier);
    importsByModule.set(modulePath, moduleImports);
    hasRuntimeComponent ||= isComponent && !isTypeOnly;
  }

  return {
    code: [...importsByModule]
      .map(
        ([modulePath, specifiers]) =>
          `import ${statementIsTypeOnly ? 'type ' : ''}{ ${specifiers.join(', ')} } ` +
          `from '@heliannuuthus/ui/${modulePath}';`
      )
      .join('\n'),
    hasRuntimeComponent,
  };
}

export function heliannuuthusUI(
  options: HeliannuuthusUIOptions = {}
): ViteLikePlugin {
  const styleStrategy = options.styles ?? 'global';

  return {
    name: 'heliannuuthus-ui',
    enforce: 'pre',
    transform(code, id) {
      if (
        id.includes('/node_modules/') ||
        !/\.[cm]?[jt]sx?(?:\?.*)?$/.test(id) ||
        !code.includes('@heliannuuthus/ui')
      ) {
        return null;
      }

      const program = parse(code, {
        plugins: ['decorators-legacy', 'importAttributes', 'jsx', 'typescript'],
        sourceType: 'module',
      }).program;
      const rootImports = program.body.filter(
        (statement) =>
          statement.type === 'ImportDeclaration' &&
          statement.source.value === '@heliannuuthus/ui'
      );

      if (rootImports.length === 0) {
        return null;
      }

      const rewritten = new MagicString(code);
      let shouldImportGlobalStyles = false;

      for (const statement of rootImports) {
        if (statement.start == null || statement.end == null) {
          throw new Error(
            '@heliannuuthus/ui: could not locate a package-root import.'
          );
        }

        const rewrittenImport = rewriteImport(statement, styleStrategy);

        rewritten.overwrite(
          statement.start,
          statement.end,
          rewrittenImport.code
        );
        shouldImportGlobalStyles ||= rewrittenImport.hasRuntimeComponent;
      }

      const alreadyImportsGlobalStyles = program.body.some(
        (statement) =>
          statement.type === 'ImportDeclaration' &&
          statement.source.value ===
            '@heliannuuthus/ui/_internal/styles/global.css'
      );

      if (
        styleStrategy === 'global' &&
        shouldImportGlobalStyles &&
        !alreadyImportsGlobalStyles
      ) {
        rewritten.prepend(
          "import '@heliannuuthus/ui/_internal/styles/global.css';\n"
        );
      }

      return {
        code: rewritten.toString(),
        map: rewritten.generateMap({
          hires: true,
          includeContent: true,
          source: id,
        }),
      };
    },
  };
}
