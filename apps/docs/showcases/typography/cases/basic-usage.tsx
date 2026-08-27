import '@heliannuuthus/ui/styles.css';
import { Typography } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const TypographyStory = () => {
    return (
      <article className="grid gap-4">
        <Typography.Title level={2}>让界面语言保持清晰</Typography.Title>
        <Typography.Text as="p" size="xl" tone="muted">
          稳定的排版让用户先理解内容，再自然地注意到设计。
        </Typography.Text>
        <Typography.Text as="p">
          一致的标题层级和正文节奏，让内容清晰、可信且易于阅读。
        </Typography.Text>
        <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
          一致的界面，来自每一次一致的内容决策。
        </Typography.Blockquote>
        <Typography.Text as="p">
          使用 <Typography.Code>@heliannuuthus/ui</Typography.Code> 组合内容。
        </Typography.Text>
        <Typography.Text as="small" size="sm" tone="muted">
          设计系统札记 · 5 分钟阅读
        </Typography.Text>
      </article>
    );
  };

  return TypographyStory;
})();

const EnExample = (() => {
  const TypographyStory = () => {
    return (
      <article className="grid gap-4">
        <Typography.Title level={2}>
          Keep interface language clear
        </Typography.Title>
        <Typography.Text as="p" size="xl" tone="muted">
          Stable typography lets users understand content before noticing
          design.
        </Typography.Text>
        <Typography.Text as="p">
          Consistent heading hierarchy and body rhythm make content clear and
          readable.
        </Typography.Text>
        <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
          A consistent interface comes from consistent content decisions.
        </Typography.Blockquote>
        <Typography.Text as="p">
          Compose content with{' '}
          <Typography.Code>@heliannuuthus/ui</Typography.Code>.
        </Typography.Text>
        <Typography.Text as="small" size="sm" tone="muted">
          Design system notes · 5 min read
        </Typography.Text>
      </article>
    );
  };

  return TypographyStory;
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
