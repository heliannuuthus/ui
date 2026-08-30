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

  const CarouselHighlightsDemo = ({
    autoplay = false,
    controls = true,
    dotPosition = 'bottom',
    loop = false,
    pauseOnHover,
  }: {
    autoplay?: boolean | number;
    controls?: boolean;
    dotPosition?: 'top' | 'bottom';
    loop?: boolean;
    pauseOnHover?: boolean;
  }) => {
    return (
      <Carousel
        aria-label={copy('版本亮点')}
        autoplay={autoplay}
        className={`display-carousel${autoplay !== false ? ' display-carousel-autoplay' : ''}`}
        controls={controls}
        items={releaseHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <article className="display-highlight" key={highlight.title}>
              <div className="display-highlight-icon">
                <Icon />
              </div>
              <span>
                {highlight.kicker} · 0{index + 1}
              </span>
              <strong>{highlight.title}</strong>
              <p>{highlight.description}</p>
            </article>
          );
        })}
        loop={loop}
        nextButtonProps={{ className: 'display-carousel-next' }}
        pauseOnHover={pauseOnHover}
        paginationPosition={dotPosition === 'top' ? 'before' : 'after'}
        previousButtonProps={{ className: 'display-carousel-previous' }}
      />
    );
  };

  const CarouselAutoplayDemo = () => {
    return (
      <div className="display-carousel-autoplay-stage">
        <div className="display-carousel-autoplay-heading">
          <span>{copy('默认景深动效')}</span>
          <strong>{copy('自动播放，悬停即暂停')}</strong>
          <small>{copy('自动播放 · 首尾循环 · 3D 景深')}</small>
        </div>
        <CarouselHighlightsDemo autoplay={2.2} loop />
      </div>
    );
  };

  return CarouselAutoplayDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CarouselCase06({
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
