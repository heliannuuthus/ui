import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { ArrowUpRight } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const cellTableRows = [
    {
      service: 'Realtime Collaboration Gateway',
      description: copy(
        '承载多人编辑光标、文档增量同步以及离线重连后的冲突合并。'
      ),
      successRate: '99.98%',
      action: copy('配置'),
    },
    {
      service: 'Notification',
      description: copy('推送发布通知。'),
      successRate: '98.62%',
      action: copy('查看'),
    },
  ];

  const TableActionCell = ({
    action,
    service,
  }: {
    action: string;
    service: string;
  }) => {
    return (
      <Button
        aria-label={`${action} ${service}`}
        size="xs"
        type="button"
        variant="ghost"
      >
        {action}
        <ArrowUpRight data-icon="inline-end" />
      </Button>
    );
  };

  const TableCellDemo = () => {
    return (
      <div className="display-table-shell display-table-wide">
        <Table.Primitive classNames={{ table: 'min-w-[680px] table-fixed' }}>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-52">{copy('服务（靠左）')}</Table.Head>
              <Table.Head
                ellipsis={copy('服务说明、最近一次生产部署上下文与异常原因')}
                className="w-64"
              >
                {copy('服务说明、最近一次生产部署上下文与异常原因')}
              </Table.Head>
              <Table.Head align="end" className="w-28">
                {copy('成功率（靠右）')}
              </Table.Head>
              <Table.Head align="center" className="w-28">
                {copy('操作（居中）')}
              </Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {cellTableRows.map((row) => (
              <Table.Row key={row.service}>
                <Table.Cell className="font-medium">{row.service}</Table.Cell>
                <Table.Cell ellipsis>{row.description}</Table.Cell>
                <Table.Cell align="end">{row.successRate}</Table.Cell>
                <Table.Cell align="center">
                  <TableActionCell action={row.action} service={row.service} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Primitive>
      </div>
    );
  };

  return TableCellDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TableCase13({
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
