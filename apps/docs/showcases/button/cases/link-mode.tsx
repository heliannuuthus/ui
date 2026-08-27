import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { ArrowRight } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <>
      <Button href="/components/card" variant="outline">
        查看 Card 文档
        <ArrowRight data-icon="inline-end" />
      </Button>
      <Button
        href="https://ui.heliannuuthus.com"
        target="_blank"
        rel="noreferrer"
        variant="outline"
      >
        新窗口打开
      </Button>
      <Button href="/styles.css" download="heliannuuthus-ui.css">
        下载样式文件
      </Button>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Button href="/components/card" variant="outline">
        View Card documentation
        <ArrowRight data-icon="inline-end" />
      </Button>
      <Button
        href="https://ui.heliannuuthus.com"
        target="_blank"
        rel="noreferrer"
        variant="outline"
      >
        Open in a new window
      </Button>
      <Button href="/styles.css" download="heliannuuthus-ui.css">
        Download stylesheet
      </Button>
    </>
  );
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
