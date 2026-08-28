import '@heliannuuthus/ui/styles.css';
import { Button, Card, Typography } from '@heliannuuthus/ui';
import { Ellipsis } from 'lucide-react';
import { type CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import './semantic-dom.css';

type Locale = 'en' | 'zh';

const copy = {
  en: {
    action: 'More actions',
    confirmed: '3 reviewers confirmed',
    content: 'Carries the card’s primary information.',
    currentVersion: 'Current version',
    description: 'Supporting text below the title.',
    descriptionValue: 'Production · Today at 18:00',
    footer: 'Supplementary information and card-level actions.',
    header: 'Layout containing the title, description, and trailing action.',
    included: 'Includes navigation refinements and documentation updates.',
    inspect: 'Card semantic regions',
    plan: 'View plan',
    root: 'Root container for variant, background, border, and spacing.',
    title: 'Primary card title.',
    titleValue: 'Web Console release plan',
    trailingAction: 'Trailing action in the card header.',
  },
  zh: {
    action: '更多操作',
    confirmed: '3 位审核人已确认',
    content: '承载卡片主要信息的内容区域。',
    currentVersion: '当前版本',
    description: '标题下方的辅助说明区域。',
    descriptionValue: '生产环境 · 今天 18:00',
    footer: '卡片底部的补充信息与整卡操作。',
    header: '容纳标题、说明与右侧操作的头部布局区域。',
    included: '包含导航结构调整与组件文档更新。',
    inspect: 'Card 语义区域',
    plan: '查看计划',
    root: '负责变体、背景、边框、圆角与整体间距的根容器。',
    title: '卡片主标题区域。',
    titleValue: 'Web Console 发布计划',
    trailingAction: '头部右侧的辅助操作区域。',
  },
} as const;

const semanticRegions = [
  { api: 'className / style', description: 'root', slot: 'root' },
  {
    api: 'classNames.header / styles.header',
    description: 'header',
    slot: 'header',
  },
  {
    api: 'classNames.title / styles.title',
    description: 'title',
    slot: 'title',
  },
  {
    api: 'classNames.description / styles.description',
    description: 'description',
    slot: 'description',
  },
  {
    api: 'classNames.action / styles.action',
    description: 'trailingAction',
    slot: 'action',
  },
  {
    api: 'classNames.content / styles.content',
    description: 'content',
    slot: 'content',
  },
  {
    api: 'classNames.footer / styles.footer',
    description: 'footer',
    slot: 'footer',
  },
] as const;

type SemanticSlot = (typeof semanticRegions)[number]['slot'];

export default function CardSemanticDom({ locale }: { locale: Locale }) {
  const labels = copy[locale];
  const [activeSlot, setActiveSlot] = useState<SemanticSlot>('root');
  const [highlightStyle, setHighlightStyle] = useState<CSSProperties>();
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const card = stage?.querySelector<HTMLElement>('.card-semantic-card');
    if (!stage || !card) return;

    const updateHighlight = () => {
      const target =
        activeSlot === 'root'
          ? card
          : card.querySelector<HTMLElement>(`[data-slot="card-${activeSlot}"]`);
      if (!target) return;

      const stageRect = stage.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const cardStyle = getComputedStyle(card);
      const inset =
        activeSlot === 'root'
          ? { block: 4, inline: 4 }
          : activeSlot === 'content'
            ? { block: 8, inline: -12 }
            : { block: 4, inline: 6 };
      const borderRadius =
        activeSlot === 'header'
          ? `${cardStyle.borderTopLeftRadius} ${cardStyle.borderTopRightRadius} 0 0`
          : activeSlot === 'footer'
            ? `0 0 ${cardStyle.borderBottomRightRadius} ${cardStyle.borderBottomLeftRadius}`
            : activeSlot === 'root'
              ? cardStyle.borderRadius
              : '0.75rem';

      setHighlightStyle({
        borderRadius,
        height: targetRect.height + inset.block * 2,
        opacity: 1,
        transform: `translate3d(${targetRect.left - stageRect.left - inset.inline}px, ${targetRect.top - stageRect.top - inset.block}px, 0)`,
        width: targetRect.width + inset.inline * 2,
      });
    };

    updateHighlight();
    const resizeObserver = new ResizeObserver(updateHighlight);
    resizeObserver.observe(stage);
    resizeObserver.observe(card);
    return () => resizeObserver.disconnect();
  }, [activeSlot]);

  return (
    <div
      className="card-semantic-reference"
      onMouseLeave={(event) => {
        const focusedElement = event.currentTarget.ownerDocument.activeElement;
        if (!event.currentTarget.contains(focusedElement))
          setActiveSlot('root');
      }}
    >
      <div className="card-semantic-stage" ref={stageRef}>
        <Card
          className="card-semantic-card"
          footer={
            <>
              <Typography.Text
                className="card-semantic-meta"
                size="sm"
                tone="muted"
              >
                {labels.confirmed}
              </Typography.Text>
              <Button size="sm">{labels.plan}</Button>
            </>
          }
          header={{
            title: labels.titleValue,
            description: labels.descriptionValue,
            action: (
              <Button aria-label={labels.action} size="icon-sm" variant="ghost">
                <Ellipsis aria-hidden="true" />
              </Button>
            ),
          }}
        >
          <div className="card-semantic-content">
            <Typography.Text
              className="card-semantic-meta"
              size="sm"
              tone="muted"
            >
              {labels.currentVersion}
            </Typography.Text>
            <Typography.Text
              className="card-semantic-version"
              weight="semibold"
            >
              v2.8.0
            </Typography.Text>
            <Typography.Text as="p" size="sm" tone="muted">
              {labels.included}
            </Typography.Text>
          </div>
        </Card>
        <span
          aria-hidden="true"
          className="card-semantic-highlight"
          style={highlightStyle}
        />
      </div>

      <div aria-label={labels.inspect} className="card-semantic-regions">
        {semanticRegions.map((region) => (
          <Button
            aria-pressed={activeSlot === region.slot}
            block
            className="card-semantic-region"
            data-active={activeSlot === region.slot ? '' : undefined}
            key={region.slot}
            onClick={() => setActiveSlot(region.slot)}
            onFocus={() => setActiveSlot(region.slot)}
            onMouseEnter={() => setActiveSlot(region.slot)}
            variant="ghost"
          >
            <span className="card-semantic-region-heading">
              <Typography.Text size="sm" weight="semibold">
                {region.slot}
              </Typography.Text>
              <Typography.Code>{region.api}</Typography.Code>
            </span>
            <Typography.Text
              as="small"
              className="card-semantic-region-copy"
              size="sm"
              tone="muted"
            >
              {labels[region.description]}
            </Typography.Text>
          </Button>
        ))}
      </div>
    </div>
  );
}
