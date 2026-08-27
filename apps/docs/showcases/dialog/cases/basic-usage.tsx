import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Dialog } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Rocket } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DialogReleaseDemo = () => {
    return (
      <Dialog
        cancelText={copy('取消')}
        confirmText={copy('确认安排')}
        description={copy('选择发布时间，并为值班成员补充本次发布说明。')}
        title={copy('安排生产环境发布')}
        trigger={
          <Button>
            <Rocket />
            {copy('安排发布')}
          </Button>
        }
      >
        <div className="feedback-form-grid">
          <div>
            <label className="text-sm font-medium" htmlFor="release-version">
              {copy('版本')}
            </label>
            <Input id="release-version" defaultValue="v0.12.0" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="release-time">
              {copy('发布时间')}
            </label>
            <Input id="release-time" type="datetime-local" />
          </div>
        </div>
      </Dialog>
    );
  };

  return DialogReleaseDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function DialogCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-dialog">
      <Example />
    </div>
  );
}
