import {
  Card,
  Checkbox,
  Input,
  Item,
  Marker,
  Radio,
  Resizable,
  Table,
  type CardStyles,
  type CardHeader,
  type CheckboxStyles,
  type InputClassNames,
  type InputNumberStyles,
  type InputStyles,
  type ItemStyles,
  type MarkerStyles,
  type RadioStyles,
  type ResizableStyles,
} from '../index';

const cardStyles: CardStyles = { header: { padding: 8 } };
const cardHeader: CardHeader = {
  title: 'Workspace',
  description: 'Workspace settings',
  action: <button type="button">Edit</button>,
};
const checkboxStyles: CheckboxStyles = { control: { opacity: 0.9 } };
const inputStyles: InputStyles = { input: { letterSpacing: 1 } };
const inputNumberStyles: InputNumberStyles = { group: { maxWidth: 240 } };
const itemStyles: ItemStyles = { content: { minWidth: 0 } };
const markerStyles: MarkerStyles = { icon: { flexShrink: 0 } };
const radioStyles: RadioStyles = { label: { minWidth: 0 } };
const resizableStyles: ResizableStyles = { panel: { minWidth: 0 } };

export const validSemanticStyleUsage = (
  <>
    <Card
      className="card-root"
      header={cardHeader}
      style={{ width: 320 }}
      styles={cardStyles}
      title="Native tooltip"
    />
    <Checkbox styles={checkboxStyles}>Choice</Checkbox>
    <Input prefix="@" styles={inputStyles} />
    <Input.Number styles={inputNumberStyles} />
    <Item styles={itemStyles} title="Item" />
    <Marker content="Marker" styles={markerStyles} />
    <Radio styles={radioStyles} value="choice">
      Choice
    </Radio>
    <Resizable
      items={[{ key: 'content', panel: 'Content' }]}
      styles={resizableStyles}
    />
    <Table
      className="table-root"
      columns={[{ accessor: 'name', header: 'Name' }]}
      data={[{ name: 'Ada' }]}
      style={{ width: '100%' }}
    />
    <Table.Primitive
      className="primitive-root"
      classNames={{ table: 'primitive-table' }}
      style={{ overflowX: 'auto' }}
      styles={{ table: { tableLayout: 'fixed' } }}
    />
  </>
);

const invalidInputClassNames: InputClassNames = {
  // @ts-expect-error Root styles belong to className, not classNames.
  root: 'root',
};
const invalidTableStyles: Table.Styles = {
  // @ts-expect-error Root styles belong to style, not styles.
  root: {},
};
const invalidPrimitiveClassNames: Table.PrimitiveClassNames = {
  // @ts-expect-error Table.Primitive uses className for its scroll-container root.
  root: 'root',
};
// @ts-expect-error Card header configuration always requires a title.
const invalidCardHeader: CardHeader = { description: 'Missing title' };
// @ts-expect-error Card description moved into the unified header prop.
const legacyCardDescription = <Card description="Legacy description" />;
// @ts-expect-error Card action moved into the unified header prop.
const legacyCardAction = <Card action={<button type="button">Edit</button>} />;

void invalidInputClassNames;
void invalidTableStyles;
void invalidPrimitiveClassNames;
void invalidCardHeader;
void legacyCardDescription;
void legacyCardAction;
