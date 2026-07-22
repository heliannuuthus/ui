import { useState, type ReactNode } from 'react';
import { Button } from '@heliannuuthus/ui/button';
import { Input } from '@heliannuuthus/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@heliannuuthus/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
} from '@heliannuuthus/ui/select';
import { Slider } from '@heliannuuthus/ui/slider';
import { Stack } from '@heliannuuthus/ui/stack';
import { TypographyMuted, TypographySmall } from '@heliannuuthus/ui/typography';
import { Search } from 'lucide-react';

const protocols = ['https://', 'http://'];
const storageUnits = ['GB', 'MB', 'KB'];
const scopes = ['全部组件', '数据录入', '数据展示'];

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
    <Stack block gap="sm">
      <Stack block gap={2}>
        <TypographySmall className="font-bold">{title}</TypographySmall>
        <TypographyMuted>{description}</TypographyMuted>
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
    <Select defaultValue={defaultValue} items={items}>
      <SelectTrigger aria-label={ariaLabel} className={className} />
      <SelectContent>
        <SelectList>
          {(item: string) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          )}
        </SelectList>
      </SelectContent>
    </Select>
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
    <Stack block className="max-w-xl" gap="lg">
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
        description="Select、带内部前缀的 InputGroup 与操作按钮共同拼接。"
        title="混合控件组合"
      >
        <Stack.Compact aria-label="组件搜索" block>
          <StringSelect
            ariaLabel="组件范围"
            className="w-32 shrink-0"
            defaultValue={scopes[0]}
            items={scopes}
          />
          <InputGroup>
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput aria-label="组件名称" placeholder="搜索组件" />
          </InputGroup>
          <Button className="shrink-0" variant="outline">
            查询
          </Button>
        </Stack.Compact>
      </CompactCase>

      <CompactCase
        description="拖动 Slider 或修改数值，两个控件会保持同步。"
        title="Slider 数值联动"
      >
        <Stack block gap="sm">
          <Stack.Compact aria-label="压缩质量" block>
            <InputGroup className="px-4 has-[[data-slot=slider-thumb]:focus-visible]:border-primary">
              <Slider
                aria-label="压缩质量滑块"
                max={100}
                min={0}
                onValueChange={setQuality}
                step={1}
                value={quality}
              />
            </InputGroup>
            <InputGroup className="w-24 shrink-0">
              <InputGroupInput
                aria-label="压缩质量数值"
                inputMode="numeric"
                max={100}
                min={0}
                onChange={(event) => updateQuality(event.target.value)}
                type="number"
                value={quality}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupText>%</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Stack.Compact>
          <TypographyMuted aria-live="polite">
            当前压缩质量：{quality}%
          </TypographyMuted>
        </Stack>
      </CompactCase>
    </Stack>
  );
}
