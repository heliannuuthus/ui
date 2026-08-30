import { Fragment, type ReactNode } from 'react';
import { Popover, Table, Tag, Typography } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';

import { resources } from '../i18n/resources';
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

type ApiTypeKind = 'alias' | 'function' | 'object' | 'union';

type ApiTypeMember = {
  defaultValue?: string | null;
  description?: string;
  name: string;
  optional?: boolean;
  type: string;
};

const splitTopLevel = (value: string, delimiter: ';' | '\n') => {
  const segments: string[] = [];
  let current = '';
  let quote: '"' | "'" | '`' | null = null;
  let escaped = false;
  let round = 0;
  let square = 0;
  let curly = 0;
  let angle = 0;

  for (const character of value) {
    if (quote != null) {
      current += character;
      if (escaped) {
        escaped = false;
      } else if (character === '\\') {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
      continue;
    }

    if (character === '"' || character === "'" || character === '`') {
      quote = character;
      current += character;
      continue;
    }

    if (character === '(') round += 1;
    if (character === ')') round = Math.max(0, round - 1);
    if (character === '[') square += 1;
    if (character === ']') square = Math.max(0, square - 1);
    if (character === '{') curly += 1;
    if (character === '}') curly = Math.max(0, curly - 1);
    if (character === '<') angle += 1;
    if (character === '>') angle = Math.max(0, angle - 1);

    const topLevel = round === 0 && square === 0 && curly === 0 && angle === 0;
    if (character === delimiter && topLevel) {
      if (current.trim()) segments.push(current.trim());
      current = '';
    } else {
      current += character;
    }
  }

  if (current.trim()) segments.push(current.trim());
  return segments;
};

const findMemberColon = (value: string) => {
  let round = 0;
  let square = 0;
  let angle = 0;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    if (character === '(') round += 1;
    if (character === ')') round = Math.max(0, round - 1);
    if (character === '[') square += 1;
    if (character === ']') square = Math.max(0, square - 1);
    if (character === '<') angle += 1;
    if (character === '>') angle = Math.max(0, angle - 1);
    if (character === ':' && round === 0 && square === 0 && angle === 0) {
      return index;
    }
  }

  return -1;
};

const declarationMembers = (declaration?: string): ApiTypeMember[] => {
  if (!declaration) return [];
  const open = declaration.indexOf('{');
  const close = declaration.lastIndexOf('}');
  if (open < 0 || close <= open) return [];

  const body = declaration.slice(open + 1, close).trim();
  const segments = splitTopLevel(body, body.includes(';') ? ';' : '\n');

  return segments.flatMap((segment) => {
    const colon = findMemberColon(segment);
    if (colon < 0) return [];
    const rawName = segment.slice(0, colon).trim();
    const type = segment.slice(colon + 1).trim();
    if (!rawName || !type) return [];
    const optional = rawName.endsWith('?');
    const name = (optional ? rawName.slice(0, -1) : rawName).trim();
    return [{ name, optional, type }];
  });
};

const declarationKind = (declaration?: string): ApiTypeKind => {
  if (!declaration) return 'alias';
  const assignment = declaration.slice(declaration.indexOf('=') + 1).trim();
  if (assignment.includes('=>')) return 'function';
  if (assignment.includes('|')) return 'union';
  if (assignment.includes('{')) return 'object';
  return 'alias';
};

