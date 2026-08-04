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

const TextControlRoot = React.forwardRef(
  ({ onBlur, onChange, value, ...props }, ref) =>
    React.createElement('input', {
      ...props,
      'data-slot': 'custom-control',
      onBlur,
      onChange: (event) => onChange(event.target.value),
      ref,
      value,
    })
);
const TextControl = Form.defineControl(TextControlRoot);

const PriorityControlRoot = React.forwardRef(
  ({ disabled, onBlur, onChange, value, ...props }, ref) =>
    React.createElement(
      'div',
      {
        ...props,
        'data-slot': 'custom-group',
        onBlur,
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
          type: 'button',
        },
        'Urgent'
      )
    )
);
const PriorityControl = Form.defineControl(PriorityControlRoot, {
  semantics: 'group',
});

const AccessibilityFixture = () => {
  const form = Form.useForm({
    defaultValues: {
      email: '',
      location: '',
      map: '',
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
      React.createElement(TextControl)
    ),
    React.createElement(
      Form.Field,
      {
        description: 'Choose a point on the map.',
        label: 'Map point',
        name: 'map',
      },
      ({ controlProps, field }) =>
        React.createElement('input', {
          ...controlProps,
          'data-slot': 'third-party-control',
          onBlur: field.onBlur,
          onChange: (event) => field.onChange(event.target.value),
          ref: field.ref,
          value: field.value,
        })
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
      React.createElement(PriorityControl)
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

assert.equal(labels.length, 6);
assert.equal(descriptions.length, 6);

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

const thirdPartyControl = elementWithSlot(
  markup,
  'input',
  'third-party-control'
);
assert.equal(attribute(labels[2], 'for'), attribute(thirdPartyControl, 'id'));
assert.equal(
  attribute(thirdPartyControl, 'aria-describedby'),
  attribute(descriptions[2], 'id')
);
assert.equal(attribute(thirdPartyControl, 'name'), 'map');

const radioGroup = elementWithSlot(markup, 'div', 'radio-group');
assert.equal(
  attribute(radioGroup, 'aria-labelledby'),
  attribute(labels[3], 'id')
);
assert.equal(
  attribute(radioGroup, 'aria-describedby'),
  attribute(descriptions[3], 'id')
);

const slider = elementWithSlot(markup, 'div', 'slider');
assert.equal(attribute(slider, 'aria-labelledby'), attribute(labels[4], 'id'));
assert.equal(
  attribute(slider, 'aria-describedby'),
  attribute(descriptions[4], 'id')
);

const customGroup = elementWithSlot(markup, 'div', 'custom-group');
assert.equal(attribute(labels[5], 'for'), undefined);
assert.equal(
  attribute(customGroup, 'aria-labelledby'),
  attribute(labels[5], 'id')
);
assert.equal(
  attribute(customGroup, 'aria-describedby'),
  attribute(descriptions[5], 'id')
);
assert.equal(attribute(customGroup, 'aria-required'), 'true');

globalThis.console.log(
  'Verified Form.Field labels, descriptions, custom controls, custom groups, and group ARIA relationships, including Slider.'
);
