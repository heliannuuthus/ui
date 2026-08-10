import { docsCopy } from './i18n/content';
import { forwardRef, useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { DatePicker } from '@heliannuuthus/ui';
import { Field } from '@heliannuuthus/ui';
import { Form, type FormFieldInjectedControlProps } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Label } from '@heliannuuthus/ui';
import { NativeSelect } from '@heliannuuthus/ui';
import { Radio } from '@heliannuuthus/ui';
import { Select } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { Switch } from '@heliannuuthus/ui';
import { Toggle } from '@heliannuuthus/ui';
import {
  Bold,
  Check,
  Copy,
  Globe2,
  Mail,
  Volume1,
  Volume2,
} from 'lucide-react';
import { useDocsLocale } from './i18n/routing';

const members = [
  docsCopy('林夏 · 设计'),
  docsCopy('周一 · 前端'),
  docsCopy('陈青 · 产品'),
  docsCopy('宋雨 · 运营'),
];
const mixerChannels = [
  docsCopy('人声'),
  docsCopy('环境'),
  docsCopy('提示'),
] as const;
type WorkspaceItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

const workspaceGroups: { label: string; items: WorkspaceItem[] }[] = [
  {
    label: docsCopy('我的工作区'),
    items: [
      { value: 'design', label: docsCopy('设计系统') },
      { value: 'website', label: docsCopy('品牌官网') },
    ],
  },
  {
    label: docsCopy('共享空间'),
    items: [
      { value: 'growth', label: docsCopy('增长实验') },
      { value: 'archive', label: docsCopy('已归档项目'), disabled: true },
    ],
  },
];

export const DatePickerInlineDemo = () => {
  const locale = useDocsLocale();
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 6, 20));

  return (
    <div className="data-calendar-demo">
      <DatePicker
        display="inline"
        locale={locale}
        value={date}
        onChange={setDate}
      />
      <aside className="data-calendar-summary">
        <span className="data-eyebrow">{docsCopy('发布日期')}</span>
        <strong>
          {date
            ? new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'zh-CN', {
                day: 'numeric',
                month: 'long',
              }).format(date)
            : docsCopy('尚未选择')}
        </strong>
        <p>{docsCopy('选择日期后，团队会在当天 10:00 收到发布提醒。')}</p>
        <div className="data-status-line">
          <span className="data-status-dot" />
          {docsCopy('中国标准时间')}
        </div>
      </aside>
    </div>
  );
};

export const CheckboxPermissionsDemo = () => {
  const [selected, setSelected] = useState(['read', 'comment']);
  const permissions = [
    ['read', docsCopy('查看项目'), docsCopy('浏览页面、文件与活动记录')],
    ['comment', docsCopy('参与评论'), docsCopy('回复讨论并提及团队成员')],
    ['manage', docsCopy('管理项目'), docsCopy('修改设置并邀请新成员')],
  ] as const;

  return (
    <div className="data-settings-card">
      <div className="data-card-heading">
        <div>
          <strong>{docsCopy('成员权限')}</strong>
          <p>{docsCopy('为外部协作者设置可执行的操作。')}</p>
        </div>
        <span>
          {selected.length}
          {docsCopy('项已开启')}
        </span>
      </div>
      <Checkbox.Group
        aria-label={docsCopy('成员权限')}
        className="data-option-stack"
        gap={0}
        name="permission"
        onChange={setSelected}
        options={permissions.map(([value, title, description]) => ({
          className: 'data-check-row',
          label: (
            <span className="data-check-copy">
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
          ),
          value,
        }))}
        orientation="vertical"
        value={selected}
      />
    </div>
  );
};

