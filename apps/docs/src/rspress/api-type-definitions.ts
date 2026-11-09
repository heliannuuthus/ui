export const apiTypeDefinitions = {
  AccordionIndicatorProps: `type AccordionIndicatorProps = Omit<ComponentProps<'span'>, 'children'> & {
  children?: ReactNode | ((state: AccordionIndicatorState) => ReactNode);
  position?: 'start' | 'end';
};`,
  AccordionIndicatorState: `type AccordionIndicatorState = {
  open?: boolean;
  disabled?: boolean;
  value?: string;
};`,
  AccordionItem: `type AccordionItem = {
  value: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
};`,
  AlertDialogClasses: `type AlertDialogClasses = {
  content?: string;
};`,
  AlertDialogStyles: `type AlertDialogStyles = {
  content?: React.CSSProperties;
};`,
  AttachmentGroupItem: `type AttachmentGroupItem = AttachmentProps & {
  key?: React.Key;
  title: ReactNode;
  description?: ReactNode;
  media?: AttachmentMediaConfig;
  actions?: ReactNode;
  trigger?: ReactElement;
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'default';
  state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done';
};`,
  AttachmentProps: `type AttachmentProps = Omit<ComponentProps<'div'>, 'children' | 'title'> & {
  title: ReactNode;
  description?: ReactNode;
  media?: AttachmentMediaConfig;
  actions?: ReactNode;
  trigger?: ReactElement;
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'default';
  state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done';
};`,
  AvatarFallbackProps: `type AvatarFallbackProps = ComponentProps<'span'> & {
  delay?: number;
};`,
  AvatarGroupItem: `type AvatarGroupItem = AvatarProps & {
  key?: React.Key;
  alt: string;
  src?: string;
  fallback?: AvatarFallbackProps;
  image?: AvatarImageProps;
  badge?: ReactNode;
  shape?: 'circle' | 'square';
  size?: 'sm' | 'default' | 'lg';
};`,
  AvatarImageLoadingStatus: `type AvatarImageLoadingStatus = 'error' | 'idle' | 'loaded' | 'loading';`,
  AvatarImageProps: `type AvatarImageProps = Omit<
  ComponentProps<'img'>,
  'alt' | 'children' | 'src'
> & {
  onStatusChange?: (status: AvatarImageLoadingStatus) => void;
};`,
  BadgeClasses: `type BadgeClasses = {
  indicator?: string;
};`,
  BadgeStyles: `type BadgeStyles = {
  indicator?: React.CSSProperties;
};`,
  BreadcrumbCollapseOptions: `type BreadcrumbCollapseOptions = {
  limit: number;
  before?: number; // default: 1
  after?: number; // default: 2
  label?: string;
};`,
  BreadcrumbItem: `type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  menu?: BreadcrumbMenuItem[];
  separator?: BreadcrumbSeparator;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};`,
  BreadcrumbMenuItem: `type BreadcrumbMenuItem = {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
};`,
  BreadcrumbSeparator: `type BreadcrumbSeparator = 'chevron' | 'slash' | 'dot' | ReactNode;`,
  BubbleReactionsProps: `type BubbleReactionsProps = ComponentProps<'div'> & {
  align?: 'start' | 'end';
  side?: 'top' | 'bottom';
};`,
  ButtonNativeProps: `type ButtonNativeProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> & {
  variant?:
    'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link';
  size?:
    'xs' | 'sm' | 'md' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';
  block?: boolean;
  disabled?: boolean;
};`,
  CardClasses: `type CardClasses = {
  action?: string;
  content?: string;
  description?: string;
  footer?: string;
  header?: string;
  title?: string;
};`,
  CardStyles: `type CardStyles = {
  action?: React.CSSProperties;
  content?: React.CSSProperties;
  description?: React.CSSProperties;
  footer?: React.CSSProperties;
  header?: React.CSSProperties;
  title?: React.CSSProperties;
};`,
  CarouselClasses: `type CarouselClasses = {
  content?: string;
  item?: string;
};`,
  CarouselControls: `type CarouselControls = CarouselRef & {
  canScrollNext: boolean;
  canScrollPrev: boolean;
  page: number;
  playing: boolean;
  pages: number;
  index: number;
  snaps: number[];
  pause: () => void;
  play: () => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
};`,
  CarouselDotRenderProps: `type CarouselDotRenderProps = {
  index: number;
  selected: boolean;
};`,
  CarouselRef: `type CarouselRef = {
  pause: () => void;
  play: () => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
};`,
  CarouselStyles: `type CarouselStyles = {
  content?: React.CSSProperties;
  item?: React.CSSProperties;
};`,
  CheckboxClasses: `type CheckboxClasses = {
  control?: string;
  label?: string;
};`,
  CheckboxOption: `type CheckboxOption = {
  className?: string;
  disabled?: boolean;
  label: ReactNode;
  value: string;
  variant?: 'default' | 'task';
};`,
  CheckboxStyles: `type CheckboxStyles = {
  control?: React.CSSProperties;
  label?: React.CSSProperties;
};`,
  CollapsibleClasses: `type CollapsibleClasses = {
  content?: string;
  header?: string;
};`,
  CollapsibleStyles: `type CollapsibleStyles = {
  content?: React.CSSProperties;
  header?: React.CSSProperties;
};`,
  CollapsibleTriggerConfig: `type CollapsibleTriggerConfig = Omit<
  ButtonNativeProps,
  'children' | 'className' | 'href'
> & {
  variant?:
    'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link';
  size?:
    'xs' | 'sm' | 'md' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';
  disabled?: boolean;
  'aria-label'?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  indicator?: boolean | ReactNode;
};`,
  CommandFilter: `type CommandFilter = (
  value: string,
  search: string,
  keywords?: string[]
) => number;`,
  CommandInputProps: `type CommandInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children' | 'defaultValue' | 'onChange' | 'value'
> & {
  value?: string;
  onChange?: (value: string) => void;
};`,
  ContextMenuClasses: `type ContextMenuClasses = {
  content?: string;
};`,
  ContextMenuStyles: `type ContextMenuStyles = {
  content?: React.CSSProperties;
};`,
  CounterClasses: `type CounterClasses = {
  digit?: string;
  visual?: string;
};`,
  CounterStyles: `type CounterStyles = {
  digit?: React.CSSProperties;
  visual?: React.CSSProperties;
};`,
  DataAttributes: `type DataAttributes = {
  [key: \`data-\${string}\`]: boolean | number | string | undefined;
};`,
  DatePickerClasses: `type DatePickerClasses = {
  calendar?: string;
  trigger?: string;
};`,
  DatePickerStyles: `type DatePickerStyles = {
  calendar?: React.CSSProperties;
  trigger?: React.CSSProperties;
};`,
  DateTimePickerClasses: `type DateTimePickerClasses = DatePickerClasses & {
  time?: string;
};`,
  DateTimePickerStyles: `type DateTimePickerStyles = {
  calendar?: React.CSSProperties;
  time?: React.CSSProperties;
  trigger?: React.CSSProperties;
};`,
  PickerLocale: `type PickerLocale = 'en' | 'zh';`,
  PickerRangeValue: `type PickerRangeValue<Value> = readonly [
  Value | undefined,
  Value | undefined,
];`,
  TimeRangePickerClasses: `type TimeRangePickerClasses = {
  end?: string;
  separator?: string;
  start?: string;
};`,
  TimeRangePickerStyles: `type TimeRangePickerStyles = {
  end?: React.CSSProperties;
  separator?: React.CSSProperties;
  start?: React.CSSProperties;
};`,
  DialogClasses: `type DialogClasses = {
  content?: string;
};`,
  DialogStyles: `type DialogStyles = {
  content?: React.CSSProperties;
};`,
  DrawerClasses: `type DrawerClasses = {
  content?: string;
};`,
  DrawerSnapPoint: `type DrawerSnapPoint = number | string;`,
  DrawerStyles: `type DrawerStyles = {
  content?: React.CSSProperties;
};`,
  DropdownMenuCheckboxEntry: `type DropdownMenuCheckboxEntry = {
  type: 'checkbox';
  label: ReactNode;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};`,
  DropdownMenuClasses: `type DropdownMenuClasses = {
  content?: string;
};`,
  DropdownMenuEntry: `type DropdownMenuEntry =
  | DropdownMenuItemEntry
  | DropdownMenuLabelEntry
  | DropdownMenuSeparatorEntry
  | DropdownMenuCheckboxEntry
  | DropdownMenuRadioEntry;`,
  DropdownMenuItemEntry: `type DropdownMenuItemEntry = {
  type?: 'item';
  label: ReactNode;
  icon?: ReactNode;
  shortcut?: ReactNode;
  href?: string;
  disabled?: boolean;
  destructive?: boolean;
  onSelect?: () => void;
  children?: DropdownMenuEntry[];
};`,
  DropdownMenuLabelEntry: `type DropdownMenuLabelEntry = {
  type: 'label';
  label: ReactNode;
};`,
  DropdownMenuRadioEntry: `type DropdownMenuRadioEntry = {
  type: 'radio';
  value: string;
  onChange?: (value: string) => void;
  items: DropdownMenuRadioOption[];
};`,
  DropdownMenuRadioOption: `type DropdownMenuRadioOption = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};`,
  DropdownMenuSeparatorEntry: `type DropdownMenuSeparatorEntry = {
  type: 'separator';
};`,
  DropdownMenuStyles: `type DropdownMenuStyles = {
  content?: React.CSSProperties;
};`,
  FormFieldInjectedControlProps: `type FormFieldInjectedControlProps<Value> = {
  'aria-describedby'?: string;
  'aria-errormessage'?: string;
  'aria-invalid'?: boolean;
  'aria-labelledby'?: string;
  'aria-required'?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (value: Value) => void;
  required?: boolean;
  value?: Value;
};`,
  FormValuesChangeHandler: `type FormValuesChangeHandler<TFieldValues extends FieldValues = FieldValues> = (
  values: TFieldValues,
  info: FormValuesChangeInfo<TFieldValues>
) => void;`,
  FormValuesChangeInfo: `type FormValuesChangeInfo<TFieldValues extends FieldValues = FieldValues> = {
  name?: FieldPath<TFieldValues>;
};`,
  InputClasses: `type InputClasses = {
  after?: string;
  before?: string;
  input?: string;
  prefix?: string;
  suffix?: string;
};`,
  InputNumberClasses: `type InputNumberClasses = {
  controls?: string;
  decrement?: string;
  group?: string;
  increment?: string;
  input?: string;
  prefix?: string;
  suffix?: string;
};`,
  InputNumberControls: `type InputNumberControls = {
  decrement?: { content?: ReactNode; label?: string };
  increment?: { content?: ReactNode; label?: string };
};`,
  InputNumberStyles: `type InputNumberStyles = {
  controls?: React.CSSProperties;
  decrement?: React.CSSProperties;
  group?: React.CSSProperties;
  increment?: React.CSSProperties;
  input?: React.CSSProperties;
  prefix?: React.CSSProperties;
  suffix?: React.CSSProperties;
};`,
  InputStyles: `type InputStyles = {
  after?: React.CSSProperties;
  before?: React.CSSProperties;
  input?: React.CSSProperties;
  prefix?: React.CSSProperties;
  suffix?: React.CSSProperties;
};`,
  ItemClasses: `type ItemClasses = {
  actions?: string;
  content?: string;
  description?: string;
  footer?: string;
  header?: string;
  media?: string;
  title?: string;
};`,
  ItemGroupEntry: `type ItemGroupEntry = ItemProps & {
  key?: React.Key;
  variant?: 'default' | 'outline' | 'muted';
  size?: 'xs' | 'sm' | 'default';
  href?: string;
  media?: ItemMediaConfig;
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
 classes?: ItemClasses;
};`,
  ItemStyles: `type ItemStyles = {
  actions?: React.CSSProperties;
  content?: React.CSSProperties;
  description?: React.CSSProperties;
  footer?: React.CSSProperties;
  header?: React.CSSProperties;
  media?: React.CSSProperties;
  title?: React.CSSProperties;
};`,
  LayoutSidebarLabels: `type LayoutSidebarLabels = {
  collapse: string;
  expand: string;
};`,
  MarkerClasses: `type MarkerClasses = {
  content?: string;
  icon?: string;
};`,
  MarkerStyles: `type MarkerStyles = {
  content?: React.CSSProperties;
  icon?: React.CSSProperties;
};`,
  MasonryGap: `type MasonryGap = MasonryLength | readonly [MasonryLength, MasonryLength];`,
  MasonryLength: `type MasonryLength = number | string;`,
  NavigationMenuItemConfig: `type NavigationMenuItemConfig = {
  active?: boolean;
  content?: ReactNode | ((slots: NavigationMenuLinkSlots) => ReactNode);
  disabled?: boolean;
  href?: string;
  label: ReactNode;
  value?: string;
};`,
  NavigationMenuLinkComponent: `type NavigationMenuLinkComponent = (
  props: NavigationMenuLinkProps
) => ReactNode;`,
  NavigationMenuLinkProps: `type NavigationMenuLinkProps = Omit<ComponentProps<'a'>, 'children'> & {
  active?: boolean;
  children?: ReactNode;
  closeOnClick?: boolean;
};`,
  NavigationMenuLinkSlots: `type NavigationMenuLinkSlots = {
  Link: NavigationMenuLinkComponent;
};`,
  PaginationLabelContext: `type PaginationLabelContext = {
  page: number | null;
  selected: boolean;
  type: PaginationItemType;
};`,
  PaginationLabels: `type PaginationLabels = {
  item?: (context: PaginationLabelContext) => string;
  first?: string;
  last?: string;
  more?: string;
  navigation?: string;
  next?: string;
  page?: (page: number) => string;
  pageSize?: string;
  previous?: string;
  jump?: string;
};`,
  PaginationClasses: `type PaginationClasses = {
  content?: string;
  control?: string;
  ellipsis?: string;
  item?: string;
  pageSize?: string;
  jump?: string;
  summary?: string;
};`,
  PaginationItemType: `type PaginationItemType =
  | 'page'
  | 'first'
  | 'last'
  | 'next'
  | 'previous'
  | 'ellipsis-start'
  | 'ellipsis-end';`,
  PaginationJumpOptions: `type PaginationJumpOptions = {
  button?: ReactNode;
  label?: ReactNode;
  suffix?: ReactNode;
};`,
  PaginationRenderProps: `type PaginationRenderProps = {
  disabled: boolean;
  element: ReactElement;
  page: number | null;
  selected: boolean;
  type: PaginationItemType;
};`,
  PaginationSimpleOptions: `type PaginationSimpleOptions = {
  readOnly?: boolean;
};`,
  PaginationSize: `type PaginationSize = 'sm' | 'md' | 'lg';`,
  PaginationLimitSelectorOptions: `type PaginationLimitSelectorOptions = {
  render?: (pageSize: number) => ReactNode;
  options?: readonly number[];
};`,
  PaginationStyles: `type PaginationStyles = {
  content?: React.CSSProperties;
  control?: React.CSSProperties;
  ellipsis?: React.CSSProperties;
  item?: React.CSSProperties;
  pageSize?: React.CSSProperties;
  jump?: React.CSSProperties;
  summary?: React.CSSProperties;
};`,
  PanelSize: `type PanelSize = {
  asPercentage: number;
  inPixels: number;
};`,
  PopoverClasses: `type PopoverClasses = {
  content?: string;
};`,
  PopoverStyles: `type PopoverStyles = {
  content?: React.CSSProperties;
};`,
  RadioClasses: `type RadioClasses = {
  control?: string;
  label?: string;
};`,
  RadioOption: `type RadioOption<Value = string> = {
  className?: string;
  disabled?: boolean;
  label: ReactNode;
  value: Value;
};`,
  RadioStyles: `type RadioStyles = {
  control?: React.CSSProperties;
  label?: React.CSSProperties;
};`,
  ResizableClasses: `type ResizableClasses = {
  panel?: string;
  separator?: string;
};`,
  ResizableSeparator: `type ResizableSeparator =
  ReactNode | ((props: ResizableSeparatorRenderProps) => ReactNode);`,
  ResizableStyles: `type ResizableStyles = {
  panel?: React.CSSProperties;
  separator?: React.CSSProperties;
};`,
  ScrollAreaScrollbarConfig: `type ScrollAreaScrollbarConfig = {
  size?: 'sm' | 'md' | 'lg' | number;
  visibility?: 'auto' | 'always' | 'hidden';
};`,
  SegmentedClasses: `type SegmentedClasses = {
  indicator?: string;
  item?: string;
  label?: string;
};`,
  SegmentedOption: `type SegmentedOption<Value extends SegmentedValue = string> = {
  'aria-label'?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  label: ReactNode;
  style?: CSSProperties;
  title?: string;
  value: Value;
};`,
  SegmentedSize: `type SegmentedSize = 'sm' | 'md' | 'lg';`,
  SegmentedStyles: `type SegmentedStyles = {
  indicator?: CSSProperties;
  item?: CSSProperties;
  label?: CSSProperties;
};`,
  SegmentedValue: `type SegmentedValue = string | number;`,
  SelectClasses: `type SelectClasses = {
  trigger?: string;
};`,
  SelectOption: `type SelectOption<Value extends SelectValue> = {
  disabled?: boolean;
  label: ReactNode;
  text?: string;
  value: Value;
};`,
  SelectOptionGroup: `type SelectOptionGroup<Value extends SelectValue> = {
  label: ReactNode;
  options: readonly SelectOption<Value>[];
};`,
  SelectValue: `type SelectValue = string | number;`,
  SelectStyles: `type SelectStyles = {
  trigger?: React.CSSProperties;
};`,
  'Table.ExpandableProps': `type Table.ExpandableProps<TData> = {
  canExpand?: (row: TData, index: number) => boolean
  defaultValue?: Key[]
  header?: ReactNode
  labels?: Table.ExpandLabels<TData>
  onChange?: (keys: Key[]) => void
  render: (row: TData, index: number) => ReactNode
  value?: Key[]
}`,
  'Table.ExpandLabels': `type Table.ExpandLabels<TData> = {
  collapse?: (row: TData, index: number) => string
  expand?: (row: TData, index: number) => string
}`,
  'Table.PaginationProps': `type Table.PaginationProps = {
  page?: number
  defaultPage?: number
  mode?: 'client' | 'manual'
  onChange?: (page: number, pageSize: number) => void
  limit?: PaginationLimitOptions
  summary?: boolean | ((total: number, page: number, pages: number) => ReactNode)
  total?: number
}`,
  'Table.Render': `type Table.Render<TData> = (value: unknown, row: TData, index: number) => ReactNode`,
  'Table.SelectionProps': `type Table.SelectionProps<TData> = {
  defaultValue?: Key[]
  disabled?: (row: TData, index: number) => boolean
  header?: ReactNode
  labels?: Table.SelectionLabels<TData>
  onChange?: (keys: Key[], rows: readonly TData[]) => void
  value?: Key[]
}`,
  'Table.SearchProps': `type Table.SearchProps<TData> = {
  'aria-label'?: string
  columns?: string[]
  defaultValue?: string
  mode?: 'client' | 'manual'
  onChange?: (value: string) => void
  placeholder?: string
  predicate?: (row: TData, query: string) => boolean
  value?: string
}`,
  'Table.SelectionLabels': `type Table.SelectionLabels<TData> = {
  all?: (rows: readonly TData[]) => string
  item?: (row: TData, index: number) => string
}`,
  'Table.SortingProps': `type Table.SortingProps = {
  defaultValue?: Table.SortState | null
  mode?: 'client' | 'manual'
  onChange?: (value: Table.SortState | null) => void
  value?: Table.SortState | null
}`,
  'Table.SortOrder': `type Table.SortOrder = 'ascending' | 'descending'`,
  'Table.SortState': `type Table.SortState = {
  column: string
  order: Table.SortOrder
}`,
  'Table.VirtualProps': `type Table.VirtualProps = {
  maxHeight?: number | string
  overscan?: number
  rowHeight?: number
}`,
  TabsClasses: `type TabsClasses = {
  indicator?: string;
  list?: string;
  panel?: string;
  tab?: string;
  viewport?: string;
};`,
  TabsStyles: `type TabsStyles = {
  indicator?: React.CSSProperties;
  list?: React.CSSProperties;
  panel?: React.CSSProperties;
  tab?: React.CSSProperties;
  viewport?: React.CSSProperties;
};`,
  ToggleGroupOption: `type ToggleGroupOption<Value extends string = string> = {
  label: ReactNode;
  value: Value;
} & ButtonHTMLAttributes<HTMLButtonElement>;`,
  TooltipClasses: `type TooltipClasses = {
  arrow?: string;
  content?: string;
};`,
  TooltipPlacement: `type TooltipPlacement =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'leftTop'
  | 'left'
  | 'leftBottom'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight';`,
  TooltipProviderDefaults: `type TooltipProviderDefaults = {
  arrow?: boolean;
  delay?: TooltipDelay;
  placement?: TooltipPlacement;
};`,
  TooltipStyles: `type TooltipStyles = {
  arrow?: React.CSSProperties;
  content?: React.CSSProperties;
};`,
  AlertDialogCancelConfig: `type AlertDialogCancelConfig = {
  label?: React.ReactNode;
};`,
  AlertDialogConfirmConfig: `type AlertDialogConfirmConfig = {
  label: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>['variant'];
  onClick?: () => void;
};`,
  AttachmentMediaConfig: `type AttachmentMediaConfig = {
  content: React.ReactNode;
  type?: 'icon' | 'image';
};`,
  BubbleContentProps: `type BubbleContentProps = React.ComponentProps<'div'> & DataAttributes;`,
  CalendarClasses: `type CalendarClasses = Omit<
  NonNullable<React.ComponentProps<typeof DayPicker>['classNames']>,
  'root'
>;`,
  CalendarOptions: `type CalendarOptions<Props> = Props extends unknown
  ? Omit<Props, 'classNames' | 'numberOfMonths' | 'timeZone' | 'showOutsideDays'> & {
      classes?: CalendarClasses;
      months?: number;
      zone?: string;
      outside?: boolean;
      buttonVariant?: React.ComponentProps<typeof Button>['variant'];
    }
  : never;`,
  CalendarProps: `type CalendarProps = CalendarOptions<React.ComponentProps<typeof DayPicker>>;`,
  DialogCancelConfig: `type DialogCancelConfig = {
  label?: React.ReactNode;
};`,
  DialogConfirmConfig: `type DialogConfirmConfig = {
  label: React.ReactNode;
  onClick?: () => void;
};`,
  DrawerCloseConfig: `type DrawerCloseConfig = {
  label?: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>['variant'];
};`,
  DrawerSnapsConfig: `type DrawerSnapsConfig = {
  points?: DrawerSnapPoint[];
  value?: DrawerSnapPoint | null;
  defaultValue?: DrawerSnapPoint | null;
  onChange?: (snapPoint: DrawerSnapPoint | null) => void;
  sequential?: boolean;
};`,
  ItemMediaConfig: `type ItemMediaConfig = {
  content: ReactNode;
  type?: 'default' | 'icon' | 'image';
};`,
  LayoutSidebarWidth: `type LayoutSidebarWidth = {
  /** 展开宽度，数字按像素处理。 */
  expanded?: number | string;
  /** 折叠宽度，数字按像素处理。 */
  collapsed?: number | string;
};`,
  NavigationMenuDelay: `type NavigationMenuDelay = {
  open?: number;
  close?: number;
};`,
  PaginationLimitOptions: `type PaginationLimitOptions = {
  value?: number;
  defaultValue?: number;
  onChange?: (page: number, limit: number) => void;
  selector?: boolean | PaginationLimitSelectorOptions;
};`,
  PopoverDelay: `type PopoverDelay = {
  open?: number;
  close?: number;
};`,
  PopoverMode: `type PopoverMode = 'click' | 'hover';`,
  PopoverOffset: `type PopoverOffset = {
  side?: number;
  align?: number;
};`,
  ResizableLayout: `type ResizableLayout = {
  defaultValue?: ResizablePrimitive.GroupProps['defaultLayout'];
  onChange?: ResizablePrimitive.GroupProps['onLayoutChange'];
  onCommit?: ResizablePrimitive.GroupProps['onLayoutChanged'];
};`,
  ResizableTarget: `type ResizableTarget = ResizablePrimitive.GroupProps['resizeTargetMinimumSize'];`,
  SliderEdge: `type SliderEdge = {
  icon?: React.ReactNode;
  label?: React.ReactNode;
};`,
  SonnerPromiseError: `type SonnerPromiseError = Parameters<
  Extract<SonnerPromiseOptions<unknown>['error'], (error: never) => unknown>
>[0];`,
  SonnerPromiseOptions: `type SonnerPromiseOptions<Data> = NonNullable<
  Parameters<typeof sonnerToast.promise<Data>>[1]
>;`,
  ToastAction: `type ToastAction = Omit<Action, 'actionButtonStyle'> & {
  style?: React.CSSProperties;
};`,
  ToastApi: `type ToastApi = ((
  message: Parameters<typeof sonnerToast>[0],
  options?: ToastOptions
) => ToastId) & {
  [Method in 'success' | 'info' | 'warning' | 'error' | 'loading' | 'message']: (
    message: Parameters<(typeof sonnerToast)[Method]>[0],
    options?: ToastOptions
  ) => ToastId;
} & {
  custom: (
    renderer: Parameters<typeof sonnerToast.custom>[0],
    options?: ToastOptions
  ) => ToastId;
  promise: <Data>(
    promise: Parameters<typeof sonnerToast.promise<Data>>[0],
    options?: ToastPromiseOptions<Data>
  ) => ToastPromiseHandle<Data>;
  dismiss: typeof sonnerToast.dismiss;
  getHistory: typeof sonnerToast.getHistory;
  getToasts: typeof sonnerToast.getToasts;
};`,
  ToastClasses: `type ToastClasses = Omit<
  ToastClassnames,
  'closeButton' | 'cancelButton' | 'actionButton'
> & {
  close?: string;
  cancel?: string;
  action?: string;
};`,
  ToastDefaults: `type ToastDefaults = Omit<
  NonNullable<ToasterProps['toastOptions']>,
  | 'classNames'
  | 'descriptionClassName'
  | 'cancelButtonStyle'
  | 'actionButtonStyle'
  | 'closeButton'
> & {
  classes?: ToastClasses;
  styles?: ToastStyles;
  closable?: boolean;
};`,
  ToastId: `type ToastId = string | number;`,
  ToastOptions: `type ToastOptions = Omit<
  ExternalToast,
  | 'classNames'
  | 'descriptionClassName'
  | 'cancelButtonStyle'
  | 'actionButtonStyle'
  | 'action'
  | 'cancel'
  | 'richColors'
  | 'closeButton'
> & {
  classes?: ToastClasses;
  styles?: ToastStyles;
  action?: ToastAction | React.ReactNode;
  cancel?: ToastAction | React.ReactNode;
  rich?: boolean;
  closable?: boolean;
};`,
  ToastPromiseHandle: `type ToastPromiseHandle<Data> =
  | (string & { unwrap: () => Promise<Data> })
  | (number & { unwrap: () => Promise<Data> })
  | { unwrap: () => Promise<Data> };`,
  ToastPromiseMessage: `type ToastPromiseMessage = ToastOptions & { message: React.ReactNode };`,
  ToastPromiseOptions: `type ToastPromiseOptions<Data = unknown> = Omit<
  SonnerPromiseOptions<Data>,
  keyof ExternalToast | 'success' | 'error'
> &
  Omit<ToastOptions, 'description'> & {
    description?: SonnerPromiseOptions<Data>['description'];
    success?: ToastPromiseResult<Data>;
    error?: ToastPromiseResult<SonnerPromiseError>;
  };`,
  ToastPromiseResult: `type ToastPromiseResult<Data> =
  | React.ReactNode
  | ToastPromiseMessage
  | ((
      data: Data
    ) =>
      | React.ReactNode
      | ToastPromiseMessage
      | Promise<React.ReactNode | ToastPromiseMessage>);`,
  ToastStyles: `type ToastStyles = {
  cancel?: React.CSSProperties;
  action?: React.CSSProperties;
};`,
  ToasterOffset: `type ToasterOffset = {
  base?: ToasterProps['offset'];
  mobile?: ToasterProps['mobileOffset'];
};`,
  TooltipDelay: `type TooltipDelay = {
  open?: TooltipPrimitiveTriggerProps['delay'];
  close?: TooltipPrimitiveTriggerProps['closeDelay'];
};`,
} as const;

export type ApiTypeDefinitionName = keyof typeof apiTypeDefinitions;
