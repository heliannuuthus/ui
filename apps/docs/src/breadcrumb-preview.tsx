import { docsCopy } from './i18n/content';
import { Breadcrumb } from '@heliannuuthus/ui';
import { Box, Component, Folder, LayoutGrid, Settings2 } from 'lucide-react';

const pageItems = [
  { label: docsCopy('首页'), href: '/' },
  { label: docsCopy('组件'), href: '/components' },
  { label: docsCopy('导航'), href: '/components/navigation-menu' },
  { label: 'Breadcrumb' },
];

const deepPathItems = [
  { label: docsCopy('工作台'), href: '#' },
  { label: docsCopy('研发项目'), href: '#' },
  { label: 'Helios', href: '#' },
  { label: docsCopy('发布管理'), href: '#' },
  { label: docsCopy('生产环境'), href: '#' },
  { label: 'v0.12.0' },
];

const menuItems = [
  { label: docsCopy('首页'), href: '#' },
  {
    label: docsCopy('组件'),
    icon: <LayoutGrid />,
    menu: [
      { label: docsCopy('数据展示'), icon: <Box />, onSelect: () => undefined },
      {
        label: docsCopy('表单组件'),
        icon: <Component />,
        onSelect: () => undefined,
      },
      {
        label: docsCopy('组件设置'),
        icon: <Settings2 />,
        onSelect: () => undefined,
      },
    ],
  },
  { label: 'Breadcrumb' },
];

export const BreadcrumbBasicDemo = () => {
  return (
    <section className="breadcrumb-page-demo">
      <Breadcrumb items={pageItems} homeIcon />
      <header>
        <div>
          <span>{docsCopy('导航组件')}</span>
          <h3>Breadcrumb</h3>
          <p>
            {docsCopy('帮助用户确认当前位置，并沿着稳定的页面层级向上返回。')}
          </p>
        </div>
        <div className="breadcrumb-page-demo-status">
          <i />
          {docsCopy('文档已同步')}
        </div>
      </header>
      <div className="breadcrumb-page-demo-content" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
    </section>
  );
};

export const BreadcrumbCollapsedDemo = () => {
  return (
    <section className="breadcrumb-collapse-demo">
      <div className="breadcrumb-demo-caption">
        <span>{docsCopy('当前位置')}</span>
        <strong>{docsCopy('v0.12.0 发布详情')}</strong>
      </div>
      <Breadcrumb
        collapse={{
          maxItems: 4,
          before: 1,
          after: 2,
          label: docsCopy('显示完整路径'),
        }}
        items={deepPathItems}
        homeIcon
      />
      <p>
        {docsCopy(
          '中间的三个层级收进省略菜单，起点、直接父级和当前页面保持可见。'
        )}
      </p>
    </section>
  );
};

export const BreadcrumbVariantsDemo = () => {
  return (
    <div className="breadcrumb-variants-demo">
      <section>
        <div className="breadcrumb-demo-caption">
          <span>{docsCopy('层级菜单')}</span>
          <small>{docsCopy('路径节点可以展开同级入口')}</small>
        </div>
        <Breadcrumb items={menuItems} />
      </section>
      <section>
        <div className="breadcrumb-demo-caption">
          <span>{docsCopy('下划线链接')}</span>
          <small>{docsCopy('适合链接感需要更明确的内容页')}</small>
        </div>
        <Breadcrumb items={pageItems} separator="slash" variant="underline" />
      </section>
      <section>
        <div className="breadcrumb-demo-caption">
          <span>{docsCopy('紧凑标签')}</span>
          <small>{docsCopy('用于工具栏或密度较高的工作区')}</small>
        </div>
        <Breadcrumb
          items={[
            { label: docsCopy('资源'), href: '#', icon: <Folder /> },
            { label: docsCopy('图片'), href: '#' },
            { label: docsCopy('封面图') },
          ]}
          separator="dot"
          size="sm"
          variant="pill"
        />
      </section>
    </div>
  );
};
