import '@heliannuuthus/ui/styles.css';
import { useState, type ReactNode } from 'react';
import { Pagination } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const PageSummary = ({ children }: { children: ReactNode }) => {
    return <div className="pagination-summary">{children}</div>;
  };

  const PaginationOverflowDemo = () => {
    const [page, setPage] = useState(24);
    const [pageSize, setPageSize] = useState(20);

    return (
      <div className="pagination-demo-stack pagination-demo-stack-wide">
        <PageSummary>
          <span>{copy('审计日志')}</span>
          <strong>{copy('2,480 条记录')}</strong>
        </PageSummary>
        <Pagination
          align="start"
          ariaLabels={{
            first: copy('前往第一页'),
            last: copy('前往最后一页'),
            more: copy('更多页面'),
            navigation: copy('分页'),
            next: copy('前往下一页'),
            page: (targetPage) =>
              `${copy('前往第')} ${targetPage} ${copy('页')}`,
            pageSize: copy('每页条数'),
            previous: copy('前往上一页'),
            quickJumper: copy('跳转页码'),
          }}
          classNames={{ summary: 'mr-auto font-medium' }}
          current={page}
          getItemHref={(page) => `#page-${page}`}
          onChange={setPage}
          onPageSizeChange={(nextPage, nextPageSize) => {
            setPage(nextPage);
            setPageSize(nextPageSize);
          }}
          pageSize={pageSize}
          showQuickJumper={{
            label: copy('跳至'),
            suffix: copy('页'),
          }}
          showSizeChanger={{
            getOptionLabel: (value) => `${value} ${copy('条 / 页')}`,
            options: [10, 20, 50, 100],
          }}
          showTotal={(total, range) =>
            `${range[0]}–${range[1]} / ${total.toLocaleString()} ${copy('项')}`
          }
          size="sm"
          total={2480}
        />
      </div>
    );
  };

  return PaginationOverflowDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function PaginationCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-pagination">
      <Example />
    </div>
  );
}
