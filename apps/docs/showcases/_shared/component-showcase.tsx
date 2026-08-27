import { Collapsible, Typography } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import {
  Children,
  isValidElement,
  type ComponentType,
  type ReactNode,
} from 'react';
import '../case.css';

type Locale = 'en' | 'zh';

type LocalizedCopy = Record<Locale, string>;

export type ShowcaseCase = {
  component: ComponentType<{ locale?: Locale }>;
  description: LocalizedCopy;
  title: LocalizedCopy;
};

export const ComponentShowcase = ({
  cases,
  children,
}: {
  cases: ShowcaseCase[];
  children?: ReactNode;
}) => {
  const { pathname } = useLocation();
  const locale: Locale = pathname.startsWith('/en/') ? 'en' : 'zh';
  const sources = Children.toArray(children).filter(isValidElement);

  return (
    <div className="component-case-grid">
      {cases.map(({ component: Case, description, title }, index) => (
        <section className="component-case" key={title.en}>
          <div className="component-case-copy">
            <Typography.Title level={3}>{title[locale]}</Typography.Title>
            {description[locale] ? (
              <Typography.Text as="p" size="sm" tone="muted">
                {description[locale]}
              </Typography.Text>
            ) : null}
          </div>
          <Case locale={locale} />
          {sources[index] ? (
            <Collapsible
              className="component-case-source"
              classNames={{
                content: 'component-case-source-content',
                header: 'component-case-source-header',
              }}
              content={sources[index]}
              trigger={
                <span className="component-case-source-label">
                  <Typography.Text
                    as="span"
                    className="component-case-source-label-closed"
                    size="sm"
                  >
                    {locale === 'zh' ? '查看代码' : 'View source'}
                  </Typography.Text>
                  <Typography.Text
                    as="span"
                    className="component-case-source-label-open"
                    size="sm"
                  >
                    {locale === 'zh' ? '收起代码' : 'Hide source'}
                  </Typography.Text>
                </span>
              }
              triggerProps={{ size: 'sm', variant: 'ghost' }}
            />
          ) : null}
        </section>
      ))}
    </div>
  );
};
