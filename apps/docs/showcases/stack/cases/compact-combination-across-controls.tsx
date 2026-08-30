import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Input, Slider, Stack } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const SliderCompactExample = () => {
    const [quality, setQuality] = useState(68);

    return (
      <Stack block gap={8}>
        <Stack.Compact block aria-label="压缩质量">
          <div className="flex min-h-9 flex-1 items-center border px-4">
            <Slider
              aria-label="压缩质量滑块"
              value={quality}
              onChange={setQuality}
              min={0}
              max={100}
            />
          </div>
          <Input
            aria-label="压缩质量数值"
            className="w-24"
            suffix="%"
            type="number"
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
          />
        </Stack.Compact>
        <span aria-live="polite">当前压缩质量：{quality}%</span>
      </Stack>
    );
  };

  return SliderCompactExample;
})();

const EnExample = (() => {
  const SliderCompactExample = () => {
    const [quality, setQuality] = useState(68);

    return (
      <Stack block gap={8}>
        <Stack.Compact block aria-label="Compression quality">
          <div className="flex min-h-9 flex-1 items-center border px-4">
            <Slider
              aria-label="Compression quality slider"
              value={quality}
              onChange={setQuality}
              min={0}
              max={100}
            />
          </div>
          <Input
            aria-label="Compression quality value"
            className="w-24"
            suffix="%"
            type="number"
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
          />
        </Stack.Compact>
        <span aria-live="polite">Current compression quality: {quality}%</span>
      </Stack>
    );
  };

  return SliderCompactExample;
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
