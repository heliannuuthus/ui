import * as React from 'react';

import {
  Pagination,
  type PaginationLabelContext,
  type PaginationClasses,
  type PaginationItemType,
  type PaginationJumpOptions,
  type PaginationRenderProps,
  type PaginationSimpleOptions,
  type PaginationLimitSelectorOptions,
  type PaginationStyles,
} from '../index';

const itemType: PaginationItemType = 'page';
const ariaContext: PaginationLabelContext = {
  page: 2,
  selected: false,
  type: itemType,
};
const classes: PaginationClasses = {
  content: 'content',
  control: 'control',
  ellipsis: 'ellipsis',
  item: 'item',
  pageSize: 'page-size',
  jump: 'quick-jumper',
  summary: 'summary',
};
const styles: PaginationStyles = {
  ...Object.fromEntries(
    Object.keys(classes).map((slot) => [slot, { opacity: 1 }])
  ),
};
const jump: PaginationJumpOptions = {
  button: 'Go',
  label: 'Jump to',
  suffix: 'page',
};
const simple: PaginationSimpleOptions = { readOnly: true };
const sizeChanger: PaginationLimitSelectorOptions = {
  render: (pageSize) => `${pageSize} / page`,
  options: [10, 20, 50],
};
const render = ({ element }: PaginationRenderProps): React.ReactNode => element;

export const paginationTypeTests = (
  <>
    <Pagination
      boundaries={2}
      classes={classes}
      defaultPage={3}
      labels={{
        page: (page) => `Page ${page}`,
        item: (context) =>
          context === ariaContext ? 'Current page' : `Page ${context.page}`,
      }}
      pages={20}
      render={render}
      first
      last
      next="Next"
      previous="Previous"
      siblings={2}
      simple={simple}
      styles={styles}
    />
    <Pagination
      limit={{
        defaultValue: 20,
        onChange: (page, limit) => [page, limit],
        selector: sizeChanger,
      }}
      onChange={(page, pageSize) => [page, pageSize]}
      jump={jump}
      summary={(total, range) => `${range[0]}-${range[1]} / ${total}`}
      total={500}
    />
    {/* @ts-expect-error Pagination requires exactly one count source. */}
    <Pagination />
    {/* @ts-expect-error total and pages are mutually exclusive. */}
    <Pagination pages={20} total={500} />
    {/* @ts-expect-error summary requires item-count mode. */}
    <Pagination pages={20} summary />
    {/* @ts-expect-error Pagination uses the explicit md size name. */}
    <Pagination pages={20} size="default" />
  </>
);
