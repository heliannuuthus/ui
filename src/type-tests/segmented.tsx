import {
  Segmented,
  type SegmentedClassNames,
  type SegmentedOption,
  type SegmentedStyles,
} from '../index';

const classNames: SegmentedClassNames = {
  indicator: 'indicator',
  item: 'item',
  label: 'label',
};
const styles: SegmentedStyles = {
  indicator: { opacity: 1 },
  item: { minWidth: 80 },
  label: { gap: 4 },
};
const numericOptions: readonly SegmentedOption<number>[] = [
  { label: 'Day', value: 1 },
  { disabled: true, label: 'Week', value: 7 },
];

export const segmentedTypeTests = (
  <>
    <Segmented
      aria-label="View"
      classNames={classNames}
      defaultValue="list"
      onChange={(value) => value satisfies string}
      options={['list', 'board', 'timeline']}
      styles={styles}
    />
    <Segmented<number>
      block
      defaultValue={1}
      onChange={(value) => value satisfies number}
      options={numericOptions}
      orientation="vertical"
      size="lg"
    />
    <Segmented
      aria-label="No current selection"
      options={['list', 'board']}
      value={null}
    />
    {/* @ts-expect-error The value must match the option value type. */}
    <Segmented<number> options={numericOptions} value="1" />
    {/* @ts-expect-error Segmented uses explicit sm, md, and lg names. */}
    <Segmented options={['list']} size="default" />
  </>
);
