import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { AspectRatio, Button } from '@heliannuuthus/ui';

const ratios = [
  { label: '16:9', value: 16 / 9 },
  { label: '4:3', value: 4 / 3 },
  { label: '1:1', value: 1 },
];

const ZhExample = (() => {
  const CoverEditor = () => {
    const [ratio, setRatio] = useState(ratios[0]);

    return (
      <section className="aspect-ratio-demo">
        <article className="aspect-ratio-demo-card">
          <AspectRatio ratio={ratio.value}>
            <img
              className="aspect-ratio-demo-image"
              src="/heliannuuthus.jpg"
              alt="冰块中盛开的向日葵"
            />
            <span className="aspect-ratio-demo-badge">{ratio.label}</span>
          </AspectRatio>
          <div className="aspect-ratio-demo-copy">
            <strong>为内容预留稳定的封面区域</strong>
            <span>卡片宽度变化时，图片仍保持所选比例。</span>
          </div>
        </article>

        <div aria-label="选择封面比例" className="aspect-ratio-demo-controls">
          {ratios.map((option) => (
            <Button
              aria-pressed={ratio.label === option.label}
              key={option.label}
              onClick={() => setRatio(option)}
              size="md"
              variant={ratio.label === option.label ? 'default' : 'outline'}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </section>
    );
  };

  return CoverEditor;
})();

const EnExample = (() => {
  const CoverEditor = () => {
    const [ratio, setRatio] = useState(ratios[0]);

    return (
      <section className="aspect-ratio-demo">
        <article className="aspect-ratio-demo-card">
          <AspectRatio ratio={ratio.value}>
            <img
              className="aspect-ratio-demo-image"
              src="/heliannuuthus.jpg"
              alt="A sunflower blooming inside an ice cube"
            />
            <span className="aspect-ratio-demo-badge">{ratio.label}</span>
          </AspectRatio>
          <div className="aspect-ratio-demo-copy">
            <strong>Reserve a stable cover area for content</strong>
            <span>The image keeps its chosen ratio as the card resizes.</span>
          </div>
        </article>

        <div
          aria-label="Choose cover ratio"
          className="aspect-ratio-demo-controls"
        >
          {ratios.map((option) => (
            <Button
              aria-pressed={ratio.label === option.label}
              key={option.label}
              onClick={() => setRatio(option)}
              size="md"
              variant={ratio.label === option.label ? 'default' : 'outline'}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </section>
    );
  };

  return CoverEditor;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-aspect-ratio">
      <Example />
    </div>
  );
}
