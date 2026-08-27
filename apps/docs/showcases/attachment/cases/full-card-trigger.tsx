import { Attachment } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Attachment
      title="release-notes.md"
      trigger={
        <a aria-label="预览 release-notes.md" href="/files/release-notes.md" />
      }
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Attachment
      title="release-notes.md"
      trigger={
        <a
          aria-label="Preview release-notes.md"
          href="/files/release-notes.md"
        />
      }
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
    <div className="demo-preview demo-preview-attachment">
      <Example />
    </div>
  );
}
