import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Tooltip } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const TooltipBasicDemo = () => {
    return (
      <Tooltip content={copy('键盘快捷键')}>
        <Button variant="outline">{copy('保存')}</Button>
      </Tooltip>
    );
  };

  return TooltipBasicDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TooltipCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-tooltip">
      <Example />
    </div>
  );
}
