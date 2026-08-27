import '@heliannuuthus/ui/styles.css';
import { Button, Table } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Table.Primitive classNames={{ table: 'min-w-[960px] table-fixed' }}>
      <Table.Header>
        <Table.Row>
          <Table.Head fixed="start" className="w-40">
            服务
          </Table.Head>
          <Table.Head className="w-28">版本</Table.Head>
          <Table.Head className="w-28">区域</Table.Head>
          <Table.Head className="w-32">最近部署</Table.Head>
          <Table.Head fixed="end" align="center" className="w-24">
            操作
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell fixed="start">Web Console</Table.Cell>
          <Table.Cell>v0.12.0</Table.Cell>
          <Table.Cell fixed="end" align="center">
            <Button aria-label="监控 Web Console" size="xs" variant="ghost">
              监控
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Primitive>
  );
})();

const EnExample = (() => {
  return () => (
    <Table.Primitive classNames={{ table: 'min-w-[960px] table-fixed' }}>
      <Table.Header>
        <Table.Row>
          <Table.Head fixed="start" className="w-40">
            Service
          </Table.Head>
          <Table.Head className="w-28">Version</Table.Head>
          <Table.Head className="w-28">Region</Table.Head>
          <Table.Head className="w-32">Recently deployed</Table.Head>
          <Table.Head fixed="end" align="center" className="w-24">
            Operation
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell fixed="start">Web Console</Table.Cell>
          <Table.Cell>v0.12.0</Table.Cell>
          <Table.Cell fixed="end" align="center">
            <Button
              aria-label="Monitoring Web Console"
              size="xs"
              variant="ghost"
            >
              Monitor
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Primitive>
  );
})();

export default function ExampleCase({
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