export const CheckboxTasksDemo = () => {
  const tasks = [
    ['tokens', docsCopy('确认设计令牌'), docsCopy('核对颜色、圆角与间距变量')],
    ['docs', docsCopy('更新组件文档'), docsCopy('补充示例与 API 说明')],
    ['release', docsCopy('发布新版本'), docsCopy('完成验证后创建版本记录')],
  ] as const;
  const [completed, setCompleted] = useState(['tokens']);

  return (
    <div className="data-settings-card">
      <div className="data-card-heading">
        <div>
          <strong>{docsCopy('发布清单')}</strong>
          <p>{docsCopy('勾选完成的事项，文字会自动进入完成态。')}</p>
        </div>
        <span>
          {completed.length}/{tasks.length}
          {docsCopy('已完成')}
        </span>
      </div>
      <Checkbox.Group
        aria-label={docsCopy('发布清单')}
        className="data-option-stack"
        gap={0}
        name="release-task"
        onChange={setCompleted}
        options={tasks.map(([value, title, description]) => ({
          className: 'data-check-row',
          label: (
            <span className="data-check-copy">
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
          ),
          value,
        }))}
        orientation="vertical"
        value={completed}
        variant="task"
      />
    </div>
  );
};

export const SelectMemberSearchDemo = () => {
  const [value, setValue] = useState<string | null>(members[0]);

  return (
    <div className="data-compact-form">
      <div className="data-field-copy">
        <Label htmlFor="member-select">{docsCopy('负责人')}</Label>
        <span>{docsCopy('输入姓名或团队进行搜索')}</span>
      </div>
      <Select
        emptyText={docsCopy('没有找到成员')}
        onChange={setValue}
        options={members.map((member) => ({ label: member, value: member }))}
        placeholder={docsCopy('搜索成员…')}
        showClear
        triggerProps={{ id: 'member-select' }}
        value={value}
      />
      <p className="data-result">
        {docsCopy('当前负责人：')}
        {value ?? docsCopy('未分配')}
      </p>
    </div>
  );
};

export const DatePickerReleaseDemo = () => {
  const locale = useDocsLocale();
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 6, 24));

  return (
    <div className="data-inline-setting">
      <div>
        <strong>{docsCopy('定时发布')}</strong>
        <p>{docsCopy('选择一个日期，未选择时保持为草稿。')}</p>
      </div>
      <DatePicker
        locale={locale}
        value={date}
        onChange={setDate}
        placeholder={docsCopy('选择发布日期')}
      />
      <Button variant="ghost" size="sm" onClick={() => setDate(undefined)}>
        {docsCopy('清除')}
      </Button>
    </div>
  );
};

export const FieldProfileDemo = () => {
  return (
    <div className="data-form-shell">
      <Field.Set>
        <Field.Legend>{docsCopy('公开资料')}</Field.Legend>
        <Field.Group>
          <Field>
            <Field.Label htmlFor="field-display-name">
              {docsCopy('显示名称')}
            </Field.Label>
            <Input id="field-display-name" defaultValue="Heliannuuthus" />
            <Field.Description>
              {docsCopy('会显示在评论、提交记录和成员列表中。')}
            </Field.Description>
          </Field>
          <Field data-invalid="true">
            <Field.Label htmlFor="field-handle">
              {docsCopy('个人标识')}
            </Field.Label>
            <Input id="field-handle" defaultValue="hello world" aria-invalid />
            <Field.Error>
              {docsCopy('只能使用小写字母、数字和连字符。')}
            </Field.Error>
          </Field>
          <Field orientation="horizontal">
            <Field.Content>
              <Field.Title>{docsCopy('公开邮箱')}</Field.Title>
              <Field.Description>
                {docsCopy('允许其他成员通过资料页联系你。')}
              </Field.Description>
            </Field.Content>
            <Switch aria-label={docsCopy('公开邮箱')} />
          </Field>
        </Field.Group>
      </Field.Set>
    </div>
  );
};

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

