'use client';

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '../lib/utils';

type ResizablePanelConfig = Omit<
  ResizablePrimitive.PanelProps,
  'children' | 'content'
> & {
  content: React.ReactNode;
};

type ResizableProps = Omit<ResizablePrimitive.GroupProps, 'children'> & {
  panels: ResizablePanelConfig[];
  withHandle?: boolean;
  handleClassName?: string;
};

function Resizable({
  className,
  panels,
  withHandle = false,
  handleClassName,
  ...props
}: ResizableProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full aria-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      {panels.map(({ content, id, ...panel }, index) => (
        <React.Fragment key={id ?? index}>
          {index > 0 && (
            <ResizablePrimitive.Separator
              data-slot="resizable-handle"
              className={cn(
                'relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90',
                handleClassName
              )}
            >
              {withHandle && (
                <div className="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" />
              )}
            </ResizablePrimitive.Separator>
          )}
          <ResizablePrimitive.Panel
            data-slot="resizable-panel"
            id={id == null ? String(index) : String(id)}
            {...panel}
          >
            {content}
          </ResizablePrimitive.Panel>
        </React.Fragment>
      ))}
    </ResizablePrimitive.Group>
  );
}

export { Resizable, type ResizablePanelConfig, type ResizableProps };
