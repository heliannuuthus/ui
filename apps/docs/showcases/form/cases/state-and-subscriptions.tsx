import '@heliannuuthus/ui/styles.css';
import {
  Button,
  Form,
  Input,
  Stack,
  Switch,
  Typography,
  useForm,
  useFormInstance,
  useWatch,
} from '@heliannuuthus/ui';

type Values = { name: string; enabled: boolean };

const FormSummary = ({ locale }: { locale: 'en' | 'zh' }) => {
  const form = useFormInstance<Values>();
  const name = useWatch('name', form);
  const ready = useWatch(
    (values) => values.enabled && values.name.length > 0,
    form
  );
  const english = locale === 'en';

  return (
    <Stack gap={12}>
      <Typography.Text aria-live="polite" as="p" size="sm">
        {english ? 'Current name: ' : '当前名称：'}
        {name || (english ? 'Empty' : '空')}
        {' · '}
        {ready
          ? english
            ? 'Ready'
            : '已就绪'
          : english
            ? 'Incomplete'
            : '未完成'}
      </Typography.Text>
      <Stack gap={8} orientation="horizontal" wrap>
        <Button
          onClick={() =>
            form.setValue('name', 'Heliannuuthus UI', { shouldDirty: true })
          }
          size="sm"
          variant="outline"
        >
          {english ? 'Fill name' : '填写名称'}
        </Button>
        <Button size="sm" type="reset" variant="outline">
          {english ? 'Reset form' : '重置表单'}
        </Button>
      </Stack>
    </Stack>
  );
};

export default function FormStateCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const form = useForm<Values>({ defaultValues: { name: '', enabled: true } });
  const english = locale === 'en';

  return (
    <div className="demo-preview">
      <Form className="data-form-stack" form={form} onSubmit={() => undefined}>
        <Form.Field
          label={english ? 'Workspace name' : '工作区名称'}
          name="name"
        >
          <Input />
        </Form.Field>
        <Form.Field
          label={english ? 'Enable workspace' : '启用工作区'}
          name="enabled"
        >
          <Switch />
        </Form.Field>
        <FormSummary locale={locale} />
      </Form>
    </div>
  );
}
