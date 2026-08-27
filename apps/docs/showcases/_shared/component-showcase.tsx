import { Collapsible } from '@heliannuuthus/ui';
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
            <h3>{title[locale]}</h3>
            {description[locale] ? <p>{description[locale]}</p> : null}
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
                  <span className="component-case-source-label-closed">
                    {locale === 'zh' ? '查看代码' : 'View source'}
                  </span>
                  <span className="component-case-source-label-open">
                    {locale === 'zh' ? '收起代码' : 'Hide source'}
                  </span>
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
