import * as React from 'react';

import {
  Pagination,
  type PaginationAriaLabelContext,
  type PaginationClassNames,
  type PaginationItemType,
  type PaginationQuickJumperOptions,
  type PaginationRenderItemProps,
  type PaginationSimpleOptions,
  type PaginationSizeChangerOptions,
  type PaginationStyles,
} from '../index';

const itemType: PaginationItemType = 'page';
const ariaContext: PaginationAriaLabelContext = {
  page: 2,
  selected: false,
  type: itemType,
};
const classNames: PaginationClassNames = {
  content: 'content',
  control: 'control',
  ellipsis: 'ellipsis',
  item: 'item',
  pageSize: 'page-size',
  quickJumper: 'quick-jumper',
  summary: 'summary',
};
const styles: PaginationStyles = {
  ...Object.fromEntries(
    Object.keys(classNames).map((slot) => [slot, { opacity: 1 }])
  ),
};
const quickJumper: PaginationQuickJumperOptions = {
  goButton: 'Go',
  label: 'Jump to',
  suffix: 'page',
};
const simple: PaginationSimpleOptions = { readOnly: true };
const sizeChanger: PaginationSizeChangerOptions = {
  getOptionLabel: (pageSize) => `${pageSize} / page`,
  options: [10, 20, 50],
};
const renderItem = ({
  originalElement,
}: PaginationRenderItemProps): React.ReactNode => originalElement;

export const paginationTypeTests = (
  <>
    <Pagination
      ariaLabels={{ page: (page) => `Page ${page}` }}
      boundaries={2}
      classNames={classNames}
      defaultCurrent={3}
      getItemAriaLabel={(context) =>
        context === ariaContext ? 'Current page' : `Page ${context.page}`
      }
      pageCount={20}
      renderItem={renderItem}
      first
      last
      next="Next"
      previous="Previous"
      siblings={2}
      simple={simple}
      styles={styles}
    />
    <Pagination
      defaultPageSize={20}
      onChange={(page, pageSize) => [page, pageSize]}
      onPageSizeChange={(page, pageSize) => [page, pageSize]}
      showQuickJumper={quickJumper}
      showSizeChanger={sizeChanger}
      showTotal={(total, range) => `${range[0]}-${range[1]} / ${total}`}
      total={500}
    />
    {/* @ts-expect-error Pagination requires exactly one count source. */}
    <Pagination />
    {/* @ts-expect-error total and pageCount are mutually exclusive. */}
    <Pagination pageCount={20} total={500} />
    {/* @ts-expect-error showTotal requires item-count mode. */}
    <Pagination pageCount={20} showTotal />
    {/* @ts-expect-error Pagination uses the explicit md size name. */}
    <Pagination pageCount={20} size="default" />
  </>
);
