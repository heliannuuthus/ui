'use client';

import { useState } from 'react';
import { Button } from '@heliannuuthus/ui/button';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@heliannuuthus/ui/combobox';
import { DatePicker } from '@heliannuuthus/ui/date-picker';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Label,
} from '@heliannuuthus/ui/form';
import { Input } from '@heliannuuthus/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@heliannuuthus/ui/input-group';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@heliannuuthus/ui/input-otp';
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from '@heliannuuthus/ui/native-select';
import { RadioGroup, RadioGroupItem } from '@heliannuuthus/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@heliannuuthus/ui/select';
import { Slider } from '@heliannuuthus/ui/slider';
import { Switch } from '@heliannuuthus/ui/switch';
import { Textarea } from '@heliannuuthus/ui/textarea';
import { Check, Copy, Globe2, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

const members = ['林夏 · 设计', '周一 · 前端', '陈青 · 产品', '宋雨 · 运营'];

export function DatePickerInlineDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 6, 20));

  return (
    <div className="data-calendar-demo">
      <DatePicker display="inline" value={date} onChange={setDate} />
      <aside className="data-calendar-summary">
        <span className="data-eyebrow">发布日期</span>
        <strong>
          {date ? `${date.getMonth() + 1} 月 ${date.getDate()} 日` : '尚未选择'}
        </strong>
        <p>选择日期后，团队会在当天 10:00 收到发布提醒。</p>
        <div className="data-status-line">
          <span className="data-status-dot" /> 中国标准时间
        </div>
      </aside>
    </div>
  );
}

