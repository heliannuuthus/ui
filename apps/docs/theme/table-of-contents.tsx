import { ScrollArea, Typography } from '@heliannuuthus/ui';
import { useEffect, useRef } from 'react';
import { InternalButtonLink } from './internal-link';

export type TocItem = { id: string; text: string; depth: number };

export const TableOfContents = ({
  activeId,
  items,
  locale,
  onNavigate,
}: {
  activeId: string;
  items: readonly TocItem[];
  locale: 'en' | 'zh';
  onNavigate?: () => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root || root.getClientRects().length === 0) return;
    const viewport = root.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );
    const active = root.querySelector<HTMLElement>('[aria-current="location"]');
    if (!viewport || !active) return;
    const viewportRect = viewport.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const label = root.querySelector<HTMLElement>('.docs-toc-content > p');
    const topInset = (label?.getBoundingClientRect().height ?? 0) + 12;
    if (activeRect.top < viewportRect.top + topInset) {
      viewport.scrollTop += activeRect.top - viewportRect.top - topInset;
    } else if (activeRect.bottom > viewportRect.bottom - 12) {
      viewport.scrollTop += activeRect.bottom - viewportRect.bottom + 12;
    }
  }, [activeId, items]);

  return (
    <ScrollArea
      className="docs-toc-scroll"
      ref={scrollRef}
      orientation="vertical"
      scrollbar={{ size: 'sm', visibility: 'auto' }}
    >
      <div className="docs-toc-content">
        <Typography.Text as="p" size="sm" weight="semibold">
          {locale === 'zh' ? '本页内容' : 'On this page'}
        </Typography.Text>
        <nav aria-label={locale === 'zh' ? '本页目录' : 'Table of contents'}>
          {items.map((item) => (
            <InternalButtonLink
              aria-current={activeId === item.id ? 'location' : undefined}
              block
              data-depth={item.depth}
              href={`#${item.id}`}
              key={item.id}
              onClick={onNavigate}
              size="xs"
              variant="link"
            >
              {item.text}
            </InternalButtonLink>
          ))}
        </nav>
      </div>
    </ScrollArea>
  );
};
