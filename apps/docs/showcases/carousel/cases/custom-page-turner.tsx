import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Carousel } from '@heliannuuthus/ui';
import {
  ArrowLeft,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
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

  const CarouselCustomPaginationDemo = () => {
    return (
      <Carousel
        aria-label={copy('带自定义翻页器的版本亮点')}
        className="display-carousel"
        controls={false}
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
        pagination={({
          canScrollNext,
          canScrollPrev,
          currentPage,
          pageCount,
          scrollNext,
          scrollPrev,
          scrollTo,
        }) => (
          <div
            aria-label={copy('轮播分页')}
            className="display-carousel-pagination"
            role="group"
          >
            <Button
              aria-label={copy('上一页')}
              className="display-carousel-pagination-button"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              size="icon-sm"
              variant="ghost"
            >
              <ArrowLeft aria-hidden />
            </Button>
            <div className="display-carousel-pagination-status">
              <span aria-live="polite" className="display-carousel-page-count">
                <strong>{String(currentPage).padStart(2, '0')}</strong>
                <span>/</span>
                <small>{String(Math.max(pageCount, 1)).padStart(2, '0')}</small>
              </span>
              <div
                aria-label={copy('选择轮播页面')}
                className="display-carousel-page-track"
                role="group"
              >
                {Array.from({ length: pageCount }, (_, index) => {
                  const selected = currentPage === index + 1;

                  return (
                    <Button
                      aria-current={selected ? 'page' : undefined}
                      aria-label={copy(`前往第 ${index + 1} 页`)}
                      data-selected={selected || undefined}
                      key={index}
                      onClick={() => scrollTo(index)}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <span />
                    </Button>
                  );
                })}
              </div>
            </div>
            <Button
              aria-label={copy('下一页')}
              className="display-carousel-pagination-button"
              disabled={!canScrollNext}
              onClick={scrollNext}
              size="icon-sm"
              variant="ghost"
            >
              <ArrowRight aria-hidden />
            </Button>
          </div>
        )}
      />
    );
  };

  return CarouselCustomPaginationDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CarouselCase05({
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
