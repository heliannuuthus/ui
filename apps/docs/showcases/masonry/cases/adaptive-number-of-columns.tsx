import '@heliannuuthus/ui/styles.css';
import { useEffect, useRef, useState } from 'react';
import { Masonry } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const masonryItems = [
    {
      description: copy(
        '按钮、输入与选择器共享一致的交互反馈，并覆盖禁用、错误与加载状态。'
      ),
      title: copy('基础组件'),
    },
    {
      description: copy('间距、对齐与响应式边界。'),
      title: copy('布局规则'),
    },
    {
      description: copy(
        '颜色、圆角和排版由语义令牌统一约束，主题切换时不需要逐个覆盖组件。'
      ),
      title: copy('设计令牌'),
    },
    {
      description: copy(
        '键盘路径、焦点反馈与读屏顺序都跟随 DOM 语义，不依赖卡片当前被分配到哪一列。'
      ),
      title: copy('无障碍'),
    },
    {
      description: copy(
        '使用接近业务页面的标题、说明和操作验证组合方式，并检查长文本与窄屏边界。'
      ),
      title: copy('使用场景'),
    },
    {
      description: copy(
        '记录新增能力、行为调整、迁移方式，以及升级前需要确认的兼容性事项。'
      ),
      title: copy('版本说明'),
    },
    {
      description: copy('主题颜色和暗色模式检查。'),
      title: copy('主题适配'),
    },
    {
      description: copy(
        '同时验证桌面、平板与手机视口，确保实际列数能够根据可用空间自然回落。'
      ),
      title: copy('响应式'),
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

  const MasonryResponsiveDemo = () => {
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
            <span>{copy('响应式上限')}</span>
            <strong>{copy('让容器决定实际列数')}</strong>
            <p>{copy('每列至少保留 140px；空间不足时会自动减少列数。')}</p>
          </div>
          <div className="masonry-column-slider">
            <Slider
              aria-label={copy('Masonry 最大列数')}
              max={6}
              min={1}
              onChange={(value) =>
                setMaxColumns(
                  typeof value === 'number' ? value : (value[0] ?? 6)
                )
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
            <span>{copy('当前')}</span>
            <strong>{resolvedColumns}</strong>
            <span>{copy('列')}</span>
            <small>
              {copy('上限')}
              {maxColumns}
            </small>
          </output>
        </div>

        <Masonry
          aria-label={copy('响应式瀑布布局示例')}
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

  return MasonryResponsiveDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function MasonryCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-masonry">
      <Example />
    </div>
  );
}