export function CheckboxPermissionsDemo() {
  const [selected, setSelected] = useState(['read', 'comment']);
  const permissions = [
    ['read', '查看项目', '浏览页面、文件与活动记录'],
    ['comment', '参与评论', '回复讨论并提及团队成员'],
    ['manage', '管理项目', '修改设置并邀请新成员'],
  ] as const;

  return (
    <div className="data-settings-card">
      <div className="data-card-heading">
        <div>
          <strong>成员权限</strong>
          <p>为外部协作者设置可执行的操作。</p>
        </div>
        <span>{selected.length} 项已开启</span>
      </div>
      <div className="data-option-stack">
        {permissions.map(([value, title, description]) => (
          <label className="data-check-row" key={value}>
            <Checkbox
              checked={selected.includes(value)}
              onCheckedChange={(checked) =>
                setSelected((current) =>
                  checked
                    ? [...current, value]
                    : current.filter((item) => item !== value)
                )
              }
            />
            <span className="data-check-copy">
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function ComboboxMemberDemo() {
  const [value, setValue] = useState<string | null>(members[0]);

  return (
    <div className="data-compact-form">
      <div className="data-field-copy">
        <Label htmlFor="member-combobox">负责人</Label>
        <span>输入姓名或团队进行搜索</span>
      </div>
      <Combobox value={value} onValueChange={setValue} items={members}>
        <ComboboxInput id="member-combobox" placeholder="搜索成员…" showClear />
        <ComboboxContent>
          <ComboboxEmpty>没有找到成员</ComboboxEmpty>
          <ComboboxList>
            {members.map((member) => (
              <ComboboxItem key={member} value={member}>
                {member}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="data-result">当前负责人：{value ?? '未分配'}</p>
    </div>
  );
}

export function DatePickerReleaseDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 6, 24));

  return (
    <div className="data-inline-setting">
      <div>
        <strong>定时发布</strong>
        <p>选择一个日期，未选择时保持为草稿。</p>
      </div>
      <DatePicker value={date} onChange={setDate} placeholder="选择发布日期" />
      <Button variant="ghost" size="sm" onClick={() => setDate(undefined)}>
        清除
      </Button>
    </div>
  );
}

export function FieldProfileDemo() {
  return (
    <div className="data-form-shell">
      <FieldSet>
        <FieldLegend>公开资料</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-display-name">显示名称</FieldLabel>
            <Input id="field-display-name" defaultValue="Heliannuuthus" />
            <FieldDescription>
              会显示在评论、提交记录和成员列表中。
            </FieldDescription>
          </Field>
          <Field data-invalid="true">
            <FieldLabel htmlFor="field-handle">个人标识</FieldLabel>
            <Input id="field-handle" defaultValue="hello world" aria-invalid />
            <FieldError>只能使用小写字母、数字和连字符。</FieldError>
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>公开邮箱</FieldTitle>
              <FieldDescription>
                允许其他成员通过资料页联系你。
              </FieldDescription>
            </FieldContent>
            <Switch aria-label="公开邮箱" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

type InviteForm = { email: string; note: string };

export function FormInviteDemo() {
  const [submitted, setSubmitted] = useState('');
  const form = useForm<InviteForm>({ defaultValues: { email: '', note: '' } });

  return (
    <div className="data-form-shell">
      <div className="data-card-heading">
        <div>
          <strong>邀请团队成员</strong>
          <p>校验、错误提示与提交状态由同一份表单状态驱动。</p>
        </div>
      </div>
      <Form {...form}>
        <form
          className="data-form-stack"
          onSubmit={form.handleSubmit((values) => setSubmitted(values.email))}
        >
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: '请输入邮箱地址。',
              pattern: { value: /^\S+@\S+\.\S+$/, message: '邮箱格式不正确。' },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>邮箱地址</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  成员会收到一封加入工作区的邮件。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>附言（可选）</FormLabel>
                <FormControl>
                  <Textarea placeholder="补充邀请背景…" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="data-form-actions">
            {submitted && <span>邀请已发送至 {submitted}</span>}
            <Button type="submit">发送邀请</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export function InputStatesDemo() {
  return (
    <div className="data-input-grid">
      <div className="minimal-field">
        <Label htmlFor="input-normal">项目名称</Label>
        <Input id="input-normal" defaultValue="设计系统迁移" />
      </div>
      <div className="minimal-field">
        <Label htmlFor="input-invalid">工作区地址</Label>
        <Input id="input-invalid" defaultValue="my workspace" aria-invalid />
        <small className="data-error-copy">地址不能包含空格。</small>
      </div>
      <div className="minimal-field">
        <Label htmlFor="input-readonly">项目编号</Label>
        <Input id="input-readonly" value="UI-2048" readOnly />
      </div>
      <div className="minimal-field">
        <Label htmlFor="input-disabled">归档原因</Label>
        <Input id="input-disabled" value="项目进行中" disabled />
      </div>
    </div>
  );
}

export function InputGroupAddressDemo() {
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState('本次发布包含导航与数据录入组件。');

  return (
    <div className="data-form-stack data-group-demo">
      <div className="minimal-field">
        <Label htmlFor="project-url">项目地址</Label>
        <InputGroup>
          <InputGroupAddon>
            <Globe2 />
            <InputGroupText>ui.dev/</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="project-url" defaultValue="docs" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="复制地址"
              onClick={() => setCopied(true)}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? '已复制' : '复制'}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="minimal-field">
        <Label htmlFor="release-note">发布说明</Label>
        <InputGroup>
          <InputGroupTextarea
            id="release-note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>{note.length} / 120</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export function InputOtpVerificationDemo() {
  const [value, setValue] = useState('');

  return (
    <div className="data-otp-card">
      <div className="data-icon-badge">
        <Mail />
      </div>
      <strong>验证你的邮箱</strong>
      <p>验证码已发送至 he***@example.com</p>
      <div className="data-otp-variants">
        <div className="data-otp-variant-row">
          <span>
            <strong>连接方块</strong>
            <small>适合分段验证码或序列号</small>
          </span>
          <InputOTP
            maxLength={6}
            value={value}
            onChange={setValue}
            shape="connected"
          >
            <InputOTPGroup>
              {[0, 1, 2].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {[3, 4, 5].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="data-otp-variant-row">
          <span>
            <strong>独立圆圈</strong>
            <small>适合强调每一位输入状态</small>
          </span>
          <InputOTP
            maxLength={6}
            value={value}
            onChange={setValue}
            shape="circle"
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
      <span>
        {value.length === 6
          ? '验证码已填写完整'
          : `还需输入 ${6 - value.length} 位`}
      </span>
    </div>
  );
}

export function FieldLabelPairingDemo() {
  return (
    <div className="data-input-grid">
      <div className="minimal-field">
        <Label htmlFor="label-required">
          团队名称 <span className="data-required">*</span>
        </Label>
        <Input id="label-required" placeholder="输入团队名称" required />
      </div>
      <div className="minimal-field">
        <div className="data-label-row">
          <Label htmlFor="label-optional">职位</Label>
          <span>可选</span>
        </div>
        <Input id="label-optional" placeholder="例如：产品设计师" />
      </div>
    </div>
  );
}

export function SelectNativeDemo() {
  return (
    <div className="data-inline-controls">
      <div className="minimal-field">
        <Label htmlFor="native-region">数据区域</Label>
        <NativeSelect id="native-region" defaultValue="cn-east">
          <NativeSelectOptGroup label="中国大陆">
            <NativeSelectOption value="cn-east">华东</NativeSelectOption>
            <NativeSelectOption value="cn-north">华北</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="亚太地区">
            <NativeSelectOption value="sg">新加坡</NativeSelectOption>
            <NativeSelectOption value="jp">东京</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>
      <div className="minimal-field">
        <Label htmlFor="native-size">紧凑尺寸</Label>
        <NativeSelect id="native-size" size="sm" defaultValue="compact">
          <NativeSelectOption value="compact">紧凑</NativeSelectOption>
          <NativeSelectOption value="comfortable">舒适</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="minimal-field">
        <Label htmlFor="native-disabled">不可更改</Label>
        <NativeSelect id="native-disabled" disabled>
          <NativeSelectOption>由管理员设置</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}

export function RadioPlanDemo() {
  const [plan, setPlan] = useState('team');
  const plans = [
    ['free', '个人版', '1 位成员', '免费'],
    ['team', '团队版', '最多 20 位成员', '¥ 68 / 月'],
    ['enterprise', '企业版', '高级权限与审计', '联系销售'],
  ];

  return (
    <RadioGroup
      className="data-radio-cards"
      value={plan}
      onValueChange={setPlan}
      aria-label="选择方案"
    >
      {plans.map(([value, title, description, price]) => (
        <label
          className="data-radio-card"
          data-selected={plan === value}
          key={value}
        >
          <RadioGroupItem value={value} />
          <span>
            <strong>{title}</strong>
            <small>{description}</small>
          </span>
          <b>{price}</b>
        </label>
      ))}
    </RadioGroup>
  );
}

export function SelectWorkspaceDemo() {
  const [value, setValue] = useState('design');

  return (
    <div className="data-compact-form">
      <div className="data-field-copy">
        <Label>移动到工作区</Label>
        <span>列表可以分组、分隔并禁用不可选项</span>
      </div>
      <Select value={value} onValueChange={(next) => setValue(next ?? '')}>
        <SelectTrigger className="data-wide-control">
          <SelectValue placeholder="选择工作区">
            {value === 'design'
              ? '设计系统'
              : value === 'website'
                ? '品牌官网'
                : '增长实验'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>我的工作区</SelectLabel>
            <SelectItem value="design">设计系统</SelectItem>
            <SelectItem value="website">品牌官网</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>共享空间</SelectLabel>
            <SelectItem value="growth">增长实验</SelectItem>
            <SelectItem value="archive" disabled>
              已归档项目
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="data-result">
        目标：
        {value === 'design'
          ? '设计系统'
          : value === 'website'
            ? '品牌官网'
            : '增长实验'}
      </p>
    </div>
  );
}

export function SliderBudgetDemo() {
  const [range, setRange] = useState([20, 72]);

  return (
    <div className="data-slider-card">
      <div className="data-card-heading">
        <div>
          <strong>预算区间</strong>
          <p>拖动两个滑块设置可接受的月度预算。</p>
        </div>
        <span>
          ¥ {range[0]}k – ¥ {range[1]}k
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={(next) =>
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
}

export function SwitchSettingsDemo() {
  const [settings, setSettings] = useState({ digest: true, product: false });

  return (
    <div className="data-settings-card">
      <div className="data-card-heading">
        <div>
          <strong>通知偏好</strong>
          <p>开关应立即生效，并明确说明影响范围。</p>
        </div>
      </div>
      <div className="data-option-stack">
        <label className="data-switch-row">
          <span className="data-switch-copy">
            <strong>每周摘要</strong>
            <small>周一发送项目进展与风险汇总</small>
          </span>
          <Switch
            checked={settings.digest}
            onCheckedChange={(digest) => setSettings({ ...settings, digest })}
          />
        </label>
        <label className="data-switch-row">
          <span className="data-switch-copy">
            <strong>产品更新</strong>
            <small>新功能上线时发送站内通知</small>
          </span>
          <Switch
            checked={settings.product}
            onCheckedChange={(product) => setSettings({ ...settings, product })}
          />
        </label>
        <label className="data-switch-row" data-disabled="true">
          <span className="data-switch-copy">
            <strong>安全提醒</strong>
            <small>关键安全事件始终开启</small>
          </span>
          <Switch checked disabled />
        </label>
      </div>
    </div>
  );
}

export function TextareaCounterDemo() {
  const [value, setValue] = useState(
    '补充这次发布的背景、影响范围和回滚方式。'
  );
  const maxLength = 120;

  return (
    <div className="data-form-shell data-textarea-demo">
      <div className="data-label-row">
        <Label htmlFor="textarea-release">发布说明</Label>
        <span>
          {value.length} / {maxLength}
        </span>
      </div>
      <Textarea
        id="textarea-release"
        value={value}
        maxLength={maxLength}
        onChange={(event) => setValue(event.target.value)}
        placeholder="说明本次变更…"
      />
      <div className="data-form-actions">
        <span>支持换行，最多 {maxLength} 个字符。</span>
        <Button size="sm" disabled={!value.trim()}>
          保存说明
        </Button>
      </div>
    </div>
  );
}
