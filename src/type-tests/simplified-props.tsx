import { Collapsible, Dialog, Drawer, Table, Tabs } from '..';

type Row = {
  id: string;
  locked: boolean;
};

const rows: Row[] = [{ id: 'one', locked: false }];
const columns: Table.Column<Row>[] = [{ accessor: 'id', header: 'ID' }];

const expandLabels: Table.ExpandLabels<Row> = {
  collapse: (row) => `Collapse ${row.id}`,
  expand: (row) => `Expand ${row.id}`,
};
const selectionLabels: Table.SelectionLabels<Row> = {
  all: (items) => `Select ${items.length} rows`,
  item: (row) => `Select ${row.id}`,
};

void (
  <Collapsible
    content="Details"
    header="Summary"
    indicator={<span aria-hidden>+</span>}
  />
);
void (<Collapsible content="Details" header="Summary" indicator={false} />);

void (<Dialog closable={<span aria-hidden>×</span>} title="Settings" />);

void (
  <Drawer
    closable={<span aria-hidden>×</span>}
    handle={<span aria-hidden>—</span>}
    onSnapChange={(value) => value?.valueOf()}
    sequential
    snapPoints={[0.25, 0.5, 1]}
  />
);

void (
  <Tabs
    items={[{ content: 'Panel', label: 'Tab', value: 'tab' }]}
    scrollLabels={{ end: 'Next tabs', start: 'Previous tabs' }}
  />
);

void (
  <Table
    columns={columns}
    data={rows}
    expandable={{
      canExpand: (row) => !row.locked,
      defaultValue: ['one'],
      labels: expandLabels,
      onChange: (value) => value.length,
      render: (row) => row.id,
    }}
    pagination={{ summary: (total) => `${total} rows` }}
    rowKey="id"
    rowSelection={{
      defaultValue: ['one'],
      disabled: (row) => row.locked,
      labels: selectionLabels,
      onChange: (value) => value.length,
    }}
  />
);
