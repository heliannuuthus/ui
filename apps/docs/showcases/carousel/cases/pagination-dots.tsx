import '@heliannuuthus/ui/styles.css';
import { Carousel } from '@heliannuuthus/ui';
import { PackageCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const releaseHighlights = [
    {
      icon: Sparkles,
      kicker: copy('体验'),
      title: copy('筛选器响应更快'),
      description: copy('大型列表的输入响应时间降低 42%。'),
    },
    {
      icon: ShieldCheck,
      kicker: copy('可靠性'),
      title: copy('发布前自动预检'),
      description: copy('缺失变量会在进入生产阶段前被拦截。'),
    },
    {
      icon: PackageCheck,
      kicker: copy('组件'),
      title: copy('数据展示案例补齐'),
      description: copy('16 个组件现在都有真实交互场景。'),
    },
  ];

  const CarouselDotsDemo = ({
    mode = 'default',
  }: {
    mode?: 'custom' | 'default' | 'hidden';
  }) => (
    <Carousel
      aria-label={copy('分页点示例')}
      className="display-carousel"
      controls={false}
      items={releaseHighlights.map((highlight) => {
        const Icon = highlight.icon;
        return (
          <article className="display-highlight" key={highlight.title}>
            <div className="display-highlight-icon">
              <Icon />
            </div>
            <strong>{highlight.title}</strong>
            <p>{highlight.description}</p>
          </article>
        );
      })}
      pagination={mode === 'hidden' ? false : 'dots'}
      renderDot={
        mode === 'custom'
          ? ({ index, isSelected }) => (
              <span aria-hidden>{isSelected ? `0${index + 1}` : '·'}</span>
            )
          : undefined
      }
    />
  );

  return CarouselDotsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CarouselCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-carousel">
      <Example />
    </div>
  );
}
