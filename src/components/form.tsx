import * as React from 'react';
import { isForwardRef } from 'react-is';
import {
  FormProvider,
  useController,
  useForm as useReactHookForm,
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
  isRegisteredFormControl,
  mergeIds,
  type FormControlContextValue,
  useMergedRefs,
} from './internal/form-control';

const INTERNAL_FORM_METHODS: unique symbol = Symbol.for(
  '@heliannuuthus/ui/form-methods'
);

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

type FormFieldFocusTarget = {
  focus: () => unknown;
};

type FormFieldRenderField<Value> = {
  name: string;
  onBlur: () => void;
  onChange: (value: Value) => void;
  ref: React.RefCallback<FormFieldFocusTarget>;
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

type FormFieldInjectedControlProps<Value> = {
  'aria-describedby'?: string;
  'aria-errormessage'?: string;
  'aria-invalid'?: boolean;
  'aria-labelledby'?: string;
  'aria-required'?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (value: Value) => void;
  required?: boolean;
  value?: Value;
};

type FormFieldInjectableElementProps<Value> =
  FormFieldInjectedControlProps<Value> &
    React.RefAttributes<FormFieldFocusTarget>;

type FormFieldRenderProps<Value> = {
  controlProps: FormFieldControlProps;
  field: FormFieldRenderField<Value>;
  fieldState: FormFieldRenderState;
  groupProps: FormFieldGroupProps;
};

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<React.ComponentProps<typeof Field>, 'children'> & {
  children:
    | React.ReactElement
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

  return {
    clearErrors: methods.clearErrors,
    formState: methods.formState,
    getFieldState: methods.getFieldState,
    getValues: methods.getValues,
    reset: methods.reset,
    resetField: methods.resetField,
    setError: methods.setError,
    setFocus: methods.setFocus,
    setValue: methods.setValue,
    trigger: methods.trigger,
    unregister: methods.unregister,
    watch: methods.watch,
    [INTERNAL_FORM_METHODS]: methods,
  };
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

const canReceiveInjectedRef = (element: React.ReactElement) => {
  const reactMajorVersion = Number.parseInt(React.version, 10);

  return (
    reactMajorVersion >= 19 ||
    typeof element.type === 'string' ||
    isForwardRef(element)
  );
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
  const fieldRef = field.ref;
  const focusRef = React.useCallback<React.RefCallback<FormFieldFocusTarget>>(
    (instance) => fieldRef(instance),
    [fieldRef]
  );
  const childElement = React.isValidElement(children)
    ? (children as React.ReactElement<
        FormFieldInjectableElementProps<FieldPathValue<TFieldValues, TName>>
      >)
    : null;
  const mergedChildRef = useMergedRefs(childElement?.props.ref, focusRef);
  const resolvedControlId = childElement?.props.id ?? controlId;
  const injectRef = childElement ? canReceiveInjectedRef(childElement) : false;
  const fieldValue: FormFieldRenderField<FieldPathValue<TFieldValues, TName>> =
    {
      name: field.name,
      onBlur: field.onBlur,
      onChange: field.onChange,
      ref: focusRef,
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
    id: resolvedControlId,
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
    id: resolvedControlId,
  };
  const controlContext: FormControlContextValue<
    FieldPathValue<TFieldValues, TName>
  > = {
    controlId: resolvedControlId,
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
  if (
    typeof children !== 'function' &&
    (!childElement || childElement.type === React.Fragment)
  ) {
    throw new Error(
      'Form.Field expects one direct, non-Fragment control element.'
    );
  }

  const controlNode =
    typeof children === 'function' ? (
      children({
        controlProps,
        field: fieldValue,
        fieldState: renderState,
        groupProps,
      })
    ) : childElement && !isRegisteredFormControl(childElement.type) ? (
      React.cloneElement(childElement, {
        'aria-describedby': mergeIds(
          childElement.props['aria-describedby'],
          describedBy
        ),
        'aria-errormessage':
          (fieldState.invalid ? messageId : undefined) ??
          childElement.props['aria-errormessage'],
        'aria-invalid':
          fieldState.invalid || childElement.props['aria-invalid'] || undefined,
        'aria-labelledby': mergeIds(
          childElement.props['aria-labelledby'],
          labelId
        ),
        'aria-required':
          isRequired || childElement.props['aria-required'] || undefined,
        disabled: Boolean(field.disabled || childElement.props.disabled),
        id: resolvedControlId,
        name: field.name,
        onBlur: () => {
          childElement.props.onBlur?.();
          field.onBlur();
        },
        onChange: (value: FieldPathValue<TFieldValues, TName>) => {
          childElement.props.onChange?.(value);
          field.onChange(value);
        },
        ...(injectRef ? { ref: mergedChildRef } : {}),
        required: Boolean(isRequired || childElement.props.required),
        value: field.value,
      })
    ) : (
      <FormControlProvider value={controlContext}>
        {children}
      </FormControlProvider>
    );

  return (
    <Field
      data-disabled={field.disabled || undefined}
      data-invalid={fieldState.invalid || undefined}
      className={cn(className)}
      {...props}
    >
      {label != null ? (
        <Field.Label htmlFor={resolvedControlId} id={labelId}>
          {label}
          {isRequired ? (
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          ) : null}
        </Field.Label>
      ) : null}
      {controlNode}
      {description != null ? (
        <Field.Description id={descriptionId}>{description}</Field.Description>
      ) : null}
      {fieldState.invalid ? (
        <Field.Error id={messageId} errors={[fieldState.error]} />
      ) : null}
    </Field>
  );
};

const Form = Object.assign(FormRoot, {
  Field: FormField,
  /** @deprecated Use Form.Field. */
  Item: FormField,
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
  FormFieldFocusTarget,
  FormFieldGroupProps,
  FormFieldInjectedControlProps,
  FormFieldProps,
  FormFieldRenderField,
  FormFieldRenderProps,
  FormFieldRenderState,
  FormInstance,
  FormItemProps,
  FormItemRenderField,
  FormItemRenderProps,
  FormItemRenderState,
  FormProps,
};
