import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

import { Card, Input, Table } from '../dist/index.js';

const packageRoot = resolve(import.meta.dirname, '..');
const configPath = ts.findConfigFile(
  packageRoot,
  ts.sys.fileExists,
  'tsconfig.json'
);

assert.ok(configPath, 'Unable to locate tsconfig.json.');

const config = ts.readConfigFile(configPath, ts.sys.readFile);
const parsedConfig = ts.parseJsonConfigFileContent(
  config.config,
  ts.sys,
  packageRoot
);
const program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
const checker = program.getTypeChecker();
const entry = program.getSourceFile(resolve(packageRoot, 'src/index.ts'));
assert.ok(entry, 'Unable to locate the public component entry.');
const moduleSymbol = checker.getSymbolAtLocation(entry);
assert.ok(moduleSymbol, 'Unable to resolve public component exports.');
const visited = new Set();
const styleContracts = [];

const propertyNames = (type) =>
  checker
    .getNonNullableType(type)
    .getProperties()
    .map((property) => property.getName())
    .sort();

const inspectComponent = (symbol, name) => {
  const target =
    symbol.flags & ts.SymbolFlags.Alias
      ? checker.getAliasedSymbol(symbol)
      : symbol;
  if (!(target.flags & ts.SymbolFlags.Value)) return;
  const type = checker.getTypeOfSymbolAtLocation(target, entry);
  if (visited.has(type)) return;
  visited.add(type);

  const parameter = type.getCallSignatures()[0]?.getParameters()[0];
  if (parameter) {
    const props = checker.getTypeOfSymbolAtLocation(parameter, entry);
    assert.ok(
      !props.getProperty('classNames'),
      `${name} exposes the obsolete classNames prop.`
    );
    const classes = props.getProperty('classes');
    if (classes) {
      const styles = props.getProperty('styles');
      assert.ok(styles, `${name} exposes classes without styles.`);
      const classSlots = propertyNames(
        checker.getTypeOfSymbolAtLocation(classes, entry)
      );
      const styleSlots = propertyNames(
        checker.getTypeOfSymbolAtLocation(styles, entry)
      );
      assert.ok(
        !classSlots.includes('root'),
        `${name}.classes must not repeat the root target.`
      );
      assert.ok(
        !styleSlots.includes('root'),
        `${name}.styles must not repeat the root target.`
      );
      assert.deepEqual(
        styleSlots,
        classSlots,
        `${name} must expose matching semantic slots.`
      );
      assert.equal(
        Boolean(props.getProperty('className')),
        Boolean(props.getProperty('style')),
        `${name} must expose className and style together.`
      );
      styleContracts.push(name);
    }
  }

  for (const child of type.getProperties()) {
    if (/^[A-Z]/.test(child.getName())) {
      inspectComponent(child, `${name}.${child.getName()}`);
    }
  }
};

for (const symbol of checker.getExportsOfModule(moduleSymbol)) {
  if (/^[A-Z]/.test(symbol.getName())) {
    inspectComponent(symbol, symbol.getName());
  }
}
assert.ok(
  styleContracts.length > 0,
  'Expected public semantic slot contracts.'
);

const inputMarkup = renderToStaticMarkup(
  createElement(Input, {
    className: 'input-root',
    classes: { input: 'input-control' },
    prefix: '@',
    style: { width: 320 },
    styles: { input: { letterSpacing: 2 } },
  })
);
assert.match(inputMarkup, /^<div\b[^>]*class="[^"]*input-root/);
assert.match(inputMarkup, /^<div\b[^>]*style="width:320px"/);
assert.match(inputMarkup, /<input\b[^>]*class="[^"]*input-control/);
assert.match(inputMarkup, /<input\b[^>]*style="letter-spacing:2px"/);

const cardMarkup = renderToStaticMarkup(
  createElement(
    Card,
    {
      className: 'card-root',
      header: {
        title: 'Visible title',
        description: 'Description',
        action: 'Action',
      },
      styles: { content: { minWidth: 0 } },
      title: 'Native tooltip',
    },
    'Content'
  )
);
assert.match(cardMarkup, /^<div\b[^>]*class="[^"]*card-root/);
assert.match(cardMarkup, /^<div\b[^>]*title="Native tooltip"/);
assert.match(cardMarkup, /data-slot="card-title"[^>]*>Visible title</);
assert.match(cardMarkup, /data-slot="card-description"[^>]*>Description</);
assert.match(cardMarkup, /data-slot="card-action"[^>]*>Action</);
assert.match(cardMarkup, /data-slot="card-content"[^>]*style="min-width:0"/);

const tableMarkup = renderToStaticMarkup(
  createElement(
    Table.Primitive,
    {
      className: 'table-root',
      classes: { table: 'table-element' },
      style: { overflowX: 'auto' },
      styles: { table: { tableLayout: 'fixed' } },
    },
    createElement('tbody')
  )
);
assert.match(tableMarkup, /^<div\b[^>]*class="[^"]*table-root/);
assert.match(tableMarkup, /^<div\b[^>]*style="overflow-x:auto"/);
assert.match(tableMarkup, /<table\b[^>]*class="[^"]*table-element/);
assert.match(tableMarkup, /<table\b[^>]*style="table-layout:fixed"/);

globalThis.console.log(
  `Verified ${styleContracts.length} public paired classes/styles contracts and root/slot rendering.`
);
