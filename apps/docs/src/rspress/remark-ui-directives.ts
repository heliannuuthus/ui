import { visit } from 'unist-util-visit';

type DirectiveAttributeValue = null | string;

type DirectiveNode = {
  attributes?: Record<string, null | string | undefined>;
  children: Array<DirectiveNode | Record<string, unknown>>;
  data?: { directiveLabel?: boolean };
  name: string;
  type: 'containerDirective' | 'leafDirective' | 'textDirective';
  value?: string;
};

type MdxJsxAttribute = {
  name: string;
  type: 'mdxJsxAttribute';
  value: DirectiveAttributeValue;
};

type MdxJsxElement = {
  attributes: MdxJsxAttribute[];
  children: DirectiveNode['children'];
  name: string;
  type: 'mdxJsxFlowElement' | 'mdxJsxTextElement';
};

const admonitionNames = new Set([
  'caution',
  'danger',
  'info',
  'nerd',
  'note',
  'tip',
  'warning',
]);

const attribute = (
  name: string,
  value: null | string | undefined
): MdxJsxAttribute | null =>
  value === undefined ? null : { name, type: 'mdxJsxAttribute', value };

const attributes = (
  entries: Array<[string, null | string | undefined]>
): MdxJsxAttribute[] =>
  entries
    .map(([name, value]) => attribute(name, value))
    .filter((value): value is MdxJsxAttribute => value != null);

const textContent = (node: DirectiveNode | Record<string, unknown>): string => {
  if ('value' in node && typeof node.value === 'string') return node.value;
  if (!('children' in node) || !Array.isArray(node.children)) return '';
  return node.children.map((child) => textContent(child)).join('');
};

const takeLabel = (node: DirectiveNode) => {
  let label: string | undefined;
  const children = node.children.filter((child) => {
    const data =
      'data' in child && child.data != null && typeof child.data === 'object'
        ? (child.data as Record<string, unknown>)
        : null;
    if (data?.directiveLabel !== true) return true;
    label = textContent(child).trim() || undefined;
    return false;
  });
  return { children, label };
};

const jsxElement = (
  node: DirectiveNode,
  name: string,
  elementAttributes: MdxJsxAttribute[]
): MdxJsxElement => ({
  attributes: elementAttributes,
  children: node.children,
  name,
  type:
    node.type === 'textDirective' ? 'mdxJsxTextElement' : 'mdxJsxFlowElement',
});

const transformDirective = (node: DirectiveNode): MdxJsxElement | null => {
  const attrs = node.attributes ?? {};

  if (admonitionNames.has(node.name)) {
    const { children, label } = takeLabel(node);
    node.children = children;
    return jsxElement(
      node,
      'DocsAdmonition',
      attributes([
        ['kind', node.name],
        ['title', attrs.title ?? label],
      ])
    );
  }

  if (node.name === 'collapse') {
    const { children, label } = takeLabel(node);
    node.children = children;
    return jsxElement(
      node,
      'DocsCollapse',
      attributes([
        ['title', attrs.title ?? label],
        ['defaultOpen', attrs.defaultOpen === 'true' ? null : undefined],
      ])
    );
  }

  if (node.name === 'hint' && node.type === 'textDirective') {
    return jsxElement(
      node,
      'DocsHint',
      attributes([['content', attrs.title ?? attrs.id ?? attrs.description]])
    );
  }

  if (node.name === 'tabs') {
    return jsxElement(
      node,
      'DocsTabs',
      attributes([['defaultValue', attrs.defaultValue ?? attrs.value]])
    );
  }

  if (node.name === 'tab') {
    const { children, label } = takeLabel(node);
    node.children = children;
    return jsxElement(
      node,
      'DocsTab',
      attributes([
        ['label', attrs.label ?? label ?? attrs.value ?? 'Tab'],
        ['value', attrs.value],
        ['disabled', attrs.disabled === 'true' ? null : undefined],
      ])
    );
  }

  return null;
};

export const remarkUiDirectives = () => (tree: unknown) => {
  visit(
    tree as never,
    ['containerDirective', 'leafDirective', 'textDirective'],
    (node, index, parent) => {
      if (index == null || parent == null) return;
      const replacement = transformDirective(node as unknown as DirectiveNode);
      if (replacement != null) {
        const children = (parent as unknown as { children: unknown[] })
          .children;
        children[index] = replacement;
      }
    },
    true
  );
};
