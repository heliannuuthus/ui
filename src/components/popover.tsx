import * as React from 'react';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';
import { useRender } from '@base-ui/react/use-render';

import { cn } from '../lib/utils';
import type {
  OpenStateProps,
  PopupAlign,
  PopupSide,
} from './internal/public-types';

type PopoverTriggerMode = 'click' | 'hover';

type ClickPopoverRootProps = PopoverPrimitive.Root.Props & {
  trigger?: 'click';
  delay?: number;
  closeDelay?: number;
};

type HoverPopoverRootProps = PreviewCardPrimitive.Root.Props & {
  trigger: 'hover';
  delay?: number;
  closeDelay?: number;
};

type PopoverRootProps = ClickPopoverRootProps | HoverPopoverRootProps;

type PopoverTriggerContextValue = {
  trigger: PopoverTriggerMode;
  delay: number;
  closeDelay: number;
};

const PopoverTriggerContext =
  React.createContext<PopoverTriggerContextValue | null>(null);

const PopoverRoot = ({
  trigger = 'click',
  delay = 300,
  closeDelay = 150,
  ...props
}: PopoverRootProps) => {
  const context = { trigger, delay, closeDelay };

  if (trigger === 'hover') {
    return (
      <PopoverTriggerContext.Provider value={context}>
        <PreviewCardPrimitive.Root
          data-slot="popover"
          {...(props as PreviewCardPrimitive.Root.Props)}
        />
      </PopoverTriggerContext.Provider>
    );
  }

  return (
    <PopoverTriggerContext.Provider value={context}>
      <PopoverPrimitive.Root
        data-slot="popover"
        {...(props as PopoverPrimitive.Root.Props)}
      />
    </PopoverTriggerContext.Provider>
  );
};

type PopoverTriggerProps =
  | Omit<PopoverPrimitive.Trigger.Props, 'openOnHover' | 'delay' | 'closeDelay'>
  | Omit<PreviewCardPrimitive.Trigger.Props, 'delay' | 'closeDelay'>;

const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  const context = React.useContext(PopoverTriggerContext);

  if (context?.trigger === 'hover') {
    return (
      <PreviewCardPrimitive.Trigger
        data-slot="popover-trigger"
        delay={context.delay}
        closeDelay={context.closeDelay}
        {...(props as PreviewCardPrimitive.Trigger.Props)}
      />
    );
  }

  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      {...(props as PopoverPrimitive.Trigger.Props)}
    />
  );
};

type PopoverContentProps = PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >;

const popoverContentClassName =
  'z-50 flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95';

const PopoverContent = ({
  className,
  align = 'center',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 4,
  ...props
}: PopoverContentProps) => {
  const context = React.useContext(PopoverTriggerContext);

  if (context?.trigger === 'hover') {
    return (
      <PreviewCardPrimitive.Portal>
        <PreviewCardPrimitive.Positioner
          align={align}
          alignOffset={alignOffset}
          side={side}
          sideOffset={sideOffset}
          className="isolate z-50"
        >
          <PreviewCardPrimitive.Popup
            data-slot="popover-content"
            className={cn(popoverContentClassName, className)}
            {...(props as PreviewCardPrimitive.Popup.Props)}
          />
        </PreviewCardPrimitive.Positioner>
      </PreviewCardPrimitive.Portal>
    );
  }

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(popoverContentClassName, className)}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
};

const PopoverHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="popover-header"
      className={cn('flex flex-col gap-1 text-sm', className)}
      {...props}
    />
  );
};

const HoverPopoverTitle = ({
  className,
  render,
  ...props
}: PopoverPrimitive.Title.Props) => {
  return useRender({
    defaultTagName: 'h2',
    render,
    props: {
      ...props,
      'data-slot': 'popover-title',
      className: cn('text-base font-medium', className),
    },
  });
};

const PopoverTitle = ({
  className,
  ...props
}: PopoverPrimitive.Title.Props) => {
  const context = React.useContext(PopoverTriggerContext);

  if (context?.trigger === 'hover') {
    return <HoverPopoverTitle className={className} {...props} />;
  }

  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn('text-base font-medium', className)}
      {...props}
    />
  );
};

const HoverPopoverDescription = ({
  className,
  render,
  ...props
}: PopoverPrimitive.Description.Props) => {
  return useRender({
    defaultTagName: 'p',
    render,
    props: {
      ...props,
      'data-slot': 'popover-description',
      className: cn('text-muted-foreground', className),
    },
  });
};

const PopoverDescription = ({
  className,
  ...props
}: PopoverPrimitive.Description.Props) => {
  const context = React.useContext(PopoverTriggerContext);

  if (context?.trigger === 'hover') {
    return <HoverPopoverDescription className={className} {...props} />;
  }

  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn('text-muted-foreground', className)}
      {...props}
    />
  );
};

type PopoverClassNames = {
  content?: string;
};

type PopoverStyles = {
  content?: React.CSSProperties;
};

type PopoverProps = OpenStateProps & {
  align?: PopupAlign;
  alignOffset?: number;
  closeDelay?: number;
  classNames?: PopoverClassNames;
  content: React.ReactNode;
  delay?: number;
  description?: React.ReactNode;
  modal?: boolean | 'trap-focus';
  side?: PopupSide;
  sideOffset?: number;
  styles?: PopoverStyles;
  title?: React.ReactNode;
  trigger: React.ReactElement;
  triggerMode?: PopoverTriggerMode;
};

const Popover = ({
  align,
  alignOffset,
  closeDelay,
  classNames,
  content,
  delay,
  description,
  side,
  sideOffset,
  styles,
  title,
  trigger,
  triggerMode = 'click',
  ...props
}: PopoverProps) => {
  const rootProps = {
    closeDelay,
    delay,
    trigger: triggerMode,
    ...props,
  } as PopoverRootProps;

  return (
    <PopoverRoot {...rootProps}>
      <PopoverTrigger render={trigger} />
      <PopoverContent
        align={align}
        alignOffset={alignOffset}
        className={classNames?.content}
        side={side}
        sideOffset={sideOffset}
        style={styles?.content}
      >
        {title != null || description != null ? (
          <PopoverHeader>
            {title != null ? <PopoverTitle>{title}</PopoverTitle> : null}
            {description != null ? (
              <PopoverDescription>{description}</PopoverDescription>
            ) : null}
          </PopoverHeader>
        ) : null}
        {content}
      </PopoverContent>
    </PopoverRoot>
  );
};

export { Popover };
export type {
  PopoverClassNames,
  PopoverProps,
  PopoverStyles,
  PopoverTriggerMode,
};
