import {
  cn,
  Separator,
  Table,
  Typography,
  type ButtonLinkProps,
} from '@heliannuuthus/ui';
import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps, ReactNode } from 'react';
import { CodeBlock } from './code-block';
import { InternalButtonLink } from './internal-link';

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Heading = ({ children, ...props }: ComponentProps<'h1'>) => (
    <Typography.Title level={level} {...props}>
      {children}
    </Typography.Title>
  );
  Heading.displayName = `DocsHeading${level}`;
  return Heading;
};

const link = ({ className, href, ref, ...props }: ComponentProps<'a'>) => {
  void ref;
  if (href == null || className?.split(' ').includes('rp-header-anchor')) {
    return <a className={className} href={href} {...props} />;
  }

  return (
    <InternalButtonLink
      {...(props as Omit<ButtonLinkProps, 'className' | 'href'>)}
      className={cn('docs-mdx-link', className)}
      href={href}
      size="sm"
      variant="link"
    />
  );
};

const tableAlign = (align: ComponentProps<'td'>['align']) => {
  if (align === 'center') return 'center';
  if (align === 'right') return 'end';
  return 'start';
};

const components = {
  a: link,
  blockquote: ({ className, ...props }: ComponentProps<'blockquote'>) => (
    <Typography.Blockquote
      className={cn('docs-mdx-blockquote', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentProps<'code'>) => (
    <Typography.Code className={cn('docs-mdx-code', className)} {...props} />
  ),
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  hr: () => <Separator className="docs-mdx-separator" />,
  li: ({ children, ...props }: ComponentProps<'li'>) => (
    <li {...props}>
      <Typography.Text as="span">{children}</Typography.Text>
    </li>
  ),
  p: (props: ComponentProps<'p'>) => <Typography.Text as="p" {...props} />,
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
  small: (props: ComponentProps<'small'>) => (
    <Typography.Text as="small" size="sm" {...props} />
  ),
  table: ({ className, ...props }: ComponentProps<'table'>) => (
    <Table.Primitive
      className="docs-mdx-table-wrap"
      classNames={{ table: cn('docs-mdx-table', className) }}
      {...props}
    />
  ),
  tbody: (props: ComponentProps<'tbody'>) => <Table.Body {...props} />,
  td: ({ align, ...props }: ComponentProps<'td'>) => (
    <Table.Cell align={tableAlign(align)} {...props} />
  ),
  tfoot: (props: ComponentProps<'tfoot'>) => <Table.Footer {...props} />,
  th: ({ align, ...props }: ComponentProps<'th'>) => (
    <Table.Head align={tableAlign(align)} {...props} />
  ),
  thead: (props: ComponentProps<'thead'>) => <Table.Header {...props} />,
  tr: (props: ComponentProps<'tr'>) => <Table.Row {...props} />,
};

export const DocsMdxProvider = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
