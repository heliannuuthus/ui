import * as React from 'react';
import {
  FormProvider,
  useController,
  useForm as useReactHookForm,
  useFormContext,
  useWatch,
  type FieldPath,
  type FieldPathValue,
  type FieldValues,
  type RegisterOptions,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';

import { cn } from '../lib/utils';
import { Field } from './field';
import {
  FormControlProvider,
  mergeIds,
  useFormControl,
  useMergedRefs,
  type FormControlContextValue,
} from './internal/form-control';

const INTERNAL_FORM_METHODS = Symbol('form-methods');
const FORM_CONTROL_DEFINITION = Symbol('form-control-definition');

type FormGetValue<TFieldValues extends FieldValues> = <
  TName extends FieldPath<TFieldValues>,
>(
  name: TName
) => FieldPathValue<TFieldValues, TName>;

type FormSubscribe<TFieldValues extends FieldValues> = <
  TName extends FieldPath<TFieldValues>,
>(
  name: TName,
  callback: (value: FieldPathValue<TFieldValues, TName>) => void
) => () => void;

type FormInstance<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
> = Pick<
  UseFormReturn<TFieldValues, TContext, TTransformedValues>,
  | 'clearErrors'
  | 'formState'
  | 'getFieldState'
  | 'getValues'
  | 'reset'
  | 'resetField'
  | 'setError'
  | 'setFocus'
  | 'setValue'
  | 'trigger'
  | 'unregister'
  | 'watch'
> & {
  getValue: FormGetValue<TFieldValues>;
  subscribe: FormSubscribe<TFieldValues>;
  readonly [INTERNAL_FORM_METHODS]: UseFormReturn<
    TFieldValues,
    TContext,
    TTransformedValues
  >;
};

type FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
> = Omit<React.ComponentProps<'form'>, 'onError' | 'onSubmit'> & {
  form: FormInstance<TFieldValues, TContext, TTransformedValues>;
  onInvalid?: SubmitErrorHandler<TFieldValues>;
  onSubmit: SubmitHandler<TTransformedValues>;
};

type FormFieldRenderField<Value> = {
  name: string;
  onBlur: () => void;
  onChange: (value: Value) => void;
  ref: React.Ref<unknown>;
  value: Value;
};

type FormFieldRenderState = {
  disabled: boolean;
  error?: string;
  invalid: boolean;
  required: boolean;
};

type FormFieldControlProps = {
  'aria-describedby'?: string;
  'aria-errormessage'?: string;
  'aria-invalid'?: true;
  'aria-required'?: true;
  disabled: boolean;
  id: string;
  name: string;
  required: boolean;
};

type FormFieldGroupProps = Omit<FormFieldControlProps, 'name' | 'required'> & {
  'aria-labelledby'?: string;
};

type FormFieldRenderProps<Value> = {
  controlProps: FormFieldControlProps;
  field: FormFieldRenderField<Value>;
  fieldState: FormFieldRenderState;
  groupProps: FormFieldGroupProps;
};

type FormControlProps<Value> = {
  'aria-describedby': string | undefined;
  'aria-errormessage': string | undefined;
  'aria-invalid': React.AriaAttributes['aria-invalid'];
  'aria-labelledby': string | undefined;
  'aria-required': React.AriaAttributes['aria-required'];
  defaultValue: Value | undefined;
  disabled: boolean;
  id: string;
  name: string | undefined;
  onBlur: () => void;
  onChange: (value: Value) => void;
  required: boolean | undefined;
  value: Value;
};

type FormControlSemantics = 'control' | 'group';

type FormControlOptions = {
  semantics?: FormControlSemantics;
};

type FormControlComponent<
  Element extends HTMLElement,
  Props extends object,
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<Element>
>;

type FormControlValue<Props> = Props extends {
  value: infer Value;
}
  ? Value
  : never;

type FormControlInjectedKey = keyof FormControlProps<unknown>;

type DefinedFormControlProps<Props extends object> = Omit<
  Props,
  FormControlInjectedKey
> &
  Partial<Pick<Props, Extract<keyof Props, FormControlInjectedKey>>>;

type DefinedFormControlComponent<
  Element extends HTMLElement,
  Props extends object,
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<DefinedFormControlProps<Props>> &
    React.RefAttributes<Element>
> &
  FormControlDefinitionCarrier;

type FormControlDefinition = {
  semantics: FormControlSemantics;
};

type FormControlDefinitionCarrier = {
  [FORM_CONTROL_DEFINITION]?: FormControlDefinition;
};

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<React.ComponentProps<typeof Field>, 'children'> & {
  children:
    | React.ReactNode
    | ((
        props: FormFieldRenderProps<FieldPathValue<TFieldValues, TName>>
      ) => React.ReactNode);
  defaultValue?: FieldPathValue<TFieldValues, TName>;
  description?: React.ReactNode;
  disabled?: boolean;
  label?: React.ReactNode;
  name: TName;
  required?: boolean;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'disabled' | 'setValueAs' | 'valueAsDate' | 'valueAsNumber'
  >;
  shouldUnregister?: boolean;
};

const defineControl = <Element extends HTMLElement, Props extends object>(
  Component: FormControlComponent<Element, Props> &
    (Props extends FormControlProps<FormControlValue<Props>> ? unknown : never),
  { semantics = 'control' }: FormControlOptions = {}
): DefinedFormControlComponent<Element, Props> => {
  type Value = FormControlValue<Props>;

  const DefinedControl = React.forwardRef<
    Element,
    DefinedFormControlProps<Props>
  >((componentProps, forwardedRef) => {
    const props = componentProps as unknown as DefinedFormControlProps<Props> &
      FormControlProps<Value>;
    const formControl = useFormControl<Value>();
    const mergedRef = useMergedRefs(
      forwardedRef,
      formControl?.ref as React.Ref<Element> | undefined
    );

    if (!formControl) {
      return React.createElement(Component as React.ElementType, {
        ...componentProps,
        ref: mergedRef,
      });
    }

    const describedBy = mergeIds(
      props['aria-describedby'],
      formControl.descriptionId,
      formControl.messageId
    );
    const errorMessage = mergeIds(
      props['aria-errormessage'],
      formControl.messageId
    );
    const labelledBy =
      semantics === 'group'
        ? mergeIds(props['aria-labelledby'], formControl.labelId)
        : props['aria-labelledby'];
    const resolvedProps = {
      ...props,
      'aria-describedby': describedBy,
      'aria-errormessage': errorMessage,
      'aria-invalid': formControl.invalid ? true : props['aria-invalid'],
      'aria-labelledby': labelledBy,
      'aria-required': formControl.required ? true : props['aria-required'],
      defaultValue: undefined,
      disabled: props.disabled || formControl.disabled,
      id: formControl.controlId,
      name: semantics === 'control' ? formControl.name : undefined,
      onBlur: () => {
        formControl.onBlur();
        props.onBlur?.();
      },
      onChange: (value: Value) => {
        formControl.onChange(value);
        props.onChange?.(value);
      },
      required:
        semantics === 'control'
          ? props.required || formControl.required
          : undefined,
      value: formControl.value,
    } as Props;

    return React.createElement(Component as React.ElementType, {
      ...resolvedProps,
      ref: mergedRef,
    });
  });

  DefinedControl.displayName = `FormControl(${
    Component.displayName || Component.name || 'Component'
  })`;

  return Object.assign(DefinedControl, {
    [FORM_CONTROL_DEFINITION]: { semantics },
  }) as DefinedFormControlComponent<Element, Props>;
};

const getControlSemantics = (children: React.ReactNode) => {
  if (!React.isValidElement(children)) return 'control';

  const definition = (children.type as FormControlDefinitionCarrier)[
    FORM_CONTROL_DEFINITION
  ];

  return definition?.semantics ?? 'control';
};

const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>(
  options?: UseFormProps<TFieldValues, TContext, TTransformedValues>
): FormInstance<TFieldValues, TContext, TTransformedValues> => {
  const methods = useReactHookForm<TFieldValues, TContext, TTransformedValues>(
    options
  );
  const getValue: FormGetValue<TFieldValues> = (name) =>
    methods.getValues(name);
  const subscribe: FormSubscribe<TFieldValues> = (name, callback) =>
    methods.subscribe({
      callback: () => callback(methods.getValues(name)),
      exact: true,
      formState: { values: true },
      name,
    });

  return {
    clearErrors: methods.clearErrors,
    formState: methods.formState,
    getFieldState: methods.getFieldState,
    getValue,
    getValues: methods.getValues,
    reset: methods.reset,
    resetField: methods.resetField,
    setError: methods.setError,
    setFocus: methods.setFocus,
    setValue: methods.setValue,
    subscribe,
    trigger: methods.trigger,
    unregister: methods.unregister,
    watch: methods.watch,
    [INTERNAL_FORM_METHODS]: methods,
  };
};

const useFieldValue = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  name: TName
): FieldPathValue<TFieldValues, TName> => {
  const { control } = useFormContext<TFieldValues>();

  return useWatch<TFieldValues, TName>({
    control,
    exact: true,
    name,
  }) as FieldPathValue<TFieldValues, TName>;
};

