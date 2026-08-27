type ApiTableLabels = {
  component: string;
  defaultValue: string;
  description: string;
  name: string;
  type: string;
};

type ApiTableRow = {
  component: string;
  defaultValue: string | null;
  description: string;
  name: string;
  type: string;
};

export const ApiTable = ({
  labels,
  rows,
}: {
  labels: ApiTableLabels;
  rows: ApiTableRow[];
}) => (
  <Table.Primitive
    className="docs-api-table-wrap"
    classNames={{ table: 'docs-api-table' }}
  >
    <Table.Header>
      <Table.Row>
        <Table.Head>{labels.component}</Table.Head>
        <Table.Head>{labels.name}</Table.Head>
        <Table.Head>{labels.type}</Table.Head>
        <Table.Head>{labels.defaultValue}</Table.Head>
        <Table.Head>{labels.description}</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {rows.map((row, index) => (
        <Table.Row key={`${row.component}-${row.name}-${index}`}>
          <Table.Cell>{row.component}</Table.Cell>
          <Table.Cell>
            <Typography.Code>{row.name}</Typography.Code>
          </Table.Cell>
          <Table.Cell>
            <Typography.Code>{row.type}</Typography.Code>
          </Table.Cell>
          <Table.Cell>
            {row.defaultValue == null ? (
              '—'
            ) : (
              <Typography.Code>{row.defaultValue}</Typography.Code>
            )}
          </Table.Cell>
          <Table.Cell>{row.description}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Primitive>
);
import { Table, Typography } from '@heliannuuthus/ui';
