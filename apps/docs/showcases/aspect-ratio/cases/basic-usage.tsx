import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { AspectRatio, Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const ratios = [
    { label: '16:9', value: 16 / 9 },
    { label: '4:3', value: 4 / 3 },
    { label: '1:1', value: 1 },
  ];

  const CoverEditor = () => {
    const [ratio, setRatio] = useState(ratios[0]);

    return (
      <div>
        <AspectRatio ratio={ratio.value}>
          <img src="/cover.jpg" alt="内容封面" />
        </AspectRatio>
        {ratios.map((option) => (
          <Button key={option.label} onClick={() => setRatio(option)}>
            {option.label}
          </Button>
        ))}
      </div>
    );
  };

  return CoverEditor;
})();

const EnExample = (() => {
  const ratios = [
    { label: '16:9', value: 16 / 9 },
    { label: '4:3', value: 4 / 3 },
    { label: '1:1', value: 1 },
  ];

  const CoverEditor = () => {
    const [ratio, setRatio] = useState(ratios[0]);

    return (
      <div>
        <AspectRatio ratio={ratio.value}>
          <img src="/cover.jpg" alt="Content cover" />
        </AspectRatio>
        {ratios.map((option) => (
          <Button key={option.label} onClick={() => setRatio(option)}>
            {option.label}
          </Button>
        ))}
      </div>
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
