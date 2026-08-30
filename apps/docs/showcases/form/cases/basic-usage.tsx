import '@heliannuuthus/ui/styles.css';
import { Button, Form, Input } from '@heliannuuthus/ui';

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const form = Form.useForm<{ handle: string }>({
    defaultValues: { handle: '' },
  });
  const copy =
    locale === 'zh'
      ? {
          description: '用于生成公开资料地址。',
          label: '个人标识',
          pattern: '仅支持小写字母、数字和连字符。',
          submit: '保存',
        }
      : {
          description: 'Used to generate the public profile URL.',
          label: 'Handle',
          pattern: 'Use lowercase letters, numbers, and hyphens only.',
          submit: 'Save',
        };

  return (
    <div className="demo-preview demo-preview-form">
      <Form form={form} onSubmit={() => undefined}>
        <Form.Field
          description={copy.description}
          label={copy.label}
          name="handle"
          rules={{
            pattern: { message: copy.pattern, value: /^[a-z0-9-]+$/ },
          }}
        >
          <Input />
        </Form.Field>
        <Button type="submit">{copy.submit}</Button>
      </Form>
    </div>
  );
}
