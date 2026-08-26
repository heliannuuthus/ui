import { createCasesFromAxes } from './component-harness-cases';
import type { CSSProperties, ReactNode } from 'react';

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

type ComponentHarnessSharedProps = {
  children: (values: ComponentHarnessValues) => ReactNode;
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
  const cases = props.cases ?? createCasesFromAxes(props.axes ?? []);
  const style = props.minCaseWidth
    ? ({
        '--component-harness-case-min-width': `${props.minCaseWidth}px`,
      } as CSSProperties)
    : undefined;

  const renderCase = (
    harnessCase: ComponentHarnessCase,
    options?: { hideHeader?: boolean }
  ) => (
    <section
      aria-label={harnessCase.label}
      className={`component-harness-case${
        options?.hideHeader ? ' component-harness-case-standalone' : ''
      }`}
      key={`${harnessCase.label}-${JSON.stringify(harnessCase.values)}`}
      role="group"
    >
      {!options?.hideHeader ? (
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

  return (
    <div
      className="component-harness component-harness-cases"
      data-slot="component-harness"
      style={style}
    >
      <div className="component-harness-case-grid">
        {cases.map((harnessCase) =>
          renderCase(harnessCase, { hideHeader: cases.length === 1 })
        )}
      </div>
    </div>
  );
};
