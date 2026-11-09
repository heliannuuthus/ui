'use client';

import * as React from 'react';
import {
  Toaster as SonnerPrimitive,
  type Action,
  type ExternalToast,
  type ToastClassnames,
  type ToasterProps,
} from 'sonner';
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from 'lucide-react';

import { useProvider } from './provider';

type ToastClasses = Omit<
  ToastClassnames,
  'closeButton' | 'cancelButton' | 'actionButton'
> & {
  close?: string;
  cancel?: string;
  action?: string;
};

// 上游仅提供操作与取消按钮的行内样式入口。
type ToastStyles = {
  cancel?: React.CSSProperties;
  action?: React.CSSProperties;
};

type ToastAction = Omit<Action, 'actionButtonStyle'> & {
  style?: React.CSSProperties;
};

type ToastOptions = Omit<
  ExternalToast,
  | 'classNames'
  | 'descriptionClassName'
  | 'cancelButtonStyle'
  | 'actionButtonStyle'
  | 'action'
  | 'cancel'
  | 'richColors'
  | 'closeButton'
> & {
  classes?: ToastClasses;
  styles?: ToastStyles;
  action?: ToastAction | React.ReactNode;
  cancel?: ToastAction | React.ReactNode;
  rich?: boolean;
  closable?: boolean;
};

type ToastDefaults = Omit<
  NonNullable<ToasterProps['toastOptions']>,
  | 'classNames'
  | 'descriptionClassName'
  | 'cancelButtonStyle'
  | 'actionButtonStyle'
  | 'closeButton'
> & {
  classes?: ToastClasses;
  styles?: ToastStyles;
  closable?: boolean;
};

type ToasterOffset = {
  base?: ToasterProps['offset'];
  mobile?: ToasterProps['mobileOffset'];
};

type SonnerProps = Omit<
  ToasterProps,
  | 'visibleToasts'
  | 'richColors'
  | 'closeButton'
  | 'toastOptions'
  | 'swipeDirections'
  | 'containerAriaLabel'
  | 'offset'
  | 'mobileOffset'
> & {
  limit?: ToasterProps['visibleToasts'];
  rich?: boolean;
  closable?: boolean;
  defaults?: ToastDefaults;
  swipe?: ToasterProps['swipeDirections'];
  label?: string;
  offset?: ToasterOffset;
};

const isToastAction = (action: ToastOptions['action']): action is ToastAction =>
  action !== null &&
  typeof action === 'object' &&
  'label' in action &&
  'onClick' in action;

const adaptToastAction = (
  action: ToastOptions['action']
): ExternalToast['action'] => {
  if (isToastAction(action)) {
    const { style, ...props } = action;
    return { ...props, actionButtonStyle: style };
  }
  return action;
};

const adaptToastOptions = (options: ToastOptions): ExternalToast => {
  const { classes, styles, action, cancel, rich, closable, ...props } = options;
  const {
    close,
    cancel: cancelClass,
    action: actionClass,
    ...classNames
  } = classes ?? {};
  const cancelStyle =
    (isToastAction(cancel) ? cancel.style : undefined) ?? styles?.cancel;
  const actionStyle =
    (isToastAction(action) ? action.style : undefined) ?? styles?.action;

  return {
    ...props,
    ...(rich !== undefined && { richColors: rich }),
    ...(closable !== undefined && { closeButton: closable }),
    ...(classes && {
      classNames: {
        ...classNames,
        ...(close !== undefined && { closeButton: close }),
        ...(cancelClass !== undefined && { cancelButton: cancelClass }),
        ...(actionClass !== undefined && { actionButton: actionClass }),
      },
    }),
    ...(cancelStyle !== undefined && { cancelButtonStyle: cancelStyle }),
    ...(actionStyle !== undefined && { actionButtonStyle: actionStyle }),
    ...(action !== undefined && { action: adaptToastAction(action) }),
    ...(cancel !== undefined && { cancel: adaptToastAction(cancel) }),
  };
};

const adaptToasterProps = ({
  limit,
  rich,
  closable,
  defaults,
  swipe,
  label,
  offset,
  ...props
}: SonnerProps): ToasterProps => ({
  ...props,
  visibleToasts: limit,
  richColors: rich,
  closeButton: closable,
  ...(defaults !== undefined && { toastOptions: adaptToastOptions(defaults) }),
  swipeDirections: swipe,
  containerAriaLabel: label,
  offset: offset?.base,
  mobileOffset: offset?.mobile,
});

const Toaster = ({ ...props }: SonnerProps): React.JSX.Element => {
  const { resolvedAppearance } = useProvider();

  return (
    <SonnerPrimitive
      theme={resolvedAppearance}
      className="toaster group"
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
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: 'cn-toast',
        },
      }}
      {...adaptToasterProps(props)}
    />
  );
};

const Sonner: typeof Toaster = Toaster;

export { Sonner, adaptToasterProps, adaptToastOptions };
export type {
  SonnerProps,
  ToastAction,
  ToastClasses,
  ToastDefaults,
  ToastOptions,
  ToastStyles,
  ToasterOffset,
};
