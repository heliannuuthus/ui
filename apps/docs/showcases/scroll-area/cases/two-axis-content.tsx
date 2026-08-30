import '@heliannuuthus/ui/styles.css';
import { ScrollArea } from '@heliannuuthus/ui';

const rows = [
  ['Button', 'General', 'Stable', 'Keyboard', 'Ready'],
  ['Layout', 'Layout', 'Stable', 'Responsive', 'Ready'],
  ['Resizable', 'Layout', 'Stable', 'Pointer + keyboard', 'Ready'],
  ['Scroll Area', 'Layout', 'Stable', 'Wheel + touch', 'Ready'],
  ['Popover', 'Overlay', 'Stable', 'Focus managed', 'Ready'],
  ['Table', 'Data', 'Stable', 'Semantic', 'Ready'],
];

export default function ScrollAreaTwoAxisCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const headings =
    locale === 'en'
      ? ['Component', 'Group', 'Status', 'Input', 'Release']
      : ['组件', '分组', '状态', '输入方式', '发布'];

  return (
    <div className="demo-preview demo-preview-scroll-area">
      <ScrollArea
        aria-label={locale === 'en' ? 'Component matrix' : '组件矩阵'}
        className="h-64 w-full max-w-xl"
        orientation="both"
        scrollbar={{ visibility: 'hidden' }}
      >
        <table className="min-w-[46rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b">
              {headings.map((heading) => (
                <th className="px-4 py-3 font-medium" key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {rows.map((row) => (
              <tr className="border-b" key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    className={
                      index === 0
                        ? 'px-4 py-4 font-medium text-foreground'
                        : 'px-4 py-4'
                    }
                    key={cell}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
}
