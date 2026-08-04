import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { CheckIcon, SearchIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Dialog, type DialogProps } from './dialog';
import { Addon, InputGroup } from './internal/input-group';

type CommandOption = {
  disabled?: boolean;
  icon?: React.ReactNode;
  keywords?: string[];
  label: React.ReactNode;
  onSelect?: (value: string) => void;
  shortcut?: React.ReactNode;
  value: string;
};

type CommandGroup = {
  heading?: React.ReactNode;
  options: readonly CommandOption[];
};

type CommandInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'children' | 'defaultValue' | 'onChange' | 'value'
> & {
  onChange?: (value: string) => void;
  value?: string;
};

type CommandProps = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> & {
  defaultValue?: string;
  disablePointerSelection?: boolean;
  dialog?: Omit<DialogProps, 'children'>;
  emptyText?: React.ReactNode;
  filter?: (value: string, search: string, keywords?: string[]) => number;
  groups: readonly CommandGroup[];
  inputProps?: CommandInputProps;
  label?: string;
  loop?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  shouldFilter?: boolean;
  value?: string;
  vimBindings?: boolean;
};

const Command = ({
  className,
  dialog,
  emptyText = '没有找到命令',
  groups,
  inputProps,
  onChange,
  placeholder = '搜索命令…',
  ...props
}: CommandProps) => {
  const {
    className: inputClassName,
    onChange: onInputChange,
    ...otherInputProps
  } = inputProps ?? {};
  const command = (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'flex size-full flex-col overflow-hidden rounded-4xl bg-popover p-1 text-popover-foreground',
        className
      )}
      onValueChange={onChange}
      {...props}
    >
      <div data-slot="command-input-wrapper" className="p-1 pb-0">
        <InputGroup className="h-9 bg-background">
          <CommandPrimitive.Input
            data-slot="command-input"
            placeholder={placeholder}
            {...otherInputProps}
            onValueChange={onInputChange}
            className={cn(
              'w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
              inputClassName
            )}
          />
          <Addon>
            <SearchIcon className="size-4 shrink-0 opacity-50" />
          </Addon>
        </InputGroup>
      </div>
      <CommandPrimitive.List
        data-slot="command-list"
        className="no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none"
      >
        <CommandPrimitive.Empty
          data-slot="command-empty"
          className="py-6 text-center text-sm"
        >
          {emptyText}
        </CommandPrimitive.Empty>
        {groups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {groupIndex > 0 ? (
              <CommandPrimitive.Separator
                data-slot="command-separator"
                className="my-1.5 h-px bg-border/50"
              />
            ) : null}
            <CommandPrimitive.Group
              data-slot="command-group"
              heading={group.heading}
              className="overflow-hidden p-1.5 text-foreground **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground"
            >
              {group.options.map((option) => (
                <CommandPrimitive.Item
                  data-slot="command-item"
                  className="group/command-item relative flex cursor-default items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none in-data-[slot=dialog-content]:rounded-3xl data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground"
                  disabled={option.disabled}
                  key={option.value}
                  keywords={option.keywords}
                  onSelect={option.onSelect}
                  value={option.value}
                >
                  {option.icon}
                  {option.label}
                  {option.shortcut != null ? (
                    <span
                      data-slot="command-shortcut"
                      className="ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground"
                    >
                      {option.shortcut}
                    </span>
                  ) : (
                    <CheckIcon className="ml-auto opacity-0 group-data-[checked=true]/command-item:opacity-100" />
                  )}
                </CommandPrimitive.Item>
              ))}
            </CommandPrimitive.Group>
          </React.Fragment>
        ))}
      </CommandPrimitive.List>
    </CommandPrimitive>
  );

  return dialog ? <Dialog {...dialog}>{command}</Dialog> : command;
};

export {
  Command,
  type CommandGroup,
  type CommandInputProps,
  type CommandOption,
  type CommandProps,
};
