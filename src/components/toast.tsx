'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
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
  type ToasterProps as SonnerToasterProps,
} from 'sonner';

import { cn } from '../lib/utils';

type ToastScope = 'global' | 'local';

type ToasterProps = SonnerToasterProps & {
  scope?: ToastScope;
};

type ToastProviderProps = Omit<ToasterProps, 'id'> & {
  children: React.ReactNode;
  id?: string;
};

type ToastContextValue = {
  toast: typeof sonnerToast;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

const getToastOptions = (
  options: ExternalToast | undefined,
  toasterId: string | undefined
): ExternalToast => {
  return toasterId ? { ...options, toasterId } : (options ?? {});
};

const isToastInScope = (
  item: ReturnType<typeof sonnerToast.getToasts>[number],
  toasterId: string | undefined
): item is ToastT => {
  return !('dismiss' in item) && item.toasterId === toasterId;
};

const createToastApi = (toasterId?: string): typeof sonnerToast => {
  const scopedToast = ((message, options) =>
    sonnerToast(
      message,
      getToastOptions(options, toasterId)
    )) as typeof sonnerToast;

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
  scopedToast.promise = ((promise, options) =>
    sonnerToast.promise(
      promise,
      toasterId ? { ...options, toasterId } : options
    )) as typeof sonnerToast.promise;
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
  closeButton = true,
  position = 'top-center',
  richColors = true,
  scope = 'global',
  style,
  toastOptions,
  ...props
}: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as SonnerToasterProps['theme']}
      position={position}
      className={cn(
        'toaster group',
        scope === 'local' && 'toast-local',
        className
      )}
      closeButton={closeButton}
      richColors={richColors}
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
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: 'cn-toast',
          ...toastOptions?.classNames,
        },
      }}
      {...props}
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

const Toast = Object.assign(Toaster, {
  Provider: ToastProvider,
  Toaster,
});

export {
  Toast,
  sonnerToast as toast,
  useToast,
  type ToasterProps,
  type ToastProviderProps,
  type ToastScope,
};
