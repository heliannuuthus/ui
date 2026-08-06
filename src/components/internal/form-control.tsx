import * as React from 'react';

type FormControlContextValue<Value = unknown> = {
  controlId: string;
  descriptionId?: string;
  disabled: boolean;
  invalid: boolean;
  labelId?: string;
  messageId?: string;
  name: string;
  onBlur: () => void;
  onChange: (value: Value) => void;
  ref: React.Ref<unknown>;
  required: boolean;
  value: Value;
};

const FormControlContext = React.createContext<FormControlContextValue | null>(
  null
);
const formControlTypes = new WeakSet<object>();

const FormControlProvider = <Value,>({
  children,
  value,
}: {
  children: React.ReactNode;
  value: FormControlContextValue<Value>;
}) => {
  return (
    <FormControlContext.Provider
      value={value as FormControlContextValue<unknown>}
    >
      {children}
    </FormControlContext.Provider>
  );
};

const FormControlBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormControlContext.Provider value={null}>
      {children}
    </FormControlContext.Provider>
  );
};

const useFormControl = <Value,>() => {
  return React.useContext(
    FormControlContext
  ) as FormControlContextValue<Value> | null;
};

const registerFormControl = <Component,>(component: Component) => {
  if (
    (typeof component === 'function' ||
      (typeof component === 'object' && component !== null)) &&
    !formControlTypes.has(component)
  ) {
    formControlTypes.add(component);
  }

  return component;
};

const isRegisteredFormControl = (component: unknown) => {
  return (
    (typeof component === 'function' ||
      (typeof component === 'object' && component !== null)) &&
    formControlTypes.has(component)
  );
};

const assignRef = <T,>(ref: React.Ref<T> | undefined, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

const useMergedRefs = <T,>(
  firstRef: React.Ref<T> | undefined,
  secondRef: React.Ref<T> | undefined
) => {
  return React.useCallback(
    (value: T | null) => {
      assignRef(firstRef, value);
      assignRef(secondRef, value);
    },
    [firstRef, secondRef]
  );
};

const mergeIds = (...ids: Array<string | undefined>) => {
  const value = [...new Set(ids.flatMap((id) => id?.split(' ') ?? []))]
    .filter(Boolean)
    .join(' ');

  return value || undefined;
};

export {
  FormControlBoundary,
  FormControlProvider,
  isRegisteredFormControl,
  mergeIds,
  registerFormControl,
  useFormControl,
  useMergedRefs,
  type FormControlContextValue,
};
