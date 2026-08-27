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

  const CarouselClassNamesDemo = () => (
    <Carousel
      aria-label={copy('自定义轨道与项目宽度')}
      className="display-carousel"
      classNames={{ content: 'gap-3', item: 'basis-2/3 pl-3' }}
      controls={false}
      items={releaseHighlights.map((highlight) => (
        <div className="rounded-3xl border p-6" key={highlight.title}>
          <strong>{highlight.title}</strong>
          <p className="mt-2 text-sm text-muted-foreground">
            {highlight.description}
          </p>
        </div>
      ))}
    />
  );

  return CarouselClassNamesDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CarouselCase04({
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
