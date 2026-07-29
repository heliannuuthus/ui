'use client';

import * as React from 'react';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';

import { cn } from '../lib/utils';
import { Button } from './button';
import type { OpenStateProps } from './internal/public-types';

type AlertDialogProps = OpenStateProps & {
  cancelText?: React.ReactNode;
  confirmText: React.ReactNode;
  confirmVariant?: React.ComponentProps<typeof Button>['variant'];
  contentClassName?: string;
  description?: React.ReactNode;
  media?: React.ReactNode;
  onConfirm?: () => void;
  size?: 'default' | 'sm';
  title: React.ReactNode;
  trigger: React.ReactElement;
};

function AlertDialog({
  cancelText = '取消',
  confirmText,
  confirmVariant = 'default',
  contentClassName,
  description,
  media,
  onConfirm,
  size = 'default',
  title,
  trigger,
  ...props
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props}>
      <AlertDialogPrimitive.Trigger
        data-slot="alert-dialog-trigger"
        render={trigger}
      />
      <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal">
        <AlertDialogPrimitive.Backdrop
          data-slot="alert-dialog-overlay"
          className="fixed inset-0 isolate z-50 bg-black/30 duration-100 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
        />
        <AlertDialogPrimitive.Popup
          data-slot="alert-dialog-content"
          data-size={size}
          className={cn(
            'group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-6 rounded-4xl bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-md dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
            contentClassName
          )}
        >
          <div
            data-slot="alert-dialog-header"
            className="grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]"
          >
            {media != null ? (
              <div
                data-slot="alert-dialog-media"
                className="mb-2 inline-flex size-16 items-center justify-center rounded-full bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8"
              >
                {media}
              </div>
            ) : null}
            <AlertDialogPrimitive.Title
              data-slot="alert-dialog-title"
              className="font-heading text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2"
            >
              {title}
            </AlertDialogPrimitive.Title>
            {description != null ? (
              <AlertDialogPrimitive.Description
                data-slot="alert-dialog-description"
                className="text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground"
              >
                {description}
              </AlertDialogPrimitive.Description>
            ) : null}
          </div>
          <div
            data-slot="alert-dialog-footer"
            className="flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end"
          >
            {cancelText != null ? (
              <AlertDialogPrimitive.Close
                data-slot="alert-dialog-cancel"
                render={<Button variant="outline" />}
              >
                {cancelText}
              </AlertDialogPrimitive.Close>
            ) : null}
            <AlertDialogPrimitive.Close
              data-slot="alert-dialog-action"
              render={<Button variant={confirmVariant} onClick={onConfirm} />}
            >
              {confirmText}
            </AlertDialogPrimitive.Close>
          </div>
        </AlertDialogPrimitive.Popup>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}

export { AlertDialog, type AlertDialogProps };
