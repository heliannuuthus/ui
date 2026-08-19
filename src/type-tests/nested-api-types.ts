import type {
  BreadcrumbMenuItem,
  ChartConfig,
  ChartConfigBase,
  ChartConfigColor,
  ChartConfigItem,
  ChartConfigTheme,
  ChartInitialDimension,
  ChartStyleProps,
  DropdownMenuCheckboxEntry,
  DropdownMenuEntry,
  DropdownMenuItemEntry,
  DropdownMenuLabelEntry,
  DropdownMenuRadioEntry,
  DropdownMenuRadioOption,
  DropdownMenuSeparatorEntry,
  NavigationMenuLinkComponent,
  NavigationMenuLinkProps,
  NavigationMenuLinkSlots,
  PaginationAriaLabels,
} from '../index';

export const breadcrumbMenuItem: BreadcrumbMenuItem = {
  href: '/docs',
  label: 'Docs',
};

export const paginationAriaLabels: PaginationAriaLabels = {
  navigation: 'Pagination',
  next: 'Next page',
};

export const chartInitialDimension: ChartInitialDimension = {
  height: 200,
  width: 320,
};

export const chartConfigBase: ChartConfigBase = { label: 'Deployments' };
export const chartConfigColor: ChartConfigColor = { color: '#1677ff' };
export const chartConfigTheme: ChartConfigTheme = {
  theme: { dark: '#4096ff', light: '#1677ff' },
};
export const chartConfigItem: ChartConfigItem = {
  ...chartConfigBase,
  ...chartConfigColor,
};
export const chartConfig: ChartConfig = { deployments: chartConfigItem };
export const chartStyleProps: ChartStyleProps = {
  config: chartConfig,
  id: 'deployments',
};

export const dropdownMenuItem: DropdownMenuItemEntry = { label: 'Open' };
export const dropdownMenuLabel: DropdownMenuLabelEntry = {
  label: 'Workspace',
  type: 'label',
};
export const dropdownMenuSeparator: DropdownMenuSeparatorEntry = {
  type: 'separator',
};
export const dropdownMenuCheckbox: DropdownMenuCheckboxEntry = {
  checked: true,
  label: 'Pinned',
  type: 'checkbox',
};
export const dropdownMenuRadioOption: DropdownMenuRadioOption = {
  label: 'List',
  value: 'list',
};
export const dropdownMenuRadio: DropdownMenuRadioEntry = {
  items: [dropdownMenuRadioOption],
  type: 'radio',
  value: 'list',
};
export const dropdownMenuEntries: DropdownMenuEntry[] = [
  dropdownMenuItem,
  dropdownMenuLabel,
  dropdownMenuSeparator,
  dropdownMenuCheckbox,
  dropdownMenuRadio,
];

export const navigationMenuLinkProps: NavigationMenuLinkProps = {
  href: '/docs',
};
export const navigationMenuLink: NavigationMenuLinkComponent = () => null;
export const navigationMenuLinkSlots: NavigationMenuLinkSlots = {
  Link: navigationMenuLink,
};
