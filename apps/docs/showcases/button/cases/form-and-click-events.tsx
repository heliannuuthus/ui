import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { useState } from 'react';

const ZhExample = (() => {
  const FormActions = () => {
    const [message, setMessage] = useState('尚未执行操作');

    return (
      <form
        className="flex flex-wrap items-center justify-center gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage('表单已提交');
        }}
      >
        <Button type="submit">保存</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setMessage('草稿已预览')}
        >
          预览
        </Button>
        <output aria-live="polite">{message}</output>
      </form>
    );
  };

  return FormActions;
})();

const EnExample = (() => {
  const FormActions = () => {
    const [message, setMessage] = useState('No action yet');

    return (
      <form
        className="flex flex-wrap items-center justify-center gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage('Form submitted');
        }}
      >
        <Button type="submit">Save</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setMessage('Draft previewed')}
        >
          Preview
        </Button>
        <output aria-live="polite">{message}</output>
      </form>
    );
  };

  return FormActions;
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
