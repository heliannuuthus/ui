# Unified Form integration

Status: Implemented

This document defines the implemented contract for using Heliannuuthus UI
data-entry components inside a form. `Form` renders the native HTML form,
`Form.Field` owns field presentation and binding, and supported controls consume
an internal engine-independent field context. Consumers do not render a nested
form, import `Controller`, or manually adapt controls such as `Switch`.

## Goals

- Make all Heliannuuthus UI data-entry components directly usable through the
  same `Form.Field` composition model.
- Keep product code independent of the selected form-state engine.
- Preserve the natural public semantics of each control.
- Centralize labels, descriptions, errors, required state and accessible
  relationships.
- Let custom controls participate through one small, standard controlled
  component contract.
- Support nested field paths, array values and controlled or uncontrolled form
  initialization without turning the component API into a schema-driven UI
  generator.

## Non-goals

- Reproducing Ant Design's API or accepting its legacy props.
- Generating complete forms from JSON field configuration.
- Moving product validation schemas, API requests or domain transformations
  into the UI package.
- Hiding the native HTML form boundary.
- Making every control expose the same value prop when that would conflict with
  its established semantics.

## Layers

### `Field`: presentation

`Field` remains independent of any form-state library. It provides:

- fieldset, legend and group structure;
- label, description and error presentation;
- horizontal, vertical and responsive layouts;
- invalid and disabled styling hooks;
- accessible semantic structure.

`Field` does not register names, store values, run validation or submit data.

### `Form`: state and submission

`Form` represents the actual HTML `<form>` element and coordinates:

- the form instance;
- default or initial values;
- field registration;
- validation state;
- submission and pending state;
- form-level and field-level errors;
- reset and value updates.

The product-facing API must not require a second nested `<form>`.

### `Form.Field`: field integration

`Form.Field` connects one named form value to one supported control. It owns:

- the field path;
- label and required marker;
- description and validation error;
- generated IDs and ARIA relationships;
- invalid and disabled propagation;
- control value, change, blur and focus/ref binding.

`Form.Field` uses `Field` internally for presentation.

### Control integration: component-owned binding

`Form.Field` provides an internal, engine-independent field context. Each
supported Heliannuuthus UI data-entry component consumes that context next to
its own implementation and translates it into the component's natural value,
change, blur and ref semantics.

The integration follows these rules:

- binding belongs to the owning component rather than product code;
- lookup does not depend on `displayName`, source inspection or DOM structure;
- form state takes precedence over a child's `value`, `checked`,
  `defaultValue` or `defaultChecked`;
- a child's explicit `onChange` still runs before the form field is updated;
- group controls isolate their internal items so only the group binds to the
  form field;
- user-authored controls receive the standard controlled props directly;
- third-party event or value conventions are normalized inside a small adapter
  component rather than configured on `Form.Field`.

## Usage

The intended common case is:

```tsx
type Values = {
  birthday?: Date
  enabled: boolean
  name: string
  role: string | null
}

const form = Form.useForm<Values>({
  defaultValues: {
    birthday: undefined,
    enabled: false,
    name: '',
    role: null,
  },
})

<Form form={form} onSubmit={save}>
  <Form.Field name="name" label="名称" required>
    <Input />
  </Form.Field>

  <Form.Field name="role" label="角色">
    <Select options={roles} />
  </Form.Field>

  <Form.Field name="enabled" label="启用">
    <Switch />
  </Form.Field>

  <Form.Field name="birthday" label="生日">
    <DatePicker />
  </Form.Field>

  <Button type="submit">保存</Button>
</Form>
```

The caller does not manually pass `control`, render a `Controller`, read the
field error object, map `checked`, or reproduce ARIA attributes for supported
controls.

Use an explicit form value generic on `Form.Field` when compile-time field-path
checking is required:

```tsx
<Form.Field<Values> name="name" label="名称">
  <Input />
</Form.Field>
```

## Supported control semantics

The adapter layer preserves these component-facing conventions:

