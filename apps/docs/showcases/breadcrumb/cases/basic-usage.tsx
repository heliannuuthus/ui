import '@heliannuuthus/ui/styles.css';
import { Breadcrumb } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const items = [
    { label: '首页', href: '/' },
    { label: '组件', href: '/components' },
    { label: '导航', href: '/components/navigation-menu' },
    { label: 'Breadcrumb' },
  ];

  const PageBreadcrumb = () => {
    return <Breadcrumb items={items} icon />;
  };

  return PageBreadcrumb;
})();

const EnExample = (() => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'component', href: '/components' },
    { label: 'Navigation', href: '/components/navigation-menu' },
    { label: 'Breadcrumb' },
  ];

  const PageBreadcrumb = () => {
    return <Breadcrumb items={items} icon />;
  };

  return PageBreadcrumb;
})();

export default function ExampleCase({
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
