import { docsCopy } from './i18n/content';
import type { ReactNode } from 'react';
import { Card, type CardProps } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
import { Typography } from '@heliannuuthus/ui';
import { Highlight, type Language } from 'prism-react-renderer';
import { docsSyntaxTheme } from './syntax-theme';

type SyntaxCodeProps = {
  action?: ReactNode;
  className?: string;
  code: string;
  fileName?: string;
  language?: Language;
  radius?: 'default' | 'sm' | 'none';
  showLineNumbers?: boolean;
  variant?: CardProps['variant'];
};

export const SyntaxCode = ({
  action,
  className,
  code,
  fileName = 'example.tsx',
  language = 'tsx',
  radius = 'sm',
  showLineNumbers = true,
  variant = 'outline',
}: SyntaxCodeProps) => {
  const normalizedCode = code.replace(/^\n/, '').trimEnd();
  const lineCount = normalizedCode.split('\n').length;

  return (
    <Card
      className={`syntax-code${radius === 'sm' ? ' rounded-lg' : ''}${
        radius === 'none' ? ' rounded-none' : ''
      }${className ? ` ${className}` : ''}`}
      classNames={{
        header: 'syntax-code-toolbar',
        title: 'syntax-code-title',
        action: 'syntax-code-action',
        content: 'syntax-code-body',
      }}
      data-language={language}
      data-line-count={lineCount}
      variant={variant}
      header={{
        title: (
          <Stack
            align="center"
            block
            gap={16}
            justify="between"
            orientation="horizontal"
          >
            <Stack align="center" gap={8} orientation="horizontal">
              <Typography.Text
                as="small"
                size="sm"
                weight="medium"
                className="font-heading font-bold"
              >
                {fileName}
              </Typography.Text>
            </Stack>
            <Stack
              align="center"
              className="syntax-code-meta"
              gap={8}
              orientation="horizontal"
              separator={<i />}
            >
              <span>{language.toUpperCase()}</span>
              <span>
                {lineCount}
                {docsCopy('行')}
              </span>
            </Stack>
          </Stack>
        ),
        action,
      }}
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
};
