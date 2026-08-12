import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { Tag, Table } from '@heliannuuthus/ui';

import { docsCopy } from './i18n/content';

const semanticRows = [
  { id: 'REL-1842', owner: docsCopy('林默'), status: docsCopy('已完成') },
  { id: 'REL-1841', owner: docsCopy('周一'), status: docsCopy('进行中') },
  { id: 'REL-1840', owner: docsCopy('许澄'), status: docsCopy('待审批') },
];

const semanticColumns: Table.Column<(typeof semanticRows)[number]>[] = [
  { accessor: 'id', header: docsCopy('发布单'), sortable: true },
  { accessor: 'owner', header: docsCopy('负责人') },
  {
    accessor: 'status',
    header: docsCopy('状态'),
    render: (value) => <Tag>{String(value)}</Tag>,
  },
];

const tableSemanticRegions = [
  {
    api: 'className / style',
    description: docsCopy('数据表根区域，组织工具栏、表格容器和分页。'),
    slot: 'root',
  },
  {
    api: 'classNames.toolbar / styles.toolbar',
    description: docsCopy('搜索等表格级操作所在的工具栏区域。'),
    slot: 'toolbar',
  },
  {
    api: 'classNames.container / styles.container',
    description: docsCopy('承载横向或纵向滚动、边框和圆角的容器。'),
    slot: 'container',
  },
  {
    api: 'classNames.table / styles.table',
    description: docsCopy('原生 table 节点，可设置布局、宽度与表格样式。'),
    slot: 'table',
  },
  {
    api: 'classNames.header / styles.header',
    description: docsCopy('由 columns 自动生成的表头区域。'),
    slot: 'header',
  },
  {
    api: 'classNames.body / styles.body',
    description: docsCopy('数据行、展开行或状态行所在的表体区域。'),
    slot: 'body',
  },
  {
    api: 'classNames.footer / styles.footer',
    description: docsCopy('接收当前可见行并展示汇总信息的表尾区域。'),
    slot: 'footer',
  },
  {
    api: 'classNames.pagination / styles.pagination',
    description: docsCopy('总数摘要与翻页控件所在的分页区域。'),
    slot: 'pagination',
  },
] as const;

type TableSemanticSlot = (typeof tableSemanticRegions)[number]['slot'];

export const TableSemanticDomDemo = () => {
  const [activeSlot, setActiveSlot] = useState<TableSemanticSlot>('root');
  const [highlightStyle, setHighlightStyle] = useState<CSSProperties>();
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const root = stage?.querySelector<HTMLElement>('.table-semantic-table');
    if (!stage || !root) return;

    const updateHighlight = () => {
      const target =
        activeSlot === 'root'
          ? root
          : root.querySelector<HTMLElement>(
              `[data-slot="table-${activeSlot}"]`
            );
      if (!target) return;

      const stageRect = stage.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const inset = activeSlot === 'root' ? 4 : 2;
      setHighlightStyle({
        borderRadius: activeSlot === 'root' ? 16 : 10,
        height: targetRect.height + inset * 2,
        opacity: 1,
        transform: `translate3d(${targetRect.left - stageRect.left - inset}px, ${targetRect.top - stageRect.top - inset}px, 0)`,
        width: targetRect.width + inset * 2,
      });
    };

    updateHighlight();
    const resizeObserver = new ResizeObserver(updateHighlight);
    resizeObserver.observe(stage);
    resizeObserver.observe(root);
    return () => resizeObserver.disconnect();
  }, [activeSlot]);

  return (
    <div className="table-semantic-reference">
      <div className="table-semantic-stage" ref={stageRef}>
        <Table
          className="table-semantic-table"
          columns={semanticColumns}
          data={semanticRows}
          footer={(rows) => docsCopy(`当前页 ${rows.length} 条记录`)}
          pagination={{ pageSize: 2 }}
          rowKey="id"
          search={{
            columnKeys: ['id', 'owner'],
            placeholder: docsCopy('搜索发布单…'),
          }}
        />
        <span
          aria-hidden="true"
          className="table-semantic-highlight"
          style={highlightStyle}
        />
      </div>
      <div
        aria-label={docsCopy('Table 语义区域')}
        className="table-semantic-regions"
      >
        {tableSemanticRegions.map((region) => (
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
};
