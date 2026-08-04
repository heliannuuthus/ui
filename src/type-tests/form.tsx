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

export function FormTypeTest() {
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
      <Form.Item<Values> name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item<Values> name="role" label="Role">
        <Select options={roleOptions} />
      </Form.Item>
      <Form.Item<Values> name="enabled" label="Enabled">
        <Switch />
      </Form.Item>
      <Form.Item<Values> name="volume" label="Volume">
        <Slider min={0} max={100} />
      </Form.Item>
      {/* @ts-expect-error Unknown field names must be rejected. */}
      <Form.Item<Values> name="missing">
        <Input />
      </Form.Item>
    </Form>
  );
}
