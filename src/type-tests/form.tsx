import * as React from 'react';

import { Form, type FormControlProps } from '../components/form';
import { Input } from '../components/input';
import { Select } from '../components/select';
import { Slider } from '../components/slider';
import { Switch } from '../components/switch';

type Values = {
  enabled: boolean;
  name: string;
  priority: Priority;
  role: 'admin' | 'member' | null;
  volume: number;
};

type Priority = '' | 'routine' | 'urgent';

type PriorityControlProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'defaultValue' | 'onBlur' | 'onChange'
> &
  FormControlProps<Priority>;

const PriorityControlRoot = React.forwardRef<
  HTMLButtonElement,
  PriorityControlProps
>(({ disabled, onBlur, onChange, value = '', ...groupProps }, ref) => {
  return (
    <div {...groupProps} role="radiogroup">
      <button
        ref={ref}
        aria-checked={value === 'urgent'}
        disabled={disabled}
        onBlur={onBlur}
        onClick={() => onChange?.('urgent')}
        role="radio"
        type="button"
      >
        Urgent
      </button>
    </div>
  );
});

const PriorityControl = Form.defineControl(PriorityControlRoot, {
  semantics: 'group',
});

const InvalidControl = React.forwardRef<HTMLButtonElement, { value: Priority }>(
  ({ value }, ref) => {
    return <button ref={ref}>{value}</button>;
  }
);

// @ts-expect-error Custom controls must implement the complete control protocol.
Form.defineControl(InvalidControl);

const NamePreview = () => {
  const name = Form.useFieldValue<Values, 'name'>('name');

  return <output>{name.toUpperCase()}</output>;
};

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' },
] as const;

export const FormTypeTest = () => {
  const form = Form.useForm<Values>({
    defaultValues: {
      enabled: false,
      name: '',
      priority: '',
      role: null,
      volume: 50,
    },
  });
  const readName = () => form.getValue('name').toUpperCase();
  const subscribeToEnabled = () =>
    form.subscribe('enabled', (enabled) => enabled.valueOf());

  void readName;
  void subscribeToEnabled;

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
      <Form.Field<Values> name="priority" label="Priority">
        <PriorityControl />
      </Form.Field>
      <NamePreview />
      <Form.Field<Values, 'name'>
        name="name"
        label="Custom name"
        description="Rendered with the public accessibility contract."
      >
        {({ controlProps, field, fieldState }) => (
          <input
            {...controlProps}
            ref={field.ref as React.Ref<HTMLInputElement>}
            value={field.value}
            onBlur={field.onBlur}
            onChange={(event) => field.onChange(event.target.value)}
            data-invalid={fieldState.invalid || undefined}
          />
        )}
      </Form.Field>
      {/* @ts-expect-error Unknown field names must be rejected. */}
      <Form.Field<Values> name="missing">
        <Input />
      </Form.Field>
      {/* @ts-expect-error Unknown observed field names must be rejected. */}
      {Form.useFieldValue<Values>('missing')}
    </Form>
  );
};
