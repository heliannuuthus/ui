import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { Card } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Label } from '@heliannuuthus/ui';
import { MoreHorizontal } from 'lucide-react';

const cardSemanticRegions = [
  {
    api: 'className',
    description: '卡片根容器，负责变体、背景、边框、圆角和整体间距。',
    slot: 'root',
  },
  {
    api: 'classNames.header',
    description: '头部布局区域，容纳标题、说明与右侧操作。',
    slot: 'header',
  },
  {
    api: 'classNames.title',
    description: '卡片主标题区域。',
    slot: 'title',
  },
  {
    api: 'classNames.description',
    description: '标题下方的辅助说明区域。',
    slot: 'description',
  },
  {
    api: 'classNames.action',
    description: '头部右侧的辅助操作区域。',
    slot: 'action',
  },
  {
    api: 'classNames.content',
    description: '承载卡片主要信息的内容区域。',
    slot: 'content',
  },
  {
    api: 'classNames.footer',
    description: '卡片底部的补充信息与操作区域。',
    slot: 'footer',
  },
] as const;

type CardSemanticSlot = (typeof cardSemanticRegions)[number]['slot'];

export function CardBasicDemo() {
  return (
    <Card className="card-basic-demo" title="设计系统更新">
      <p>本周补充了组件示例与无障碍说明，方便团队快速查阅和复用。</p>
    </Card>
  );
}

export function CardAnatomyDemo() {
  return (
    <Card
      className="card-showcase"
      title={
        <span className="card-region-heading">
          <span>Header</span>
          工作区资料
        </span>
      }
      description="修改成员看到的工作区名称。"
      action={
        <Button aria-label="更多操作" size="icon-sm" variant="outline">
          <MoreHorizontal />
        </Button>
      }
      footer={
        <>
          <span className="card-footer-meta">
            <span className="card-region-label">Footer</span>
            <span>上次保存于 10:24</span>
          </span>
          <span className="card-footer-actions">
            <Button size="sm" variant="outline">
              取消
            </Button>
            <Button size="sm">保存修改</Button>
          </span>
        </>
      }
      classNames={{
        content: 'card-showcase-content',
        footer: 'card-showcase-footer',
      }}
    >
      <span className="card-region-label">Content</span>
      <div className="card-showcase-field">
        <Label htmlFor="card-workspace-name">工作区名称</Label>
        <Input id="card-workspace-name" defaultValue="Heliannuuthus UI" />
      </div>
    </Card>
  );
}

export function CardSemanticDomDemo() {
  const [activeSlot, setActiveSlot] = useState<CardSemanticSlot>('root');
  const [highlightStyle, setHighlightStyle] = useState<CSSProperties>();
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const card = stage?.querySelector<HTMLElement>('.card-semantic-card');

    if (!stage || !card) {
      return;
    }

    const updateHighlight = () => {
      const target =
        activeSlot === 'root'
          ? card
          : card.querySelector<HTMLElement>(`[data-slot="card-${activeSlot}"]`);

      if (!target) {
        return;
      }

      const stageRect = stage.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const cardStyle = getComputedStyle(card);
      const inset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      };
      let borderRadius = '11px';

      if (activeSlot === 'root') {
        inset.top = 4;
        inset.right = 4;
        inset.bottom = 4;
        inset.left = 4;
        borderRadius = [
          `calc(${cardStyle.borderTopLeftRadius} + 4px)`,
          `calc(${cardStyle.borderTopRightRadius} + 4px)`,
          `calc(${cardStyle.borderBottomRightRadius} + 4px)`,
          `calc(${cardStyle.borderBottomLeftRadius} + 4px)`,
        ].join(' ');
      } else if (activeSlot === 'header') {
        borderRadius = `${cardStyle.borderTopLeftRadius} ${cardStyle.borderTopRightRadius} 0 0`;
      } else if (activeSlot === 'footer') {
        borderRadius = `0 0 ${cardStyle.borderBottomRightRadius} ${cardStyle.borderBottomLeftRadius}`;
      } else if (activeSlot === 'content') {
        inset.top = 12;
        inset.right = -14;
        inset.bottom = 12;
        inset.left = -14;
        borderRadius = '16px';
      } else {
        inset.top = 6;
        inset.right = 8;
        inset.bottom = 6;
        inset.left = 8;
      }

      setHighlightStyle({
        borderRadius,
        height: targetRect.height + inset.top + inset.bottom,
        opacity: 1,
        transform: `translate3d(${
          targetRect.left - stageRect.left - inset.left
        }px, ${targetRect.top - stageRect.top - inset.top}px, 0)`,
        width: targetRect.width + inset.left + inset.right,
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
      data-active-slot={activeSlot}
      onMouseLeave={(event) => {
        const focusedElement = event.currentTarget.ownerDocument.activeElement;
        if (!event.currentTarget.contains(focusedElement)) {
          setActiveSlot('root');
        }
      }}
    >
      <div className="card-semantic-stage" ref={stageRef}>
        <Card
          action={
            <Button aria-label="更多操作" size="icon-sm" variant="ghost">
              <MoreHorizontal />
            </Button>
          }
          className="card-semantic-card"
          description="生产环境 · 今天 18:00"
          footer={
            <>
              <span>3 位审核人已确认</span>
              <Button size="sm">查看计划</Button>
            </>
          }
          title="Web Console 发布计划"
        >
          <div className="card-semantic-content">
            <span>当前版本</span>
            <strong>v2.8.0</strong>
            <p>包含导航结构调整与组件文档更新。</p>
          </div>
        </Card>
        <span
          aria-hidden="true"
          className="card-semantic-highlight"
          style={highlightStyle}
        />
      </div>

      <div aria-label="Card 语义区域" className="card-semantic-regions">
        {cardSemanticRegions.map((region) => (
          <button
            aria-pressed={activeSlot === region.slot}
            data-active={activeSlot === region.slot ? '' : undefined}
            key={region.slot}
            onClick={() => setActiveSlot(region.slot)}
            onFocus={() => setActiveSlot(region.slot)}
            onMouseEnter={() => setActiveSlot(region.slot)}
            type="button"
          >
            <span>
              <strong>{region.slot}</strong>
              <code>{region.api}</code>
            </span>
            <small>{region.description}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
