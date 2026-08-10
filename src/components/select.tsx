'use client';

import * as React from 'react';
import { Combobox as SelectPrimitive } from '@base-ui/react';
import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import {
  Addon as InputGroupAddon,
  Button as InputGroupButton,
  Input as InputGroupInput,
  InputGroup,
} from './internal/input-group';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

type SelectValue<
  Value,
  Multiple extends boolean | undefined,
> = Multiple extends true ? Value[] : Value;

type SelectRootProps<Value, Multiple extends boolean | undefined = false> = {
  autoComplete?: 'list' | 'both' | 'inline' | 'none';
  autoHighlight?: boolean;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  defaultValue?: SelectValue<Value, Multiple> | null;
  /** The uncontrolled search query when the select is initially rendered. */
  defaultSearchValue?: string;
  disabled?: boolean;
  filter?: null | ((item: Value, query: string) => boolean);
  form?: string;
  highlightItemOnHover?: boolean;
  id?: string;
  isItemEqualToValue?: (item: Value, value: Value) => boolean;
  items?: readonly Value[];
  itemToStringLabel?: (item: Value) => string;
  itemToStringValue?: (item: Value) => string;
  limit?: number;
  locale?: Intl.LocalesArgument;
  loopFocus?: boolean;
  modal?: boolean;
  multiple?: Multiple;
  name?: string;
  onOpenChange?: (open: boolean) => void;
  onOpenChangeComplete?: (open: boolean) => void;
  open?: boolean;
  openOnInputClick?: boolean;
  readOnly?: boolean;
  required?: boolean;
  /** The controlled search query used to filter items. */
  searchValue?: string;
  value?: SelectValue<Value, Multiple> | null;
  /** Called when the selected value changes. */
  onChange?: (
    value: SelectValue<Value, Multiple> | (Multiple extends true ? never : null)
  ) => void;
  /** Called when the search query changes. */
  onSearch?: (searchValue: string) => void;
};

const SelectRoot = <Value, Multiple extends boolean | undefined = false>({
  defaultSearchValue,
  searchValue,
  onChange,
  onOpenChange,
  onSearch,
  ...props
}: SelectRootProps<Value, Multiple>) => {
  const handleSearchChange: SelectPrimitive.Root.Props<
    Value,
    Multiple
  >['onInputValueChange'] = onSearch
    ? (nextSearchValue, eventDetails) => {
        if (
          eventDetails.reason === 'input-change' ||
          eventDetails.reason === 'input-clear'
        ) {
          onSearch(nextSearchValue);
        }
      }
    : undefined;

  return (
    <SelectPrimitive.Root
      defaultInputValue={defaultSearchValue}
      inputValue={searchValue}
      onInputValueChange={handleSearchChange}
      onOpenChange={onOpenChange ? (open) => onOpenChange(open) : undefined}
      onValueChange={onChange ? (value) => onChange(value) : undefined}
      {...props}
    />
  );
};

const SelectTriggerButton = ({
  className,
  children,
  'aria-label': ariaLabel = 'Toggle options',
  ...props
}: SelectPrimitive.Trigger.Props) => {
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
};

const SelectClear = ({
  className,
  'aria-label': ariaLabel = 'Clear selection',
  ...props
}: SelectPrimitive.Clear.Props) => {
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
};

type SelectTriggerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'children' | 'className'
> & {
  children?: React.ReactNode;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  showClear?: boolean;
  showTrigger?: boolean;
};

const SelectTrigger = ({
  className,
  children,
  disabled = false,
  inputRef,
  showTrigger = true,
  showClear = false,
  ...props
}: SelectTriggerProps) => {
  return (
    <InputGroup data-slot="select-trigger" className={cn('w-auto', className)}>
      <SelectPrimitive.Input
        ref={inputRef}
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <SelectTriggerButton
            render={<InputGroupButton size="icon-xs" variant="ghost" />}
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
};

const SelectContent = ({
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
  >) => {
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
};

const SelectList = ({ className, ...props }: SelectPrimitive.List.Props) => {
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
};

const SelectItem = ({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) => {
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
};

const SelectGroup = ({ className, ...props }: SelectPrimitive.Group.Props) => {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  );
};

const SelectLabel = ({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn('px-3 py-2.5 text-xs text-muted-foreground', className)}
      {...props}
    />
  );
};

const SelectCollection = ({ ...props }: SelectPrimitive.Collection.Props) => {
  return (
    <SelectPrimitive.Collection data-slot="select-collection" {...props} />
  );
};

const SelectEmpty = ({ className, ...props }: SelectPrimitive.Empty.Props) => {
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
};

const SelectSeparator = ({
  className,
  ...props
}: SelectPrimitive.Separator.Props) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('-mx-1.5 my-1.5 h-px bg-border', className)}
      {...props}
    />
  );
};

