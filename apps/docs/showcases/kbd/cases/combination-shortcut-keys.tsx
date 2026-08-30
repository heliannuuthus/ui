import '@heliannuuthus/ui/styles.css';
import { Kbd } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Kbd keys={['⌘', 'K']} />
      <Kbd keys={['Ctrl', 'Alt', 'Delete']} separator="·" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Kbd keys={['⌘', 'K']} />
      <Kbd keys={['Ctrl', 'Alt', 'Delete']} separator="·" />
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
    <div className="demo-preview demo-preview-kbd">
      <Example />
    </div>
  );
}
