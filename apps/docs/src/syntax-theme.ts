import type { PrismTheme } from 'prism-react-renderer';

export const docsSyntaxTheme: PrismTheme = {
  plain: {
    color: 'var(--syntax-plain)',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: 'var(--syntax-comment)', fontStyle: 'italic' },
    },
    {
      types: ['punctuation'],
      style: { color: 'var(--syntax-punctuation)' },
    },
    {
      types: ['namespace'],
      style: { opacity: 0.75 },
    },
    {
      types: ['property', 'tag', 'constant', 'symbol', 'deleted'],
      style: { color: 'var(--syntax-property)' },
    },
    {
      types: ['boolean', 'number'],
      style: { color: 'var(--syntax-number)' },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'inserted'],
      style: { color: 'var(--syntax-string)' },
    },
    {
      types: ['operator', 'entity', 'url', 'string-variable'],
      style: { color: 'var(--syntax-operator)' },
    },
    {
      types: ['atrule', 'attr-value', 'builtin', 'keyword'],
      style: { color: 'var(--syntax-keyword)' },
    },
    {
      types: ['function', 'class-name', 'maybe-class-name'],
      style: { color: 'var(--syntax-function)' },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: { color: 'var(--syntax-variable)' },
    },
  ],
};
