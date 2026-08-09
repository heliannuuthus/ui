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

    {/* @ts-expect-error Filtering is configured through filter. */}
    <Command groups={groups} shouldFilter={false} />
    {/* @ts-expect-error Built-in filtering is the default; true is redundant. */}
    <Command filter groups={groups} />
  </>
);
