import '@heliannuuthus/ui/styles.css';
import { Breadcrumb } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const deepPathItems = [
    { label: copy('工作台'), href: '#' },
    { label: copy('研发项目'), href: '#' },
    { label: 'Helios', href: '#' },
    { label: copy('发布管理'), href: '#' },
    { label: copy('生产环境'), href: '#' },
    { label: 'v0.12.0' },
  ];

  const BreadcrumbCollapsedDemo = () => {
    return (
      <section className="breadcrumb-collapse-demo">
        <div className="breadcrumb-demo-caption">
          <span>{copy('当前位置')}</span>
          <strong>{copy('v0.12.0 发布详情')}</strong>
        </div>
        <Breadcrumb
          collapse={{
            maxItems: 4,
            before: 1,
            after: 2,
            label: copy('显示完整路径'),
          }}
          items={deepPathItems}
          icon
        />
        <p>
          {copy(
            '中间的三个层级收进省略菜单，起点、直接父级和当前页面保持可见。'
          )}
        </p>
      </section>
    );
  };

  return BreadcrumbCollapsedDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function BreadcrumbCase02({
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
