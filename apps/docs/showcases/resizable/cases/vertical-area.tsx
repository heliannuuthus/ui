import '@heliannuuthus/ui/styles.css';
import { Resizable } from '@heliannuuthus/ui';
import { GripHorizontal } from 'lucide-react';

const ZhExample = (() => {
  const EditorWithTerminal = () => {
    return (
      <Resizable
        className="h-96"
        orientation="vertical"
        separator={<GripHorizontal aria-hidden />}
        items={[
          {
            key: 'editor',
            panel: <section>编辑器</section>,
            size: ['64', '38'],
          },
          {
            key: 'terminal',
            panel: <section>终端</section>,
            size: ['36', '20'],
          },
        ]}
      />
    );
  };

  return EditorWithTerminal;
})();

const EnExample = (() => {
  const EditorWithTerminal = () => {
    return (
      <Resizable
        className="h-96"
        orientation="vertical"
        separator={<GripHorizontal aria-hidden />}
        items={[
          {
            key: 'editor',
            panel: <section>Editor</section>,
            size: ['64', '38'],
          },
          {
            key: 'terminal',
            panel: <section>Terminal</section>,
            size: ['36', '20'],
          },
        ]}
      />
    );
  };

  return EditorWithTerminal;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-resizable">
      <Example />
    </div>
  );
}
