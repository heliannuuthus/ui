import { Select } from '../components/select';
import { Slider } from '../components/slider';
import { Switch } from '../components/switch';

const options = [
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' },
] as const;

export function ChangeCallbackTypeTest() {
  return (
    <>
      <Select options={options} onChange={(value) => value?.toUpperCase()} />
      {/* @ts-expect-error Primitive callback names are not public API. */}
      <Select options={options} onValueChange={() => undefined} />

      <Switch onChange={(checked) => checked.valueOf()} />
      {/* @ts-expect-error Primitive callback names are not public API. */}
      <Switch onCheckedChange={() => undefined} />

      <Slider
        onChange={(value) => value.valueOf()}
        onChangeComplete={(value) => value.valueOf()}
      />
      {/* @ts-expect-error Primitive callback names are not public API. */}
      <Slider onValueChange={() => undefined} />
    </>
  );
}
