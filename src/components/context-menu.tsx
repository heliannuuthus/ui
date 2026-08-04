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
            'z-50 max-h-(--available-height) min-w-48 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-3xl p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!',
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
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) => {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'px-3 py-2.5 text-xs text-muted-foreground data-inset:pl-9.5',
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
        "group/context-menu-item relative flex cursor-default items-center gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive",
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
        "flex cursor-default items-center rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
};

const ContextMenuSubContent = ({
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) => {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      className="shadow-lg animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!"
      side="right"
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
        "relative flex cursor-default items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
        "relative flex cursor-default items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
      className={cn('-mx-1.5 my-1.5 h-px bg-border/50', className)}
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
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground',
        className
      )}
      {...props}
    />
  );
};

type ContextMenuProps = OpenStateProps & {
  contentClassName?: string;
  disabled?: boolean;
  highlightItemOnHover?: boolean;
  items: readonly DropdownMenuEntry[];
  loopFocus?: boolean;
  orientation?: 'horizontal' | 'vertical';
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
  contentClassName,
  items,
  trigger,
  ...props
}: ContextMenuProps) => {
  return (
    <ContextMenuRoot {...props}>
      <ContextMenuTrigger render={trigger} />
      <ContextMenuContent className={contentClassName}>
        {renderContextMenuEntries(items)}
      </ContextMenuContent>
    </ContextMenuRoot>
  );
};

export { ContextMenu, type ContextMenuProps };
