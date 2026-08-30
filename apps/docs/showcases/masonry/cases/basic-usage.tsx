import '@heliannuuthus/ui/styles.css';
import { Masonry } from '@heliannuuthus/ui';
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

  const MasonryBasicDemo = () => {
    return (
      <Masonry
        aria-label={copy('Masonry 基础布局示例')}
        className="masonry-layout-demo"
        columns={3}
        gap={[14, 20]}
        items={createPreviewItems(masonryItems.slice(0, 6))}
        minColumnWidth={180}
        role="list"
      />
    );
  };

  return MasonryBasicDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function MasonryCase01({
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
