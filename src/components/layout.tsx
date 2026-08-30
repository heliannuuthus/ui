import * as React from 'react';
import {
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react';

import { cn } from '../lib/utils';

type LayoutProps = React.ComponentProps<'div'>;
type LayoutHeaderProps = React.ComponentProps<'header'>;
type LayoutContentProps = React.ComponentProps<'main'>;
type LayoutFooterProps = React.ComponentProps<'footer'>;
type LayoutBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type LayoutSidebarCollapseReason = 'breakpoint' | 'trigger';
type LayoutSidebarSide = 'start' | 'end';
type LayoutSidebarLabels = {
  collapse: string;
  expand: string;
};
type LayoutSidebarProps = Omit<React.ComponentProps<'aside'>, 'onChange'> & {
  /** Automatically request a collapsed state while the viewport is below this breakpoint. */
  breakpoint?: LayoutBreakpoint;
  /** Controlled collapsed state. Apply state requests received through onChange. */
  collapsed?: boolean;
  /** Width used while collapsed. Numeric values are interpreted as pixels. */
  collapsedWidth?: number | string;
  /** Show the built-in trigger, or replace its icon with a React node. */
  collapsible?: boolean | React.ReactNode;
  /** Initial collapsed state when collapsed is not controlled. An initially matched breakpoint takes precedence. */
  defaultCollapsed?: boolean;
  labels?: LayoutSidebarLabels;
  /** Reports the initial breakpoint match and each later boundary crossing. */
  onBreakpointChange?: (below: boolean) => void;
  /** Reports a requested collapsed-state change and its source. */
  onChange?: (collapsed: boolean, reason: LayoutSidebarCollapseReason) => void;
  side?: LayoutSidebarSide;
  width?: number | string;
};

const breakpointQueries: Record<LayoutBreakpoint, string> = {
  sm: '(max-width: 639.98px)',
  md: '(max-width: 767.98px)',
  lg: '(max-width: 1023.98px)',
  xl: '(max-width: 1279.98px)',
  '2xl': '(max-width: 1535.98px)',
};

const defaultLabels: LayoutSidebarLabels = {
  collapse: 'Collapse sidebar',
  expand: 'Expand sidebar',
};

const resolveLength = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

const isZeroLength = (value: number | string) =>
  value === 0 || (typeof value === 'string' && /^0(?:[a-z%]*)?$/i.test(value));

const matchesBreakpoint = (breakpoint?: LayoutBreakpoint) =>
  breakpoint != null && typeof window !== 'undefined'
    ? window.matchMedia(breakpointQueries[breakpoint]).matches
    : false;

const LayoutRoot = ({ className, ...props }: LayoutProps) => {
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
};

const LayoutHeader = ({ className, ...props }: LayoutHeaderProps) => {
  return (
    <header
      className={cn('min-w-0 shrink-0', className)}
      data-slot="layout-header"
      {...props}
    />
  );
};

const LayoutContent = ({ className, ...props }: LayoutContentProps) => {
  return (
    <main
      className={cn('min-h-0 min-w-0 flex-auto', className)}
      data-slot="layout-content"
      {...props}
    />
  );
};

const LayoutFooter = ({ className, ...props }: LayoutFooterProps) => {
  return (
    <footer
      className={cn('min-w-0 shrink-0', className)}
      data-slot="layout-footer"
      {...props}
    />
  );
};

const LayoutSidebar = ({
  breakpoint,
  children,
  className,
  collapsed,
  collapsedWidth = 80,
  collapsible = false,
  defaultCollapsed = false,
  labels = defaultLabels,
  onBreakpointChange,
  onChange,
  side = 'start',
  style,
  width = 240,
  ...props
}: LayoutSidebarProps) => {
  const contentId = React.useId();
  const initialBelowBreakpoint = React.useState(() =>
    matchesBreakpoint(breakpoint)
  )[0];
  const [belowBreakpoint, setBelowBreakpoint] = React.useState(
    initialBelowBreakpoint
  );
  const [uncontrolledCollapsed, setUncontrolledCollapsed] = React.useState(
    () => defaultCollapsed || initialBelowBreakpoint
  );
  const resolvedCollapsed = collapsed ?? uncontrolledCollapsed;
  const collapsedRef = React.useRef(resolvedCollapsed);
  const onBreakpointChangeRef = React.useRef(onBreakpointChange);
  const onChangeRef = React.useRef(onChange);

  React.useEffect(() => {
    collapsedRef.current = resolvedCollapsed;
    onBreakpointChangeRef.current = onBreakpointChange;
    onChangeRef.current = onChange;
  }, [onBreakpointChange, onChange, resolvedCollapsed]);

  const updateCollapsed = React.useCallback(
    (nextCollapsed: boolean, reason: LayoutSidebarCollapseReason) => {
      if (collapsedRef.current === nextCollapsed) return;

      if (collapsed === undefined) {
        collapsedRef.current = nextCollapsed;
        setUncontrolledCollapsed(nextCollapsed);
      }
      onChangeRef.current?.(nextCollapsed, reason);
    },
    [collapsed]
  );

  React.useEffect(() => {
    if (breakpoint == null) {
      setBelowBreakpoint(false);
      return;
    }

    const mediaQuery = window.matchMedia(breakpointQueries[breakpoint]);
    const setResponsiveState = (matches: boolean, initial = false) => {
      setBelowBreakpoint(matches);
      onBreakpointChangeRef.current?.(matches);

      if (matches || !initial) {
        updateCollapsed(matches, 'breakpoint');
      }
    };
    const handleChange = (event: MediaQueryListEvent) => {
      setResponsiveState(event.matches);
    };

    setResponsiveState(mediaQuery.matches, true);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint, updateCollapsed]);

  const resolvedWidth = resolveLength(width);
  const resolvedCollapsedWidth = resolveLength(collapsedWidth);
  const hideCollapsedContent =
    resolvedCollapsed && isZeroLength(collapsedWidth);
  const TriggerIcon =
    side === 'start'
      ? resolvedCollapsed
        ? PanelLeftOpen
        : PanelLeftClose
      : resolvedCollapsed
        ? PanelRightOpen
        : PanelRightClose;

  return (
    <aside
      className={cn(
        'relative flex min-h-0 min-w-0 shrink-0 basis-(--layout-sidebar-current-width) flex-col transition-[width,flex-basis] duration-200 ease-out',
        className
      )}
      data-below-breakpoint={belowBreakpoint || undefined}
      data-collapsed={resolvedCollapsed || undefined}
      data-side={side}
      data-slot="layout-sidebar"
      style={
        {
          '--layout-sidebar-width': resolvedWidth,
          '--layout-sidebar-collapsed-width': resolvedCollapsedWidth,
          '--layout-sidebar-current-width': resolvedCollapsed
            ? resolvedCollapsedWidth
            : resolvedWidth,
          width: 'var(--layout-sidebar-current-width)',
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        aria-hidden={hideCollapsedContent || undefined}
        className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden"
        data-slot="layout-sidebar-content"
        id={contentId}
        inert={hideCollapsedContent || undefined}
      >
        {children}
      </div>
      {collapsible !== false && collapsible != null && (
        <button
          aria-controls={contentId}
          aria-expanded={!resolvedCollapsed}
          aria-label={resolvedCollapsed ? labels.expand : labels.collapse}
          className={cn(
            'absolute bottom-2 z-10 grid size-8 place-items-center rounded-lg border border-border bg-background text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            side === 'start' ? 'end-2' : 'start-2',
            hideCollapsedContent && (side === 'start' ? '-end-10' : '-start-10')
          )}
          data-slot="layout-sidebar-trigger"
          onClick={() => updateCollapsed(!resolvedCollapsed, 'trigger')}
          type="button"
        >
          {collapsible === true ? (
            <TriggerIcon aria-hidden="true" className="size-4 rtl:rotate-180" />
          ) : (
            collapsible
          )}
        </button>
      )}
    </aside>
  );
};

const Layout = Object.assign(LayoutRoot, {
  Header: LayoutHeader,
  Content: LayoutContent,
  Footer: LayoutFooter,
  Sidebar: LayoutSidebar,
});

export { Layout };
export type {
  LayoutBreakpoint,
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutSidebarLabels,
  LayoutProps,
  LayoutSidebarCollapseReason,
  LayoutSidebarProps,
  LayoutSidebarSide,
};
