import '@heliannuuthus/ui/styles.css';
import { Fragment, useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { ChevronRight } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const expandableTableRows = [
    {
      id: 'REL-1842',
      service: 'Web Console',
      status: copy('成功'),
      duration: '1m 48s',
      detail: copy('流量已分四批切换完成，错误率维持在 0.03%，无需人工干预。'),
    },
    {
      id: 'REL-1841',
      service: 'Auth API',
      status: copy('观察中'),
      duration: '2m 16s',
      detail: copy('新实例已全部就绪，当前继续观察登录成功率与令牌刷新延迟。'),
    },
    {
      id: 'REL-1840',
      service: 'Event Worker',
      status: copy('待执行'),
      duration: '—',
      detail: copy(
        '等待 Auth API 观察窗口结束后开始部署，预计占用 3 个执行实例。'
      ),
    },
  ];

  const TableExpandableDemo = () => {
    const [expandedId, setExpandedId] = useState<string | null>('REL-1842');

    return (
      <div className="display-table-shell">
        <Table.Primitive>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-12">
                <span className="sr-only">{copy('展开')}</span>
              </Table.Head>
              <Table.Head>{copy('发布单')}</Table.Head>
              <Table.Head>{copy('服务')}</Table.Head>
              <Table.Head align="end">{copy('耗时')}</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {expandableTableRows.map((row) => {
              const expanded = expandedId === row.id;

              return (
                <Fragment key={row.id}>
                  <Table.Row>
                    <Table.Cell>
                      <Button
                        aria-expanded={expanded}
                        aria-label={`${expanded ? copy('收起') : copy('展开')} ${row.id}`}
                        size="icon-xs"
                        variant="ghost"
                        onClick={() => setExpandedId(expanded ? null : row.id)}
                      >
                        <ChevronRight
                          aria-hidden="true"
                          className={expanded ? 'rotate-90' : undefined}
                        />
                      </Button>
                    </Table.Cell>
                    <Table.Cell className="font-medium">{row.id}</Table.Cell>
                    <Table.Cell>
                      <span className="display-table-cell-stack">
                        <strong>{row.service}</strong>
                        <small>{row.status}</small>
                      </span>
                    </Table.Cell>
                    <Table.Cell align="end">{row.duration}</Table.Cell>
                  </Table.Row>
                  {expanded ? (
                    <Table.Row>
                      <Table.Cell
                        className="bg-muted/35 p-4 whitespace-normal text-muted-foreground"
                        colSpan={4}
                      >
                        <strong>{copy('部署详情')}</strong>
                        <p>{row.detail}</p>
                      </Table.Cell>
                    </Table.Row>
                  ) : null}
                </Fragment>
              );
            })}
          </Table.Body>
        </Table.Primitive>
      </div>
    );
  };

  return TableExpandableDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase12({
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
