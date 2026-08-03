import { parse } from '@babel/parser';

interface ComponentImport {
  imported: string;
  modulePath: string;
}

interface TransformResult {
  code: string;
  map: null;
}

interface ViteLikePlugin {
  enforce: 'pre';
  name: string;
  transform(code: string, id: string): TransformResult | null;
}

declare const __HELIANNUUTHUS_UI_IMPORTS__: Record<string, ComponentImport>;

type ParsedStatement = ReturnType<typeof parse>['program']['body'][number];

function rewriteImport(statement: ParsedStatement) {
  if (statement.type !== 'ImportDeclaration') {
    throw new Error('@heliannuuthus/ui: expected an import declaration.');
  }

  const statementIsTypeOnly = statement.importKind === 'type';
  const importsByModule = new Map<string, string[]>();

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

    const importedBinding =
      componentImport.imported === localName
        ? componentImport.imported
        : `${componentImport.imported} as ${localName}`;
    const rewrittenSpecifier =
      specifier.importKind === 'type' && !statementIsTypeOnly
        ? `type ${importedBinding}`
        : importedBinding;
    const moduleImports = importsByModule.get(componentImport.modulePath) ?? [];

    moduleImports.push(rewrittenSpecifier);
    importsByModule.set(componentImport.modulePath, moduleImports);
  }

  return [...importsByModule]
    .map(
      ([modulePath, specifiers]) =>
        `import ${statementIsTypeOnly ? 'type ' : ''}{ ${specifiers.join(', ')} } ` +
        `from '@heliannuuthus/ui/${modulePath}';`
    )
    .join('\n');
}

export function heliannuuthusUI(): ViteLikePlugin {
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

      let rewritten = code;

      for (const statement of rootImports.reverse()) {
        if (statement.start == null || statement.end == null) {
          throw new Error(
            '@heliannuuthus/ui: could not locate a package-root import.'
          );
        }

        rewritten =
          rewritten.slice(0, statement.start) +
          rewriteImport(statement) +
          rewritten.slice(statement.end);
      }

      return { code: rewritten, map: null };
    },
  };
}
