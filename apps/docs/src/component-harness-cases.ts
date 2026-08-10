import type {
  ComponentHarnessCase,
  ComponentHarnessCaseAxis,
  ComponentHarnessProperties,
  ComponentHarnessValues,
} from './component-harness';

type CaseCombination = {
  descriptions: string[];
  isDefault: boolean;
  labels: string[];
  properties: ComponentHarnessProperties;
  values: ComponentHarnessValues;
};

export const createCasesFromAxes = (
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
          properties: {
            ...currentCase.properties,
            ...(axis.property === false
              ? {}
              : { [axis.property ?? axis.name]: option.value }),
            ...option.properties,
          },
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
        properties: {},
        values: {},
      },
    ]
  );

  return combinations.map((combination) => ({
    description: combination.descriptions.join('；'),
    isDefault: combination.isDefault,
    label: combination.labels.join(' · '),
    properties: combination.properties,
    values: combination.values,
  }));
};
