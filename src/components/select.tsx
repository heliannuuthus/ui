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

type SelectValue = string | number;

type SelectRootProps<Value> = {
  children?: React.ReactNode;
  defaultValue?: Value | null;
  disabled?: boolean;
  form?: string;
  id?: string;
  isItemEqualToValue?: (item: Value, value: Value) => boolean;
  items?: readonly Value[];
  itemToStringLabel?: (item: Value) => string;
  itemToStringValue?: (item: Value) => string;
  name?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: Value | null;
  /** Called when the selected value changes. */
  onChange?: (value: Value | null) => void;
};

const SelectRoot = <Value,>({ onChange, ...props }: SelectRootProps<Value>) => {
  return (
    <SelectPrimitive.Root
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
            'group/select-content relative max-h-(--available-height) w-max max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover/70 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 data-[chips=true]:w-(--anchor-width) data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1.5 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input *:data-[slot=input-group]:bg-background *:data-[slot=input-group]:shadow-none dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!',
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
        "relative flex w-full cursor-default items-center gap-2.5 overflow-hidden rounded-2xl py-2 pr-8 pl-3 text-sm font-medium text-ellipsis whitespace-nowrap outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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

type SelectOption<Value extends SelectValue> = {
  disabled?: boolean;
  label: React.ReactNode;
  /** Plain text used to filter and display non-text labels. */
  textValue?: string;
  value: Value;
};

type SelectOptionGroup<Value extends SelectValue> = {
  label: React.ReactNode;
  options: readonly SelectOption<Value>[];
};

type InternalSelectOption<Value extends SelectValue> = SelectOption<Value> & {
  textValue: string;
};

type SelectClassNames = {
  trigger?: string;
};

type SelectStyles = {
  trigger?: React.CSSProperties;
};

type SelectProps<Value extends SelectValue = string> = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'aria-describedby' | 'aria-invalid' | 'aria-label' | 'id' | 'onBlur'
> & {
  classNames?: SelectClassNames;
  defaultValue?: Value | null;
  disabled?: boolean;
  emptyText?: React.ReactNode;
  form?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  onChange?: (value: Value | null) => void;
  options: readonly (SelectOption<Value> | SelectOptionGroup<Value>)[];
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  showClear?: boolean;
  styles?: SelectStyles;
  value?: Value | null;
};

const Select = <Value extends SelectValue = string>({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  defaultValue,
  classNames,
  disabled,
  emptyText = '没有找到选项',
  form,
  id,
  inputRef,
  name,
  onBlur,
  onChange,
  options,
  placeholder,
  readOnly,
  required,
  showClear,
  styles,
  value,
}: SelectProps<Value>) => {
  const formControl = useFormControl<Value | null | undefined>();
  const internalOptions = React.useMemo(
    () =>
      options.map((option) => {
        const normalize = (
          item: SelectOption<Value>
        ): InternalSelectOption<Value> => ({
          ...item,
          textValue:
            item.textValue ??
            (typeof item.label === 'string' || typeof item.label === 'number'
              ? String(item.label)
              : String(item.value)),
        });

        return 'options' in option
          ? { ...option, options: option.options.map(normalize) }
          : normalize(option);
      }),
    [options]
  );
  const flatOptions = internalOptions.flatMap((option) =>
    'options' in option ? option.options : [option]
  );
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );
  const resolvedDisabled = disabled || formControl?.disabled;
  const findOption = (optionValue: Value | null | undefined) =>
    optionValue == null
      ? optionValue
      : flatOptions.find((option) => Object.is(option.value, optionValue));
  const controlledValue = findOption(formControl ? formControl.value : value);
  const initialValue = findOption(defaultValue);

  return (
    <SelectRoot<InternalSelectOption<Value>>
      defaultValue={formControl ? undefined : initialValue}
      disabled={resolvedDisabled}
      form={form}
      id={id}
      isItemEqualToValue={(item, selected) =>
        Object.is(item.value, selected.value)
      }
      itemToStringLabel={(item) => item.textValue}
      itemToStringValue={(item) => String(item.value)}
      items={flatOptions}
      name={formControl?.name ?? name}
      onChange={(nextValue) => {
        const nextExternalValue = nextValue?.value ?? null;
        onChange?.(nextExternalValue);
        formControl?.onChange(nextExternalValue);
      }}
      readOnly={readOnly}
      required={required || formControl?.required}
      value={controlledValue}
    >
      <SelectTrigger
        aria-describedby={mergeIds(
          ariaDescribedBy,
          formControl?.descriptionId,
          formControl?.messageId
        )}
        aria-invalid={ariaInvalid ?? formControl?.invalid}
        aria-label={ariaLabel}
        aria-required={required || formControl?.required}
        className={classNames?.trigger}
        disabled={resolvedDisabled}
        id={formControl?.controlId ?? id}
        onBlur={(event) => {
          onBlur?.(event);
          formControl?.onBlur();
        }}
        placeholder={placeholder}
        inputRef={controlRef}
        readOnly={readOnly}
        showClear={showClear}
        style={styles?.trigger}
      />
      <SelectContent>
        <SelectEmpty>{emptyText}</SelectEmpty>
        <SelectList>
          {internalOptions.map((option, index) =>
            'options' in option ? (
              <SelectGroup items={option.options} key={index}>
                {index > 0 ? <SelectSeparator /> : null}
                <SelectLabel>{option.label}</SelectLabel>
                {option.options.map((item) => (
                  <SelectItem
                    disabled={item.disabled}
                    key={`${typeof item.value}:${String(item.value)}`}
                    value={item}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ) : (
              <SelectItem
                disabled={option.disabled}
                key={`${typeof option.value}:${String(option.value)}`}
                value={option}
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

export { Select };
export type {
  SelectOption,
  SelectOptionGroup,
  SelectProps,
  SelectClassNames,
  SelectStyles,
  SelectValue,
};
