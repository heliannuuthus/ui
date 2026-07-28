import * as React from 'react';

import { cn } from '../lib/utils';

type LayoutProps = React.ComponentProps<'div'>;
type LayoutHeaderProps = React.ComponentProps<'header'>;
type LayoutContentProps = React.ComponentProps<'main'>;
type LayoutFooterProps = React.ComponentProps<'footer'>;
type LayoutSidebarProps = React.ComponentProps<'aside'> & {
  width?: number | string;
};

function LayoutRoot({ className, ...props }: LayoutProps) {
  return (
    <div
      className={cn(
        'flex min-h-0 min-w-0 flex-auto flex-col has-[>[data-slot=layout-sidebar]]:flex-row',
        className
      )}
      data-slot="layout"
      {...props}
    />
  );
}

function LayoutHeader({ className, ...props }: LayoutHeaderProps) {
  return (
    <header
      className={cn('min-w-0 shrink-0', className)}
      data-slot="layout-header"
      {...props}
    />
  );
}

function LayoutContent({ className, ...props }: LayoutContentProps) {
  return (
    <main
      className={cn('min-h-0 min-w-0 flex-auto', className)}
      data-slot="layout-content"
      {...props}
    />
  );
}

function LayoutFooter({ className, ...props }: LayoutFooterProps) {
  return (
    <footer
      className={cn('min-w-0 shrink-0', className)}
      data-slot="layout-footer"
      {...props}
    />
  );
}

function LayoutSidebar({
  className,
  style,
  width = 240,
  ...props
}: LayoutSidebarProps) {
  const resolvedWidth = typeof width === 'number' ? `${width}px` : width;

  return (
    <aside
      className={cn(
        'min-h-0 min-w-0 shrink-0 basis-(--layout-sidebar-width)',
        className
      )}
      data-slot="layout-sidebar"
      style={
        {
          '--layout-sidebar-width': resolvedWidth,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

const Layout = Object.assign(LayoutRoot, {
  Header: LayoutHeader,
  Content: LayoutContent,
  Footer: LayoutFooter,
  Sidebar: LayoutSidebar,
});

export { Layout };
export type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSidebarProps,
};
