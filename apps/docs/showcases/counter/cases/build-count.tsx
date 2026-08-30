import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Counter } from '@heliannuuthus/ui';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const CounterBuildDemo = () => {
    const [count, setCount] = useState(1284);

    return (
      <div className="display-counter-card">
        <div>
          <span>{copy('本周构建')}</span>
          <small>{copy('CI 完成的有效构建次数')}</small>
        </div>
        <Counter
          fontSize={60}
          fontWeight={600}
          places={[1000, 100, 10, 1]}
          suffix={<small>{copy('次')}</small>}
          value={count}
          valueText={copy(`${count} 次构建`)}
        />
        <div className="display-counter-actions">
          <Button onClick={() => setCount((value) => Math.max(0, value - 18))}>
            <Minus />
            {copy('减少 18')}
          </Button>
          <Button onClick={() => setCount((value) => value + 24)}>
            <Plus />
            {copy('增加 24')}
          </Button>
          <Button onClick={() => setCount(1284)} variant="ghost">
            <RotateCcw />
            {copy('重置')}
          </Button>
        </div>
      </div>
    );
  };

  return CounterBuildDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CounterCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-counter">
      <Example />
    </div>
  );
}
