import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { cn } from '../lib/utils';

type LayoutProps = useRender.ComponentProps<'div'> &
  React.ComponentProps<'div'>;
type LayoutHeaderProps = useRender.ComponentProps<'header'> &
  React.ComponentProps<'header'>;
type LayoutContentProps = useRender.ComponentProps<'main'> &
  React.ComponentProps<'main'>;
type LayoutFooterProps = useRender.ComponentProps<'footer'> &
  React.ComponentProps<'footer'>;
type LayoutSidebarProps = useRender.ComponentProps<'aside'> &
  React.ComponentProps<'aside'> & {
    width?: number | string;
  };

function LayoutRoot({ className, render, ...props }: LayoutProps) {
  return useRender({
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        className: cn(
          'flex min-h-0 min-w-0 flex-auto flex-col has-[>[data-slot=layout-sidebar]]:flex-row',
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: 'layout',
    },
  });
}

function LayoutHeader({ className, render, ...props }: LayoutHeaderProps) {
  return useRender({
    defaultTagName: 'header',
    props: mergeProps<'header'>(
      {
        className: cn('min-w-0 shrink-0', className),
      },
      props
    ),
    render,
    state: {
      slot: 'layout-header',
    },
  });
}

function LayoutContent({ className, render, ...props }: LayoutContentProps) {
  return useRender({
    defaultTagName: 'main',
    props: mergeProps<'main'>(
      {
        className: cn('min-h-0 min-w-0 flex-auto', className),
      },
      props
    ),
    render,
    state: {
      slot: 'layout-content',
    },
  });
}

function LayoutFooter({ className, render, ...props }: LayoutFooterProps) {
  return useRender({
    defaultTagName: 'footer',
    props: mergeProps<'footer'>(
      {
        className: cn('min-w-0 shrink-0', className),
      },
      props
    ),
    render,
    state: {
      slot: 'layout-footer',
    },
  });
}

function LayoutSidebar({
  className,
  render,
  style,
  width = 240,
  ...props
}: LayoutSidebarProps) {
  const resolvedWidth = typeof width === 'number' ? `${width}px` : width;

  return useRender({
    defaultTagName: 'aside',
    props: mergeProps<'aside'>(
      {
        className: cn(
          'min-h-0 min-w-0 shrink-0 basis-(--layout-sidebar-width)',
          className
        ),
        style: {
          '--layout-sidebar-width': resolvedWidth,
          ...style,
        } as React.CSSProperties,
      },
      props
    ),
    render,
    state: {
      slot: 'layout-sidebar',
    },
  });
}

const Layout = Object.assign(LayoutRoot, {
  Header: LayoutHeader,
  Content: LayoutContent,
  Footer: LayoutFooter,
  Sidebar: LayoutSidebar,
});

export { Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSidebar };
export type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSidebarProps,
};
