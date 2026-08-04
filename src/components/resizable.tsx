'use client';

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '../lib/utils';

type ResizableItemKey = string | number;

type ResizableSeparatorRenderProps = {
  index: number;
  itemKey: ResizableItemKey;
  nextItemKey: ResizableItemKey;
  orientation: NonNullable<ResizablePrimitive.GroupProps['orientation']>;
};

type ResizableSeparator =
  React.ReactNode | ((props: ResizableSeparatorRenderProps) => React.ReactNode);

type ResizableClassNames = {
  panel?: string;
  separator?: string;
};

type ResizableItemOnResize = (
  size: ResizablePrimitive.PanelSize,
  key: ResizableItemKey,
  previousSize: ResizablePrimitive.PanelSize | undefined
) => void;

type ResizableItemSize = readonly [
  defaultSize: NonNullable<ResizablePrimitive.PanelProps['defaultSize']>,
  minSize?: NonNullable<ResizablePrimitive.PanelProps['minSize']>,
  maxSize?: NonNullable<ResizablePrimitive.PanelProps['maxSize']>,
];

type ResizableItem = Pick<
  ResizablePrimitive.PanelProps,
  'collapsedSize' | 'collapsible'
> & {
  key: ResizableItemKey;
  onResize?: ResizableItemOnResize;
  panel: React.ReactNode;
  separator?: ResizableSeparator;
  size?: ResizableItemSize;
};

type ResizableProps = Omit<ResizablePrimitive.GroupProps, 'children'> & {
  classNames?: ResizableClassNames;
  items: ResizableItem[];
  separator?: ResizableSeparator;
};

const Resizable = ({
  className,
  classNames,
  items,
  orientation = 'horizontal',
  separator: defaultSeparator,
  ...props
}: ResizableProps) => {
  const renderSeparator = (
    separator: ResizableSeparator | undefined,
    index: number,
    itemKey: ResizableItemKey,
    nextItemKey: ResizableItemKey
  ) =>
    typeof separator === 'function'
      ? separator({ index, itemKey, nextItemKey, orientation })
      : separator;

  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full aria-[orientation=vertical]:flex-col',
        className
      )}
      orientation={orientation}
      {...props}
    >
      {items.map(
        ({ key, onResize, panel, separator, size, ...panelProps }, index) => (
          <React.Fragment key={key}>
            <ResizablePrimitive.Panel
              data-slot="resizable-panel"
              className={classNames?.panel}
              defaultSize={size?.[0]}
              id={String(key)}
              maxSize={size?.[2]}
              minSize={size?.[1]}
              onResize={
                onResize == null
                  ? undefined
                  : (size, _id, previousSize) =>
                      onResize(size, key, previousSize)
              }
              {...panelProps}
            >
              {panel}
            </ResizablePrimitive.Panel>
            {index < items.length - 1 && (
              <ResizablePrimitive.Separator
                data-slot="resizable-separator"
                className={cn(
                  'relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2',
                  classNames?.separator
                )}
              >
                {renderSeparator(
                  separator === undefined ? defaultSeparator : separator,
                  index,
                  key,
                  items[index + 1]!.key
                )}
              </ResizablePrimitive.Separator>
            )}
          </React.Fragment>
        )
      )}
    </ResizablePrimitive.Group>
  );
};

export {
  Resizable,
  type ResizableClassNames,
  type ResizableItem,
  type ResizableItemKey,
  type ResizableItemOnResize,
  type ResizableItemSize,
  type ResizableProps,
  type ResizableSeparator,
  type ResizableSeparatorRenderProps,
};
