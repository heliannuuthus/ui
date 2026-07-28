import { useState, type ReactNode } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Select } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { Stack, type StackAlign, type StackJustify } from '@heliannuuthus/ui';
import { Typography } from '@heliannuuthus/ui';
import { Search } from 'lucide-react';

const protocols = ['https://', 'http://'];
const storageUnits = ['GB', 'MB', 'KB'];
const scopes = ['全部组件', '数据录入', '数据展示'];
const gapBlocks = Array.from({ length: 24 }, (_, index) => index + 1);

const alignmentCases: Array<{
  align?: StackAlign;
  description: string;
  justify?: StackJustify;
  label: string;
  title: string;
}> = [
  {
    align: 'start',
    description: 'align 控制交叉轴，元素沿顶部对齐。',
    label: 'align="start"',
    title: '交叉轴起点',
  },
  {
    align: 'center',
    description: 'align 控制交叉轴，元素按中心线对齐。',
    label: 'align="center"',
    title: '交叉轴居中',
  },
  {
    align: 'end',
    description: 'align 控制交叉轴，元素沿底部对齐。',
    label: 'align="end"',
    title: '交叉轴终点',
  },
  {
    justify: 'start',
    description: 'justify 控制主轴，内容从左侧开始排列。',
    label: 'justify="start"',
    title: '主轴起点',
  },
  {
    justify: 'center',
    description: 'justify 控制主轴，整组内容在中间聚合。',
    label: 'justify="center"',
    title: '主轴居中',
  },
  {
    justify: 'between',
    description: 'justify 控制主轴，把剩余空间放到元素之间。',
    label: 'justify="between"',
    title: '两端分布',
  },
];

export function StackGapDemo() {
  const [gap, setGap] = useState(6);

  return (
    <div className="stack-gap-demo">
      <div className="stack-gap-heading">
        <div>
          <span>NUMBER PROP</span>
          <strong>
            <code>gap=&#123;{gap}&#125;</code>
          </strong>
          <p>gap 直接接收数值，同时设置水平与垂直间距。</p>
        </div>
        <output aria-live="polite">
          <strong>{gap}</strong>
          <span>px</span>
        </output>
      </div>
      <div className="stack-gap-slider">
        <Slider
          aria-label="Stack 间距"
          max={12}
          min={0}
          onValueChange={setGap}
          step={3}
          value={gap}
        />
        <div aria-hidden="true">
          {[0, 3, 6, 9, 12].map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
      <Stack
        align="center"
        block
        className="stack-gap-stage"
        gap={gap}
        justify="center"
        orientation="horizontal"
        wrap
      >
        {gapBlocks.map((item) => (
          <span aria-hidden="true" key={item}>
            {String(item).padStart(2, '0')}
          </span>
        ))}
      </Stack>
    </div>
  );
}

export function StackAlignmentDemo() {
  return (
    <div className="stack-alignment-grid">
      {alignmentCases.map((item) => (
        <article className="stack-alignment-case" key={item.label}>
          <div className="stack-alignment-copy">
            <code>{item.label}</code>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
          <Stack
            align={item.align ?? 'center'}
            block
            className="stack-alignment-stage"
            gap={6}
            justify={item.justify ?? 'start'}
            orientation="horizontal"
          >
            <span className="stack-alignment-item stack-alignment-item-short">
              A
            </span>
            <span className="stack-alignment-item stack-alignment-item-tall">
              B
            </span>
            <span className="stack-alignment-item">C</span>
          </Stack>
        </article>
      ))}
    </div>
  );
}

function CompactCase({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description: string;
  title: string;
}) {
  return (
    <Stack block gap={8}>
      <Stack block gap={2}>
        <Typography.Small className="font-bold">{title}</Typography.Small>
        <Typography.Muted>{description}</Typography.Muted>
      </Stack>
      {children}
    </Stack>
  );
}

function StringSelect({
  ariaLabel,
  className,
  defaultValue,
  items,
}: {
  ariaLabel: string;
  className: string;
  defaultValue: string;
  items: string[];
}) {
  return (
    <Select
      defaultValue={defaultValue}
      options={items.map((item) => ({ label: item, value: item }))}
      triggerClassName={className}
      triggerProps={{ 'aria-label': ariaLabel }}
    />
  );
}

export function StackCompactVariantsDemo() {
  const [quality, setQuality] = useState(68);

  function updateQuality(value: string) {
    const nextValue = Number(value);

    if (Number.isNaN(nextValue)) return;
    setQuality(Math.min(100, Math.max(0, nextValue)));
  }

  return (
    <Stack block className="max-w-xl" gap={16}>
      <CompactCase
        description="独立 Select 作为输入协议前缀。"
        title="前置选择控件"
      >
        <Stack.Compact aria-label="项目地址" block>
          <StringSelect
            ariaLabel="协议"
            className="w-28 shrink-0"
            defaultValue={protocols[0]}
            items={protocols}
          />
          <Input aria-label="项目域名" defaultValue="ui.heliannuuthus.com" />
        </Stack.Compact>
      </CompactCase>

      <CompactCase
        description="Select 作为数值输入的单位后缀。"
        title="后置选择控件"
      >
        <Stack.Compact aria-label="存储配额" block>
          <Input aria-label="存储配额数值" defaultValue="100" type="number" />
          <StringSelect
            ariaLabel="存储单位"
            className="w-28 shrink-0"
            defaultValue={storageUnits[0]}
            items={storageUnits}
          />
        </Stack.Compact>
      </CompactCase>

      <CompactCase
        description="Select、带内部前缀的 Input 与操作按钮共同拼接。"
        title="混合控件组合"
      >
        <Stack.Compact aria-label="组件搜索" block>
          <StringSelect
            ariaLabel="组件范围"
            className="w-32 shrink-0"
            defaultValue={scopes[0]}
            items={scopes}
          />
          <Input
            aria-label="组件名称"
            placeholder="搜索组件"
            prefix={<Search />}
          />
          <Button className="shrink-0" variant="outline">
            查询
          </Button>
        </Stack.Compact>
      </CompactCase>

      <CompactCase
        description="拖动 Slider 或修改数值，两个控件会保持同步。"
        title="Slider 数值联动"
      >
        <Stack block gap={8}>
          <Stack.Compact aria-label="压缩质量" block>
            <div className="flex min-h-9 flex-1 items-center border border-input px-4 focus-within:border-primary">
              <Slider
                aria-label="压缩质量滑块"
                max={100}
                min={0}
                onValueChange={setQuality}
                step={1}
                value={quality}
              />
            </div>
            <Input
              aria-label="压缩质量数值"
              className="w-24 shrink-0"
              inputMode="numeric"
              max={100}
              min={0}
              onChange={(event) => updateQuality(event.target.value)}
              suffix="%"
              type="number"
              value={quality}
            />
          </Stack.Compact>
          <Typography.Muted aria-live="polite">
            当前压缩质量：{quality}%
          </Typography.Muted>
        </Stack>
      </CompactCase>
    </Stack>
  );
}
