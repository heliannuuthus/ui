import { Button, Input } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Input
      defaultValue="docs"
      before="文档地址"
      after="填写文档路径后复制链接。"
      prefix="ui.dev/"
      suffix={<Button>复制</Button>}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Input
      defaultValue="docs"
      before="Documentation URL"
      after="Enter the document path, then copy the link."
      prefix="ui.dev/"
      suffix={<Button>Copy</Button>}
    />
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-input">
      <Example />
    </div>
  );
}
