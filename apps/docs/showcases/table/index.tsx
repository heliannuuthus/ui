import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/row-expansion';
import Case03 from './cases/group-header';
import Case04 from './cases/virtual-scrolling';
import Case05 from './cases/controlled-sorting-pagination-and-row-selection';
import Case06 from './cases/pagination-summary';
import Case07 from './cases/loading-and-external-state-composition';
import Case08 from './cases/server-data-mode';
import Case09 from './cases/custom-table';
import Case10 from './cases/fixed-columns-and-horizontal-scrolling';
import Case11 from './cases/combined-with-pagination';
import Case12 from './cases/primitive-row-expansion';
import Case13 from './cases/column-alignment-super-long-omission-and-custom-cell';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'The default composition includes search, sorting, fixed columns, actions, Footer, and Pagination; applications only provide data and Table.Column.',
      zh: '默认组合搜索、排序、固定列、操作列、Footer 和 Pagination；业务只需要提供 data 与 Table.Column。',
    },
  },
  {
    component: Case02,
    title: { en: 'Row expansion', zh: '行展开' },
    description: {
      en: 'expandable will automatically complete expandable columns, keyboard buttons, and cross-column detail rows; business columns fixed to the starting side will automatically avoid expandable buttons.',
      zh: 'expandable 会自动补齐展开列、键盘按钮和跨列详情行；固定在起始侧的业务列会自动避开展开按钮。',
    },
  },
  {
    component: Case03,
    title: { en: 'Group header', zh: '分组表头' },
    description: {
      en: 'Nest columns in Table.Column to create grouped headers; Table calculates spans, levels, and empty-state width.',
      zh: '在 Table.Column 中嵌套 columns 即可形成多级表头；Table 会计算跨列、层级和空状态宽度。',
    },
  },
  {
    component: Case04,
    title: { en: 'virtual scrolling', zh: '虚拟滚动' },
    description: {
      en: 'virtual scrolls and virtualizes only the table body. Header stays pinned to the top of the container, while fixed columns, horizontal scrolling, and custom render continue to work.',
      zh: 'virtual 只滚动并虚拟化表体；Header 固定在容器顶部，固定列、横向滚动和自定义 render 会继续生效。',
    },
  },
  {
    component: Case05,
    title: {
      en: 'Controlled sorting, pagination, and row selection',
      zh: '受控排序、分页与行选择',
    },
    description: {
      en: 'Applications can control sorting, pagination, and rowSelection; every interaction returns public state without exposing the underlying table instance.',
      zh: 'sorting、pagination 和 rowSelection 都可以由业务受控；每次交互都会返回公开状态，不暴露底层表格实例。',
    },
  },
  {
    component: Case06,
    title: { en: 'Pagination summary', zh: '分页摘要' },
    description: {
      en: 'Shows the total item count or renders a custom summary from the total and current range.',
      zh: '显示数据总数，或根据总数与当前范围自定义摘要。',
    },
  },
  {
    component: Case07,
    title: {
      en: 'Loading and external state composition',
      zh: '加载与外部状态组合',
    },
    description: {
      en: 'Table only provides boolean loading; compose Empty and Alert for custom empty results and request errors.',
      zh: 'Table 只内置布尔 loading；定制空结果和请求错误分别组合 Empty 与 Alert。',
    },
  },
  {
    component: Case08,
    title: { en: 'Server data mode', zh: '服务端数据模式' },
    description: {
      en: 'The manual modes for search, sorting, and pagination manage only public state and do not process server-returned data again on the client.',
      zh: 'search、sorting 与 pagination 的 manual 模式只管理公开状态，不在客户端二次处理服务端返回的数据。',
    },
  },
  {
    component: Case09,
    title: { en: 'Custom table', zh: '自定义表格' },
    description: {
      en: 'When data is already prepared or the structure needs full control, compose Header, Body, and Footer directly. Footer contains column summaries.',
      zh: '数据已经完成加工，或需要完全控制结构时，直接组合 Header、Body 和 Footer；Footer 承载列汇总。',
    },
  },
  {
    component: Case10,
    title: {
      en: 'Fixed columns and horizontal scrolling',
      zh: '固定列与横向滚动',
    },
    description: {
      en: 'CorrespondingHeadandCellSet simultaneously fixed="start"Fixed starting column, or set fixed="end"Fixed end column; give againTable.Primitive set upclassName="min-w-[960px]" If it is larger than the minimum width of the container, the middle column can be scrolled horizontally.',
      zh: '对应的Head与Cell同时设置 fixed="start"固定起始列，或设置 fixed="end"固定末尾列；再给Table.Primitive 设置className="min-w-[960px]" 等大于容器的最小宽度，中间列即可横向滚动。',
    },
  },
  {
    component: Case11,
    title: { en: 'Combined with Pagination', zh: '与 Pagination 组合' },
    description: {
      en: 'Table is only responsible for the semantic structure of the current page, and Pagination manages the page number; local arrays or server-side data use the same controlled combination.',
      zh: 'Table 只负责当前页的语义结构，Pagination 管理页码；本地数组或服务端数据都使用同一受控组合。',
    },
  },
  {
    component: Case12,
    title: { en: 'Primitive row expansion', zh: 'Primitive 行展开' },
    description: {
      en: 'Use a regular Button to control aria-expanded and render details with Row and a spanning Cell; no table-specific component is needed.',
      zh: '使用普通 Button 控制 aria-expanded，并通过 Row 与跨列 Cell 承载详情，不需要额外的表格专用组件。',
    },
  },
  {
    component: Case13,
    title: {
      en: 'Column alignment, super long omission and custom Cell',
      zh: '列对齐、超长省略与自定义 Cell',
    },
    description: {
      en: 'align uniformly controls the start, center and end alignment; the ellipsis of Head and Cell provides full-text Tooltip when overflowing, and the custom component directly acts as a Cell child node.',
      zh: 'align 统一控制起始、居中和末端对齐；Head 与 Cell 的 ellipsis 在溢出时提供全文 Tooltip，自定义组件直接作为 Cell 子节点。',
    },
  },
];

export default function TableShowcase() {
  return <ComponentShowcase cases={cases} />;
}
