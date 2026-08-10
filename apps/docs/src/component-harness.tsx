import { createCasesFromAxes } from './component-harness-cases';
import type { CSSProperties, ReactNode } from 'react';
import { Tabs } from '@heliannuuthus/ui';
import { useTranslation } from 'react-i18next';

export type ComponentHarnessProperties = Record<
  string,
  boolean | null | number | string
>;

export type ComponentHarnessCase = {
  description?: string;
  isDefault?: boolean;
  label: string;
  properties?: ComponentHarnessProperties;
  values: ComponentHarnessValues;
};

export type ComponentHarnessCaseOption = {
  label: string;
  properties?: ComponentHarnessProperties;
  value: string;
};

export type ComponentHarnessCaseAxis = {
  defaultValue?: string;
  label: string;
  name: string;
  options: ComponentHarnessCaseOption[];
  property?: false | string;
};

export type ComponentHarnessValues = Record<string, string>;

export type ComponentHarnessLayout = 'grid' | 'segmented';

type ComponentHarnessSharedProps = {
  children: (values: ComponentHarnessValues) => ReactNode;
  layout?: ComponentHarnessLayout;
  minCaseWidth?: number;
};

type ComponentHarnessCaseProps = ComponentHarnessSharedProps & {
  axes?: never;
  cases: ComponentHarnessCase[];
};

type ComponentHarnessAxisProps = ComponentHarnessSharedProps & {
  axes: ComponentHarnessCaseAxis[];
  cases?: never;
};

type ComponentHarnessProps =
  ComponentHarnessCaseProps | ComponentHarnessAxisProps;

export const ComponentHarness = (props: ComponentHarnessProps) => {
  const { t } = useTranslation();
  const cases = props.cases ?? createCasesFromAxes(props.axes ?? []);
  const style = props.minCaseWidth
    ? ({
        '--component-harness-case-min-width': `${props.minCaseWidth}px`,
      } as CSSProperties)
    : undefined;

  const renderCase = (
    harnessCase: ComponentHarnessCase,
    options?: { compactHeader?: boolean; hideHeader?: boolean }
  ) => (
    <section
      aria-label={harnessCase.label}
      className={`component-harness-case${
        options?.compactHeader ? ' component-harness-case-segmented' : ''
      }${options?.hideHeader ? ' component-harness-case-standalone' : ''}`}
      key={`${harnessCase.label}-${JSON.stringify(harnessCase.values)}`}
      role="group"
    >
      {!options?.compactHeader && !options?.hideHeader ? (
        <header className="component-harness-case-header">
          <div className="component-harness-case-copy">
            <h4>{harnessCase.label}</h4>
            {harnessCase.description ? <p>{harnessCase.description}</p> : null}
          </div>
        </header>
      ) : null}
      <div className="component-harness-case-stage">
        {props.children(harnessCase.values)}
      </div>
    </section>
  );

  if (props.layout === 'segmented') {
    const defaultIndex = Math.max(
      0,
      cases.findIndex((harnessCase) => harnessCase.isDefault)
    );

    return (
      <div
        className="component-harness component-harness-cases component-harness-segmented"
        data-slot="component-harness"
        style={style}
      >
        <Tabs
          aria-label={t('components.properties')}
          centered
          defaultValue={`case-${defaultIndex}`}
          items={cases.map((harnessCase, index) => ({
            content: renderCase(harnessCase, { compactHeader: true }),
            label: harnessCase.label,
            value: `case-${index}`,
          }))}
          classNames={{ panel: 'component-harness-segmented-panel' }}
          variant="outline"
        />
      </div>
    );
  }

  return (
    <div
      className="component-harness component-harness-cases"
      data-slot="component-harness"
      style={style}
    >
      <div
        className={`component-harness-case-grid component-harness-case-grid-${props.layout ?? 'grid'}`}
      >
        {cases.map((harnessCase) =>
          renderCase(harnessCase, { hideHeader: cases.length === 1 })
        )}
      </div>
    </div>
  );
};
