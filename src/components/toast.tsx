'use client';

import * as React from 'react';
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import {
  Toaster as Sonner,
  toast as sonnerToast,
  type ExternalToast,
  type ToastT,
  type ToastToDismiss,
} from 'sonner';

import { cn } from '../lib/utils';
import { useProvider } from './provider';
import {
  adaptToasterProps,
  adaptToastOptions,
  type SonnerProps,
  type ToastOptions,
} from './sonner';

type ToastScope = 'global' | 'local';

type ToasterProps = SonnerProps & {
  scope?: ToastScope;
};

type ToastProviderProps = Omit<ToasterProps, 'id'> & {
  children: React.ReactNode;
  id?: string;
};

type ToastId = string | number;

type ToastPromiseHandle<Data> =
  | (string & { unwrap: () => Promise<Data> })
  | (number & { unwrap: () => Promise<Data> })
  | { unwrap: () => Promise<Data> };

type SonnerPromiseOptions<Data> = NonNullable<
  Parameters<typeof sonnerToast.promise<Data>>[1]
>;

type SonnerPromiseError = Parameters<
  Extract<SonnerPromiseOptions<unknown>['error'], (error: never) => unknown>
>[0];

type ToastPromiseMessage = ToastOptions & { message: React.ReactNode };

type ToastPromiseResult<Data> =
  | React.ReactNode
  | ToastPromiseMessage
  | ((
      data: Data
    ) =>
      | React.ReactNode
      | ToastPromiseMessage
      | Promise<React.ReactNode | ToastPromiseMessage>);

type ToastPromiseOptions<Data = unknown> = Omit<
  SonnerPromiseOptions<Data>,
  keyof ExternalToast | 'success' | 'error'
> &
  Omit<ToastOptions, 'description'> & {
    description?: SonnerPromiseOptions<Data>['description'];
    success?: ToastPromiseResult<Data>;
    error?: ToastPromiseResult<SonnerPromiseError>;
  };

type ToastApi = ((
  message: Parameters<typeof sonnerToast>[0],
  options?: ToastOptions
) => ToastId) & {
  [
    Method in 'success' | 'info' | 'warning' | 'error' | 'loading' | 'message'
  ]: (
    message: Parameters<(typeof sonnerToast)[Method]>[0],
    options?: ToastOptions
  ) => ToastId;
} & {
  custom: (
    renderer: Parameters<typeof sonnerToast.custom>[0],
    options?: ToastOptions
  ) => ToastId;
  promise: <Data>(
    promise: Parameters<typeof sonnerToast.promise<Data>>[0],
    options?: ToastPromiseOptions<Data>
  ) => ToastPromiseHandle<Data>;
  dismiss: typeof sonnerToast.dismiss;
  getHistory: typeof sonnerToast.getHistory;
  getToasts: typeof sonnerToast.getToasts;
};

