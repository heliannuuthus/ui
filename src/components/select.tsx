'use client';

import * as React from 'react';
import { Combobox as SelectPrimitive } from '@base-ui/react';
import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from './button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from './input-group';

type SelectProps<Value, Multiple extends boolean | undefined = false> = Omit<
  SelectPrimitive.Root.Props<Value, Multiple>,
  'defaultInputValue' | 'inputValue' | 'onInputValueChange' | 'onValueChange'
> & {
  /** The uncontrolled search query when the select is initially rendered. */
  defaultSearchValue?: SelectPrimitive.Root.Props<
    Value,
    Multiple
  >['defaultInputValue'];
  /** The controlled search query used to filter items. */
  searchValue?: SelectPrimitive.Root.Props<Value, Multiple>['inputValue'];
  /** Called when the selected value changes. */
  onChange?: SelectPrimitive.Root.Props<Value, Multiple>['onValueChange'];
  /** Called when the search query changes. */
  onSearch?: SelectPrimitive.Root.Props<Value, Multiple>['onInputValueChange'];
};

function Select<Value, Multiple extends boolean | undefined = false>({
  defaultSearchValue,
  searchValue,
  onChange,
  onSearch,
  ...props
}: SelectProps<Value, Multiple>) {
  const handleSearchChange: SelectPrimitive.Root.Props<
    Value,
    Multiple
  >['onInputValueChange'] = onSearch
    ? (nextSearchValue, eventDetails) => {
        if (
          eventDetails.reason === 'input-change' ||
          eventDetails.reason === 'input-clear'
        ) {
          onSearch(nextSearchValue, eventDetails);
        }
      }
    : undefined;

  return (
    <SelectPrimitive.Root
      defaultInputValue={defaultSearchValue}
      inputValue={searchValue}
      onInputValueChange={handleSearchChange}
      onValueChange={onChange}
      {...props}
    />
  );
}

function SelectValue({ ...props }: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTriggerButton({
  className,
  children,
  'aria-label': ariaLabel = 'Toggle options',
  ...props
}: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger-button"
      aria-label={ariaLabel}
      className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
    </SelectPrimitive.Trigger>
  );
}

function SelectClear({
  className,
  'aria-label': ariaLabel = 'Clear selection',
  ...props
}: SelectPrimitive.Clear.Props) {
  return (
    <SelectPrimitive.Clear
      data-slot="select-clear"
      aria-label={ariaLabel}
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </SelectPrimitive.Clear>
  );
}

function SelectTrigger({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: SelectPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) {
  return (
    <InputGroup data-slot="select-trigger" className={cn('w-auto', className)}>
      <SelectPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            render={<SelectTriggerButton />}
            data-slot="input-group-button"
            className="group-has-data-[slot=select-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          />
        )}
        {showClear && <SelectClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  );
}

function SelectContent({
  className,
  side = 'bottom',
  sideOffset = 6,
  align = 'start',
  alignOffset = 0,
  anchor,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    'side' | 'align' | 'sideOffset' | 'alignOffset' | 'anchor'
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-chips={!!anchor}
          className={cn(
            'group/select-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover/70 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1.5 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input *:data-[slot=input-group]:bg-background *:data-[slot=input-group]:shadow-none dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!',
            className
          )}
          {...props}
        />
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectList({ className, ...props }: SelectPrimitive.List.Props) {
  return (
    <SelectPrimitive.List
      data-slot="select-list"
      className={cn(
        'no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1.5 overflow-y-auto overscroll-contain p-1.5 data-empty:p-0',
        className
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn('px-3 py-2.5 text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

function SelectCollection({ ...props }: SelectPrimitive.Collection.Props) {
  return (
    <SelectPrimitive.Collection data-slot="select-collection" {...props} />
  );
}

function SelectEmpty({ className, ...props }: SelectPrimitive.Empty.Props) {
  return (
    <SelectPrimitive.Empty
      data-slot="select-empty"
      className={cn(
        'hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/select-content:flex',
        className
      )}
      {...props}
    />
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('-mx-1.5 my-1.5 h-px bg-border', className)}
      {...props}
    />
  );
}

function SelectChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SelectPrimitive.Chips> &
  SelectPrimitive.Chips.Props) {
  return (
    <SelectPrimitive.Chips
      data-slot="select-chips"
      className={cn(
        'flex min-h-9 flex-wrap items-center gap-1.5 rounded-3xl border border-input bg-background bg-clip-padding px-3 py-1.5 text-sm transition-[color,box-shadow,background-color,border-color] hover:border-primary/35 focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/20 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=select-chip]:px-1.5 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  );
}

function SelectChip({
  className,
  children,
  showRemove = true,
  ...props
}: SelectPrimitive.Chip.Props & {
  showRemove?: boolean;
}) {
  return (
    <SelectPrimitive.Chip
      data-slot="select-chip"
      className={cn(
        'flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-3xl bg-input px-2 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=select-chip-remove]:pr-0 dark:bg-input/60',
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <SelectPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="select-chip-remove"
        >
          <XIcon className="pointer-events-none" />
        </SelectPrimitive.ChipRemove>
      )}
    </SelectPrimitive.Chip>
  );
}

function SelectChipsInput({
  className,
  ...props
}: SelectPrimitive.Input.Props) {
  return (
    <SelectPrimitive.Input
      data-slot="select-chip-input"
      className={cn('min-w-16 flex-1 outline-none', className)}
      {...props}
    />
  );
}

function useSelectAnchor() {
  return React.useRef<HTMLDivElement | null>(null);
}

export {
  Select,
  SelectChip,
  SelectChips,
  SelectChipsInput,
  SelectClear,
  SelectCollection,
  SelectContent,
  SelectEmpty,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  useSelectAnchor,
};
export type { SelectProps };
