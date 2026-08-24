import type {
  BreadcrumbMenuItem,
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
