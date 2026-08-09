import { Minus, Plus } from 'lucide-react';

import { Accordion } from '../components/accordion';

const items = [
  {
    content: 'Build, type-check, and deploy.',
    title: 'Release checks',
    value: 'release',
  },
] as const;

export const AccordionTypeTest = () => (
  <>
    <Accordion items={items} keepMounted />
    <Accordion items={items} hiddenUntilFound />
    <Accordion
      items={items}
      indicator={
        <Accordion.Indicator position="start">
          {({ disabled, open, value }) => {
            disabled.valueOf();
            value.toUpperCase();
            return open ? <Minus /> : <Plus />;
          }}
        </Accordion.Indicator>
      }
    />

    {/* @ts-expect-error hiddenUntilFound owns the mounted panel strategy. */}
    <Accordion items={items} hiddenUntilFound keepMounted />
    {/* @ts-expect-error State-specific content belongs in Accordion.Indicator. */}
    <Accordion items={items} expandedIndicator={<Minus />} />
    {/* @ts-expect-error Position belongs to Accordion.Indicator. */}
    <Accordion items={items} indicatorPosition="start" />
  </>
);