export const FormIntegrationDemo = () => {
  const locale = useDocsLocale();
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
          <strong>{docsCopy('完整表单集成')}</strong>
          <p>
            {docsCopy('所有数据录入组件共享同一份表单状态、校验和无障碍关系。')}
          </p>
        </div>
      </div>
      <Form className="data-form-stack" form={form} onSubmit={setSubmitted}>
        <div className="data-form-grid">
          <Form.Field
            name="name"
            label={docsCopy('工作区名称')}
            description={docsCopy('会显示在导航和成员列表中。')}
            rules={{ required: docsCopy('请输入工作区名称。') }}
          >
            <Input placeholder="Heliannuuthus UI" />
          </Form.Field>

          <Form.Field
            name="inviteCode"
            label={docsCopy('邀请码')}
            description={docsCopy('输入 6 位数字确认创建操作。')}
            rules={{
              pattern: {
                value: /^\d{6}$/,
                message: docsCopy('请输入 6 位数字邀请码。'),
              },
              required: docsCopy('请输入邀请码。'),
            }}
          >
            <Input.OTP maxLength={6} />
          </Form.Field>

          <Form.Field name="region" label={docsCopy('部署区域')}>
            <NativeSelect
              className="data-wide-control"
              options={[
                { label: docsCopy('中国大陆'), value: 'china' },
                { label: docsCopy('亚太地区'), value: 'asia' },
                { label: docsCopy('欧洲地区'), value: 'europe' },
              ]}
            />
          </Form.Field>

          <Form.Field
            name="workspace"
            label={docsCopy('关联空间')}
            description={docsCopy('支持搜索、清除和分组选项。')}
          >
            <Select
              classNames={{ trigger: 'data-wide-control' }}
              options={workspaceGroups.map((group) => ({
                label: group.label,
                options: group.items,
              }))}
              placeholder={docsCopy('选择工作区')}
              showClear
            />
          </Form.Field>

          <Form.Field
            className="data-form-span"
            name="summary"
            label={docsCopy('工作区说明')}
          >
            <Input.TextArea
              placeholder={docsCopy('介绍这个工作区的用途和协作方式…')}
            />
          </Form.Field>

          <Form.Field
            name="launchDate"
            label={docsCopy('启用日期')}
            description={docsCopy('选择或清除计划启用日期。')}
          >
            <DatePicker
              classNames={{ trigger: 'data-wide-control' }}
              locale={locale}
              placeholder={docsCopy('选择启用日期')}
            />
          </Form.Field>

          <Form.Field
            name="reviewThreshold"
            label={docsCopy('审核阈值')}
            description={docsCopy('设置发布前需要的审核人数。')}
          >
            <Slider min={1} max={5} step={1} />
          </Form.Field>

          <Form.Field
            name="retryLimit"
            label={docsCopy('重试次数')}
            description={docsCopy('设置临时失败后的最大重试次数。')}
          >
            <Input.Number
              decrementLabel={docsCopy('减少数值')}
              incrementLabel={docsCopy('增加数值')}
              inputProps={{
                'aria-roledescription': docsCopy('数字输入框'),
              }}
              max={10}
              min={0}
            />
          </Form.Field>

          <Form.Field
            className="data-form-span"
            name="visibility"
            label={docsCopy('可见范围')}
            description={docsCopy('单选组通过字段标签获得可访问名称。')}
          >
            <Radio.Group
              minColumnWidth={120}
              options={[
                { label: docsCopy('仅自己'), value: 'private' },
                { label: docsCopy('团队成员'), value: 'team' },
                { label: docsCopy('所有人'), value: 'public' },
              ]}
            />
          </Form.Field>

          <Form.Field
            className="data-form-span"
            name="permissions"
            label={docsCopy('权限范围')}
            description={docsCopy('多选组的值以字符串数组提交。')}
          >
            <Checkbox.Group
              columns={3}
              minColumnWidth={120}
              options={[
                { label: docsCopy('查看'), value: 'read' },
                { label: docsCopy('评论'), value: 'comment' },
                { label: docsCopy('管理'), value: 'manage' },
              ]}
            />
          </Form.Field>

          <Form.Field
            className="data-form-span"
            name="formats"
            label={docsCopy('内容格式')}
            description={docsCopy('切换组同样提交一个数组值。')}
          >
            <Toggle.Group
              multiple
              variant="outline"
              items={[
                { label: 'Markdown', value: 'markdown' },
                { label: docsCopy('富文本'), value: 'rich-text' },
                { label: docsCopy('纯文本'), value: 'plain-text' },
              ]}
            />
          </Form.Field>

          <Form.Field
            name="notifications"
            label={docsCopy('发送状态通知')}
            description={docsCopy('布尔值通过 checked 语义绑定。')}
            orientation="horizontal"
          >
            <Switch />
          </Form.Field>

          <Form.Field
            name="pinned"
            label={docsCopy('置顶工作区')}
            description={docsCopy('Toggle 保留 pressed 状态语义。')}
            orientation="horizontal"
          >
            <Toggle variant="outline">{docsCopy('置顶')}</Toggle>
          </Form.Field>

          <Form.Field
            className="data-form-span"
            name="confirmation"
            description={docsCopy('提交前必须明确确认。')}
            rules={{ required: docsCopy('请确认以上设置。') }}
          >
            <Checkbox>{docsCopy('我已确认以上设置')}</Checkbox>
          </Form.Field>
        </div>

        <div className="data-form-actions">
          {submitted && (
            <span>
              {docsCopy('已保存完整表单')}：{submitted.name}
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
            {docsCopy('重置')}
          </Button>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting
              ? docsCopy('正在保存…')
              : docsCopy('保存设置')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

type Priority = '' | 'routine' | 'important' | 'urgent';

type PriorityControlProps = FormFieldInjectedControlProps<Priority>;

const priorityOptions = [
  { label: docsCopy('常规'), value: 'routine' },
  { label: docsCopy('重要'), value: 'important' },
  { label: docsCopy('紧急'), value: 'urgent' },
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

export const FormCustomControlDemo = () => {
  const [submitted, setSubmitted] = useState<CustomControlValues | null>(null);
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
          <strong>{docsCopy('自定义控件接入')}</strong>
          <p>
            {docsCopy(
              '先完成值绑定；需要错误聚焦时，再转发 ref 获取完整能力。'
            )}
          </p>
        </div>
      </div>
      <Form className="data-form-stack" form={form} onSubmit={setSubmitted}>
        <Form.Field<CustomControlValues, 'minimalPriority'>
          name="minimalPriority"
          label={docsCopy('最小可用')}
          description={docsCopy(
            '普通函数组件即可完成 value 和 onChange 的值绑定。'
          )}
        >
          <MinimalPriorityControl />
        </Form.Field>
        <Form.Field<CustomControlValues, 'completePriority'>
          name="completePriority"
          label={docsCopy('完整能力')}
          description={docsCopy(
            '转发 ref 后支持校验失败自动聚焦，并保留完整字段属性。'
          )}
          rules={{ required: docsCopy('请选择优先级。') }}
        >
          <CompletePriorityControl />
        </Form.Field>
        <div className="data-form-actions">
          {submitted && (
            <span>
              {docsCopy('已保存优先级')}：{submitted.minimalPriority} /{' '}
              {submitted.completePriority}
            </span>
          )}
          <Button type="submit">{docsCopy('保存优先级')}</Button>
        </div>
      </Form>
    </div>
  );
};

export const InputStatesDemo = () => {
  return (
    <div className="data-input-grid">
      <div className="minimal-field">
        <Label htmlFor="input-normal">{docsCopy('项目名称')}</Label>
        <Input id="input-normal" defaultValue={docsCopy('设计系统迁移')} />
      </div>
      <div className="minimal-field">
        <Label htmlFor="input-invalid">{docsCopy('工作区地址')}</Label>
        <Input id="input-invalid" defaultValue="my workspace" aria-invalid />
        <small className="data-error-copy">
          {docsCopy('地址不能包含空格。')}
        </small>
      </div>
      <div className="minimal-field">
        <Label htmlFor="input-readonly">{docsCopy('项目编号')}</Label>
        <Input id="input-readonly" value="UI-2048" readOnly />
      </div>
      <div className="minimal-field">
        <Label htmlFor="input-disabled">{docsCopy('归档原因')}</Label>
        <Input id="input-disabled" value={docsCopy('项目进行中')} disabled />
      </div>
    </div>
  );
};

export const InputAffixDemo = () => {
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState(
    docsCopy('本次发布包含导航与数据录入组件。')
  );

  return (
    <div className="data-form-stack data-group-demo">
      <div className="minimal-field">
        <Label htmlFor="project-url">{docsCopy('项目地址')}</Label>
        <Input
          id="project-url"
          defaultValue="docs"
          prefix={
            <>
              <Globe2 />
              <span>ui.dev/</span>
            </>
          }
          suffix={
            <Button
              aria-label={docsCopy('复制地址')}
              size="xs"
              variant="ghost"
              onClick={() => setCopied(true)}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? docsCopy('已复制') : docsCopy('复制')}
            </Button>
          }
        />
      </div>
      <div className="minimal-field">
        <Label htmlFor="release-note">{docsCopy('发布说明')}</Label>
        <Input.TextArea
          id="release-note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <span className="data-field-hint">{note.length} / 120</span>
      </div>
    </div>
  );
};

export const InputNumberCapacityDemo = () => {
  const [capacity, setCapacity] = useState<number | null>(32);

  return (
    <div className="data-form-stack">
      <div className="minimal-field">
        <Label htmlFor="storage-capacity">{docsCopy('存储容量')}</Label>
        <Input.Number
          decrementLabel={docsCopy('减少数值')}
          id="storage-capacity"
          incrementLabel={docsCopy('增加数值')}
          inputProps={{
            'aria-roledescription': docsCopy('数字输入框'),
          }}
          max={256}
          min={1}
          onChange={setCapacity}
          step={1}
          suffix="GB"
          value={capacity}
        />
        <small className="data-field-hint">
          {docsCopy('使用方向键或增减按钮逐级调整。')}
        </small>
      </div>
      <p className="data-result" aria-live="polite">
        {docsCopy('当前容量：')}
        {capacity == null ? docsCopy('未设置') : `${capacity} GB`}
      </p>
    </div>
  );
};

export const InputNumberCurrencyDemo = () => {
  const locale = useDocsLocale();
  const [price, setPrice] = useState<number | null>(1280);

  return (
    <div className="data-form-stack">
      <div className="minimal-field">
        <Label htmlFor="service-price">{docsCopy('服务价格')}</Label>
        <Input.Number
          decrementLabel={docsCopy('减少数值')}
          format={{
            currency: 'CNY',
            currencyDisplay: 'symbol',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: 'currency',
          }}
          id="service-price"
          incrementLabel={docsCopy('增加数值')}
          inputProps={{
            'aria-roledescription': docsCopy('数字输入框'),
          }}
          locale={locale === 'en' ? 'en-US' : 'zh-CN'}
          min={0}
          onChange={setPrice}
          smallStep={0.01}
          step={10}
          value={price}
        />
      </div>
      <p className="data-result" aria-live="polite">
        {docsCopy('原始数值：')}
        {price ?? docsCopy('未设置')}
      </p>
    </div>
  );
};

export const InputOtpVerificationDemo = ({
  variant = 'connected',
}: {
  variant?: 'connected' | 'separated';
}) => {
  const [value, setValue] = useState('');

  return (
    <div className="data-otp-card">
      <div className="data-icon-badge">
        <Mail />
      </div>
      <strong>{docsCopy('验证你的邮箱')}</strong>
      <p>{docsCopy('验证码已发送至 he***@example.com')}</p>
      <div className="data-otp-variants">
        <div className="data-otp-variant-row">
          <span>
            <strong>
              {variant === 'connected'
                ? docsCopy('连接方块')
                : docsCopy('独立方块')}
            </strong>
            <small>
              {variant === 'connected'
                ? docsCopy('适合分段验证码或序列号')
                : docsCopy('适合强调每一位输入状态')}
            </small>
          </span>
          <Input.OTP
            maxLength={6}
            value={value}
            onChange={setValue}
            variant={variant}
            aria-label={
              variant === 'connected'
                ? docsCopy('连接方块验证码')
                : docsCopy('独立方块验证码')
            }
          />
        </div>
      </div>
      <span>
        {value.length === 6
          ? docsCopy('验证码已填写完整')
          : docsCopy(`还需输入 ${6 - value.length} 位`)}
      </span>
    </div>
  );
};

export const FieldLabelPairingDemo = () => {
  return (
    <div className="data-input-grid">
      <div className="minimal-field">
        <Label htmlFor="label-required">
          {docsCopy('团队名称')}
          <span className="data-required">*</span>
        </Label>
        <Input
          id="label-required"
          placeholder={docsCopy('输入团队名称')}
          required
        />
      </div>
      <div className="minimal-field">
        <div className="data-label-row">
          <Label htmlFor="label-optional">{docsCopy('职位')}</Label>
          <span>{docsCopy('可选')}</span>
        </div>
        <Input id="label-optional" placeholder={docsCopy('例如：产品设计师')} />
      </div>
    </div>
  );
};

export const RadioDeliveryDemo = () => {
  const [delivery, setDelivery] = useState('email');

  return (
    <Radio.Group
      aria-label={docsCopy('选择通知方式')}
      minColumnWidth={120}
      onChange={setDelivery}
      options={[
        { label: docsCopy('邮件通知'), value: 'email' },
        { label: docsCopy('站内通知'), value: 'inbox' },
        { label: docsCopy('不通知'), value: 'none' },
      ]}
      value={delivery}
    />
  );
};

export const RadioPlanDemo = ({
  orientation = 'vertical',
}: {
  orientation?: 'horizontal' | 'vertical';
}) => {
  const [plan, setPlan] = useState('team');
  const plans = [
    ['free', docsCopy('个人版'), docsCopy('1 位成员'), docsCopy('免费')],
    [
      'team',
      docsCopy('团队版'),
      docsCopy('最多 20 位成员'),
      docsCopy('¥ 68 / 月'),
    ],
    [
      'enterprise',
      docsCopy('企业版'),
      docsCopy('高级权限与审计'),
      docsCopy('联系销售'),
    ],
  ];

  return (
    <Radio.Group
      className="data-radio-cards"
      value={plan}
      onChange={setPlan}
      orientation={orientation}
      aria-label={docsCopy('选择方案')}
      options={plans.map(([value, title, description, price]) => ({
        className: 'data-radio-card',
        value,
        label: (
          <>
            <span className="data-radio-copy">
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
            <b>{price}</b>
          </>
        ),
      }))}
    />
  );
};

export const SelectWorkspaceDemo = () => {
  const [value, setValue] = useState<WorkspaceItem | null>(
    workspaceGroups[0]?.items[0] ?? null
  );

  return (
    <div className="data-compact-form">
      <div className="data-field-copy">
        <Label>{docsCopy('移动到工作区')}</Label>
        <span>{docsCopy('列表可以分组、分隔并禁用不可选项')}</span>
      </div>
      <Select
        classNames={{ trigger: 'data-wide-control' }}
        value={value}
        onChange={setValue}
        options={workspaceGroups.map((group) => ({
          label: group.label,
          options: group.items.map((item) => ({
            disabled: 'disabled' in item && item.disabled,
            label: item.label,
            value: item,
          })),
        }))}
        itemToStringLabel={(item) => item.label}
        itemToStringValue={(item) => item.value}
        isItemEqualToValue={(item, selected) => item.value === selected.value}
        placeholder={docsCopy('选择工作区')}
      />
      <p className="data-result">
        {docsCopy('目标：')}
        {value?.value === 'design'
          ? docsCopy('设计系统')
          : value?.value === 'website'
            ? docsCopy('品牌官网')
            : (value?.label ?? docsCopy('未选择'))}
      </p>
    </div>
  );
};

export const SliderBudgetDemo = () => {
  const [range, setRange] = useState([20, 72]);

  return (
    <div className="data-slider-card">
      <div className="data-card-heading">
        <div>
          <strong>{docsCopy('预算区间')}</strong>
          <p>{docsCopy('拖动两个滑块设置可接受的月度预算。')}</p>
        </div>
        <span>
          ¥ {range[0]}k – ¥ {range[1]}k
        </span>
      </div>
      <Slider
        value={range}
        onChange={(next) =>
          setRange(typeof next === 'number' ? [next] : [...next])
        }
        min={0}
        max={100}
        step={2}
      />
      <div className="data-scale">
        <span>¥ 0</span>
        <span>¥ 100k+</span>
      </div>
    </div>
  );
};

export const SliderElasticDemo = () => {
  const [volume, setVolume] = useState(64);

  return (
    <div className="data-slider-card data-elastic-slider-card">
      <div className="data-card-heading">
        <div>
          <strong>{docsCopy('播放器音量')}</strong>
          <p>{docsCopy('悬停、聚焦或触摸时轻微放大，越过边界后柔和回弹。')}</p>
        </div>
        <span className="data-elastic-slider-value">
          <strong>{volume}</strong>
          <small>%</small>
        </span>
      </div>
      <Slider
        aria-label={docsCopy('播放器音量')}
        endIcon={<Volume2 />}
        endLabel={docsCopy('最大')}
        max={100}
        min={0}
        onChange={setVolume}
        startIcon={<Volume1 />}
        startLabel={docsCopy('静音')}
        step={2}
        value={volume}
      />
    </div>
  );
};

export const SliderVerticalDemo = () => {
  const [levels, setLevels] = useState([76, 52, 34]);

  const updateLevel = (index: number, value: number) => {
    setLevels((current) =>
      current.map((level, levelIndex) => (levelIndex === index ? value : level))
    );
  };

  return (
    <div className="data-slider-card data-vertical-slider-card">
      <div className="data-card-heading">
        <div>
          <strong>{docsCopy('混音电平')}</strong>
          <p>{docsCopy('垂直方向适合调音台、参数面板等纵向控制场景。')}</p>
        </div>
      </div>
      <div className="data-vertical-slider-mixer">
        {mixerChannels.map((channel, index) => (
          <div className="data-vertical-slider-channel" key={channel}>
            <output aria-live="polite">{levels[index]}%</output>
            <Slider
              aria-label={docsCopy(`${channel}电平`)}
              className="data-vertical-slider"
              max={100}
              min={0}
              onChange={(value) => updateLevel(index, value)}
              orientation="vertical"
              step={2}
              value={levels[index]}
            />
            <span>{channel}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SwitchSettingsDemo = () => {
  const [settings, setSettings] = useState({ digest: true, product: false });

  return (
    <div className="data-settings-card">
      <div className="data-card-heading">
        <div>
          <strong>{docsCopy('通知偏好')}</strong>
          <p>{docsCopy('开关应立即生效，并明确说明影响范围。')}</p>
        </div>
      </div>
      <div className="data-option-stack">
        <label className="data-switch-row">
          <span className="data-switch-copy">
            <strong>{docsCopy('每周摘要')}</strong>
            <small>{docsCopy('周一发送项目进展与风险汇总')}</small>
          </span>
          <Switch
            checked={settings.digest}
            onChange={(digest) => setSettings({ ...settings, digest })}
          />
        </label>
        <label className="data-switch-row">
          <span className="data-switch-copy">
            <strong>{docsCopy('产品更新')}</strong>
            <small>{docsCopy('新功能上线时发送站内通知')}</small>
          </span>
          <Switch
            checked={settings.product}
            onChange={(product) => setSettings({ ...settings, product })}
          />
        </label>
        <label className="data-switch-row" data-disabled="true">
          <span className="data-switch-copy">
            <strong>{docsCopy('安全提醒')}</strong>
            <small>{docsCopy('关键安全事件始终开启')}</small>
          </span>
          <Switch checked disabled />
        </label>
      </div>
    </div>
  );
};

export const ToggleControlledDemo = () => {
  const [value, setValue] = useState(true);

  return (
    <div className="data-toggle-controlled-card">
      <div className="data-toggle-preview" data-pressed={value}>
        <span>{docsCopy('排版预览')}</span>
        <p>{docsCopy('清晰的层级让内容更容易阅读。')}</p>
      </div>
      <div className="data-toggle-control-row">
        <Toggle
          aria-label={docsCopy('切换粗体')}
          onChange={setValue}
          value={value}
          variant="outline"
        >
          <Bold />
          {docsCopy('粗体')}
        </Toggle>
        <output aria-live="polite">
          value: <strong>{String(value)}</strong>
        </output>
      </div>
    </div>
  );
};

export const TextAreaCounterDemo = () => {
  const [value, setValue] = useState(
    docsCopy('补充这次发布的背景、影响范围和回滚方式。')
  );
  const maxLength = 120;

  return (
    <div className="data-form-shell data-textarea-demo">
      <div className="data-label-row">
        <Label htmlFor="textarea-release">{docsCopy('发布说明')}</Label>
        <span>
          {value.length} / {maxLength}
        </span>
      </div>
      <Input.TextArea
        id="textarea-release"
        value={value}
        maxLength={maxLength}
        onChange={(event) => setValue(event.target.value)}
        placeholder={docsCopy('说明本次变更…')}
      />
      <div className="data-form-actions">
        <span>
          {docsCopy('支持换行，最多')}
          {maxLength}
          {docsCopy('个字符。')}
        </span>
        <Button size="sm" disabled={!value.trim()}>
          {docsCopy('保存说明')}
        </Button>
      </div>
    </div>
  );
};
