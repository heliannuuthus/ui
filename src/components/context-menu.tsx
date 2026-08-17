'use client';

import * as React from 'react';
import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';

import { cn } from '../lib/utils';
import type { DropdownMenuEntry } from './dropdown-menu';
import type { OpenStateProps } from './internal/public-types';
import { ChevronRightIcon, CheckIcon } from 'lucide-react';

const ContextMenuRoot = ({ ...props }: ContextMenuPrimitive.Root.Props) => {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
};

const ContextMenuTrigger = ({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) => {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn('select-none', className)}
      {...props}
    />
  );
};

const ContextMenuContent = ({
  className,
  align = 'start',
  alignOffset = 4,
  side = 'right',
  sideOffset = 0,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(
            'z-50 max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl bg-popover/95 p-1 text-popover-foreground shadow-lg ring-1 ring-border/60 backdrop-blur-xl duration-100 outline-none data-[side=bottom]:slide-in-from-top-1 data-[side=inline-end]:slide-in-from-left-1 data-[side=inline-start]:slide-in-from-right-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 dark:ring-border/70 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
            className
          )}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<'div'> & {
  inset?: boolean;
}) => {
  return (
    <div
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'px-2.5 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-8.5',
        className
      )}
      {...props}
    />
  );
};

const ContextMenuItem = ({
  className,
  inset,
  variant = 'default',
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) => {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/context-menu-item relative flex min-h-8 cursor-default items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-normal outline-hidden select-none focus:bg-muted focus:text-foreground data-highlighted:bg-muted data-highlighted:text-foreground data-inset:pl-8.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  );
};

const ContextMenuSub = ({
  ...props
}: ContextMenuPrimitive.SubmenuRoot.Props) => {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  );
};

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) => {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "group/context-menu-sub-trigger flex min-h-8 cursor-default items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-normal outline-hidden select-none focus:bg-muted focus:text-foreground data-highlighted:bg-muted data-highlighted:text-foreground data-inset:pl-8.5 data-open:bg-muted data-open:text-foreground data-popup-open:bg-muted data-popup-open:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-3.5 text-muted-foreground group-data-open/context-menu-sub-trigger:text-foreground group-data-popup-open/context-menu-sub-trigger:text-foreground" />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
};

const ContextMenuSubContent = ({
  align = 'start',
  alignOffset = -5,
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) => {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      align={align}
      alignOffset={alignOffset}
      className={cn('min-w-40!', className)}
      side="right"
      sideOffset={sideOffset}
      {...props}
    />
  );
};

const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props & {
  inset?: boolean;
}) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex min-h-8 cursor-default items-center gap-2 rounded-lg py-1.5 pr-8 pl-2.5 text-sm font-normal outline-hidden select-none focus:bg-muted focus:text-foreground data-highlighted:bg-muted data-highlighted:text-foreground data-inset:pl-8.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute right-2">
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
};

const ContextMenuRadioGroup = ({
  ...props
}: ContextMenuPrimitive.RadioGroup.Props) => {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
};

const ContextMenuRadioItem = ({
  className,
  children,
  inset,
  ...props
}: ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean;
}) => {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex min-h-8 cursor-default items-center gap-2 rounded-lg py-1.5 pr-8 pl-2.5 text-sm font-normal outline-hidden select-none focus:bg-muted focus:text-foreground data-highlighted:bg-muted data-highlighted:text-foreground data-inset:pl-8.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2">
        <ContextMenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
};

const ContextMenuSeparator = ({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props) => {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('-mx-1 my-1 h-px bg-border/60', className)}
      {...props}
    />
  );
};

const ContextMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'ml-auto text-xs tracking-wider text-muted-foreground group-focus/context-menu-item:text-foreground',
        className
      )}
      {...props}
    />
  );
};

type ContextMenuClassNames = {
  content?: string;
};

type ContextMenuStyles = {
  content?: React.CSSProperties;
};

type ContextMenuProps = OpenStateProps & {
  classNames?: ContextMenuClassNames;
  disabled?: boolean;
  items: readonly DropdownMenuEntry[];
  styles?: ContextMenuStyles;
  trigger: React.ReactElement;
};

const renderContextMenuEntries = (items: readonly DropdownMenuEntry[]) => {
  return items.map((item, index) => {
    if (item.type === 'separator') {
      return <ContextMenuSeparator key={index} />;
    }
    if (item.type === 'label') {
      return <ContextMenuLabel key={index}>{item.label}</ContextMenuLabel>;
    }
    if (item.type === 'checkbox') {
      return (
        <ContextMenuCheckboxItem
          checked={item.checked}
          disabled={item.disabled}
          key={index}
          onCheckedChange={(checked) => item.onChange?.(checked === true)}
        >
          {item.label}
        </ContextMenuCheckboxItem>
      );
    }
    if (item.type === 'radio') {
      return (
        <ContextMenuRadioGroup
          key={index}
          onValueChange={(value) => item.onChange?.(String(value))}
          value={item.value}
        >
          {item.items.map((option) => (
            <ContextMenuRadioItem
              disabled={option.disabled}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </ContextMenuRadioItem>
          ))}
        </ContextMenuRadioGroup>
      );
    }
    if (item.children?.length) {
      return (
        <ContextMenuSub key={index}>
          <ContextMenuSubTrigger>
            {item.icon}
            {item.label}
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            {renderContextMenuEntries(item.children)}
          </ContextMenuSubContent>
        </ContextMenuSub>
      );
    }
    return (
      <ContextMenuItem
        disabled={item.disabled}
        key={index}
        onClick={item.onSelect}
        render={item.href ? <a href={item.href} /> : undefined}
        variant={item.destructive ? 'destructive' : 'default'}
      >
        {item.icon}
        {item.label}
        {item.shortcut != null ? (
          <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
        ) : null}
      </ContextMenuItem>
    );
  });
};

const ContextMenu = ({
  classNames,
  items,
  styles,
  trigger,
  ...props
}: ContextMenuProps) => {
  return (
    <ContextMenuRoot {...props}>
      <ContextMenuTrigger render={trigger} />
      <ContextMenuContent
        className={classNames?.content}
        style={styles?.content}
      >
        {renderContextMenuEntries(items)}
      </ContextMenuContent>
    </ContextMenuRoot>
  );
};

export {
  ContextMenu,
  type ContextMenuClassNames,
  type ContextMenuProps,
  type ContextMenuStyles,
};
