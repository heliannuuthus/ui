import '@heliannuuthus/ui/styles.css';
import { Button, Form, Input } from '@heliannuuthus/ui';

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const form = Form.useForm<{ role: string; teamName: string }>({
    defaultValues: { role: '', teamName: '' },
  });
  const copy =
    locale === 'zh'
      ? { optional: '可选', role: '职位', submit: '保存', team: '团队名称' }
      : {
          optional: 'Optional',
          role: 'Role',
          submit: 'Save',
          team: 'Team name',
        };

  return (
    <div className="demo-preview demo-preview-form">
      <Form form={form} onSubmit={() => undefined}>
        <Form.Field label={copy.team} name="teamName" required>
          <Input />
        </Form.Field>
        <Form.Field description={copy.optional} label={copy.role} name="role">
          <Input />
        </Form.Field>
        <Button type="submit">{copy.submit}</Button>
      </Form>
    </div>
  );
}
