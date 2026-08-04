import { docsCopy } from './i18n/content';
import { useEffect, useRef, useState } from 'react';
import { Masonry } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';

const masonryItems = [
  {
    description: docsCopy(
      '按钮、输入与选择器共享一致的交互反馈，并覆盖禁用、错误与加载状态。'
    ),
    title: docsCopy('基础组件'),
  },
  {
    description: docsCopy('间距、对齐与响应式边界。'),
    title: docsCopy('布局规则'),
  },
  {
    description: docsCopy(
      '颜色、圆角和排版由语义令牌统一约束，主题切换时不需要逐个覆盖组件。'
    ),
    title: docsCopy('设计令牌'),
  },
  {
    description: docsCopy(
      '键盘路径、焦点反馈与读屏顺序都跟随 DOM 语义，不依赖卡片当前被分配到哪一列。'
    ),
    title: docsCopy('无障碍'),
  },
  {
    description: docsCopy(
      '使用接近业务页面的标题、说明和操作验证组合方式，并检查长文本与窄屏边界。'
    ),
    title: docsCopy('使用场景'),
  },
  {
    description: docsCopy(
      '记录新增能力、行为调整、迁移方式，以及升级前需要确认的兼容性事项。'
    ),
    title: docsCopy('版本说明'),
  },
  {
    description: docsCopy('主题颜色和暗色模式检查。'),
    title: docsCopy('主题适配'),
  },
  {
    description: docsCopy(
      '同时验证桌面、平板与手机视口，确保实际列数能够根据可用空间自然回落。'
    ),
    title: docsCopy('响应式'),
  },
] as const;

const MasonryPreviewCard = ({
  index,
  item,
}: {
  index: number;
  item: (typeof masonryItems)[number];
}) => {
  return (
    <>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <strong>{item.title}</strong>
      <p>{item.description}</p>
    </>
  );
};

const createPreviewItems = (
  items: readonly (typeof masonryItems)[number][] = masonryItems,
  startIndex = 0
) => {
  return items.map((item, index) => ({
    className: 'masonry-layout-item',
    content: <MasonryPreviewCard index={startIndex + index} item={item} />,
    key: item.title,
    role: 'listitem' as const,
  }));
};

export const MasonryBasicDemo = () => {
  return (
    <Masonry
      aria-label={docsCopy('Masonry 基础布局示例')}
      className="masonry-layout-demo"
      columns={3}
      gap={[14, 20]}
      items={createPreviewItems(masonryItems.slice(0, 6))}
      minColumnWidth={180}
      role="list"
    />
  );
};

export const MasonryResponsiveDemo = () => {
  const masonryRef = useRef<HTMLDivElement>(null);
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
          <span>{docsCopy('响应式上限')}</span>
          <strong>{docsCopy('让容器决定实际列数')}</strong>
          <p>{docsCopy('每列至少保留 140px；空间不足时会自动减少列数。')}</p>
        </div>
        <div className="masonry-column-slider">
          <Slider
            aria-label={docsCopy('Masonry 最大列数')}
            max={6}
            min={1}
            onChange={(value) =>
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
          <span>{docsCopy('当前')}</span>
          <strong>{resolvedColumns}</strong>
          <span>{docsCopy('列')}</span>
          <small>
            {docsCopy('上限')}
            {maxColumns}
          </small>
        </output>
      </div>

      <Masonry
        aria-label={docsCopy('响应式瀑布布局示例')}
        className="masonry-layout-demo"
        columns={maxColumns}
        gap={14}
        items={createPreviewItems()}
        minColumnWidth={140}
        ref={masonryRef}
        role="list"
      />
    </div>
  );
};

export const MasonrySpanDemo = () => {
  return (
    <Masonry
      aria-label={docsCopy('包含跨列内容的 Masonry 布局示例')}
      className="masonry-layout-demo masonry-span-demo"
      columns={3}
      gap={14}
      items={[
        ...createPreviewItems(masonryItems.slice(0, 3)),
        {
          className: 'masonry-layout-item masonry-layout-item-full',
          content: (
            <>
              <span>FULL</span>
              <strong>{docsCopy('发布检查')}</strong>
              <p>{docsCopy('等待前面所有列结束，再独占整行展示发布结论。')}</p>
            </>
          ),
          key: 'release-check',
          role: 'listitem',
          span: 'full',
        } as const,
        ...createPreviewItems(masonryItems.slice(3, 6), 3),
      ]}
      minColumnWidth={180}
      role="list"
    />
  );
};
