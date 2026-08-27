import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Download, Mail, Plus } from 'lucide-react';

const ZhExample = (() => {
  const ButtonWithIcon = () => {
    return (
      <>
        <Button>
          <Plus data-icon="inline-start" />
          新建项目
        </Button>
        <Button variant="outline">
          <Download data-icon="inline-start" />
          导出
        </Button>
        <Button size="icon" aria-label="发送邮件">
          <Mail />
        </Button>
      </>
    );
  };

  return ButtonWithIcon;
})();

const EnExample = (() => {
  const ButtonWithIcon = () => {
    return (
      <>
        <Button>
          <Plus data-icon="inline-start" />
          New project
        </Button>
        <Button variant="outline">
          <Download data-icon="inline-start" />
          Export
        </Button>
        <Button size="icon" aria-label="Send Mail">
          <Mail />
        </Button>
      </>
    );
  };

  return ButtonWithIcon;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-button">
      <Example />
    </div>
  );
}
