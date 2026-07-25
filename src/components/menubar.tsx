import * as React from 'react';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { Menubar as MenubarPrimitive } from '@base-ui/react/menubar';

import { cn } from '../lib/utils';
import type { DropdownMenuEntry } from './dropdown-menu';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';

function MenubarRoot({ className, ...props }: MenubarPrimitive.Props) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn('flex h-9 items-center rounded-3xl border p-1', className)}
      {...props}
    />
  );
}

function MenubarMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;
}

function MenubarTrigger({ className, ...props }: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        'flex items-center rounded-2xl px-2 py-0.75 text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-accent aria-expanded:text-primary',
        className
      )}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className="isolate z-50 outline-none"
      >
        <MenuPrimitive.Popup
          data-slot="menubar-content"
          className={cn(
            'min-w-48 rounded-3xl p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!',
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  return (
    <MenuPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/menubar-item gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      )}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(
        'relative flex cursor-default items-center gap-2.5 rounded-2xl py-2 pr-3 pl-9.5 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-3 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function MenubarRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-2.5 rounded-2xl py-2 pr-3 pl-9.5 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-3 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

function MenubarSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="menubar-separator"
      className={cn('-mx-1 my-1 h-px bg-border/50', className)}
      {...props}
    />
  );
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground',
        className
      )}
      {...props}
    />
  );
}

function MenubarSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "gap-2 rounded-2xl px-3 py-2 text-sm font-medium focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {props.children}
      <ChevronRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function MenubarSubContent({ className, ...props }: MenuPrimitive.Popup.Props) {
  return (
    <MenubarContent
      data-slot="menubar-sub-content"
      align="start"
      alignOffset={-3}
      side="right"
      sideOffset={0}
      className={cn(
        'min-w-32 rounded-3xl p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!',
        className
      )}
      {...props}
    />
  );
}

type MenubarMenuConfig = {
  label: React.ReactNode;
  items: DropdownMenuEntry[];
  disabled?: boolean;
};

type MenubarProps = Omit<MenubarPrimitive.Props, 'children'> & {
  menus: MenubarMenuConfig[];
  size?: 'sm' | 'default' | 'lg';
};

function renderMenubarEntries(items: DropdownMenuEntry[]) {
  return items.map((item, index) => {
    if (item.type === 'separator') {
      return <MenubarSeparator key={index} />;
    }

    if (item.type === 'label') {
      return (
        <div
          key={index}
          data-slot="menubar-label"
          className="px-3.5 py-2.5 text-xs text-muted-foreground"
        >
          {item.label}
        </div>
      );
    }

    if (item.type === 'checkbox') {
      return (
        <MenubarCheckboxItem
          key={index}
          checked={item.checked}
          disabled={item.disabled}
          onCheckedChange={(checked) =>
            item.onCheckedChange?.(checked === true)
          }
        >
          {item.label}
        </MenubarCheckboxItem>
      );
    }

    if (item.type === 'radio') {
      return (
        <MenubarRadioGroup
          key={index}
          value={item.value}
          onValueChange={(value) => item.onValueChange?.(String(value))}
        >
          {item.items.map((option) => (
            <MenubarRadioItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenubarRadioItem>
          ))}
        </MenubarRadioGroup>
      );
    }

    if (item.children?.length) {
      return (
        <MenubarSub key={index}>
          <MenubarSubTrigger>
            {item.icon}
            {item.label}
          </MenubarSubTrigger>
          <MenubarSubContent>
            {renderMenubarEntries(item.children)}
          </MenubarSubContent>
        </MenubarSub>
      );
    }

    return (
      <MenubarItem
        key={index}
        disabled={item.disabled}
        variant={item.destructive ? 'destructive' : 'default'}
        onClick={item.onSelect}
        render={item.href ? <a href={item.href} /> : undefined}
      >
        {item.icon}
        {item.label}
        {item.shortcut != null && (
          <MenubarShortcut>{item.shortcut}</MenubarShortcut>
        )}
      </MenubarItem>
    );
  });
}

function Menubar({
  menus,
  size = 'default',
  className,
  ...props
}: MenubarProps) {
  return (
    <MenubarRoot
      data-size={size}
      className={cn(size === 'sm' && 'h-8', size === 'lg' && 'h-11', className)}
      {...props}
    >
      {menus.map((menu, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger
            disabled={menu.disabled}
            className={cn(
              size === 'sm' && 'px-2 py-0.5 text-xs',
              size === 'lg' && 'px-3.5 py-1.5 text-base'
            )}
          >
            {menu.label}
          </MenubarTrigger>
          <MenubarContent>{renderMenubarEntries(menu.items)}</MenubarContent>
        </MenubarMenu>
      ))}
    </MenubarRoot>
  );
}

export { Menubar, type MenubarMenuConfig, type MenubarProps };
