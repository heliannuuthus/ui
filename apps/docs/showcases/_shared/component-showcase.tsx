import { Button, Typography } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import { ChevronUp, Code2 } from 'lucide-react';
import {
  Children,
  isValidElement,
  type ComponentType,
  type ReactElement,
  type ReactNode,
  useId,
  useState,
} from 'react';
import { resources } from '../../src/i18n/resources';
import '../case.css';

type Locale = 'en' | 'zh';

type LocalizedCopy = Record<Locale, string>;

export type ShowcaseCase = {
  component: ComponentType<{ locale?: Locale }>;
  description: LocalizedCopy;
  title: LocalizedCopy;
};

type ShowcaseSource = ReactElement<{ title?: string }>;

const ShowcaseCaseCard = ({
  Case,
  description,
  locale,
  source,
  title,
}: {
  Case: ShowcaseCase['component'];
  description: string;
  locale: Locale;
  source?: ShowcaseSource;
  title: string;
}) => {
  const labels = resources[locale].common.demo;
  const panelId = useId();
  const [sourceExpanded, setSourceExpanded] = useState(false);

  return (
    <section className="component-case">
      <div className="component-case-copy">
        <Typography.Title level={3}>{title}</Typography.Title>
        {description ? (
          <Typography.Text as="p" size="sm" tone="muted">
            {description}
          </Typography.Text>
        ) : null}
      </div>

      <div
        aria-label={labels.preview}
        className="component-case-preview"
        id={`${panelId}-preview`}
      >
        <Case locale={locale} />
      </div>

      {source ? (
        <div
          aria-label={labels.source}
          className="component-case-source"
          hidden={!sourceExpanded}
          id={`${panelId}-source`}
        >
          {source}
        </div>
      ) : null}

      {source ? (
        <div className="component-case-disclosure">
          <Button
            aria-controls={`${panelId}-source`}
            aria-expanded={sourceExpanded}
            onClick={() => setSourceExpanded((value) => !value)}
            size="xs"
            variant="ghost"
          >
            {sourceExpanded ? (
              <ChevronUp aria-hidden="true" data-icon="inline-start" />
            ) : (
              <Code2 aria-hidden="true" data-icon="inline-start" />
            )}
            {sourceExpanded ? labels.collapseCode : labels.expandCode}
          </Button>
        </div>
      ) : null}
    </section>
  );
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
  const sources = Children.toArray(children).filter(
    isValidElement
  ) as ShowcaseSource[];

  return (
    <div className="component-case-grid">
      {cases.map(({ component: Case, description, title }, index) => (
        <ShowcaseCaseCard
          Case={Case}
          description={description[locale]}
          key={title.en}
          locale={locale}
          source={sources[index]}
          title={title[locale]}
        />
      ))}
    </div>
  );
};
