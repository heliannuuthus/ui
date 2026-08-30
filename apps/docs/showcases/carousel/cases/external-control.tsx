import '@heliannuuthus/ui/styles.css';
import { useRef } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Carousel, type CarouselRef } from '@heliannuuthus/ui';
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

  const CarouselRefDemo = () => {
    const carouselRef = useRef<CarouselRef>(null);

    return (
      <div className="grid w-full gap-4">
        <Carousel
          aria-label={copy('外部控制的轮播')}
          className="display-carousel"
          controls={false}
          items={releaseHighlights.map((highlight) => highlight.title)}
          pagination="dots"
          ref={carouselRef}
          renderItem={(title) => (
            <div className="rounded-3xl border p-8 text-center font-medium">
              {title}
            </div>
          )}
        />
        <div className="flex justify-center gap-2">
          <Button onClick={() => carouselRef.current?.scrollPrev()}>
            {copy('上一项')}
          </Button>
          <Button onClick={() => carouselRef.current?.scrollNext()}>
            {copy('下一项')}
          </Button>
        </div>
      </div>
    );
  };

  return CarouselRefDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CarouselCase07({
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