type ToastContextValue = {
  toast: ToastApi;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

const getToastOptions = (
  options: ToastOptions | undefined,
  toasterId: string | undefined
): ExternalToast => {
  const adapted = options ? adaptToastOptions(options) : {};
  return toasterId ? { ...adapted, toasterId } : adapted;
};

const adaptPromiseMessage = (result: React.ReactNode | ToastPromiseMessage) => {
  if (result !== null && typeof result === 'object' && 'message' in result) {
    const { message, ...options } = result;
    return { ...adaptToastOptions(options), message };
  }
  return result;
};

const adaptPromiseResult = <Data,>(
  result: ToastPromiseResult<Data> | undefined
): SonnerPromiseOptions<Data>['success'] => {
  return (
    typeof result === 'function'
      ? async (data: Data) => adaptPromiseMessage(await result(data))
      : adaptPromiseMessage(result)
  ) as SonnerPromiseOptions<Data>['success'];
};

const getPromiseOptions = <Data,>(
  options: ToastPromiseOptions<Data> | undefined,
  toasterId: string | undefined
): SonnerPromiseOptions<Data> | undefined => {
  if (!options) return toasterId ? { toasterId } : undefined;
  const { success, error, description, ...props } = options;
  return {
    ...getToastOptions(props, toasterId),
    description,
    success: adaptPromiseResult(success),
    error: adaptPromiseResult(error),
  };
};

const isToastInScope = (
  item: ToastT | ToastToDismiss,
  toasterId: string | undefined
): item is ToastT => {
  return !('dismiss' in item) && item.toasterId === toasterId;
};

const createToastApi = (toasterId?: string): ToastApi => {
  const scopedToast = ((message, options) =>
    sonnerToast(message, getToastOptions(options, toasterId))) as ToastApi;

  scopedToast.success = (message, options) =>
    sonnerToast.success(message, getToastOptions(options, toasterId));
  scopedToast.info = (message, options) =>
    sonnerToast.info(message, getToastOptions(options, toasterId));
  scopedToast.warning = (message, options) =>
    sonnerToast.warning(message, getToastOptions(options, toasterId));
  scopedToast.error = (message, options) =>
    sonnerToast.error(message, getToastOptions(options, toasterId));
  scopedToast.loading = (message, options) =>
    sonnerToast.loading(message, getToastOptions(options, toasterId));
  scopedToast.message = (message, options) =>
    sonnerToast.message(message, getToastOptions(options, toasterId));
  scopedToast.custom = (renderer, options) =>
    sonnerToast.custom(renderer, getToastOptions(options, toasterId));
  scopedToast.promise = (promise, options) =>
    sonnerToast.promise(promise, getPromiseOptions(options, toasterId));
  scopedToast.dismiss = (toastId) => {
    if (toastId !== undefined) return sonnerToast.dismiss(toastId);

    let dismissedId: string | number = '';
    sonnerToast
      .getToasts()
      .filter((item) => isToastInScope(item, toasterId))
      .forEach((item) => {
        dismissedId = sonnerToast.dismiss(item.id);
      });
    return dismissedId;
  };
  scopedToast.getHistory = () =>
    sonnerToast.getHistory().filter((item) => isToastInScope(item, toasterId));
  scopedToast.getToasts = () =>
    sonnerToast.getToasts().filter((item) => isToastInScope(item, toasterId));

  return scopedToast;
};

const Toaster = ({
  className,
  closable = true,
  position = 'top-center',
  rich = true,
  scope = 'global',
  style,
  defaults,
  ...props
}: ToasterProps) => {
  const { resolvedAppearance } = useProvider();

  return (
    <Sonner
      theme={resolvedAppearance}
      position={position}
      className={cn(
        'toaster group',
        scope === 'local' && 'toast-local',
        className
      )}
      closeButton={closable}
      richColors={rich}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--success-bg':
            'color-mix(in oklab, var(--success) 12%, var(--popover))',
          '--success-border':
            'color-mix(in oklab, var(--success) 32%, var(--border))',
          '--success-text': 'var(--success)',
          '--info-bg': 'color-mix(in oklab, var(--info) 12%, var(--popover))',
          '--info-border':
            'color-mix(in oklab, var(--info) 32%, var(--border))',
          '--info-text': 'var(--info)',
          '--warning-bg':
            'color-mix(in oklab, var(--warning) 13%, var(--popover))',
          '--warning-border':
            'color-mix(in oklab, var(--warning) 34%, var(--border))',
          '--warning-text': 'var(--warning)',
          '--error-bg':
            'color-mix(in oklab, var(--destructive) 12%, var(--popover))',
          '--error-border':
            'color-mix(in oklab, var(--destructive) 32%, var(--border))',
          '--error-text': 'var(--destructive)',
          '--border-radius': 'var(--radius)',
          position: scope === 'local' ? 'absolute' : undefined,
          ...style,
        } as React.CSSProperties
      }
      {...adaptToasterProps({
        ...props,
        rich,
        closable,
        defaults: {
          ...defaults,
          classes: {
            toast: 'cn-toast',
            ...defaults?.classes,
          },
        },
      })}
    />
  );
};

const ToastProvider = ({
  children,
  id,
  scope = 'global',
  ...toasterProps
}: ToastProviderProps) => {
  const generatedId = React.useId();
  const toasterId =
    id ??
    (scope === 'local' ? `toast-${generatedId.replace(/:/g, '')}` : undefined);
  const contextValue = React.useMemo(
    () => ({ toast: createToastApi(toasterId) }),
    [toasterId]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Toaster id={toasterId} scope={scope} {...toasterProps} />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a <ToastProvider />');
  }

  return context;
};

const toast: ToastApi = Object.assign(createToastApi(), {
  dismiss: sonnerToast.dismiss,
  getHistory: sonnerToast.getHistory,
  getToasts: sonnerToast.getToasts,
});

const Toast = Object.assign(Toaster, {
  Provider: ToastProvider,
  Toaster,
});

export {
  Toast,
  toast,
  useToast,
  type ToasterProps,
  type ToastProviderProps,
  type ToastScope,
  type ToastApi,
  type ToastPromiseOptions,
  type ToastPromiseResult,
  type ToastPromiseMessage,
  type ToastId,
  type ToastPromiseHandle,
};
