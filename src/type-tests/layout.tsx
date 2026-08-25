import { createRef } from 'react';

import {
  Layout,
  type LayoutBreakpoint,
  type LayoutSidebarCollapseReason,
  type LayoutSidebarProps,
} from '..';

const asideRef = createRef<HTMLElement>();
const breakpoint: LayoutBreakpoint = 'lg';
const reason: LayoutSidebarCollapseReason = 'trigger';
const props: LayoutSidebarProps = {
  'aria-label': 'Workspace navigation',
  breakpoint,
  collapsedWidth: 64,
  collapsible: true,
  defaultCollapsed: false,
  onBreakpointChange: (below) => below.valueOf(),
  onChange: (collapsed, changeReason) => {
    collapsed.valueOf();
    changeReason satisfies LayoutSidebarCollapseReason;
  },
  ref: asideRef,
  side: 'start',
  labels: {
    collapse: 'Collapse workspace navigation',
    expand: 'Expand workspace navigation',
  },
  width: '18rem',
};

void reason;
void (<Layout.Sidebar {...props}>Navigation</Layout.Sidebar>);
void (
  <Layout.Sidebar collapsed collapsible={<span>Toggle</span>} side="end" />
);

// @ts-expect-error Layout only supports documented breakpoint tokens.
void (<Layout.Sidebar breakpoint="desktop">Navigation</Layout.Sidebar>);

// @ts-expect-error Collapse reasons are a closed public union.
const invalidReason: LayoutSidebarCollapseReason = 'resize';
void invalidReason;
