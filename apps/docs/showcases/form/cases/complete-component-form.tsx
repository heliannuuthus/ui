import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { DatePicker } from '@heliannuuthus/ui';
import { Form } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Radio } from '@heliannuuthus/ui';
import { Select } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { Switch } from '@heliannuuthus/ui';
import { Toggle } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type WorkspaceItem = {
    value: string;
    label: string;
    disabled?: boolean;
  };

  const workspaceGroups: { label: string; items: WorkspaceItem[] }[] = [
    {
      label: copy('我的工作区'),
      items: [
        { value: 'design', label: copy('设计系统') },
        { value: 'website', label: copy('品牌官网') },
      ],
    },
    {
      label: copy('共享空间'),
      items: [
        { value: 'growth', label: copy('增长实验') },
        { value: 'archive', label: copy('已归档项目'), disabled: true },
      ],
    },
  ];

  type FormShowcaseValues = {
    confirmation: boolean;
    formats: string[];
    inviteCode: string;
    launchDate?: Date;
    name: string;
    notifications: boolean;
    permissions: string[];
    pinned: boolean;
    region: string;
    reviewThreshold: number;
    retryLimit: number | null;
    summary: string;
    visibility: string;
    workspace: string | null;
  };

  const FormIntegrationDemo = () => {
    const [submitted, setSubmitted] = useState<FormShowcaseValues | null>(null);
    const form = Form.useForm<FormShowcaseValues>({
      defaultValues: {
        confirmation: false,
        formats: ['markdown'],
        inviteCode: '',
        launchDate: new Date(2026, 7, 12),
        name: 'Heliannuuthus UI',
        notifications: true,
        permissions: ['read', 'comment'],
        pinned: false,
        region: 'asia',
        reviewThreshold: 2,
        retryLimit: 3,
        summary: '',
        visibility: 'team',
        workspace: 'design',
      },
    });

    return (
      <div className="data-form-shell data-form-showcase">
        <div className="data-card-heading">
          <div>
            <strong>{copy('完整表单集成')}</strong>
            <p>
              {copy('所有数据录入组件共享同一份表单状态、校验和无障碍关系。')}
            </p>
          </div>
        </div>
        <Form className="data-form-stack" form={form} onSubmit={setSubmitted}>
          <div className="data-form-grid">
            <Form.Field
              name="name"
              label={copy('工作区名称')}
              description={copy('会显示在导航和成员列表中。')}
              rules={{ required: copy('请输入工作区名称。') }}
            >
              <Input placeholder="Heliannuuthus UI" />
            </Form.Field>

            <Form.Field
              name="inviteCode"
              label={copy('邀请码')}
              description={copy('输入 6 位数字确认创建操作。')}
              rules={{
                pattern: {
                  value: /^\d{6}$/,
                  message: copy('请输入 6 位数字邀请码。'),
                },
                required: copy('请输入邀请码。'),
              }}
            >
              <Input.OTP maxLength={6} />
            </Form.Field>

            <Form.Field name="region" label={copy('部署区域')}>
              <Select
                classNames={{ trigger: 'data-wide-control' }}
                options={[
                  { label: copy('中国大陆'), value: 'china' },
                  { label: copy('亚太地区'), value: 'asia' },
                  { label: copy('欧洲地区'), value: 'europe' },
                ]}
              />
            </Form.Field>

            <Form.Field
              name="workspace"
              label={copy('关联空间')}
              description={copy('支持搜索、清除和分组选项。')}
            >
              <Select
                classNames={{ trigger: 'data-wide-control' }}
                options={workspaceGroups.map((group) => ({
                  label: group.label,
                  options: group.items,
                }))}
                placeholder={copy('选择工作区')}
                showClear
              />
            </Form.Field>

            <Form.Field
              className="data-form-span"
              name="summary"
              label={copy('工作区说明')}
            >
              <Input.TextArea
                placeholder={copy('介绍这个工作区的用途和协作方式…')}
              />
            </Form.Field>

            <Form.Field
              name="launchDate"
              label={copy('启用日期')}
              description={copy('选择或清除计划启用日期。')}
            >
              <DatePicker
                classNames={{ trigger: 'data-wide-control' }}
                locale={locale}
                placeholder={copy('选择启用日期')}
              />
            </Form.Field>

            <Form.Field
              name="reviewThreshold"
              label={copy('审核阈值')}
              description={copy('设置发布前需要的审核人数。')}
            >
              <Slider min={1} max={5} step={1} />
            </Form.Field>

            <Form.Field
              name="retryLimit"
              label={copy('重试次数')}
              description={copy('设置临时失败后的最大重试次数。')}
            >
              <Input.Number
                decrementLabel={copy('减少数值')}
                incrementLabel={copy('增加数值')}
                inputProps={{
                  'aria-roledescription': copy('数字输入框'),
                }}
                max={10}
                min={0}
              />
            </Form.Field>

            <Form.Field
              className="data-form-span"
              name="visibility"
              label={copy('可见范围')}
              description={copy('单选组通过字段标签获得可访问名称。')}
            >
              <Radio.Group
                minColumnWidth={120}
                options={[
                  { label: copy('仅自己'), value: 'private' },
                  { label: copy('团队成员'), value: 'team' },
                  { label: copy('所有人'), value: 'public' },
                ]}
              />
            </Form.Field>

            <Form.Field
              className="data-form-span"
              name="permissions"
              label={copy('权限范围')}
              description={copy('多选组的值以字符串数组提交。')}
            >
              <Checkbox.Group
                columns={3}
                minColumnWidth={120}
                options={[
                  { label: copy('查看'), value: 'read' },
                  { label: copy('评论'), value: 'comment' },
                  { label: copy('管理'), value: 'manage' },
                ]}
              />
            </Form.Field>

            <Form.Field
              className="data-form-span"
              name="formats"
              label={copy('内容格式')}
              description={copy('切换组同样提交一个数组值。')}
            >
              <Toggle.Group
                multiple
                variant="outline"
                items={[
                  { label: 'Markdown', value: 'markdown' },
                  { label: copy('富文本'), value: 'rich-text' },
                  { label: copy('纯文本'), value: 'plain-text' },
                ]}
              />
            </Form.Field>

            <Form.Field
              name="notifications"
              label={copy('发送状态通知')}
              description={copy('布尔值通过 checked 语义绑定。')}
              orientation="horizontal"
            >
              <Switch />
            </Form.Field>

            <Form.Field
              name="pinned"
              label={copy('置顶工作区')}
              description={copy('Toggle 保留 pressed 状态语义。')}
              orientation="horizontal"
            >
              <Toggle variant="outline">{copy('置顶')}</Toggle>
            </Form.Field>

            <Form.Field
              className="data-form-span"
              name="confirmation"
              description={copy('提交前必须明确确认。')}
              rules={{ required: copy('请确认以上设置。') }}
            >
              <Checkbox>{copy('我已确认以上设置')}</Checkbox>
            </Form.Field>
          </div>

          <div className="data-form-actions">
            {submitted && (
              <span>
                {copy('已保存完整表单')}：{submitted.name}
              </span>
            )}
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                form.reset();
                setSubmitted(null);
              }}
            >
              {copy('重置')}
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? copy('正在保存…')
                : copy('保存设置')}
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  return FormIntegrationDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function FormCase03({
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
