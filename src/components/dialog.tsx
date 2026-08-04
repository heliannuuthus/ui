import * as React from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from './button';
import type { DataAttributes, OpenStateProps } from './internal/public-types';

type DialogProps = OpenStateProps & {
  cancelText?: React.ReactNode;
  children?: React.ReactNode;
  confirmText?: React.ReactNode;
  contentClassName?: string;
  contentProps?: Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children' | 'className'
  > &
    DataAttributes;
  disablePointerDismissal?: boolean;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  onConfirm?: () => void;
  showCloseButton?: boolean;
  title?: React.ReactNode;
  trigger?: React.ReactElement;
};

const Dialog = ({
  cancelText,
  children,
  confirmText,
  contentClassName,
  contentProps,
  description,
  footer,
  onConfirm,
  showCloseButton = true,
  title,
  trigger,
  ...props
}: DialogProps) => {
  const hasHeader = title != null || description != null;
  const hasFooter = footer != null || cancelText != null || confirmText != null;

  return (
    <DialogPrimitive.Root data-slot="dialog" {...props}>
      {trigger != null ? (
        <DialogPrimitive.Trigger data-slot="dialog-trigger" render={trigger} />
      ) : null}
      <DialogPrimitive.Portal data-slot="dialog-portal">
        <DialogPrimitive.Backdrop
          data-slot="dialog-overlay"
          className="fixed inset-0 isolate z-50 bg-black/30 duration-100 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
        />
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          {...contentProps}
          className={cn(
            'fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-4xl bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 duration-100 outline-none sm:max-w-md dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
            contentClassName
          )}
        >
          {hasHeader ? (
            <div data-slot="dialog-header" className="flex flex-col gap-1.5">
              {title != null ? (
                <DialogPrimitive.Title
                  data-slot="dialog-title"
                  className="font-heading text-base leading-none font-medium"
                >
                  {title}
                </DialogPrimitive.Title>
              ) : null}
              {description != null ? (
                <DialogPrimitive.Description
                  data-slot="dialog-description"
                  className="text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground"
                >
                  {description}
                </DialogPrimitive.Description>
              ) : null}
            </div>
          ) : null}
          {children}
          {hasFooter ? (
            <div
              data-slot="dialog-footer"
              className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
            >
              {footer}
              {cancelText != null ? (
                <DialogPrimitive.Close render={<Button variant="outline" />}>
                  {cancelText}
                </DialogPrimitive.Close>
              ) : null}
              {confirmText != null ? (
                <DialogPrimitive.Close render={<Button onClick={onConfirm} />}>
                  {confirmText}
                </DialogPrimitive.Close>
              ) : null}
            </div>
          ) : null}
          {showCloseButton ? (
            <DialogPrimitive.Close
              data-slot="dialog-close"
              render={
                <Button
                  variant="ghost"
                  className="absolute top-4 right-4 bg-secondary"
                  size="icon-sm"
                />
              }
            >
              <XIcon />
              <span className="sr-only">关闭</span>
            </DialogPrimitive.Close>
          ) : null}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog, type DialogProps };
