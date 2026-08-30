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
  AlertDialogClassNames: `type AlertDialogClassNames = {
  content?: string;
};`,
  AlertDialogStyles: `type AlertDialogStyles = {
  content?: React.CSSProperties;
};`,
  AttachmentGroupItem: `type AttachmentGroupItem = AttachmentProps & {
  key?: React.Key;
  title: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  mediaType?: 'icon' | 'image';
  actions?: ReactNode;
  trigger?: ReactElement;
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'default';
  state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done';
};`,
  AttachmentProps: `type AttachmentProps = Omit<ComponentProps<'div'>, 'children' | 'title'> & {
  title: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  mediaType?: 'icon' | 'image';
  actions?: ReactNode;
  trigger?: ReactElement;
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'default';
  state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done';
};`,
  AvatarFallbackProps: `type AvatarFallbackProps = Omit<ComponentProps<'span'>, 'children'> & {
  delay?: number;
};`,
  AvatarGroupItem: `type AvatarGroupItem = AvatarProps & {
  key?: React.Key;
  alt: string;
  src?: string;
  fallback?: ReactNode;
  fallbackProps?: AvatarFallbackProps;
  imageProps?: AvatarImageProps;
  badge?: ReactNode;
  shape?: 'circle' | 'square';
  size?: 'sm' | 'default' | 'lg';
};`,
  AvatarImageLoadingStatus: `type AvatarImageLoadingStatus = 'error' | 'idle' | 'loaded' | 'loading';`,
  AvatarImageProps: `type AvatarImageProps = Omit<
  ComponentProps<'img'>,
  'alt' | 'children' | 'src'
> & {
  onLoadingStatusChange?: (status: AvatarImageLoadingStatus) => void;
};`,
  BadgeClassNames: `type BadgeClassNames = {
  indicator?: string;
};`,
  BadgeStyles: `type BadgeStyles = {
  indicator?: React.CSSProperties;
};`,
  BreadcrumbCollapseOptions: `type BreadcrumbCollapseOptions = {
  maxItems: number;
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
  CardClassNames: `type CardClassNames = {
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
  CarouselClassNames: `type CarouselClassNames = {
  content?: string;
  item?: string;
};`,
  CarouselControls: `type CarouselControls = CarouselRef & {
  canScrollNext: boolean;
  canScrollPrev: boolean;
  currentPage: number;
  isPlaying: boolean;
  pageCount: number;
  selectedIndex: number;
  scrollSnaps: number[];
  pause: () => void;
  play: () => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
};`,
  CarouselDotRenderProps: `type CarouselDotRenderProps = {
  index: number;
  isSelected: boolean;
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
  CheckboxClassNames: `type CheckboxClassNames = {
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
  CollapsibleClassNames: `type CollapsibleClassNames = {
  content?: string;
  header?: string;
};`,
  CollapsibleStyles: `type CollapsibleStyles = {
  content?: React.CSSProperties;
  header?: React.CSSProperties;
};`,
  CollapsibleTriggerProps: `type CollapsibleTriggerProps = Omit<
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
  ContextMenuClassNames: `type ContextMenuClassNames = {
  content?: string;
};`,
  ContextMenuStyles: `type ContextMenuStyles = {
  content?: React.CSSProperties;
};`,
  CounterClassNames: `type CounterClassNames = {
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
  DatePickerClassNames: `type DatePickerClassNames = {
  calendar?: string;
  trigger?: string;
};`,
  DatePickerStyles: `type DatePickerStyles = {
  calendar?: React.CSSProperties;
  trigger?: React.CSSProperties;
};`,
  DateTimePickerClassNames: `type DateTimePickerClassNames = DatePickerClassNames & {
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
  TimeRangePickerClassNames: `type TimeRangePickerClassNames = {
  end?: string;
  separator?: string;
  start?: string;
};`,
  TimeRangePickerStyles: `type TimeRangePickerStyles = {
  end?: React.CSSProperties;
  separator?: React.CSSProperties;
  start?: React.CSSProperties;
};`,
  DialogClassNames: `type DialogClassNames = {
  content?: string;
};`,
  DialogStyles: `type DialogStyles = {
  content?: React.CSSProperties;
};`,
  DrawerClassNames: `type DrawerClassNames = {
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
  DropdownMenuClassNames: `type DropdownMenuClassNames = {
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
  InputClassNames: `type InputClassNames = {
  addonAfter?: string;
  addonBefore?: string;
  input?: string;
  prefix?: string;
  suffix?: string;
};`,
  InputNumberClassNames: `type InputNumberClassNames = {
  controls?: string;
  decrement?: string;
  group?: string;
  increment?: string;
  input?: string;
  prefix?: string;
  suffix?: string;
};`,
  InputNumberControls: `type InputNumberControls = {
  decrement?: ReactNode;
  increment?: ReactNode;
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
  addonAfter?: React.CSSProperties;
  addonBefore?: React.CSSProperties;
  input?: React.CSSProperties;
  prefix?: React.CSSProperties;
  suffix?: React.CSSProperties;
};`,
  ItemClassNames: `type ItemClassNames = {
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
  media?: ReactNode;
  mediaType?: 'default' | 'icon' | 'image';
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  classNames?: ItemClassNames;
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
  MarkerClassNames: `type MarkerClassNames = {
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
  PaginationAriaLabelContext: `type PaginationAriaLabelContext = {
  page: number | null;
  selected: boolean;
  type: PaginationItemType;
};`,
  PaginationAriaLabels: `type PaginationAriaLabels = {
  first?: string;
  last?: string;
  more?: string;
  navigation?: string;
  next?: string;
  page?: (page: number) => string;
  pageSize?: string;
  previous?: string;
  quickJumper?: string;
};`,
  PaginationClassNames: `type PaginationClassNames = {
  content?: string;
  control?: string;
  ellipsis?: string;
  item?: string;
  pageSize?: string;
  quickJumper?: string;
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
  PaginationQuickJumperOptions: `type PaginationQuickJumperOptions = {
  goButton?: ReactNode;
  label?: ReactNode;
  suffix?: ReactNode;
};`,
  PaginationRenderItemProps: `type PaginationRenderItemProps = {
  disabled: boolean;
  originalElement: ReactElement;
  page: number | null;
  selected: boolean;
  type: PaginationItemType;
};`,
  PaginationSimpleOptions: `type PaginationSimpleOptions = {
  readOnly?: boolean;
};`,
  PaginationSize: `type PaginationSize = 'sm' | 'md' | 'lg';`,
  PaginationSizeChangerOptions: `type PaginationSizeChangerOptions = {
  getOptionLabel?: (pageSize: number) => ReactNode;
  options?: readonly number[];
};`,
  PaginationStyles: `type PaginationStyles = {
  content?: React.CSSProperties;
  control?: React.CSSProperties;
  ellipsis?: React.CSSProperties;
  item?: React.CSSProperties;
  pageSize?: React.CSSProperties;
  quickJumper?: React.CSSProperties;
  summary?: React.CSSProperties;
};`,
  PanelSize: `type PanelSize = {
  asPercentage: number;
  inPixels: number;
};`,
  PopoverClassNames: `type PopoverClassNames = {
  content?: string;
};`,
  PopoverStyles: `type PopoverStyles = {
  content?: React.CSSProperties;
};`,
  RadioClassNames: `type RadioClassNames = {
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
  ResizableClassNames: `type ResizableClassNames = {
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
  SegmentedClassNames: `type SegmentedClassNames = {
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
  SelectClassNames: `type SelectClassNames = {
  trigger?: string;
};`,
  SelectOption: `type SelectOption<Value extends SelectValue> = {
  disabled?: boolean;
  label: ReactNode;
  textValue?: string;
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
  current?: number
  defaultCurrent?: number
  mode?: 'client' | 'manual'
  onChange?: (page: number, pageSize: number) => void
  pageSize?: number
  summary?: boolean | ((total: number, current: number, pageCount: number) => ReactNode)
  total?: number
}`,
  'Table.Render': `type Table.Render<TData> = (value: unknown, row: TData, index: number) => ReactNode`,
  'Table.RowSelectionProps': `type Table.RowSelectionProps<TData> = {
  defaultValue?: Key[]
  disabled?: (row: TData, index: number) => boolean
  header?: ReactNode
  labels?: Table.SelectionLabels<TData>
  onChange?: (keys: Key[], rows: readonly TData[]) => void
  value?: Key[]
}`,
  'Table.SearchProps': `type Table.SearchProps<TData> = {
  'aria-label'?: string
  columnKeys?: string[]
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
  columnKey: string
  order: Table.SortOrder
}`,
  'Table.VirtualProps': `type Table.VirtualProps = {
  containerHeight?: number | string
  overscan?: number
  rowHeight?: number
}`,
  TabsClassNames: `type TabsClassNames = {
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
  TooltipClassNames: `type TooltipClassNames = {
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
  closeDelay?: number;
  openDelay?: number;
  placement?: TooltipPlacement;
};`,
  TooltipStyles: `type TooltipStyles = {
  arrow?: React.CSSProperties;
  content?: React.CSSProperties;
};`,
} as const;

export type ApiTypeDefinitionName = keyof typeof apiTypeDefinitions;
