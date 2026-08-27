import '@heliannuuthus/ui/styles.css';
import { Typography } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Typography.Text>默认行内正文</Typography.Text>
      <Typography.Text as="p" size="xl" tone="muted">
        大号次要段落适合承载页面导语。
      </Typography.Text>
      <Typography.Text as="div" size="lg" weight="semibold">
        块级强调文字
      </Typography.Text>
      <Typography.Text as="small" size="sm" tone="muted" weight="medium">
        较小的辅助信息
      </Typography.Text>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Typography.Text>Default inline text</Typography.Text>
      <Typography.Text as="p" size="xl" tone="muted">
        Large muted paragraphs work well for page introductions.
      </Typography.Text>
      <Typography.Text as="div" size="lg" weight="semibold">
        Emphasized block text
      </Typography.Text>
      <Typography.Text as="small" size="sm" tone="muted" weight="medium">
        Small supporting text
      </Typography.Text>
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
    <div className="demo-preview demo-preview-typography">
      <Example />
    </div>
  );
}