const typeMembers = (reference: ApiTypeReference): ApiTypeMember[] => {
  const rows = new Map(reference.rows?.map((row) => [row.name, row]));
  const parsed = declarationMembers(reference.declaration).map((member) => {
    const row = rows.get(member.name);
    rows.delete(member.name);
    return {
      ...member,
      defaultValue: row?.defaultValue,
      description: row?.description,
      type: row?.type ?? member.type,
    };
  });
  return [
    ...parsed,
    ...[...rows.values()].map((row) => ({
      defaultValue: row.defaultValue,
      description: row.description,
      name: row.name,
      type: row.type,
    })),
  ];
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

// Keep component API tables focused on the decisions consumers need to make.
// These React/HTML plumbing props remain supported by the components and types;
// examples and accessibility guidance document them where they are relevant.
const hiddenApiTablePropertyNames = new Set([
  'autoComplete',
  'autoFocus',
  'children',
  'className',
  'form',
  'id',
  'inputRef',
  'name',
  'onBlur',
  'onFocus',
  'parent',
  'pattern',
  'readOnly',
  'ref',
  'required',
  'role',
  'style',
  'tabIndex',
]);

const isApiTablePropertyVisible = (name: string) =>
  !hiddenApiTablePropertyNames.has(name) &&
  !name.startsWith('aria-') &&
  !name.startsWith('data-');

const ApiTypePopoverContent = ({
  labels,
  name,
  reference,
}: {
  labels: ApiTableLabels;
  name: string;
  reference: ApiTypeReference;
}) => {
  const locale = useLocation().pathname.startsWith('/en/') ? 'en' : 'zh';
  const copy = resources[locale].common.docs.typeCard;
  const kind = declarationKind(reference.declaration);
  const members = typeMembers(reference);

  return (
    <div className="docs-api-type-popover-content">
      <div className="docs-api-type-popover-identity">
        <span className="docs-api-type-popover-name">
          <Tag type="primary">type</Tag>
          <Typography.Code>{name}</Typography.Code>
        </span>
        <Typography.Text as="span" size="sm" tone="muted">
          {copy[kind]}
          {members.length > 0
            ? ` · ${copy.members.replace('{{count}}', String(members.length))}`
            : null}
        </Typography.Text>
      </div>

      {members.length > 0 ? (
        <section
          aria-label={copy.fields}
          className="docs-api-type-popover-section"
        >
          <Typography.Text
            as="div"
            className="docs-api-type-popover-section-title"
            size="sm"
            weight="semibold"
          >
            {copy.fields}
          </Typography.Text>
          <dl
            aria-label={`${labels.type}: ${name}`}
            className="docs-api-type-popover-members"
          >
            {members.map((member) => (
              <div className="docs-api-type-popover-member" key={member.name}>
                <dt>
                  <span className="docs-api-type-popover-member-name">
                    <Typography.Code>{member.name}</Typography.Code>
                    {member.optional == null ? null : (
                      <Tag type={member.optional ? 'default' : 'success'}>
                        {member.optional ? copy.optional : copy.required}
                      </Tag>
                    )}
                  </span>
                  <Typography.Code className="docs-api-type-popover-member-type">
                    {member.type}
                  </Typography.Code>
                </dt>
                {member.description ? <dd>{member.description}</dd> : null}
                {member.defaultValue == null ? null : (
                  <dd>
                    {labels.defaultValue}:{' '}
                    <Typography.Code>{member.defaultValue}</Typography.Code>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {reference.declaration ? (
        <section
          aria-label={copy.declaration}
          className="docs-api-type-popover-section"
        >
          <Typography.Text
            as="div"
            className="docs-api-type-popover-section-title"
            size="sm"
            weight="semibold"
          >
            {copy.declaration}
          </Typography.Text>
          <pre className="docs-api-type-popover-code">
            <Typography.Code>{reference.declaration}</Typography.Code>
          </pre>
        </section>
      ) : null}
    </div>
  );
};

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
      <Popover
        align="start"
        classNames={{ content: 'docs-api-type-popover' }}
        content={
          <ApiTypePopoverContent
            labels={labels}
            name={part}
            reference={reference}
          />
        }
        key={`${part}-${index}`}
        side="top"
        sideOffset={8}
        trigger={
          <button
            aria-label={`${labels.type}: ${part}`}
            className="docs-api-type-reference"
            type="button"
          >
            {part}
          </button>
        }
      />
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
  const visibleRows = rows.filter((row) => isApiTablePropertyVisible(row.name));

  visibleRows.forEach((row) => {
    const componentRows = groups.get(row.component);
    if (componentRows) {
      componentRows.push(row);
    } else {
      groups.set(row.component, [row]);
    }
  });

  const referencedGroups = new Set(
    [...groups.keys()].filter((name) =>
      visibleRows.some(
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