const FormRoot = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>({
  children,
  className,
  form,
  noValidate = true,
  onInvalid,
  onSubmit,
  ...props
}: FormProps<TFieldValues, TContext, TTransformedValues>) => {
  const methods = form[INTERNAL_FORM_METHODS];

  return (
    <FormProvider {...methods}>
      <form
        data-slot="form"
        data-submitting={methods.formState.isSubmitting || undefined}
        className={className}
        noValidate={noValidate}
        onSubmit={methods.handleSubmit(onSubmit, onInvalid)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

const hasRequiredRule = (rule: RegisterOptions['required']) => {
  if (typeof rule === 'object') return rule.value;
  return Boolean(rule);
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  className,
  defaultValue,
  description,
  disabled,
  label,
  name,
  required,
  rules,
  shouldUnregister,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const reactId = React.useId();
  const controlSemantics =
    typeof children === 'function' ? 'control' : getControlSemantics(children);
  const controlId = `${reactId}-control`;
  const labelId = label == null ? undefined : `${reactId}-label`;
  const descriptionId =
    description == null ? undefined : `${reactId}-description`;
  const messageId = `${reactId}-message`;
  const isRequired = required ?? hasRequiredRule(rules?.required);
  const { field, fieldState } = useController<TFieldValues, TName>({
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  });
  const error = fieldState.error?.message;
  const fieldValue: FormFieldRenderField<FieldPathValue<TFieldValues, TName>> =
    {
      name: field.name,
      onBlur: field.onBlur,
      onChange: field.onChange,
      ref: field.ref,
      value: field.value,
    };
  const renderState: FormFieldRenderState = {
    disabled: Boolean(field.disabled),
    error,
    invalid: fieldState.invalid,
    required: isRequired,
  };
  const describedBy = mergeIds(
    descriptionId,
    fieldState.invalid ? messageId : undefined
  );
  const controlProps: FormFieldControlProps = {
    'aria-describedby': describedBy,
    'aria-errormessage': fieldState.invalid ? messageId : undefined,
    'aria-invalid': fieldState.invalid || undefined,
    'aria-required': isRequired || undefined,
    disabled: Boolean(field.disabled),
    id: controlId,
    name: field.name,
    required: isRequired,
  };
  const groupProps: FormFieldGroupProps = {
    'aria-describedby': describedBy,
    'aria-errormessage': fieldState.invalid ? messageId : undefined,
    'aria-invalid': fieldState.invalid || undefined,
    'aria-labelledby': labelId,
    'aria-required': isRequired || undefined,
    disabled: Boolean(field.disabled),
    id: controlId,
  };
  const controlContext: FormControlContextValue<
    FieldPathValue<TFieldValues, TName>
  > = {
    controlId,
    descriptionId,
    disabled: Boolean(field.disabled),
    invalid: fieldState.invalid,
    labelId,
    messageId: fieldState.invalid ? messageId : undefined,
    name: field.name,
    onBlur: field.onBlur,
    onChange: field.onChange,
    ref: field.ref,
    required: isRequired,
    value: field.value,
  };

  return (
    <Field
      data-disabled={field.disabled || undefined}
      data-invalid={fieldState.invalid || undefined}
      className={cn(className)}
      {...props}
    >
      {label != null ? (
        <Field.Label
          htmlFor={controlSemantics === 'control' ? controlId : undefined}
          id={labelId}
        >
          {label}
          {isRequired ? (
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          ) : null}
        </Field.Label>
      ) : null}
      {typeof children === 'function' ? (
        children({
          controlProps,
          field: fieldValue,
          fieldState: renderState,
          groupProps,
        })
      ) : (
        <FormControlProvider value={controlContext}>
          {children}
        </FormControlProvider>
      )}
      {description != null ? (
        <Field.Description id={descriptionId}>{description}</Field.Description>
      ) : null}
      {fieldState.invalid ? (
        <Field.Error id={messageId} errors={[fieldState.error]} />
      ) : null}
    </Field>
  );
};

type FormComponent = typeof FormRoot & {
  defineControl: typeof defineControl;
  Field: typeof FormField;
  /** @deprecated Use Form.Field. */
  Item: typeof FormField;
  useFieldValue: typeof useFieldValue;
  useForm: typeof useForm;
};

const Form: FormComponent = Object.assign(FormRoot, {
  defineControl,
  Field: FormField,
  /** @deprecated Use Form.Field. */
  Item: FormField,
  useFieldValue,
  useForm,
});

/** @deprecated Use FormFieldProps. */
type FormItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = FormFieldProps<TFieldValues, TName>;
/** @deprecated Use FormFieldRenderField. */
type FormItemRenderField<Value> = FormFieldRenderField<Value>;
/** @deprecated Use FormFieldRenderProps. */
type FormItemRenderProps<Value> = FormFieldRenderProps<Value>;
/** @deprecated Use FormFieldRenderState. */
type FormItemRenderState = FormFieldRenderState;

export { Form };
export type {
  FormFieldControlProps,
  FormFieldGroupProps,
  FormFieldProps,
  FormFieldRenderField,
  FormFieldRenderProps,
  FormFieldRenderState,
  FormControlOptions,
  FormControlProps,
  FormControlSemantics,
  FormInstance,
  FormItemProps,
  FormItemRenderField,
  FormItemRenderProps,
  FormItemRenderState,
  FormProps,
};
