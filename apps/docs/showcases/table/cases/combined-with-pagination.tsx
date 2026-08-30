import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { Pagination } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const paginatedTableRows = [
    ['REL-1842', 'Web Console', copy('林默'), copy('已完成')],
    ['REL-1841', 'Auth API', copy('周一'), copy('已完成')],
    ['REL-1840', 'Event Worker', copy('许澄'), copy('进行中')],
    ['REL-1839', 'Billing API', copy('林默'), copy('待审批')],
    ['REL-1838', 'Search Indexer', copy('周一'), copy('已完成')],
    ['REL-1837', 'Audit Stream', copy('许澄'), copy('已回滚')],
    ['REL-1836', 'Notification', copy('林默'), copy('已完成')],
  ];

  const TablePaginationDemo = () => {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const pageCount = Math.ceil(paginatedTableRows.length / pageSize);
    const rows = paginatedTableRows.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    return (
      <div className="display-table-composite">
        <div className="display-table-shell">
          <Table.Primitive>
            <Table.Header>
              <Table.Row>
                <Table.Head>{copy('发布单')}</Table.Head>
                <Table.Head>{copy('服务')}</Table.Head>
                <Table.Head>{copy('负责人')}</Table.Head>
                <Table.Head align="center">{copy('操作')}</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows.map(([release, service, owner, status]) => (
                <Table.Row key={release}>
                  <Table.Cell className="font-medium">{release}</Table.Cell>
                  <Table.Cell>{service}</Table.Cell>
                  <Table.Cell>{owner}</Table.Cell>
                  <Table.Cell align="center">
                    <Button
                      aria-label={`${
                        status === copy('待审批')
                          ? copy('审批')
                          : status === copy('进行中')
                            ? copy('跟进')
                            : copy('查看')
                      } ${release}`}
                      size="xs"
                      type="button"
                      variant="ghost"
                    >
                      {status === copy('待审批')
                        ? copy('审批')
                        : status === copy('进行中')
                          ? copy('跟进')
                          : copy('查看')}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Primitive>
        </div>
        <div className="display-table-pagination">
          <span>
            {copy('共')}
            {paginatedTableRows.length}
            {copy('项 · 第')}
            {page} / {pageCount}
            {copy('页')}
          </span>
          <Pagination
            ariaLabels={{
              more: copy('更多页面'),
              navigation: copy('分页'),
              next: copy('前往下一页'),
              previous: copy('前往上一页'),
            }}
            current={page}
            onChange={setPage}
            pageCount={pageCount}
            previous={copy('上一页')}
            next={copy('下一页')}
          />
        </div>
      </div>
    );
  };

  return TablePaginationDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase11({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-table">
      <Example />
    </div>
  );
}
