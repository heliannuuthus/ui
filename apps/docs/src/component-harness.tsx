import { docsCopy } from './i18n/content';
import type { CSSProperties, ReactNode } from 'react';
import { Badge, Tabs } from '@heliannuuthus/ui';
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
  value: string;
};

export type ComponentHarnessCaseAxis = {
  defaultValue?: string;
  label: string;
  name: string;
  options: ComponentHarnessCaseOption[];
};

export type ComponentHarnessValues = Record<string, string>;

export type ComponentHarnessLayout = 'grid' | 'segmented' | 'stack';

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

type CaseCombination = {
  descriptions: string[];
  isDefault: boolean;
  labels: string[];
  values: ComponentHarnessValues;
};

const formatPropertyValue = (
  value: ComponentHarnessProperties[string]
): string => {
  if (typeof value === 'string') return JSON.stringify(value);
  return String(value);
};

const createCasesFromAxes = (
  axes: ComponentHarnessCaseAxis[]
): ComponentHarnessCase[] => {
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
};

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
    options?: { compactHeader?: boolean }
  ) => (
    <section
      aria-label={harnessCase.label}
      className={`component-harness-case${
        options?.compactHeader ? ' component-harness-case-segmented' : ''
      }`}
      key={`${harnessCase.label}-${JSON.stringify(harnessCase.values)}`}
      role="group"
    >
      {options?.compactHeader ? null : (
        <header className="component-harness-case-header">
          <div className="component-harness-case-copy">
            <h4>{harnessCase.label}</h4>
            {harnessCase.description ? <p>{harnessCase.description}</p> : null}
            <dl
              aria-label={t('components.properties')}
              className="component-harness-case-properties"
            >
              {Object.entries(harnessCase.properties ?? harnessCase.values).map(
                ([name, value]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{formatPropertyValue(value)}</dd>
                  </div>
                )
              )}
            </dl>
          </div>
          {harnessCase.isDefault ? (
            <Badge variant="secondary">{docsCopy('默认')}</Badge>
          ) : null}
        </header>
      )}
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
        {cases.map((harnessCase) => renderCase(harnessCase))}
      </div>
    </div>
  );
};
