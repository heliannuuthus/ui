import { useLocation } from '@rspress/core/runtime';
import type { ComponentType } from 'react';
import '../case.css';

type Locale = 'en' | 'zh';

type LocalizedCopy = Record<Locale, string>;

export type ShowcaseCase = {
  component: ComponentType<{ locale?: Locale }>;
  description: LocalizedCopy;
  title: LocalizedCopy;
};

export const ComponentShowcase = ({ cases }: { cases: ShowcaseCase[] }) => {
  const { pathname } = useLocation();
  const locale: Locale = pathname.startsWith('/en/') ? 'en' : 'zh';

  return (
    <div className="component-case-grid">
      {cases.map(({ component: Case, description, title }) => (
        <section className="component-case" key={title.en}>
          <div className="component-case-copy">
            <h3>{title[locale]}</h3>
            {description[locale] ? <p>{description[locale]}</p> : null}
          </div>
          <Case locale={locale} />
        </section>
      ))}
    </div>
  );
};
