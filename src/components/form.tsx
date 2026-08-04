import * as React from 'react';
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
  mergeIds,
  type FormControlContextValue,
} from './internal/form-control';

const INTERNAL_FORM_METHODS = Symbol('form-methods');

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

function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>(
  options?: UseFormProps<TFieldValues, TContext, TTransformedValues>
): FormInstance<TFieldValues, TContext, TTransformedValues> {
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
}

function FormRoot<
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
}: FormProps<TFieldValues, TContext, TTransformedValues>) {
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
}

function hasRequiredRule(rule: RegisterOptions['required']) {
  if (typeof rule === 'object') return rule.value;
  return Boolean(rule);
}

function FormField<
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
}: FormFieldProps<TFieldValues, TName>) {
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
        <Field.Label htmlFor={controlId} id={labelId}>
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
}

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
  FormFieldGroupProps,
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
