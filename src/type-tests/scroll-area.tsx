import { createRef } from 'react';

import {
  ScrollArea,
  type ScrollAreaScrollbarConfig,
} from '../components/scroll-area';

const rootRef = createRef<HTMLDivElement>();

const scrollbar = {
  size: 'sm',
  visibility: 'auto',
} satisfies ScrollAreaScrollbarConfig;

export const ScrollAreaTypeTest = () => (
  <>
    <ScrollArea orientation="both" ref={rootRef} scrollbar={scrollbar}>
      Content
    </ScrollArea>
    <ScrollArea scrollbar={{ size: 12, visibility: 'always' }}>
      Always visible
    </ScrollArea>
    <ScrollArea scrollbar={{ visibility: 'hidden' }}>Hidden</ScrollArea>

    {/* @ts-expect-error The viewport is an internal implementation detail. */}
    <ScrollArea viewportProps={{ tabIndex: 0 }}>
      Invalid viewport props
    </ScrollArea>
    {/* @ts-expect-error Edge fades are not part of the public API. */}
    <ScrollArea fadeEdges>Invalid fade configuration</ScrollArea>
    {/* @ts-expect-error Scrollbar size accepts presets or pixel numbers. */}
    <ScrollArea scrollbar={{ size: 'xl' }}>Invalid scrollbar size</ScrollArea>
  </>
);

// @ts-expect-error Scrollbar parts are private and configured through scrollbar.
const ScrollAreaBar = ScrollArea.Bar;

void ScrollAreaBar;
