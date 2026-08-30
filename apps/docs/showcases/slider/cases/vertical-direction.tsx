import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Slider } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const mixerChannels = [copy('人声'), copy('环境'), copy('提示')] as const;

  const SliderVerticalDemo = () => {
    const [levels, setLevels] = useState([76, 52, 34]);

    const updateLevel = (index: number, value: number) => {
      setLevels((current) =>
        current.map((level, levelIndex) =>
          levelIndex === index ? value : level
        )
      );
    };

    return (
      <div className="data-slider-card data-vertical-slider-card">
        <div className="data-card-heading">
          <div>
            <strong>{copy('混音电平')}</strong>
            <p>{copy('垂直方向适合调音台、参数面板等纵向控制场景。')}</p>
          </div>
        </div>
        <div className="data-vertical-slider-mixer">
          {mixerChannels.map((channel, index) => (
            <div className="data-vertical-slider-channel" key={channel}>
              <output aria-live="polite">{levels[index]}%</output>
              <Slider
                aria-label={copy(`${channel}电平`)}
                className="data-vertical-slider"
                max={100}
                min={0}
                onChange={(value) => updateLevel(index, value)}
                orientation="vertical"
                step={2}
                value={levels[index]}
              />
              <span>{channel}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return SliderVerticalDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SliderCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-slider">
      <Example />
    </div>
  );
}
