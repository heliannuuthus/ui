import '@heliannuuthus/ui/styles.css';
import { ScrollArea } from '@heliannuuthus/ui';

export default function ScrollAreaBasicCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const itemLabel = locale === 'en' ? 'Scrollable content' : '可滚动内容';

  return (
    <div className="demo-preview demo-preview-scroll-area">
      <ScrollArea
        className="h-72 w-full max-w-xl rounded-3xl border bg-card"
        scrollbar={{ size: 'sm', visibility: 'auto' }}
      >
        <div className="divide-y px-5">
          {Array.from({ length: 12 }, (_, index) => (
            <p className="py-4 text-sm text-muted-foreground" key={index}>
              {itemLabel} {index + 1}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
