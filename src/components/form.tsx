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

type FormItemRenderField<Value> = {
  name: string;
  onBlur: () => void;
  onChange: (value: Value) => void;
  ref: React.Ref<unknown>;
  value: Value;
};

type FormItemRenderState = {
  disabled: boolean;
  error?: string;
  invalid: boolean;
  required: boolean;
};

type FormItemRenderProps<Value> = {
  field: FormItemRenderField<Value>;
  fieldState: FormItemRenderState;
};

type FormItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<React.ComponentProps<typeof Field>, 'children'> & {
  children:
    | React.ReactNode
    | ((
        props: FormItemRenderProps<FieldPathValue<TFieldValues, TName>>
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

function FormItem<
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
}: FormItemProps<TFieldValues, TName>) {
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
  const fieldValue: FormItemRenderField<FieldPathValue<TFieldValues, TName>> = {
    name: field.name,
    onBlur: field.onBlur,
    onChange: field.onChange,
    ref: field.ref,
    value: field.value,
  };
  const renderState: FormItemRenderState = {
    disabled: Boolean(field.disabled),
    error,
    invalid: fieldState.invalid,
    required: isRequired,
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
        children({ field: fieldValue, fieldState: renderState })
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
  Item: FormItem,
  useForm,
});

export { Form };
export type {
  FormInstance,
  FormItemProps,
  FormItemRenderField,
  FormItemRenderProps,
  FormItemRenderState,
  FormProps,
};
