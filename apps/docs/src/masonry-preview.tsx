import { useEffect, useRef, useState } from 'react';
import { Masonry, MasonryItem } from '@heliannuuthus/ui/masonry';
import { Slider } from '@heliannuuthus/ui/slider';

const masonryItems = [
  {
    className: 'masonry-layout-item-tall',
    description: '按钮、输入与选择器的交互规范。',
    title: '基础组件',
  },
  {
    className: 'masonry-layout-item-short',
    description: '间距、对齐与响应式边界。',
    title: '布局规则',
  },
  {
    className: 'masonry-layout-item-medium',
    description: '颜色、圆角和排版的共享约束。',
    title: '设计令牌',
  },
  {
    className: 'masonry-layout-item-short',
    description: '键盘、焦点与读屏顺序。',
    title: '无障碍',
  },
  {
    className: 'masonry-layout-item-tall',
    description: '真实内容下的组合方式与边界。',
    title: '使用场景',
  },
  {
    className: 'masonry-layout-item-medium',
    description: '变更记录与升级注意事项。',
    title: '版本说明',
  },
  {
    className: 'masonry-layout-item-short',
    description: '主题颜色和暗色模式检查。',
    title: '主题适配',
  },
  {
    className: 'masonry-layout-item-tall',
    description: '桌面、平板与手机视口验证。',
    title: '响应式',
  },
] as const;

export function MasonryResponsiveDemo() {
  const masonryRef = useRef<HTMLElement>(null);
  const [maxColumns, setMaxColumns] = useState(6);
  const [resolvedColumns, setResolvedColumns] = useState(1);

  useEffect(() => {
    const masonry = masonryRef.current;
    if (!masonry) return;

    const syncResolvedColumns = () => {
      const nextColumns = Number(masonry.dataset.resolvedColumns);
      if (Number.isFinite(nextColumns) && nextColumns > 0) {
        setResolvedColumns(nextColumns);
      }
    };
    const resizeObserver = new ResizeObserver(syncResolvedColumns);
    const mutationObserver = new MutationObserver(syncResolvedColumns);

    resizeObserver.observe(masonry);
    mutationObserver.observe(masonry, {
      attributeFilter: ['data-resolved-columns'],
      attributes: true,
    });
    syncResolvedColumns();

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="masonry-responsive-demo">
      <div className="masonry-column-control">
        <div className="masonry-column-control-copy">
          <span>响应式上限</span>
          <strong>让容器决定实际列数</strong>
          <p>每列至少保留 140px；空间不足时会自动减少列数。</p>
        </div>
        <div className="masonry-column-slider">
          <Slider
            aria-label="Masonry 最大列数"
            max={6}
            min={1}
            onValueChange={(value) =>
              setMaxColumns(typeof value === 'number' ? value : (value[0] ?? 6))
            }
            step={1}
            value={maxColumns}
          />
          <div aria-hidden="true" className="masonry-column-scale">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index}>{index + 1}</span>
            ))}
          </div>
        </div>
        <output aria-live="polite" className="masonry-column-readout">
          <span>当前</span>
          <strong>{resolvedColumns}</strong>
          <span>列</span>
          <small>上限 {maxColumns}</small>
        </output>
      </div>

      <Masonry
        aria-label="响应式瀑布布局示例"
        className="masonry-layout-demo"
        columns={maxColumns}
        gap={14}
        minColumnWidth={140}
        ref={masonryRef}
        role="list"
      >
        {masonryItems.map((item, index) => (
          <MasonryItem
            className={`masonry-layout-item ${item.className}`}
            key={item.title}
            role="listitem"
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </MasonryItem>
        ))}
        <MasonryItem
          className="masonry-layout-item masonry-layout-item-full"
          role="listitem"
          span="full"
        >
          <span>FULL</span>
          <strong>发布检查</strong>
          <p>这一项始终从第一列跨到最后一列。</p>
        </MasonryItem>
      </Masonry>
    </div>
  );
}
