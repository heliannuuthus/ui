import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { DropdownMenu } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
import { Archive, Download, MoreHorizontal, Trash2 } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type ReleaseRecord = {
    environment: string;
    owner: string;
    status: string;
    version: string;
  };

  const releaseRecords: ReleaseRecord[] = [
    {
      version: 'v0.12.0',
      environment: copy('生产'),
      owner: copy('林默'),
      status: copy('成功'),
    },
    {
      version: 'v0.11.4',
      environment: copy('生产'),
      owner: copy('周一'),
      status: copy('成功'),
    },
    {
      version: 'v0.11.3',
      environment: copy('预览'),
      owner: copy('许澄'),
      status: copy('运行中'),
    },
    {
      version: 'v0.11.2',
      environment: copy('生产'),
      owner: copy('林默'),
      status: copy('回滚'),
    },
    {
      version: 'v0.11.1',
      environment: copy('预览'),
      owner: copy('周一'),
      status: copy('成功'),
    },
  ];

  const releaseColumns: Table.Column<ReleaseRecord>[] = [
    {
      accessor: 'version',
      classNames: { cell: 'font-medium' },
      fixed: 'start',
      header: copy('版本'),
      sortable: true,
      width: 128,
    },
    {
      accessor: 'environment',
      header: copy('环境'),
    },
    { accessor: 'owner', header: copy('负责人') },
    {
      accessor: 'status',
      header: copy('状态'),
      render: (_, row) => {
        const status = row.status;
        return (
          <Tag type={status === copy('回滚') ? 'error' : 'success'}>
            {status}
          </Tag>
        );
      },
    },
    {
      key: 'actions',
      align: 'center',
      fixed: 'end',
      header: copy('操作'),
      width: 144,
      render: (_, row) => (
        <Stack
          align="center"
          aria-label={copy(`${row.version} 操作`)}
          gap={4}
          justify="center"
          orientation="horizontal"
          role="group"
        >
          <Button size="xs" variant="ghost">
            {copy('查看')}
          </Button>
          <DropdownMenu
            align="end"
            classNames={{ content: 'w-44' }}
            trigger={
              <Button
                aria-label={copy(`${row.version} 更多操作`)}
                size="icon-xs"
                variant="ghost"
              >
                <MoreHorizontal />
              </Button>
            }
            items={[
              { label: copy('下载日志'), icon: <Download /> },
              { label: copy('归档记录'), icon: <Archive /> },
              { type: 'separator' },
              {
                label: copy('删除记录'),
                icon: <Trash2 />,
                destructive: true,
              },
            ]}
          />
        </Stack>
      ),
    },
  ];

  const TableManagedExpandableDemo = ({
    mode = 'default',
  }: {
    mode?: 'default' | 'restricted';
  }) => {
    return (
      <div className="display-table-managed">
        <Table
          columns={releaseColumns.slice(0, 4)}
          data={releaseRecords}
          expandable={{
            ...(mode === 'restricted'
              ? {
                  canExpand: (row: (typeof releaseRecords)[number]) =>
                    row.status !== copy('回滚'),
                }
              : undefined),
            defaultValue: ['v0.12.0'],
            header: <span className="sr-only">{copy('展开行')}</span>,
            labels: {
              collapse: (row) => `${copy('收起')} ${row.version}`,
              expand: (row) => `${copy('展开')} ${row.version}`,
            },
            render: (row) => (
              <div className="display-table-managed-expanded">
                <strong>
                  {row.version}
                  {copy('部署详情')}
                </strong>
                <span>
                  {row.environment}
                  {copy('环境由')}
                  {row.owner}
                  {copy('负责，当前状态为')}
                  {row.status}。
                </span>
              </div>
            ),
          }}
          rowKey="version"
          pagination={false}
          classNames={{ table: 'min-w-[640px]' }}
        />
      </div>
    );
  };

  return TableManagedExpandableDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase02({
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
