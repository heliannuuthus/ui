import '@heliannuuthus/ui/styles.css';
import { NavigationMenu } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <NavigationMenu
      items={[
        {
          label: '产品',
          content: ({ Link }) => (
            <div>
              <Link href="/components">组件库</Link>
              <Link href="/tokens">设计令牌</Link>
            </div>
          ),
        },
        { label: '组件', href: '/components', active: true },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <NavigationMenu
      items={[
        {
          label: 'product',
          content: ({ Link }) => (
            <div>
              <Link href="/components">Component Library</Link>
              <Link href="/tokens">Design Tokens</Link>
            </div>
          ),
        },
        { label: 'components', href: '/components', active: true },
      ]}
    />
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-navigation-menu">
      <Example />
    </div>
  );
}
