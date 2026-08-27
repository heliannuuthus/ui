import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
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

  const manualReleaseRecords: ReleaseRecord[] = Array.from(
    { length: 20 },
    (_, index) => ({
      version: `v0.${12 - Math.floor(index / 4)}.${3 - (index % 4)}`,
      environment: copy(
        index % 4 === 0 ? '生产' : index % 4 === 1 ? '预览' : '测试'
      ),
      owner: [copy('林默'), copy('周一'), copy('许澄')][index % 3],
      status:
        index % 11 === 0
          ? copy('回滚')
          : index % 5 === 0
            ? copy('运行中')
            : copy('成功'),
    })
  );

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

  const TableManualModeDemo = () => {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<Table.SortState | null>(null);
    const [page, setPage] = useState(1);
    const pageSize = 6;
    const filteredRows = manualReleaseRecords.filter((row) =>
      row.version.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    const sortedRows = [...filteredRows].sort((left, right) => {
      if (!sort) return 0;
      const direction = sort.order === 'ascending' ? 1 : -1;
      return left.version.localeCompare(right.version) * direction;
    });
    const pageRows = sortedRows.slice((page - 1) * pageSize, page * pageSize);

    return (
      <div className="display-table-managed">
        <Table
          columns={releaseColumns.slice(0, 4)}
          data={pageRows}
          pagination={{
            current: page,
            mode: 'manual',
            onChange: setPage,
            pageSize,
            total: sortedRows.length,
          }}
          rowKey="version"
          search={{
            mode: 'manual',
            onChange: (value) => {
              setPage(1);
              setQuery(value);
            },
            placeholder: copy('搜索服务端数据…'),
            value: query,
          }}
          sorting={{
            mode: 'manual',
            onChange: (value) => {
              setPage(1);
              setSort(value);
            },
            value: sort,
          }}
        />
      </div>
    );
  };

  return TableManualModeDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase08({
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
