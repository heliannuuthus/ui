import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
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

  const groupedReleaseColumns: Table.Column<ReleaseRecord>[] = [
    {
      key: 'release',
      header: copy('发布信息'),
      columns: [
        {
          accessor: 'version',
          header: copy('版本'),
          sortable: true,
        },
        {
          accessor: 'environment',
          header: copy('环境'),
        },
      ],
    },
    {
      key: 'execution',
      header: copy('执行情况'),
      columns: [
        {
          accessor: 'owner',
          header: copy('负责人'),
        },
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
      ],
    },
    {
      key: 'operation',
      align: 'center',
      header: copy('操作'),
      columns: [
        {
          key: 'detail',
          align: 'center',
          header: copy('记录'),
          render: (_, row) => (
            <Stack
              align="center"
              aria-label={copy(`${row.version} 操作`)}
              gap={4}
              justify="center"
              orientation="horizontal"
              role="group"
            >
              <Button size="xs" variant="outline">
                {row.status === copy('运行中') ? copy('监控') : copy('详情')}
              </Button>
            </Stack>
          ),
        },
      ],
    },
  ];

  const TableGroupedHeaderDemo = () => {
    return (
      <div className="display-table-managed display-table-managed-grouped">
        <Table
          columns={groupedReleaseColumns}
          data={releaseRecords}
          classNames={{ table: 'min-w-[660px]' }}
        />
      </div>
    );
  };

  return TableGroupedHeaderDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase03({
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
