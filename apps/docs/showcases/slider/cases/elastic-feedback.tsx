import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Slider } from '@heliannuuthus/ui';
import { Volume1, Volume2 } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const SliderElasticDemo = () => {
    const [volume, setVolume] = useState(64);

    return (
      <div className="data-slider-card data-elastic-slider-card">
        <div className="data-card-heading">
          <div>
            <strong>{copy('播放器音量')}</strong>
            <p>{copy('悬停、聚焦或触摸时轻微放大，越过边界后柔和回弹。')}</p>
          </div>
          <span className="data-elastic-slider-value">
            <strong>{volume}</strong>
            <small>%</small>
          </span>
        </div>
        <Slider
          aria-label={copy('播放器音量')}
          endIcon={<Volume2 />}
          endLabel={copy('最大')}
          max={100}
          min={0}
          onChange={setVolume}
          startIcon={<Volume1 />}
          startLabel={copy('静音')}
          step={2}
          value={volume}
        />
      </div>
    );
  };

  return SliderElasticDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SliderCase02({
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
