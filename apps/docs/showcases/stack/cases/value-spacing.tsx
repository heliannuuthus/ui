import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Slider, Stack } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const StackGapExample = () => {
    const [gap, setGap] = useState(6);

    return (
      <>
        <Slider min={0} max={12} step={3} value={gap} onChange={setGap} />
        <Stack block gap={gap} orientation="horizontal" wrap>
          {Array.from({ length: 24 }, (_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </Stack>
      </>
    );
  };

  return StackGapExample;
})();

const EnExample = (() => {
  const StackGapExample = () => {
    const [gap, setGap] = useState(6);

    return (
      <>
        <Slider min={0} max={12} step={3} value={gap} onChange={setGap} />
        <Stack block gap={gap} orientation="horizontal" wrap>
          {Array.from({ length: 24 }, (_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </Stack>
      </>
    );
  };

  return StackGapExample;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-stack">
      <Example />
    </div>
  );
}
