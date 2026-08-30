import '@heliannuuthus/ui/styles.css';
import { Button, Table } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Table.Primitive>
      <Table.Header>
        <Table.Row>
          <Table.Head>服务</Table.Head>
          <Table.Head align="center">操作</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Web Console</Table.Cell>
          <Table.Cell align="center">
            <Button aria-label="查看 Web Console" size="xs" variant="ghost">
              查看
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2}>共 1 项</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Primitive>
  );
})();

const EnExample = (() => {
  return () => (
    <Table.Primitive>
      <Table.Header>
        <Table.Row>
          <Table.Head>Services</Table.Head>
          <Table.Head align="center">Operation</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Web Console</Table.Cell>
          <Table.Cell align="center">
            <Button aria-label="View Web Console" size="xs" variant="ghost">
              View
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2}>1 item in total</Table.Cell>
        </Table.Row>
      </Table.Footer>
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
