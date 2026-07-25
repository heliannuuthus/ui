import type { ReactNode } from 'react';
import { Badge } from '@heliannuuthus/ui/badge';

export type ComponentHarnessCase = {
  description?: string;
  isDefault?: boolean;
  label: string;
  values: ComponentHarnessValues;
};

export type ComponentHarnessCaseOption = {
  label: string;
  value: string;
};

export type ComponentHarnessCaseAxis = {
  defaultValue?: string;
  label: string;
  name: string;
  options: ComponentHarnessCaseOption[];
};

export type ComponentHarnessValues = Record<string, string>;

type ComponentHarnessCaseProps = {
  axes?: never;
  cases: ComponentHarnessCase[];
  children: (values: ComponentHarnessValues) => ReactNode;
};

type ComponentHarnessAxisProps = {
  axes: ComponentHarnessCaseAxis[];
  cases?: never;
  children: (values: ComponentHarnessValues) => ReactNode;
};

type ComponentHarnessProps =
  ComponentHarnessCaseProps | ComponentHarnessAxisProps;

type CaseCombination = {
  descriptions: string[];
  isDefault: boolean;
  labels: string[];
  values: ComponentHarnessValues;
};

function createCasesFromAxes(
  axes: ComponentHarnessCaseAxis[]
): ComponentHarnessCase[] {
  const combinations = axes.reduce<CaseCombination[]>(
    (currentCases, axis) =>
      currentCases.flatMap((currentCase) => {
        const defaultValue = axis.defaultValue ?? axis.options[0]?.value ?? '';

        return axis.options.map((option) => ({
          descriptions: [
            ...currentCase.descriptions,
            `${axis.label}：${option.label}`,
          ],
          isDefault: currentCase.isDefault && option.value === defaultValue,
          labels: [...currentCase.labels, option.label],
          values: {
            ...currentCase.values,
            [axis.name]: option.value,
          },
        }));
      }),
    [
      {
        descriptions: [],
        isDefault: true,
        labels: [],
        values: {},
      },
    ]
  );

  return combinations.map((combination) => ({
    description: combination.descriptions.join('；'),
    isDefault: combination.isDefault,
    label: combination.labels.join(' · '),
    values: combination.values,
  }));
}

export function ComponentHarness(props: ComponentHarnessProps) {
  const cases = props.cases ?? createCasesFromAxes(props.axes ?? []);

  return (
    <div
      className="component-harness component-harness-cases"
      data-slot="component-harness"
    >
      <div className="component-harness-case-grid">
        {cases.map((harnessCase) => (
          <section
            aria-label={harnessCase.label}
            className="component-harness-case"
            key={`${harnessCase.label}-${JSON.stringify(harnessCase.values)}`}
            role="group"
          >
            <header className="component-harness-case-header">
              <div className="component-harness-case-copy">
                <h4>{harnessCase.label}</h4>
                {harnessCase.description ? (
                  <p>{harnessCase.description}</p>
                ) : null}
              </div>
              {harnessCase.isDefault ? (
                <Badge variant="secondary">默认</Badge>
              ) : null}
            </header>
            <div className="component-harness-case-stage">
              {props.children(harnessCase.values)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