| Control          | Form value                     | Controlled props      | Change value        |
| ---------------- | ------------------------------ | --------------------- | ------------------- |
| `Input`          | `string` or native input value | `value`, `onChange`   | input event         |
| `Input.TextArea` | `string`                       | `value`, `onChange`   | textarea event      |
| `Input.OTP`      | `string`                       | `value`, `onChange`   | string              |
| `Input.Number`   | `number \| null`               | `value`, `onChange`   | number or `null`    |
| `NativeSelect`   | `string` or string array       | `value`, `onChange`   | select event        |
| `Select`         | item, item array or `null`     | `value`, `onChange`   | selected value      |
| `Switch`         | `boolean`                      | `checked`, `onChange` | boolean             |
| `Checkbox`       | `boolean`                      | `checked`, `onChange` | boolean             |
| `Checkbox.Group` | `string[]`                     | `value`, `onChange`   | string array        |
| `Radio.Group`    | option value                   | `value`, `onChange`   | option value        |
| `DatePicker`     | `Date \| undefined`            | `value`, `onChange`   | date or `undefined` |
| `Slider`         | number or number array         | `value`, `onChange`   | number or array     |
| `Toggle`         | `boolean`                      | `value`, `onChange`   | boolean             |
| `Toggle.Group`   | option value array             | `value`, `onChange`   | option value array  |

Changing a component's controlled props or event payload requires updating its
form binding, tests and this matrix in the same change.

## Third-party and composite controls

User-authored controls use a conventional controlled-component contract.
`Form.Field` injects `value`, `onChange`, `onBlur`, `id`, `name`, `disabled`,
`required` and the generated ARIA relationships into its single direct child.
It also injects `ref` when the child can receive one:

```tsx
type Priority = 'routine' | 'important' | 'urgent'
type PriorityControlProps = FormFieldInjectedControlProps<Priority>

const options = [
  { label: 'Routine', value: 'routine' },
  { label: 'Important', value: 'important' },
  { label: 'Urgent', value: 'urgent' },
] as const

// Minimum viable: value binding does not require ref forwarding.
const MinimalPriorityControl = ({
  onChange,
  ...props
}: PriorityControlProps) => (
  <Radio.Group
    {...props}
    columns={3}
    minColumnWidth={0}
    onChange={onChange}
    options={options}
  />
)

// Complete: forwarding the ref enables automatic focus after validation fails.
const CompletePriorityControl = React.forwardRef<
  HTMLInputElement,
  PriorityControlProps
>(({ onChange, ...props }, ref) => (
  <Radio.Group
    {...props}
    columns={3}
    inputRef={ref}
    minColumnWidth={0}
    onChange={onChange}
    options={options}
  />
))

<Form.Field<Values, 'minimalPriority'>
  name="minimalPriority"
  label="Minimum viable"
>
  <MinimalPriorityControl />
</Form.Field>

<Form.Field<Values, 'completePriority'>
  name="completePriority"
  label="Complete capabilities"
  rules={{ required: 'Choose a priority.' }}
>
  <CompletePriorityControl />
</Form.Field>
```

This keeps custom controls independent of the internal form engine. The
component remains a normal controlled React component, while `Form.Field`
continues to own registration, validation and accessible relationships.
Forwarding the ref is optional; it adds focus management without becoming a
value-binding requirement. React 18 only receives the injected ref through a
DOM element or `forwardRef`; React 19 function components can receive it as a
regular prop.

```ts
type FormFieldInjectedControlProps<Value> = {
  value?: Value;
  onChange?: (value: Value) => void;
  onBlur?: () => void;
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  'aria-describedby'?: string;
  'aria-errormessage'?: string;
  'aria-invalid'?: boolean;
  'aria-labelledby'?: string;
  'aria-required'?: boolean;
};
```

When a third-party component uses different property names, wrap it once and
normalize that difference inside the adapter:

```tsx
const MapControl = React.forwardRef<
  MapHandle,
  FormFieldInjectedControlProps<Location>
>(({ value, onChange, ...props }, ref) => (
  <ThirdPartyMap
    {...props}
    ref={ref}
    location={value}
    onLocationChange={onChange}
  />
))

<Form.Field name="location" label="位置">
  <MapControl />
</Form.Field>
```

