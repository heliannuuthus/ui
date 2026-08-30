import { Select, type SelectProps } from '../components/select';

const stringOptions = [
  { label: 'Design', value: 'design' },
  { label: 'Engineering', value: 'engineering' },
] as const;

const numberOptions = [
  { label: 'Ten', value: 10 },
  { label: 'Twenty', value: 20 },
] as const;

const numericProps = {
  onChange: (value) => value?.toFixed(),
  options: numberOptions,
  value: 10,
} satisfies SelectProps<number>;

export const SelectTypeTest = () => (
  <>
    <Select
      options={stringOptions}
      onChange={(value) => value?.toUpperCase()}
    />
    <Select<number> {...numericProps} />
    <Select
      options={[
        {
          label: <span aria-hidden="true">Visual label</span>,
          textValue: 'Accessible label',
          value: 'visual',
        },
      ]}
    />

    {/* @ts-expect-error Multiple selection belongs in a dedicated component. */}
    <Select multiple options={stringOptions} />
    {/* @ts-expect-error Popup state is intentionally internal. */}
    <Select open options={stringOptions} />
    {/* @ts-expect-error Input props are exposed deliberately, not as a broad bag. */}
    <Select options={stringOptions} triggerProps={{ autoFocus: true }} />
    {/* @ts-expect-error Select values are intentionally primitive. */}
    <Select options={[{ label: 'Object', value: { id: 1 } }]} />
  </>
);
