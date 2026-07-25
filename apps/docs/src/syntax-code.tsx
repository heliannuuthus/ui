import type { ReactNode } from 'react';
import { Card, type CardProps } from '@heliannuuthus/ui/card';
import { Stack } from '@heliannuuthus/ui/stack';
import { Small as TypographySmall } from '@heliannuuthus/ui/typography';
import {
  Highlight,
  type Language,
  type PrismTheme,
} from 'prism-react-renderer';

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
  radius?: CardProps['radius'];
  showLineNumbers?: boolean;
  variant?: CardProps['variant'];
};

export function SyntaxCode({
  action,
  className,
  code,
  fileName = 'example.tsx',
  language = 'tsx',
  radius = 'sm',
  showLineNumbers = true,
  variant = 'outline',
}: SyntaxCodeProps) {
  const normalizedCode = code.replace(/^\n/, '').trimEnd();
  const lineCount = normalizedCode.split('\n').length;

  return (
    <Card
      className={`syntax-code${className ? ` ${className}` : ''}`}
      classNames={{
        header: 'syntax-code-toolbar',
        title: 'syntax-code-title',
        action: 'syntax-code-action',
        content: 'syntax-code-body',
      }}
      data-language={language}
      data-line-count={lineCount}
      radius={radius}
      variant={variant}
      title={
        <Stack
          align="center"
          block
          gap={16}
          justify="between"
          orientation="horizontal"
        >
          <Stack align="center" gap={8} orientation="horizontal">
            <TypographySmall className="font-heading font-bold">
              {fileName}
            </TypographySmall>
          </Stack>
          <Stack
            align="center"
            className="syntax-code-meta"
            gap={8}
            orientation="horizontal"
            separator={<i />}
          >
            <span>{language.toUpperCase()}</span>
            <span>{lineCount} 行</span>
          </Stack>
        </Stack>
      }
      action={action}
    >
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
    </Card>
  );
}
