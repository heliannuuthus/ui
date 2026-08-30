import '@heliannuuthus/ui/styles.css';
import { NavigationMenu } from '@heliannuuthus/ui';
import {
  Blocks,
  BookOpen,
  CircleHelp,
  Code2,
  GitBranch,
  Layers3,
  Palette,
  Sparkles,
} from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const productLinks = [
    {
      title: copy('组件库'),
      description: copy('构建一致、可访问的产品界面。'),
      icon: <Blocks />,
    },
    {
      title: copy('设计令牌'),
      description: copy('统一颜色、间距与排版语言。'),
      icon: <Palette />,
    },
    {
      title: copy('布局模板'),
      description: copy('复用经过验证的页面骨架。'),
      icon: <Layers3 />,
    },
    {
      title: copy('开发工具'),
      description: copy('从设计快速进入实现与调试。'),
      icon: <Code2 />,
    },
  ];

  const ProductMenu = ({ compact = false }: { compact?: boolean }) => {
    return (
      <NavigationMenu
        align={compact ? 'end' : 'start'}
        items={[
          {
            label: copy('产品'),
            content: ({ Link }) => (
              <div
                className={
                  compact ? 'navigation-menu-compact' : 'navigation-menu-mega'
                }
              >
                {!compact && (
                  <Link className="navigation-menu-feature" href="#">
                    <Sparkles />
                    <span>Heliannuuthus UI</span>
                    <strong>{copy('从稳定的基础开始构建产品。')}</strong>
                    <small>{copy('查看设计系统 →')}</small>
                  </Link>
                )}
                <div className="navigation-menu-link-grid">
                  {productLinks.slice(0, compact ? 2 : 4).map((item) => (
                    <Link href="#" key={item.title}>
                      {item.icon}
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.description}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ),
          },
          {
            label: copy('资源'),
            content: ({ Link }) => (
              <div className="navigation-menu-resource-list">
                <Link href="#">
                  <BookOpen />
                  {copy('文档中心')}
                </Link>
                <Link href="#">
                  <GitBranch />
                  {copy('更新记录')}
                </Link>
                <Link href="#">
                  <CircleHelp />
                  {copy('获取帮助')}
                </Link>
              </div>
            ),
          },
          { label: copy('组件'), href: '#', active: true },
        ]}
      />
    );
  };

  const NavigationMenuCompactDemo = () => {
    return (
      <div className="navigation-menu-compact-stage">
        <span>{copy('右对齐的局部导航')}</span>
        <ProductMenu compact />
      </div>
    );
  };

  return NavigationMenuCompactDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function NavigationMenuCase02({
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
