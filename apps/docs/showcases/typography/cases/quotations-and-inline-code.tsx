import '@heliannuuthus/ui/styles.css';
import { Typography } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
        语义先于视觉，视觉服务于内容层级。
      </Typography.Blockquote>
      <Typography.Text as="p">
        安装命令为 <Typography.Code>pnpm add @heliannuuthus/ui</Typography.Code>
      </Typography.Text>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
        Semantics come before visuals, and visuals serve the content hierarchy.
      </Typography.Blockquote>
      <Typography.Text as="p">
        Install with{' '}
        <Typography.Code>pnpm add @heliannuuthus/ui</Typography.Code>
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
