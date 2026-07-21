'use client';

import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb';
import { Box, Component, Folder, LayoutGrid, Settings2 } from 'lucide-react';

const pageItems = [
  { label: '首页', href: '/' },
  { label: '组件', href: '/components' },
  { label: '导航', href: '/components/navigation-menu' },
  { label: 'Breadcrumb' },
];

const deepPathItems = [
  { label: '工作台', href: '#' },
  { label: '研发项目', href: '#' },
  { label: 'Helios', href: '#' },
  { label: '发布管理', href: '#' },
  { label: '生产环境', href: '#' },
  { label: 'v0.12.0' },
];

const menuItems = [
  { label: '首页', href: '#' },
  {
    label: '组件',
    icon: <LayoutGrid />,
    menu: [
      { label: '数据展示', icon: <Box />, onSelect: () => undefined },
      { label: '表单组件', icon: <Component />, onSelect: () => undefined },
      { label: '组件设置', icon: <Settings2 />, onSelect: () => undefined },
    ],
  },
  { label: 'Breadcrumb' },
];

export function BreadcrumbBasicDemo() {
  return (
    <section className="breadcrumb-page-demo">
      <Breadcrumb items={pageItems} homeIcon />
      <header>
        <div>
          <span>导航组件</span>
          <h3>Breadcrumb</h3>
          <p>帮助用户确认当前位置，并沿着稳定的页面层级向上返回。</p>
        </div>
        <div className="breadcrumb-page-demo-status">
          <i />
          文档已同步
        </div>
      </header>
      <div className="breadcrumb-page-demo-content" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}

export function BreadcrumbCollapsedDemo() {
  return (
    <section className="breadcrumb-collapse-demo">
      <div className="breadcrumb-demo-caption">
        <span>当前位置</span>
        <strong>v0.12.0 发布详情</strong>
      </div>
      <Breadcrumb
        items={deepPathItems}
        homeIcon
        maxItems={4}
        itemsBeforeCollapse={1}
        itemsAfterCollapse={2}
      />
      <p>中间的三个层级收进省略菜单，起点、直接父级和当前页面保持可见。</p>
    </section>
  );
}

export function BreadcrumbVariantsDemo() {
  return (
    <div className="breadcrumb-variants-demo">
      <section>
        <div className="breadcrumb-demo-caption">
          <span>层级菜单</span>
          <small>路径节点可以展开同级入口</small>
        </div>
        <Breadcrumb items={menuItems} />
      </section>
      <section>
        <div className="breadcrumb-demo-caption">
          <span>下划线链接</span>
          <small>适合链接感需要更明确的内容页</small>
        </div>
        <Breadcrumb items={pageItems} separator="slash" variant="underline" />
      </section>
      <section>
        <div className="breadcrumb-demo-caption">
          <span>紧凑标签</span>
          <small>用于工具栏或密度较高的工作区</small>
        </div>
        <Breadcrumb
          items={[
            { label: '资源', href: '#', icon: <Folder /> },
            { label: '图片', href: '#' },
            { label: '封面图' },
          ]}
          separator="dot"
          size="sm"
          variant="pill"
        />
      </section>
    </div>
  );
}
