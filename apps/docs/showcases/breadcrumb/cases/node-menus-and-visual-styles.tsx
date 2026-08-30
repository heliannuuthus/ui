import '@heliannuuthus/ui/styles.css';
import { Breadcrumb } from '@heliannuuthus/ui';
import { Box, Component, Folder, LayoutGrid, Settings2 } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const pageItems = [
    { label: copy('首页'), href: '/' },
    { label: copy('组件'), href: '/components' },
    { label: copy('导航'), href: '/components/navigation-menu' },
    { label: 'Breadcrumb' },
  ];

  const menuItems = [
    { label: copy('首页'), href: '#' },
    {
      label: copy('组件'),
      icon: <LayoutGrid />,
      menu: [
        { label: copy('数据展示'), icon: <Box />, onSelect: () => undefined },
        {
          label: copy('表单组件'),
          icon: <Component />,
          onSelect: () => undefined,
        },
        {
          label: copy('组件设置'),
          icon: <Settings2 />,
          onSelect: () => undefined,
        },
      ],
    },
    { label: 'Breadcrumb' },
  ];

  const BreadcrumbVariantsDemo = () => {
    return (
      <div className="breadcrumb-variants-demo">
        <section>
          <div className="breadcrumb-demo-caption">
            <span>{copy('层级菜单')}</span>
            <small>{copy('路径节点可以展开同级入口')}</small>
          </div>
          <Breadcrumb items={menuItems} />
        </section>
        <section>
          <div className="breadcrumb-demo-caption">
            <span>{copy('下划线链接')}</span>
            <small>{copy('适合链接感需要更明确的内容页')}</small>
          </div>
          <Breadcrumb items={pageItems} separator="slash" variant="underline" />
        </section>
        <section>
          <div className="breadcrumb-demo-caption">
            <span>{copy('紧凑标签')}</span>
            <small>{copy('用于工具栏或密度较高的工作区')}</small>
          </div>
          <Breadcrumb
            items={[
              { label: copy('资源'), href: '#', icon: <Folder /> },
              { label: copy('图片'), href: '#' },
              { label: copy('封面图') },
            ]}
            separator="dot"
            size="sm"
            variant="pill"
          />
        </section>
      </div>
    );
  };

  return BreadcrumbVariantsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function BreadcrumbCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-breadcrumb">
      <Example />
    </div>
  );
}
