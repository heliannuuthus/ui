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
const declarations = new Map();
const propContracts = [];

const isComponentSource = (sourceFile) => {
  const normalized = sourceFile.fileName.replaceAll('\\', '/');
  return (
    normalized.includes('/src/components/') && !sourceFile.isDeclarationFile
  );
};

const propertyNames = (node) => {
  return checker
    .getTypeAtLocation(node)
    .getProperties()
    .map((property) => property.getName())
    .sort();
};

for (const sourceFile of program.getSourceFiles().filter(isComponentSource)) {
  const visit = (node) => {
    if (
      (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) &&
      node.name != null
    ) {
      declarations.set(node.name.text, node);
      const properties = propertyNames(node);
      if (properties.includes('classNames')) {
        propContracts.push({
          fileName: sourceFile.fileName,
          name: node.name.text,
          properties,
        });
      }
    }
    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
}

const classNamesDeclarations = [...declarations.entries()].filter(([name]) =>
  name.endsWith('ClassNames')
);

assert.ok(
  classNamesDeclarations.length > 0,
  'Expected at least one semantic ClassNames contract.'
);

for (const [classNamesName, classNamesNode] of classNamesDeclarations) {
  const stylesName = classNamesName.replace(/ClassNames$/, 'Styles');
  const stylesNode = declarations.get(stylesName);
  assert.ok(
    stylesNode,
    `${classNamesName} must have a matching ${stylesName}.`
  );

  const classNamesSlots = propertyNames(classNamesNode);
  const stylesSlots = propertyNames(stylesNode);
  const implementationSource = classNamesNode.getSourceFile().text;

  assert.ok(
    !classNamesSlots.includes('root'),
    `${classNamesName} must not contain root; use className for the root node.`
  );
  assert.ok(
    !stylesSlots.includes('root'),
    `${stylesName} must not contain root; use style for the root node.`
  );
  assert.deepEqual(
    stylesSlots,
    classNamesSlots,
    `${stylesName} must expose exactly the same semantic slots as ${classNamesName}.`
  );
  for (const slot of classNamesSlots) {
    assert.ok(
      implementationSource.includes(`classNames?.${slot}`),
      `${classNamesName}.${slot} is declared but not applied by its component.`
    );
    assert.ok(
      implementationSource.includes(`styles?.${slot}`),
      `${stylesName}.${slot} is declared but not applied by its component.`
    );
  }
}

for (const contract of propContracts) {
  assert.ok(
    contract.properties.includes('styles'),
    `${contract.name} exposes classNames without styles in ${contract.fileName}.`
  );
  assert.equal(
    contract.properties.includes('className'),
    contract.properties.includes('style'),
    `${contract.name} must expose className and style together for its root node.`
  );
}

const inputMarkup = renderToStaticMarkup(
  createElement(Input, {
    className: 'input-root',
    classNames: { input: 'input-control' },
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
      classNames: { table: 'table-element' },
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
  `Verified ${classNamesDeclarations.length} paired classNames/styles contracts with no root slots.`
);
