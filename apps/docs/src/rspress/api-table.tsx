import { Fragment, type ReactNode } from 'react';
import { Table, Tooltip, Typography } from '@heliannuuthus/ui';

import { apiTypeDefinitions } from './api-type-definitions';

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

type ApiTypeReference = {
  declaration?: string;
  rows?: ApiTableRow[];
};

const escapeRegularExpression = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const referencesType = (value: string, name: string) =>
  new RegExp(
    `(^|[^A-Za-z0-9_$])${escapeRegularExpression(name)}(?=$|[^A-Za-z0-9_$])`
  ).test(value);

const referencesTypeGroup = (value: string, name: string) =>
  new RegExp(
    `(^|[^A-Za-z0-9_$])${escapeRegularExpression(name)}(?=$|[^A-Za-z0-9_$.])`
  ).test(value);

const ApiTypeTooltipContent = ({
  labels,
  name,
  reference,
}: {
  labels: ApiTableLabels;
  name: string;
  reference: ApiTypeReference;
}) => (
  <div className="docs-api-type-tooltip-content">
    <Typography.Text className="docs-api-type-tooltip-title" weight="semibold">
      {name}
    </Typography.Text>
    {reference.declaration ? (
      <pre className="docs-api-type-tooltip-code">
        <Typography.Code>{reference.declaration}</Typography.Code>
      </pre>
    ) : null}
    {reference.rows?.length ? (
      <dl
        aria-label={`${labels.type}: ${name}`}
        className="docs-api-type-tooltip-members"
      >
        {reference.rows.map((row) => (
          <div className="docs-api-type-tooltip-member" key={row.name}>
            <dt>
              <Typography.Code>{row.name}</Typography.Code>
              <span aria-hidden="true">: </span>
              <Typography.Code>{row.type}</Typography.Code>
            </dt>
            <dd>{row.description}</dd>
          </div>
        ))}
      </dl>
    ) : null}
  </div>
);

const ApiTypeValue = ({
  labels,
  references,
  value,
}: {
  labels: ApiTableLabels;
  references: Map<string, ApiTypeReference>;
  value: string;
}) => {
  const names = [...references.keys()]
    .filter((name) => referencesType(value, name))
    .sort((left, right) => right.length - left.length);

  if (names.length === 0) return value;

  const pattern = new RegExp(
    `(${names.map(escapeRegularExpression).join('|')})`,
    'g'
  );

  return value.split(pattern).map((part, index): ReactNode => {
    const reference = references.get(part);

    if (!reference) return <Fragment key={`${part}-${index}`}>{part}</Fragment>;

    return (
      <Tooltip
        classNames={{ content: 'docs-api-type-tooltip' }}
        content={
          <ApiTypeTooltipContent
            labels={labels}
            name={part}
            reference={reference}
          />
        }
        key={`${part}-${index}`}
        openDelay={120}
        placement="topLeft"
      >
        <button
          aria-label={`${labels.type}: ${part}`}
          className="docs-api-type-reference"
          type="button"
        >
          {part}
        </button>
      </Tooltip>
    );
  });
};

export const ApiTable = ({
  labels,
  rows,
}: {
  labels: ApiTableLabels;
  rows: ApiTableRow[];
}) => {
  const groups = new Map<string, ApiTableRow[]>();

  rows.forEach((row) => {
    const componentRows = groups.get(row.component);
    if (componentRows) {
      componentRows.push(row);
    } else {
      groups.set(row.component, [row]);
    }
  });

  const referencedGroups = new Set(
    [...groups.keys()].filter((name) =>
      rows.some(
        (row) => row.component !== name && referencesTypeGroup(row.type, name)
      )
    )
  );
  const typeReferences = new Map<string, ApiTypeReference>();

  Object.entries(apiTypeDefinitions).forEach(([name, declaration]) => {
    typeReferences.set(name, {
      declaration,
      rows: groups.get(name),
    });
  });
  referencedGroups.forEach((name) => {
    if (!typeReferences.has(name)) {
      typeReferences.set(name, { rows: groups.get(name) });
    }
  });

  const componentGroups = [...groups].filter(
    ([name]) => !typeReferences.has(name)
  );

  return (
    <div className="docs-api-tables">
      {componentGroups.map(([component, componentRows]) => (
        <section
          aria-label={`${labels.component}: ${component}`}
          className="docs-api-table-section"
          key={component}
        >
          <Typography.Title className="docs-api-table-title" level={3}>
            {component}
          </Typography.Title>
          <Table.Primitive
            className="docs-api-table-wrap"
            classNames={{ table: 'docs-api-table' }}
          >
            <colgroup>
              <col className="docs-api-table-name" />
              <col className="docs-api-table-type" />
              <col className="docs-api-table-default" />
              <col className="docs-api-table-description" />
            </colgroup>
            <Table.Header>
              <Table.Row>
                <Table.Head scope="col">{labels.name}</Table.Head>
                <Table.Head scope="col">{labels.type}</Table.Head>
                <Table.Head scope="col">{labels.defaultValue}</Table.Head>
                <Table.Head scope="col">{labels.description}</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {componentRows.map((row, index) => (
                <Table.Row key={`${row.name}-${index}`}>
                  <Table.Cell data-label={labels.name}>
                    <Typography.Code className="docs-api-table-property">
                      {row.name}
                    </Typography.Code>
                  </Table.Cell>
                  <Table.Cell data-label={labels.type}>
                    <Typography.Code className="docs-api-table-value">
                      <ApiTypeValue
                        labels={labels}
                        references={typeReferences}
                        value={row.type}
                      />
                    </Typography.Code>
                  </Table.Cell>
                  <Table.Cell data-label={labels.defaultValue}>
                    {row.defaultValue == null ? (
                      '—'
                    ) : (
                      <Typography.Code className="docs-api-table-value">
                        {row.defaultValue}
                      </Typography.Code>
                    )}
                  </Table.Cell>
                  <Table.Cell data-label={labels.description}>
                    {row.description}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Primitive>
        </section>
      ))}
    </div>
  );
};
