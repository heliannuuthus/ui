import '@heliannuuthus/ui/styles.css';
import { Alert } from '@heliannuuthus/ui';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { DropdownMenu } from '@heliannuuthus/ui';
import { Empty } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
import {
  Archive,
  CircleAlert,
  Download,
  Inbox,
  MoreHorizontal,
  RotateCcw,
  Trash2,
} from 'lucide-react';
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

  const TableStatusDemo = ({
    state,
  }: {
    state: 'empty' | 'error' | 'loading';
  }) => {
    if (state === 'error') {
      return (
        <div className="display-table-status-standalone">
          <Alert
            action={
              <Button size="xs" variant="outline">
                <RotateCcw />
                {copy('重试')}
              </Button>
            }
            className="display-table-status-alert"
            description={copy('请求未完成，请检查网络后重新加载。')}
            icon={<CircleAlert />}
            title={copy('发布记录加载失败')}
            variant="error"
          />
        </div>
      );
    }

    if (state === 'empty') {
      return (
        <div className="display-table-status-standalone">
          <Empty
            actions={
              <Button size="sm" variant="outline">
                <RotateCcw />
                {copy('清除筛选')}
              </Button>
            }
            className="display-table-status-empty"
            description={copy('尝试缩短关键词或清除当前筛选条件。')}
            icon={<Inbox />}
            title={copy('没有匹配的发布记录')}
          />
        </div>
      );
    }

    return (
      <Table
        className="display-table-status"
        classNames={{ state: 'display-table-status-cell' }}
        columns={releaseColumns.slice(0, 3)}
        data={releaseRecords.slice(0, 2)}
        loading
        pagination={false}
        rowKey="version"
      />
    );
  };

  return TableStatusDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase07({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-table">
      <Example state="loading" />
    </div>
  );
}
