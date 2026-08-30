import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Progress } from '@heliannuuthus/ui';
import { CloudUpload } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const ProgressReleaseDemo = () => {
    const [value, setValue] = useState(68);
    const complete = value === 100;

    return (
      <div className="feedback-progress-card">
        <div className="feedback-progress-heading">
          <span>
            <CloudUpload />
          </span>
          <div>
            <strong>
              {complete ? copy('发布完成') : copy('正在部署 Web Console')}
            </strong>
            <small>
              {complete
                ? copy('所有流量已切换至新版本')
                : copy('步骤 3 / 4 · 切换流量')}
            </small>
          </div>
        </div>
        <Progress
          effect="sparkle"
          label={copy('生产环境')}
          showValue
          value={value}
        />
        <div className="feedback-progress-actions">
          <Button
            disabled={complete}
            onClick={() => setValue((current) => Math.min(current + 16, 100))}
            size="sm"
          >
            {copy('推进部署')}
          </Button>
          <Button onClick={() => setValue(12)} size="sm" variant="ghost">
            {copy('重新开始')}
          </Button>
        </div>
      </div>
    );
  };

  return ProgressReleaseDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ProgressCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-progress">
      <Example />
    </div>
  );
}
