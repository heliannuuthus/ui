import { Card, Masonry, Typography } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import { CodeBlockDisclosureContext } from '../../theme/code-block-disclosure';
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
  span?: 'auto' | 'full';
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
  const titleId = `${panelId}-title`;
  const [sourceExpanded, setSourceExpanded] = useState(false);
  const sourceContent = source ? (
    <CodeBlockDisclosureContext.Provider
      value={{
        expanded: sourceExpanded,
        onExpandedChange: setSourceExpanded,
        panelId: `${panelId}-source`,
      }}
    >
      <div aria-label={labels.source} className="component-case-source">
        {source}
      </div>
    </CodeBlockDisclosureContext.Provider>
  ) : undefined;

  return (
    <Card
      aria-labelledby={titleId}
      className="component-case"
      classNames={{
        content: 'component-case-content',
        description: 'component-case-description',
        footer: 'component-case-footer',
        header: 'component-case-header',
        title: 'component-case-title',
      }}
      footer={sourceContent}
      header={{
        title: (
          <Typography.Title id={titleId} level={3}>
            {title}
          </Typography.Title>
        ),
        description: description ? (
          <Typography.Text as="p" size="sm" tone="muted">
            {description}
          </Typography.Text>
        ) : undefined,
      }}
      role="region"
      variant="outline"
    >
      <div
        aria-label={labels.preview}
        className="component-case-preview"
        id={`${panelId}-preview`}
      >
        <Case locale={locale} />
      </div>
    </Card>
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
    <Masonry
      className="component-showcase-flow"
      columns={3}
      gap={16}
      items={cases.map(
        ({ component: Case, description, span = 'auto', title }, index) => ({
          content: (
            <ShowcaseCaseCard
              Case={Case}
              description={description[locale]}
              locale={locale}
              source={sources[index]}
              title={title[locale]}
            />
          ),
          key: title.en,
          span,
        })
      )}
      minColumnWidth="26rem"
    />
  );
};
