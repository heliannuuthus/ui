import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Tooltip } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const TooltipBehaviorDemo = () => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);

    return (
      <div
        ref={setContainer}
        className="flex min-h-40 flex-wrap items-center justify-center gap-3 rounded-2xl border bg-background p-6"
      >
        <Tooltip
          closeDelay={150}
          container={container}
          content={copy('受控提示')}
          onOpenChange={setOpen}
          open={open}
          openDelay={250}
        >
          <Button variant="outline">{copy('悬停或聚焦')}</Button>
        </Tooltip>
        <Button onClick={() => setOpen((value) => !value)} variant="ghost">
          {copy(open ? '关闭提示' : '打开提示')}
        </Button>
        <span className="text-sm text-muted-foreground" aria-live="polite">
          {copy(open ? '提示已打开' : '提示已关闭')}
        </span>
      </div>
    );
  };

  return TooltipBehaviorDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TooltipCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-tooltip">
      <Example />
    </div>
  );
}
