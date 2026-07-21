import { useId, useState, type ReactNode } from 'react';
import { Stack } from '@heliannuuthus/ui/stack';

export type ComponentHarnessOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

export type ComponentHarnessControl = {
  defaultValue?: string;
  label: string;
  name: string;
  options: ComponentHarnessOption[];
};

export type ComponentHarnessValues = Record<string, string>;

type ComponentHarnessProps = {
  children: (values: ComponentHarnessValues) => ReactNode;
  controls: ComponentHarnessControl[];
};

function getInitialValues(controls: ComponentHarnessControl[]) {
  return Object.fromEntries(
    controls.map((control) => [
      control.name,
      control.defaultValue ?? control.options[0]?.value ?? '',
    ])
  );
}

export function ComponentHarness({
  children,
  controls,
}: ComponentHarnessProps) {
  const labelPrefix = useId();
  const [values, setValues] = useState<ComponentHarnessValues>(() =>
    getInitialValues(controls)
  );

  return (
    <div className="component-harness" data-slot="component-harness">
      <div className="component-harness-controls">
        <Stack align="start" gap="lg" orientation="horizontal" wrap>
          {controls.map((control) => {
            const labelId = `${labelPrefix}-${control.name}`;
            return (
              <div className="component-harness-control" key={control.name}>
                <span id={labelId}>{control.label}</span>
                <Stack
                  align="center"
                  aria-labelledby={labelId}
                  gap={4}
                  orientation="horizontal"
                  role="group"
                  wrap
                >
                  {control.options.map((option) => {
                    const selected = values[control.name] === option.value;
                    return (
                      <button
                        aria-pressed={selected}
                        className="component-harness-option"
                        data-selected={selected || undefined}
                        disabled={option.disabled}
                        key={option.value}
                        onClick={() =>
                          setValues((current) => ({
                            ...current,
                            [control.name]: option.value,
                          }))
                        }
                        type="button"
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </Stack>
              </div>
            );
          })}
        </Stack>
      </div>
      <div className="component-harness-stage">{children(values)}</div>
    </div>
  );
}
