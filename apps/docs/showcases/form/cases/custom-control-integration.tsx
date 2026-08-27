import '@heliannuuthus/ui/styles.css';
import { forwardRef, useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Form, type FormFieldInjectedControlProps } from '@heliannuuthus/ui';
import { Radio } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type Priority = '' | 'routine' | 'important' | 'urgent';

  type PriorityControlProps = FormFieldInjectedControlProps<Priority>;

  const priorityOptions = [
    { label: copy('常规'), value: 'routine' },
    { label: copy('重要'), value: 'important' },
    { label: copy('紧急'), value: 'urgent' },
  ] as const;

  const MinimalPriorityControl = ({
    onChange,
    ...props
  }: PriorityControlProps) => (
    <Radio.Group
      {...props}
      columns={3}
      minColumnWidth={0}
      onChange={onChange}
      options={priorityOptions}
    />
  );

  const CompletePriorityControl = forwardRef<
    HTMLInputElement,
    PriorityControlProps
  >(({ onChange, ...props }, ref) => (
    <Radio.Group
      {...props}
      columns={3}
      inputRef={ref}
      minColumnWidth={0}
      onChange={onChange}
      options={priorityOptions}
    />
  ));

  type CustomControlValues = {
    completePriority: Priority;
    minimalPriority: Priority;
  };

  const FormCustomControlDemo = () => {
    const [submitted, setSubmitted] = useState<CustomControlValues | null>(
      null
    );
    const form = Form.useForm<CustomControlValues>({
      defaultValues: {
        completePriority: '',
        minimalPriority: 'routine',
      },
    });

    return (
      <div className="data-form-shell">
        <div className="data-card-heading">
          <div>
            <strong>{copy('自定义控件接入')}</strong>
            <p>
              {copy('先完成值绑定；需要错误聚焦时，再转发 ref 获取完整能力。')}
            </p>
          </div>
        </div>
        <Form className="data-form-stack" form={form} onSubmit={setSubmitted}>
          <Form.Field<CustomControlValues, 'minimalPriority'>
            name="minimalPriority"
            label={copy('最小可用')}
            description={copy(
              '普通函数组件即可完成 value 和 onChange 的值绑定。'
            )}
          >
            <MinimalPriorityControl />
          </Form.Field>
          <Form.Field<CustomControlValues, 'completePriority'>
            name="completePriority"
            label={copy('完整能力')}
            description={copy(
              '转发 ref 后支持校验失败自动聚焦，并保留完整字段属性。'
            )}
            rules={{ required: copy('请选择优先级。') }}
          >
            <CompletePriorityControl />
          </Form.Field>
          <div className="data-form-actions">
            {submitted && (
              <span>
                {copy('已保存优先级')}：{submitted.minimalPriority} /{' '}
                {submitted.completePriority}
              </span>
            )}
            <Button type="submit">{copy('保存优先级')}</Button>
          </div>
        </Form>
      </div>
    );
  };

  return FormCustomControlDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function FormCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-form">
      <Example />
    </div>
  );
}
