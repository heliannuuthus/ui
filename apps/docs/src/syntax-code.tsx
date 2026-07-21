import type { ReactNode } from 'react';
import {
  Highlight,
  type Language,
  type PrismTheme,
} from 'prism-react-renderer';
import { FileCode2 } from 'lucide-react';

const docsSyntaxTheme: PrismTheme = {
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
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: { color: 'var(--syntax-string)' },
    },
    {
      types: ['operator', 'entity', 'url', 'string-variable'],
      style: { color: 'var(--syntax-operator)' },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: { color: 'var(--syntax-keyword)' },
    },
    {
      types: ['function', 'class-name'],
      style: { color: 'var(--syntax-function)' },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: { color: 'var(--syntax-variable)' },
    },
  ],
};

type SyntaxCodeProps = {
  action?: ReactNode;
  className?: string;
  code: string;
  fileName?: string;
  language?: Language;
  showLineNumbers?: boolean;
};

export function SyntaxCode({
  action,
  className,
  code,
  fileName = 'example.tsx',
  language = 'tsx',
  showLineNumbers = true,
}: SyntaxCodeProps) {
  const normalizedCode = code.replace(/^\n/, '').trimEnd();
  const lineCount = normalizedCode.split('\n').length;

  return (
    <div
      className={`syntax-code${className ? ` ${className}` : ''}`}
      data-language={language}
    >
      <div className="syntax-code-toolbar">
        <div className="syntax-code-file">
          <span aria-hidden="true">
            <FileCode2 />
          </span>
          <strong>{fileName}</strong>
        </div>
        <div className="syntax-code-meta" aria-hidden="true">
          <span>{language.toUpperCase()}</span>
          <i />
          <span>{lineCount} 行</span>
        </div>
        {action ? <div className="syntax-code-action">{action}</div> : null}
      </div>
      <Highlight
        code={normalizedCode}
        language={language}
        theme={docsSyntaxTheme}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="syntax-code-pre" tabIndex={0}>
            <code>
              {tokens.map((line, lineIndex) => (
                <span
                  {...getLineProps({ line, key: lineIndex })}
                  className="syntax-code-line"
                  key={lineIndex}
                >
                  {showLineNumbers ? (
                    <span className="syntax-code-number" aria-hidden="true">
                      {lineIndex + 1}
                    </span>
                  ) : null}
                  <span className="syntax-code-content">
                    {line.map((token, tokenIndex) => (
                      <span
                        {...getTokenProps({ token, key: tokenIndex })}
                        key={tokenIndex}
                      />
                    ))}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