Product code does not configure event names, value-property names or
transformers on `Form.Field`. A composite control follows the same contract and
owns the semantics of its internal elements. The legacy render-function child
remains temporarily available for source compatibility, but it is not the
recommended integration model and receives no new capabilities.

`Form.Item` remains a deprecated alias of `Form.Field` for compatibility. New
code and documentation use `Form.Field`.

## Validation and errors

- Product code owns validation schemas and domain rules.
- `Form` may provide adapters for supported standard-schema validators, but the
  UI package does not own product schemas.
- `Form.Field` displays field errors through `Field.Error`.
- The default presentation shows the active field error message.
- Server errors can be assigned to a field path with `form.setError`.
- A description remains associated with its control when an error is present.
- Invalid state is propagated through `aria-invalid` and error descriptions
  through `aria-describedby`.
- Required presentation and native `required` behavior must be deliberate and
  documented; a visual marker alone is insufficient.

## Controlled and uncontrolled behavior

- A control may be used independently of `Form` with its documented controlled
  or uncontrolled props.
- Inside `Form.Field`, form state is the single source of truth unless an
  explicitly documented controlled Form mode is selected.
- Supplying a child `value`, `checked`, `defaultValue` or `defaultChecked`
  inside `Form.Field` does not replace form state; initialize through
  `Form.useForm`, `form.reset` or `Form.Field.defaultValue`.
- Reset restores the form's declared default values.
- Asynchronously loaded edit data is applied through a documented form
  initialization or reset operation, not by switching individual controls
  between controlled and uncontrolled modes.

## Arrays and nested fields

- `name` supports typed nested paths such as `members.0.email`.
- Array mutation belongs to the Form API rather than `Field`.
- Reusable product subforms may receive a scoped field path or form group, but
  product-domain sections do not belong in this package.
- A schema-driven field renderer is not required. JSX remains the primary
  composition model.

## Accessibility

The common `Form.Field` path must provide:

- a stable control ID;
- label-to-control association;
- description and error IDs;
- `aria-describedby` containing every active description;
- `aria-invalid` when validation fails;
- `aria-required` or native required semantics where appropriate;
- focus transfer to the first invalid control when supported;
- an error summary extension point for long forms.

Adapters for compound controls must attach these properties to the interactive
element rather than an arbitrary visual wrapper.

## Engine boundary

`react-hook-form` may remain the internal state engine, but it is not part of
the target product-facing contract.

The following are internal implementation details:

- `Controller`;
- `FormProvider`;
- `control`;
- `UseFormReturn`;
- resolver-specific field objects.

This boundary allows the package to evolve without forcing every consuming
application to rewrite form composition.

## Consumer migration

Replace provider-based usage:

```tsx
<Form {...methods}>
  <form onSubmit={methods.handleSubmit(save)}>
    <Form.Field control={methods.control} name="name" render={/* ... */} />
  </form>
</Form>
```

with the unified API:

```tsx
const form = Form.useForm<Values>({ defaultValues })

<Form form={form} onSubmit={save}>
  <Form.Field<Values> name="name" label="名称">
    <Input />
  </Form.Field>
</Form>
```

Product code should remove `Controller`, `FormProvider`, `control` plumbing and
manual `value`/`checked` mappings as fields migrate.

## Acceptance criteria

The unified API remains complete only while:

- supported controls require no product-authored controller binding;
- controlled, uncontrolled, reset and async initialization behavior is tested;
- nested paths and array values are type checked;
- field and form-level errors are tested;
- labels, descriptions and errors pass accessibility checks;
- automatic custom-control injection and adapter composition are documented and
  tested;
- no public signature exposes the selected form engine;
- the legacy migration and release strategy is documented;
- type-check, lint, formatting, build and package verification pass.

## Common pitfalls

- Do not make `Switch` use `value` merely to resemble `Input`; `checked` is the
  appropriate component semantic.
- Do not require callers to repeat `valuePropName`, `trigger` or similar adapter
  configuration for Heliannuuthus UI controls.
- Do not create a wrapper component for every combination of Form and control.
- Do not use runtime component-name checks to choose adapters.
- Do not put API requests, server DTO conversion or product copy in `Form`.
- Do not bypass `Form.Field` with product-authored controller wiring for
  supported controls.
