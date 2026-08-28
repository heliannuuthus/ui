import '@heliannuuthus/ui/styles.css';
import { ScrollArea, Typography } from '@heliannuuthus/ui';

export default function ScrollAreaHorizontalCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const items =
    locale === 'en'
      ? [
          ['Foundation', 'Stable primitives'],
          ['Layout', 'Responsive composition'],
          ['Navigation', 'Clear orientation'],
          ['Feedback', 'Visible system state'],
          ['Data', 'Readable structure'],
        ]
      : [
          ['基础', '稳定的公共原语'],
          ['布局', '响应式组合方式'],
          ['导航', '清晰的位置指引'],
          ['反馈', '可见的系统状态'],
          ['数据', '易读的信息结构'],
        ];

  return (
    <div className="demo-preview demo-preview-scroll-area">
      <ScrollArea
        aria-label={locale === 'en' ? 'Component groups' : '组件分组'}
        className="h-44 w-full max-w-xl"
        orientation="horizontal"
        scrollbar={{ visibility: 'hidden' }}
      >
        <ul className="flex w-max gap-3 py-1" role="list">
          {items.map(([title, description], index) => (
            <li
              className="grid w-44 shrink-0 gap-5 rounded-2xl border bg-background p-4"
              key={title}
            >
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="grid gap-1">
                <Typography.Text weight="medium">{title}</Typography.Text>
                <Typography.Text size="sm" tone="muted">
                  {description}
                </Typography.Text>
              </span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
