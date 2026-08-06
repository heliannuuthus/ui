import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Form, Input, Radio, Slider } from '../dist/index.js';

const elementWithSlot = (markup, tagName, slot) => {
  const match = markup.match(
    new RegExp(`<${tagName}[^>]*data-slot="${slot}"[^>]*>`)
  );

  assert.ok(match, `Expected a <${tagName}> with data-slot="${slot}".`);
  return match[0];
};

const attribute = (element, name) => {
  return element.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
};

const CustomValueControl = ({ onChange, value, ...props }) =>
  React.createElement('input', {
    ...props,
    'data-slot': 'custom-control',
    onChange: (event) => onChange(event.target.value),
    value,
  });

const CustomValueGroup = React.forwardRef(
  (
    {
      'aria-required': ariaRequired,
      disabled,
      name,
      onChange,
      required,
      value,
      ...props
    },
    ref
  ) =>
    React.createElement(
      'div',
      {
        ...props,
        'aria-required': ariaRequired ?? required,
        'data-field-name': name,
        'data-slot': 'custom-group',
        role: 'radiogroup',
      },
      React.createElement(
        'button',
        {
          'aria-checked': value === 'urgent',
          disabled,
          onClick: () => onChange('urgent'),
          ref,
          role: 'radio',
          tabIndex: 0,
          type: 'button',
        },
        'Urgent'
      )
    )
);

const AccessibilityFixture = () => {
  const form = Form.useForm({
    defaultValues: {
      email: '',
      location: '',
      priority: '',
      role: 'reader',
      threshold: 50,
    },
  });

  return React.createElement(
    Form,
    { form, onSubmit() {} },
    React.createElement(
      Form.Field,
      {
        description: 'Used for account notifications.',
        label: 'Email address',
        name: 'email',
        required: true,
      },
      React.createElement(Input)
    ),
    React.createElement(
      Form.Field,
      {
        description: 'Choose the nearest office.',
        label: 'Location',
        name: 'location',
      },
      React.createElement(CustomValueControl)
    ),
    React.createElement(
      Form.Field,
      {
        description: 'Determines workspace permissions.',
        label: 'Role',
        name: 'role',
      },
      React.createElement(Radio.Group, {
        options: [
          { label: 'Reader', value: 'reader' },
          { label: 'Editor', value: 'editor' },
        ],
      })
    ),
    React.createElement(
      Form.Field,
      {
        description: 'Sets the review threshold.',
        label: 'Review threshold',
        name: 'threshold',
      },
      React.createElement(Slider)
    ),
    React.createElement(
      Form.Field,
      {
        description: 'Choose how urgently this should be handled.',
        label: 'Priority',
        name: 'priority',
        rules: { required: 'Choose a priority.' },
      },
      React.createElement(CustomValueGroup)
    )
  );
};

const markup = renderToStaticMarkup(React.createElement(AccessibilityFixture));
const form = elementWithSlot(markup, 'form', 'form');
assert.equal(attribute(form, 'noValidate'), '');

const labels = [
  ...markup.matchAll(/<label[^>]*data-slot="field-label"[^>]*>/g),
].map(([element]) => element);
const descriptions = [
  ...markup.matchAll(/<p[^>]*data-slot="field-description"[^>]*>/g),
].map(([element]) => element);

assert.equal(labels.length, 5);
assert.equal(descriptions.length, 5);

const input = elementWithSlot(markup, 'input', 'input');
assert.equal(attribute(labels[0], 'for'), attribute(input, 'id'));
assert.equal(
  attribute(input, 'aria-describedby'),
  attribute(descriptions[0], 'id')
);
assert.equal(attribute(input, 'name'), 'email');
assert.match(input, /\srequired=""/);

const customControl = elementWithSlot(markup, 'input', 'custom-control');
assert.equal(attribute(labels[1], 'for'), attribute(customControl, 'id'));
assert.equal(
  attribute(customControl, 'aria-describedby'),
  attribute(descriptions[1], 'id')
);
assert.equal(attribute(customControl, 'name'), 'location');

const radioGroup = elementWithSlot(markup, 'div', 'radio-group');
assert.equal(
  attribute(radioGroup, 'aria-labelledby'),
  attribute(labels[2], 'id')
);
assert.equal(
  attribute(radioGroup, 'aria-describedby'),
  attribute(descriptions[2], 'id')
);

const slider = elementWithSlot(markup, 'div', 'slider');
assert.equal(attribute(slider, 'aria-labelledby'), attribute(labels[3], 'id'));
assert.equal(
  attribute(slider, 'aria-describedby'),
  attribute(descriptions[3], 'id')
);

const customGroup = elementWithSlot(markup, 'div', 'custom-group');
assert.equal(
  attribute(customGroup, 'aria-labelledby'),
  attribute(labels[4], 'id')
);
assert.equal(
  attribute(customGroup, 'aria-describedby'),
  attribute(descriptions[4], 'id')
);
assert.equal(attribute(customGroup, 'aria-required'), 'true');

const InvalidFieldFixture = () => {
  const invalidForm = Form.useForm({
    defaultValues: { name: '' },
  });

  return React.createElement(
    Form,
    { form: invalidForm, onSubmit() {} },
    React.createElement(
      Form.Field,
      { name: 'name' },
      React.createElement(
        React.Fragment,
        null,
        React.createElement(CustomValueControl)
      )
    )
  );
};

assert.throws(
  () => renderToStaticMarkup(React.createElement(InvalidFieldFixture)),
  /Form\.Field expects one direct, non-Fragment control element\./
);

globalThis.console.log(
  'Verified Form.Field labels, descriptions, automatic custom control injection, single-child enforcement, custom groups, and group ARIA relationships, including Slider.'
);
