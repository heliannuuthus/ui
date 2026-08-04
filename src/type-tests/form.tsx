import { Form } from '../components/form';
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

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' },
] as const;

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
    </Form>
  );
};
