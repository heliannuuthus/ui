import '@heliannuuthus/ui/styles.css';
import { ScrollArea, Typography } from '@heliannuuthus/ui';

export default function ScrollAreaBasicCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const entries =
    locale === 'en'
      ? [
          ['Component contract', 'Public behavior and defaults'],
          ['Keyboard access', 'Native focus and scrolling'],
          ['Long content', 'Constrained without truncation'],
          ['Touch input', 'Momentum scrolling remains native'],
          ['Narrow layouts', 'Content adapts to its container'],
          ['Theme tokens', 'Colors follow the active theme'],
          ['Composition', 'Children keep their own semantics'],
        ]
      : [
          ['组件契约', '公共行为与默认值'],
          ['键盘访问', '保留原生焦点与滚动'],
          ['长内容', '限制高度但不截断内容'],
          ['触控输入', '保留原生惯性滚动'],
          ['窄屏布局', '内容跟随容器适配'],
          ['主题令牌', '颜色跟随当前主题'],
          ['组合方式', '子内容保留自身语义'],
        ];

  return (
    <div className="demo-preview demo-preview-scroll-area">
      <ScrollArea
        aria-label={locale === 'en' ? 'Documentation topics' : '文档主题'}
        className="h-72 w-full max-w-xl"
        scrollbar={{ visibility: 'hidden' }}
      >
        <ol className="divide-y" role="list">
          {entries.map(([title, description], index) => (
            <li className="flex items-start gap-4 py-4" key={title}>
              <span className="pt-0.5 font-mono text-xs text-primary">
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
        </ol>
      </ScrollArea>
    </div>
  );
}
