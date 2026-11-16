import {
  cn,
  Separator,
  Table,
  Typography,
  type ButtonLinkProps,
} from '@heliannuuthus/ui';
import { MDXProvider } from '@mdx-js/react';
import {
  createContext,
  useContext,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { handbookPageSlugs } from '../src/handbook-navigation';
import { CodeBlock } from './code-block';
import { InternalButtonLink } from './internal-link';
import {
  DocsAdmonition,
  DocsCollapse,
  DocsHint,
  DocsTab,
  DocsTabs,
} from './mdx-directives';

type ChapterSlug = Exclude<
  (typeof handbookPageSlugs)[number],
  'getting-started'
>;
const ChapterContext = createContext<ChapterSlug | null>(null);
const chapterSlugs: ReadonlySet<string> = new Set(
  handbookPageSlugs.filter((slug) => slug !== 'getting-started')
);

const chapterHref = (href: string, chapter: ChapterSlug) => {
  if (href.startsWith('#')) return `#${chapter}-${href.slice(1)}`;
  const match = href.match(
    /^\/(zh|en)\/docs\/([^/.#?]+)(?:\.html)?(?:#(.+))?$/
  );
  if (!match || !chapterSlugs.has(match[2])) return href;
  return `/${match[1]}/#${match[2]}${match[3] ? `-${match[3]}` : ''}`;
};

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Heading = ({
    children,
    className,
    id,
    ...props
  }: ComponentProps<'h1'>) => {
    const chapter = useContext(ChapterContext);
    const resolvedLevel = chapter
      ? (Math.min(level + 2, 6) as typeof level)
      : level;
    const resolvedId = chapter
      ? level === 1
        ? `${chapter}-title`
        : id && `${chapter}-${id}`
      : id;

    return (
      <Typography.Title
        {...props}
        className={cn('docs-mdx-heading', className)}
        id={resolvedId}
        level={resolvedLevel}
      >
        {children}
      </Typography.Title>
    );
  };
  Heading.displayName = `DocsHeading${level}`;
  return Heading;
};

const DocsLink = ({ className, href, ref, ...props }: ComponentProps<'a'>) => {
  const chapter = useContext(ChapterContext);
  void ref;
  if (className?.split(' ').includes('rp-header-anchor')) return null;
  if (href == null) {
    return <a className={className} href={href} {...props} />;
  }

  return (
    <InternalButtonLink
      {...(props as Omit<ButtonLinkProps, 'className' | 'href'>)}
      className={cn('docs-mdx-link', className)}
      href={chapter ? chapterHref(href, chapter) : href}
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
  DocsAdmonition,
  DocsCollapse,
  DocsHint,
  DocsTab,
  DocsTabs,
  a: DocsLink,
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
  ol: ({ className, ...props }: ComponentProps<'ol'>) => (
    <ol className={cn('docs-mdx-list', className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentProps<'p'>) => (
    <Typography.Text
      as="p"
      className={cn('docs-mdx-paragraph', className)}
      {...props}
    />
  ),
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
      classes={{ table: cn('docs-mdx-table', className) }}
      {...props}
    />
  ),
  tbody: (props: ComponentProps<'tbody'>) => <Table.Body {...props} />,
  td: ({ align, className, ...props }: ComponentProps<'td'>) => (
    <Table.Cell
      align={tableAlign(align)}
      className={cn('docs-mdx-table-cell', className)}
      {...props}
    />
  ),
  tfoot: (props: ComponentProps<'tfoot'>) => <Table.Footer {...props} />,
  th: ({ align, className, ...props }: ComponentProps<'th'>) => (
    <Table.Head
      align={tableAlign(align)}
      className={cn('docs-mdx-table-head', className)}
      {...props}
    />
  ),
  thead: (props: ComponentProps<'thead'>) => <Table.Header {...props} />,
  tr: (props: ComponentProps<'tr'>) => <Table.Row {...props} />,
  ul: ({ className, ...props }: ComponentProps<'ul'>) => (
    <ul className={cn('docs-mdx-list', className)} {...props} />
  ),
};

export const DocsMdxProvider = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export const DocsMdxChapter = ({
  children,
  id,
}: {
  children: ReactNode;
  id: ChapterSlug;
}) => (
  <section
    aria-labelledby={`${id}-title`}
    className="home-handbook-chapter"
    id={id}
  >
    <ChapterContext.Provider value={id}>{children}</ChapterContext.Provider>
  </section>
);