const useSelectAnchor = () => {
  return React.useRef<HTMLDivElement | null>(null);
};

type SelectOption<Value> = {
  disabled?: boolean;
  label: React.ReactNode;
  value: Value;
};

type SelectOptionGroup<Value> = {
  label: React.ReactNode;
  options: readonly SelectOption<Value>[];
};

type SelectClassNames = {
  trigger?: string;
};

type SelectStyles = {
  trigger?: React.CSSProperties;
};

type SelectProps<Value, Multiple extends boolean | undefined = false> = Omit<
  SelectRootProps<Value, Multiple>,
  'children' | 'items'
> & {
  classNames?: SelectClassNames;
  emptyText?: React.ReactNode;
  options: readonly (SelectOption<Value> | SelectOptionGroup<Value>)[];
  placeholder?: string;
  showClear?: boolean;
  styles?: SelectStyles;
  triggerProps?: Omit<
    React.ComponentProps<typeof SelectTrigger>,
    'children' | 'className' | 'placeholder' | 'showClear' | 'style'
  >;
};

const Select = <Value, Multiple extends boolean | undefined = false>({
  defaultValue,
  classNames,
  disabled,
  emptyText = '没有找到选项',
  id,
  name,
  onChange,
  options,
  placeholder,
  required,
  showClear,
  styles,
  triggerProps,
  value,
  ...props
}: SelectProps<Value, Multiple>) => {
  const formControl = useFormControl<
    SelectValue<Value, Multiple> | null | undefined
  >();
  const flatOptions = options.flatMap((option) =>
    'options' in option ? option.options : [option]
  );
  const {
    'aria-describedby': triggerAriaDescribedBy,
    'aria-invalid': triggerAriaInvalid,
    id: triggerId,
    onBlur: triggerOnBlur,
    inputRef: triggerRef,
    ...otherTriggerProps
  } = triggerProps ?? {};
  const controlRef = useMergedRefs(
    triggerRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );

  return (
    <SelectRoot
      {...props}
      defaultValue={formControl ? undefined : defaultValue}
      disabled={disabled || formControl?.disabled}
      id={id}
      items={flatOptions.map((option) => option.value)}
      name={formControl?.name ?? name}
      onChange={(nextValue) => {
        onChange?.(nextValue);
        formControl?.onChange(nextValue);
      }}
      required={required || formControl?.required}
      value={
        formControl
          ? (formControl.value as SelectValue<Value, Multiple> | null)
          : value
      }
    >
      <SelectTrigger
        {...otherTriggerProps}
        aria-describedby={mergeIds(
          triggerAriaDescribedBy,
          formControl?.descriptionId,
          formControl?.messageId
        )}
        aria-invalid={triggerAriaInvalid ?? formControl?.invalid}
        className={classNames?.trigger}
        id={triggerId ?? formControl?.controlId ?? id}
        onBlur={(event) => {
          triggerOnBlur?.(event);
          formControl?.onBlur();
        }}
        placeholder={placeholder}
        inputRef={controlRef}
        showClear={showClear}
        style={styles?.trigger}
      />
      <SelectContent>
        <SelectEmpty>{emptyText}</SelectEmpty>
        <SelectList>
          {options.map((option, index) =>
            'options' in option ? (
              <SelectGroup
                items={option.options.map((item) => item.value)}
                key={index}
              >
                {index > 0 ? <SelectSeparator /> : null}
                <SelectLabel>{option.label}</SelectLabel>
                <SelectCollection>
                  {(value: Value) => {
                    const item = option.options.find(
                      (candidate) => candidate.value === value
                    );
                    return item ? (
                      <SelectItem
                        disabled={item.disabled}
                        key={String(item.value)}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    ) : null;
                  }}
                </SelectCollection>
              </SelectGroup>
            ) : (
              <SelectItem
                disabled={option.disabled}
                key={String(option.value)}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            )
          )}
        </SelectList>
      </SelectContent>
    </SelectRoot>
  );
};

registerFormControl(Select);

export { Select, useSelectAnchor };
export type {
  SelectOption,
  SelectOptionGroup,
  SelectProps,
  SelectClassNames,
  SelectStyles,
  SelectTriggerProps,
  SelectValue,
};
