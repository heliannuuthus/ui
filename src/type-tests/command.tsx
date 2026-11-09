import { Command, type CommandFilter } from '../components/command';

const groups = [
  {
    options: [{ label: 'Open settings', value: 'settings' }],
  },
] as const;

const startsWithFilter: CommandFilter = (value, search, keywords) =>
  [value, ...(keywords ?? [])].some((candidate) =>
    candidate.toLowerCase().startsWith(search.toLowerCase())
  )
    ? 1
    : 0;

export const CommandFilterTypeTest = () => (
  <>
    <Command groups={groups} />
    <Command filter={false} groups={groups} />
    <Command filter={startsWithFilter} groups={groups} />
    <Command
      groups={groups}
      input={{
        placeholder: 'Search',
        value: 'query',
        onChange: (value) => value.toUpperCase(),
      }}
      pointerSelection={false}
      vim
    />
    {/* @ts-expect-error 搜索占位文本统一放在 input 中。 */}
    <Command groups={groups} placeholder="Search" />
    {/* @ts-expect-error 指针选择使用正向布尔值。 */}
    <Command groups={groups} disablePointerSelection />

    {/* @ts-expect-error Filtering is configured through filter. */}
    <Command groups={groups} shouldFilter={false} />
    {/* @ts-expect-error Built-in filtering is the default; true is redundant. */}
    <Command filter groups={groups} />
  </>
);
