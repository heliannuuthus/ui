import '@heliannuuthus/ui/styles.css';
import { useState, type ReactNode } from 'react';
import { Pagination } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const PageSummary = ({ children }: { children: ReactNode }) => {
    return <div className="pagination-summary">{children}</div>;
  };

  const PaginationControlledDemo = () => {
    const [page, setPage] = useState(3);
    return (
      <div className="pagination-demo-stack">
        <PageSummary>
          <span>{copy('成员列表')}</span>
          <strong>
            {copy('第')}
            {page}
            {copy('页，共 5 页')}
          </strong>
        </PageSummary>
        <Pagination
          ariaLabels={{
            more: copy('更多页面'),
            navigation: copy('分页'),
            next: copy('前往下一页'),
            previous: copy('前往上一页'),
          }}
          current={page}
          onChange={setPage}
          pageCount={5}
        />
      </div>
    );
  };

  return PaginationControlledDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function PaginationCase01({
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
