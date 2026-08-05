import { forwardRef } from 'react';

import {
  Form,
  type FormFieldInjectedControlProps,
  type FormFieldProps,
} from '../components/form';
import { Input } from '../components/input';
import { Select } from '../components/select';
import { Slider } from '../components/slider';
import { Switch } from '../components/switch';

type Values = {
  enabled: boolean;
  name: string;
  role: 'admin' | 'member' | null;
  volume: number;
};

type CustomNameControlProps = FormFieldInjectedControlProps<string>;

const CustomNameControl = ({
  onChange,
  value = '',
  ...props
}: CustomNameControlProps) => (
  <input
    {...props}
    onChange={(event) => onChange?.(event.target.value)}
    value={value}
  />
);

type CustomVolumeControlProps = FormFieldInjectedControlProps<number>;

const CustomVolumeControl = forwardRef<
  HTMLButtonElement,
  CustomVolumeControlProps
>(
  (
    { disabled, name, onBlur, onChange, required, value, ...groupProps },
    ref
  ) => (
    <div
      {...groupProps}
      aria-required={required || undefined}
      data-field-name={name}
      role="radiogroup"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onBlur?.();
      }}
    >
      <button
        ref={ref}
        aria-checked={value === 100}
        disabled={disabled}
        onClick={() => onChange?.(100)}
        role="radio"
        type="button"
      >
        100
      </button>
    </div>
  )
);

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' },
] as const;

// @ts-expect-error Form.Field accepts one direct control element.
export const invalidMultipleFormFieldChildren: FormFieldProps<
  Values,
  'name'
>['children'] = [
  <CustomNameControl key="first" />,
  <CustomNameControl key="second" />,
];

// @ts-expect-error Form.Field does not accept text children.
export const invalidTextFormFieldChild: FormFieldProps<
  Values,
  'name'
>['children'] = 'name';

export const FormTypeTest = () => {
  const form = Form.useForm<Values>({
    defaultValues: {
      enabled: false,
      name: '',
      role: null,
      volume: 50,
    },
  });

  return (
    <Form
      form={form}
      onSubmit={(values) => {
        values.name.toUpperCase();
        values.enabled.valueOf();
      }}
    >
      <Form.Field<Values> name="name" label="Name">
        <Input />
      </Form.Field>
      <Form.Field<Values> name="role" label="Role">
        <Select options={roleOptions} />
      </Form.Field>
      <Form.Field<Values> name="enabled" label="Enabled">
        <Switch />
      </Form.Field>
      <Form.Field<Values> name="volume" label="Volume">
        <Slider min={0} max={100} />
      </Form.Field>
      <Form.Field<Values, 'volume'> name="volume" label="Custom volume">
        <CustomVolumeControl />
      </Form.Field>
      <Form.Field<Values, 'name'>
        name="name"
        label="Custom name"
        description="Injected with the public accessibility contract."
      >
        <CustomNameControl />
      </Form.Field>
      {/* @ts-expect-error Unknown field names must be rejected. */}
      <Form.Field<Values> name="missing">
        <Input />
      </Form.Field>
    </Form>
  );
};
