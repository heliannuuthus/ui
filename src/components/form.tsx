import * as React from 'react';
import {
  FormProvider,
  useController,
  useForm as useReactHookForm,
  useWatch as useReactHookFormWatch,
  type DeepPartialSkipArrayKey,
  type FieldPath,
  type FieldPathValue,
  type FieldPathValues,
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

const INTERNAL_FORM_METHODS = Symbol('@heliannuuthus/ui/form-methods');

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
>;

type InternalFormInstance<
  TFieldValues extends FieldValues,
  TContext,
  TTransformedValues,
> = FormInstance<TFieldValues, TContext, TTransformedValues> & {
  [INTERNAL_FORM_METHODS]: UseFormReturn<
    TFieldValues,
    TContext,
    TTransformedValues
  >;
};

const getInternalFormMethods = <
  TFieldValues extends FieldValues,
  TContext,
  TTransformedValues,
>(
  form: FormInstance<TFieldValues, TContext, TTransformedValues>
) => {
  const methods = (
    form as InternalFormInstance<TFieldValues, TContext, TTransformedValues>
  )[INTERNAL_FORM_METHODS];

  if (!methods) {
    throw new Error('Expected a form instance created by Form.useForm.');
  }

  return methods as UseFormReturn<TFieldValues, TContext, TTransformedValues>;
};

type FormValuesChangeInfo<TFieldValues extends FieldValues = FieldValues> = {
  name?: FieldPath<TFieldValues>;
};

type FormValuesChangeHandler<TFieldValues extends FieldValues = FieldValues> = (
  values: TFieldValues,
  info: FormValuesChangeInfo<TFieldValues>
) => void;

type FormUseOptions<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
> = Omit<
  UseFormProps<TFieldValues, TContext, TTransformedValues>,
  'formControl'
>;

type FormWatchSelector<TFieldValues extends FieldValues, TSelectedValue> = (
  values: TFieldValues
) => TSelectedValue;

const FormInstanceContext = React.createContext<unknown>(null);

type FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
> = Omit<React.ComponentProps<'form'>, 'onError' | 'onSubmit'> & {
  form: FormInstance<TFieldValues, TContext, TTransformedValues>;
  onInvalid?: SubmitErrorHandler<TFieldValues>;
  onSubmit: SubmitHandler<TTransformedValues>;
  onValuesChange?: FormValuesChangeHandler<TFieldValues>;
};

type FormFieldFocusTarget = {
  focus: () => unknown;
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

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<React.ComponentProps<typeof Field>, 'children'> & {
  children: React.ReactElement;
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
};

const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>(
  options?: FormUseOptions<TFieldValues, TContext, TTransformedValues>
): FormInstance<TFieldValues, TContext, TTransformedValues> => {
  const methods = useReactHookForm<TFieldValues, TContext, TTransformedValues>(
    options
  );

  return React.useMemo<
    FormInstance<TFieldValues, TContext, TTransformedValues>
  >(() => {
    const form = {
      clearErrors: methods.clearErrors,
      get formState() {
        return methods.formState;
      },
      getFieldState: methods.getFieldState,
      getValues: methods.getValues,
      reset: methods.reset,
      resetField: methods.resetField,
      setError: methods.setError,
      setFocus: methods.setFocus,
      setValue: methods.setValue,
      trigger: methods.trigger,
      unregister: methods.unregister,
    };

    Object.defineProperty(form, INTERNAL_FORM_METHODS, { value: methods });

    return form;
  }, [methods]);
};

function useWatch<TFieldValues extends FieldValues = FieldValues>(
  form: FormInstance<TFieldValues>
): DeepPartialSkipArrayKey<TFieldValues>;
function useWatch<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  name: TName,
  form: FormInstance<TFieldValues>
): FieldPathValue<TFieldValues, TName>;
function useWatch<
  TFieldValues extends FieldValues = FieldValues,
  TNames extends readonly FieldPath<TFieldValues>[] =
    readonly FieldPath<TFieldValues>[],
>(
  names: readonly [...TNames],
  form: FormInstance<TFieldValues>
): FieldPathValues<TFieldValues, TNames>;
function useWatch<
  TFieldValues extends FieldValues = FieldValues,
  TSelectedValue = unknown,
>(
  selector: FormWatchSelector<TFieldValues, TSelectedValue>,
  form: FormInstance<TFieldValues>
): TSelectedValue;
function useWatch<TFieldValues extends FieldValues = FieldValues>(
  target:
    | FormInstance<TFieldValues>
    | FieldPath<TFieldValues>
    | readonly FieldPath<TFieldValues>[]
    | FormWatchSelector<TFieldValues, unknown>,
  explicitForm?: FormInstance<TFieldValues>
) {
  const form = explicitForm ?? (target as FormInstance<TFieldValues>);
  const selector = typeof target === 'function' ? target : undefined;
  const name = explicitForm && selector == null ? target : undefined;

  const methods = getInternalFormMethods(form);

  return useReactHookFormWatch({
    control: methods.control,
    exact: name == null ? undefined : true,
    ...(name == null ? {} : { name }),
    ...(selector == null ? {} : { compute: selector }),
  } as never) as unknown;
}

const useFormInstance = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>() => {
  const form = React.useContext(FormInstanceContext);

  if (!form) {
    throw new Error('Form.useFormInstance must be used inside Form.');
  }

  return form as FormInstance<TFieldValues, TContext, TTransformedValues>;
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
  onValuesChange,
  ...props
}: FormProps<TFieldValues, TContext, TTransformedValues>) => {
  const methods = getInternalFormMethods(form);

  React.useEffect(() => {
    if (!onValuesChange) return;

    return methods.subscribe({
      callback: ({ name, values }) => {
        onValuesChange(values, {
          name: name as FieldPath<TFieldValues> | undefined,
        });
      },
      formState: { values: true },
    });
  }, [methods, onValuesChange]);

  return (
    <FormInstanceContext.Provider value={form}>
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
    </FormInstanceContext.Provider>
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
  });
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
  const describedBy = mergeIds(
    descriptionId,
    fieldState.invalid ? messageId : undefined
  );
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
  if (!childElement || childElement.type === React.Fragment) {
    throw new Error(
      'Form.Field expects one direct, non-Fragment control element.'
    );
  }

  const controlNode = !isRegisteredFormControl(childElement.type) ? (
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
      ref: mergedChildRef,
      required: Boolean(isRequired || childElement.props.required),
      value: field.value,
    })
  ) : (
    <FormControlProvider value={controlContext}>{children}</FormControlProvider>
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
  useForm,
  useFormInstance,
  useWatch,
});

export { Form, useForm, useFormInstance, useWatch };
export type {
  FormFieldFocusTarget,
  FormFieldInjectedControlProps,
  FormFieldProps,
  FormInstance,
  FormProps,
  FormUseOptions,
  FormValuesChangeHandler,
  FormValuesChangeInfo,
  FormWatchSelector,
};
