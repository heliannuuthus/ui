import {
  Alert,
  Collapsible,
  Tabs,
  Tooltip,
  Typography,
} from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import {
  CircleAlert,
  Info,
  Lightbulb,
  Sparkles,
  TriangleAlert,
} from 'lucide-react';
import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

type AdmonitionKind =
  'caution' | 'danger' | 'info' | 'nerd' | 'note' | 'tip' | 'warning';

const admonitionConfig = {
  caution: { icon: TriangleAlert, variant: 'warning' },
  danger: { icon: CircleAlert, variant: 'destructive' },
  info: { icon: Info, variant: 'info' },
  nerd: { icon: Sparkles, variant: 'default' },
  note: { icon: Info, variant: 'info' },
  tip: { icon: Lightbulb, variant: 'success' },
  warning: { icon: TriangleAlert, variant: 'warning' },
} as const;

const isAdmonitionKind = (value: string): value is AdmonitionKind =>
  value in admonitionConfig;

const admonitionTitles = {
  en: {
    caution: 'Caution',
    danger: 'Danger',
    info: 'Information',
    nerd: 'Details',
    note: 'Note',
    tip: 'Tip',
    warning: 'Warning',
  },
  zh: {
    caution: '注意',
    danger: '危险',
    info: '信息',
    nerd: '补充细节',
    note: '说明',
    tip: '提示',
    warning: '警告',
  },
} as const;

const useDocsLocale = () =>
  useLocation().pathname.startsWith('/en/') ? 'en' : 'zh';

export const DocsAdmonition = ({
  children,
  kind = 'note',
  title,
}: {
  children?: ReactNode;
  kind?: AdmonitionKind;
  title?: ReactNode;
}) => {
  const locale = useDocsLocale();
  const config = admonitionConfig[kind] ?? admonitionConfig.note;
  const Icon = config.icon;

  return (
    <Alert
      className="docs-mdx-admonition"
      icon={<Icon aria-hidden="true" />}
      title={title ?? admonitionTitles[locale][kind]}
      variant={config.variant}
    >
      {children}
    </Alert>
  );
};

export const DocsCallout = ({
  children,
  title,
  type = 'note',
}: {
  children?: ReactNode;
  title?: ReactNode;
  type?: string;
}) => (
  <DocsAdmonition kind={isAdmonitionKind(type) ? type : 'note'} title={title}>
    {children}
  </DocsAdmonition>
);

export const DocsCollapse = ({
  children,
  defaultOpen,
  title,
}: {
  children?: ReactNode;
  defaultOpen?: boolean;
  title?: ReactNode;
}) => {
  const locale = useDocsLocale();

  return (
    <Collapsible
      className="docs-mdx-collapse"
      content={<div className="docs-mdx-collapse-content">{children}</div>}
      defaultOpen={defaultOpen}
      header={
        <Typography.Text as="span" weight="semibold">
          {title ?? (locale === 'zh' ? '展开详细内容' : 'Show details')}
        </Typography.Text>
      }
    />
  );
};

export const DocsHint = ({
  children,
  content,
}: {
  children?: ReactNode;
  content?: ReactNode;
}) => {
  if (content == null || content === '') return children;

  return (
    <Tooltip content={content} placement="top">
      <Typography.Text as="span" className="docs-mdx-hint" tabIndex={0}>
        {children}
      </Typography.Text>
    </Tooltip>
  );
};

type DocsTabProps = {
  children?: ReactNode;
  disabled?: boolean;
  label: ReactNode;
  value?: string;
};

export const DocsTab = ({ children }: DocsTabProps) => children;

const isDocsTab = (
  child: ReactNode
): child is ReactElement<DocsTabProps, typeof DocsTab> =>
  isValidElement<DocsTabProps>(child) && child.type === DocsTab;

export const DocsTabs = ({
  children,
  defaultValue,
}: {
  children?: ReactNode;
  defaultValue?: string;
}) => {
  const items = Children.toArray(children)
    .filter(isDocsTab)
    .map((tab, index) => ({
      content: tab.props.children,
      disabled: tab.props.disabled,
      label: tab.props.label,
      value: tab.props.value ?? `tab-${index + 1}`,
    }));

  if (items.length === 0) return children;

  return (
    <Tabs
      className="docs-mdx-tabs"
      defaultValue={defaultValue ?? items[0].value}
      items={items}
      variant="line"
    />
  );
};
