import { Typography } from '@heliannuuthus/ui';
import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps, ReactNode } from 'react';
import { CodeBlock } from './code-block';

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Heading = ({ children, ...props }: ComponentProps<'h1'>) => (
    <Typography.Title level={level} {...props}>
      {children}
    </Typography.Title>
  );
  Heading.displayName = `DocsHeading${level}`;
  return Heading;
};

const components = {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  pre: ({
    children,
    lang,
    title,
    ...props
  }: ComponentProps<'pre'> & { lang?: string }) => (
    <CodeBlock lang={lang} title={title}>
      <pre {...props}>{children}</pre>
    </CodeBlock>
  ),
};

export const DocsMdxProvider = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
