import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type VirtualTableRecord = {
    id: string;
    latency: string;
    region: string;
    service: string;
  };

  const virtualTableRecords: VirtualTableRecord[] = Array.from(
    { length: 1000 },
    (_, index) => ({
      id: `EVT-${String(index + 1).padStart(4, '0')}`,
      service: ['Web Console', 'Auth API', 'Event Worker', 'Search Indexer'][
        index % 4
      ],
      region: [copy('华东'), copy('华北'), copy('新加坡'), copy('法兰克福')][
        index % 4
      ],
      latency: `${32 + ((index * 17) % 180)} ms`,
    })
  );

  const virtualTableColumns: Table.Column<VirtualTableRecord>[] = [
    {
      accessor: 'id',
      classNames: { cell: 'font-medium' },
      fixed: 'start',
      header: copy('事件'),
      width: 128,
    },
    {
      accessor: 'service',
      classNames: { header: 'font-semibold' },
      ellipsis: true,
      header: copy('服务'),
      width: 256,
    },
    {
      accessor: 'region',
      header: copy('区域'),
      width: 128,
    },
    {
      accessor: 'latency',
      align: 'end',
      header: copy('延迟'),
      styles: { cell: { fontVariantNumeric: 'tabular-nums' } },
      width: 128,
    },
    {
      key: 'actions',
      align: 'center',
      fixed: 'end',
      header: copy('操作'),
      width: 112,
      render: (_, row) => (
        <Stack
          align="center"
          aria-label={copy(`${row.id} 操作`)}
          gap={4}
          justify="center"
          orientation="horizontal"
          role="group"
        >
          <Button size="xs" variant="ghost">
            {copy('查看')}
          </Button>
        </Stack>
      ),
    },
  ];

  const TableManagedVirtualDemo = () => {
    return (
      <div className="display-table-managed">
        <Table
          columns={virtualTableColumns}
          data={virtualTableRecords}
          rowKey="id"
          pagination={false}
          classNames={{ table: 'min-w-[900px]' }}
          virtual={{
            containerHeight: 320,
            overscan: 8,
            rowHeight: 48,
          }}
        />
      </div>
    );
  };

  return TableManagedVirtualDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase04({
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
