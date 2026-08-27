import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Slider } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const SliderBudgetDemo = () => {
    const [range, setRange] = useState([20, 72]);

    return (
      <div className="data-slider-card">
        <div className="data-card-heading">
          <div>
            <strong>{copy('预算区间')}</strong>
            <p>{copy('拖动两个滑块设置可接受的月度预算。')}</p>
          </div>
          <span>
            ¥ {range[0]}k – ¥ {range[1]}k
          </span>
        </div>
        <Slider
          value={range}
          onChange={(next) =>
            setRange(typeof next === 'number' ? [next] : [...next])
          }
          min={0}
          max={100}
          step={2}
        />
        <div className="data-scale">
          <span>¥ 0</span>
          <span>¥ 100k+</span>
        </div>
      </div>
    );
  };

  return SliderBudgetDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SliderCase03({
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
