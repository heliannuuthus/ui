// English translations keyed by the canonical Chinese documentation copy.
export const englishContentTranslations: Readonly<Record<string, string>> = {
  '控制折叠区域前保留的路径项数量。':
    'Control how many path items remain before the collapsed region.',
  '控制折叠区域后保留的路径项数量。':
    'Control how many path items remain after the collapsed region.',
  '以受控方式管理菜单开关状态。':
    'Manage the menu open state in controlled mode.',
  '设置菜单非受控模式下的初始开关状态。':
    'Set the initial menu open state in uncontrolled mode.',
  '菜单开关状态变化时调用。': 'Called when the menu open state changes.',
  '设置当前页。': 'Set the current page.',
  '设置总页数。': 'Set the total page count.',
  '在支持状态时设置受控值。': 'Set the controlled value when supported.',
  '在支持状态时设置非受控初始值。':
    'Set the initial uncontrolled value when supported.',
  '提供头像图片资源。': 'Provide the avatar image source.',
  '提供头像图片的替代文本。': 'Provide alternative text for the avatar image.',
  '为组内头像和自动生成的计数项设置统一尺寸。':
    'Set a consistent size for grouped avatars and generated count items.',
  '为组内头像和自动生成的计数项设置统一形状。':
    'Set a consistent shape for grouped avatars and generated count items.',
  '以受控方式管理内容展开状态。':
    'Manage the expanded content state in controlled mode.',
  '设置数字字号。': 'Set the numeric font size.',
  '设置数字字重。': 'Set the numeric font weight.',
  '设置数字数位间距。': 'Set the spacing between numeric places.',
  '在滚动数值前组合货币或其他视觉内容。':
    'Place currency or other visual content before the rolling value.',
  '在滚动数值后组合单位或其他视觉内容。':
    'Place units or other visual content after the rolling value.',
  '渲染表尾汇总；传入函数时会收到当前页可见数据。':
    'Render a table footer summary; a function receives the visible rows on the current page.',
  '控制是否渲染表头。': 'Control whether the table header is rendered.',
  '提供稳定的业务行标识；省略时依次回退到记录的 key 和当前索引。':
    'Provide a stable business row key; when omitted, fall back to the record key and then the current index.',
  '根据当前记录与索引扩展 Row 的类名、事件和原生属性。':
    'Extend Row classes, events, and native attributes from the current record and index.',
  '配置搜索状态、字段范围与客户端或 manual 服务端模式。':
    'Configure search state, field scope, and client or manual server mode.',
  '配置排序的受控状态，以及客户端或 manual 服务端模式。':
    'Configure controlled sorting state and client or manual server mode.',
  '配置分页状态与摘要；设置为 false 时关闭分页。':
    'Configure pagination state and summary; set false to disable pagination.',
  '配置行选择的受控状态、禁用规则和可访问名称。':
    'Configure controlled row selection, disabled rules, and accessible names.',
  '配置行展开的受控状态、可展开规则和详情内容。':
    'Configure controlled row expansion, expandable rules, and detail content.',
  '启用固定行高的虚拟表体；不能与 expandable 同时使用。':
    'Enable a fixed-row-height virtual body; it cannot be used with expandable.',
  '设置列表项的媒体内容。': 'Set the media content of the list item.',
  '选择媒体内容的普通、图标或图片外观。':
    'Choose the default, icon, or image appearance for media content.',
  '配置列表项对应的语义内容或尾部操作。':
    'Configure the corresponding semantic content or trailing action of the list item.',
  '设置气泡边缘回应或状态的纵向位置。':
    'Set the vertical position of the response or status at the bubble edge.',
  '设置气泡边缘回应或状态的横向对齐。':
    'Set the horizontal alignment of the response or status at the bubble edge.',
  '按文字书写方向设置内容靠起始侧、居中或靠末端。':
    'Align content to the start, center, or end according to the writing direction.',
  '将当前单元格固定在表格起始侧或末端。':
    'Fix the current cell to the start or end of the table.',
  '设置当前固定单元格前方同侧固定列的累计偏移。':
    'Set the cumulative offset of preceding fixed columns on the same side.',
  '传入 true 时在内容真实溢出后自动显示完整内容 Tooltip；传入 ReactNode 时以该节点作为 Tooltip 内容。':
    'Pass true to show the full content in a Tooltip after actual overflow, or pass a ReactNode as the Tooltip content.',
  '以受控方式管理 Tooltip。': 'Manage the Tooltip in controlled mode.',
  '设置 Tooltip 非受控模式下的初始状态。':
    'Set the initial Tooltip state in uncontrolled mode.',
  '设置浮层相对触发器的对齐方式。':
    'Set how the popup aligns relative to its trigger.',
  '设置浮层沿首选方向与触发器的间距。':
    'Set the popup spacing from its trigger along the preferred side.',
  '设置浮层沿对齐轴的偏移。': 'Set the popup offset along the alignment axis.',
  '设置 hover 模式打开前的等待时间，单位为毫秒。':
    'Set the delay before opening in hover mode, in milliseconds.',
  '设置 hover 模式关闭前的等待时间，单位为毫秒。':
    'Set the delay before closing in hover mode, in milliseconds.',
  '以受控方式管理浮层。': 'Manage the popup in controlled mode.',
  '设置浮层非受控模式下的初始状态。':
    'Set the initial popup state in uncontrolled mode.',
  '设置进度范围的最小值，并同步无障碍数值。':
    'Set the minimum progress value and synchronize its accessible value.',
  '设置进度范围的最大值，并同步无障碍数值。':
    'Set the maximum progress value and synchronize its accessible value.',
  '设置受控原始数值；空输入使用 null。':
    'Set the controlled raw value; an empty input uses null.',
  '设置非受控模式的初始数值；空输入使用 null。':
    'Set the initial uncontrolled value; an empty input uses null.',
  '限制允许输入和步进到达的最小值。':
    'Limit the minimum value accepted by input and stepping.',
  '限制允许输入和步进到达的最大值。':
    'Limit the maximum value accepted by input and stepping.',
  '设置普通步进幅度。': 'Set the regular step amount.',
  '设置 Alt 组合键对应的步进幅度。':
    'Set the step amount used with the Alt key.',
  '设置 Shift 组合键对应的步进幅度。':
    'Set the step amount used with the Shift key.',
  '使用 Intl.NumberFormatOptions 格式化显示值。':
    'Format the displayed value with Intl.NumberFormatOptions.',
  '设置格式化显示值使用的语言区域。':
    'Set the locale used to format the displayed value.',
  '在同一输入边框内展示固定前缀。':
    'Display a fixed prefix inside the same input border.',
  '在同一输入边框内展示固定单位后缀。':
    'Display a fixed unit suffix inside the same input border.',
  '配置原生输入提示。': 'Configure the native input placeholder.',
  '配置原生自动填充提示。': 'Configure the native autocomplete hint.',
  '配置软键盘输入模式。': 'Configure the soft-keyboard input mode.',
  '本地化递增按钮的可访问名称。':
    'Localize the accessible name of the increment button.',
  '本地化递减按钮的可访问名称。':
    'Localize the accessible name of the decrement button.',
  '设置对应的原生表单语义。': 'Set the corresponding native form semantics.',
  '选择是否允许悬停滚轮调整数值。':
    'Choose whether hovering and using the mouse wheel adjusts the value.',
  '选择步进时是否吸附到最近倍数。':
    'Choose whether stepping snaps to the nearest multiple.',
  '扩展输入、按钮等语义插槽样式。':
    'Extend styles for semantic slots such as the input and buttons.',
  '控制整列的文本截断与 Tooltip；设置为 true 时使用当前表头或单元格内容，传入 ReactNode 时使用该节点作为 Tooltip 内容。':
    'Controls text truncation and Tooltip for the entire column; true uses the current header or cell content, while a ReactNode provides the Tooltip content.',
  '按 header 与 cell 扩展当前列的类名。':
    'Extend the current column class names by header and cell slots.',
  '按 header 与 cell 设置当前列的行内样式。':
    'Set inline styles on the current column by header and cell slots.',
  '扩展当前列所有表头单元格的类名。':
    'Extend the class name of every heading cell in the current column.',
  '按列或当前记录扩展数据单元格的类名。':
    'Extend data cell class names by column or current record.',
  '设置当前列所有表头单元格的行内样式。':
    'Set inline styles on every heading cell in the current column.',
  '按列或当前记录设置数据单元格的行内样式。':
    'Set data cell inline styles by column or current record.',
  '传入 true 时在真实溢出后自动用完整内容作为 Tooltip；传入 ReactNode 时以该节点作为 Tooltip 内容。':
    'Pass true to use the full content as the Tooltip after actual overflow, or pass a ReactNode to use it as the Tooltip content.',
  'Head 与 Cell 的 ellipsis 只在文本真实溢出时启用 Tooltip，并允许键盘聚焦查看全文；传入 ReactNode 可直接替换 Tooltip 内容。':
    'Head and Cell enable Tooltip only when ellipsis content actually overflows, allow keyboard focus to read the full text, and accept a ReactNode to replace the Tooltip content.',
  '扩展数据表最外层根区域的类名。':
    'Extend the class name of the outermost table root.',
  '扩展搜索等表格级操作区域的类名。':
    'Extend the class name of the table-level toolbar.',
  '扩展滚动、边框与圆角容器的类名。':
    'Extend the class name of the scrolling, bordered container.',
  '扩展原生 table 节点的类名。':
    'Extend the class name of the native table element.',
  '扩展表头区域的类名。': 'Extend the class name of the table header.',
  '扩展表体区域的类名。': 'Extend the class name of the table body.',
  '扩展表尾汇总区域的类名。':
    'Extend the class name of the table footer summary.',
  '扩展内置加载与空数据状态单元格的类名。':
    'Extend the class name of the built-in loading and empty-data state cell.',
  '扩展分页摘要与翻页控件容器的类名。':
    'Extend the class name of the pagination summary and controls container.',
  '设置数据表最外层根区域的行内样式。':
    'Set inline styles on the outermost table root.',
  '设置搜索等表格级操作区域的行内样式。':
    'Set inline styles on the table-level toolbar.',
  '设置滚动、边框与圆角容器的行内样式。':
    'Set inline styles on the scrolling, bordered container.',
  '设置原生 table 节点的行内样式。':
    'Set inline styles on the native table element.',
  '设置表头区域的行内样式。': 'Set inline styles on the table header.',
  '设置表体区域的行内样式。': 'Set inline styles on the table body.',
  '设置表尾汇总区域的行内样式。':
    'Set inline styles on the table footer summary.',
  '设置内置加载与空数据状态单元格的行内样式。':
    'Set inline styles on the built-in loading and empty-data state cell.',
  '设置分页摘要与翻页控件容器的行内样式。':
    'Set inline styles on the pagination summary and controls container.',
  '按与 classNames 相同的语义区域设置行内样式。':
    'Set inline styles using the same semantic slots as classNames.',
  '设置对应语义槽位的行内样式。':
    'Set inline styles on the corresponding semantic slot.',
  '分别扩展滚动容器与原生 table 节点的类名。':
    'Extend the class names of the scrolling container and native table element.',
  '分别设置滚动容器与原生 table 节点的行内样式。':
    'Set inline styles on the scrolling container and native table element.',
  '引用内置滚动容器，用于外部滚动控制或尺寸观测。':
    'Reference the built-in scrolling container for external scroll control or size observation.',
  '扩展 Table.Primitive 滚动容器的类名。':
    'Extend the class name of the Table.Primitive scrolling container.',
  '扩展 Table.Primitive 原生 table 节点的类名。':
    'Extend the class name of the native Table.Primitive table element.',
  '设置 Table.Primitive 滚动容器的行内样式。':
    'Set inline styles on the Table.Primitive scrolling container.',
  '设置 Table.Primitive 原生 table 节点的行内样式。':
    'Set inline styles on the native Table.Primitive table element.',
  '悬停、聚焦或点击右侧属性行，查看根节点 className/style 与内部 classNames/styles 各字段对应的真实数据表区域。':
    'Hover, focus, or click a property row to inspect the table root targeted by className/style and the internal regions targeted by classNames/styles.',
  [`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'

<Table.Primitive classNames={{ table: 'min-w-[960px] table-fixed' }}>
  <Table.Header>
    <Table.Row>
      <Table.Head fixed="start" className="w-40">服务</Table.Head>
      <Table.Head className="w-28">版本</Table.Head>
      <Table.Head className="w-28">区域</Table.Head>
      <Table.Head className="w-32">最近部署</Table.Head>
      <Table.Head fixed="end" align="center" className="w-24">操作</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell fixed="start">Web Console</Table.Cell>
      <Table.Cell>v0.12.0</Table.Cell>
      <Table.Cell fixed="end" align="center">
        <Button
          aria-label="监控 Web Console"
          size="xs"
          variant="ghost"
        >
          监控
        </Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`]: `import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'

<Table.Primitive classNames={{ table: 'min-w-[960px] table-fixed' }}>
  <Table.Header>
    <Table.Row>
      <Table.Head fixed="start" className="w-40">Service</Table.Head>
      <Table.Head className="w-28">Version</Table.Head>
      <Table.Head className="w-28">Region</Table.Head>
      <Table.Head className="w-32">Recently deployed</Table.Head>
      <Table.Head fixed="end" align="center" className="w-24">Operation</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell fixed="start">Web Console</Table.Cell>
      <Table.Cell>v0.12.0</Table.Cell>
      <Table.Cell fixed="end" align="center">
        <Button
          aria-label="Monitoring Web Console"
          size="xs"
          variant="ghost"
        >
          Monitor
        </Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`,
  [`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'
import { ArrowUpRight } from 'lucide-react'

const ActionCell = () => {
  return (
    <Button
      aria-label="配置 Realtime Gateway"
      size="xs"
      variant="ghost"
    >
      配置 <ArrowUpRight data-icon="inline-end" />
    </Button>
  )
}

<Table.Primitive classNames={{ table: 'table-fixed' }}>
  <Table.Header>
    <Table.Row>
      <Table.Head align="start">服务</Table.Head>
      <Table.Head ellipsis="服务说明、最近一次生产部署上下文与异常原因">服务说明、最近一次生产部署上下文与异常原因</Table.Head>
      <Table.Head align="end">成功率</Table.Head>
      <Table.Head align="center">操作</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Realtime Gateway</Table.Cell>
      <Table.Cell ellipsis>{description}</Table.Cell>
      <Table.Cell align="end">99.98%</Table.Cell>
      <Table.Cell align="center"><ActionCell /></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`]: `import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'
import { ArrowUpRight } from 'lucide-react'

const ActionCell = () => {
  return (
    <Button
      aria-label="Configure Realtime Gateway"
      size="xs"
      variant="ghost"
    >
      Configure <ArrowUpRight data-icon="inline-end" />
    </Button>
  )
}

<Table.Primitive classNames={{ table: 'table-fixed' }}>
  <Table.Header>
    <Table.Row>
      <Table.Head align="start">Service</Table.Head>
      <Table.Head ellipsis="Service description, latest production deployment context and exception reasons">Service description, latest production deployment context and exception reasons</Table.Head>
      <Table.Head align="end">Success rate</Table.Head>
      <Table.Head align="center">Operation</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Realtime Gateway</Table.Cell>
      <Table.Cell ellipsis>{description}</Table.Cell>
      <Table.Cell align="end">99.98%</Table.Cell>
      <Table.Cell align="center"><ActionCell /></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`,
  '自定义省略单元格展示的完整 Tooltip 内容。':
    'Customize the full Tooltip content shown for a truncated cell.',
  '自定义省略列标题展示的完整 Tooltip 内容。':
    'Customize the full Tooltip content shown for a truncated column heading.',
  '自定义省略内容的 Tooltip；未设置时使用 Head 或 Cell 子节点，已有 title 会作为 Tooltip 内容。':
    'Customize the Tooltip for truncated content; when omitted, the Head or Cell children are used, with title taking precedence when present.',
  '服务：': 'Service: ',
  '设置稳定的列标识；使用字段 accessor 时可省略。':
    'Set a stable column identifier; it may be omitted when accessor is a field name.',
  '读取字段或通过函数计算当前列值。':
    'Read a field or calculate the current column value with a function.',
  '设置列标题。': 'Set the column heading.',
  '根据当前值、记录和索引渲染单元格。':
    'Render a cell from its current value, record, and index.',
  '嵌套子列并生成分组表头。':
    'Nest child columns to generate grouped headings.',
  '启用默认排序，或提供业务比较函数。':
    'Enable default sorting or provide an application comparison function.',
  '设置表头与单元格内容对齐方式。':
    'Set the alignment of the heading and cell content.',
  '将列固定在表格起始侧或末端。':
    'Pin the column to the start or end of the table.',
  '设置列宽，并参与固定列偏移计算。':
    'Set the column width and include it in fixed-column offset calculation.',
  '单元格溢出时省略，并自动提供完整内容 Tooltip。':
    'Truncate overflowing cells and automatically provide the full content in a Tooltip.',
  '列标题溢出时省略，并自动提供完整内容 Tooltip。':
    'Truncate overflowing column headings and automatically provide the full content in a Tooltip.',
  '扩展当前列的表头样式。': 'Extend the current column heading styles.',
  '按列或当前记录扩展单元格样式。':
    'Extend cell styles by column or current record.',
  'Head 与 Cell 的 ellipsis 只在文本真实溢出时启用 Tooltip，并允许键盘聚焦查看全文。':
    'Head and Cell enable Tooltip only when ellipsis content actually overflows, and allow keyboard focus to read the full text.',
  '展示、操作并自定义结构化数据集合。':
    'Display, operate on, and customize structured data sets.',
  '控制表尾汇总和表头显示；footer 函数会收到当前页数据。':
    'Control the footer summary and header visibility. A footer function receives the current page rows.',
  '提供稳定的业务行标识，并按记录扩展 Row 的类名、事件和原生属性。':
    'Provide a stable business row key and extend each Row with classes, events, and native attributes.',
  '分别配置搜索、排序和分页；三项都支持内部处理或 manual 服务端模式。':
    'Configure search, sorting, and pagination independently. Each supports internal processing or manual server mode.',
  '按需开启行选择、行展开或虚拟表体；expandable 与 virtual 互斥。':
    'Enable row selection, expansion, or a virtual body as needed. Expandable and virtual are mutually exclusive.',
  '建立不管理数据状态的原生 table 与滚动容器。':
    'Create a native table and scroll container without managing data state.',
  '对应原生表格的表头、表体、表尾、行和单元格语义。':
    'Map directly to native table header, body, footer, row, and cell semantics.',
  '行展开按钮使用 aria-expanded 表达状态，并在可访问名称中包含当前记录。':
    'Row expansion buttons expose state through aria-expanded and include the current record in their accessible name.',
  '通过 data、columns 和功能配置组装搜索、排序、分页、选择、展开与虚拟滚动。':
    'Use data, columns, and feature configs to compose search, sorting, pagination, selection, expansion, and virtualization.',
  '不要在 Table 外再包一套表格滚动与圆角容器；通过 classNames 定制现有语义区域。':
    'Do not wrap Table in another scroll and rounded container; customize its existing semantic regions through classNames.',
  '使用普通 Button 控制 aria-expanded，并通过 Row 与跨列 Cell 承载详情，不需要额外的表格专用组件。':
    'Use a regular Button to control aria-expanded and render details with Row and a spanning Cell; no table-specific component is needed.',
  自定义表格: 'Custom table',
  '数据已经完成加工，或需要完全控制结构时，直接组合 Header、Body 和 Footer；Footer 承载列汇总。':
    'When data is already prepared or the structure needs full control, compose Header, Body, and Footer directly. Footer contains column summaries.',
  'Table 默认由 data 与 ColumnDef 驱动筛选、排序、分页等完整数据交互；需要完全控制结构时，也可以直接组合语义表格原语。':
    'Table uses data and ColumnDef by default to drive filtering, sorting, pagination, and other complete data interactions; compose its semantic table primitives directly when full structural control is needed.',
  '常规业务数据列表使用 data 与 ColumnDef，快速获得筛选、排序、分页、展开和虚拟滚动。':
    'Use data and ColumnDef for regular business data lists to quickly add filtering, sorting, pagination, expansion, and virtual scrolling.',
  '数据已经完成加工，或结构无法由列模型表达时，直接组合 Table.Header、Table.Body、Table.Row 与 Table.Cell。':
    'When data is already prepared or the structure cannot be expressed by a column model, compose Table.Header, Table.Body, Table.Row, and Table.Cell directly.',
  '既希望沿用统一的表格视觉与无障碍语义，又需要针对业务定制固定列、汇总、操作和详情。':
    'Use Table when you want consistent table visuals and accessible semantics while tailoring fixed columns, summaries, actions, and details to the business.',
  自定义控件接入: 'Custom control integration',
  自定义控件: 'Custom control',
  注入属性: 'Injected props',
  '对比只实现值绑定的最小控件，以及额外支持错误聚焦和完整字段属性的控件。':
    'Compare a minimal value-bound control with one that also supports error focus and the complete field contract.',
  '先完成值绑定；需要错误聚焦时，再转发 ref 获取完整能力。':
    'Start with value binding, then forward the ref when error focus is required.',
  最小可用: 'Minimum viable',
  '普通函数组件即可完成 value 和 onChange 的值绑定。':
    'A regular function component is enough to bind value and onChange.',
  完整能力: 'Complete capabilities',
  '转发 ref 后支持校验失败自动聚焦，并保留完整字段属性。':
    'Forwarding the ref enables automatic focus after validation fails while preserving the complete field contract.',
  优先级: 'Priority',
  常规: 'Routine',
  重要: 'Important',
  紧急: 'Urgent',
  'Form.Field 统一管理值、校验、焦点与错误描述。':
    'Form.Field consistently manages values, validation, focus, and error descriptions.',
  '请选择优先级。': 'Choose a priority.',
  已保存优先级: 'Saved priority',
  保存优先级: 'Save priority',
  '接收一个控件元素；内置控件自动绑定，自定义控件自动获得标准受控属性。':
    'Accepts one control element; built-in controls bind automatically, while custom controls receive the standard controlled props.',
  '自动提供值、事件、字段状态和 ARIA 属性；控件支持 ref 时启用错误聚焦。':
    'Automatically provides values, events, field state, and ARIA attributes; error focus is enabled when the control supports refs.',
  完整组件表单: 'Complete component form',
  '在一个表单中验证全部受支持控件的值绑定、校验状态与无障碍关系。':
    'Validate value binding, validation state, and accessible relationships for every supported control in one form.',
  完整表单集成: 'Complete form integration',
  '所有数据录入组件共享同一份表单状态、校验和无障碍关系。':
    'All data-entry controls share the same form state, validation, and accessible relationships.',
  '会显示在导航和成员列表中。': 'Shown in navigation and member lists.',
  '请输入工作区名称。': 'Enter a workspace name.',
  邀请码: 'Invitation code',
  '输入 6 位数字确认创建操作。':
    'Enter the six-digit code to confirm creation.',
  '请输入 6 位数字邀请码。': 'Enter a six-digit invitation code.',
  '请输入邀请码。': 'Enter the invitation code.',
  部署区域: 'Deployment region',
  中国大陆: 'Mainland China',
  亚太地区: 'Asia Pacific',
  欧洲地区: 'Europe',
  关联空间: 'Parent workspace',
  '支持搜索、清除和分组选项。':
    'Supports search, clearing, and grouped options.',
  工作区说明: 'Workspace description',
  '介绍这个工作区的用途和协作方式…':
    'Describe the purpose of this workspace and how people collaborate…',
  启用日期: 'Launch date',
  '选择或清除计划启用日期。': 'Choose or clear the planned launch date.',
  选择启用日期: 'Choose a launch date',
  审核阈值: 'Review threshold',
  '设置发布前需要的审核人数。':
    'Set the number of approvals required before publishing.',
  可见范围: 'Visibility',
  '单选组通过字段标签获得可访问名称。':
    'The radio group receives its accessible name from the field label.',
  仅自己: 'Only me',
  团队成员: 'Team members',
  所有人: 'Everyone',
  权限范围: 'Permissions',
  '多选组的值以字符串数组提交。':
    'The checkbox group submits its value as a string array.',
  评论: 'Comment',
  内容格式: 'Content formats',
  '切换组同样提交一个数组值。': 'The toggle group also submits an array value.',
  富文本: 'Rich text',
  纯文本: 'Plain text',
  发送状态通知: 'Send status notifications',
  '布尔值通过 checked 语义绑定。':
    'The boolean value binds through checked semantics.',
  置顶工作区: 'Pin workspace',
  'Toggle 保留 pressed 状态语义。': 'Toggle preserves pressed-state semantics.',
  置顶: 'Pin',
  '提交前必须明确确认。':
    'Explicit confirmation is required before submission.',
  '请确认以上设置。': 'Confirm the settings above.',
  我已确认以上设置: 'I have confirmed the settings above',
  已保存完整表单: 'Complete form saved',
  '正在保存…': 'Saving…',
  保存设置: 'Save settings',
  '通过统一的 Form.Field 连接控件、校验、错误和提交状态。':
    'Connect controls, validation, errors, and submission state through the unified Form.Field API.',
  'import { Form, Input, Switch } from \'@heliannuuthus/ui\'\n\nconst form = Form.useForm({\n  defaultValues: { email: \'\', notify: true },\n})\n\n<Form form={form} onSubmit={onSubmit}>\n  <Form.Field\n    name="email"\n    label="邮箱地址"\n    description="成员会收到一封加入工作区的邮件。"\n    rules={{ required: \'请输入邮箱地址。\' }}\n  >\n    <Input />\n  </Form.Field>\n  <Form.Field name="notify" label="发送邮件通知">\n    <Switch />\n  </Form.Field>\n</Form>':
    'import { Form, Input, Switch } from \'@heliannuuthus/ui\'\n\nconst form = Form.useForm({\n  defaultValues: { email: \'\', notify: true },\n})\n\n<Form form={form} onSubmit={onSubmit}>\n  <Form.Field\n    name="email"\n    label="Email address"\n    description="The member will receive an email invitation to join the workspace."\n    rules={{ required: \'Please enter an email address.\' }}\n  >\n    <Input />\n  </Form.Field>\n  <Form.Field name="notify" label="Send email notification">\n    <Switch />\n  </Form.Field>\n</Form>',
  '连接 Form.useForm 创建的表单实例。':
    'Connects the form instance created by Form.useForm.',
  '校验通过后接收完整表单数据。':
    'Receives the complete form values after validation succeeds.',
  '设置字段标签并自动关联实际控件。':
    'Sets the field label and automatically associates it with the control.',
  '补充字段说明并建立无障碍描述关联。':
    'Adds field guidance and its accessible description relationship.',
  '直接绑定内置控件，或使用 render 函数接入第三方控件。':
    'Binds built-in controls directly or integrates third-party controls with a render function.',
  '滑块值变化时调用。': 'Called whenever the slider value changes.',
  '一次指针或键盘调整完成后调用。':
    'Called after a pointer or keyboard adjustment completes.',
  '通过 Form.Field 统一连接数据录入组件、校验状态和提交行为。':
    'Uses Form.Field to connect data-entry controls, validation state, and submission behavior consistently.',
  '使用统一方式组织标签、控件、说明和错误信息。':
    'Organizes labels, controls, descriptions, and errors consistently.',
  '让内置数据录入组件自动连接字段值、校验状态和提交行为。':
    'Lets built-in data-entry controls connect field values, validation state, and submission automatically.',
  '渲染原生表单并连接 Form.useForm 实例。':
    'Renders a native form and connects a Form.useForm instance.',
  '创建类型化表单实例并管理完整表单状态。':
    'Creates a typed form instance and manages the complete form state.',
  '自动绑定内置控件，并组织标签、说明和校验错误。':
    'Binds built-in controls automatically and organizes labels, descriptions, and validation errors.',
  发送邮件通知: 'Send email notification',
  '关闭后只会创建邀请记录。':
    'When disabled, only the invitation record is created.',
  '正在发送…': 'Sending…',
  "'上一页' / '下一页'": "'Previous' / 'Next'",
  '本地化分页导航、前后翻页按钮和省略页码的无障碍名称。':
    'Localizes the accessible names for pagination navigation, previous and next controls, and ellipses.',
  '为每一行生成本地化的展开与收起按钮名称，并包含可辨认的记录信息。':
    'Generates localized expand and collapse button labels for each row, including identifiable record information.',
  '本地化分页控件的无障碍名称和总数、当前页摘要。':
    'Localizes pagination accessible names and the total and current-page summary.',
  '同时本地化日历名称、星期、月份和弹出触发器中的日期格式。':
    'Localizes calendar labels, weekdays, months, and the date format shown in the popover trigger.',
  完整数据分页: 'Complete data pagination',
  '通过总数与每页数量推导页数，并在一行内组合数据范围、页码、每页数量和快速跳转。':
    'Derive the page count from the total and page size, then keep the visible range, page controls, page-size selection, and quick jump on one line.',
  '设置分页器在可用宽度内的对齐方式。':
    'Aligns the pagination within its available width.',
  '受控模式下的当前页，从 1 开始。':
    'Sets the controlled current page, starting at 1.',
  '非受控模式下的初始页码。': 'Sets the initial page in uncontrolled mode.',
  '直接设置总页数；省略时由 total 与 pageSize 推导。':
    'Sets the page count directly; when omitted, it is derived from total and pageSize.',
  '设置数据总数，并结合 pageSize 推导总页数；pageCount 可直接覆盖推导结果。':
    'Sets the total item count and derives the page count from pageSize; pageCount can override the derived result.',
  '受控模式下的每页数据条数。': 'Sets the controlled number of items per page.',
  '非受控模式下的初始每页数据条数。':
    'Sets the initial number of items per page in uncontrolled mode.',
  '页码或每页数量变化时回传下一页和每页数量。':
    'Returns the next page and page size when either value changes.',
  '每页数量变化时回传校正后的页码和每页数量。':
    'Returns the adjusted page and new page size when the page size changes.',
  '设置每页数量选择器的候选值。':
    'Sets the options available in the page-size selector.',
  '格式化每页数量选项的可见文字。':
    'Formats the visible label for each page-size option.',
  '显示每页数量选择器。': 'Shows the page-size selector.',
  '显示快速跳页输入框，并可配置标签、后缀和确认按钮。':
    'Shows a quick-jump input with configurable label, suffix, and confirmation button.',
  '显示数据总数，或根据总数与当前范围自定义摘要。':
    'Shows the total item count or renders a custom summary from the total and current range.',
  '使用紧凑的页码输入模式，并可设为只读。':
    'Uses a compact page-input mode that can be made read-only.',
  '禁用所有分页、跳页和每页数量操作。':
    'Disables page navigation, quick jumping, and page-size changes.',
  '只有一页时隐藏整个分页器。':
    'Hides the entire pagination when only one page is available.',
  '控制上一页条目；false 隐藏，true 使用默认内容，ReactNode 自定义完整内容。':
    'Controls the previous-page item: false hides it, true uses the default content, and a ReactNode replaces its complete content.',
  '控制下一页条目；false 隐藏，true 使用默认内容，ReactNode 自定义完整内容。':
    'Controls the next-page item: false hides it, true uses the default content, and a ReactNode replaces its complete content.',
  '控制第一页条目；false 隐藏，true 使用默认图标，ReactNode 自定义完整内容。':
    'Controls the first-page item: false hides it, true uses the default icon, and a ReactNode replaces its complete content.',
  '控制最后一页条目；false 隐藏，true 使用默认图标，ReactNode 自定义完整内容。':
    'Controls the last-page item: false hides it, true uses the default icon, and a ReactNode replaces its complete content.',
  '为页码和导航按钮提供原生 title 提示。':
    'Adds native title text to page and navigation controls.',
  '根据条目类型、页码和选中状态生成无障碍名称。':
    'Generates an accessible name from the item type, page, and selected state.',
  '为页码和导航按钮生成可复制、可打开新窗口的真实地址。':
    'Generates real, copyable URLs for page and navigation controls.',
  '控制首尾两侧始终保留多少个边界页码。':
    'Controls how many boundary pages remain visible at the beginning and end.',
  '自定义页码、导航按钮和省略标记的最终渲染。':
    'Customizes the final rendering of pages, navigation controls, and ellipses.',
  '设置分页控件尺寸。': 'Sets the pagination control size.',
  '按语义插槽扩展分页器内部类名。':
    'Extends pagination class names by semantic slot.',
  '按语义插槽扩展分页器内部行内样式。':
    'Extends pagination inline styles by semantic slot.',
  前往第一页: 'Go to the first page',
  前往最后一页: 'Go to the last page',
  每页条数: 'Items per page',
  跳转页码: 'Page to jump to',
  '条 / 页': 'items / page',
  跳转: 'Go',
  跳至: 'Jump to',
  项: 'items',
  简洁模式: 'Simple mode',
  可直接输入页码: 'Enter a page directly',
  禁用状态: 'Disabled state',
  保留完整分页上下文: 'Preserves the complete pagination context',
  简洁与禁用状态: 'Simple and disabled states',
  '简洁模式使用页码输入完成长范围跳转；禁用状态保留当前分页上下文但阻止全部操作。':
    'Simple mode uses a page input for long-range jumps; the disabled state preserves pagination context while preventing every action.',
  [`import { Pagination } from '@heliannuuthus/ui'

<Pagination
  align="start"
  boundaries={2}
  siblings={1}
  current={24}
  total={2480}
  pageSize={20}
  onChange={setPage}
  onPageSizeChange={(page, size) => {
    setPage(page)
    setPageSize(size)
  }}
  pageSizeOptions={[10, 20, 50, 100]}
  pageSizeLabel={(size) => \`\${size} 条 / 页\`}
  showTotal={(total, range) => \`\${range[0]}–\${range[1]} / \${total} 项\`}
  showSizeChanger
  showQuickJumper={{ goButton: '跳转', label: '跳至', suffix: '页' }}
  first
  last
  previous="上一页"
  next="下一页"
  showTitle
  getItemAriaLabel={({ page }) => \`Page \${page}\`}
  getItemHref={(page) => \`#page-\${page}\`}
  renderItem={({ originalElement }) => originalElement}
  classNames={{ summary: 'font-medium' }}
  styles={{ summary: { minWidth: 120 } }}
/>`]: `import { Pagination } from '@heliannuuthus/ui'

<Pagination
  align="start"
  boundaries={2}
  siblings={1}
  current={24}
  total={2480}
  pageSize={20}
  onChange={setPage}
  onPageSizeChange={(page, size) => {
    setPage(page)
    setPageSize(size)
  }}
  pageSizeOptions={[10, 20, 50, 100]}
  pageSizeLabel={(size) => \`\${size} items / page\`}
  showTotal={(total, range) => \`\${range[0]}–\${range[1]} / \${total} items\`}
  showSizeChanger
  showQuickJumper={{ goButton: 'Go', label: 'Jump to', suffix: 'page' }}
  first
  last
  previous="Previous"
  next="Next"
  showTitle
  getItemAriaLabel={({ page }) => \`Page \${page}\`}
  getItemHref={(page) => \`#page-\${page}\`}
  renderItem={({ originalElement }) => originalElement}
  classNames={{ summary: 'font-medium' }}
  styles={{ summary: { minWidth: 120 } }}
/>`,
  分页: 'Pagination',
  前往上一页: 'Go to the previous page',
  前往下一页: 'Go to the next page',
  更多页面: 'More pages',
  展开行: 'Expand row',
  显示完整路径: 'Show the full path',
  暂无内容: 'No content yet',
  '，图片会自动填满容器并保持比例。':
    ', the image will automatically fill the container and maintain proportions.',
  '，悬停或聚焦名字查看详情。': ', hover or focus on the name to view details.',
  "'\n\n// 根据下方预览组合该模块导出的组件。":
    "'\n\n// Combine the components exported by this module according to the preview below.",
  "'筛选…'": "'filter…'",
  "'选择日期'": "'Select date'",
  "'暂无内容'": "'No content yet'",
  "'暂无数据'": "'No data yet'",
  '← 拖动或使用方向键调整 →': '← Drag or use the arrow keys to adjust →',
  '<DatePicker\n  value={date}\n  onChange={setDate}\n  placeholder="选择发布日期"\n/>':
    '<DatePicker\n  value={date}\n  onChange={setDate}\n  placeholder="Select publication date"\n/>',
  "<div className=\"w-[320px] max-w-full\">\n  <Tabs\n    defaultValue=\"overview\"\n    items={[\n      { value: 'overview', label: '项目概览', content: <Overview /> },\n      { value: 'activity', label: '活动记录', content: <Activity /> },\n      { value: 'branches', label: '分支策略', content: <Branches /> },\n      { value: 'docs', label: '使用文档', content: <Docs /> },\n      { value: 'support', label: '帮助支持', content: <Support /> },\n    ]}\n    scrollLabels={{\n      start: '向前滚动标签',\n      end: '向后滚动标签',\n    }}\n  />\n</div>":
    "<div className=\"w-[320px] max-w-full\">\n  <Tabs\n    defaultValue=\"overview\"\n    items={[\n      { value: 'overview', label: 'Project Overview', content: <Overview /> },\n      { value: 'activity', label: 'activity record', content: <Activity /> },\n      { value: 'branches', label: 'branch strategy', content: <Branches /> },\n      { value: 'docs', label: 'Use documentation', content: <Docs /> },\n      { value: 'support', label: 'Help support', content: <Support /> },\n    ]}\n    scrollLabels={{\n      start: 'Scroll tab forward',\n      end: 'Scroll label backward',\n    }}\n  />\n</div>",
  '<Input\n  defaultValue="docs"\n  prefix="ui.dev/"\n  suffix={<Button>复制</Button>}\n/>':
    '<Input\n  defaultValue="docs"\n  prefix="ui.dev/"\n  suffix={<Button>Copy</Button>}\n/>',
  '<Input defaultValue="设计系统迁移" />\n<Input aria-invalid defaultValue="my workspace" />\n<Input value="UI-2048" readOnly />\n<Input value="项目进行中" disabled />':
    '<Input defaultValue="Design system migration" />\n<Input aria-invalid defaultValue="my workspace" />\n<Input value="UI-2048" readOnly />\n<Input value="Project in progress" disabled />',
  '<NavigationMenu\n  align="end"\n  items={[\n    {\n      label: \'产品\',\n      content: ({ Link }) => (\n        <Link href="/components">组件库</Link>\n      ),\n    },\n  ]}\n/>':
    '<NavigationMenu\n  align="end"\n  items={[\n    {\n      label: \'product\',\n      content: ({ Link }) => (\n        <Link href="/components">Component Library</Link>\n      ),\n    },\n  ]}\n/>',
  "<Select\n  value={value}\n  onChange={setValue}\n  options={[\n    {\n      label: '个人工作区',\n      options: personalWorkspaces,\n    },\n    {\n      label: '团队工作区',\n      options: teamWorkspaces,\n    },\n  ]}\n  placeholder=\"选择工作区\"\n/>":
    "<Select\n  value={value}\n  onChange={setValue}\n  options={[\n    {\n      label: 'Personal workspace',\n      options: personalWorkspaces,\n    },\n    {\n      label: 'Team workspace',\n      options: teamWorkspaces,\n    },\n  ]}\n  placeholder=\"Select workspace\"\n/>",
  '<Select\n  value={value}\n  onChange={setValue}\n  options={members.map((member) => ({\n    label: member.name,\n    value: member.id,\n  }))}\n  placeholder="搜索成员…"\n  showClear\n/>':
    '<Select\n  value={value}\n  onChange={setValue}\n  options={members.map((member) => ({\n    label: member.name,\n    value: member.id,\n  }))}\n  placeholder="Search for members…"\n  showClear\n/>',
  '<Slider\n  aria-label="人声电平"\n  className="h-56"\n  orientation="vertical"\n  value={level}\n  onChange={setLevel}\n  min={0}\n  max={100}\n  step={2}\n/>':
    '<Slider\n  aria-label="Vocal level"\n  className="h-56"\n  orientation="vertical"\n  value={level}\n  onChange={setLevel}\n  min={0}\n  max={100}\n  step={2}\n/>',
  "<Tabs\n  animation=\"slide\"\n  centered\n  classNames={{\n    panel: 'p-8',\n    viewport: 'mt-4 min-h-48 rounded-xl border',\n  }}\n  defaultValue=\"design\"\n  variant=\"soft\"\n  items={[\n    { value: 'design', label: '设计', content: '整理组件视觉规范' },\n    { value: 'code', label: '开发', content: '连接组件与业务状态' },\n    { value: 'release', label: '发布', content: '完成验证并发布' },\n  ]}\n/>":
    "<Tabs\n  animation=\"slide\"\n  centered\n  classNames={{\n    panel: 'p-8',\n    viewport: 'mt-4 min-h-48 rounded-xl border',\n  }}\n  defaultValue=\"design\"\n  variant=\"soft\"\n  items={[\n    { value: 'design', label: 'Design', content: 'Organizing component visual specifications' },\n    { value: 'code', label: 'Development', content: 'Connect components and business status' },\n    { value: 'release', label: 'release', content: 'Complete verification and release' },\n  ]}\n/>",
  "<Tabs\n  centered\n  defaultValue=\"preview\"\n  variant=\"line\"\n  items={[\n    { value: 'preview', label: '预览', content: '实时预览当前组件。' },\n    { value: 'code', label: '代码', content: '查看实现代码。' },\n    { value: 'tests', label: '测试', content: '查看测试结果。' },\n  ]}\n/>":
    "<Tabs\n  centered\n  defaultValue=\"preview\"\n  variant=\"line\"\n  items={[\n    { value: 'preview', label: 'Preview', content: 'Preview the current component in real time. ' },\n    { value: 'code', label: 'code', content: 'View implementation code. ' },\n    { value: 'tests', label: 'Test', content: 'View test results. ' },\n  ]}\n/>",
  "<Tabs\n  defaultValue=\"overview\"\n  items={[\n    { value: 'overview', label: '概览', content: <Overview /> },\n    { value: 'activity', label: '动态', content: <Activity /> },\n    { value: 'members', label: '成员', content: <Members /> },\n  ]}\n/>":
    "<Tabs\n  defaultValue=\"overview\"\n  items={[\n    { value: 'overview', label: 'Overview', content: <Overview /> },\n    { value: 'activity', label: 'dynamic', content: <Activity /> },\n    { value: 'members', label: 'members', content: <Members /> },\n  ]}\n/>",
  '¥ 68 / 月': '¥68/month',
  '1 位成员': '1 member',
  '10 分钟': '10 minutes',
  '12 个文件 · 2.4 MB': '12 files · 2.4 MB',
  '12 项规则': '12 rules',
  '12 项检查全部通过，可以安排生产环境发布。':
    'If all 12 inspections are passed, the production environment release can be arranged.',
  '12.1 MB · 上传失败': '12.1 MB · Upload failed',
  '16 个组件现在都有真实交互场景。':
    '16 components now have real interaction scenarios.',
  '2 分钟前': '2 minutes ago',
  '2,480 条记录': '2,480 records',
  '24 KB · 已同步': '24 KB · Synced',
  '3 / 3 就绪': '3/3 Ready',
  '3 个示例': '3 examples',
  '3 位负责人': '3 people in charge',
  '3 位审核人已确认': 'Confirmed by 3 reviewers',
  '320px 与 480px 只是代表性的测试容器，不是组件断点；空间不足时隐藏原生滚动条、显示两侧导航按钮，同时保留触摸与触控板横向滑动。':
    '320px and 480px are just representative test containers, not component breakpoints; when there is insufficient space, the native scroll bar is hidden and the navigation buttons on both sides are displayed, while horizontal sliding of touch and trackpad is retained.',
  '5 条未读消息': '5 unread messages',
  '7 条消息 · Bubble + Avatar': '7 messages · Bubble + Avatar',
  '8.4 MB · 正在校验': '8.4 MB · Verifying',
  '98% 成功率': '98% success rate',
  安排发布: 'Schedule a release',
  安排生产发布: 'Schedule production release',
  安排生产环境发布: 'Schedule a production environment release',
  安全提醒: 'Safety reminder',
  安全团队: 'security team',
  '按方向、间距与对齐规则排列一组相关内容。':
    'Arrange a group of related content according to direction, spacing, and alignment rules.',
  '按钮、输入与选择器共享一致的交互反馈，并覆盖禁用、错误与加载状态。':
    'Buttons, inputs, and selectors share consistent interactive feedback and override disabled, error, and loading states.',
  '按钮尺寸，也包含仅图标尺寸。': 'Button size, also includes icon only size.',
  按钮触发: 'button trigger',
  '按钮的视觉样式。': 'The visual style of the button.',
  '按钮或链接中展示的内容。': 'The content displayed in the button or link.',
  按钮类型: 'button type',
  '按文字书写方向设置列内容靠起始侧、居中或靠末端。':
    'Set the column content to the starting side, center or end according to the text writing direction.',
  '按需展开一块辅助内容；支持独立按钮或整个自定义 Header 触发，并允许替换状态图标。':
    'Expand a piece of auxiliary content on demand; support independent button or entire custom Header triggering, and allow status icons to be replaced.',
  '按需展开一组纵向排列的内容区域。':
    'Expand a set of vertically arranged content areas as needed.',
  '把产品入口、资源入口和当前页面放入同一条站点导航，弹层宽度随内容平滑变化。':
    'Put the product entrance, resource entrance and current page into the same site navigation, and the width of the elastic layer will change smoothly with the content.',
  '把抽屉约束在指定父容器内。':
    'Constrains the drawer to the specified parent container.',
  '把列对齐、固定位置、省略和 Tooltip 映射到同一组 Table Head / Cell 属性，并允许扩展表头与单元格类名。':
    'Map column alignment, fixed position, omission, and Tooltip to the same set of Table Head / Cell properties, and allow extension of table header and cell class names.',
  '把完成比例与当前阶段放在一起，让用户知道任务正在做什么以及还剩多少。':
    'Putting the completion percentage alongside the current stage lets users know what the task is doing and how much is left.',
  版本: 'Version',
  版本亮点: 'Version Highlights',
  版本说明: 'Release Notes',
  帮助: 'help',
  '帮助用户确认当前位置，并沿着稳定的页面层级向上返回。':
    'Help users confirm their current location and move back up the stable page hierarchy.',
  帮助支持: 'Help support',
  绑定父容器: 'Bind parent container',
  '包含导航结构调整与组件文档更新。':
    'Contains navigation structure adjustments and component documentation updates.',
  '包含跨列内容的 Masonry 布局示例':
    'Masonry layout example with content spanning columns',
  '保持标题层级连续。': 'Keep headings hierarchically continuous.',
  '保持内容不动，只比较标签外观':
    'Keep the content unchanged and only compare the label appearance',
  保存: 'save',
  保存封面: 'save cover',
  保存说明: 'Saving instructions',
  保存修改: 'Save changes',
  '保留底层语义、焦点管理与键盘交互。':
    'Preserves underlying semantics, focus management, and keyboard interaction.',
  保留环境: 'preserve environment',
  '保留上一版本镜像，异常时可在 90 秒内切回 v0.11.4。':
    'The previous version image is retained and can be switched back to v0.11.4 within 90 seconds in case of an exception.',
  '保留首页、末页和当前页附近范围，其余页码用省略标记收起。':
    'Keep the first page, last page and the range around the current page, and close the remaining page numbers with ellipsis marks.',
  报告: 'Report',
  '本次发布包含 6 项变更': 'This release contains 6 changes',
  '本次发布包含导航与数据录入组件。':
    'This release includes navigation and data entry components.',
  '本地化横向溢出时自动出现的起始与末尾滚动按钮名称。':
    'Localize the names of the start and end scroll buttons that appear automatically when overflowing horizontally.',
  '本月 18 次发布': '18 posts this month',
  本月请求: 'Requests this month',
  '本周补充了组件示例与无障碍说明，方便团队快速查阅和复用。':
    'This week, component examples and accessibility instructions are added to facilitate quick reference and reuse by the team.',
  '本周补充了组件示例与无障碍说明。':
    'Component examples and accessibility instructions have been added this week.',
  本周发布: 'Published this week',
  本周构建: 'Build this week',
  '比例切换控件需要暴露当前选中状态。':
    'The scale switching control needs to expose the current selected state.',
  '避免超过两层子菜单，过深的结构会增加指针和键盘操作成本。':
    'Avoid more than two levels of submenus, as an overly deep structure will increase the cost of pointer and keyboard operations.',
  '避免放入长句或复杂操作。':
    'Avoid putting long sentences or complex operations.',
  '避免在弹层中继续嵌套第三层导航。':
    'Avoid nesting third-level navigation in the pop-up layer.',
  '避免展示超过五个可见层级；深层路径应使用 collapse 收起。':
    'Avoid showing more than five visible levels; deep paths should be collapsed using collapse.',
  '边缘渐隐会跟随真实滚动距离变化；列表项进入视口时轻量出现，并支持方向键浏览与 Enter 选择。':
    'Edge fading will follow the actual scrolling distance; list items appear lightly when entering the viewport, and support arrow keys for browsing and Enter selection.',
  编辑: 'edit',
  编辑器: 'Editor',
  变体: 'Variants',
  '标记对象的状态或分类。': 'Mark the status or classification of an object.',
  '标记内容中的位置或状态。': 'Mark a location or state in content.',
  '标记校验失败并启用错误样式。':
    'Tag validation failed and error styles enabled.',
  '标签触发器中展示的内容。': 'The content displayed in the tag trigger.',
  标签关联与必要性: 'Label association and necessity',
  '标签过多时应减少分组或改用导航，不应挤压到无法辨认。':
    'When there are too many labels, you should reduce the grouping or use navigation instead. They should not be squeezed to the point of being unrecognizable.',
  '标签激活后展示的面板内容。':
    'The panel content displayed after the label is activated.',
  '标签列表、标签和面板之间保留正确的 ARIA 关联。':
    'Correct ARIA associations are preserved between tag lists, tags, and panels.',
  '标签配置列表，决定标签、对应面板及禁用状态。必填。':
    'Label configuration list, determines the label, corresponding panel and disabled status. Required.',
  '标签与对应面板共享的唯一标识。':
    'The unique identifier shared by the label and the corresponding panel.',
  '标识 Radio 在所属分组中的值。':
    'The value that identifies Radio in the group it belongs to.',
  '标题下方的辅助说明。': 'Auxiliary instructions below the title.',
  '标题下方的辅助说明区域。': 'Ancillary description area below the title.',
  '标题应准确描述卡片主题，并保持页面标题层级连续。':
    'The title should accurately describe the subject of the card and keep the page title hierarchical.',
  '表达单个布尔选择。': 'Expresses a single Boolean selection.',
  '表达单个互斥选项。': 'Expresses a single mutually exclusive option.',
  '表达单个可按下、可释放的工具状态。':
    'Expresses the state of a single pressable and releaseable tool.',
  '表达单个可选项及其选中状态。':
    'Expresses a single option and its selected state.',
  '表达附件当前处理阶段并驱动状态样式。':
    "Expresses the attachment's current processing stage and drives status styles.",
  '表达子项只被部分选择。': 'The expression child is only partially selected.',
  表单组件: 'form component',
  表格: 'sheet',
  '表示人物、团队或其他实体。': 'Represents a person, team, or other entity.',
  '表示无法确定进度的短时加载。':
    'Indicates a short load with undetermined progress.',
  冰块中的向日葵: 'Sunflowers in ice cubes',
  '并在末列提供查看、审批等操作 Button':
    'And provide viewing, approval and other operations Button in the last column',
  播放器音量: 'player volume',
  '补充示例与 API 说明': 'Additional examples and API descriptions',
  '补充数据库迁移影响与回滚入口。':
    'Supplement database migration impact and rollback entry.',
  '补充邀请背景…': 'Supplementary invitation background…',
  '补充原因、筛选建议或下一步说明。':
    'Supplement reasons, screening suggestions, or next steps.',
  '补充这次发布的背景、影响范围和回滚方式。':
    'Supplement the background, scope, and rollback of this release.',
  '补充字段说明并展示当前校验错误。':
    'Add field descriptions and display current validation errors.',
  '不传任何内容也会显示默认图标和“暂无内容”，适合作为安全、稳定的兜底状态。':
    'Even if no content is uploaded, the default icon and "No content" will be displayed, which is suitable for a safe and stable back-up state.',
  不可用: 'Not available',
  '不可用的边界操作同时设置 aria-disabled 并阻止导航。':
    'Disabled boundary operations also set aria-disabled and prevent navigation.',
  '不使用 max 时，也可以手动组合自定义的分组计数项。':
    'When max is not used, custom grouping count items can also be combined manually.',
  不通知: 'without notice',
  不同尺寸: 'different sizes',
  不同触发方式: 'Different triggering methods',
  '不要把 Badge 用作没有键盘语义的可点击控件。':
    "Don't use Badges as clickable controls without keyboard semantics.",
  '不要把互不相关的信息仅因为视觉需要塞进同一张 Card。':
    'Don’t cram unrelated information into the same card just for visual reasons.',
  '不要把排版组件当作布局容器。':
    "Don't think of typography components as layout containers.",
  '不要把所有区域平铺在同一个 Layout；跨整页的 Header 和 Footer 应包住中间的嵌套 Layout。':
    'Do not tile all areas in the same Layout; the Header and Footer that span the entire page should wrap the nested Layout in the middle.',
  '不要把所有页面操作塞进顶层菜单，应保留稳定且跨上下文的命令。':
    'Don’t cram all page actions into top-level menus; keep commands that are stable and cross-context.',
  '不要把主要操作藏进菜单；高频主要动作应直接显示在界面上。':
    'Don’t hide main operations in menus; high-frequency main actions should be displayed directly on the interface.',
  '不要假设所有用户都使用同一种键盘布局。':
    "Don't assume that all users use the same keyboard layout.",
  '不要仅根据设备名称选择行为；触摸密集任务使用 gesture，稳定编辑面板使用 panel，不确定时使用 adaptive。':
    "Don't choose a behavior based solely on the device name; use gesture for touch-intensive tasks, panel for stable editing panels, and adaptive when you're not sure.",
  '不要仅靠卡片位置表达顺序；窄屏折为单列后仍应能按源码顺序阅读。':
    "Don't rely solely on the position of the cards to express the order; narrow screens should still be able to read in source code order after being folded into a single column.",
  '不要让 Compact 换行；空间不足时应切换为垂直方向。':
    "Don't let Compact wrap; switch to vertical orientation when there's not enough space.",
  '不要让任一区域缩小到内容无法理解或操作的程度。':
    'Do not let any area shrink to the point where the content cannot be understood or manipulated.',
  '不要通过空白字符或子元素外边距模拟组件间距。':
    'Do not simulate component spacing through whitespace or child element margins.',
  '不要同时维护 HoverCard 与 Popover 两套相同内容；实体预览直接使用 trigger="hover"。':
    'Do not maintain two sets of the same content, HoverCard and Popover, at the same time; use trigger="hover" directly for entity preview.',
  '不要同时在同一局部区域堆叠多个表达相同状态的 Spinner。':
    'Do not stack multiple spinners expressing the same state in the same local area at the same time.',
  '不要为 Tabs 硬编码设备断点；应让它服从实际父容器，并在嵌套窄空间中验证溢出行为。':
    "Don't hardcode device breakpoints for Tabs; make them obey the actual parent container and verify overflow behavior in nested narrow spaces.",
  '不要为纯装饰或高频实时数据开启 assertive 播报。':
    'Do not enable assertive reporting for purely decorative or high-frequency real-time data.',
  '不要为了视觉分区手写两个并列表格；使用嵌套 columns 生成真正关联的数据表头。':
    'Don’t hand-write two side-by-side tables for visual partitioning; use nested columns to generate truly connected data headers.',
  '不要为了视觉字号选择错误的标题语义。':
    'Don’t choose the wrong title semantics for visual font size.',
  '不要为了展示尺寸把 Spinner 包进 Button；按钮加载态应由真实操作按钮自行组合。':
    'Do not wrap the Spinner into the Button for display size; the button loading state should be composed by the actual operation button.',
  '不要为普通空状态重复拼装内部结构，优先使用语义 props。':
    'Don’t reassemble internal structures for plain empty states, prefer semantic props.',
  '不要写死业务文案、尺寸和产品状态。':
    'Don’t write down business copy, dimensions, and product status.',
  '不要一次展示所有页码；长范围应围绕当前页进行压缩。':
    "Don't display all page numbers at once; long ranges should be condensed around the current page.",
  '不要依靠视觉列位置表达严格顺序；不同高度可能让后续内容出现在更高的位置。':
    'Don’t rely on visual column positions to convey strict order; varying heights may cause subsequent content to appear higher.',
  '不要移除焦点样式或绕过状态属性。':
    "Don't remove focus styles or bypass state properties.",
  '不要用 Collapsible 组织多个需要单选或多选联动的面板，这类结构应使用 Accordion。':
    'Do not use Collapsible to organize multiple panels that require single-select or multi-select linkage. Accordion should be used for such structures.',
  '不要用 Stack 代替表单分组、单选组或工具栏等语义结构。':
    'Do not use Stack to replace semantic structures such as form groups, radio groups, or toolbars.',
  '不要用 Tabs 表达有前后依赖的步骤流程。':
    'Don’t use Tabs to express dependent steps.',
  '不要用大菜单隐藏唯一的主要行动；高频入口应保持直接可见。':
    'Don’t hide the only main action with a large menu; high-frequency entries should remain directly visible.',
  '不要用分隔线代替真正的标题层级与内容分组。':
    'Don’t use dividers as a substitute for true heading hierarchy and content grouping.',
  '不要用禁用按钮隐藏失败原因；在附近说明需要满足的条件。':
    "Don't hide the reason for failure with a disable button; state the conditions that need to be met nearby.",
  '不要用颜色作为区分危险操作的唯一信息。':
    'Do not use color as the only information to distinguish hazardous operations.',
  '不要用自动播放承载必须阅读或必须操作的内容，用户仍应能通过箭头和页码点主动导航。':
    'Don’t use autoplay for content that must be read or acted upon; users should still be able to actively navigate through arrows and page points.',
  '不要在 Table 内硬编码业务操作；通过 ColumnDef.render 读取当前 row 后组合业务按钮。':
    'Do not hardcode business operations in the Table; read the current row through ColumnDef.render and then combine the business buttons.',
  '不要在 Header、Content 和 Footer 中重复同一组主要操作。':
    "Don't repeat the same set of main operations in Header, Content, and Footer.",
  '不要在 hover 浮层中放置必须完成的操作，触摸设备和键盘用户需要更稳定的点击入口。':
    'Don’t put necessary actions in a hover layer; touch device and keyboard users need a more stable tap entry.',
  '不要在 separator 中嵌套按钮等可聚焦控件，以免与分隔线的键盘交互冲突。':
    "Do not nest focusable controls such as buttons within a separator to avoid conflicting with the separator's keyboard interaction.",
  '不要在可点击的 Header 内嵌套链接或按钮；有额外操作时传入 trigger，改用独立按钮触发。':
    'Do not nest links or buttons within clickable headers; pass in triggers when there are additional operations, and use independent button triggers instead.',
  '不要在内容可以自然撑开页面时强行嵌套滚动区域。':
    'Don’t force nested scrolling areas when the content would naturally stretch the page.',
  '不要在同一操作组中放置多个同等强调的主要按钮。':
    "Don't place multiple primary buttons with equal emphasis in the same action group.",
  '不要在同一应用根部挂载多个未指定 id 的全局 Provider，否则同一通知可能重复展示。':
    'Do not mount multiple global providers with unspecified IDs at the root of the same application, otherwise the same notification may be displayed repeatedly.',
  '不要在只有一到两层页面时增加没有导航价值的 Breadcrumb。':
    'Don’t add breadcrumbs that have no navigational value when you only have one or two levels of pages.',
  '不要只靠渐隐表达内容可滚动；长列表仍应保留滚动条或明确的操作提示。':
    'Don’t just rely on fades to convey that content is scrollable; long lists should still have scroll bars or clear action prompts.',
  '不要只设置固定高度，否则响应式宽度下会失去目标比例。':
    "Don't just set a fixed height or you'll lose the target proportions with a responsive width.",
  '不引入额外 Message 抽象，直接组合 Bubble、Avatar 与 ScrollArea 构建双向会话。':
    'Without introducing additional Message abstraction, directly combine Bubble, Avatar and ScrollArea to build a two-way conversation.',
  布局: 'layout',
  布局规则: 'layout rules',
  布局模板: 'layout template',
  '步骤 3 / 4 · 切换流量': 'Step 3/4 · Switch traffic',
  部分选择: 'partial selection',
  部署策略: 'Deployment strategy',
  部署记录: 'Deployment record',
  部署进度: 'Deployment progress',
  部署详情: 'Deployment details',
  '菜单名称和命令名称应直接表达动作，不要仅依赖图标。':
    "Menu and command names should express actions directly and don't rely solely on icons.",
  '菜单相对触发器的对齐方式。':
    'The alignment of the menu relative to the trigger.',
  '菜单项保持明确的动作名称；仅图标不足以表达操作含义。':
    'Menu items keep clear action names; icons alone are not enough to convey the meaning of the action.',
  '菜单优先出现的方向；空间不足时会自动避让。':
    'The direction in which the menu appears first; it will be automatically avoided when there is insufficient space.',
  参与评论: 'Participate in comments',
  操作: 'operate',
  '操作（居中）': 'Operation (centered)',
  '操作较多时保留一个高频动作，其余收进菜单，避免操作列无限变宽。':
    'When there are many operations, keep one high-frequency action and put the rest into the menu to prevent the operation column from becoming infinitely wide.',
  '操作较复杂时先封装为一个业务节点，再传给 actions。':
    'When the operation is more complex, it is first encapsulated into a business node and then passed to actions.',
  '操作文案应说明下一步，例如“清除筛选”或“创建项目”，不要只写“确定”。':
    'Action copy should describe the next step, such as "Clear filters" or "Create project," not just "OK."',
  '操作已经结束，需要短暂确认结果，但不应打断用户当前任务。':
    "The operation has ended and requires a brief confirmation of the result, but should not interrupt the user's current task.",
  '操作与某个按钮、对象或局部上下文紧密相关。':
    'Actions are tied to a button, object, or local context.',
  '侧进入，不覆盖整个页面。':
    'Enter sideways and do not cover the entire page.',
  侧栏: 'sidebar',
  侧栏关闭: 'Sidebar close',
  侧栏开启: 'Sidebar open',
  测试: 'test',
  层级菜单: 'Hierarchical menu',
  查看: 'Check',
  '查看 5 条未读消息': 'View 5 unread messages',
  '查看 Card 文档': 'View Card documentation',
  '查看 Web Console': 'View Web Console',
  查看版本: 'View version',
  '查看测试结果。': 'View test results.',
  '查看常见问题与支持渠道。': 'View FAQs and support channels.',
  查看发布负责人: 'View the release owner',
  '查看分支保护与合并规则。': 'View branch protection and merge rules.',
  查看构建产物: 'View build products',
  查看计划: 'View plan',
  '查看设计系统 →': 'View design systems →',
  查看审计进度: 'View audit progress',
  '查看实现代码。': 'View the implementation code.',
  '查看团队最近完成的操作。': 'See what your team has recently done.',
  查看未读消息: 'View unread messages',
  查看文档: 'View documentation',
  查看项目: 'View items',
  '查看项目状态、负责人和近期变化。':
    'View project status, owners, and recent changes.',
  '查看组件接入与升级说明。': 'View component access and upgrade instructions.',
  '查看组件实现代码。': 'View the component implementation code.',
  查询: 'Query',
  产品: 'product',
  产品更新: 'product updates',
  产品级大菜单: 'Product level menu',
  '产品具有文件、编辑、视图等跨页面或跨内容的全局命令。':
    'The product has global commands for file, edit, view, etc. that span pages or content.',
  '常规数据列表优先使用组装好的 Table；它保留 Table 能力并补齐数据状态与默认交互。':
    'Regular data lists preferentially use the assembled Table; it retains Table capabilities and completes data state and default interactions.',
  '常规文本选项优先使用 options，由 Radio.Group 统一生成标签与值。':
    'Conventional text options use options first, and Radio.Group generates labels and values ​​uniformly.',
  '常规业务数据列表默认使用 Table，由 data 与 ColumnDef 驱动完整表格。':
    'General business data lists use Table by default, with data and ColumnDef driving the complete table.',
  '常见空状态直接配置图标、标题、说明和操作；场景变化时只替换对应 props。':
    'Common empty states directly configure icons, titles, descriptions and operations; only the corresponding props are replaced when the scene changes.',
  常用操作: 'Common operations',
  常用命令: 'Common commands',
  场景: 'scene',
  '超过 99 条未读消息': 'More than 99 unread messages',
  '超过数量后将中间路径收进可操作的省略菜单。':
    'After the quantity is exceeded, the intermediate path will be included in the operable omission menu.',
  超小按钮: 'Extra small button',
  撤销: 'Cancel',
  陈: 'List',
  陈青: 'Chen Qing',
  '陈青 · 产品': 'Chen Qing · Products',
  陈序: 'Chen Xu',
  成功: 'success',
  成功率: 'success rate',
  '成功率（靠右）': 'Success rate (to the right)',
  成员: 'member',
  '成员会收到一封加入工作区的邮件。':
    'Members will receive an email to join the workspace.',
  成员列表: 'Member list',
  成员权限: 'Member permissions',
  '承载多人编辑光标、文档增量同步以及离线重连后的冲突合并。':
    'It supports multi-person editing cursors, incremental document synchronization, and conflict merging after offline reconnection.',
  '承载分组链接、说明或推荐入口的弹出内容。':
    'Pop-up content that carries group links, instructions, or recommended entry points.',
  '承载卡片主要信息的内容区域。':
    'The content area that carries the main information of the card.',
  '承载普通命令、标题、分隔线、勾选项、单选组及二级菜单。':
    'Carrying common commands, titles, separators, check options, radio groups and secondary menus.',
  '承载主要内容并占据布局中的剩余空间。':
    'Hosts the main content and takes up the remaining space in the layout.',
  '持续展示重要的页面内提示。': 'Continuously display important in-page tips.',
  尺寸: 'size',
  '尺寸低于 size 中的最小值时是否允许面板折叠。':
    'Whether to allow panel collapse when the size is below the minimum value in size.',
  '尺寸应跟随容器密度，而不是用来表达重要程度。默认尺寸适合大多数表单与页面。':
    'Size should follow container density and not be used to express importance. The default size fits most forms and pages.',
  '尺寸跟随容器密度，不用于表达操作的重要程度。':
    'Size follows container density; it does not express the importance of an action.',
  尺寸约束与分隔线覆盖: 'Size constraints and divider overrides',
  抽屉只覆盖当前父容器: 'The drawer only covers the current parent container',
  初始比例: 'initial ratio',
  处理中: 'Processing',
  '触发操作或事件的基础控件，用于提交、确认、导航及页面中的即时操作。':
    'Basic controls that trigger operations or events, used for submission, confirmation, navigation, and immediate operations on the page.',
  '触发单个明确操作的基础按钮。':
    'A base button that triggers a single explicit action.',
  '触发器需要提供可理解的文字或 aria-label，并支持 Enter、Space 和方向键打开菜单。':
    'The trigger needs to provide understandable text or aria-label, and support Enter, Space, and arrow keys to open the menu.',
  '传 true 以默认 3 秒间隔自动播放，或直接传入正数设置切换秒数。':
    'Pass true to automatically play at the default 3-second interval, or directly pass in a positive number to set the switching seconds.',
  '传入 container 后，Portal、视口与面板都限制在指定父容器内，四个方向仍保持一致。':
    'After passing in container, the portal, viewport and panel are all limited to the specified parent container, and the four directions remain consistent.',
  '传入 Dialog 配置后以命令弹窗展示，否则渲染内联命令列表。':
    'After passing in the Dialog configuration, it will be displayed in a command pop-up window, otherwise an inline command list will be rendered.',
  '传入 header 和 content 即可创建一个可展开区域；省略 trigger 时，整个 Header 负责切换状态。':
    'Pass in header and content to create an expandable area; when trigger is omitted, the entire Header is responsible for switching states.',
  '传入 icon=null，保留 Header 触发能力但不显示指示图标。':
    'Pass in icon=null to retain the Header triggering ability but not display the indicator icon.',
  '传入 value 即可展示带逐位滚动反馈的数值。':
    'Pass in value to display values ​​with bit-by-bit scrolling feedback.',
  '传入链接地址后使用原生 a 元素，否则渲染为普通 div。':
    'Use the native a element after passing in the link address, otherwise it will be rendered as an ordinary div.',
  '传入链接或按钮元素，使整个附件成为对应触发区域。':
    'Pass in a link or button element to make the entire attachment the corresponding trigger area.',
  '创建第一个项目开始使用组件库。':
    'Create your first project to start using the component library.',
  创建副本: 'Create a copy',
  '创建通知 Context，并根据 scope 渲染全局或局部 Toaster。':
    'Create a notification Context and render a global or local Toaster based on scope.',
  垂直方向: 'vertical direction',
  '垂直方向适合调音台、参数面板等纵向控制场景。':
    'The vertical direction is suitable for vertical control scenarios such as mixers and parameter panels.',
  垂直分隔: 'vertical separation',
  '垂直分隔线需要父容器具有明确高度或可拉伸的高度。':
    'Vertical dividers require the parent container to have an explicit height or a stretchable height.',
  '垂直线分隔同一行内并列的操作、状态或元信息。':
    'Vertical lines separate operations, status, or metainformation that appear side by side on the same line.',
  纯文本摘要: 'plain text summary',
  '此操作无法撤销。': 'This action cannot be undone.',
  次: 'Second-rate',
  次构建: 'build',
  次要: 'secondary',
  次要操作: 'minor operations',
  '从 Carousel 外部滚动、播放或暂停；底层轮播实例不会暴露。':
    'Scroll, play, or pause from outside the Carousel; the underlying carousel instance is not exposed.',
  '从标签与值配置生成一组 Checkbox。':
    'Generate a set of checkboxes from a configuration of labels and values.',
  '从标签与值配置生成一组 Radio。':
    'Generate a set of Radios from a configuration of labels and values.',
  '从弹出列表中选择预定义值。':
    'Select a predefined value from the pop-up list.',
  '从固定候选项中选择一个或多个值，并使用同一套交互直接过滤较长列表。':
    'Select one or more values ​​from fixed candidates and filter longer lists directly using the same set of interactions.',
  '从互斥选项中选择一个值。': 'Select a value from mutually exclusive options.',
  从上方: 'from above',
  '从设计快速进入实现与调试。':
    'Quickly move from design to implementation and debugging.',
  '从视口或父容器边缘展示自适应临时面板。':
    'Presents an adaptive temporary panel from the edge of the viewport or parent container.',
  '从外部滚动、播放或暂停轮播。':
    'Scroll, play or pause the carousel externally.',
  '从稳定的基础开始构建产品。': 'Build a product from a stable foundation.',
  从下方: 'from below',
  '从一个明确的触发器展开临时操作列表，可承载普通命令、选择状态和分层操作。':
    'Expand a list of temporary actions from an explicit trigger that can host normal commands, selection states, and hierarchical actions.',
  从右侧: 'from the right',
  从右侧打开: 'Open from the right',
  从左侧: 'from the left',
  从左侧打开: 'Open from the left',
  粗体: 'Bold',
  存储单位: 'storage unit',
  存储配额: 'storage quota',
  存储配额数值: 'Storage quota value',
  错误: 'mistake',
  '错误率 > 2%': 'Error rate > 2%',
  '错误率维持在 0.04%。': 'The error rate remains at 0.04%.',
  '打断当前流程并确认具有重要后果的操作。':
    'Interrupt the current flow and identify actions with important consequences.',
  '打开；窄屏保留触摸拖拽，宽屏使用稳定的边缘面板布局。':
    'Open; narrow screen retains touch drag, wide screen uses stable edge panel layout.',
  '打开“产品”或“资源”，查看不同内容宽度之间的平滑切换。':
    'Open Products or Resources to see smooth transitions between different content widths.',
  '打开菜单的按钮或其他可交互元素。':
    'A button or other interactive element that opens a menu.',
  '打开确认对话框的按钮或其他交互元素。':
    'A button or other interactive element that opens a confirmation dialog.',
  打开设置: 'Open settings',
  打开文件: 'open file',
  '打开一组富导航内容的顶层入口。':
    'Opens a top-level portal for a set of rich navigation content.',
  大: 'big',
  '大、中、小直接展示原始加载图标，尺寸不会隐含按钮高度或其他容器样式。':
    'Large, medium, and small directly display the original loading icon, and the size does not imply button height or other container styles.',
  大按钮: 'big button',
  大号加载: 'Large size loading',
  大量数据与省略: 'Large amounts of data and omissions',
  '大型列表的输入响应时间降低 42%。':
    'Input response time for large lists is reduced by 42%.',
  代码: 'code',
  代码规范检查通过: 'Code specification check passed',
  '带 children 的操作自动形成子菜单；size 统一控制菜单的密度和宽度。':
    'Operations with children automatically form submenus; size uniformly controls the density and width of the menu.',
  带图标的按钮: 'button with icon',
  带校验的邀请表单: 'Invitation form with validation',
  带字数反馈的说明: 'Instructions with word count feedback',
  带自定义翻页器的版本亮点: 'Version highlights with custom page turner',
  待办: 'To-do',
  待定: 'To be determined',
  待确认: 'To be confirmed',
  待审批: 'Pending approval',
  待执行: 'To be executed',
  '单个 Checkbox 表达一个可独立选择的布尔项，标签与控件保持整行可点击。':
    'A single Checkbox represents an independently selectable Boolean item, and the entire row of labels and controls remains clickable.',
  '单个 Toggle 的布尔值变化时调用。':
    'Called when the boolean value of a single Toggle changes.',
  单个按键: 'single button',
  '单屏塞入过多文字会让轮播难以扫读，内容较长时改用列表或分页。':
    'Cramming too much text into a single screen will make the carousel difficult to scan. Use lists or paging instead when the content is longer.',
  单项展开: 'Single item expansion',
  弹性反馈: 'Elastic feedback',
  淡入: 'fade in',
  当前: 'current',
  当前版本: 'Current version',
  '当前单选值变化时调用。': 'Called when the current radio value changes.',
  '当前分隔线在 items 间的顺序索引。':
    'The sequential index of the current separator line among items.',
  '当前负责人：': 'Current person in charge:',
  '当前工作区共有 12 位成员。':
    'There are currently 12 members in the workspace.',
  '当前界面没有足够空间直接展示一组次要操作。':
    'The current interface does not have enough space to directly display a set of secondary operations.',
  '当前面板组的排列方向。':
    'The arrangement direction of the current panel group.',
  当前位置: 'Current location',
  当前选择: 'Current selection',
  '当前选择的日期。': 'The currently selected date.',
  '当前压缩质量：': 'Current compression quality:',
  当前页: 'Current page',
  '当前页面使用 active 状态，并保持链接文字能独立表达目标。':
    'The current page uses the active state and keeps the link text to express the target independently.',
  '当前页面使用 aria-current，视觉分隔符不进入读屏顺序。':
    'The current page uses aria-current, and the visual separators do not enter the screen reading order.',
  '当前页使用 aria-current，上一页和下一页保留明确的可访问名称。':
    'The current page uses aria-current, and the previous and next pages retain explicit accessible names.',
  当前用于: 'Currently used for',
  当前展示: 'Current display',
  当前组件: 'current component',
  导出: 'Export',
  导出为: 'Export as',
  导航: 'navigation',
  '导航 ·': 'Navigation ·',
  导航按钮: 'Navigation buttons',
  '导航地址；设置后渲染为 a 元素，未设置时渲染为原生 button。':
    'Navigation address; when set, it is rendered as an a element; when not set, it is rendered as a native button.',
  导航组件: 'Navigation component',
  '导语与辅助正文。': 'Introduction and supporting text.',
  '地址不能包含空格。': 'The address cannot contain spaces.',
  '的默认结构与最小推荐配置。':
    'The default structure and minimum recommended configuration.',
  '等大于容器的最小宽度，中间列即可横向滚动。':
    'If it is larger than the minimum width of the container, the middle column can be scrolled horizontally.',
  '等待 Auth API 观察窗口结束后开始部署，预计占用 3 个执行实例。':
    'Start deployment after waiting for the Auth API observation window to end, which is expected to occupy 3 execution instances.',
  等待安全审计: 'Waiting for security audit',
  等待发布确认: 'Awaiting release confirmation',
  等待负责人确认: 'Waiting for confirmation from the person in charge',
  '等待前面所有列结束，再独占整行展示发布结论。':
    'Wait for all previous columns to end, and then use the entire row to display the release conclusion.',
  等待视觉回归: 'Waiting for visual return',
  等待选择: 'Waiting for selection',
  '底部操作或补充信息。': 'Bottom operation or supplementary information.',
  第: 'No.',
  '第一个 item 覆盖分隔线；第二个使用全局默认内容':
    'The first item covers the divider; the second uses global default content',
  '点击 Header 收起内容': 'Click Header to collapse content',
  '点击后的回调；禁用状态下不会触发。':
    'Callback after click; will not be triggered when disabled.',
  电平: 'level',
  '调用 success、info、warning、error、loading 或 promise。':
    'Call success, info, warning, error, loading or promise.',
  '调整各数位滚动时的弹簧参数。':
    'Adjust the spring parameters when scrolling each digit.',
  '顶层菜单支持左右方向键切换，菜单内部使用上下方向键移动焦点。':
    'The top-level menu supports left and right arrow keys to switch, and the up and down arrow keys can be used to move the focus inside the menu.',
  '顶层入口和弹层链接支持键盘聚焦与方向键导航。':
    'Top-level entrances and pop-up links support keyboard focus and arrow key navigation.',
  定时发布: 'Release regularly',
  '定位气泡边缘的回应或状态。':
    'Position the response or state at the edge of the bubble.',
  '定义顶层菜单名称、禁用状态和每组内部命令。':
    'Define the top-level menu name, disabled state, and each set of internal commands.',
  '定义访问键、表头、单元格和嵌套列组。':
    'Define access keys, headers, cells, and nested column groups.',
  '定义各面板的内容、稳定标识、尺寸约束和分隔线覆盖。':
    'Define the content, stable identity, dimensional constraints, and divider overrides of each panel.',
  '定义列标题和表头语义；标题过长时通过 Head 的 ellipsis 提供截断与全文 Tooltip。':
    "Define column title and table header semantics; when the title is too long, truncation and full-text Tooltips are provided through Head's ellipsis.",
  动态: 'dynamic',
  '动效会响应 prefers-reduced-motion；不要移除键盘焦点样式。':
    'Animations respond to prefers-reduced-motion; do not remove keyboard focus styles.',
  独立: 'independent',
  '独立 Select 作为输入协议前缀。':
    'Independent Select as input protocol prefix.',
  独立按钮触发: 'Independent button trigger',
  '独立导出的 Group': 'Independently exported Group',
  独立方块: 'independent block',
  独立方块验证码: 'Independent block verification code',
  '独立状态需要用户确认后再随表单提交。':
    'The independent state requires user confirmation before submitting with the form.',
  读取: 'read',
  对应的: 'Corresponding',
  '对应的 Head 与 Cell 设置 fixed="start" 可固定在起始侧，设置 fixed="end" 可固定在末端；多固定列通过 fixedOffset 声明累计偏移。':
    'The corresponding Head and Cell settings fixed="start" can be fixed at the starting side, and fixed="end" can be fixed at the end; multiple fixed columns declare cumulative offsets through fixedOffset.',
  多项展开: 'Multiple expansion',
  '多组内容处于同一层级，并且用户通常只需要查看其中一组。':
    'Multiple sets of content are at the same level, and users typically only need to view one set.',
  二级菜单与顶层状态: 'Secondary menu and top-level status',
  发布: 'release',
  发布被阻止: 'Posting blocked',
  发布成功: 'Posted successfully',
  发布窗口即将开始: 'Publishing window is about to begin',
  '发布窗口将在 22:00 开始': 'The release window will start at 22:00',
  '发布窗口中的服务。': 'Publish the service in the window.',
  发布单: 'release order',
  发布动态: 'Post updates',
  发布负责人: 'Release owner',
  发布负责人是: 'The person responsible for publishing is',
  发布管理: 'Release management',
  '发布和回滚时会通知这些成员。':
    'These members are notified when publishing and rolling back.',
  发布记录: 'Release record',
  发布检查: 'Release check',
  '发布开始和回滚时会通知以下成员。':
    'The following members are notified when a release starts and rolls back.',
  发布列表骨架: 'publish list skeleton',
  发布前自动预检: 'Automatic preflight before publishing',
  发布清单: 'publish list',
  发布日期: 'release date',
  发布失败: 'Publishing failed',
  '发布失败，请检查构建日志': 'Publish failed, please check the build log',
  发布时间: 'Release time',
  发布说明: 'Release Notes',
  发布完成: 'Release completed',
  '发布完成后刷新边缘节点缓存。':
    'Refresh the edge node cache after publishing is complete.',
  发布协调: 'Release coordination',
  发布协作记录: 'Publish collaboration records',
  发布协作消息: 'Post a collaboration message',
  发布协作者: 'Post collaborators',
  发布新版本: 'Release new version',
  发布信息: 'publish information',
  发布已完成: 'Release completed',
  发布暂不可用: 'Release is not available yet',
  发送邀请: 'Send invitation',
  发送邮件: 'Send email',
  法兰克福: 'frankfurt',
  范围选择: 'Range selection',
  方案单选卡: 'Plan radio button',
  方向: 'direction',
  '访问实际渲染的 button 或 a 元素。':
    'Access the actual rendered button or a element.',
  '放置查看详情、重试或关闭等与当前提示直接相关的操作。':
    'Place operations directly related to the current prompt such as viewing details, retrying, or closing.',
  '放置导航、目录或详情的侧边区域。':
    'A side area for navigation, table of contents, or details.',
  '放置与当前提示直接相关的查看、重试或关闭操作。':
    'Place a view, retry, or close action directly related to the current prompt.',
  '非受控模式下的初始标签；省略时自动选择第一个可用标签。':
    'Initial label in uncontrolled mode; automatically selects the first available label when omitted.',
  非受控状态: 'uncontrolled state',
  '分别扩展输入控件、前后缀及块级附加区域的类名。':
    'Extend the class names of the input control, prefix, suffix, and block-level addon regions.',
  分层操作: 'Hierarchical operations',
  分隔: 'separate',
  '分隔线保持可聚焦，并支持方向键调整相邻区域尺寸。':
    'Dividers remain focusable and support directional pad resizing of adjacent areas.',
  '分隔线后一个面板的稳定标识。':
    'Stable identification of a panel behind a divider.',
  '分隔线前一个面板的稳定标识。':
    'Stable identification of the panel before the divider.',
  分页操作: 'paging operation',
  '分页时只把当前页数据传给 Table，由 Pagination 或服务端请求管理页码。':
    'When paging, only the current page data is passed to the Table, and the page number is managed by Pagination or the server request.',
  分支策略: 'branching strategy',
  分组表头: 'Group header',
  '分组表头使用 colgroup/col scope，并保留正确的 colSpan 与 rowSpan 关系。':
    'The group header uses colgroup/col scope and retains the correct colSpan and rowSpan relationship.',
  分组选择: 'Group selection',
  封面设置: 'cover settings',
  封面图: 'cover image',
  服务: 'Serve',
  '服务（靠左）': 'Service (left)',
  '服务说明、最近一次生产部署上下文与异常原因':
    'Service description, latest production deployment context and exception reason',
  '浮层因触发、聚焦或关闭操作变化时调用。':
    'Called when the floating layer changes due to triggering, focusing or closing operations.',
  浮起: 'float',
  '辅助文字仍需满足对比度要求，不要仅依靠较浅颜色表达次要信息。':
    "Support text still needs to meet contrast requirements, and don't rely solely on lighter colors to convey secondary information.",
  '负责，当前状态为': 'Responsible, the current status is',
  负责人: 'person in charge',
  负责人资料: 'Person in charge information',
  '负责生产发布、监控确认与紧急回滚。':
    'Responsible for production release, monitoring confirmation and emergency rollback.',
  负责团队: 'Responsible for the team',
  '附言（可选）': 'PS (optional)',
  '复用经过验证的页面骨架。': 'Reuse proven page skeletons.',
  '复杂页面需要通过嵌套 Layout 组合纵向与横向区域。':
    'Complex pages require combining vertical and horizontal areas through nested layouts.',
  复制: 'copy',
  复制地址: 'Copy address',
  复制链接: 'Copy link',
  '覆盖尺寸、颜色或其他 SVG 样式。':
    'Override dimensions, colors, or other SVG styles.',
  '覆盖当前 item 之后的分隔线内容；传入 null 可隐藏视觉内容。':
    'Overwrites the divider content after the current item; pass null to hide visual content.',
  概览: 'Overview',
  刚刚: 'just',
  高级权限与审计: 'Advanced permissions and auditing',
  '高频更新默认不主动播报；确实需要播报变化时，再设置 aria-live="polite"。':
    'High-frequency updates are not actively reported by default; when changes are really needed to be reported, set aria-live="polite".',
  格式工具组: 'Format tool set',
  个人版: 'Personal version',
  个人标识: 'personal identification',
  个人工作区: 'personal workspace',
  '个字符。': 'characters.',
  '根节点使用带有 breadcrumb 名称的 nav，路径使用有序列表。':
    'Use a nav with a breadcrumb name for the root node and an ordered list for the path.',
  '根据 icon、title、description 和 actions 生成完整空状态。':
    'Generate a complete empty state based on icon, title, description and actions.',
  '根据 indicatorPosition': 'According to indicatorPosition',
  '根据 value、places 和格式属性渲染可访问的滚动数值，并提供前后缀与样式扩展点。':
    'Renders accessible scrolling values ​​based on value, places, and format attributes, and provides prefixes, suffixes, and style extension points.',
  '根据当前记录扩展基础 Table Row 的类名、事件和原生属性。':
    'Extends the class name, events, and native properties of the underlying Table Row based on the current record.',
  '根据当前值、原始数据行和行索引渲染自定义内容或操作。':
    'Render custom content or actions based on the current value, raw data row, and row index.',
  '根据下方预览组合该模块导出的组件。':
    'Assemble the components exported by this module according to the preview below.',
  跟进: 'follow up',
  跟随系统: 'Follow the system',
  更多操作: 'More actions',
  更新记录: 'Update record',
  更新时间: 'Update time',
  更新组件文档: 'Update component documentation',
  '工具栏中的一个状态需要立即开启或关闭。':
    'A state in the toolbar needs to be turned on or off immediately.',
  工作区: 'workspace',
  工作区地址: 'Workspace address',
  工作区名称: 'workspace name',
  工作区内容: 'Workspace content',
  工作区资料: 'Workspace information',
  工作台: 'workbench',
  公开邮箱: 'Public email',
  公开资料: 'public information',
  共: 'common',
  '共 1 项': '1 item in total',
  共享空间: 'shared space',
  '勾选完成的事项，文字会自动进入完成态。':
    'Check the completed items and the text will automatically enter the completed state.',
  '构建 #1842 已通过。': 'Build #1842 passed.',
  '构建 #1842 已完成': 'Build #1842 Completed',
  '构建、类型检查和 42 项端到端用例均已通过。':
    'Build, type checking, and 42 end-to-end use cases passed.',
  '构建包含内容和操作的通用列表项。':
    'Build generic list items with content and actions.',
  构建产物已就绪: 'The build product is ready',
  构建计数: 'build count',
  构建通过: 'Build passes',
  '构建一致、可访问的产品界面。':
    'Build consistent, accessible product interfaces.',
  '固定列需要明确列宽；多列同时固定时使用 fixedOffset 声明前面固定列的累计宽度。':
    'Fixed columns require clear column width; when multiple columns are fixed at the same time, use fixedOffset to declare the cumulative width of the previous fixed columns.',
  固定列与横向滚动: 'Fixed columns and horizontal scrolling',
  '固定末尾列；再给': 'Fixed end column; give again',
  '固定起始列，或设置': 'Fixed starting column, or set',
  '固定视口，仅切换面板内容': 'Fixed viewport, only switches panel content',
  '固定需要展示的数位；使用小数点字符串分隔整数和小数位，省略时根据 value 自动推导。':
    'Fixed the number of digits to be displayed; use a decimal point string to separate the integer and decimal places. If omitted, it will be automatically deduced based on value.',
  关闭: 'closure',
  关键安全事件始终开启: 'Critical security events are always on',
  '关联目标表单控件的 id，使标签可点击并提供可访问名称。':
    'Associate the id of the target form control, make the label clickable and provide an accessible name.',
  观察: 'observe',
  观察窗口: 'observation window',
  '观察后全量发布。': 'Full release after observation.',
  观察中: 'Under observation',
  管理: 'manage',
  '管理触发方式、延迟、受控或非受控打开状态，并为所有子组件提供上下文。':
    'Manage triggering, delays, controlled or uncontrolled open status, and provide context for all subcomponents.',
  '管理当前搜索值。': 'Manage current search values.',
  '管理多个 Checkbox 的已选值、禁用状态与布局。':
    'Manage the selected values, disabled states, and layout of multiple Checkboxes.',
  '管理方向、自适应行为、父容器、开关状态与手势参数。':
    'Manage orientation, adaptive behavior, parent container, switch state, and gesture parameters.',
  管理项目: 'Manage projects',
  '管理一组 Radio 的互斥值、键盘导航与布局。':
    "Manage a set of Radio's mutually exclusive values, keyboard navigation, and layout.",
  归档: 'Archive',
  归档草稿: 'Archive draft',
  归档记录: 'Archived records',
  归档原因: 'Reason for filing',
  '滚动条在交互时出现、始终显示，或完全隐藏。':
    'Scrollbars appear upon interaction, are always shown, or are hidden completely.',
  还没有生产发布: 'No production release yet',
  还没有项目: 'No projects yet',
  还需输入: 'Still need to enter',
  号加载图标: 'No. loading icon',
  耗时: 'time consuming',
  合并构建产物与变更摘要: 'Merge build artifacts and change summaries',
  '核对颜色、圆角与间距变量': 'Check color, fillet and spacing variables',
  横向: 'Horizontal',
  '横向标签溢出时，前后按钮提供可本地化名称；触控滚动和焦点自动带出仍然可用。':
    'When horizontal tabs overflow, the front and rear buttons provide localizable names; touch scrolling and focus auto-bringing are still available.',
  '横向布局允许显示的最大列数。':
    'The maximum number of columns allowed to be displayed in landscape layout.',
  '横向布局中单个选项的期望最小宽度。':
    'The desired minimum width of a single option in a landscape layout.',
  横向附件: 'horizontal attachment',
  '横向浏览同级内容，始终提供景深动效，并支持点位插槽、自动播放、首尾循环和自定义翻页器。':
    'Browse same-level content horizontally, always provide depth-of-field animation, and support point slots, auto-play, start-to-end loops, and custom page turners.',
  横向文件行: 'Horizontal file row',
  横向文章封面: 'Horizontal article cover',
  '红点没有可见文字，应通过 indicatorLabel 说明通知含义。':
    'The red dot has no visible text, and the notification meaning should be explained through indicatorLabel.',
  后端值班: 'Backend duty',
  后置选择控件: 'rear selection control',
  '候选弹层打开或关闭时调用。':
    'Called when the candidate elastic layer is opened or closed.',
  '候选项固定时仍使用同一 Select，通过分组、分隔线和禁用项明确列表结构。':
    'The same Select is used when candidates are fixed, with groupings, separators, and disabled items clarifying the list structure.',
  '候选项固定时使用 Select；列表较长时直接输入关键词过滤，无需切换组件。':
    'Use Select when the candidate items are fixed; when the list is long, directly enter keywords to filter without switching components.',
  '候选项固定时使用 Select；列表较长时直接输入关键词过滤。':
    'Use Select when the candidates are fixed; directly enter keywords to filter when the list is long.',
  '候选项较多且用户知道关键词时，直接输入过滤、清除并重新选择。':
    'When there are many candidates and the user knows the keywords, they can directly enter to filter, clear and re-select.',
  '候选项较少，并希望用户直接看到、比较所有选项。':
    'There are fewer candidates, and you want users to see and compare all options directly.',
  华北: 'North China',
  华东: 'East China',
  滑动: 'slide',
  画布: 'canvas',
  欢迎回来: 'welcome back',
  环境: 'environment',
  环境由: 'environment consists of',
  环境状态: 'environmental status',
  缓存刷新: 'Cache refresh',
  灰度发布策略: 'Grayscale release strategy',
  '徽标视觉样式；文本徽标默认使用 default，数字和红点通知默认使用 destructive。':
    'Logo visual style; default for text logos and destructive for numbers and red dot notifications.',
  '徽标文本或通知标记的锚点。': 'Anchor for logo text or notification mark.',
  回复讨论并提及团队成员: 'Reply to discussions and mention team members',
  回滚: 'rollback',
  回滚方案: 'Rollback scenario',
  回滚镜像即将过期: 'Rollback image is about to expire',
  '回滚镜像已确认可用。': 'Rollback image confirmed to be available.',
  '会显示在评论、提交记录和成员列表中。':
    'Will appear in comments, commit records, and member lists.',
  混合控件组合: 'Mixed control combination',
  混音电平: 'mix level',
  活动记录: 'activity record',
  或: 'or',
  获取帮助: 'Get help',
  基础卡片: 'Basic cards',
  基础输入: 'basic input',
  基础用法: 'Basic usage',
  基础组件: 'Basic components',
  '激活标签变化时调用，回传新的 value。':
    'Called when the activation label changes, returning the new value.',
  '即时切换设置的开关状态。': 'Instantly switch settings on and off.',
  记录: 'Record',
  '记录新增能力、行为调整、迁移方式，以及升级前需要确认的兼容性事项。':
    'Record new capabilities, behavior adjustments, migration methods, and compatibility matters that need to be confirmed before upgrading.',
  '加载前复刻最终内容的层级和密度，避免数据出现时产生明显布局跳动。':
    'Replicate the level and density of the final content before loading to avoid obvious layout jumps when data appears.',
  加载效果: 'Loading effect',
  '加载中、请求失败和权限不足不是空数据，应分别使用 Skeleton、Alert 或专门的权限反馈。':
    'Loading, request failure and insufficient permissions are not empty data and should use Skeleton, Alert or specialized permission feedback respectively.',
  '间距、对齐与响应式边界。': 'Spacing, alignment and responsive borders.',
  监控: 'monitor',
  '监控 Web Console': 'Monitor Web Console',
  '减少 18': 'reduced by 18',
  '建立表格、滚动容器和表头、表体、汇总等语义区域。':
    'Create tables, scrolling containers and semantic areas such as table headers, table bodies, and summaries.',
  '建立轮播上下文、可滚动容器与单个景深内容项。':
    'Create carousel context, scrollable containers, and individual depth-of-field content items.',
  '建议在发布前重新构建。': 'It is recommended to rebuild before publishing.',
  健康: 'healthy',
  渐隐: 'fade',
  键盘快捷键: 'keyboard shortcuts',
  '键盘路径、焦点反馈与读屏顺序都跟随 DOM 语义，不依赖卡片当前被分配到哪一列。':
    'Keyboard paths, focus feedback, and screen reading order all follow DOM semantics and do not depend on which column the card is currently assigned to.',
  '键盘切换时，内容沿操作方向移动并保持上下文。':
    'When the keyboard switches, the content moves in the direction of the operation and maintains context.',
  '将 Badge 渲染到头像锚点': 'Render the Badge to the avatar anchor point',
  '将 Portal、视口和面板绑定到指定父容器；父容器需要建立定位和裁切上下文。':
    'Binds portals, viewports, and panels to the specified parent container; the parent container is required to establish positioning and clipping context.',
  '将 Sidebar 放在内容之后即可形成右侧辅助区，适合目录、属性和上下文详情。':
    'Placing Sidebar after content creates a right-side auxiliary area suitable for directories, properties, and contextual details.',
  '将 trigger 设为 hover 后，鼠标悬停或键盘聚焦都会展示关联信息，适合实体预览。':
    'After setting the trigger to hover, related information will be displayed on mouse hover or keyboard focus, which is suitable for entity preview.',
  '将不同高度的内容持续放入当前最短列，并允许指定内容独占整行。':
    'Continuously place content of different heights into the current shortest column, and allow specified content to occupy the entire row.',
  '将菜单绑定到明确的内容区域，右键或键盘菜单键打开与当前对象相关的操作。':
    'Bind menus to explicit content areas, and right-click or keyboard menu keys to open actions related to the current object.',
  'placement 表示浮层相对触发器的位置；边缘位置保持浮层边缘对齐，并将箭头固定在对应边缘的安全区。':
    'placement defines the popup position relative to the trigger; edge placements align popup edges and keep the arrow within the corresponding edge safe area.',
  '箭头默认匹配 placement 的落点，也可将其隐藏。':
    'The arrow matches the placement anchor point by default and can also be hidden.',
  '将错误语义和颜色传递给整个字段。':
    'Pass error semantics and color to the entire field.',
  '将互斥选项扩展为整行可点击的卡片，同时保留原生单选语义。':
    'Expand mutually exclusive options into an entire row of clickable cards while retaining native radio-select semantics.',
  '将紧密相关的操作收进同一个视觉组，并保持操作语义单一。':
    'Group closely related operations into the same visual group and keep the operation semantics single.',
  '将跨内容生效的应用命令放在稳定的顶层位置，并为高频命令提供快捷键。':
    'Place application commands that take effect across content in a stable top-level position, and provide shortcut keys for high-frequency commands.',
  '将气泡对齐到消息流起始侧或末尾侧。':
    'Align the bubble to the beginning or end of the message flow.',
  '将文本徽标渲染为原生链接；通知模式应把链接作为 children。':
    'Render text logos as native links; notification mode should treat links as children.',
  '将文件类型、名称、处理状态和操作排在同一行，适合列表与消息附件。':
    'Arrange file type, name, processing status and actions on the same line, suitable for lists and message attachments.',
  '将展开指示器放在标题起始侧或末端。':
    'Place the expansion indicator at the beginning or end of the title.',
  '降低动态效果时会自动取消位移，仅保留即时切换。':
    'When reducing the dynamic effect, the displacement is automatically canceled, leaving only instant switching.',
  交叉轴居中: 'Center cross axis',
  交叉轴: 'Cross axis',
  交叉轴起点: 'Cross axis starting point',
  交叉轴与主轴对齐: 'Cross axis aligned with main axis',
  交叉轴终点: 'cross axis end point',
  '交互式内容使用 click 模式；仅提供一句简短说明时优先使用 Tooltip。':
    'Use click mode for interactive content; use Tooltips first when providing only a brief description.',
  胶囊: 'capsule',
  '胶囊、线型、描边和柔和样式覆盖不同层级；centered 可直接让标签列表居中。':
    'Capsule, line, stroke and soft styles cover different levels; centered can directly center the label list.',
  '较上月 +12%': '+12% compared to last month',
  '接收 items，并统一完成内容包装、测量、最短列分配和跨列布局。':
    'Receive items and uniformly complete content packaging, measurement, shortest column allocation and cross-column layout.',
  接收产品更新: 'Receive product updates',
  '接收单行文本或特定格式内容。':
    'Receive a single line of text or content in a specific format.',
  '接收单行文本与原生输入类型。':
    'Accepts single line text and native input types.',
  '接收多行文本，并与 Input 共享状态与样式约定。':
    'Receives multiple lines of text and shares state and style conventions with Input.',
  '接收固定长度验证码，并使用 variant 切换连接或独立方块布局。':
    'Receive fixed-length verification codes and use variants to switch connected or independent block layouts.',
  '接收完整数据集合，并通过渲染函数只创建当前可视区域与缓冲范围内的 Row。':
    'Receive the complete data set and create only the Rows within the current visual area and buffer range through the rendering function.',
  '接收字段值、事件和状态，并渲染对应控件结构。':
    'Receive field values, events and status, and render the corresponding control structure.',
  节点菜单与视觉样式: 'Node menus and visual styles',
  结果: 'result',
  '解释键盘快捷方式。': 'Keyboard shortcuts explained.',
  '解释无数据状态并提供下一步。':
    'Explain the no-data status and provide next steps.',
  界面偏好设置: 'Interface preferences',
  界面设置: 'Interface settings',
  今天: 'today',
  '今天 14:30 · 由 Heliannuuthus 更新':
    'Today 14:30 · Updated by Heliannuuthus',
  '今天 20:36': 'Today 20:36',
  '今天 21:48': 'Today 21:48',
  '今晚 22': 'Tonight 22',
  '今晚 22:00 发布窗口中的服务。': 'Service tonight at 22:00 release window.',
  今晚的发布窗口: "Tonight's release window",
  '今晚发布窗口中的服务。': "Services in tonight's release window.",
  '仅图标按钮必须提供 aria-label 或可见文本。':
    'Only icon buttons must provide an aria-label or visible text.',
  仅影响下一次生产发布: 'Only affects the next production release',
  '仅用于必须由用户确认的警告或危险操作；成功和普通信息应使用 Alert 或 Toast。':
    'Use only for warnings or dangerous actions that must be acknowledged by the user; success and general messages should use Alert or Toast.',
  '仅用于装饰时，不要让分隔线进入键盘焦点顺序。':
    'When used only for decoration, do not let dividers enter the keyboard focus order.',
  紧凑: 'compact',
  紧凑标签: 'compact label',
  进入发布中心: 'Enter the release center',
  进入全屏: 'Go to full screen',
  进行中: 'in progress',
  '禁用 Select。': 'Disable Select.',
  '禁用触发器与日历日期选择。': 'Disable trigger and calendar date selection.',
  '禁用当前操作；链接模式下同步设置 aria-disabled 并阻止导航。':
    'Disables the current operation; synchronizes aria-disabled in linked mode and prevents navigation.',
  '禁用当前顶层菜单及其触发项。':
    'Disable the current top-level menu and its trigger items.',
  '禁用该标签并跳过鼠标与键盘激活。':
    'Disable this label and skip mouse and keyboard activation.',
  '禁用上下文菜单触发。': 'Disable context menu triggering.',
  '禁用输入并阻止聚焦和编辑。':
    'Disables input and prevents focus and editing.',
  '禁用整个 Accordion 或单个 AccordionItem。':
    'Disable the entire Accordion or individual AccordionItem.',
  '禁用整个 Radio.Group 或单个 Radio。':
    'Disable the entire Radio.Group or a single Radio.',
  '禁用状态用于暂时不可执行的操作；加载状态应保留原有宽度并向用户解释进度。':
    'The disabled state is used for operations that are temporarily unavailable; the loading state should retain its original width and explain progress to the user.',
  '禁用表示暂不可用；加载状态保留原有宽度并说明进度。':
    'Disabled means temporarily unavailable; loading keeps the original width and communicates progress.',
  景深轮播与点位位置: 'Depth of field carousel and point position',
  警告: 'warn',
  静态: 'static',
  静音: 'mute',
  镜面扫光: 'Mirror sweep',
  '镜像将在 2 小时后清理，建议在发布前重新构建。':
    'The image will be cleaned after 2 hours and it is recommended to rebuild before publishing.',
  就绪: 'ready',
  '局部 Provider 会创建独立通知通道，并将 Toast 约束在最近的定位容器中，不覆盖整个页面。':
    'The local Provider will create an independent notification channel and constrain the Toast to the nearest positioning container without covering the entire page.',
  局部导航与对齐: 'Local navigation and alignment',
  局部加载状态: 'Partial loading status',
  '局部内容正在刷新、同步或生成，且预计很快完成。':
    'Partial content is being refreshed, synced, or generated and is expected to be completed soon.',
  局部筛选: 'local screening',
  局部通知: 'local notification',
  '局部通知的父容器必须可见且尺寸稳定，避免通知被意外裁切到无法阅读。':
    'The parent container of a partial notification must be visible and dimensionally stable to prevent the notification from being accidentally cropped to the point of being unreadable.',
  '决定渲染纵向、横向或两个方向的滚动条。':
    'Determines whether to render scrollbars in portrait, landscape, or both directions.',
  '卡片标题；存在时自动生成 Header。':
    'Card title; automatically generates Header when it exists.',
  '卡片底部的补充信息与操作区域。':
    'Supplementary information and operation area at the bottom of the card.',
  '卡片根容器，负责变体、背景、边框、圆角和整体间距。':
    'The card root container, responsible for variations, backgrounds, borders, rounded corners, and overall spacing.',
  '卡片需要根据容器宽度自动显示一至多列，并紧接当前最短列继续排列。':
    'The card needs to automatically display one or more columns according to the width of the container, and continue to be arranged immediately after the current shortest column.',
  '卡片主标题区域。': 'The main title area of ​​the card.',
  '卡片主体内容。': 'The main content of the card.',
  开发: 'develop',
  开发工具: 'development tools',
  '开关应立即生效，并明确说明影响范围。':
    'The switch should be effective immediately and clearly state the scope of effect.',
  '开关状态变化时立即调用。':
    'Called immediately when the switch state changes.',
  开启: 'turn on',
  '开启自动播放后，动态内容不会持续触发读屏播报；系统要求减少动态效果时会停止自动播放和景深过渡。':
    'After auto-play is turned on, dynamic content will not continue to trigger screen reading announcements; when the system requires reducing dynamic effects, auto-play and depth-of-field transitions will be stopped.',
  '开始切换 10% 生产流量。': 'Start switching to 10% production flow.',
  开始使用: 'Get started',
  靠近标题: 'near title',
  '可单独复用的滚动条部件，支持纵向、横向及自动或常驻可见策略。':
    'A separately reusable scroll bar component that supports vertical, horizontal, and automatic or permanent visibility strategies.',
  可导航的发布动态: 'Navigable publishing feeds',
  可调整的工作区: 'Adjustable work area',
  可滚动内容: 'scrollable content',
  可靠性: 'reliability',
  可选: 'Optional',
  '可选的抽屉触发元素；受控场景可省略。':
    'Optional drawer trigger element; can be omitted for controlled scenes.',
  '可选的对话框触发元素；受控场景可省略。':
    'Optional dialog trigger element; can be omitted for controlled scenes.',
  '可选的展开态指示器，适合加号/减号等两态图标。':
    'Optional expanded state indicator, suitable for two-state icons such as plus sign/minus sign.',
  可选视图状态: 'Optional view state',
  可用率: 'Availability',
  '控制 Card 的层级表达，可选择阴影、描边或透明容器。':
    'Control the hierarchical expression of the Card, you can choose shadow, stroke or transparent container.',
  '控制菜单项密度和菜单最小宽度。':
    'Control menu item density and menu minimum width.',
  '控制单个内容区域展开收起。':
    'Control the expansion and collapse of a single content area.',
  '控制单项按普通列宽排列，或等待当前各列结束后独占整行。':
    'Control single items to be arranged according to normal column width, or wait for the end of each column to occupy the entire row.',
  '控制弹层相对导航根节点的水平对齐方式。':
    'Controls the horizontal alignment of the elastic layer relative to the navigation root node.',
  '控制当前页两侧保留多少个相邻页码。':
    'Controls how many adjacent page numbers are retained on both sides of the current page.',
  '控制顶层菜单栏与触发项的整体密度。':
    'Controls the overall density of top-level menu bars and trigger items.',
  '控制方向键导航到边界后是否循环。':
    'Controls whether the arrow keys loop after navigating to the boundary.',
  '控制关闭面板是否保留在 DOM，或允许浏览器页内查找展开。':
    'Controls whether the closed panel remains in the DOM, or allows the browser to find expansion within the page.',
  '控制可独立选择的布尔选项。':
    'Controls independently selectable Boolean options.',
  '控制内置反馈：悬停、触摸或聚焦时轻微缩放整体，拖拽越界时仅边缘内容在透明安全区内偏移并回弹，不改变轨道长度；减少动态效果偏好下自动停用。':
    'Control built-in feedback: slightly scale the whole when hovering, touching or focusing. When dragging out of bounds, only the edge content is offset and rebounds within the transparent safe zone without changing the track length; automatically deactivated under the Reduce Dynamic Effect preference.',
  '控制文字与路径项的整体密度。':
    'Controls the overall density of text and path items.',
  '控制右上角的标准关闭操作。':
    'Controls the standard closing action in the upper right corner.',
  '控制折叠前后保留的路径项数量。':
    'Controls the number of path items retained before and after folding.',
  '控制整组操作在单元格内靠起始侧、居中或靠末端。':
    'Control the entire group of operations to be on the starting side, center, or end of the cell.',
  跨控件紧凑组合: 'Compact combination across controls',
  跨列内容: 'Cross-column content',
  快捷键: 'shortcut key',
  '快捷键文本只提供提示；应用仍需自行注册对应的全局键盘命令。':
    'Shortcut text only provides hints; apps still need to register the corresponding global keyboard commands themselves.',
  '扩展 Card 根节点样式。': 'Extend the Card root node style.',
  '扩展 Header 或 Header 与独立触发按钮所在行的样式。':
    'Extend the style of the Header or the row of Header and independent trigger buttons.',
  '扩展 panel 和 separator 语义槽的统一样式。':
    'Unified styling that extends panel and separator semantic slots.',
  '扩展 table 或各语义分区的样式。':
    'Extend the style of a table or semantic partition.',
  '扩展 Tabs 根容器样式。': 'Extends the Tabs root container style.',
  '扩展按钮根节点的行内样式。':
    "Expand the inline style of the button's root node.",
  '扩展按钮根节点样式。': 'Extend button root node style.',
  '扩展包含标题、说明与右侧操作的头部区域。':
    'Expands the header area containing the title, description, and actions on the right.',
  '扩展比例容器样式。': 'Extended scale container style.',
  '扩展标签列表样式。': 'Extended tag list style.',
  '扩展标题下方的辅助说明区域。':
    'Expand the supporting description area below the title.',
  扩展操作: 'Extended operations',
  '扩展当前激活标签指示器样式。':
    'Extends the currently active label indicator style.',
  '扩展对应语义元素的样式。':
    'Extend the style of the corresponding semantic element.',
  '扩展分隔线的尺寸、颜色和间距。': 'Expand divider size, color, and spacing.',
  '扩展根节点或语义插槽样式。': 'Extend root node or semantic slot styles.',
  '扩展根节点行内样式。': 'Extend the root node inline style.',
  '扩展根节点样式。': 'Extend the root node style.',
  '扩展卡片标题区域。': 'Expand the card title area.',
  '扩展卡片底部的补充信息与操作区域。':
    'Expand the supplementary information and operation area at the bottom of the card.',
  '扩展卡片主要内容区域。': 'Expand the main content area of ​​the card.',
  '扩展内层日历样式。': 'Extend the inner calendar style.',
  '扩展数字或红点标记本身的样式。':
    'Expand the style of the number or red dot marker itself.',
  '扩展所有可拖动分隔线的样式。': 'Extend the style of all draggable dividers.',
  '扩展所有面板内容区域的样式。':
    'Styles that extend the content area of ​​all panels.',
  '扩展头部右侧的辅助操作区域。':
    'Expand the auxiliary operating area on the right side of the head.',
  '扩展展开内容区域的样式。': 'Expand the style of the expanded content area.',
  '扩展组件样式。': 'Extend component styles.',
  类型检查通过: 'Type check passed',
  '例如：产品设计师': 'For example: product designer',
  连接: 'connect',
  '连接 react-hook-form 创建的表单控制器。':
    'Connect the form controller created by react-hook-form.',
  '连接 react-hook-form，展示必填校验、错误关联和提交结果。':
    'Connect react-hook-form to display required validation, error correlation and submission results.',
  '连接触发元素，并根据 trigger 响应点击、悬停或键盘聚焦。':
    'Connect a trigger element and respond to clicks, hovers, or keyboard focus based on the trigger.',
  '连接打开与关闭操作，并保留焦点返回关系。':
    'Connect the opening and closing operations and preserve the focus return relationship.',
  连接方块: 'Connect blocks',
  连接方块验证码: 'Connect block verification code',
  '连接字段名称、校验规则和表单状态。':
    'Connect field names, validation rules and form status.',
  连接组件与业务状态: 'Connect components to business status',
  联系: 'connect',
  联系销售: 'contact sales',
  '链接打开位置，仅在设置 href 时使用。':
    'Link opening position, only used when setting href.',
  '链接与当前页面的关系，仅在设置 href 时使用。':
    'The relationship between the link and the current page, only used when setting href.',
  两端分布: 'Distribution at both ends',
  列: 'List',
  '列表、表格、搜索或首次使用场景当前没有可展示内容。':
    'There is currently no content to display for lists, tables, searches, or first-time use scenarios.',
  '列表、日志或长文本必须保持在固定高度内，但仍需完整访问全部内容。':
    'Lists, logs, or long text must remain within a fixed height, but still require full access to the entire content.',
  '列表可以分组、分隔并禁用不可选项':
    'Lists can be grouped, separated, and disabled options',
  '列表选择、业务动画与数据状态应由组合层管理，不应下沉到 ScrollArea。':
    'List selection, business animation and data status should be managed by the combination layer and should not sink to the ScrollArea.',
  '列对齐、超长省略与自定义 Cell':
    'Column alignment, super long omission and custom Cell',
  林: 'L',
  林默: 'Lin Mo',
  '林默负责发布，周一负责回滚与告警确认。':
    'Lin Mo is responsible for release, and Monday is responsible for rollback and alarm confirmation.',
  林默回复了检查项: 'Lin Mo replied to the check item',
  林夏: 'Lin Xia',
  '林夏 · 设计': 'Lin Xia · Design',
  '浏览页面、文件与活动记录': 'Browse pages, files and activity',
  流量切换完成: 'Traffic switching completed',
  '流量已分四批切换完成，错误率维持在 0.03%，无需人工干预。':
    'Traffic switching has been completed in four batches, with an error rate maintained at 0.03% without manual intervention.',
  '路径过长时只收起中间层级，保留起点、直接父级和当前页面作为定位锚点。':
    'When the path is too long, only the middle level will be collapsed, and the starting point, direct parent, and current page will be retained as positioning anchor points.',
  路径节点可以展开同级入口: 'Path nodes can expand sibling entries',
  '路径项的视觉样式。': 'The visual style of the path item.',
  轮播分页: 'Carousel pagination',
  '轮播区域、幻灯片、前后按钮和页码点均保留可识别的语义与键盘操作。':
    'Carousels, slides, front and back buttons, and page points all retain recognizable semantics and keyboard operations.',
  没有匹配的发布记录: 'No matching release record',
  正在加载发布记录: 'Loading release records',
  '正在同步生产与预览环境的最新版本。':
    'Syncing the latest versions in production and preview environments.',
  发布记录加载失败: 'Failed to load release records',
  '请求未完成，请检查网络后重新加载。':
    'The request did not complete. Check the network and reload.',
  没有找到成员: 'No member found',
  '媒体内容仍需提供准确的替代文本或字幕。':
    'Media content must still provide accurate alternative text or subtitles.',
  每分钟请求: 'requests per minute',
  '每列至少保留 140px；空间不足时会自动减少列数。':
    'Keep at least 140px per column; columns will be automatically reduced when space is insufficient.',
  每周摘要: 'weekly summary',
  密度: 'density',
  免费: 'free',
  '面板尺寸变化时调用，并提供当前尺寸、item key 和上次尺寸。':
    'Called when the panel size changes, and provides the current size, item key and last size.',
  面板从父容器: 'Panel from parent container',
  '面板的稳定标识，同时用于 React 渲染和底层布局关联。':
    'A stable identifier for panels, used both for React rendering and underlying layout associations.',
  '面板折叠后的尺寸。': 'Dimensions of the panel when folded.',
  '面板中渲染的 React 节点。': 'The React node rendered in the panel.',
  '面包屑放在页面标题之前，最后一级只表示当前位置，不再提供链接。':
    'Breadcrumbs are placed before the page title, and the last level only indicates the current location and no longer provides a link.',
  描边: 'Stroke',
  描边按钮: 'stroke button',
  '描述操作、分组标题、分隔线、勾选项、单选组和子菜单。':
    'Describe actions, group titles, dividers, checkboxes, radio groups, and submenus.',
  明暗呼吸: 'light and dark breathing',
  命令面板: 'command panel',
  模拟异步发布: 'Simulate asynchronous publishing',
  末端箭头: 'end arrow',
  默认: 'default',
  默认按钮: 'Default button',
  默认景深动效: 'Default depth of field animation',
  默认空状态: 'Default empty state',
  默认图标: 'Default icon',
  默认位置: 'default location',
  '默认样式承载概览、动态与成员数据，切换后内容区域保持稳定。':
    'The default style carries overview, dynamic and member data, and the content area remains stable after switching.',
  '默认由整个 Header 触发；传入 trigger 后，Header 保持静态，只由独立按钮控制展开。':
    'By default, it is triggered by the entire Header; after passing in the trigger, the Header remains static and is only expanded by independent buttons.',
  '默认只展示摘要，用户需要时再查看日志、详情、说明或高级配置。':
    'By default, only the summary is displayed, and users can view logs, details, instructions or advanced configuration when needed.',
  '默认装饰图标会从无障碍树中隐藏，标题和说明承担状态表达。':
    'By default, the decorative icon is hidden from the accessibility tree, and the title and description assume the status expression.',
  '默认组合筛选、排序、固定列、操作列、Footer 和 Pagination；业务只需要提供 data 与 ColumnDef。':
    'The default combination includes filtering, sorting, fixed columns, actions, Footer, and Pagination; applications only provide data and ColumnDef.',
  '某些总结、横幅或末尾内容需要跨越当前所有列。':
    'Some summary, banner or end content needs to span all current columns.',
  '目标：': 'Target:',
  内联日历: 'Inline calendar',
  内容封面: 'content cover',
  内容卡片封面: 'Content card cover',
  '内容可能横向溢出，或需要按场景选择自动、常驻与隐藏滚动条。':
    'The content may overflow horizontally, or it may be necessary to select automatic, permanent, or hidden scroll bars according to the scene.',
  内容密度: 'content density',
  内容切换动效: 'Content switching animation',
  '内容区域的排列方向。': 'The arrangement direction of the content area.',
  内容预览: 'Content preview',
  内置英文文案: 'Built-in English copywriting',
  排版预览: 'Layout preview',
  '排版组件的文本或行内内容。':
    'Typesetting the text or inline content of the component.',
  排查: 'troubleshooting',
  '排列一组消息气泡。': 'Arrange a group of message bubbles.',
  配置: 'Configuration',
  '配置 Realtime Gateway': 'Configure Realtime Gateway',
  '配置并控制手势抽屉的分段展开位置。':
    'Configure and control the segmented expansion position of the gesture drawer.',
  '配置抽屉头部、主体内容和底部操作。':
    'Configure the drawer header, body content, and bottom actions.',
  '配置分组标题与可搜索命令选项。':
    'Configure group titles and searchable command options.',
  '配置浮层主体和可选标题说明。':
    'Configure the floating layer body and optional title description.',
  '配置每个面板的 value、title、content 与禁用状态。':
    'Configure the value, title, content and disabled state of each panel.',
  '配置默认底部操作及确认回调。':
    'Configure the default bottom operation and confirmation callback.',
  '配置内置滚动容器的尺寸、样式和引用，用于横向、纵向滚动或外部滚动控制。':
    'Configure the size, style, and references of the built-in scroll container for horizontal, vertical scrolling, or external scroll control.',
  '配置普通操作、分隔线、选择项和子菜单。':
    'Configure common actions, dividers, selections, and submenus.',
  '配置输入框的标准属性，以及是否显示尾部展开按钮。':
    'Configure the standard properties of the input box and whether to display the tail expand button.',
  '配置数值格式和辅助技术读取的完整进度文本。':
    'Configure numeric formatting and full progress text for assistive technology reading.',
  '配置头像集合、最大展示数量和重叠距离。':
    'Configure avatar collection, maximum display number and overlap distance.',
  配置已保存: 'Configuration saved',
  '配置直接链接或带弹层内容的顶级导航入口。':
    'Configure direct links or top-level navigation entries with pop-up content.',
  '频繁变化时建议固定 places，避免数位数量变化引起布局跳动。':
    'When there are frequent changes, it is recommended to fix places to avoid layout jumps caused by changes in the number of digits.',
  品牌官网: 'Brand official website',
  '平台工程 · 当前在线': 'Platform Engineering · Currently Online',
  平台团队: 'Platform team',
  评审成员: 'Jury members',
  评审成员同步中: 'Review members are synchronizing',
  企业版: 'Enterprise Edition',
  '省略时使用内置过滤；传 false 关闭过滤，或传入返回匹配分数的自定义过滤函数。':
    'Omit it to use built-in filtering, pass false to disable filtering, or provide a custom filter function that returns a match score.',
  内置过滤: 'Built-in filtering',
  '启用内置语义色；默认已经开启，可按需关闭。':
    'Enables built-in semantic colors; it is enabled by default and can be turned off as needed.',
  启用通知: 'Enable notifications',
  起始箭头: 'start arrow',
  气泡样式: 'bubble style',
  '迁移脚本已在预览环境验证。':
    'The migration script has been verified in the preview environment.',
  前端值班: 'Front-end duty',
  前后缀与块级附加内容: 'Prefixes, suffixes and block-level appends',
  前往第: 'Go to',
  前置选择控件: 'Front selection control',
  浅色: 'light color',
  '嵌套子列并生成多级分组表头。':
    'Nest subcolumns and generate multi-level grouping headers.',
  强调: 'emphasize',
  强调色: 'accent color',
  '强调文字和较小标签。': 'Emphasis on text and smaller labels.',
  '切换常用封面比例，观察同一张图片如何随容器宽高变化保持稳定布局。':
    'Switch common cover ratios and observe how the same image maintains a stable layout as the width and height of the container change.',
  切换粗体: 'Toggle bold',
  '切换分组连接方块或逐位独立方块布局。':
    'Switch between grouped connected tiles or bit-by-bit independent tile layout.',
  '切换胶囊、线型、描边或柔和指示器。':
    'Toggle capsule, line, stroke, or soft indicators.',
  '切换内容不应改变页面主路径或丢失当前任务上下文。':
    'Switching content should not change the main path of the page or lose the current task context.',
  '切换水平或垂直方向。': 'Switch horizontal or vertical orientation.',
  '切换行式附件或纵向缩略附件。':
    'Switch between line attachments or vertical thumbnail attachments.',
  '切换一个可按下的工具状态。': 'Toggles the state of a pressable tool.',
  清除: 'Clear',
  清除筛选: 'Clear filters',
  重试: 'Retry',
  '清晰的层级让内容更容易阅读。':
    'Clear hierarchy makes content easier to read.',
  '请输入邮箱地址。': 'Please enter your email address.',
  '请在继续发布前重新生成镜像。':
    'Please rebuild the image before continuing to publish.',
  区域: 'area',
  '区域加载时在最近的容器设置 aria-busy="true"，并保持其他区域可操作。':
    'Set aria-busy="true" on the nearest container when a zone is loaded, and keep other zones operational.',
  取消: 'Cancel',
  全部组成组件: 'All components',
  全部组件: 'All components',
  全局语义通知: 'Global semantic notification',
  '全量切换完成。': 'Full switching completed.',
  权限组合: 'Permission combination',
  '缺失变量会在进入生产阶段前被拦截。':
    'Missing variables are intercepted before entering production.',
  确认: 'confirm',
  确认安排: 'Confirm arrangement',
  确认删除: 'Confirm deletion',
  确认设计令牌: 'Confirm design token',
  '确认索引变更不会锁表。': 'Verify that index changes do not lock the table.',
  '确认索引变更不会锁定生产表。':
    'Verify that index changes do not lock production tables.',
  '确认状态、密度与响应式表现，再进入实现。':
    'Confirm status, density and responsive performance before entering implementation.',
  '让 Stack 填满父容器的可用宽度。':
    'Let the Stack fill the available width of the parent container.',
  '让按钮填满父容器的可用宽度。':
    'Make the button fill the available width of the parent container.',
  '让按钮组填满父容器的可用宽度。':
    'Let the button group fill the available width of the parent container.',
  '让产品导航保持清晰。': 'Keep product navigation clear.',
  让界面语言保持清晰: 'Keep interface language clear',
  '让紧凑组填满父容器，适合包含 Input 的组合。':
    'Makes the compact group fill the parent container, suitable for the containing Input group.',
  '让媒体内容在响应式布局中保持固定比例。':
    'Keep media content at fixed proportions in responsive layouts.',
  让内容拥有稳定的画面: 'Let the content have a stable picture',
  让容器决定实际列数:
    'Let the container determine the actual number of columns',
  '让最后一项与第一项首尾相接；自动播放跨越首尾时始终沿下一页方向继续。':
    'Let the last item be connected to the first item end to end; when the automatic playback spans the beginning and end, it will always continue in the direction of the next page.',
  人: 'people',
  人声: 'human voice',
  人声电平: 'Vocal level',
  认证状态: 'Certification status',
  任务完成态: 'Task completed status',
  日: 'day',
  '日志保留 30 天': 'Logs retained for 30 days',
  '容器宽高比，例如 16 / 9、4 / 3 或 1。':
    'Container aspect ratio, such as 16/9, 4/3, or 1.',
  柔和: 'soft',
  '如果数据天然适合连续浏览，应评估加载更多或虚拟滚动。':
    'If the data naturally lends itself to continuous viewing, loading more or virtual scrolling should be evaluated.',
  弱化: 'weaken',
  '筛选版本…': 'Filter version…',
  筛选发布记录: 'Filter release records',
  筛选器响应更快: 'Filters respond faster',
  筛选无结果: 'No results from filtering',
  '删除 preview-142？': 'Remove preview-142?',
  删除记录: 'delete record',
  删除项目: 'Delete project',
  删除预览环境: 'Delete preview environment',
  商业团队: 'Business team',
  上: 'superior',
  上传文件: 'Upload files',
  '上次保存于 10': 'Last saved on 10',
  '上次保存于 10:24': 'Last saved at 10:24',
  上方: 'above',
  上方内容: 'content above',
  上下拖动分隔线调整终端高度:
    'Drag the divider up or down to adjust the terminal height',
  上限: 'upper limit',
  上一项: 'Previous item',
  上一页: 'Previous page',
  尚未选择: 'Not selected yet',
  尚未选择格式: 'No format selected yet',
  设计: 'design',
  设计令牌: 'design token',
  设计目标: 'design goals',
  设计系统: 'design system',
  设计系统更新: 'Design system updates',
  设计系统迁移: 'Design system migration',
  '设计系统札记 · 5 分钟阅读': 'Notes on Design Systems · 5 min read',
  设计中: 'Under design',
  设置: 'set up',
  '设置 hover 模式打开与关闭前的等待时间，单位为毫秒。':
    'Set the waiting time before hover mode is turned on and off, in milliseconds.',
  '设置 href 后输出具有链接语义的 a 元素；不设置 href 时始终输出原生 button。导航不要通过点击事件手动修改地址。':
    'After setting href, the a element with link semantics is output; when href is not set, the native button is always output. Navigation should not manually modify the address through click events.',
  '设置 Provider 创建全局通知通道还是局部通知通道。':
    'Set whether the Provider creates a global notification channel or a local notification channel.',
  '设置 Radio.Group 选项之间的水平与垂直间距。':
    'Sets the horizontal and vertical spacing between Radio.Group options.',
  '设置 Tooltip 方向、对齐和间距。':
    'Set Tooltip orientation, alignment and spacing.',
  '设置需要补充说明的单个触发元素。':
    'Set the single trigger element that needs a short explanation.',
  '设置简短提示内容；内容为空时不显示浮层。':
    'Set concise tooltip content; empty content does not open a popup.',
  '设置浮层相对触发器的位置。':
    'Set the popup position relative to the trigger.',
  '设置打开提示前的等待时间，单位为毫秒。':
    'Set the delay before opening the tooltip, in milliseconds.',
  '设置关闭提示前的等待时间，单位为毫秒。':
    'Set the delay before closing the tooltip, in milliseconds.',
  '临时禁用提示及其触发行为。':
    'Temporarily disable the tooltip and its trigger behavior.',
  '将提示 Portal 挂载到指定容器。':
    'Mount the tooltip portal in a specified container.',
  '以受控方式管理提示是否打开。': 'Control whether the tooltip is open.',
  '设置非受控模式下的初始打开状态。':
    'Set the initial open state in uncontrolled mode.',
  '打开状态变化时返回新的显隐状态。':
    'Receive the next visibility state when the open state changes.',
  受控提示: 'Controlled tooltip',
  悬停或聚焦: 'Hover or focus',
  打开提示: 'Open tooltip',
  提示已打开: 'Tooltip opened',
  提示已关闭: 'Tooltip closed',
  关闭提示: 'Close tooltip',
  受控状态与容器: 'Controlled state and container',
  '通过 open 与 onOpenChange 管理显隐，并可设置延迟和 Portal 容器。':
    'Control visibility with open and onOpenChange, and configure delays and the portal container.',
  '扩展提示定位根节点的 className。':
    'Extend the className of the tooltip positioning root.',
  '设置提示定位根节点的行内样式。':
    'Set inline styles on the tooltip positioning root.',
  '引用提示定位根节点。': 'Reference the tooltip positioning root.',
  '设置浮层相对触发器的位置；使用时无需同时设置 side 或 align。':
    'Choose the popup position relative to the trigger; do not set side or align at the same time.',
  '设置是否显示匹配 placement 落点的箭头。':
    'Show or hide the arrow that matches the placement anchor point.',
  '不使用 placement 时，设置浮层位于触发器的哪一侧。':
    'Choose which side of the trigger contains the popup when placement is not used.',
  '设置浮层盒子沿 side 方向的交叉轴对齐，并匹配箭头的边缘落点。':
    'Align the popup box along the cross axis of side and match the arrow edge anchor point.',
  '设置浮层边缘与触发器沿 side 方向的间距。':
    'Set the distance between the popup edge and the trigger along side.',
  '设置浮层沿交叉轴的额外偏移。':
    'Set an additional popup offset along the cross axis.',
  '设置 vertical 后可调整上下区域，适合编辑器与终端、预览与日志等场景。':
    'After setting vertical, the upper and lower areas can be adjusted, which is suitable for scenarios such as editor and terminal, preview and log.',
  '设置按钮组水平或垂直拼接。':
    'Set the button group to be spliced ​​horizontally or vertically.',
  '设置边缘渐隐的最大长度，数字按像素处理。':
    'Set the maximum length of edge fade. Numbers are processed in pixels.',
  '设置标签、内容与控件的排列方向。':
    'Set the arrangement direction of labels, content and controls.',
  '设置标签的视觉表达；task 在选中后弱化文字并添加删除线。':
    'Sets the visual expression of the label; task weakens the text and adds a strikethrough when selected.',
  '设置标签列表方向，同时决定键盘方向键行为。':
    'Sets the label list orientation and determines keyboard arrow key behavior.',
  '设置布局项内部展示的卡片、媒体或其他 React 内容。':
    'Sets the cards, media, or other React content displayed inside the layout item.',
  '设置侧边区域宽度；数字按像素处理，也可以传入任意 CSS 长度。':
    'Sets the width of the side area; numbers are handled in pixels, or any CSS length can be passed in.',
  '设置初始可见文本行数。': 'Sets the initial number of visible text lines.',
  '设置触发元素，以及点击或悬停预览模式。':
    'Set trigger elements, and click or hover preview modes.',
  '设置打开延迟，或临时禁用提示。':
    'Set a delay for opening, or temporarily disable prompts.',
  '设置打开与关闭富导航面板的延迟。':
    'Set the delay for opening and closing the rich navigation panel.',
  '设置单列期望的最小宽度，用于决定响应式折列时机。':
    'Set the expected minimum width of a single column, which is used to determine the timing of responsive column folding.',
  '设置单行的固定像素高度；虚拟 Table 当前面向等高单行数据，展开行和动态高度内容应使用普通 Body。':
    'Sets a fixed pixel height for a single row; virtual Table currently targets single rows of equal height data, expanded rows and dynamic height content should use a normal Body.',
  '设置弹层对齐方式与导航方向。':
    'Set the popup alignment and navigation direction.',
  '设置当前进度；传入 null 表示无法确定完成比例。':
    'Sets the current progress; passing null means the completion percentage cannot be determined.',
  '设置当前进度与数值范围；value 为 null 时表示进度未知。':
    'Set the current progress and value range; when value is null, the progress is unknown.',
  '设置当前页和总页数。': 'Set the current page and total number of pages.',
  '设置第一条虚拟数据行的 aria-rowindex；默认值会为 Header 预留一行。':
    'Set the aria-rowindex of the first virtual data row; the default value will reserve one row for the Header.',
  '设置顶层菜单触发项的可见名称。':
    'Sets the visible name of the top-level menu trigger item.',
  '设置独立触发按钮的内容；传入后 Header 保持静态，不再响应展开操作。':
    'Set the content of the independent trigger button; after passing it in, the Header remains static and no longer responds to the expansion operation.',
  '设置独立触发按钮的外观、尺寸和原生触发器属性。':
    'Set the appearance, size and native trigger properties of independent trigger buttons.',
  '设置独立触发按钮末端的状态图标；展开时会与面板使用同一节奏旋转。':
    'Set the status icon at the end of the independent trigger button; when expanded, it will rotate at the same rhythm as the panel.',
  '设置多选、禁用、只读和表单必填状态。':
    'Set multi-select, disabled, read-only and required form status.',
  '设置方向并匹配方向键导航。':
    'Set the direction and match the arrow keys for navigation.',
  '设置非受控多行文本的初始值。':
    'Sets the initial value for uncontrolled multiline text.',
  '设置非受控模式的初始按下状态。':
    'Sets the initial pressed state for uncontrolled mode.',
  '设置非受控模式的初始开启状态。':
    'Set the initial on state of uncontrolled mode.',
  '设置非受控模式的初始选中状态，仅在初始化时生效。':
    'Set the initial selection state of uncontrolled mode, which only takes effect during initialization.',
  '设置非受控模式下初始按下的工具值集合。':
    'Sets the set of tool values ​​initially pressed in uncontrolled mode.',
  '设置非受控模式下初始的一个或多个滑块值。':
    'Sets the initial slider value or values ​​in uncontrolled mode.',
  '设置非受控模式下初始搜索关键词。':
    'Set the initial search keyword in uncontrolled mode.',
  '设置非受控模式下初始选择的项目。':
    'Sets the initially selected item in uncontrolled mode.',
  '设置非受控模式下初始选中的单选值。':
    'Sets the initially selected radio value in uncontrolled mode.',
  '设置非受控模式下初始选中的值集合。':
    'Sets the set of values ​​initially selected in uncontrolled mode.',
  '设置非受控输入的初始值，仅在初始化时生效。':
    'Set the initial value of uncontrolled input, which only takes effect during initialization.',
  '设置非受控验证码的初始字符串。':
    'Set the initial string for uncontrolled verification codes.',
  '设置分隔线的布局方向。': 'Sets the layout direction of dividers.',
  '设置浮层方向、对齐方式和间距。':
    'Set the overlay direction, alignment and spacing.',
  '设置附件操作，以及覆盖整个附件的链接或按钮触发区域。':
    'Set attachment actions, as well as link or button trigger areas that cover the entire attachment.',
  '设置附件的整体密度。': 'Sets the overall density of attachments.',
  '设置附件媒体，并选择图标或图片外观。':
    'Set attachment media and choose an icon or image appearance.',
  '设置附件名称和辅助说明。':
    'Set the attachment name and auxiliary description.',
  '设置回应或已读状态，并控制其边缘位置。':
    'Set the response or read status and control its edge position.',
  '设置加载图标本身的尺寸，不改变周围容器。':
    'Sets the size of the loading icon itself without changing the surrounding container.',
  '设置交叉轴对齐方式。': 'Set cross-axis alignment.',
  '设置紧凑组的拼接方向；紧凑组不允许换行。':
    'Set the splicing direction of compact groups; compact groups do not allow line breaks.',
  '设置进度范围，并同步无障碍数值。':
    'Set the progress range and synchronize accessibility values.',
  '设置进度名称，并决定是否或如何展示格式化数值。':
    'Set the progress name and decide whether or how to display the formatted value.',
  '设置进入方向以及自适应、手势或稳定面板行为。':
    'Set entry direction and adaptive, gesture, or stable panel behavior.',
  '设置开关开启时提交到原生表单的字段值。':
    'Set the field value submitted to the native form when the switch is turned on.',
  '设置可换行的标记文字或链接。': 'Set wrappable markup text or links.',
  '设置可视区域上下额外渲染的行数，减少快速滚动时的空白。':
    'Set the number of extra lines rendered above and below the visual area to reduce the blank space during fast scrolling.',
  设置列表: 'Settings list',
  '设置列表项的默认、描边或柔和外观。':
    'Set the default, stroked, or soft appearance of list items.',
  '设置列表项内容密度。': 'Set the list item content density.',
  '设置媒体内容，并选择普通、图标或图片外观。':
    'Set your media content and choose from Normal, Icon, or Picture appearance.',
  '设置每次键盘或指针移动的步长。':
    'Set the step size for each keyboard or pointer movement.',
  '设置每一级的名称、链接、图标、禁用状态和下拉菜单。':
    'Set the name, link, icon, disabled state, and drop-down menu for each level.',
  '设置路径折叠阈值，或进一步配置前后保留数量和触发器名称。':
    'Set the path collapse threshold, or further configure the number of items retained before and after it and the trigger label.',
  '设置面板进入和停靠的方向。':
    'Sets the direction in which the panel enters and docks.',
  '设置面板内容的切换动效；减少动态效果偏好下自动降级。':
    'Set the switching animation of the panel content; reduce the automatic degradation under the dynamic effect preference.',
  '设置内容区域后的可选底部信息或操作。':
    'Optional bottom information or action after setting the content area.',
  '设置内容相对触发器的首选方向。':
    'Sets the preferred orientation of content relative to the trigger.',
  '设置排列方向、尺寸和上传处理状态。':
    'Set the arrangement direction, size and upload processing status.',
  '设置气泡内容，并向内部内容 div 传递标准属性。':
    'Set the bubble content, passing standard attributes to the inner content div.',
  '设置气泡外观及在消息流中的左右对齐。':
    'Set the bubble appearance and left and right alignment in the message flow.',
  '设置确认事项、后果说明和辅助图标。':
    'Set confirmation items, consequence instructions, and auxiliary icons.',
  '设置确认与取消操作的文字和确认按钮样式。':
    'Set the text and confirmation button style for confirmation and cancellation operations.',
  '设置任务标题、辅助说明和主体内容。':
    'Set the task title, auxiliary instructions and main content.',
  '设置容器允许显示的最大列数；它是上限，实际列数会随可用宽度自动减少。':
    'Sets the maximum number of columns the container is allowed to display; it is the upper limit and the actual number of columns is automatically reduced with the available width.',
  '设置筛选输入框提示与可访问名称。':
    'Set the filter input box prompt and accessible name.',
  '设置始终可见的摘要内容；未传 trigger 时，整个 Header 同时作为触发器。':
    'Set summary content that is always visible; when trigger is not passed, the entire Header will act as a trigger at the same time.',
  '设置受控按下状态；状态变化后由调用方传回新值。':
    'Sets the controlled pressed state; the new value is returned by the caller after the state changes.',
  '设置受控多行文本值；内容变化后由调用方负责更新。':
    'Sets a controlled multi-line text value; the caller is responsible for updating it when the content changes.',
  '设置受控开关状态；变化后由调用方传回新值。':
    'Sets the controlled switch state; new value is returned by the caller after change.',
  '设置受控模式下当前按下的工具值集合。':
    'Sets the set of tool values ​​currently pressed in controlled mode.',
  '设置受控模式下当前的一个或多个滑块值。':
    'Sets the current slider value or values ​​in controlled mode.',
  '设置受控模式下当前选择的项目。':
    'Sets the currently selected item in controlled mode.',
  '设置受控模式下当前选中的单选值。':
    'Sets the currently selected radio value in controlled mode.',
  '设置受控模式下当前选中的值集合。':
    'Sets the currently selected set of values ​​in controlled mode.',
  '设置受控模式下用于过滤候选项的搜索关键词。':
    'Set the search keywords used to filter candidates in controlled mode.',
  '设置受控输入值；内容变化后由调用方负责更新。':
    'Set the controlled input value; the caller is responsible for updating it when the content changes.',
  '设置受控选中状态；状态变化后由调用方传回新值。':
    'Sets the controlled selection state; the new value is returned by the caller after the state changes.',
  '设置受控验证码字符串；内容变化后由调用方负责更新。':
    'Set a controlled verification code string; the caller is responsible for updating it after the content changes.',
  '设置输入提示、空结果文案和清除操作。':
    'Set input prompts, empty result text, and clear actions.',
  '设置数字字号、字重和数位间距。':
    'Set number font size, font weight and digit spacing.',
  '设置搜索提示和无匹配结果文案。':
    'Set search prompts and no-match results copy.',
  '设置提示标题、补充说明和语义图标。':
    'Set prompt titles, supplementary descriptions, and semantic icons.',
  '设置提示的语义状态；destructive 作为 error 的兼容别名保留。':
    'Sets the semantic state of the prompt; destructive is reserved as a compatible alias for error.',
  '设置提示的语义状态。': 'Sets the semantic state of the prompt.',
  '设置通知容器相对视口定位还是相对父容器定位。':
    'Set whether the notification container is positioned relative to the viewport or relative to the parent container.',
  '设置通知相对视口或局部容器的出现位置。':
    'Sets where the notification appears relative to the viewport or partial container.',
  '设置同一 Provider 下 Tooltip 的打开延迟。':
    'Set the opening delay of Tooltip under the same Provider.',
  '设置统一的路径分隔符，也可以传入自己的图标。':
    'Set a unified path separator, or pass in your own icon.',
  '设置统一间距，数组依次表示水平与垂直间距。':
    'Set the uniform spacing, and the array represents the horizontal and vertical spacing in turn.',
  '设置头像尺寸，并同步 AvatarBadge 与分组计数。':
    'Set avatar size and sync AvatarBadge with group count.',
  '设置头像资源、替代文本和加载失败时的回退内容。':
    'Set avatar resources, alternative text, and fallback content when loading fails.',
  '设置透明或描边外观。': 'Set a transparent or stroked appearance.',
  '设置消息气泡的强调与语义外观。':
    'Set the emphasis and semantic appearance of message bubbles.',
  '设置需要补充说明的交互元素和简短提示内容。':
    'Set interactive elements and short prompts that require additional explanations.',
  '设置需要展示并驱动逐位滚动的数值。':
    'Set the value to be displayed and drive bit-by-bit scrolling.',
  '设置悬停模式打开与关闭前的等待时间。':
    'Set the wait time before hover mode turns on and off.',
  '设置验证码总位数。': 'Set the total number of verification code digits.',
  '设置元素水平或垂直排列。':
    'Set elements to be arranged horizontally or vertically.',
  '设置原生表单提交时使用的字段名称。':
    'Set the field name used when submitting the native form.',
  '设置圆形或圆角方形头像及尺寸。':
    'Set round or rounded square avatar and size.',
  '设置圆形头像或圆角方形头像。':
    'Set up a round avatar or a square avatar with rounded corners.',
  '设置允许选择的最大值。': 'Sets the maximum value allowed for selection.',
  '设置允许选择的最小值。': 'Sets the minimum value allowed for selection.',
  '设置展开后显示的内容。': 'Set the content displayed after expansion.',
  '设置折叠态、展开态图标及图标所在一侧。':
    'Set the folded state, expanded state icon and the side of the icon.',
  '设置主要触发方式；hover 模式同时支持鼠标悬停与键盘聚焦。':
    'Set the main trigger method; hover mode supports both mouse hover and keyboard focus.',
  '设置主轴内容分布方式。': 'Set the spindle content distribution method.',
  '设置装饰性状态图标并自动隐藏可访问语义。':
    'Set decorative status icons and automatically hide accessibility semantics.',
  '设置自动播放间隔、首尾循环和悬停暂停策略。':
    'Set auto-play intervals, start-to-end loops, and hover pause strategies.',
  社交媒体封面: 'social media cover',
  身份团队: 'identity team',
  深层路径折叠: 'Deep path collapse',
  深色: 'Dark',
  审计日志: 'Audit log',
  '审计通过前，生产环境不会显示可发布版本。':
    'Before the audit passes, the production environment will not display the releasable version.',
  '审计通过前暂无可发布版本。':
    'There is no release version until the audit is passed.',
  审批: 'Approval',
  生产: 'Production',
  生产发布检查: 'Production release check',
  '生产发布开始 · 21': 'Production release begins · 21',
  '生产发布开始 · 21:46': 'Production release begins · 21:46',
  生产构建完成: 'Production build completed',
  生产环境: 'production environment',
  '生产环境 · 3 分钟前': 'Production environment · 3 minutes ago',
  '生产环境 · 今天 18:00': 'Production environment · Today 18:00',
  生产环境发布历史: 'Production environment release history',
  '生产环境缺少 DATABASE_URL，请补充变量后重试。':
    'The production environment is missing DATABASE_URL, please add the variable and try again.',
  '生产环境缺少 DATABASE_URL。':
    'DATABASE_URL is missing from the production environment.',
  '声明当前 Table 的叶子列数量，使虚拟滚动占位行跨越整张表格并保持列宽。':
    'Declare the number of leaf columns of the current Table so that the virtual scrolling placeholder row spans the entire table and maintains column width.',
  '声明当前字段的必填、格式和自定义校验规则。':
    'Declare the required fields, formats and custom validation rules for the current field.',
  '声明键盘导航方向；横向时使用 Stack 自适应换行。':
    'Declare the keyboard navigation direction; use Stack adaptive word wrapping in landscape orientation.',
  '省略单个超长列标题或 Cell，并在内容真实溢出时自动通过 Tooltip 提供全文；应配合列宽或 table-fixed。':
    'Omit individual overlong column headers or Cells and automatically provide full text via Tooltip when content actually overflows; should match column width or be table-fixed.',
  '时。': 'hour.',
  时间线标记: 'timeline markers',
  '实时预览当前组件。': 'Preview the current component in real time.',
  使用: 'use',
  '使用 Checkbox 标记单个可提交选择，并通过 Checkbox.Group 管理多选值。':
    'Use Checkbox to mark individual submittable selections and manage multi-select values ​​via Checkbox.Group.',
  '使用 Checkbox.Group 管理多个权限值，并即时反馈已选数量。':
    'Use Checkbox.Group to manage multiple permission values ​​and provide instant feedback on the selected quantity.',
  '使用 container 时，父容器必须设置 position: relative 和 overflow: hidden。':
    'When using container, the parent container must set position: relative and overflow: hidden.',
  '使用 defaultValue 提供初始状态，后续状态由 Toggle 自身管理。':
    'Use defaultValue to provide the initial state, subsequent states are managed by Toggle itself.',
  '使用 Header 与 Head 明确每列的数据含义；列标题过长时通过 ellipsis 保留可聚焦查看的全文 Tooltip。':
    'Use Header and Head to clarify the data meaning of each column; when the column title is too long, use ellipsis to retain the full-text Tooltip that can be viewed in focus.',
  '使用 Header、Body 和 Footer 组织一张语义完整的基础表格。':
    'Use Header, Body, and Footer to organize a semantically complete basic table.',
  '使用 Header、Content、Footer 和 Sidebar 组合页面骨架，让常见布局关系保持清晰且可嵌套。':
    'Use Header, Content, Footer, and Sidebar to combine page skeletons to keep common layout relationships clear and nestable.',
  '使用 Input 的 variant 切换连接方块与独立方块，并通过分段控件逐项预览。':
    'Use the Input variant to switch between connected and separated blocks, previewing one option at a time with the segmented control.',
  '使用 Radio 表达单个选项，并通过 Radio.Group 组织互斥选择。':
    'Use Radio to express individual options, and Radio.Group to organize mutually exclusive choices.',
  '使用 Separator 分隔强调、浮起、柔和和描边样式。':
    'Use Separator to separate accent, float, soft, and stroke styles.',
  '使用 task 变体表达可完成事项；选中后标签自动弱化并添加删除线，取消选中后恢复。':
    'Use the task variant to express what can be accomplished; the label will automatically weaken and add a strikethrough when selected, and will be restored after deselecting.',
  '使用 Toggle 切换单个工具状态，并通过 Toggle.Group 管理单选或多选工具组。':
    'Use Toggle to toggle the state of individual tools, and use Toggle.Group to manage single- or multi-select tool groups.',
  '使用 Toggle 切换单个工具状态，并通过 Toggle.Group 管理工具组选项。':
    'Use Toggle to toggle the state of individual tools, and manage tool group options with Toggle.Group.',
  '使用标签说明输入目的，并保持默认、悬停和聚焦状态清晰可辨。':
    'Use labels to explain the purpose of the input and keep default, hover, and focus states clearly identifiable.',
  '使用标准 Pagination 管理当前页、每页数量和页码回调；传 false 时展示全部数据。':
    'Use standard Pagination to manage the current page, the number of each page, and page number callbacks; display all data when false is passed.',
  使用场景: 'Usage scenarios',
  '使用单个滑块在明确的最小值和最大值之间选择数值。':
    'Use a single slider to select a value between clear minimum and maximum values.',
  '使用当前记录标识为每一行的操作组提供唯一名称。':
    "Give each row's action group a unique name using the current record ID.",
  使用方向键浏览全部标签: 'Use the arrow keys to browse all tags',
  '使用基础 Table Footer 展示当前可见行的汇总内容；函数形式会收到当前页数据。':
    'Use the basic Table Footer to display the summary content of the currently visible row; the function form will receive the current page data.',
  '使用接近业务页面的标题、说明和操作验证组合方式，并检查长文本与窄屏边界。':
    'Use title, description, and action validation combinations that are close to your business page, and check long text against narrow screen boundaries.',
  '使用默认 props 布局，或切换到完全自定义的组合布局。':
    'Use the default props layout, or switch to a fully custom composition layout.',
  '使用默认点位、关闭分页，或通过函数自定义完整翻页器。':
    'Use default points, turn off paging, or customize the complete page turner through functions.',
  '使用视觉层级表达操作优先级。一个操作区域通常只保留一个主要按钮。':
    'Use visual hierarchy to express operational priorities. An operating area usually only retains one main button.',
  '使用受控或非受控方式管理 Tooltip。':
    'Manage tooltips using controlled or uncontrolled methods.',
  '使用受控或非受控方式管理浮层。':
    'Use controlled or uncontrolled methods to manage floating layers.',
  '使用受控或非受控方式管理内容展开状态。':
    'Manage content expansion state using controlled or uncontrolled methods.',
  '使用受控或非受控方式指定展开项。':
    'Specify expansion items using controlled or uncontrolled methods.',
  '使用双滑块选择预算区间，并把当前值与范围边界直接展示出来。':
    'Use the dual sliders to select a budget range and display the current value and range boundaries directly.',
  使用文档: 'Use documentation',
  '使用像素值控制相邻头像的重叠程度。':
    'Use pixel values ​​to control how much adjacent avatars overlap.',
  '使用用户设备上容易识别的按键名称。':
    "Use key names that are easily identifiable on the user's device.",
  '使用语义化行列展示数据。': 'Use semantic rows and columns to display data.',
  '使用组件内置的方向图标反馈展开状态。':
    "Use the component's built-in direction icon to feedback the expansion status.",
  '示例列表使用 aria-activedescendant 表达活动项，并支持方向键、Home、End 与 Enter。':
    'The example list uses aria-activedescendant to represent active items and supports arrow keys, Home, End, and Enter.',
  示例文件: 'Sample file',
  事件: 'event',
  '视觉数字对辅助技术隐藏，并通过 valueText 提供完整、稳定的文本值。':
    'The visual number is hidden from assistive technology and the full, stable text value is provided via valueText.',
  视图: 'view',
  视图设置: 'View settings',
  '试试缩短版本关键词，或清除当前环境筛选。':
    'Try shortening the version keyword, or clearing the current environment filter.',
  '是否显示上一页与下一页按钮。':
    'Whether to display the previous page and next page buttons.',
  适合分段验证码或序列号:
    'Suitable for segmented verification codes or serial numbers',
  适合界面已提供其他状态反馈的场景:
    'Suitable for scenarios where the interface already provides other status feedback',
  适合链接感需要更明确的内容页:
    'Suitable for content pages that require a clearer sense of linking',
  适合强调每一位输入状态:
    'Suitable for emphasizing the input status of each bit',
  '收到，我现在检查。': "Received, I'll check now.",
  收件箱: 'Inbox',
  收起: 'Collapse',
  首次使用: 'First time use',
  首个可用标签: 'first available label',
  首批流量: 'First batch of traffic',
  首页: 'front page',
  受控分页: 'controlled paging',
  '受控模式下当前激活标签的 value；传入 null 时不激活标签。':
    'The value of the currently activated tag in controlled mode; when null is passed in, the tag is not activated.',
  受控状态: 'controlled state',
  舒适: 'Comfortable',
  '输入单行或多行文本、带前后缀的结构化内容或固定长度验证码。':
    'Enter a single or multiple lines of text, structured content with prefixes and suffixes, or a fixed-length verification code.',
  输入团队名称: 'Enter team name',
  输入姓名或团队进行搜索: 'Enter a name or team to search',
  属性: 'property',
  数据录入: 'data entry',
  数据面板: 'Data panel',
  数据团队: 'data team',
  '数据已经是可直接渲染的行列结构，不需要列模型、筛选或排序状态。':
    'The data is already a directly renderable row-column structure, with no need for column models, filtering, or sorting state.',
  数据展示: 'Data display',
  数据展示案例补齐: 'Data display case completion',
  '数据状态由业务自行处理，或需要完全控制表头、汇总、行展开与虚拟表体时直接组合。':
    'The data status is handled by the business itself, or combined directly when full control of table headers, summarization, row expansion and virtual table bodies is required.',
  '数值变化时只滚动发生变化的位；固定 places 可以避免位数变化导致布局跳动。':
    'When the value changes, only the changed digits are scrolled; fixing places can avoid layout jumps caused by changes in digits.',
  数值间距: 'Value spacing',
  '数字通知的显示上限，例如 123 在上限 99 时显示为 99+。':
    'Display upper limit for numeric notifications, for example 123 will display as 99+ when the upper limit is 99.',
  刷新: 'refresh',
  水平: 'level',
  '水平标签使用左右方向键，纵向标签使用上下方向键移动。':
    'Use the left and right arrow keys to move horizontal labels, and use the up and down arrow keys to move vertical labels.',
  水平分隔: 'horizontal separation',
  '水平线分隔上下排列的章节、列表分组或信息层级。':
    'Horizontal lines separate sections, list groups, or information levels that appear above and below each other.',
  '说明本次变更…': 'Explain this change...',
  '说明当前为什么没有内容；传入 null 可隐藏标题。':
    'Explain why there is currently no content; pass null to hide the title.',
  四个方向: 'four directions',
  十二个位置: 'Twelve placements',
  箭头: 'Arrow',
  默认箭头: 'Default arrow',
  显示箭头: 'Show arrow',
  隐藏箭头: 'Hide arrow',
  上方靠左: 'Top left',
  上方靠右: 'Top right',
  左侧靠上: 'Left top',
  左侧靠下: 'Left bottom',
  右侧靠上: 'Right top',
  右侧靠下: 'Right bottom',
  下方靠左: 'Bottom left',
  下方靠右: 'Bottom right',
  '从页面边缘承载较长内容和连续操作，同时保留当前页面上下文。':
    'Use the page edge for longer content and continuous actions while preserving the current page context.',
  四种样式与快捷居中: 'Four styles and quick centering',
  宋: 'Song',
  '宋雨 · 运营': 'Song Yu·Operation',
  搜索并选择成员: 'Search and select members',
  搜索成员: 'Search members',
  '搜索成员…': 'Search for members…',
  '搜索关键词变化时调用。': 'Called when the search keyword changes.',
  '搜索命令…': 'Search command…',
  搜索组件: 'Search component',
  '所有分隔线的默认内容；可传入 ReactNode，或根据索引和方向动态渲染。':
    'Default content for all dividers; can be passed into ReactNode, or rendered dynamically based on index and orientation.',
  '所有交互测试均已通过。': 'All interaction tests passed.',
  所有流量已切换至新版本: 'All traffic has been switched to the new version',
  所有系统运行正常: 'All systems are running normally',
  '提供表单上下文，并连接提交行为。':
    'Provide form context and connect the submission behavior.',
  '提供表格数据记录。': 'Provide tabular data records.',
  '提供对象相关的上下文操作。':
    'Provides object-related contextual operations.',
  '提供固定且可过滤的候选项集合，支持平铺或分组数据。':
    'Provides a fixed and filterable set of candidates, supporting flat or grouped data.',
  '提供开箱即用的前后导航与页码点；支持替换图标、点位内容和组合位置。':
    'Provides out-of-the-box front and back navigation and page number points; supports replacement of icons, point content and combined positions.',
  '提供可搜索的键盘命令列表。':
    'Provides a searchable list of keyboard commands.',
  '提供轮播数据，并决定每一项的展示内容。':
    'Provide carousel data and determine the display content of each item.',
  '提供平铺或分组候选项。': 'Provides tiling or grouping candidates.',
  '提供头像资源和替代文本。':
    'Avatar resources and alternative text are provided.',
  '提供稳定且唯一的 React key，用于识别当前布局项。':
    'Provides a stable and unique React key for identifying the current layout item.',
  '提供需要布局的 MasonryItem 配置列表。':
    'Provides a configuration list of MasonryItems that require layout.',
  '提供一致的内容层级、正文节奏和行内文本样式。':
    'Provide consistent content hierarchy, body rhythm, and inline text style.',
  '提供整张表格的语义标题或补充说明。':
    'Provide a semantic title or additional explanation for the entire table.',
  提交进入发布队列: 'Submit to release queue',
  提示: 'hint',
  体验: 'experience',
  体验团队: 'Experience team',
  '替换 Header 触发模式下的默认方向图标；传 null 时隐藏图标。':
    'Replaces the default direction icon in Header trigger mode; hides the icon when null is passed.',
  '替换默认 Inbox 图标；传入 null 可明确隐藏图标。':
    'Replaces the default Inbox icon; pass null to explicitly hide the icon.',
  '添加横跨整行的前置或后置内容。':
    'Add pre- or post-content that spans the entire line.',
  条发布记录: 'Release records',
  条未读消息: 'unread messages',
  '通过 badge 放置在线点、认证图标或 Badge 节点，状态始终锚定在头像右下角。':
    'Place the online point, certification icon or Badge node through the badge, and the status is always anchored in the lower right corner of the avatar.',
  '通过 CardClassNames 按语义区域扩展内部样式。':
    'Extend internal styles by semantic area via CardClassNames.',
  '通过 className 或 style 自定义粗细、颜色、虚线和渐变效果。':
    'Customize thickness, color, dashed lines and gradient effects via className or style.',
  '通过 content、reactions、align 与 variant 配置气泡。':
    'Configure bubbles via content, reactions, align and variant.',
  '通过 count 展示未读数量，通过 dot 只提示是否有新内容；超出 overflowCount 时自动封顶。':
    'Use count to display the number of unread items, and use dot to only prompt whether there is new content; it will be automatically capped when overflowCount is exceeded.',
  '通过 Field 与 Label 组织字段语义，并连接表单状态、校验和提交行为。':
    'Organize field semantics through Field and Label, and connect form status, verification and submission behaviors.',
  '通过 groups 和 options 创建可搜索的命令列表，选项负责图标、快捷键与执行回调。':
    'Create a searchable command list through groups and options, which are responsible for icons, shortcut keys and execution callbacks.',
  '通过 header、content、trigger、icon 与 footer 组合单个可展开内容区域。':
    'Combine header, content, trigger, icon and footer into a single expandable content area.',
  '通过 header、render、columns 和 meta 声明数据访问、列结构与 Table 布局属性。':
    'Declare data access, column structure and Table layout properties through header, render, columns and meta.',
  '通过 icon 替换默认图标，Header 内容保持不变。':
    'Replace the default icon by icon, and the header content remains unchanged.',
  '通过 icon、content 与 variant props 配置内容标记。':
    'Configure content markup via icon, content, and variant props.',
  '通过 items 提供稳定 key 与内容，Masonry 会为每一项创建并测量布局节点。':
    'Provide stable keys and content through items, and Masonry will create and measure layout nodes for each item.',
  '通过 items props 管理单选或多选工具组。':
    'Manage single or multi-select tool groups via items props.',
  '通过 items props 渲染选项，并管理选择值、排列方向和键盘导航。':
    'Render options via items props and manage selection values, arrangement direction, and keyboard navigation.',
  '通过 items props 渲染一组 Item，并可插入统一分隔内容。':
    'Render a set of Items via items props, and insert uniformly separated content.',
  '通过 items props 展示附件集合。':
    'Display the attachment collection through items props.',
  '通过 items、max 与 overlap 展示头像集合。':
    'Display the avatar collection through items, max and overlap.',
  '通过 keys 属性统一多个按键之间的间距。':
    'Unify the spacing between multiple keys through the keys attribute.',
  '通过 media、title、description 和 actions props 组织不同长度的列表项。':
    'Organize list items of different lengths through media, title, description, and actions props.',
  '通过 media、title、description、content、actions、header 与 footer props 配置列表项。':
    'Configure list items through media, title, description, content, actions, header and footer props.',
  '通过 options 提供平铺或分组候选项，通过受控或非受控 props 管理选择。':
    'Provide tiling or grouping candidates via options and manage selection via controlled or uncontrolled props.',
  '通过 options props 管理多个选择值。':
    'Manage multiple selection values ​​through options props.',
  '通过 options props 管理互斥选择。':
    'Mutually exclusive selections are managed via options props.',
  '通过 options、value、onChange 与搜索相关 props 管理完整选择交互。':
    'Manage full selection interaction via options, value, onChange and search related props.',
  '通过 props 配置列表项的语义内容和尾部操作。':
    'Configure the semantic content and tail operations of list items through props.',
  '通过 props 声明组项的 value、label、禁用状态与可访问名称。':
    'Declare the value, label, disabled state, and accessible name of the group item through props.',
  '通过 value 读取当前开关状态，并在 onChange 中由业务状态决定下一次渲染。':
    'Read the current switch status through value, and determine the next rendering based on the business status in onChange.',
  '通过标题、说明、媒体和操作 props 展示单个附件。':
    'Display a single attachment via title, description, media, and action props.',
  '通过标准 div 的行内样式、ARIA、data 属性、角色与事件扩展当前布局项。':
    'Extend the current layout item with standard div inline styles, ARIA, data attributes, roles, and events.',
  '通过标准 div 的行内样式、ARIA、data 属性与事件完成扩展。':
    'Extensions are accomplished through standard div inline styles, ARIA, data attributes, and events.',
  '通过单行、多行、组合输入和验证码承接不同复杂度的录入任务。':
    'Undertake input tasks of different complexity through single-line, multi-line, combined input and verification codes.',
  '通过二级菜单切换组件文档，或导出当前组件的规范说明。':
    'Switch component documents through the secondary menu, or export the specification of the current component.',
  '通过可拖动分隔线调整相邻内容区域的尺寸。':
    'Resize adjacent content areas with draggable dividers.',
  '通过内联日历或弹出触发器选择单个日期。':
    'Select individual dates via inline calendar or pop-up trigger.',
  '通过配置数组渲染一组 Attachment。':
    'Renders a set of Attachments via a configuration array.',
  '通过同一个 Kbd 渲染快捷键组合。':
    'Render shortcut key combinations via the same Kbd.',
  '通过图片、回退内容和 badge props 展示头像。':
    'Display avatars via images, fallback content, and badge props.',
  '通过主组件 props 配置内容、状态、行为和扩展点。':
    'Configure content, state, behavior, and extension points through main component props.',
  通知偏好: 'Notification preferences',
  '通知数字或红点的无障碍说明，红点场景应明确提供。':
    'Notification numbers or accessibility instructions for red dots, red dot scenes should be clearly provided.',
  同步中: 'Synchronizing',
  '同时承载选中控件、可点击标签与单个布尔状态。':
    'Also carries the selected control, clickable label, and a single Boolean state.',
  同时设置: 'Set simultaneously',
  '同时验证桌面、平板与手机视口，确保实际列数能够根据可用空间自然回落。':
    'Simultaneously verify the desktop, tablet, and mobile viewports to ensure that the actual number of columns naturally falls back based on available space.',
  '同时用文本解释不常见的快捷键用途。':
    'Also uses text to explain the uses of uncommon shortcut keys.',
  '同时展示标签、说明、错误信息，以及适合设置项的水平字段。':
    'Also displays labels, descriptions, error messages, and horizontal fields for setting items.',
  '同一层级有多张重点内容卡片，但当前区域只适合突出展示一项。':
    'There are multiple key content cards at the same level, but the current area is only suitable for highlighting one item.',
  '同一页面只应保留一个 Content 主地标；局部布局请使用普通内容容器，避免出现多个 main。':
    'Only one Content main landmark should be retained on the same page; please use ordinary content containers for local layout to avoid multiple mains.',
  '统一从上、右、下、左进入；adaptive 模式在窄屏保留手势，在宽屏收敛为稳定的边缘面板。':
    'Unified entry from top, right, bottom, and left; adaptive mode retains gestures in narrow screens and converges to a stable edge panel in wide screens.',
  '统一设置指示器的位置；传入一个节点时随状态旋转，或分别定义折叠态与展开态。':
    'Set the position of the indicator uniformly; rotate with the state when a node is passed in, or define the collapsed and expanded states separately.',
  '统一颜色、间距与排版语言。':
    'Unify colors, spacing and typography language.',
  '头部布局区域，容纳标题、说明与右侧操作。':
    'The header layout area accommodates titles, descriptions and operations on the right.',
  '头部右侧的辅助操作区域。':
    'Auxiliary operating area on the right side of the head.',
  头像与可滚动会话: 'Avatars and scrollable conversations',
  头像重叠程度: 'Avatar overlap degree',
  '透传基础 Table 的表格与滚动容器属性，用于设置最小宽度、表格布局和容器尺寸。':
    'Transparently transmit the table and scroll container properties of the basic Table to set the minimum width, table layout and container size.',
  '透传月份导航、禁用日期和本地化等日历配置。':
    'Transparently transmit calendar configurations such as month navigation, disabled dates, and localization.',
  '透明安全区为轻微缩放与越界回弹预留空间，两端图标和文字始终保持一致反馈。':
    'The transparent safe area reserves space for slight zooming and cross-border rebound, and icons and text at both ends always provide consistent feedback.',
  图标尺寸: 'icon size',
  图标随头像尺寸缩放: 'Icons scale with avatar size',
  '图标用于帮助扫描，文本仍需表达完整含义；需要导航时使用 href 获得链接语义。':
    'Icons are used to aid scanning, and text still needs to express the complete meaning; use href to obtain link semantics when navigation is required.',
  '图标用于帮助识别动作。仅图标模式需要通过 aria-label 说明用途。':
    'Icons are used to help identify actions. Only icon mode requires an aria-label to indicate its purpose.',
  图片: 'picture',
  '图片不可用时显示姓名缩写或图标。':
    'Display initials or icon when image is not available.',
  团队版: 'Team Edition',
  团队工作区: 'Team workspace',
  团队名称: 'Team name',
  推进部署: 'Advance deployment',
  '推送发布通知。': 'Push release notifications.',
  推送生产环境: 'Push to production environment',
  退出: 'quit',
  '拖动 Slider 或修改数值，两个控件会保持同步。':
    'Drag the Slider or modify the value, and the two controls will remain in sync.',
  '拖动滑块设置一行允许的最大列数；实际列数根据容器宽度与最小列宽自动回落，最多显示六列。':
    'Drag the slider to set the maximum number of columns allowed in a row; the actual number of columns automatically drops back based on the container width and the minimum column width, with a maximum of six columns displayed.',
  拖动两侧分隔线: 'Drag the dividers on both sides',
  '拖动两个滑块设置可接受的月度预算。':
    'Drag the two sliders to set an acceptable monthly budget.',
  '拖动文件区和预览区之间的分隔线，或聚焦分隔线后使用方向键调整宽度。':
    'Drag the separator line between the file area and preview area, or use the arrow keys to adjust the width after focusing on the separator line.',
  '拖动中间分隔线，按当前任务调整文件区和内容区的可用空间。':
    'Drag the middle dividing line to adjust the available space in the file area and content area according to the current task.',
  完成后将逐步刷新全球节点:
    'After completion, global nodes will be gradually refreshed.',
  完成率: 'completion rate',
  完成验证并发布: 'Complete verification and publish',
  完成验证后创建版本记录:
    'Create a version record after completing the verification',
  '完成预检后，可以安排第一次生产发布。':
    'After preflight is completed, the first production release can be scheduled.',
  '完成预检后，可以从这里安排第一次生产发布。':
    'Once preflight is complete, the first production release can be scheduled from here.',
  '完全自定义底部操作；省略时可使用 cancelText 与 confirmText。':
    'Fully customizable bottom action; cancelText and confirmText can be used when omitted.',
  完整内容排版: 'Complete content layout',
  '完整数据无法在一个视图中高效加载或理解。':
    'The complete data cannot be efficiently loaded or understood in a single view.',
  完整应用框架: 'Complete application framework',
  危险操作: 'Dangerous operation',
  '危险操作使用 destructive 进行视觉提示，但最终删除仍应提供确认或撤销能力。':
    'Dangerous operations use destructives for visual cues, but final deletion should still provide the ability to confirm or undo.',
  '微调浮层对齐方式与触发器间距。':
    'Fine-tune floating layer alignment and trigger spacing.',
  '微调浮层对齐和与触发器的间距。':
    'Fine-tune overlay alignment and spacing from triggers.',
  '微调通知标记相对锚点的水平与垂直位置。':
    'Fine-tune the horizontal and vertical position of the notification marker relative to the anchor point.',
  '为包裹所有面板的稳定视口添加样式，适合固定内容区尺寸、边框和背景。':
    'Adds styles for a stable viewport that wraps all panels, suitable for fixed content area dimensions, borders, and background.',
  '为触发器、图标和状态提供可感知名称。':
    'Provide sensible names for triggers, icons, and states.',
  '为当前布局项扩展样式类。':
    'Extends the style class for the current layout item.',
  '为等高单行数据建立纵向虚拟窗口；Header 固定在滚动容器顶部，并继续支持横向滚动和 fixed 列。':
    'Create a vertical virtual window for equal-height single-line data. Header stays pinned to the top of the scroll container, with horizontal scrolling and fixed columns still supported.',
  '为独立 Spinner 提供描述当前任务的 aria-label，例如“正在同步环境状态”。':
    'Provide standalone spinners with an aria-label describing the current task, such as "synchronizing environment state".',
  '为辅助技术提供包含单位和上下文的完整数值文本。':
    'Provides complete numeric text including units and context for assistive technologies.',
  '为可排序列提供一致的按钮、状态切换和图标。':
    'Provide consistent buttons, state toggles, and icons for sortable columns.',
  '为空集合或缺失结果提供稳定占位，并通过 props 配置图标、标题、说明和操作。':
    'Provide stable placeholders for empty collections or missing results, and configure icons, titles, descriptions, and actions via props.',
  '为控件提供简短补充说明。':
    'Provides a brief additional description for the control.',
  '为每个标签触发器扩展样式。': 'Expand styles for each label trigger.',
  '为每个内容面板扩展样式；切换动效会作用于该节点。':
    'Expand the style for each content panel; the switching animation will be applied to the node.',
  '为每个页码生成可复制、可打开新窗口的真实地址。':
    'Generate a real address that can be copied and opened in a new window for each page number.',
  '为容器提供明确高度后，通过 orientation="vertical" 构建纵向参数控制。':
    'After providing the container with an explicit height, build vertical parameter control via orientation="vertical" .',
  '为手势模式定义分段展开位置。':
    'Defines the segment expansion position for gesture mode.',
  '为首项显示内置首页图标，或传入自定义图标。':
    'Display the built-in home page icon for the first item, or pass in a custom icon.',
  '为受限区域提供一致的滚动体验。':
    'Provides a consistent scrolling experience for restricted areas.',
  '为外部协作者设置可执行的操作。':
    'Set executable actions for external collaborators.',
  '为虚拟行提供跨滚动稳定的业务主键；大型数据集不应使用数组索引。':
    'Provide a business primary key for virtual rows that is stable across scrolls; array indexes should not be used for large data sets.',
  '为一组相关元素提供一致的方向、间距、对齐和换行规则。':
    'Provide consistent direction, spacing, alignment, and wrapping rules for a group of related elements.',
  '为展开状态、虚拟滚动和 React 渲染提供稳定的业务行标识。':
    'Provides stable business row identification for expanded state, virtual scrolling, and React rendering.',
  '为长文本提供清楚的标签、字符上限、当前计数和提交条件。':
    'Provide clear labels, character limits, current count, and submission conditions for long text.',
  '为纵向或横向溢出边缘添加随滚动距离变化的渐隐。':
    'Adds a fade that changes with scroll distance to vertical or horizontal overflow edges.',
  '为组内所有选项设置统一变体，单个 option 可单独覆盖。':
    'Set a unified variant for all options in the group, and individual options can be overridden individually.',
  '为组内头像和自动生成的计数项提供统一尺寸与形状。':
    'Provides uniform size and shape for group avatars and automatically generated count items.',
  未读提醒: 'Unread reminder',
  未分配: 'Not allocated',
  未选择: 'Not selected',
  '未选择日期时的提示。': 'Prompt when no date is selected.',
  位: 'Bit',
  位负责人: 'person in charge',
  '位协作者，其余自动汇总':
    'collaborators, and the rest are automatically summarized',
  位置: 'Location',
  文本格式: 'text format',
  文档: 'document',
  '文档、详情页和内容页面需要稳定的标题层级。':
    'Documents, detail pages, and content pages require a stable title hierarchy.',
  文档草稿: 'Document draft',
  文档草稿已归档: 'Document draft archived',
  文档大纲: 'Document outline',
  文档覆盖率: 'Document coverage',
  文档已保存: 'Document saved',
  文档已同步: 'Documents synced',
  文档站资源已生成并压缩:
    'Documentation site resources have been generated and compressed',
  文档中心: 'Document Center',
  文件: 'document',
  文件操作: 'File operations',
  '文件和编辑菜单包含分组、图标、快捷键、禁用状态与危险操作，并提供实际反馈。':
    'File and edit menus contain groups, icons, shortcut keys, disabled states, dangerous actions, and provide practical feedback.',
  文件列表: 'file list',
  '文件树、列表或导航需要与详情内容共享同一工作区。':
    'The file tree, list, or navigation needs to share the same workspace as the detail content.',
  文章标题: 'Article title',
  '文章封面、视频和商品图需要在不同宽度下保持一致构图。':
    'Article covers, videos, and product images need to maintain consistent composition across different widths.',
  文字链接: 'text link',
  稳定: 'Stablize',
  '稳定的内容视口保持边框和尺寸不动；淡入或方向滑动只作用于面板内容，系统减少动态效果时自动降级。':
    'A stable content viewport keeps its borders and dimensions unchanged; fade-in or directional sliding only affects panel content, and the system automatically degrades when reducing dynamic effects.',
  '稳定的排版让用户先理解内容，再自然地注意到设计。':
    'Stable layout allows users to understand the content first and then naturally notice the design.',
  我的工作区: 'my workspace',
  无内容时显示状态圆点: 'Show status dot when there is no content',
  '无匹配行时跨列展示的说明。':
    'Instructions for displaying across columns when there are no matching rows.',
  无障碍: 'Accessibility',
  吴: 'Wu',
  系: 'Tie',
  系统: 'system',
  系统通知: 'System notification',
  下: 'Down',
  下边框: 'bottom border',
  下方: 'below',
  下方内容: 'content below',
  下划线: 'Underline',
  下划线链接: 'Underlined links',
  '下拉节点用于切换同级位置；分隔符和样式只改变视觉表达，不改变路径语义。':
    'Drop-down nodes are used to switch sibling positions; separators and styles only change the visual expression, not the path semantics.',
  下一步: 'Next step',
  下一项: 'Next item',
  下一页: 'Next page',
  下载: 'download',
  '下载链接资源，仅在设置 href 时使用。':
    'Download link resource, only used when setting href.',
  下载日志: 'Download log',
  下载原始文件: 'Download original file',
  '先发布到 10% 的生产实例': 'Release to 10% of production instances first',
  '先灰度 10': 'Grayscale 10 first',
  '先灰度 10%，观察十分钟后全量发布。':
    'First set the grayscale to 10%, observe it for ten minutes and then release it in full.',
  '显示 Tooltip': 'Show Tooltips',
  显示侧栏: 'Show sidebar',
  '显示或隐藏自动生成的 Table Header。':
    'Show or hide the automatically generated Table Header.',
  显示名称: 'display name',
  显示内容: 'Show content',
  '显示通知数量；传入数字时可配合 overflowCount 自动生成封顶文案。':
    'Display the number of notifications; when passing in a number, it can be used with overflowCount to automatically generate capping copy.',
  显示行号: 'Show line number',
  '显示用于展开候选列表的尾部按钮。':
    'Shows a tail button for expanding the candidate list.',
  现在: 'Now',
  线型: 'linear',
  '限制多行文本可输入的字符数量。':
    'Limit the number of characters that can be entered for multi-line text.',
  '限制可见头像数量，并自动将剩余数量显示为 +N。':
    'Limit the number of visible avatars and automatically display the remaining number as +N.',
  '限制允许输入的字符类型。':
    'Limit the types of characters allowed to be entered.',
  相关组件: 'Related components',
  '相邻控件需要折叠边框与圆角时，使用 Stack.Compact 形成连续轮廓。':
    'When adjacent controls need to collapse their borders and rounded corners, use Stack.Compact to form a continuous outline.',
  '相同内容需要在水平、垂直或窄屏换行布局之间切换。':
    'The same content needs to switch between horizontal, vertical, or narrow wrap layouts.',
  详情: 'Details',
  详情面板: 'Details panel',
  响应式: 'Responsive',
  响应式封面编辑: 'Responsive cover editing',
  响应式瀑布布局示例: 'Responsive waterfall layout example',
  响应式上限: 'Responsive cap',
  '响应右键或菜单键的目标元素。':
    'The target element that responds to the right click or menu key.',
  向后滚动标签: 'Scroll tabs backward',
  '向列表末尾方向滚动按钮的可访问名称。':
    'Accessible name of the button that scrolls toward the end of the list.',
  '向列表起始方向滚动按钮的可访问名称。':
    'Accessible name of the button that scrolls toward the start of the list.',
  '向内部内容 div 传递标准 HTML、ARIA、data 属性和事件。':
    'Pass standard HTML, ARIA, data attributes and events to the inner content div.',
  向前滚动标签: 'scroll tab forward',
  向日葵的夏天: 'sunflower summer',
  '向提示内容 div 传递标准 HTML、ARIA、data 属性和事件。':
    'Pass standard HTML, ARIA, data attributes and events to the prompt content div.',
  '向真实滚动视口传递 ref、事件、ARIA、className 与 style。':
    'Pass ref, event, ARIA, className and style to the real scroll viewport.',
  '项 · 第': 'Item · No.',
  '项检查均已通过。': 'All inspections have passed.',
  项目: 'project',
  项目编号: 'Project number',
  项目导航: 'Project navigation',
  项目地址: 'Project address',
  项目概览: 'Project overview',
  项目进度: 'Project progress',
  项目进行中: 'Project in progress',
  项目空间: 'project space',
  项目名称: 'Project name',
  项目设置: 'Project settings',
  项目详情: 'Project details',
  项目域名: 'Project domain name',
  项已开启: 'item is turned on',
  消息提醒: 'Message reminder',
  小: 'Small',
  小按钮: 'small button',
  小号加载: 'Trumpet loading',
  '校验、错误提示与提交状态由同一份表单状态驱动。':
    'Validation, error prompts and submission status are driven by the same form status.',
  校验失败: 'Verification failed',
  协议: 'protocol',
  协作动态: 'Collaboration dynamics',
  协作消息: 'Collaboration messages',
  斜体: 'italics',
  '新的主题设置已经应用到当前工作区。':
    'The new theme settings have been applied to the current workspace.',
  新功能上线时发送站内通知:
    'Send site notifications when new features are launched',
  新加坡: 'Singapore',
  新建窗口: 'New window',
  新建内容封面: 'Create new content cover',
  新建文档: 'Create new document',
  新建文件: 'Create new file',
  新建项目: 'New project',
  '新实例已全部就绪，当前继续观察登录成功率与令牌刷新延迟。':
    'The new instances are all ready, and we continue to observe the login success rate and token refresh delay.',
  信息: 'information',
  行: 'OK',
  行展开: 'Row expansion',
  形状与尺寸: 'Shape and size',
  '修改成员看到的工作区名称。': 'Modify the workspace name that members see.',
  修改设置并邀请新成员: 'Modify settings and invite new members',
  虚拟滚动: 'virtual scrolling',
  '虚拟滚动会提供 aria-rowcount 和真实 aria-rowindex，业务仍需保证每一行高度固定。':
    'Virtual scrolling will provide aria-rowcount and real aria-rowindex, and the business still needs to ensure that the height of each row is fixed.',
  '虚拟滚动时在 Table 上提供 aria-rowcount，并通过 rowIndexOffset 保持每条可视行的真实 aria-rowindex。':
    'Provides an aria-rowcount on the Table when virtual scrolling, and maintains the true aria-rowindex of each visible row via rowIndexOffset.',
  '虚拟滚动只适用于固定高度的单行数据，不与 expandable 同时使用；需要动态详情高度时关闭 virtual。':
    'Virtual scrolling is only applicable to single-row data of fixed height and cannot be used together with expandable; turn off virtual when dynamic detail height is required.',
  虚线: 'dotted line',
  需处理: 'Need processing',
  需要: 'need',
  '需要把临时面板限制在工作台、预览器或卡片等局部父容器中。':
    'Temporary panels need to be restricted to local parent containers such as workbench, previewer, or cards.',
  '需要表达列表、文章或分组语义时，应在内容节点上提供对应元素或角色。':
    'When you need to express list, article or grouping semantics, you should provide corresponding elements or roles on content nodes.',
  '需要表达选择关系时仍应使用 Radio.Group 或 Toggle.Group。':
    'Radio.Group or Toggle.Group should still be used when expressing selection relationships.',
  '需要持续查看月份与排期上下文时，使用 inline 展示形式并同步反馈选择结果。':
    'When you need to continuously view the month and scheduling context, use the inline display format and provide synchronous feedback on the selection results.',
  需要处理: 'Need to be processed',
  '需要从当前视口边缘承接筛选、详情、导航或短流程任务。':
    'It is necessary to take over filtering, details, navigation or short-process tasks from the edge of the current viewport.',
  '需要分组、禁用项、多选或自定义弹出层时组合 Select 的对应子组件。':
    'Combine the corresponding subcomponents of Select when you need to group, disable items, multi-select or customize the popup layer.',
  '需要覆盖默认、受控、禁用和窄屏状态时。':
    'When you need to override the default, controlled, disabled and narrow screen states.',
  '需要将一组相关信息和操作组织成独立内容单元。':
    'A set of related information and actions needs to be organized into independent units of content.',
  '需要交互时使用 href，或把 Button、链接作为通知标记的 children。':
    'Use href when interaction is required, or use Button or links as children of notification tags.',
  '需要解释空状态原因，并提供一个清晰、可执行的下一步。':
    'You need to explain the reason for the empty status and provide a clear, actionable next step.',
  '需要仅图标按钮时，必须同时提供可访问名称。':
    'When an icon-only button is required, an accessible name must also be provided.',
  '需要精确控制表头、汇总、固定列、展开详情或与 Pagination 的组合方式。':
    'Need precise control over table headers, summaries, fixed columns, expanded details, or combinations with Pagination.',
  '需要连接表单状态、校验规则、错误反馈与提交行为。':
    'It is necessary to connect form status, validation rules, error feedback and submission behavior.',
  '需要轮播营销亮点、版本更新或媒体内容，并允许用户主动前后浏览。':
    'It is necessary to carousel marketing highlights, version updates or media content and allow users to actively browse forward and backward.',
  '需要明确区分标题信息、主体内容和底部操作。':
    'It is necessary to clearly distinguish title information, main content and bottom operations.',
  '需要强调统计指标、余额、计数或实时读数的变化过程。':
    'Need to emphasize the changing process of statistical indicators, balances, counts or real-time readings.',
  '需要筛选、排序、分页、固定列、分组表头、行展开或虚拟滚动中的任意能力。':
    'Any ability to filter, sort, paging, fixed columns, group headers, row expansion, or virtual scrolling is required.',
  '需要筛选、排序、列分组和复杂行模型时使用 Table，不要把这些状态塞进基础 Table。':
    'Use Table when filtering, sorting, column grouping, and complex row models are required. Do not cram these states into the base Table.',
  '需要使用边缘渐隐提示滚动方向，同时保持原生滚动和触控惯性。':
    'Edge fades need to be used to indicate scrolling direction while maintaining native scrolling and touch inertia.',
  '需要通过点击打开包含详情、表单或轻量操作的非模态浮层。':
    'A non-modal overlay containing details, forms, or lightweight operations needs to be opened by clicking.',
  '需要统一正文、辅助文字、引用和代码的排版节奏。':
    'It is necessary to unify the layout rhythm of main text, auxiliary text, quotations and codes.',
  '需要用户立即确认的危险操作使用 Alert Dialog，持续存在的页面状态使用 Alert。':
    'Use Alert Dialog for dangerous actions that require immediate confirmation from the user, and Alert for persistent page states.',
  '需要预留稳定的媒体区域，避免图片加载后引起页面跳动。':
    'A stable media area needs to be reserved to avoid page jumps after images are loaded.',
  '需要约束比例的媒体或内容。':
    'Media or content that requires proportional constraints.',
  '需要在不离开当前上下文的前提下，通过悬停或键盘聚焦预览人物、资源等实体信息。':
    'It is necessary to preview entity information such as characters and resources through hovering or keyboard focus without leaving the current context.',
  '需要在固定数位中更新数字，减少整段文本突然替换造成的视觉跳动。':
    'Numbers need to be updated in fixed digits to reduce visual jitter caused by sudden replacement of the entire text.',
  '需要在横向工具栏或元信息之间建立分组边界。':
    'Grouping boundaries need to be established between horizontal toolbars or meta information.',
  '需要在紧凑状态行、媒体占位或操作旁边提供轻量等待反馈。':
    'Need to provide lightweight wait feedback next to a compact status line, media placeholder, or action.',
  '需要在同一输入任务中组合说明、附加动作和状态反馈。':
    'There is a need to combine instructions, additional actions, and status feedback in the same input task.',
  '需要在纵向内容之间建立章节边界。':
    'Chapter boundaries need to be established between vertical content.',
  许: 'X',
  许澄: 'Xu Cheng',
  许澄提交了发布说明: 'Xu Cheng submitted release notes',
  '悬停、聚焦或触摸时轻微放大，越过边界后柔和回弹。':
    'Zoom in slightly when hovering, focusing or touching, and bounce back softly when crossing boundaries.',
  '悬停、聚焦或点击右侧属性行，查看根节点 className/style 与 CardClassNames/CardStyles 各字段对应的真实区域。':
    'Hover, focus, or click a property row to inspect the root targeted by className/style and the regions targeted by CardClassNames/CardStyles.',
  悬停外围按钮: 'Hover peripheral buttons',
  悬停预览负责人: 'Hover preview manager',
  选项配置: 'Options configuration',
  '选择 Alert 状态': 'Select Alert status',
  '选择版本和发布时间。': 'Select a version and release time.',
  选择标签样式: 'Select label style',
  '选择纯文本、两侧分隔线或下边框标记。':
    'Choose from plain text, side dividers, or bottom border markers.',
  选择发布日期: 'Select release date',
  '选择发布时间，并为值班成员补充本次发布说明。':
    'Select a release time and add instructions for this release to members on duty.',
  选择方案: 'Options',
  选择工作区: 'Select workspace',
  '选择或清除日期时调用。': 'Called when a date is selected or cleared.',
  '选择镜面扫光、明暗呼吸或静态占位；系统要求减少动态效果时，扫光会自动停止。':
    'Choose mirror sweep, light and dark breathing or static space occupancy; when the system requires reducing dynamic effects, the sweep will automatically stop.',
  选择轮播页面: 'Select carousel page',
  '选择内联日历或由按钮触发的弹出日历。':
    'Choose between an inline calendar or a pop-up calendar triggered by a button.',
  选择内容切换动效: 'Select content switching animation',
  '选择日期后，团队会在当天 10:00 收到发布提醒。':
    'After selecting a date, the team will receive a release reminder at 10:00 that day.',
  选择通知方式: 'Choose notification method',
  '声明媒体内容是图标还是图片。':
    'Declare whether the media content is an icon or an image.',
  '选择文本、邮箱、密码等原生输入类型。':
    'Choose from native input types such as text, email, password, etc.',
  '选择新项目时调用。': 'Called when a new item is selected.',
  '选择一个方向，在当前卡片内打开筛选面板。':
    'Select a direction to open the filter panel within the current card.',
  '选择一个日期，未选择时保持为草稿。':
    'Select a date, or keep it as a draft if not selected.',
  '选择一个状态，在页面内显示对应提示。':
    'Select a status and the corresponding prompt will be displayed on the page.',
  选择与状态: 'Choices and Status',
  选择状态: 'Select status',
  选择组件文档或导出格式: 'Select component document or export format',
  '选中时以向外爆开的粒子确认操作，取消选中时仅收回勾选标记；同时展示不确定和禁用状态。':
    'When selected, the operation is confirmed with particles exploding outward. When unselected, only the check mark is withdrawn; both the uncertain and disabled states are displayed.',
  '选中状态变化时调用。': 'Called when the selected state changes.',
  '渲染跨越指定列数的详情行，并保留合法的表格语义。':
    'Renders detail rows spanning the specified number of columns while preserving legal table semantics.',
  '渲染面板、遮罩、视口、滑动手柄和标准关闭按钮。':
    'Render panels, masks, viewports, slide handles, and standard close buttons.',
  '渲染主要按钮、链接或一组相关操作。':
    'Render a main button, link, or set of related actions.',
  压缩质量: 'Compression quality',
  压缩质量滑块: 'Compression quality slider',
  压缩质量数值: 'Compression quality value',
  延迟: 'Delay',
  研发项目: 'R&D projects',
  '颜色、圆角和排版由语义令牌统一约束，主题切换时不需要逐个覆盖组件。':
    'Color, rounded corners and typography are uniformly constrained by semantic tokens, and there is no need to cover components one by one when switching themes.',
  '验证码内容变化时调用，并返回完整字符串。':
    'Called when the content of the verification code changes, and the complete string is returned.',
  验证码形态: 'Verification code form',
  '验证码已发送至 he***@example.com':
    'Verification code has been sent to he***@example.com',
  验证码已填写完整: 'Verification code has been filled in completely',
  验证你的邮箱: 'Verify your email',
  样式: 'style',
  邀请团队成员: 'Invite team members',
  邀请已发送至: 'Invitation sent to',
  页: 'Page',
  '页，共 5 页': 'Page of 5',
  页脚信息: 'Footer information',
  '页码、上一页和下一页共同更新当前状态，并在边界停止。':
    'The page number, previous page and next page together update the current state and stop at the boundary.',
  '页码变化时回传目标页。':
    'Return the target page when the page number changes.',
  页码点位置: 'Page point position',
  页面层级: 'Page hierarchy',
  '页面存在三层以上的稳定信息层级。':
    'There are more than three levels of stable information levels on the page.',
  页面骨架: 'Page skeleton',
  '页面或局部布局底部的固定区域。':
    'A fixed area at the bottom of a page or partial layout.',
  '页面或局部布局顶部的固定区域。':
    'A fixed area at the top of a page or partial layout.',
  页面内容: 'Page content',
  '页面需要区分主要、次要、危险和低强调操作。':
    'Pages need to differentiate between primary, secondary, dangerous, and low-emphasis actions.',
  '页面需要稳定的页头、主体和页脚结构。':
    'Pages need a stable header, body, and footer structure.',
  '页面只需要控制一个内容区域；多个并列区域需要互相协调时使用 Accordion。':
    'The page only needs to control one content area; use Accordion when multiple parallel areas need to coordinate with each other.',
  一次只保留一个面板: 'Keep only one panel at a time',
  '一个 items 数组同时描述图标、快捷键、禁用状态和危险操作。':
    'An items array simultaneously describes icons, shortcut keys, disabled states, and dangerous actions.',
  '一级入口需要同时展示分类、说明或推荐内容。':
    'The first-level entrance needs to display classification, description or recommended content at the same time.',
  '一套用于构建清晰、稳定界面的基础组件。':
    'A set of basic components for building clear, stable interfaces.',
  '一致的标题层级和正文节奏，让内容清晰、可信且易于阅读。':
    'Consistent heading hierarchy and body rhythm make content clear, believable, and easy to read.',
  '一致的界面，来自每一次一致的内容决策。':
    'A consistent interface comes from consistent content decisions every time.',
  '一组紧密相关的工具需要共享单选或多选状态与键盘导航。':
    'A set of closely related tools needs to share single-select or multiple-select states and keyboard navigation.',
  '一组可见选项允许同时选中多个值。':
    'A set of visible options allows multiple values ​​to be selected at the same time.',
  '一组控件或标签需要保持稳定间距，但不需要共享选择状态。':
    'A group of controls or labels needs to maintain stable spacing but does not need to share selection state.',
  '一组选项只允许选中一个值。':
    'A set of options allows only one value to be selected.',
  '依次设置初始、最小和最大尺寸；数字按像素解释，无单位字符串按百分比解释。':
    'Sets the initial, minimum, and maximum dimensions in order; numbers are interpreted as pixels, unitless strings are interpreted as percentages.',
  移动到工作区: 'Move to workspace',
  '移动端空间不足时，应评估是否改用纵向排列或折叠导航。':
    'When there is insufficient space on the mobile terminal, you should evaluate whether to use vertical arrangement or folding navigation instead.',
  移至废纸篓: 'Move to Trash',
  已撤销上一步: 'Previous step has been undone',
  '已打开 Menubar 文档': 'Menubar document opened',
  '已打开 Navigation Menu 文档': 'Navigation Menu document opened',
  '已导出 PDF': 'Exported PDF',
  '已导出 PNG': 'Exported PNG',
  已读: 'Read',
  已发布: 'Published',
  已复制: 'Copied',
  已归档项目: 'Archived items',
  已回滚: 'Rolled back',
  '已经补充完成，可以重新评审。':
    'The supplement has been completed and can be reviewed again.',
  已就绪服务: 'Ready service',
  已认证: 'Certified',
  '已通过 · 21:42': 'Passed · 21:42',
  '已通过 · 21:46': 'Passed · 21:46',
  已完成: 'Completed',
  已新建空白文档: 'Created a new blank document',
  已选择: 'Selected',
  '已选择：归档': 'Selected: Archive',
  '已选择：上传文件': 'Selected: Upload file',
  '已选择：新建文件': 'Selected: New file',
  '已选择：移至废纸篓': 'Selected: Move to Trash',
  '已选择：原始文件': 'Selected: Original file',
  '已选择：CSV 表格': 'Selected: CSV table',
  '已选择：PDF 文档': 'Selected: PDF document',
  '已选择：PNG 图片': 'Selected: PNG images',
  已移至废纸篓: 'Moved to Trash',
  '以非阻塞队列反馈短暂结果。':
    'Feed back transient results in a non-blocking queue.',
  '以基础 Table 为渲染层，组装数据、列模型、筛选、排序、分页、展开和虚拟滚动。':
    'Use the basic Table as the rendering layer to assemble data, column models, filtering, sorting, paging, expansion and virtual scrolling.',
  '以键帽形式展示键盘按键和快捷键组合。':
    'Display keyboard keys and shortcut key combinations as keycaps.',
  '以受控方式切换一行的展开状态，并同步 aria-expanded 与箭头方向。':
    'Toggles the expanded state of a row in a controlled manner, synchronizing aria-expanded with arrow direction.',
  '以受控或非受控方式管理菜单开关状态。':
    'Manage menu switch states in a controlled or uncontrolled manner.',
  '以受控或非受控方式管理菜单状态。':
    'Manage menu status in a controlled or uncontrolled manner.',
  '以受控或非受控方式管理打开状态。':
    'Manage open states in a controlled or uncontrolled manner.',
  '以受控或非受控方式管理当前选择。':
    'Manage the current selection in a controlled or uncontrolled manner.',
  '以受控或非受控方式管理当前展开入口。':
    'Manage the current expansion entry in a controlled or uncontrolled manner.',
  '以受控或非受控方式管理搜索关键词。':
    'Manage search keywords in a controlled or uncontrolled manner.',
  '以受控或非受控方式指定当前展开项。':
    'Specifies the current expansion item in a controlled or uncontrolled manner.',
  '以受控状态展开一行，并使用合法的跨列详情行承载内容。':
    'Expand a row in a controlled manner and use legal cross-column detail rows to host content.',
  '以缩略卡形式突出文件媒体，适合素材选择、上传结果和紧凑画廊。':
    'Highlight file media in the form of thumbnail cards, suitable for material selection, upload results and compact galleries.',
  '以逐位滚动动画呈现持续变化的数字；组件只负责展示，数值和业务操作由外部状态控制。':
    'Continuously changing numbers are presented with bit-by-bit scrolling animation; the component is only responsible for display, and the values ​​and business operations are controlled by external states.',
  '以逐位滚动动画展示变化中的数值。':
    'Display changing values ​​in a bit-by-bit scrolling animation.',
  '异步操作使用 aria-busy，并避免在处理中改变按钮宽度。':
    'Use aria-busy for asynchronous operations and avoid changing button width in the middle of processing.',
  异步发布结果: 'Publish results asynchronously',
  '异常时切回上一版本。':
    'Switch back to the previous version when an exception occurs.',
  '因悬停、聚焦或关闭导致状态变化时调用。':
    'Called when the state changes due to hover, focus, or close.',
  音量: 'volume',
  '引用和行内代码。': 'Quotes and inline code.',
  '隐藏滚动条不会禁用滚动；仍需确保触控、滚轮与键盘均可到达全部内容。':
    'Hiding scroll bars does not disable scrolling; you still need to ensure that all content is reachable by touch, scroll wheel, and keyboard.',
  隐藏图标: 'Hide icon',
  应用策略: 'Apply strategy',
  应用命令: 'Apply command',
  应用筛选: 'Apply filters',
  '应用需要在内容左侧或右侧加入导航、目录或详情区域。':
    'Apps need to include navigation, table of contents, or details areas to the left or right of the content.',
  应用与组件包均未发现类型错误:
    'No type errors were found in the application or component package',
  '用 label、value 和 showValue 同时说明进度对象、完成比例和剩余范围。':
    'Use label, value, and showValue to simultaneously describe the progress object, completion percentage, and remaining range.',
  '用标题、导语、正文、引用、行内代码和辅助信息组织一段连贯、可阅读的内容。':
    'Organize a coherent, readable piece of content using a title, lead, text, quotes, inline code, and supporting information.',
  '用户确认操作时调用。': 'Called when the user confirms the operation.',
  '用户需要根据当前任务主动分配相邻区域的可用空间。':
    'Users need to proactively allocate available space in adjacent areas based on current tasks.',
  '用户需要理解当前位置并返回任一上级页面。':
    'Users need to understand their current location and return to any previous page.',
  '用户需要通过键盘连续切换多个顶层菜单并执行高密度操作。':
    'Users need to continuously switch multiple top-level menus and perform high-density operations through the keyboard.',
  '用户需要在当前位置附近跳转，或返回之前浏览的结果页。':
    'Users need to jump near their current location or return to previously viewed results pages.',
  '用户需要执行一个明确动作，例如提交表单、创建内容或确认选择。':
    'The user needs to perform an explicit action, such as submitting a form, creating content, or confirming a selection.',
  '用户展开或收起内容时调用。':
    'Called when the user expands or collapses content.',
  '用简短文本标记对象当前最重要的状态或属性。':
    "Use short text to mark the object's most important current status or properties.",
  '用清晰的头部、内容和底部区域承载同一主题的信息与操作。':
    'Use clear header, content, and footer areas to carry information and actions on the same topic.',
  '用水平或垂直分隔线组织相邻但不同层级的内容。':
    'Use horizontal or vertical dividers to organize adjacent but different levels of content.',
  '用同一条通知承接异步任务的加载、成功或失败阶段，避免重复堆叠消息。':
    'Use the same notification to undertake the loading, success or failure stages of an asynchronous task to avoid repeated stacking of messages.',
  '用统一的主题、信息层级和交互提示呈现业务趋势；从完整案例开始，替换数据即可落地。':
    'Use unified themes, information levels and interactive prompts to present business trends; start with a complete case and replace the data to implement it.',
  '用旋转图标表示无法预估完成时间的短时等待；尺寸只控制图标本身，组件不会附带按钮或布局容器。':
    'Use a rotating icon to represent a short wait for which the completion time cannot be estimated; the size only controls the icon itself, and the component does not come with buttons or layout containers.',
  用于工具栏或密度较高的工作区: 'Used for toolbars or dense workspaces',
  '用于生成公开资料地址。': 'Used to generate public profile addresses.',
  '用与最终内容相近的尺寸组合骨架，加载完成前维持页面结构稳定。':
    'Assemble the skeleton with a size similar to the final content to keep the page structure stable until loading is complete.',
  '优化筛选器响应速度，并修复轮播从最后一项回到第一项时的切换动效。':
    'Optimize filter response speed and fix the switching effect when the carousel returns from the last item to the first item.',
  '优化筛选器响应速度，并修复轮播首尾切换动效。':
    'Optimize the filter response speed and fix the animation of switching between the beginning and the end of the carousel.',
  幽灵按钮: 'ghost button',
  由值班负责人确认本次变更:
    'The change will be confirmed by the person in charge on duty',
  邮件通知: 'Email notification',
  邮箱地址: 'Email address',
  '邮箱格式不正确。': 'The email format is incorrect.',
  有新的系统通知: 'There is a new system notification',
  右: 'right',
  右侧: 'right side',
  右侧详情: 'Details on the right',
  右对齐的局部导航: 'Right aligned local navigation',
  右上: 'upper right',
  右下: 'lower right',
  与: 'and',
  '与 Badge 组合': 'Combined with Badge',
  '与 Pagination 组合': 'Combined with Pagination',
  '语义化的四级标题。': 'Semantic level four headings.',
  语义样式: 'semantic style',
  语义状态: 'semantic status',
  '预计 4 分钟': 'Estimated 4 minutes',
  预检结果: 'Preflight results',
  '预检任务已开始。': 'The preflight task has started.',
  预检已通过: 'Pre-flight passed',
  预览: 'Preview',
  预览环境: 'Preview environment',
  预览环境部署中: 'Preview environment is being deployed',
  预览环境同步中: 'Preview environment synchronizing',
  预览已刷新: 'Preview refreshed',
  预算区间: 'budget range',
  '原生按钮类型，仅在未设置 href 时使用。':
    'Native button type, only used when href is not set.',
  原生属性: 'Native properties',
  圆角方形: 'rounded square',
  圆形: 'round',
  月: 'moon',
  '越过指定像素后才将对应边缘视为存在溢出。':
    'The corresponding edge is considered to have overflow only after passing the specified pixel.',
  '允许其他成员联系你。': 'Allow other members to contact you.',
  '允许其他成员通过资料页联系你。':
    'Allow other members to contact you through your profile.',
  '允许同时按下多个 Toggle。':
    'Allows multiple Toggles to be pressed simultaneously.',
  允许同时核对多个面板: 'Allows checking of multiple panels simultaneously',
  '允许同时展开多个面板，或禁用整个 Accordion。':
    'Allow multiple panels to be expanded at the same time, or the entire Accordion disabled.',
  '允许同时展开多个条目。':
    'Allows multiple entries to be expanded at the same time.',
  '允许选择多个值，并配合 SelectChips 展示。':
    'Allows selection of multiple values ​​and displays with SelectChips.',
  '运行日志和临时域名会一并移除，此操作无法撤销。':
    'The running log and temporary domain name will be removed together, and this operation cannot be undone.',
  运行稳定: 'Stable operation',
  运行中: 'Running',
  在: 'exist',
  '在 ColumnDef 中嵌套 columns 即可形成多级表头；Table 会计算跨列、层级和空状态宽度。':
    'Nesting columns in ColumnDef can form a multi-level header; Table will calculate the width across columns, levels and empty states.',
  '在 custom 变体中承载状态摘要和自定义操作。':
    'Host status summaries and custom actions in the custom variant.',
  '在 custom 变体中组合完全自定义的头部内容。':
    'Combine fully customized header content in custom variants.',
  '在 Portal 中渲染定位后的浮层内容。':
    'Render the positioned floating content in the Portal.',
  '在 Provider 后代中取得绑定当前通知通道的 toast API。':
    'Get the toast API bound to the current notification channel in the Provider descendant.',
  '在 TabsList 上快速居中标签列表。':
    'Quickly center a list of tabs on TabsList.',
  '在不离开当前页面的情况下完成一项聚焦编辑任务，并保留明确的取消和保存动作。':
    'Complete a focused editing task without leaving the current page and retain clear cancel and save actions.',
  '在菜单、提示或命令面板中展示操作按键。':
    'Display action keys in a menu, prompt, or command panel.',
  '在操作列内组合一个或多个按钮、菜单或链接，默认居中并可通过 align 调整。':
    'Group one or more buttons, menus or links within an action column, centered by default and adjustable via align.',
  '在触发器附近补充少量关联信息与轻量操作，不打断当前阅读上下文。':
    'Add a small amount of relevant information and light operations near the trigger without interrupting the current reading context.',
  '在触发器附近展示富交互浮层。':
    'Display rich interaction overlays near triggers.',
  '在触发器附近展示可交互的关联内容；点击和悬停预览共用同一套内容、定位与受控状态 API。':
    'Display relevant, interactive content near triggers; click and hover previews share the same content, positioning, and controlled state APIs.',
  '在单项配置中设置 span="full"；该项会等待前面所有列结束并独占整行，后续内容再从统一位置继续排列。':
    'Set span="full" in a single item configuration; this item will wait for all previous columns to end and occupy the entire row, and subsequent content will continue to be arranged from the same position.',
  '在分段数据集合之间导航，并明确当前页、相邻页和数据范围。':
    'Navigate between segmented data collections and identify the current page, adjacent pages, and data ranges.',
  '在工具栏右侧使用较小内容面板，并通过 align 控制弹层相对导航的对齐方式。':
    'Use a smaller content panel on the right side of the toolbar, and use align to control the alignment of the popup relative to the navigation.',
  '在轨道起点显示图标，并参与 elastic 边缘反馈。':
    'Displays an icon at the start of a track and engages elastic edge feedback.',
  '在轨道起点显示文字标签。': 'Display a text label at the start of the track.',
  '在轨道终点显示图标，并参与 elastic 边缘反馈。':
    'Display icons at track endpoints and engage elastic edge feedback.',
  '在轨道终点显示文字标签。': 'Display a text label at the end of the track.',
  '在滚动数值前后组合货币、单位或其他视觉内容。':
    'Combine currencies, units, or other visual content before and after scrolling values.',
  '在加载前维持内容布局。': 'Maintain content layout before loading.',
  '在紧凑设置行中选择或清除发布日期，适合表单和筛选器。':
    'Select or clear Publish Date in the compact settings row, fit form and filter.',
  '在连续或离散范围内选择数值。':
    'Select a numeric value in a continuous or discrete range.',
  '在连续内容之间标记关键时间点；分隔线和下边框适合不同密度。':
    'Mark key points in time between consecutive content; dividers and lower borders are suitable for different densities.',
  '在模态层中完成聚焦任务。':
    'Focusing tasks are completed in the modal layer.',
  '在普通 cell 中组合当前记录的按钮、菜单或链接。':
    'Groups the currently recorded buttons, menus, or links in a normal cell.',
  '在受限区域内承载长内容，并以自适应滚动条和边缘渐隐提示剩余内容。':
    'Host long content in a restricted area and hint at remaining content with adaptive scrollbars and edge fades.',
  '在输入控件上方显示块级附加内容，适合说明或辅助设置。':
    'Display block-level additional content above the input control, suitable for instructions or secondary settings.',
  '在输入控件下方显示块级附加内容，适合计数或状态反馈。':
    'Display block-level additional content below the input control, suitable for counting or status feedback.',
  '在输入内容后显示行内文本或关联操作，并保持在同一输入边框内。':
    'Display inline text or associated actions after input, keeping within the same input border.',
  '在输入内容前显示行内图标或文本，并保持在同一输入边框内。':
    'Display an inline icon or text before typing, keeping it within the same input border.',
  '在数值变化时为指示条前沿增加一次短暂的推进动效。':
    'Add a short advancement animation to the leading edge of the indicator bar when the value changes.',
  '在数值推进时显示聚拢在进度前沿的短暂反馈。':
    'Displays brief feedback that converges on the progress front as values ​​advance.',
  '在水平方向空间不足时允许自动换行。':
    'Allow automatic word wrapping when there is insufficient horizontal space.',
  '在同一上下文中切换互斥内容，同时保持页面位置和任务连续性。':
    'Switch mutually exclusive content within the same context while maintaining page position and task continuity.',
  '在同一组中比较默认、校验失败、只读和禁用输入，避免混淆语义。':
    'Compare default, failed validation, read-only and disabled inputs in the same group to avoid confusing semantics.',
  '在头像右下角放置在线点、认证图标或 Badge 等状态节点。':
    'Place status nodes such as online points, certification icons or Badges in the lower right corner of the avatar.',
  '在头像右下角展示在线、认证等状态节点。':
    'Online, authentication and other status nodes are displayed in the lower right corner of the avatar.',
  在线: 'Online',
  在线状态: 'online status',
  '在相邻元素之间插入统一分隔内容。':
    'Insert uniformly separated content between adjacent elements.',
  '在页面边缘短暂反馈操作结果。':
    'Briefly feedback the operation results at the edge of the page.',
  '在页面顶部短暂反馈操作结果；内置 success、info、warning、error 四种语义样式，并可通过 Provider 隔离全局或局部通知通道。':
    'Provides short-term feedback on the operation results at the top of the page; built-in four semantic styles of success, info, warning, and error, and can isolate global or local notification channels through Provider.',
  '在已有选择值时显示清除按钮。':
    'Shows a clear button when a value has been selected.',
  '在应用根部放置 Provider，后代组件通过 useToast 调用 success、info、warning 或 error；默认显示在页面顶部。':
    'Place the Provider at the root of the application, and descendant components call success, info, warning, or error through useToast; they are displayed at the top of the page by default.',
  '在有限空间内展示短小、非交互属性。':
    'Display short, non-interactive properties in a limited space.',
  '在有限空间中轮播同级内容。':
    'Carousel content at the same level in a limited space.',
  在这里单击右键: 'Right click here',
  '在支持交互的节点上禁用操作。':
    'Disable operations on nodes that support interaction.',
  '在支持状态时选择受控或非受控模式。':
    'Select controlled or uncontrolled mode when status is supported.',
  '在组件文档工作台中用 children 组织最近组件与导出格式，顶层菜单同时支持禁用状态。':
    'Use children in the component document workbench to organize recent components and export formats, and the top-level menu also supports the disabled state.',
  暂不可用: 'Not available yet',
  暂无待办: 'Nothing to do yet',
  暂无发布记录: 'No release record yet',
  '增加 24': 'increase 24',
  增长实验: 'growth experiment',
  增长团队: 'growth team',
  窄容器压力测试: 'Narrow vessel pressure testing',
  展开: 'Expand',
  '展开按钮自动同步 aria-expanded；getRowKey 应返回可以辨认且稳定的业务标识。':
    'Expand buttons automatically synchronize aria-expanded; getRowKey should return a recognizable and stable business ID.',
  展开模式: 'Expand mode',
  '展开项变化时调用。': 'Called when the expanded item changes.',
  '展开项变化时回传完整 value 数组。':
    'Return the complete value array when the expansion item changes.',
  展开状态可替换: 'Expanded state can be replaced',
  展示: 'exhibit',
  展示比例: 'Display ratio',
  '展示并操作结构化数据集合。':
    'Display and manipulate structured data collections.',
  '展示当前位置与上级路径，并在层级较深时提供快速返回入口。':
    'Display the current location and upper-level path, and provide a quick return entrance when the level is deep.',
  '展示对话内容，并与头像、滚动区域自由组合。':
    'Display the conversation content and freely combine it with the avatar and scroll area.',
  '展示附件信息、状态与操作。':
    'Display attachment information, status and operations.',
  '展示汇总、总计或表尾说明。': 'Display summaries, totals, or footer notes.',
  '展示任务或流程完成进度。':
    'Demonstrate progress toward completing a task or process.',
  展示上限与重叠程度: 'Impression caps and overlap',
  '展示状态、分类或简短属性，帮助用户快速扫描信息。':
    'Display status, classification or short attributes to help users quickly scan information.',
  '站点导航需要兼顾直接链接和可展开的内容分组。':
    'Site navigation requires a balance between direct links and expandable content groupings.',
  站内通知: 'Site notification',
  '长时间或可量化任务应使用 Progress，首屏结构加载优先使用 Skeleton。':
    'Progress should be used for long-term or quantifiable tasks, and Skeleton should be used first for first-screen structure loading.',
  '折叠相邻控件的间距、边框和圆角，形成连续操作组。':
    'Collapses the spacing, borders, and rounded corners of adjacent controls to form a continuous group of operations.',
  '折叠项和层级菜单支持键盘打开与导航。':
    'Folding items and hierarchical menus support keyboard opening and navigation.',
  '这些宽度只用于验证嵌套场景；组件不会读取固定断点，而是响应当前可用空间。':
    'These widths are only used for validating nested scenarios; the component does not read fixed breakpoints but instead responds to the currently available space.',
  '针对 macOS 和 Windows 展示对应的平台按键。':
    'Shows corresponding platform keys for macOS and Windows.',
  '整个 Header 触发': 'The entire Header triggers',
  整个摘要区域都可点击: 'The entire summary area is clickable',
  整理组件视觉规范: 'Organize component visual specifications',
  '正文段落。': 'body paragraph.',
  '正在部署 Web Console': 'Deploying Web Console',
  正在打开文件: 'Opening file',
  正在发布到生产环境: 'Publishing to production',
  '正在发布到生产环境…': 'Publishing to production...',
  正在加载: 'Loading',
  正在加载组件: 'Loading components',
  '正在加载组件……': 'Loading components...',
  正在上传静态资源: 'Uploading static resources',
  正在生成发布预览: 'Generating release preview',
  正在刷新访问权限: 'Refreshing access permissions',
  正在同步环境状态: 'Synchronizing environment state',
  正在同步静态资源与边缘缓存: 'Synchronizing static resources with edge cache',
  正在校验: 'Verifying',
  '支持对应 button 或 a 的标准 HTML、ARIA、data 属性和事件。':
    'Supports standard HTML, ARIA, data properties and events for button or a.',
  '支持对应 span 或 a 的标准 HTML、ARIA、data 属性和事件。':
    'Supports standard HTML, ARIA, data attributes and events corresponding to span or a.',
  '支持换行，最多': 'Support line breaks, up to',
  执行情况: 'Execution',
  '直接导航到目标页面，active 表示当前位置。':
    'Navigate directly to the target page, active indicates the current location.',
  '直接配置通知容器的位置、数量、持续时间和局部化方式。':
    'Directly configure the location, number, duration, and localization of notification containers.',
  '值班成员将在 15 分钟后收到提醒。':
    'On-duty members will be alerted after 15 minutes.',
  '值班成员将在开始前 15 分钟收到提醒。':
    'On-duty members will receive a reminder 15 minutes before start time.',
  值班负责人: 'person in charge of duty',
  职位: 'Position',
  只更新当前区域: 'Only update the current area',
  '只能使用小写字母、数字和连字符。':
    'Only lowercase letters, numbers, and hyphens can be used.',
  '只提供标题和内容，即可快速组织一组相关信息。':
    'Quickly organize a set of related information by providing just a title and content.',
  '只显示通知红点，不展示 count 内容。':
    'Only the notification red dot is displayed, and the count content is not displayed.',
  '只渲染可视区域附近的单行数据；对应的':
    'Only render a single row of data near the visible area; the corresponding',
  '只有图标的行操作必须包含当前记录，例如“v0.12.0 更多操作”，不能让每行都只有“更多”。':
    'Row actions with only icons must contain the current record, such as "v0.12.0 More Actions", not each row with only "More".',
  '只在正在更新的内容区域放置图标与状态说明，页面其他部分保持可阅读、可操作。':
    'Only place icons and status descriptions in the content area being updated, and keep other parts of the page readable and operable.',
  '指定当前字段在表单数据中的唯一路径。':
    'Specifies the unique path of the current field in the form data.',
  '指定由顶部输入框筛选的列 id。':
    'Specify the column id to be filtered by the top input box.',
  指示器: 'indicator',
  中: 'middle',
  '中的语义组件组合内容，并让视觉层级始终服务于阅读顺序。':
    'The semantic components in assemble content so that the visual hierarchy always serves the reading order.',
  中国标准时间: 'china standard time',
  '中间的三个层级收进省略菜单，起点、直接父级和当前页面保持可见。':
    'The three middle levels collapse into the omission menu, with the starting point, immediate parent, and current page remaining visible.',
  中文: 'Chinese',
  终端: 'terminal',
  重叠程度: 'degree of overlap',
  重新开始: 'restart',
  '重要主体不要贴近图片边缘，以免在不同宽高比下被裁切。':
    'The important subject should not be close to the edge of the picture to avoid being cropped in different aspect ratios.',
  重置: 'reset',
  重做: 'Redo',
  周: 'week',
  '周日 22:45': 'Sunday 22:45',
  周一: 'on Monday',
  '周一 · 前端': 'Monday · Frontend',
  '周一 14:08': 'Monday 14:08',
  '周一 16:22': 'Monday 16:22',
  周一发送项目进展与风险汇总:
    'Send project progress and risk summary on Monday',
  主题: 'theme',
  主题适配: 'Theme adaptation',
  '主题颜色和暗色模式检查。': 'Theme colors and dark mode checks.',
  主要操作: 'Main operations',
  主轴: 'Main axis',
  主轴居中: 'Spindle centered',
  主轴起点: 'Spindle starting point',
  '转发到根 span 或链接元素。': 'Forward to the root span or link element.',
  状态: 'state',
  '状态不能只依靠颜色表达，必须保留文本。':
    'Status cannot be expressed solely by color, text must be preserved.',
  状态与链接: 'Status and links',
  状态正常: 'Normal status',
  布局轴: 'Layout axis',
  桌面与窄屏截图即将开始比对:
    'Desktop and narrow screen screenshots will be compared soon',
  资源: 'resource',
  资源管理器: 'Explorer',
  子菜单与尺寸: 'Submenus and dimensions',
  字段结构与状态: 'Field structure and status',
  字段状态: 'Field status',
  '自定义翻页插槽，通过 render props 提供页码、滚动与播放控制。':
    'Custom page turning slot, providing page number, scrolling and playback control through render props.',
  自定义翻页器: 'Custom page turner',
  自定义分隔线: 'Custom divider',
  '自定义上一页和下一页的可见文字。':
    'Customize visible text for previous and next pages.',
  '自定义剩余数量的呈现方式。':
    'Customize how the remaining quantity is presented.',
  自定义图标: 'Custom icon',
  '自定义溢出数量的呈现方式。':
    'Customize the presentation of overflow quantities.',
  '自定义折叠态指示器；默认在起始侧由向右旋转至向下，在末端侧由向左旋转至向下。':
    'Customize the collapsed-state indicator; by default, the leading arrow rotates from right to down and the trailing arrow rotates from left to down.',
  自定义指示器: 'Custom indicator',
  自动播放: 'Autoplay',
  '自动播放 · 首尾循环 · 3D 景深':
    'Auto play · First and last loop · 3D depth of field',
  '自动播放，悬停即暂停': 'Play automatically, pause on hover',
  '自动播放默认悬停暂停；若关闭 pauseOnHover，需要提供其他清晰的暂停方式。':
    'Autoplay pauses on hover by default; if pauseOnHover is turned off, other clear pause methods need to be provided.',
  '自动播放时，指针进入轮播区域即暂停，离开后继续。':
    'During automatic playback, the pointer will pause when entering the carousel area and continue after leaving it.',
  自动回滚: 'Automatic rollback',
  '自动组装 ExpandButton 与 ExpandedRow，并支持受控或非受控的展开行 key。':
    'Automatically assemble ExpandButton and ExpandedRow, and support controlled or uncontrolled expanded row keys.',
  自适应列数: 'Adaptive number of columns',
  纵向: 'portrait',
  纵向附件: 'vertical attachment',
  '纵向面板支持单项或多项展开，可按内容关系选择合适模式。':
    'The vertical panel supports single or multiple expansions, and the appropriate mode can be selected based on content relationship.',
  纵向区域: 'vertical area',
  纵向缩略卡: 'vertical thumbnail card',
  '阻止触发器改变展开状态。':
    'Prevents the trigger from changing the expanded state.',
  '阻止交互并降低视觉强调。': 'Blocks interaction and reduces visual emphasis.',
  '阻止修改但保留聚焦、选择和复制能力。':
    'Blocks modifications but retains focus, selection, and copy capabilities.',
  '阻止状态变化并显示不可用状态。':
    'Prevents status changes and displays unavailable status.',
  组合按钮: 'Combination button',
  '组合标题说明、正文与底部操作。':
    'Combine title description, body text and bottom actions.',
  '组合根容器、可聚焦视口、所需方向的滚动条与双轴交汇角。':
    'Combines a root container, a focusable viewport, a scrollbar in the desired direction, and a dual-axis intersection angle.',
  '组合固定前缀、复制动作和文本计数；附加内容始终服务于同一输入任务。':
    'Combine fixed prefixes, copy actions, and text counts; additional content always serves the same input task.',
  '组合紧密相关的按钮，并支持水平或垂直排列。':
    'Group closely related buttons and support horizontal or vertical arrangement.',
  '组合可排序的列标题，并显示排序提示图标。':
    'Combines sortable column headers and displays a sort tip icon.',
  组合快捷键: 'Combination shortcut keys',
  '组合快捷键之间的分隔内容。':
    'Separate content between combined shortcut keys.',
  '组合内容。': 'Combine content.',
  '组合纵向区域；直接包含 Sidebar 时自动切换为横向排列。':
    'Combine vertical areas; automatically switch to horizontal arrangement when directly containing Sidebar.',
  组件: 'components',
  组件发布工作台: 'Component publishing workbench',
  组件范围: 'component scope',
  '组件会根据 orientation 提供对应的分隔方向语义。':
    'The component will provide corresponding separation direction semantics based on orientation.',
  组件结构: 'Component structure',
  组件库: 'Component library',
  组件库发布动态: 'Component library release news',
  '组件库发布动态，使用上下方向键浏览，按 Enter 选择':
    'Component library publishes updates, use the up and down arrow keys to browse, and press Enter to select',
  组件名称: 'Component name',
  '组件内容或复合组件子节点。':
    'Component content or composite component child node.',
  组件设置: 'Component settings',
  '组件树中的深层操作需要调用统一的页面级通知，或工作区内部需要独立的局部通知。':
    'Operations deep in the component tree require calls to unified page-level notifications, or independent local notifications within the workspace.',
  组件搜索: 'Component search',
  组件文档: 'Component documentation',
  '组件文档 · 本地预览': 'Component documentation · Local preview',
  组件文档与交互示例: 'Component documentation and interaction examples',
  '组件只改变视觉位置，内容语义、键盘焦点和读屏顺序仍按 DOM 顺序保留。':
    'Components only change their visual position; content semantics, keyboard focus, and screen reading order are still preserved in DOM order.',
  '组内按下值变化时调用。':
    'Called when the pressed value in the group changes.',
  '组织标签、控件、说明和错误信息，建立完整的字段语义。':
    'Organize labels, controls, descriptions, and error messages to establish complete field semantics.',
  '组织单个字段，并连接标签与实际输入控件。':
    'Organize individual fields and connect labels with actual input controls.',
  '组织浮层的标题与辅助说明。':
    'Organize the title and auxiliary description of the overlay.',
  '组织数据行与单元格，并支持选中状态。':
    'Organize data rows and cells and support selected states.',
  '组织行列，并控制单元格对齐、固定位置和超长省略。':
    'Organize rows and columns, and control cell alignment, fixed positioning, and overlong elision.',
  '组织站点或产品的主要入口，并在需要时展开带有说明和分组的丰富导航面板。':
    'Organize the main entrance to your site or product and expand rich navigation panels with descriptions and groupings when needed.',
  '组织桌面应用式的顶层命令，让多组全局操作在稳定位置中被发现和执行。':
    'Organize desktop application-style top-level commands so that multiple sets of global operations are discovered and executed in stable locations.',
  '组织字段结构，并连接状态、校验与提交行为。':
    'Organize field structures and connect status, validation and commit actions.',
  最大: 'maximum',
  '最多 20 位成员': 'Up to 20 members',
  最多展示: 'Most displayed',
  最多展示的头像数量: 'Maximum number of avatars displayed',
  '最后更新于 14:32': 'Last updated at 14:32',
  '最基础的纵向组合：Header 和 Footer 保持固定区域，Content 占据中间剩余空间。':
    'The most basic vertical combination: Header and Footer maintain a fixed area, and Content occupies the remaining space in the middle.',
  '最近 24 小时完成了 18 次部署。':
    'Eighteen deployments were completed in the last 24 hours.',
  最近编辑: 'Recently edited',
  最近部署: 'Recently deployed',
  最近更新: 'Latest updates',
  '最近五次生产与预览环境发布。':
    'The last five production and preview environment releases.',
  最近组件: 'recent components',
  '最新构建已加载到当前工作区。':
    'The latest build has been loaded into the current workspace.',
  '昨天 18:04': 'Yesterday 18:04',
  '昨天 23:12': 'Yesterday 23:12',
  左: 'Left',
  左侧: 'left side',
  左侧导航: 'Left navigation',
  '左侧可折叠，并限制在 18%–34% 之间。':
    'The left side is foldable and limited to 18%–34%.',
  左上: 'upper left',
  左上提示: 'Top left tip',
  左下: 'lower left',
  'action 和 footer 中的图标按钮需要提供可访问名称。':
    'Icon buttons in action and footer need to provide accessible names.',
  'actions 可以承载状态摘要和操作按钮，不需要暴露内部布局组件。':
    'Actions can host status summaries and action buttons without exposing internal layout components.',
  'adaptive 在不同宽度下调整手柄与贴边样式；gesture 保留触摸抽屉形态；panel 使用稳定面板形态。':
    'adaptive adjusts the handle and welt styles under different widths; gesture retains the touch drawer form; panel uses a stable panel form.',
  'Alert 是页面内容的一部分；点击按钮可条件显示信息、成功、警告或错误横幅，而不是打开浮层。':
    'Alert is part of the page content; clicking the button conditionally displays an information, success, warning, or error banner instead of opening an overlay.',
  'align 控制交叉轴，元素按中心线对齐。':
    'align controls the cross axis and aligns elements along the centerline.',
  'align 控制交叉轴，元素沿底部对齐。':
    'align controls the cross axis, aligning elements along the bottom.',
  'align 控制交叉轴，元素沿顶部对齐。':
    'align controls the cross axis, aligning elements along the top.',
  'align 控制交叉轴对齐，justify 控制主轴分布；对应属性和值在示例代码中完整展示。':
    'align controls cross-axis alignment, and justify controls main-axis distribution; the example code shows the corresponding properties and values in full.',
  'align 统一控制起始、居中和末端对齐；Head 与 Cell 的 ellipsis 在溢出时提供全文 Tooltip，自定义组件直接作为 Cell 子节点。':
    'align uniformly controls the start, center and end alignment; the ellipsis of Head and Cell provides full-text Tooltip when overflowing, and the custom component directly acts as a Cell child node.',
  'autoplay 传 true 使用默认间隔，传数字直接设置秒数；loop 循环始终沿下一页方向越过首尾。':
    'Autoplay passes true to use the default interval, and passes a number to directly set the number of seconds; the loop loop always crosses the beginning and end along the next page.',
  'Avatar 支持圆形和圆角方形；小、中、大三档尺寸会同步调整文字与状态标记。':
    'Avatar supports circles and rounded squares; text and status marks will be adjusted simultaneously in three sizes: small, medium and large.',
  'Card 语义区域': 'Card semantic area',
  'Carousel 始终使用景深过渡；paginationPosition 控制默认点位位于内容前方或后方。':
    'Carousel always uses a depth of field transition; paginationPosition controls the default point in front or behind content.',
  'checkbox 表达可独立切换的设置，radio 表达一组互斥选项。':
    'checkbox expresses settings that can be toggled independently, and radio expresses a set of mutually exclusive options.',
  'checkbox 控制可独立开关的视图项，radio 管理互斥主题，并把状态同步到内容区。':
    'Checkbox controls view items that can be switched independently, radio manages mutually exclusive topics, and synchronizes status to the content area.',
  'CI 完成的有效构建次数': 'The number of valid builds completed by CI',
  'Compact 不只组合按钮，也可以拼接 Input、Select、Slider 与操作控件。':
    'Compact not only combines buttons, but can also splice Input, Select, Slider and operation controls.',
  'Compact 默认提供 group 角色；同一区域存在多个操作组时应补充 aria-label。':
    'Compact provides the group role by default; aria-label should be added when there are multiple operation groups in the same area.',
  'const containerRef = useRef<HTMLDivElement>(null)\n\n<div ref={containerRef} className="relative overflow-hidden">\n  <Drawer\n    behavior="panel"\n    container={containerRef}\n    side="left"\n    title="局部筛选"\n    trigger={<Button>从左侧打开</Button>}\n  >\n    <FilterFields />\n  </Drawer>\n</div>':
    'const containerRef = useRef<HTMLDivElement>(null)\n\n<div ref={containerRef} className="relative overflow-hidden">\n  <Drawer\n    behavior="panel"\n    container={containerRef}\n    side="left"\n    title="Partial filtering"\n    trigger={<Button>Open from left</Button>}\n  >\n    <FilterFields />\n  </Drawer>\n</div>',
  'count 为 0 时是否仍显示数字。':
    'Whether to still display numbers when count is 0.',
  'Counter 不管理加减或请求状态；按钮、定时器和业务数据应由外部组件组合。':
    'Counter does not manage addition, subtraction or request status; buttons, timers and business data should be composed by external components.',
  'CSV 表格': 'CSV table',
  'Table 是基于 Table 组装好的默认数据表格：除筛选、排序和分页外，也完整提供固定列、省略 Tooltip、Footer、行展开与虚拟滚动。':
    'Table is a default data table assembled from Table primitives. It also provides fixed columns, ellipsis tooltips, Footer, row expansion, and virtual scrolling.',
  'Drawer 打开方向': 'Drawer opening direction',
  'ESLint 与 Prettier 已完成': 'ESLint and Prettier completed',
  'expandable 会自动补齐展开列、键盘按钮和跨列详情行；固定在起始侧的业务列会自动避开展开按钮。':
    'expandable will automatically complete expandable columns, keyboard buttons, and cross-column detail rows; business columns fixed to the starting side will automatically avoid expandable buttons.',
  'ExpandButton 默认同步 aria-expanded，并提供展开或收起标签；业务应在 label 中加入当前行名称。':
    'ExpandButton synchronizes aria-expanded by default and provides expanded or collapsed labels; the business should add the current row name to the label.',
  'ExpandButton 提供键盘可用的展开状态与图标，ExpandedRow 使用真实表格行承载跨列详情。':
    'ExpandButton provides keyboard-available expanded states and icons, and ExpandedRow uses real table rows to carry cross-column details.',
  'export const ButtonSizes = () => {\n  return (\n    <div className="flex items-end gap-3">\n      <Button size="xs">超小按钮</Button>\n      <Button size="sm">小按钮</Button>\n      <Button>默认按钮</Button>\n      <Button size="lg">大按钮</Button>\n    </div>\n  )\n}':
    'export const ButtonSizes = () => {\n  return (\n    <div className="flex items-end gap-3">\n      <Button size="xs">Extra small button</Button>\n      <Button size="sm">Small button</Button>\n      <Button>Default Button</Button>\n      <Button size="lg">Big button</Button>\n    </div>\n  )\n}',
  'export const ButtonStates = () => {\n  return (\n    <>\n      <Button disabled>不可用</Button>\n      <Button aria-busy="true" disabled>处理中</Button>\n      <Button aria-invalid="true" variant="outline">校验失败</Button>\n    </>\n  )\n}':
    'export const ButtonStates = () => {\n  return (\n    <>\n      <Button disabled>Not available</Button>\n      <Button aria-busy="true" disabled>Processing</Button>\n      <Button aria-invalid="true" variant="outline">Verification failed</Button>\n    </>\n  )\n}',
  'export const ButtonVariants = () => {\n  return (\n    <div className="flex flex-wrap gap-3">\n      <Button>主要操作</Button>\n      <Button variant="secondary">次要操作</Button>\n      <Button variant="outline">描边按钮</Button>\n      <Button variant="ghost">幽灵按钮</Button>\n      <Button variant="link">文字链接</Button>\n      <Button variant="destructive">危险操作</Button>\n    </div>\n  )\n}':
    'export const ButtonVariants = () => {\n  return (\n    <div className="flex flex-wrap gap-3">\n      <Button>Main operations</Button>\n      <Button variant="secondary">Secondary operation</Button>\n      <Button variant="outline">Stroke button</Button>\n      <Button variant="ghost">Ghost button</Button>\n      <Button variant="link">Text link</Button>\n      <Button variant="destructive">Dangerous operation</Button>\n    </div>\n  )\n}',
  'gap 接收数值；拖动滑块在 0–12px 之间调整，每次递增或递减 3px。':
    'gap accepts a numerical value; drag the slider to adjust it between 0–12px, in increments or decrements of 3px.',
  'gap 直接接收数值，同时设置水平与垂直间距。':
    'gap directly receives a value and sets the horizontal and vertical spacing at the same time.',
  'Header 触发': 'Header trigger',
  'Header 触发和独立按钮触发都使用原生按钮语义，并通过 aria-expanded 传达展开状态。':
    'Both header triggering and independent button triggering use native button semantics and communicate the expanded state through aria-expanded.',
  'Header 负责标题与辅助操作，Content 承载主体，Footer 放置与整张卡片相关的操作。':
    'Header is responsible for the title and auxiliary operations, Content carries the main body, and Footer places operations related to the entire card.',
  'Header 和 Footer 跨越整页，中间区域再嵌套 Sidebar 与 Content，适合后台和工作台。':
    'Header and Footer span the entire page, and Sidebar and Content are nested in the middle area, making it suitable for the backend and workbench.',
  'Header 静态，仅按钮切换状态': 'Header is static, only button switches state',
  'header 可以组合任意摘要内容；icon 用于替换 Header 指示图标，indicator 用于独立按钮，传 null 时可隐藏图标。':
    'The header can be combined with any summary content; icon is used to replace the Header indicator icon, indicator is used for an independent button, and the icon can be hidden when null is passed.',
  'Header 右侧的辅助操作。':
    'Auxiliary operations on the right side of Header.',
  'Header 与图标': 'Header and Icon',
  'Header、Content 与 Footer': 'Header, Content and Footer',
  'Header、Content、Footer 和 Sidebar 默认使用 header、main、footer 和 aside 语义元素。':
    'Header, Content, Footer and Sidebar use header, main, footer and aside semantic elements by default.',
  'Heliannuuthus UI 通过一致的标题层级、正文节奏和辅助信息，帮助产品在不同页面中保持清晰、可信且易于阅读的表达。':
    'Heliannuuthus UI helps products remain clear, trustworthy, and easy to read across pages through consistent heading hierarchy, body rhythm, and supporting information.',
  'hover 模式也会在触发器获得键盘焦点时打开，不能只依赖鼠标操作。':
    'Hover mode also turns on when the trigger receives keyboard focus and cannot rely solely on mouse operations.',
  'import {\n  Alert,\n  AlertAction,\n  AlertDescription,\n  AlertTitle,\n} from \'@heliannuuthus/ui\'\n\n{visible && <Alert variant="warning">\n  <TriangleAlert />\n  <AlertTitle>回滚镜像即将过期</AlertTitle>\n  <AlertDescription>建议在发布前重新构建。</AlertDescription>\n  <AlertAction><Button onClick={() => setVisible(false)}>关闭</Button></AlertAction>\n</Alert>}':
    'import {\n  Alert,\n  AlertAction,\n  AlertDescription,\n  AlertTitle,\n} from \'@heliannuuthus/ui\'\n\n{visible && <Alert variant="warning">\n  <TriangleAlert />\n  <AlertTitle>The rollback image will expire soon</AlertTitle>\n  <AlertDescription>Recommended to rebuild before publishing. </AlertDescription>\n  <AlertAction><Button onClick={() => setVisible(false)}>Close</Button></AlertAction>\n</Alert>}',
  "import { Table } from '@heliannuuthus/ui'\n\nconst columns: Table.Column<Release>[] = [\n  {\n    header: '发布信息',\n    columns: [\n      { accessor: 'version', header: '版本', sortable: true },\n      { accessor: 'environment', header: '环境' },\n    ],\n  },\n  {\n    header: '执行情况',\n    columns: [\n      { accessor: 'owner', header: '负责人' },\n      { accessor: 'status', header: '状态' },\n    ],\n  },\n  {\n    header: '操作',\n    columns: [\n      {\n        key: 'detail',\n        header: '记录',\n        align: 'center',\n        render: (_, row) => <Button>{row.version} 详情</Button>,\n      },\n    ],\n  },\n]\n\n<Table columns={columns} data={releaseRecords} />":
    "import { Table } from '@heliannuuthus/ui'\n\nconst columns: Table.Column<Release>[] = [\n  {\n    header: 'Publish information',\n    columns: [\n      { accessor: 'version', header: 'version', sortable: true },\n      { accessor: 'environment', header: 'environment' },\n    ],\n  },\n  {\n    header: 'Execution status',\n    columns: [\n      { accessor: 'owner', header: 'person in charge' },\n      { accessor: 'status', header: 'status' },\n    ],\n  },\n  {\n    header: 'operation',\n    columns: [\n      {\n        key: 'detail',\n        header: 'record',\n        align: 'center',\n        render: (_, row) => <Button>{row.version} details</Button>,\n      },\n    ],\n  },\n]\n\n<Table columns={columns} data={releaseRecords} />",
  "import { Table } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\nimport { Stack } from '@heliannuuthus/ui'\nimport { MoreHorizontal } from 'lucide-react'\n\nconst columns: Table.Column<Release>[] = [\n  {\n    accessor: 'version',\n    header: '版本',\n    sortable: true,\n  },\n  {\n    key: 'actions',\n    align: 'center',\n    fixed: 'end',\n    header: '操作',\n    width: 144,\n    render: (_, row) => (\n      <Stack align=\"center\" aria-label={row.version + ' 操作'} gap={4} justify=\"center\" orientation=\"horizontal\" role=\"group\">\n        <Button variant=\"ghost\">查看</Button>\n        <DropdownMenu\n          align=\"end\"\n          trigger={\n            <Button\n              aria-label={row.version + ' 更多操作'}\n              size=\"icon-sm\"\n              variant=\"ghost\"\n            >\n              <MoreHorizontal />\n            </Button>\n          }\n          items={[\n            { label: '下载日志' },\n            { label: '归档记录' },\n            { type: 'separator' },\n            { label: '删除记录', destructive: true },\n          ]}\n        />\n      </Stack>\n    ),\n  },\n]\n\n<Table\n  columns={columns}\n  data={releaseRecords}\n  search={{ columnKeys: ['version'], placeholder: '筛选版本…' }}\n  footer={(rows) => `当前页 ${rows.length} 条发布记录`}\n  rowKey=\"version\"\n  pagination={{ pageSize: 3 }}\n  classNames={{ table: 'min-w-[820px]' }}\n/>":
    "import { Table } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\nimport { Stack } from '@heliannuuthus/ui'\nimport { MoreHorizontal } from 'lucide-react'\n\nconst columns: Table.Column<Release>[] = [\n  {\n    accessor: 'version',\n    header: 'version',\n    sortable: true,\n  },\n  {\n    key: 'actions',\n    align: 'center',\n    fixed: 'end',\n    header: 'operation',\n    width: 144,\n    render: (_, row) => (\n      <Stack align=\"center\" aria-label={row.version + 'Actions'} gap={4} justify=\"center\" orientation=\"horizontal\" role=\"group\">\n        <Button variant=\"ghost\">View</Button>\n        <DropdownMenu\n          align=\"end\"\n          trigger={\n            <Button\n              aria-label={row.version + 'More operations'}\n              size=\"icon-sm\"\n              variant=\"ghost\"\n            >\n              <MoreHorizontal />\n            </Button>\n          }\n          items={[\n            { label: 'Download log' },\n            { label: 'Archive record' },\n            { type: 'separator' },\n            { label: 'Delete record', destructive: true },\n          ]}\n        />\n      </Stack>\n    ),\n  },\n]\n\n<Table\n  columns={columns}\n  data={releaseRecords}\n  search={{ columnKeys: ['version'], placeholder: 'Filter versions…' }}\n  footer={(rows) => `Current page ${rows.length} published records`}\n  rowKey=\"version\"\n  pagination={{ pageSize: 3 }}\n  classNames={{ table: 'min-w-[820px]' }}\n/>",
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['preflight', 'rollback']}\n  multiple\n  items={[\n    {\n      value: 'preflight',\n      title: '预检结果',\n      content: '42 项检查均已通过。',\n    },\n    {\n      value: 'rollback',\n      title: '回滚方案',\n      content: '异常时切回上一版本。',\n    },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['preflight', 'rollback']}\n  multiple\n  items={[\n    {\n      value: 'preflight',\n      title: 'Preflight results',\n      content: '42 checks passed. ',\n    },\n    {\n      value: 'rollback',\n      title: 'Rollback plan',\n      content: 'Switch back to the previous version in case of exception. ',\n    },\n  ]}\n/>",
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['preflight']}\n  items={[\n    { value: 'preflight', title: '预检结果', content: '42 项检查均已通过。' },\n    { value: 'rollback', title: '回滚方案', content: '异常时切回上一版本。' },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['preflight']}\n  items={[\n    { value: 'preflight', title: 'Preflight results', content: 'All 42 checks passed. ' },\n    { value: 'rollback', title: 'Rollback plan', content: 'Switch back to the previous version in case of exception. ' },\n  ]}\n/>",
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  indicatorPosition=\"start\"\n  indicator={<Plus />}\n  expandedIndicator={<Minus />}\n  items={[\n    { value: 'deployment', title: '部署策略', content: '先灰度 10%，观察后全量发布。' },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  indicatorPosition=\"start\"\n  indicator={<Plus />}\n  expandedIndicator={<Minus />}\n  items={[\n    { value: 'deployment', title: 'Deployment Strategy', content: 'First grayscale 10%, observe and then release in full. ' },\n  ]}\n/>",
  "import { Accordion } from '@heliannuuthus/ui'\nimport { Minus, Plus } from 'lucide-react'\n\n<Accordion\n  defaultValue={['deployment']}\n  indicator={<Plus />}\n  expandedIndicator={<Minus />}\n  indicatorPosition=\"start\"\n  items={[\n    {\n      value: 'deployment',\n      title: '部署策略',\n      content: '先灰度 10%，观察后全量发布。',\n    },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\nimport { Minus, Plus } from 'lucide-react'\n\n<Accordion\n  defaultValue={['deployment']}\n  indicator={<Plus />}\n  expandedIndicator={<Minus />}\n  indicatorPosition=\"start\"\n  items={[\n    {\n      value: 'deployment',\n      title: 'Deployment Strategy',\n      content: 'First grayscale 10%, observe and then publish in full. ',\n    },\n  ]}\n/>",
  'import { Alert } from \'@heliannuuthus/ui\'\n\n<Alert\n  variant="warning"\n  icon={<TriangleAlert />}\n  title="回滚镜像即将过期"\n  description="建议在发布前重新构建。"\n  action={<Button onClick={close}>关闭</Button>}\n/>':
    'import { Alert } from \'@heliannuuthus/ui\'\n\n<Alert\n  variant="warning"\n  icon={<TriangleAlert />}\n  title="The rollback image will expire soon"\n  description="Recommended to rebuild before publishing."\n  action={<Button onClick={close}>Close</Button>}\n/>',
  'import { AlertDialog } from \'@heliannuuthus/ui\'\n\n<AlertDialog\n  trigger={<Button variant="destructive">删除预览环境</Button>}\n  title="删除 preview-142？"\n  description="此操作无法撤销。"\n  cancelText="保留环境"\n  confirmText="确认删除"\n  confirmVariant="destructive"\n/>':
    'import { AlertDialog } from \'@heliannuuthus/ui\'\n\n<AlertDialog\n  trigger={<Button variant="destructive">Delete preview environment</Button>}\n  title="Delete preview-142?"\n  description="This action cannot be undone."\n  cancelText="Keep environment"\n  confirmText="Confirm deletion"\n  confirmVariant="destructive"\n/>',
  'import { AlertDialog, Button } from \'@heliannuuthus/ui\'\n\n<AlertDialog\n  trigger={<Button variant="destructive">删除预览环境</Button>}\n  title="删除 preview-142？"\n  description="此操作无法撤销。"\n  cancelText="保留环境"\n  confirmText="确认删除"\n  confirmVariant="destructive"\n  onConfirm={removePreview}\n/>':
    'import { AlertDialog, Button } from \'@heliannuuthus/ui\'\n\n<AlertDialog\n  trigger={<Button variant="destructive">Delete preview environment</Button>}\n  title="Delete preview-142?"\n  description="This action cannot be undone."\n  cancelText="Keep environment"\n  confirmText="Confirm deletion"\n  confirmVariant="destructive"\n  onConfirm={removePreview}\n/>',
  'import { ArrowRight } from \'lucide-react\'\n\nexport const ButtonLink = () => {\n  return (\n    <>\n      <Button href="/components/card" variant="outline">\n        查看 Card 文档\n        <ArrowRight data-icon="inline-end" />\n      </Button>\n      <Button disabled href="/components/card" variant="outline">\n        暂不可用\n      </Button>\n    </>\n  )\n}':
    'import { ArrowRight } from \'lucide-react\'\n\nexport const ButtonLink = () => {\n  return (\n    <>\n      <Button href="/components/card" variant="outline">\n        View Card documentation\n        <ArrowRight data-icon="inline-end" />\n      </Button>\n      <Button disabled href="/components/card" variant="outline">\n        Not available yet\n      </Button>\n    </>\n  )\n}',
  'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  title="web-console.tgz"\n  description="8.4 MB · 正在校验"\n  media={<FileArchive />}\n  state="processing"\n  orientation="horizontal"\n/>':
    'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  title="web-console.tgz"\n  description="8.4 MB · Verifying"\n  media={<FileArchive />}\n  state="processing"\n  orientation="horizontal"\n/>',
  'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  title="web-console.tgz"\n  description="8.4 MB · 正在校验"\n  media={<FileArchive />}\n  state="processing"\n  orientation="vertical"\n/>':
    'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  title="web-console.tgz"\n  description="8.4 MB · Verifying"\n  media={<FileArchive />}\n  state="processing"\n  orientation="vertical"\n/>',
  'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  title="web-console.tgz"\n  description="8.4 MB · 正在校验"\n  media={<FileArchive />}\n  state="processing"\n/>':
    'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  title="web-console.tgz"\n  description="8.4 MB · Verifying"\n  media={<FileArchive />}\n  state="processing"\n/>',
  'import { Avatar } from \'@heliannuuthus/ui\'\n\n<Avatar alt="林默" fallback="林" shape="circle" size="lg" />\n<Avatar alt="周一" fallback="周" shape="square" size="lg" />':
    'import { Avatar } from \'@heliannuuthus/ui\'\n\n<Avatar alt="Lin Mo" fallback="Lin" shape="circle" size="lg" />\n<Avatar alt="Monday" fallback="Week" shape="square" size="lg" />',
  "import { Breadcrumb } from '@heliannuuthus/ui'\n\nconst items = [\n  { label: '首页', href: '/' },\n  { label: '组件', href: '/components' },\n  { label: '导航', href: '/components/navigation-menu' },\n  { label: 'Breadcrumb' },\n]\n\nexport const PageBreadcrumb = () => {\n  return <Breadcrumb items={items} icon />\n}":
    "import { Breadcrumb } from '@heliannuuthus/ui'\n\nconst items = [\n  { label: 'Home', href: '/' },\n  { label: 'component', href: '/components' },\n  { label: 'Navigation', href: '/components/navigation-menu' },\n  { label: 'Breadcrumb' },\n]\n\nexport const PageBreadcrumb = () => {\n  return <Breadcrumb items={items} icon />\n}",
  'import { Bubble } from \'@heliannuuthus/ui\'\n\n<Bubble.Group>\n  <Bubble\n    align="end"\n    variant="default"\n    content="已经补充完成，可以重新评审。"\n    reactions="✓ 2"\n  />\n  <Bubble align="start" variant="elevated" content="收到，我现在检查。" />\n</Bubble.Group>':
    'import { Bubble } from \'@heliannuuthus/ui\'\n\n<Bubble.Group>\n  <Bubble\n    align="end"\n    variant="default"\n    content="The supplement has been completed and can be reviewed again."\n    reactions="✓ 2"\n  />\n  <Bubble align="start" variant="elevated" content="Received, I\'ll check now." />\n</Bubble.Group>',
  'import { Bubble } from \'@heliannuuthus/ui\'\nimport { Separator } from \'@heliannuuthus/ui\'\n\n<Bubble.Group>\n  <Bubble\n    align="end"\n    content="已经补充完成，可以重新评审。"\n    reactions="✓ 2"\n    variant="default"\n  />\n  <Separator />\n  <Bubble\n    align="end"\n    content="已经补充完成，可以重新评审。"\n    variant="elevated"\n  />\n</Bubble.Group>':
    'import { Bubble } from \'@heliannuuthus/ui\'\nimport { Separator } from \'@heliannuuthus/ui\'\n\n<Bubble.Group>\n  <Bubble\n    align="end"\n    content="The supplement has been completed and can be reviewed again."\n    reactions="✓ 2"\n    variant="default"\n  />\n  <Separator />\n  <Bubble\n    align="end"\n    content="The supplement has been completed and can be reviewed again."\n    variant="elevated"\n  />\n</Bubble.Group>',
  'import { Button } from \'@heliannuuthus/ui\'\n\nexport const ButtonDemo = () => {\n  return (\n    <div className="flex gap-3">\n      <Button>开始使用</Button>\n      <Button variant="outline">查看文档</Button>\n    </div>\n  )\n}':
    'import { Button } from \'@heliannuuthus/ui\'\n\nexport const ButtonDemo = () => {\n  return (\n    <div className="flex gap-3">\n      <Button>Get started</Button>\n      <Button variant="outline">View documentation</Button>\n    </div>\n  )\n}',
  'import { Button } from \'@heliannuuthus/ui\'\n\nexport const GroupedButtons = () => {\n  return (\n    <Button.Group aria-label="分页操作">\n      <Button variant="outline">上一项</Button>\n      <Button>下一项</Button>\n    </Button.Group>\n  )\n}':
    'import { Button } from \'@heliannuuthus/ui\'\n\nexport const GroupedButtons = () => {\n  return (\n    <Button.Group aria-label="Paging operation">\n      <Button variant="outline">Previous item</Button>\n      <Button>Next item</Button>\n    </Button.Group>\n  )\n}',
  "import { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\n\n<DropdownMenu\n  size=\"lg\"\n  align=\"end\"\n  trigger={<Button>导出</Button>}\n  items={[\n    {\n      label: '导出为',\n      children: [\n        { label: 'PDF 文档', onSelect: exportPdf },\n        { label: 'PNG 图片', onSelect: exportPng },\n        { label: 'CSV 表格', onSelect: exportCsv },\n      ],\n    },\n    { type: 'separator' },\n    { label: '下载原始文件', onSelect: downloadOriginal },\n  ]}\n/>":
    "import { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\n\n<DropdownMenu\n  size=\"lg\"\n  align=\"end\"\n  trigger={<Button>Export</Button>}\n  items={[\n    {\n      label: 'Export as',\n      children: [\n        { label: 'PDF document', onSelect: exportPdf },\n        { label: 'PNG picture', onSelect: exportPng },\n        { label: 'CSV table', onSelect: exportCsv },\n      ],\n    },\n    { type: 'separator' },\n    { label: 'Download original file', onSelect: downloadOriginal },\n  ]}\n/>",
  "import { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\nimport { FilePlus2, Trash2 } from 'lucide-react'\n\n<DropdownMenu\n  trigger={<Button variant=\"outline\">文件操作</Button>}\n  items={[\n    { type: 'label', label: '文件操作' },\n    { label: '新建文件', icon: <FilePlus2 />, shortcut: '⌘N' },\n    { label: '创建副本', disabled: true },\n    { type: 'separator' },\n    { label: '移至废纸篓', icon: <Trash2 />, destructive: true },\n  ]}\n/>":
    "import { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\nimport { FilePlus2, Trash2 } from 'lucide-react'\n\n<DropdownMenu\n  trigger={<Button variant=\"outline\">File operation</Button>}\n  items={[\n    { type: 'label', label: 'File operation' },\n    { label: 'New File', icon: <FilePlus2 />, shortcut: '⌘N' },\n    { label: 'Create a copy', disabled: true },\n    { type: 'separator' },\n    { label: 'Move to Trash', icon: <Trash2 />, destructive: true },\n  ]}\n/>",
  'import { Button, Carousel } from \'@heliannuuthus/ui\'\n\n<Carousel\n  items={highlights}\n  renderItem={(item) => <HighlightCard item={item} />}\n  pagination={({ currentPage, pageCount, scrollNext, scrollPrev }) => (\n      <div role="group" aria-label="轮播分页">\n        <Button onClick={scrollPrev}>上一页</Button>\n        <span aria-live="polite">{currentPage} / {pageCount}</span>\n        <Button onClick={scrollNext}>下一页</Button>\n      </div>\n  )}\n/>':
    'import { Button, Carousel } from \'@heliannuuthus/ui\'\n\n<Carousel\n  items={highlights}\n  renderItem={(item) => <HighlightCard item={item} />}\n  pagination={({ currentPage, pageCount, scrollNext, scrollPrev }) => (\n      <div role="group" aria-label="Carousel paging">\n        <Button onClick={scrollPrev}>Previous page</Button>\n        <span aria-live="polite">{currentPage} / {pageCount}</span>\n        <Button onClick={scrollNext}>Next page</Button>\n      </div>\n  )}\n/>',
  'import { Button, Dialog } from \'@heliannuuthus/ui\'\n\n<Dialog\n  trigger={<Button>安排发布</Button>}\n  title="安排生产环境发布"\n  description="选择版本和发布时间。"\n  cancelText="取消"\n  confirmText="保存"\n  onConfirm={scheduleRelease}\n>\n  <ReleaseFields />\n</Dialog>':
    'import { Button, Dialog } from \'@heliannuuthus/ui\'\n\n<Dialog\n  trigger={<Button>Schedule publishing</Button>}\n  title="Scheduling production environment release"\n  description="Select version and release date."\n  cancelText="Cancel"\n  confirmText="Save"\n  onConfirm={scheduleRelease}\n>\n  <ReleaseFields />\n</Dialog>',
  'import { Button, Drawer } from \'@heliannuuthus/ui\'\n\n<Drawer\n  behavior="adaptive"\n  side="right"\n  trigger={<Button>从右侧打开</Button>}\n  title="今晚的发布窗口"\n  description="22:00–23:00"\n>\n  <ReleaseWindow />\n</Drawer>':
    'import { Button, Drawer } from \'@heliannuuthus/ui\'\n\n<Drawer\n  behavior="adaptive"\n  side="right"\n  trigger={<Button>Open from the right</Button>}\n  title="Tonight\'s release window"\n  description="22:00–23:00"\n>\n  <ReleaseWindow />\n</Drawer>',
  'import { Button, Popover } from \'@heliannuuthus/ui\'\n\n<Popover\n  trigger={<Button variant="outline">3 位负责人</Button>}\n  title="发布负责人"\n  description="发布和回滚时会通知这些成员。"\n  content={<OwnerList />}\n  side="bottom"\n/>':
    'import { Button, Popover } from \'@heliannuuthus/ui\'\n\n<Popover\n  trigger={<Button variant="outline">3 persons in charge</Button>}\n  title="Release Manager"\n  description="These members will be notified when publishing and rolling back."\n  content={<OwnerList />}\n  side="bottom"\n/>',
  'import { Button, Tooltip } from \'@heliannuuthus/ui\'\n\n<Tooltip\n  content="上方靠左提示"\n  openDelay={100}\n  placement="topLeft"\n>\n  <Button>上方靠左</Button>\n</Tooltip>':
    'import { Button, Tooltip } from \'@heliannuuthus/ui\'\n\n<Tooltip\n  content="Top-left tooltip"\n  openDelay={100}\n  placement="topLeft"\n>\n  <Button>Top left</Button>\n</Tooltip>',
  'import { Button, Tooltip } from \'@heliannuuthus/ui\'\n\n<Tooltip\n  content="默认箭头"\n  placement="topLeft"\n>\n  <Button>显示箭头</Button>\n</Tooltip>':
    'import { Button, Tooltip } from \'@heliannuuthus/ui\'\n\n<Tooltip\n  content="Default arrow"\n  placement="topLeft"\n>\n  <Button>Show arrow</Button>\n</Tooltip>',
  "import { Button, Tooltip } from '@heliannuuthus/ui'\nimport { useState } from 'react'\n\nconst [container, setContainer] = useState<HTMLDivElement | null>(null)\nconst [open, setOpen] = useState(false)\n\n<div ref={setContainer}>\n  <Tooltip\n    closeDelay={150}\n    container={container}\n    content=\"受控提示\"\n    onOpenChange={setOpen}\n    open={open}\n    openDelay={250}\n  >\n    <Button>悬停或聚焦</Button>\n  </Tooltip>\n  <Button onClick={() => setOpen((value) => !value)}>\n    {open ? '关闭提示' : '打开提示'}\n  </Button>\n</div>":
    "import { Button, Tooltip } from '@heliannuuthus/ui'\nimport { useState } from 'react'\n\nconst [container, setContainer] = useState<HTMLDivElement | null>(null)\nconst [open, setOpen] = useState(false)\n\n<div ref={setContainer}>\n  <Tooltip\n    closeDelay={150}\n    container={container}\n    content=\"Controlled tooltip\"\n    onOpenChange={setOpen}\n    open={open}\n    openDelay={250}\n  >\n    <Button>Hover or focus</Button>\n  </Tooltip>\n  <Button onClick={() => setOpen((value) => !value)}>\n    {open ? 'Close tooltip' : 'Open tooltip'}\n  </Button>\n</div>",
  "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox.Group\n  defaultValue={['read']}\n  onChange={setPermissions}\n  options={[\n    { label: '读取', value: 'read' },\n    { label: '编辑', value: 'write' },\n    { label: '管理', value: 'admin' },\n  ]}\n/>":
    "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox.Group\n  defaultValue={['read']}\n  onChange={setPermissions}\n  options={[\n    { label: 'read', value: 'read' },\n    { label: 'edit', value: 'write' },\n    { label: 'admin', value: 'admin' },\n  ]}\n/>",
  "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox.Group\n  name=\"permission\"\n  value={selected}\n  onChange={setSelected}\n  options={[\n    { label: '查看项目', value: 'read' },\n    { label: '参与评论', value: 'comment' },\n    { label: '管理项目', value: 'manage' },\n  ]}\n/>":
    "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox.Group\n  name=\"permission\"\n  value={selected}\n  onChange={setSelected}\n  options={[\n    { label: 'View project', value: 'read' },\n    { label: 'Participate in comments', value: 'comment' },\n    { label: 'Manage project', value: 'manage' },\n  ]}\n/>",
  "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox.Group\n  variant=\"task\"\n  value={completed}\n  onChange={setCompleted}\n  options={[\n    { label: '确认设计令牌', value: 'tokens' },\n    { label: '更新组件文档', value: 'docs' },\n    { label: '发布新版本', value: 'release' },\n  ]}\n/>":
    "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox.Group\n  variant=\"task\"\n  value={completed}\n  onChange={setCompleted}\n  options={[\n    { label: 'Confirm design token', value: 'tokens' },\n    { label: 'Update component documentation', value: 'docs' },\n    { label: 'release new version', value: 'release' },\n  ]}\n/>",
  "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox>接收产品更新</Checkbox>":
    "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox>Receive product updates</Checkbox>",
  "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox>未选择</Checkbox>\n<Checkbox defaultChecked>已选择</Checkbox>\n<Checkbox indeterminate>部分选择</Checkbox>\n<Checkbox disabled>不可用</Checkbox>":
    "import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox>Not selected</Checkbox>\n<Checkbox defaultChecked>Selected</Checkbox>\n<Checkbox indeterminate>Partial selection</Checkbox>\n<Checkbox disabled>Not available</Checkbox>",
  "import { Collapsible } from '@heliannuuthus/ui'\n\n<Collapsible\n  defaultOpen\n  header={<BuildSummary />}\n  icon={<ChevronRight />}\n  content={<BuildOutput />}\n  footer={<BuildActions />}\n/>\n\n<Collapsible\n  trigger=\"配置\"\n  triggerProps={{ variant: 'outline' }}\n  header={<PolicySummary />}\n  content={<PolicySettings />}\n/>":
    "import { Collapsible } from '@heliannuuthus/ui'\n\n<Collapsible\n  defaultOpen\n  header={<BuildSummary />}\n  icon={<ChevronRight />}\n  content={<BuildOutput />}\n  footer={<BuildActions />}\n/>\n\n<Collapsible\n  trigger=\"configuration\"\n  triggerProps={{ variant: 'outline' }}\n  header={<PolicySummary />}\n  content={<PolicySettings />}\n/>",
  "import { Collapsible } from '@heliannuuthus/ui'\n\n<Collapsible\n  defaultOpen\n  header={<strong>本次发布包含 6 项变更</strong>}\n  content={<p>优化筛选器响应速度，并修复轮播首尾切换动效。</p>}\n/>":
    "import { Collapsible } from '@heliannuuthus/ui'\n\n<Collapsible\n  defaultOpen\n  header={<strong>This release contains 6 changes</strong>}\n  content={<p>Optimize the filter response speed, and fix the animation of the first and last switching of the carousel. </p>}\n/>",
  "import { Collapsible } from '@heliannuuthus/ui'\nimport { ChevronRight } from 'lucide-react'\n\n{/* 整个 Header 触发 */}\n<Collapsible\n  header={<BuildSummary />}\n  content={<BuildOutput />}\n/>\n\n{/* 独立按钮触发 */}\n<Collapsible\n  header={<PolicySummary />}\n  trigger=\"配置\"\n  indicator={<ChevronRight />}\n  triggerProps={{ size: 'sm', variant: 'outline' }}\n  content={<PolicySettings />}\n/>":
    "import { Collapsible } from '@heliannuuthus/ui'\nimport { ChevronRight } from 'lucide-react'\n\n{/* The entire Header is triggered */}\n<Collapsible\n  header={<BuildSummary />}\n  content={<BuildOutput />}\n/>\n\n{/* Independent button trigger */}\n<Collapsible\n  header={<PolicySummary />}\n  trigger=\"configuration\"\n  indicator={<ChevronRight />}\n  triggerProps={{ size: 'sm', variant: 'outline' }}\n  content={<PolicySettings />}\n/>",
  "import { Command } from '@heliannuuthus/ui'\n\n<Command\n  groups={[\n    {\n      heading: '常用命令',\n      options: [\n        { label: '新建文件', shortcut: '⌘N', value: 'new-file' },\n        { label: '打开设置', shortcut: '⌘,', value: 'settings' },\n      ],\n    },\n  ]}\n/>":
    "import { Command } from '@heliannuuthus/ui'\n\n<Command\n  groups={[\n    {\n      heading: 'Common commands',\n      options: [\n        { label: 'New File', shortcut: '⌘N', value: 'new-file' },\n        { label: 'Open settings', shortcut: '⌘,', value: 'settings' },\n      ],\n    },\n  ]}\n/>",
  "import { Button, ContextMenu } from '@heliannuuthus/ui'\n\n<ContextMenu\n  trigger={<Button variant=\"outline\">在这里单击右键</Button>}\n  items={[\n    { label: '复制链接' },\n    { type: 'separator' },\n    { label: '删除项目', destructive: true },\n  ]}\n/>":
    "import { Button, ContextMenu } from '@heliannuuthus/ui'\n\n<ContextMenu\n  trigger={<Button variant=\"outline\">right click here</Button>}\n  items={[\n    { label: 'Copy link' },\n    { type: 'separator' },\n    { label: 'Delete item', destructive: true },\n  ]}\n/>",
  "import { Counter } from '@heliannuuthus/ui'\n\n<Counter\n  value={count}\n  places={[1000, 100, 10, 1]}\n  fontSize={60}\n  fontWeight={600}\n  suffix={<small>次</small>}\n  valueText={`${count} 次构建`}\n/>":
    "import { Counter } from '@heliannuuthus/ui'\n\n<Counter\n  value={count}\n  places={[1000, 100, 10, 1]}\n  fontSize={60}\n  fontWeight={600}\n  suffix={<small>times</small>}\n  valueText={`${count} builds`}\n/>",
  'import { Button, Dialog } from \'@heliannuuthus/ui\'\nimport { CircleX } from \'lucide-react\'\n\n<Dialog\n  trigger={<Button>安排发布</Button>}\n  title="安排生产环境发布"\n  description="选择版本和发布时间。"\n  cancelText="取消"\n  confirmText="确认安排"\n>\n  <ReleaseForm />\n</Dialog>':
    'import { Button, Dialog } from \'@heliannuuthus/ui\'\nimport { CircleX } from \'lucide-react\'\n\n<Dialog\n  trigger={<Button>Schedule publishing</Button>}\n  title="Scheduling production environment release"\n  description="Select version and release date."\n  cancelText="Cancel"\n  confirmText="Confirm arrangement"\n>\n  <ReleaseForm />\n</Dialog>',
  'import { Download, Mail, Plus } from \'lucide-react\'\n\nexport const ButtonWithIcon = () => {\n  return (\n    <>\n      <Button><Plus data-icon="inline-start" />新建项目</Button>\n      <Button variant="outline"><Download data-icon="inline-start" />导出</Button>\n      <Button size="icon" aria-label="发送邮件"><Mail /></Button>\n    </>\n  )\n}':
    'import { Download, Mail, Plus } from \'lucide-react\'\n\nexport const ButtonWithIcon = () => {\n  return (\n    <>\n      <Button><Plus data-icon="inline-start" />New project</Button>\n      <Button variant="outline"><Download data-icon="inline-start" />Export</Button>\n      <Button size="icon" aria-label="Send Mail"><Mail /></Button>\n    </>\n  )\n}',
  'import { Drawer } from \'@heliannuuthus/ui\'\n\n<Drawer\n  behavior="adaptive"\n  side="right"\n  trigger={<Button>从右侧打开</Button>}\n  title="今晚的发布窗口"\n  description="22:00–23:00"\n  closeText="关闭"\n>\n  <ReleaseList />\n</Drawer>':
    'import { Drawer } from \'@heliannuuthus/ui\'\n\n<Drawer\n  behavior="adaptive"\n  side="right"\n  trigger={<Button>Open from the right</Button>}\n  title="Tonight\'s release window"\n  description="22:00–23:00"\n  closeText="Close"\n>\n  <ReleaseList />\n</Drawer>',
  'import { Drawer } from \'@heliannuuthus/ui\'\n\n<Drawer\n  behavior="panel"\n  container={containerRef}\n  side="left"\n  trigger={<Button>从左侧打开</Button>}\n  title="局部筛选"\n>\n  <Filters />\n</Drawer>':
    'import { Drawer } from \'@heliannuuthus/ui\'\n\n<Drawer\n  behavior="panel"\n  container={containerRef}\n  side="left"\n  trigger={<Button>Open from left</Button>}\n  title="Partial filtering"\n>\n  <Filters />\n</Drawer>',
  'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  icon={<Cloud />}\n  title="还没有生产发布"\n  description="完成预检后，可以安排第一次生产发布。"\n  actions={<Button>安排发布</Button>}\n/>':
    'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  icon={<Cloud />}\n  title="No production release yet"\n  description="After pre-inspection is completed, the first production release can be scheduled."\n  actions={<Button>Schedule publishing</Button>}\n/>',
  'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  icon={<Cloud />}\n  title="还没有生产发布"\n  description="完成预检后，可以从这里安排第一次生产发布。"\n  actions={<Button>安排发布</Button>}\n/>':
    'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  icon={<Cloud />}\n  title="No production release yet"\n  description="After completing preflight, you can schedule your first production release from here."\n  actions={<Button>Schedule publishing</Button>}\n/>',
  'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  icon={<ShieldCheck />}\n  title="等待安全审计"\n  description="审计通过前暂无可发布版本。"\n  actions={<AuditSummary />}\n/>':
    'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  icon={<ShieldCheck />}\n  title="Waiting for security audit"\n  description="There is no release version until the audit is passed."\n  actions={<AuditSummary />}\n/>',
  "import { Form } from '@heliannuuthus/ui'\n\nconst form = useForm({ defaultValues: { email: '', note: '' } })\n\n<Form {...form}>\n  <form onSubmit={form.handleSubmit(onSubmit)}>\n    <Form.Field\n      control={form.control}\n      name=\"email\"\n      rules={{ required: '请输入邮箱地址。' }}\n      render={({ field }) => (\n        <Form.Item>\n          <Form.Label>邮箱地址</Form.Label>\n          <Form.Control><Input {...field} /></Form.Control>\n          <Form.Message />\n        </Form.Item>\n      )}\n    />\n  </form>\n</Form>":
    "import { Form } from '@heliannuuthus/ui'\n\nconst form = useForm({ defaultValues: { email: '', note: '' } })\n\n<Form {...form}>\n  <form onSubmit={form.handleSubmit(onSubmit)}>\n    <Form.Field\n      control={form.control}\n      name=\"email\"\n      rules={{ required: 'Please enter your email address. ' }}\n      render={({ field }) => (\n        <Form.Item>\n          <Form.Label>Email address</Form.Label>\n          <Form.Control><Input {...field} /></Form.Control>\n          <Form.Message />\n        </Form.Item>\n      )}\n    />\n  </form>\n</Form>",
  "import { Fragment, useState } from 'react'\nimport { Button, Table } from '@heliannuuthus/ui'\nimport { ChevronRight } from 'lucide-react'\n\nconst [expandedId, setExpandedId] = useState<string | null>(null)\n\n<Table>\n  <Table.Body>\n    {rows.map((row) => {\n      const expanded = row.id === expandedId\n      return (\n        <Fragment key={row.id}>\n          <Table.Row>\n            <Table.Cell>\n              <Button\n                aria-expanded={expanded}\n                aria-label={`${expanded ? '收起' : '展开'} ${row.id}`}\n                size=\"icon-xs\"\n                variant=\"ghost\"\n                onClick={() => setExpandedId(expanded ? null : row.id)}\n              >\n                <ChevronRight className={expanded ? 'rotate-90' : ''} />\n              </Button>\n            </Table.Cell>\n            <Table.Cell>{row.name}</Table.Cell>\n          </Table.Row>\n          {expanded && (\n            <Table.Row>\n              <Table.Cell colSpan={2}>{row.detail}</Table.Cell>\n            </Table.Row>\n          )}\n        </Fragment>\n      )\n    })}\n  </Table.Body>\n</Table>":
    "import { Fragment, useState } from 'react'\nimport { Button, Table } from '@heliannuuthus/ui'\nimport { ChevronRight } from 'lucide-react'\n\nconst [expandedId, setExpandedId] = useState<string | null>(null)\n\n<Table>\n  <Table.Body>\n    {rows.map((row) => {\n      const expanded = row.id === expandedId\n      return (\n        <Fragment key={row.id}>\n          <Table.Row>\n            <Table.Cell>\n              <Button\n                aria-expanded={expanded}\n                aria-label={`${expanded ? 'Collapse' : 'Expand'} ${row.id}`}\n                size=\"icon-xs\"\n                variant=\"ghost\"\n                onClick={() => setExpandedId(expanded ? null : row.id)}\n              >\n                <ChevronRight className={expanded ? 'rotate-90' : ''} />\n              </Button>\n            </Table.Cell>\n            <Table.Cell>{row.name}</Table.Cell>\n          </Table.Row>\n          {expanded && (\n            <Table.Row>\n              <Table.Cell colSpan={2}>{row.detail}</Table.Cell>\n            </Table.Row>\n          )}\n        </Fragment>\n      )\n    })}\n  </Table.Body>\n</Table>",
  'import { Item } from \'@heliannuuthus/ui\'\n\n<Item\n  media={<GitCommit />}\n  mediaType="icon"\n  title="许澄提交了发布说明"\n  description="补充数据库迁移影响与回滚入口。"\n  actions={<Button>查看</Button>}\n/>':
    'import { Item } from \'@heliannuuthus/ui\'\n\n<Item\n  media={<GitCommit />}\n  mediaType="icon"\n  title="Xu Cheng submitted release notes"\n  description="Supplementary database migration impact and rollback entry."\n  actions={<Button>View</Button>}\n/>',
  'import { Item } from \'@heliannuuthus/ui\'\n\n<Item\n  variant="outline"\n  media={<MessageCircle />}\n  mediaType="icon"\n  title="林默回复了检查项"\n  description="确认索引变更不会锁表。"\n  actions={<Button>查看</Button>}\n/>':
    'import { Item } from \'@heliannuuthus/ui\'\n\n<Item\n  variant="outline"\n  media={<MessageCircle />}\n  mediaType="icon"\n  title="Lin Mo replied to the check item"\n  description="Confirm that index changes will not lock the table."\n  actions={<Button>View</Button>}\n/>',
  "import { Fragment, useState } from 'react'\nimport { Button, Table } from '@heliannuuthus/ui'\nimport { ChevronRight } from 'lucide-react'\n\nconst [expandedId, setExpandedId] = useState<string | null>(null)\n\n<Table.Primitive>\n  <Table.Body>\n    {rows.map((row) => {\n      const expanded = row.id === expandedId\n      return (\n        <Fragment key={row.id}>\n          <Table.Row>\n            <Table.Cell>\n              <Button\n                aria-expanded={expanded}\n                aria-label={`${expanded ? '收起' : '展开'} ${row.id}`}\n                size=\"icon-xs\"\n                variant=\"ghost\"\n                onClick={() => setExpandedId(expanded ? null : row.id)}\n              >\n                <ChevronRight className={expanded ? 'rotate-90' : ''} />\n              </Button>\n            </Table.Cell>\n            <Table.Cell>{row.name}</Table.Cell>\n          </Table.Row>\n          {expanded && (\n            <Table.Row>\n              <Table.Cell colSpan={2}>{row.detail}</Table.Cell>\n            </Table.Row>\n          )}\n        </Fragment>\n      )\n    })}\n  </Table.Body>\n</Table.Primitive>":
    "import { Fragment, useState } from 'react'\nimport { Button, Table } from '@heliannuuthus/ui'\nimport { ChevronRight } from 'lucide-react'\n\nconst [expandedId, setExpandedId] = useState<string | null>(null)\n\n<Table.Primitive>\n  <Table.Body>\n    {rows.map((row) => {\n      const expanded = row.id === expandedId\n      return (\n        <Fragment key={row.id}>\n          <Table.Row>\n            <Table.Cell>\n              <Button\n                aria-expanded={expanded}\n                aria-label={`${expanded ? 'Collapse' : 'Expand'} ${row.id}`}\n                size=\"icon-xs\"\n                variant=\"ghost\"\n                onClick={() => setExpandedId(expanded ? null : row.id)}\n              >\n                <ChevronRight className={expanded ? 'rotate-90' : ''} />\n              </Button>\n            </Table.Cell>\n            <Table.Cell>{row.name}</Table.Cell>\n          </Table.Row>\n          {expanded && (\n            <Table.Row>\n              <Table.Cell colSpan={2}>{row.detail}</Table.Cell>\n            </Table.Row>\n          )}\n        </Fragment>\n      )\n    })}\n  </Table.Body>\n</Table.Primitive>",
  "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Content>工作区内容</Layout.Content>\n  <Layout.Sidebar width={280}>详情面板</Layout.Sidebar>\n</Layout>":
    "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Content>Workspace Content</Layout.Content>\n  <Layout.Sidebar width={280}>Details panel</Layout.Sidebar>\n</Layout>",
  "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Header>项目导航</Layout.Header>\n  <Layout.Content>页面内容</Layout.Content>\n  <Layout.Footer>页脚信息</Layout.Footer>\n</Layout>":
    "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Header>Project Navigation</Layout.Header>\n  <Layout.Content>Page content</Layout.Content>\n  <Layout.Footer>Footer information</Layout.Footer>\n</Layout>",
  "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Sidebar width={240}>项目导航</Layout.Sidebar>\n  <Layout.Content>工作区内容</Layout.Content>\n</Layout>":
    "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Sidebar width={240}>Project Navigation</Layout.Sidebar>\n  <Layout.Content>Workspace Content</Layout.Content>\n</Layout>",
  'import { Marker } from \'@heliannuuthus/ui\'\n\n<Marker\n  variant="separator"\n  icon={<CircleDot />}\n  content="生产发布开始 · 21:46"\n/>':
    'import { Marker } from \'@heliannuuthus/ui\'\n\n<Marker\n  variant="separator"\n  icon={<CircleDot />}\n  content="Production release starts · 21:46"\n/>',
  "import { Menubar } from '@heliannuuthus/ui'\n\n<Menubar\n  menus={[\n    {\n      label: '文件',\n      items: [\n        { type: 'label', label: '文档' },\n        { label: '新建文档', shortcut: '⌘N', onSelect: createDocument },\n        { label: '保存', shortcut: '⌘S', onSelect: saveDocument },\n        { type: 'separator' },\n        { label: '移至废纸篓', destructive: true, onSelect: removeDocument },\n      ],\n    },\n    {\n      label: '编辑',\n      items: [\n        { label: '撤销', shortcut: '⌘Z', onSelect: undo },\n        { label: '重做', shortcut: '⇧⌘Z', disabled: true },\n      ],\n    },\n  ]}\n/>":
    "import { Menubar } from '@heliannuuthus/ui'\n\n<Menubar\n  menus={[\n    {\n      label: 'file',\n      items: [\n        { type: 'label', label: 'document' },\n        { label: 'New Document', shortcut: '⌘N', onSelect: createDocument },\n        { label: 'Save', shortcut: '⌘S', onSelect: saveDocument },\n        { type: 'separator' },\n        { label: 'Move to Trash', destructive: true, onSelect: removeDocument },\n      ],\n    },\n    {\n      label: 'edit',\n      items: [\n        { label: 'Undo', shortcut: '⌘Z', onSelect: undo },\n        { label: 'Redo', shortcut: '⇧⌘Z', disabled: true },\n      ],\n    },\n  ]}\n/>",
  "import { Menubar } from '@heliannuuthus/ui'\n\n<Menubar\n  size=\"lg\"\n  menus={[\n    {\n      label: '组件',\n      items: [\n        {\n          label: '最近编辑',\n          children: [\n            { label: 'Menubar', onSelect: openMenubarDocs },\n            { label: 'Navigation Menu', onSelect: openNavigationDocs },\n          ],\n        },\n      ],\n    },\n    { label: '发布', disabled: true, items: [] },\n  ]}\n/>":
    "import { Menubar } from '@heliannuuthus/ui'\n\n<Menubar\n  size=\"lg\"\n  menus={[\n    {\n      label: 'component',\n      items: [\n        {\n          label: 'Recently edited',\n          children: [\n            { label: 'Menubar', onSelect: openMenubarDocs },\n            { label: 'Navigation Menu', onSelect: openNavigationDocs },\n          ],\n        },\n      ],\n    },\n    { label: 'Publish', disabled: true, items: [] },\n  ]}\n/>",
  "import { NavigationMenu } from '@heliannuuthus/ui'\n\n<NavigationMenu\n  align=\"end\"\n  items={[\n    { label: '产品', content: ({ Link }) => <Link href=\"/components\">组件库</Link> },\n    { label: '组件', href: '/components' },\n  ]}\n/>":
    "import { NavigationMenu } from '@heliannuuthus/ui'\n\n<NavigationMenu\n  align=\"end\"\n  items={[\n    { label: 'Product', content: ({ Link }) => <Link href=\"/components\">Component Library</Link> },\n    { label: 'component', href: '/components' },\n  ]}\n/>",
  "import { NavigationMenu } from '@heliannuuthus/ui'\n\n<NavigationMenu\n  items={[\n    {\n      label: '产品',\n      content: ({ Link }) => (\n        <div>\n          <Link href=\"/components\">组件库</Link>\n          <Link href=\"/tokens\">设计令牌</Link>\n        </div>\n      ),\n    },\n    { label: '组件', href: '/components', active: true },\n  ]}\n/>":
    "import { NavigationMenu } from '@heliannuuthus/ui'\n\n<NavigationMenu\n  items={[\n    {\n      label: 'product',\n      content: ({ Link }) => (\n        <div>\n          <Link href=\"/components\">Component Library</Link>\n          <Link href=\"/tokens\">Design Tokens</Link>\n        </div>\n      ),\n    },\n    { label: 'components', href: '/components', active: true },\n  ]}\n/>",
  "import { NavigationMenu } from '@heliannuuthus/ui'\n\n<NavigationMenu\n  items={[\n    {\n      label: '产品',\n      value: 'product',\n      content: ({ Link }) => (\n        <>\n          <Link href=\"/components\">组件库</Link>\n          <Link href=\"/tokens\">设计令牌</Link>\n        </>\n      ),\n    },\n    { active: true, href: '/components', label: '组件' },\n  ]}\n/>":
    "import { NavigationMenu } from '@heliannuuthus/ui'\n\n<NavigationMenu\n  items={[\n    {\n      label: 'product',\n      value: 'product',\n      content: ({ Link }) => (\n        <>\n          <Link href=\"/components\">Component library</Link>\n          <Link href=\"/tokens\">Design Tokens</Link>\n        </>\n      ),\n    },\n    { active: true, href: '/components', label: 'components' },\n  ]}\n/>",
  'import { Button, Popover } from \'@heliannuuthus/ui\'\n\n<Popover\n  trigger={<Button>3 位负责人</Button>}\n  title="发布负责人"\n  description="发布和回滚时会通知这些成员。"\n  content={<OwnerList />}\n/>':
    'import { Button, Popover } from \'@heliannuuthus/ui\'\n\n<Popover\n  trigger={<Button>3 persons in charge</Button>}\n  title="Release Manager"\n  description="These members will be notified when publishing and rolling back."\n  content={<OwnerList />}\n/>',
  'import { Button, Popover } from \'@heliannuuthus/ui\'\n\n<Popover\n  triggerMode="hover"\n  trigger={<Button variant="link">@linmo</Button>}\n  content="负责人资料"\n  delay={300}\n  closeDelay={150}\n  side="bottom"\n/>':
    'import { Button, Popover } from \'@heliannuuthus/ui\'\n\n<Popover\n  triggerMode="hover"\n  trigger={<Button variant="link">@linmo</Button>}\n  content="Responsible person information"\n  delay={300}\n  closeDelay={150}\n  side="bottom"\n/>',
  'import { Progress } from \'@heliannuuthus/ui\'\n\n<Progress\n  effect="sparkle"\n  label="生产环境"\n  showValue\n  value={68}\n/>':
    'import { Progress } from \'@heliannuuthus/ui\'\n\n<Progress\n  effect="sparkle"\n  label="production environment"\n  showValue\n  value={68}\n/>',
  'import { Progress } from \'@heliannuuthus/ui\'\n\n<Progress effect="sparkle" value={68} label="生产环境" showValue />':
    'import { Progress } from \'@heliannuuthus/ui\'\n\n<Progress effect="sparkle" value={68} label="Production environment" showValue />',
  'import { Progress } from \'@heliannuuthus/ui\'\n\n<Progress label="文档覆盖率" showValue value={68} />':
    'import { Progress } from \'@heliannuuthus/ui\'\n\n<Progress label="Document coverage" showValue value={68} />',
  "import { Radio } from '@heliannuuthus/ui'\n\n<Radio.Group\n  value={delivery}\n  onChange={setDelivery}\n  options={[\n    { label: '邮件通知', value: 'email' },\n    { label: '站内通知', value: 'inbox' },\n    { label: '不通知', value: 'none' },\n  ]}\n/>":
    "import { Radio } from '@heliannuuthus/ui'\n\n<Radio.Group\n  value={delivery}\n  onChange={setDelivery}\n  options={[\n    { label: 'email notification', value: 'email' },\n    { label: 'in-site notification', value: 'inbox' },\n    { label: 'No notification', value: 'none' },\n  ]}\n/>",
  "import { Radio } from '@heliannuuthus/ui'\n\n<Radio.Group\n  value={delivery}\n  onChange={setDelivery}\n  options={[\n    { label: '邮件通知', value: 'email' },\n    { label: '站内通知', value: 'inbox' },\n  ]}\n/>":
    "import { Radio } from '@heliannuuthus/ui'\n\n<Radio.Group\n  value={delivery}\n  onChange={setDelivery}\n  options={[\n    { label: 'email notification', value: 'email' },\n    { label: 'in-site notification', value: 'inbox' },\n  ]}\n/>",
  "import { Radio } from '@heliannuuthus/ui'\n\n<Radio.Group\n  value={plan}\n  onChange={setPlan}\n  orientation=\"horizontal\"\n  columns={3}\n  minColumnWidth={180}\n  options={[\n    { label: '个人版', value: 'free' },\n    { label: '团队版', value: 'team' },\n  ]}\n/>":
    "import { Radio } from '@heliannuuthus/ui'\n\n<Radio.Group\n  value={plan}\n  onChange={setPlan}\n  orientation=\"horizontal\"\n  columns={3}\n  minColumnWidth={180}\n  options={[\n    { label: 'Personal version', value: 'free' },\n    { label: 'Team Edition', value: 'team' },\n  ]}\n/>",
  "import { Resizable } from '@heliannuuthus/ui'\nimport { GripHorizontal } from 'lucide-react'\n\nexport const EditorWithTerminal = () => {\n  return (\n    <Resizable\n      className=\"h-96\"\n      orientation=\"vertical\"\n      separator={<GripHorizontal aria-hidden />}\n      items={[\n        {\n          key: 'editor',\n          panel: <section>编辑器</section>,\n          size: ['64', '38'],\n        },\n        {\n          key: 'terminal',\n          panel: <section>终端</section>,\n          size: ['36', '20'],\n        },\n      ]}\n    />\n  )\n}":
    "import { Resizable } from '@heliannuuthus/ui'\nimport { GripHorizontal } from 'lucide-react'\n\nexport const EditorWithTerminal = () => {\n  return (\n    <Resizable\n      className=\"h-96\"\n      orientation=\"vertical\"\n      separator={<GripHorizontal aria-hidden />}\n      items={[\n        {\n          key: 'editor',\n          panel: <section>Editor</section>,\n          size: ['64', '38'],\n        },\n        {\n          key: 'terminal',\n          panel: <section>Terminal</section>,\n          size: ['36', '20'],\n        },\n      ]}\n    />\n  )\n}",
  "import { Resizable } from '@heliannuuthus/ui'\nimport { GripVertical } from 'lucide-react'\n\nexport const Workspace = () => {\n  return (\n    <Resizable\n      orientation=\"horizontal\"\n      separator={<GripVertical aria-hidden />}\n      items={[\n        { key: 'files', panel: '文件列表', size: ['34', '24'] },\n        { key: 'preview', panel: '内容预览', size: ['66', '40'] },\n      ]}\n    />\n  )\n}":
    "import { Resizable } from '@heliannuuthus/ui'\nimport { GripVertical } from 'lucide-react'\n\nexport const Workspace = () => {\n  return (\n    <Resizable\n      orientation=\"horizontal\"\n      separator={<GripVertical aria-hidden />}\n      items={[\n        { key: 'files', panel: 'file list', size: ['34', '24'] },\n        { key: 'preview', panel: 'content preview', size: ['66', '40'] },\n      ]}\n    />\n  )\n}",
  'import { Select } from \'@heliannuuthus/ui\'\n\n<Select\n  value={value}\n  onChange={setValue}\n  placeholder="搜索成员…"\n  showClear\n  emptyText="没有找到成员"\n  options={members.map((member) => ({ label: member, value: member }))}\n/>':
    'import { Select } from \'@heliannuuthus/ui\'\n\n<Select\n  value={value}\n  onChange={setValue}\n  placeholder="Search for members…"\n  showClear\n  emptyText="Member not found"\n  options={members.map((member) => ({ label: member, value: member }))}\n/>',
  'import { Select } from \'@heliannuuthus/ui\'\n\n<Select\n  value={value}\n  onChange={setValue}\n  placeholder="选择工作区"\n  options={groups.map((group) => ({\n    label: group.label,\n    options: group.items.map((item) => ({\n      label: item.label,\n      value: item,\n      disabled: item.disabled,\n    })),\n  }))}\n/>':
    'import { Select } from \'@heliannuuthus/ui\'\n\n<Select\n  value={value}\n  onChange={setValue}\n  placeholder="Select workspace"\n  options={groups.map((group) => ({\n    label: group.label,\n    options: group.items.map((item) => ({\n      label: item.label,\n      value: item,\n      disabled: item.disabled,\n    })),\n  }))}\n/>',
  'import { Separator } from \'@heliannuuthus/ui\'\n\n<div className="flex items-stretch gap-4">\n  <div>状态</div>\n  <Separator orientation="vertical" />\n  <div>负责人</div>\n</div>':
    'import { Separator } from \'@heliannuuthus/ui\'\n\n<div className="flex items-stretch gap-4">\n  <div>Status</div>\n  <Separator orientation="vertical" />\n  <div>Responsible person</div>\n</div>',
  "import { Separator } from '@heliannuuthus/ui'\n\n<section>上方内容</section>\n<Separator />\n<section>下方内容</section>":
    "import { Separator } from '@heliannuuthus/ui'\n\n<section>Content above</section>\n<Separator />\n<section>Content below</section>",
  'import { Slider } from \'@heliannuuthus/ui\'\n\n<Slider aria-label="音量" defaultValue={64} min={0} max={100} />':
    'import { Slider } from \'@heliannuuthus/ui\'\n\n<Slider aria-label="Volume" defaultValue={64} min={0} max={100} />',
  'import { Slider } from \'@heliannuuthus/ui\'\nimport { Volume1, Volume2 } from \'lucide-react\'\n\n<Slider\n  aria-label="播放器音量"\n  startIcon={<Volume1 />}\n  endIcon={<Volume2 />}\n  startLabel="静音"\n  endLabel="最大"\n  value={volume}\n  onChange={setVolume}\n  min={0}\n  max={100}\n  step={2}\n/>':
    'import { Slider } from \'@heliannuuthus/ui\'\nimport { Volume1, Volume2 } from \'lucide-react\'\n\n<Slider\n  aria-label="Player volume"\n  startIcon={<Volume1 />}\n  endIcon={<Volume2 />}\n  startLabel="Mute"\n  endLabel="Max"\n  value={volume}\n  onChange={setVolume}\n  min={0}\n  max={100}\n  step={2}\n/>',
  "import { Sonner, toast } from '@heliannuuthus/ui'\n\ntoast.promise(publish(), {\n  loading: '正在发布到生产环境…',\n  success: 'v0.12.0 已发布',\n  error: '发布失败，请检查构建日志',\n})\n\n<Sonner position=\"bottom-right\" richColors />":
    "import { Sonner, toast } from '@heliannuuthus/ui'\n\ntoast.promise(publish(), {\n  loading: 'Publishing to production environment...',\n  success: 'v0.12.0 released',\n  error: 'Publishing failed, please check the build log',\n})\n\n<Sonner position=\"bottom-right\" richColors />",
  "import { Spinner } from '@heliannuuthus/ui'\n\n<div><Spinner />正在加载组件……</div>":
    "import { Spinner } from '@heliannuuthus/ui'\n\n<div><Spinner />Loading components...</div>",
  'import { Spinner } from \'@heliannuuthus/ui\'\n\n<section aria-busy="true" aria-label="正在同步环境状态">\n  <div>\n    <span>预览环境</span>\n    <Spinner aria-label="预览环境同步中" size="sm" />\n  </div>\n</section>':
    'import { Spinner } from \'@heliannuuthus/ui\'\n\n<section aria-busy="true" aria-label="Synchronizing environment status">\n  <div>\n    <span>Preview environment</span>\n    <Spinner aria-label="Preview environment synchronizing" size="sm" />\n  </div>\n</section>',
  'import { Spinner } from \'@heliannuuthus/ui\'\n\n<Spinner aria-label="小号加载" size="sm" />\n<Spinner aria-label="正在加载" />\n<Spinner aria-label="大号加载" size="lg" />':
    'import { Spinner } from \'@heliannuuthus/ui\'\n\n<Spinner aria-label="small size loading" size="sm" />\n<Spinner aria-label="Loading" />\n<Spinner aria-label="Large size loading" size="lg" />',
  "import { Switch } from '@heliannuuthus/ui'\n\n<label><Switch defaultChecked />启用通知</label>":
    "import { Switch } from '@heliannuuthus/ui'\n\n<label><Switch defaultChecked />Enable notification</label>",
  'import { Table } from \'@heliannuuthus/ui\'\nimport { Button } from \'@heliannuuthus/ui\'\n\n<Table.Primitive className="min-w-[960px] table-fixed">\n  <Table.Header>\n    <Table.Row>\n      <Table.Head fixed="start" className="w-40">服务</Table.Head>\n      <Table.Head className="w-28">版本</Table.Head>\n      <Table.Head className="w-28">区域</Table.Head>\n      <Table.Head className="w-32">最近部署</Table.Head>\n      <Table.Head fixed="end" align="center" className="w-24">操作</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell fixed="start">Web Console</Table.Cell>\n      <Table.Cell>v0.12.0</Table.Cell>\n      <Table.Cell fixed="end" align="center">\n        <Button\n          aria-label="监控 Web Console"\n          size="xs"\n          variant="ghost"\n        >\n          监控\n        </Button>\n      </Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table.Primitive>':
    'import { Table } from \'@heliannuuthus/ui\'\nimport { Button } from \'@heliannuuthus/ui\'\n\n<Table.Primitive className="min-w-[960px] table-fixed">\n  <Table.Header>\n    <Table.Row>\n      <Table.Head fixed="start" className="w-40">Service</Table.Head>\n      <Table.Head className="w-28">Version</Table.Head>\n      <Table.Head className="w-28">Region</Table.Head>\n      <Table.Head className="w-32">Recently deployed</Table.Head>\n      <Table.Head fixed="end" align="center" className="w-24">Operation</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell fixed="start">Web Console</Table.Cell>\n      <Table.Cell>v0.12.0</Table.Cell>\n      <Table.Cell fixed="end" align="center">\n        <Button\n          aria-label="Monitoring Web Console"\n          size="xs"\n          variant="ghost"\n        >\n          Monitor\n        </Button>\n      </Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table.Primitive>',
  "import { Table } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\n\n<Table.Primitive>\n  <Table.Header>{/* 列标题 */}</Table.Header>\n  <Table.Body>{/* 数据行 */}</Table.Body>\n  <Table.Footer>{/* 汇总行 */}</Table.Footer>\n</Table.Primitive>":
    "import { Table } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\n\n<Table.Primitive>\n  <Table.Header>{/* column headings */}</Table.Header>\n  <Table.Body>{/* release rows */}</Table.Body>\n  <Table.Footer>{/* summary */}</Table.Footer>\n</Table.Primitive>",
  'import { Table } from \'@heliannuuthus/ui\'\nimport { Button } from \'@heliannuuthus/ui\'\n\n<Table.Primitive>\n  <Table.Header>\n    <Table.Row>\n      <Table.Head>服务</Table.Head>\n      <Table.Head align="center">操作</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>Web Console</Table.Cell>\n      <Table.Cell align="center">\n        <Button\n          aria-label="查看 Web Console"\n          size="xs"\n          variant="ghost"\n        >\n          查看\n        </Button>\n      </Table.Cell>\n    </Table.Row>\n  </Table.Body>\n  <Table.Footer>\n    <Table.Row><Table.Cell colSpan={2}>共 1 项</Table.Cell></Table.Row>\n  </Table.Footer>\n</Table.Primitive>':
    'import { Table } from \'@heliannuuthus/ui\'\nimport { Button } from \'@heliannuuthus/ui\'\n\n<Table.Primitive>\n  <Table.Header>\n    <Table.Row>\n      <Table.Head>Services</Table.Head>\n      <Table.Head align="center">Operation</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>Web Console</Table.Cell>\n      <Table.Cell align="center">\n        <Button\n          aria-label="View Web Console"\n          size="xs"\n          variant="ghost"\n        >\n          View\n        </Button>\n      </Table.Cell>\n    </Table.Row>\n  </Table.Body>\n  <Table.Footer>\n    <Table.Row><Table.Cell colSpan={2}>1 item in total</Table.Cell></Table.Row>\n  </Table.Footer>\n</Table.Primitive>',
  'import { Table } from \'@heliannuuthus/ui\'\nimport { Button } from \'@heliannuuthus/ui\'\nimport { ArrowUpRight } from \'lucide-react\'\n\nconst ActionCell = () => {\n  return (\n    <Button\n      aria-label="配置 Realtime Gateway"\n      size="xs"\n      variant="ghost"\n    >\n      配置 <ArrowUpRight data-icon="inline-end" />\n    </Button>\n  )\n}\n\n<Table.Primitive className="table-fixed">\n  <Table.Header>\n    <Table.Row>\n      <Table.Head align="start">服务</Table.Head>\n      <Table.Head ellipsis>服务说明、最近一次生产部署上下文与异常原因</Table.Head>\n      <Table.Head align="end">成功率</Table.Head>\n      <Table.Head align="center">操作</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>Realtime Gateway</Table.Cell>\n      <Table.Cell ellipsis>{description}</Table.Cell>\n      <Table.Cell align="end">99.98%</Table.Cell>\n      <Table.Cell align="center"><ActionCell /></Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table.Primitive>':
    'import { Table } from \'@heliannuuthus/ui\'\nimport { Button } from \'@heliannuuthus/ui\'\nimport { ArrowUpRight } from \'lucide-react\'\n\nconst ActionCell = () => {\n  return (\n    <Button\n      aria-label="Configure Realtime Gateway"\n      size="xs"\n      variant="ghost"\n    >\n      Configure <ArrowUpRight data-icon="inline-end" />\n    </Button>\n  )\n}\n\n<Table.Primitive className="table-fixed">\n  <Table.Header>\n    <Table.Row>\n      <Table.Head align="start">Service</Table.Head>\n      <Table.Head ellipsis>Service description, latest production deployment context and exception reasons</Table.Head>\n      <Table.Head align="end">Success rate</Table.Head>\n      <Table.Head align="center">Operation</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>Realtime Gateway</Table.Cell>\n      <Table.Cell ellipsis>{description}</Table.Cell>\n      <Table.Cell align="end">99.98%</Table.Cell>\n      <Table.Cell align="center"><ActionCell /></Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table.Primitive>',
  "import { Tabs } from '@heliannuuthus/ui'\n\n<Tabs\n  animation=\"slide\"\n  defaultValue=\"design\"\n  items={[\n    { value: 'design', label: '设计', content: <Design /> },\n    { value: 'code', label: '开发', content: <Development /> },\n  ]}\n/>":
    "import { Tabs } from '@heliannuuthus/ui'\n\n<Tabs\n  animation=\"slide\"\n  defaultValue=\"design\"\n  items={[\n    { value: 'design', label: 'design', content: <Design /> },\n    { value: 'code', label: 'Development', content: <Development /> },\n  ]}\n/>",
  "import { Tabs } from '@heliannuuthus/ui'\n\n<Tabs\n  defaultValue=\"overview\"\n  items={[\n    { value: 'overview', label: '概览', content: <Overview /> },\n    { value: 'activity', label: '动态', content: <Activity /> },\n    { value: 'members', label: '成员', content: <Members /> },\n  ]}\n/>":
    "import { Tabs } from '@heliannuuthus/ui'\n\n<Tabs\n  defaultValue=\"overview\"\n  items={[\n    { value: 'overview', label: 'Overview', content: <Overview /> },\n    { value: 'activity', label: 'dynamic', content: <Activity /> },\n    { value: 'members', label: 'members', content: <Members /> },\n  ]}\n/>",
  "import { Tabs } from '@heliannuuthus/ui'\n\n<Tabs\n  defaultValue=\"preview\"\n  variant=\"line\"\n  centered\n  items={[\n    { value: 'preview', label: '预览', content: '实时预览当前组件。' },\n    { value: 'code', label: '代码', content: '查看组件实现代码。' },\n  ]}\n/>":
    "import { Tabs } from '@heliannuuthus/ui'\n\n<Tabs\n  defaultValue=\"preview\"\n  variant=\"line\"\n  centered\n  items={[\n    { value: 'preview', label: 'Preview', content: 'Preview the current component in real time. ' },\n    { value: 'code', label: 'code', content: 'View component implementation code. ' },\n  ]}\n/>",
  "import { Toast, useToast } from '@heliannuuthus/ui'\n\nconst PublishAction = () => {\n  const { toast } = useToast()\n\n  return (\n    <Button onClick={() => toast.success('发布已完成')}>\n      发布\n    </Button>\n  )\n}\n\n<Toast.Provider>\n  <App />\n</Toast.Provider>":
    "import { Toast, useToast } from '@heliannuuthus/ui'\n\nconst PublishAction = () => {\n  const { toast } = useToast()\n\n  return (\n    <Button onClick={() => toast.success('Publishing completed')}>\n      publish\n    </Button>\n  )\n}\n\n<Toast.Provider>\n  <App />\n</Toast.Provider>",
  'import { Toast, useToast } from \'@heliannuuthus/ui\'\n\nconst WorkspaceAction = () => {\n  const { toast } = useToast()\n  return <Button onClick={() => toast.info(\'预览已刷新\')}>刷新</Button>\n}\n\n<div className="relative overflow-hidden">\n  <Toast.Provider scope="local">\n    <WorkspaceAction />\n  </Toast.Provider>\n</div>':
    'import { Toast, useToast } from \'@heliannuuthus/ui\'\n\nconst WorkspaceAction = () => {\n  const { toast } = useToast()\n  return <Button onClick={() => toast.info(\'Preview has been refreshed\')}>Refresh</Button>\n}\n\n<div className="relative overflow-hidden">\n  <Toast.Provider scope="local">\n    <WorkspaceAction />\n  </Toast.Provider>\n</div>',
  'import { Toggle } from \'@heliannuuthus/ui\'\n\n<Toggle defaultValue aria-label="切换粗体">\n  <Bold />\n  粗体\n</Toggle>':
    'import { Toggle } from \'@heliannuuthus/ui\'\n\n<Toggle defaultValue aria-label="toggle bold">\n  <Bold />\n  Bold\n</Toggle>',
  "import { Toggle } from '@heliannuuthus/ui'\n\n<Toggle.Group\n  defaultValue={['bold']}\n  items={[\n    { value: 'bold', label: <Bold />, 'aria-label': '粗体' },\n    { value: 'italic', label: <Italic />, 'aria-label': '斜体' },\n  ]}\n/>":
    "import { Toggle } from '@heliannuuthus/ui'\n\n<Toggle.Group\n  defaultValue={['bold']}\n  items={[\n    { value: 'bold', label: <Bold />, 'aria-label': 'bold' },\n    { value: 'italic', label: <Italic />, 'aria-label': 'italic' },\n  ]}\n/>",
  "import { Toggle } from '@heliannuuthus/ui'\n\n<Toggle.Group\n  value={formats}\n  onChange={setFormats}\n  multiple\n  variant=\"outline\"\n  items={[\n    { value: 'bold', label: <Bold />, 'aria-label': '粗体' },\n    { value: 'italic', label: <Italic />, 'aria-label': '斜体' },\n    { value: 'underline', label: <Underline />, 'aria-label': '下划线' },\n  ]}\n/>":
    "import { Toggle } from '@heliannuuthus/ui'\n\n<Toggle.Group\n  value={formats}\n  onChange={setFormats}\n  multiple\n  variant=\"outline\"\n  items={[\n    { value: 'bold', label: <Bold />, 'aria-label': 'bold' },\n    { value: 'italic', label: <Italic />, 'aria-label': 'italic' },\n    { value: 'underline', label: <Underline />, 'aria-label': 'underline' },\n  ]}\n/>",
  'import { Typography } from \'@heliannuuthus/ui\'\n\nexport const TypographyStory = () => {\n  return (\n    <article>\n      <Typography.Title level={2}>让界面语言保持清晰</Typography.Title>\n      <Typography.Text as="p" size="xl" tone="muted">稳定的排版让用户先理解内容，再自然地注意到设计。</Typography.Text>\n      <Typography.Text as="p">一致的标题层级和正文节奏，让内容清晰、可信且易于阅读。</Typography.Text>\n      <Typography.Blockquote>一致的界面，来自每一次一致的内容决策。</Typography.Blockquote>\n      <Typography.Text as="p">\n        使用 <Typography.Code>@heliannuuthus/ui</Typography.Code> 组合内容。\n      </Typography.Text>\n      <Typography.Text as="p" size="sm" tone="muted">设计系统札记 · 5 分钟阅读</Typography.Text>\n    </article>\n  )\n}':
    'import { Typography } from \'@heliannuuthus/ui\'\n\nexport const TypographyStory = () => {\n  return (\n    <article>\n      <Typography.Title level={2}>Keep the interface language clear</Typography.Title>\n      <Typography.Text as="p" size="xl" tone="muted">Stable typography allows users to understand the content first and then naturally notice the design. </Typography.Text>\n      <Typography.Text as="p">Consistent heading hierarchy and body rhythm make content clear, believable, and easy to read. </Typography.Text>\n      <Typography.Blockquote>A consistent interface comes from consistent content decisions every time. </Typography.Blockquote>\n      <Typography.Text as="p">\n        Use <Typography.Code>@heliannuuthus/ui</Typography.Code> to combine content.\n      </Typography.Text>\n      <Typography.Text as="p" size="sm" tone="muted">Notes on Design Systems · 5 minutes to read</Typography.Text>\n    </article>\n  )\n}',
  "import { useState } from 'react'\nimport { AspectRatio } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\n\nconst ratios = [\n  { label: '16:9', value: 16 / 9 },\n  { label: '4:3', value: 4 / 3 },\n  { label: '1:1', value: 1 },\n]\n\nexport const CoverEditor = () => {\n  const [ratio, setRatio] = useState(ratios[0])\n\n  return (\n    <div>\n      <AspectRatio ratio={ratio.value}>\n        <img src=\"/cover.jpg\" alt=\"内容封面\" />\n      </AspectRatio>\n      {ratios.map((option) => (\n        <Button key={option.label} onClick={() => setRatio(option)}>\n          {option.label}\n        </Button>\n      ))}\n    </div>\n  )\n}":
    "import { useState } from 'react'\nimport { AspectRatio } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\n\nconst ratios = [\n  { label: '16:9', value: 16 / 9 },\n  { label: '4:3', value: 4 / 3 },\n  { label: '1:1', value: 1 },\n]\n\nexport const CoverEditor = () => {\n  const [ratio, setRatio] = useState(ratios[0])\n\n  return (\n    <div>\n      <AspectRatio ratio={ratio.value}>\n        <img src=\"/cover.jpg\" alt=\"Content cover\" />\n      </AspectRatio>\n      {ratios.map((option) => (\n        <Button key={option.label} onClick={() => setRatio(option)}>\n          {option.label}\n        </Button>\n      ))}\n    </div>\n  )\n}",
  "import { useState } from 'react'\nimport { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\n\nexport const ViewSettings = () => {\n  const [sidebar, setSidebar] = useState(true)\n  const [density, setDensity] = useState('comfortable')\n\n  return (\n    <DropdownMenu\n      trigger={<Button variant=\"outline\">视图设置</Button>}\n      items={[\n        {\n          type: 'checkbox',\n          label: '显示侧栏',\n          checked: sidebar,\n          onChange: setSidebar,\n        },\n        { type: 'separator' },\n        {\n          type: 'radio',\n          value: density,\n          onChange: setDensity,\n          items: [\n            { label: '紧凑', value: 'compact' },\n            { label: '舒适', value: 'comfortable' },\n          ],\n        },\n      ]}\n    />\n  )\n}":
    "import { useState } from 'react'\nimport { Button } from '@heliannuuthus/ui'\nimport { DropdownMenu } from '@heliannuuthus/ui'\n\nexport const ViewSettings = () => {\n  const [sidebar, setSidebar] = useState(true)\n  const [density, setDensity] = useState('comfortable')\n\n  return (\n    <DropdownMenu\n      trigger={<Button variant=\"outline\">View settings</Button>}\n      items={[\n        {\n          type: 'checkbox',\n          label: 'Show sidebar',\n          checked: sidebar,\n          onChange: setSidebar,\n        },\n        { type: 'separator' },\n        {\n          type: 'radio',\n          value: density,\n          onChange: setDensity,\n          items: [\n            { label: 'compact', value: 'compact' },\n            { label: 'comfortable', value: 'comfortable' },\n          ],\n        },\n      ]}\n    />\n  )\n}",
  'import { useState } from \'react\'\nimport { Input } from \'@heliannuuthus/ui\'\nimport { Slider } from \'@heliannuuthus/ui\'\nimport { Stack } from \'@heliannuuthus/ui\'\n\nexport const SliderCompactExample = () => {\n  const [quality, setQuality] = useState(68)\n\n  return (\n    <Stack block gap={8}>\n      <Stack.Compact block aria-label="压缩质量">\n        <div className="flex min-h-9 flex-1 items-center border px-4">\n          <Slider\n            aria-label="压缩质量滑块"\n            value={quality}\n            onChange={setQuality}\n            min={0}\n            max={100}\n          />\n        </div>\n        <Input\n          aria-label="压缩质量数值"\n          className="w-24"\n          suffix="%"\n          type="number"\n          value={quality}\n          onChange={(event) => setQuality(Number(event.target.value))}\n        />\n      </Stack.Compact>\n      <span aria-live="polite">当前压缩质量：{quality}%</span>\n    </Stack>\n  )\n}':
    'import { useState } from \'react\'\nimport { Input } from \'@heliannuuthus/ui\'\nimport { Slider } from \'@heliannuuthus/ui\'\nimport { Stack } from \'@heliannuuthus/ui\'\n\nexport const SliderCompactExample = () => {\n  const [quality, setQuality] = useState(68)\n\n  return (\n    <Stack block gap={8}>\n      <Stack.Compact block aria-label="Compression quality">\n        <div className="flex min-h-9 flex-1 items-center border px-4">\n          <Slider\n            aria-label="Compression quality slider"\n            value={quality}\n            onChange={setQuality}\n            min={0}\n            max={100}\n          />\n        </div>\n        <Input\n          aria-label="Compression quality value"\n          className="w-24"\n          suffix="%"\n          type="number"\n          value={quality}\n          onChange={(event) => setQuality(Number(event.target.value))}\n        />\n      </Stack.Compact>\n      <span aria-live="polite">Current compression quality: {quality}%</span>\n    </Stack>\n  )\n}',
  "import { useState } from 'react'\nimport { Menubar } from '@heliannuuthus/ui'\n\nexport const ViewMenubar = () => {\n  const [sidebar, setSidebar] = useState(true)\n  const [theme, setTheme] = useState('system')\n\n  return (\n    <Menubar\n      menus={[\n        {\n          label: '视图',\n          items: [\n            {\n              type: 'checkbox',\n              label: '显示侧栏',\n              checked: sidebar,\n              onChange: setSidebar,\n            },\n            { type: 'separator' },\n            {\n              type: 'radio',\n              value: theme,\n              onChange: setTheme,\n              items: [\n                { label: '跟随系统', value: 'system' },\n                { label: '浅色', value: 'light' },\n                { label: '深色', value: 'dark' },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n  )\n}":
    "import { useState } from 'react'\nimport { Menubar } from '@heliannuuthus/ui'\n\nexport const ViewMenubar = () => {\n  const [sidebar, setSidebar] = useState(true)\n  const [theme, setTheme] = useState('system')\n\n  return (\n    <Menubar\n      menus={[\n        {\n          label: 'view',\n          items: [\n            {\n              type: 'checkbox',\n              label: 'Show sidebar',\n              checked: sidebar,\n              onChange: setSidebar,\n            },\n            { type: 'separator' },\n            {\n              type: 'radio',\n              value: theme,\n              onChange: setTheme,\n              items: [\n                { label: 'Follow the system', value: 'system' },\n                { label: 'light', value: 'light' },\n                { label: 'dark', value: 'dark' },\n              ],\n            },\n          ],\n        },\n      ]}\n    />\n  )\n}",
  "import { useState } from 'react'\nimport { Resizable } from '@heliannuuthus/ui'\nimport { GripVertical } from 'lucide-react'\n\nexport const ConstrainedWorkspace = () => {\n  const [navigationSize, setNavigationSize] = useState(24)\n\n  return (\n    <Resizable\n      className=\"h-80\"\n      separator={({ index }) => <span>{index + 1}</span>}\n      items={[\n        {\n          key: 'navigation',\n          panel: <aside>导航 · {navigationSize}%</aside>,\n          size: ['24', '18', '34'],\n          collapsible: true,\n          collapsedSize: 0,\n          separator: <GripVertical aria-hidden />,\n          onResize: (size) =>\n            setNavigationSize(Math.round(size.asPercentage)),\n        },\n        {\n          key: 'canvas',\n          panel: <main>画布</main>,\n          size: ['52', '36'],\n        },\n        {\n          key: 'inspector',\n          panel: <aside>属性</aside>,\n          size: ['24', '18', '34'],\n          collapsible: true,\n          collapsedSize: 0,\n        },\n      ]}\n    />\n  )\n}":
    "import { useState } from 'react'\nimport { Resizable } from '@heliannuuthus/ui'\nimport { GripVertical } from 'lucide-react'\n\nexport const ConstrainedWorkspace = () => {\n  const [navigationSize, setNavigationSize] = useState(24)\n\n  return (\n    <Resizable\n      className=\"h-80\"\n      separator={({ index }) => <span>{index + 1}</span>}\n      items={[\n        {\n          key: 'navigation',\n          panel: <aside>Navigation · {navigationSize}%</aside>,\n          size: ['24', '18', '34'],\n          collapsible: true,\n          collapsedSize: 0,\n          separator: <GripVertical aria-hidden />,\n          onResize: (size) =>\n            setNavigationSize(Math.round(size.asPercentage)),\n        },\n        {\n          key: 'canvas',\n          panel: <main>canvas</main>,\n          size: ['52', '36'],\n        },\n        {\n          key: 'inspector',\n          panel: <aside>Properties</aside>,\n          size: ['24', '18', '34'],\n          collapsible: true,\n          collapsedSize: 0,\n        },\n      ]}\n    />\n  )\n}",
  "import { useState } from 'react'\nimport { Table } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\nimport { Pagination } from '@heliannuuthus/ui'\n\nconst [page, setPage] = useState(1)\nconst visibleRows = rows.slice((page - 1) * 10, page * 10)\n\n<>\n  <Table.Primitive>\n    {/* render visibleRows，并在末列提供查看、审批等操作 Button */}\n  </Table.Primitive>\n  <Pagination\n    current={page}\n    pageCount={Math.ceil(rows.length / 10)}\n    onChange={setPage}\n  />\n</>":
    "import { useState } from 'react'\nimport { Table } from '@heliannuuthus/ui'\nimport { Button } from '@heliannuuthus/ui'\nimport { Pagination } from '@heliannuuthus/ui'\n\nconst [page, setPage] = useState(1)\nconst visibleRows = rows.slice((page - 1) * 10, page * 10)\n\n<>\n  <Table.Primitive>\n    {/* render visibleRows, and provide viewing, approval and other operations Button in the last column */}\n  </Table.Primitive>\n  <Pagination\n    current={page}\n    pageCount={Math.ceil(rows.length / 10)}\n    onChange={setPage}\n  />\n</>",
  "import { useState } from 'react'\nimport { Toggle } from '@heliannuuthus/ui'\n\nexport const ControlledToggle = () => {\n  const [value, setValue] = useState(true)\n\n  return (\n    <Toggle value={value} onChange={setValue} aria-label=\"切换粗体\">\n      <Bold />\n      粗体\n    </Toggle>\n  )\n}":
    "import { useState } from 'react'\nimport { Toggle } from '@heliannuuthus/ui'\n\nexport const ControlledToggle = () => {\n  const [value, setValue] = useState(true)\n\n  return (\n    <Toggle value={value} onChange={setValue} aria-label=\"toggle bold\">\n      <Bold />\n      Bold\n    </Toggle>\n  )\n}",
  'items 中的导航和内容仍需使用各自正确的语义结构。':
    'Navigation and content within items still need to use their correct semantic structure.',
  'justify 控制主轴，把剩余空间放到元素之间。':
    'justify controls the main axis and puts the remaining space between elements.',
  'justify 控制主轴，内容从左侧开始排列。':
    'justify controls the main axis and arranges content from the left.',
  'justify 控制主轴，整组内容在中间聚合。':
    'justify controls the main axis, and the entire group of contents is aggregated in the middle.',
  'Kbd 只用于展示，不应承担实际键盘事件监听。':
    'Kbd is only for display and should not be responsible for actual keyboard event monitoring.',
  'Label 通过 htmlFor 关联真实控件；必填标记和可选提示作为 Field 的辅助信息。':
    'Label associates real controls through htmlFor; required tags and optional hints serve as auxiliary information for Field.',
  'Layout 支持 div 属性；Header、Content、Footer 和 Sidebar 分别支持对应语义元素的标准属性。':
    'Layout supports the div attribute; Header, Content, Footer and Sidebar respectively support the standard attributes of corresponding semantic elements.',
  'Masonry 基础布局示例': 'Masonry basic layout example',
  'Masonry 最大列数': 'Masonry maximum number of columns',
  'max 限制可见头像数量并自动生成 +N；overlap 使用像素值控制分组的紧凑程度。':
    'max limits the number of visible avatars and automatically generates +N; overlap uses pixel values ​​to control how compact the grouping is.',
  'Menubar 面向全局命令，不适合替代站点主导航或页面标签页。':
    'Menubar is for global commands and is not suitable to replace the main site navigation or page tabs.',
  'Menubar 组件文档': 'Menubar component documentation',
  'pagination 接收函数时提供页码状态与控制方法，可直接组合符合当前页面的完整翻页器。':
    'Pagination provides page number status and control methods when receiving functions, and can directly combine a complete page turner that matches the current page.',
  'PDF 文档': 'PDF document',
  'PNG 图片': 'PNG images',
  'Props 配置': 'Props configuration',
  'px 测试容器': 'px test container',
  'Resizable 示例代码': 'Resizable sample code',
  'scope="local" 时父容器需要 position: relative 和 overflow: hidden。':
    'When scope="local" is used, the parent container requires position: relative and overflow: hidden.',
  'Select 作为数值输入的单位后缀。': 'Select Unit suffix for numeric input.',
  'Select、带内部前缀的 Input 与操作按钮共同拼接。':
    'Select, internally prefixed Input are concatenated with action buttons.',
  'separator 提供的纯装饰内容应使用 aria-hidden。':
    'Purely decorative content provided by a separator should use aria-hidden.',
  'Sidebar 与一个嵌套 Layout 横向排列；嵌套区域继续负责 Header 和 Content 的纵向关系。':
    'Sidebar is arranged horizontally with a nested Layout; the nested area continues to be responsible for the vertical relationship between Header and Content.',
  'Sidebar 只负责结构和宽度；需要折叠、抽屉或菜单状态时组合专用组件。':
    'Sidebar is only responsible for structure and width; combine specialized components when folding, drawer or menu state is required.',
  'Sidebar 中的导航或详情区域需要提供可辨认的 aria-label。':
    'Navigation or detail areas in sidebars need to provide a recognizable aria-label.',
  'size 集中表达初始、最小和最大尺寸；item 可覆盖默认分隔线，并通过 onResize 获取实时尺寸。':
    'size centrally expresses the initial, minimum and maximum sizes; item can override the default divider and obtain the real-time size through onResize.',
  'Slider 数值联动': 'Slider numerical linkage',
  'Spinner 表示无法确定完成比例的短时加载，并与可见状态文字一起使用。':
    'Spinner represents a short load where the completion ratio cannot be determined and is used with visible status text.',
  'Spinner 尺寸': 'Spinner size',
  'Stack 间距': 'Stack spacing',
  'Stack 只提供视觉布局，不改变子元素原有语义和焦点顺序。':
    'Stack only provides visual layout and does not change the original semantics and focus order of sub-elements.',
  'style / 原生属性': 'style / native attribute',
  'Switch 使用统一的舒展尺寸；开关立即更新设置，不可关闭的系统项通过禁用状态解释约束。':
    'Switch uses a uniform stretch size; switches update settings immediately, and system items that cannot be turned off interpret constraints through the disabled state.',
  'Switch 用于立即生效的二元设置，标签应直接说明开启后会发生什么。':
    'Switch is used for binary settings that take effect immediately, and the label should directly explain what will happen when turned on.',
  'Table 是不管理数据状态的表格布局原语：业务直接组合表头、行和单元格，并精确控制固定列、滚动、行展开与自定义内容。':
    'Table is a table layout primitive that does not manage data status: the business directly combines table headers, rows and cells, and precisely controls fixed columns, scrolling, row expansion and customized content.',
  'Table 只负责当前页的语义结构，Pagination 管理页码；本地数组或服务端数据都使用同一受控组合。':
    'Table is only responsible for the semantic structure of the current page, and Pagination manages the page number; local arrays or server-side data use the same controlled combination.',
  'Toast 使用非阻塞通知区域；消息标题应简短，并在 description 中说明必要上下文。':
    'Toast uses a non-blocking notification area; the message title should be short and describe necessary context in the description.',
  'Toast 只会出现在当前容器顶部':
    'Toast will only appear at the top of the current container',
  'Toggle 与 Toggle.Group 使用统一尺寸；通过 items 管理可同时开启的工具状态。':
    'Toggle and Toggle.Group use the same size; use items to manage the status of tools that can be opened at the same time.',
  'Tooltip 十二个位置': 'Tooltip twelve placements',
  'v0.12.0 发布详情': 'v0.12.0 release details',
  'v0.12.0 已部署到生产环境。': 'v0.12.0 has been deployed to production.',
  'variant 只区分信息层级；同一种状态不要在页面内混用多套样式。':
    'Variant only distinguishes information levels; do not mix multiple sets of styles within the page for the same state.',
  'virtual 只滚动并虚拟化表体；Header 固定在容器顶部，固定列、横向滚动和自定义 render 会继续生效。':
    'virtual scrolls and virtualizes only the table body. Header stays pinned to the top of the container, while fixed columns, horizontal scrolling, and custom render continue to work.',
  'Web Console 发布计划': 'Web Console Release Plan',
  '不要把格式化后的字符串存入业务状态；onChange 已返回原始 number 或 null。':
    'Do not store the formatted string in application state; onChange already returns the raw number or null.',
  并发任务数: 'Concurrent task count',
  '比较常用尺寸、隐藏步进按钮、只读、禁用和校验失败状态。':
    'Compare common sizes, hidden step controls, read-only, disabled, and invalid states.',
  本地化格式: 'Localized formatting',
  减少数值: 'Decrease value',
  '本地化增减按钮的可访问名称。':
    'Localize the accessible names of the increment and decrement buttons.',
  服务价格: 'Service price',
  '方向键按 step 调整，Alt 和 Shift 分别使用 smallStep 与 largeStep。':
    'Arrow keys adjust by step, while Alt and Shift use smallStep and largeStep respectively.',
  '金额和精度要求较高的场景应明确 format 与 step，并在业务层处理十进制定点规则。':
    'For currency and high-precision values, specify format and step and handle decimal fixed-point rules in the application layer.',
  '扩展根节点或输入、按钮等语义插槽样式。':
    'Extend the root or semantic slots such as the input and buttons.',
  '配置原生输入提示、自动填充和软键盘模式。':
    'Configure the native input placeholder, autocomplete, and virtual keyboard mode.',
  '录入数量、金额、百分比或具有明确步长和边界的数值。':
    'Enter quantities, currency, percentages, or values with explicit steps and boundaries.',
  '设置不可用、只读和表单必填语义。':
    'Set disabled, read-only, and required form semantics.',
  '设置临时失败后的最大重试次数。':
    'Set the maximum retry count after a transient failure.',
  '设置普通、Alt 和 Shift 组合键对应的步进幅度。':
    'Set the step sizes used by regular, Alt, and Shift interactions.',
  '设置紧凑、默认或宽松控件高度。':
    'Set a compact, default, or spacious control height.',
  尺寸与状态: 'Sizes and states',
  大尺寸: 'Large size',
  增加数值: 'Increase value',
  受控数值与边界: 'Controlled value and boundaries',
  '使用 Intl.NumberFormat 配置显示货币，同时让 onChange 始终返回未格式化的 number 或 null。':
    'Use Intl.NumberFormat to display currency while onChange always returns the unformatted number or null.',
  '使用 Intl.NumberFormatOptions 和语言区域格式化显示值。':
    'Format the displayed value with Intl.NumberFormatOptions and a locale.',
  '使用方向键或增减按钮逐级调整。':
    'Adjust step by step with the arrow keys or increment and decrement buttons.',
  '输入、格式化并按步长调整数值。':
    'Enter, format, and step through numeric values.',
  '输入、格式化并通过键盘或步进按钮精确调整数值。':
    'Enter, format, and precisely adjust numeric values with the keyboard or step controls.',
  '输入失焦、步进结束或键盘提交数值时返回最终值。':
    'Return the committed value on blur, after stepping ends, or when the keyboard commits a value.',
  '数值变化时返回未格式化的 number 或 null。':
    'Return the unformatted number or null when the value changes.',
  '显示、隐藏或自定义递增和递减按钮中的图标。':
    'Show, hide, or customize the icons in the increment and decrement buttons.',
  未设置: 'Not set',
  小尺寸: 'Small size',
  无步进按钮: 'Without step controls',
  '限制允许输入和步进到达的数值边界。':
    'Limit the numeric boundaries that typing and stepping may reach.',
  '选择是否允许悬停滚轮调整，以及步进时吸附到最近倍数。':
    'Choose whether hovering wheel adjustments are allowed and whether stepping snaps to the nearest multiple.',
  '需要保留原始 number 值，同时按语言区域格式化显示内容。':
    'Preserve the raw number value while formatting the displayed content for a locale.',
  只读: 'Read only',
  '只需要范围内粗略选择时优先使用 Slider。':
    'Prefer Slider when only an approximate choice within a range is needed.',
  '增减按钮保持可访问名称，并在到达边界时自动禁用。':
    'Keep accessible names on the increment and decrement buttons and disable them automatically at boundaries.',
  '在同一输入边框内展示固定前缀或单位后缀。':
    'Display a fixed prefix or unit suffix within the same input border.',
  '原始数值：': 'Raw value: ',
  存储容量: 'Storage capacity',
  '当前容量：': 'Current capacity: ',
  数字输入框: 'Number field',
  禁用: 'Disabled',
  '组合可编辑数值输入、格式化逻辑和可选的增减按钮。':
    'Combine an editable numeric input, formatting logic, and optional increment and decrement buttons.',
  '通过受控值、最小值、最大值和步长管理存储容量，文本输入、键盘与增减按钮共享同一数值状态。':
    'Manage storage capacity with a controlled value, minimum, maximum, and step while text input, keyboard interactions, and step controls share one numeric state.',
  '为独立使用的数字输入提供标签或 aria-label；Form.Field 会自动建立标签与说明关联。':
    'Provide a label or aria-label for a standalone numeric input; Form.Field automatically associates its label and description.',
  '以受控或非受控方式设置原始数值；空输入使用 null。':
    'Set the raw value in controlled or uncontrolled mode; an empty input uses null.',
  重试次数: 'Retry count',
  文件与项目: 'Files and projects',
  偏好设置: 'Preferences',
  切换主题: 'Switch theme',
  尚未执行命令: 'No command has been run',
  '已执行：': 'Ran: ',
  '搜索文件、设置或主题…': 'Search files, settings, or themes…',
  不存在的命令: 'Missing command',
  没有匹配的命令: 'No matching command',
  '请尝试更短或不同的关键词。': 'Try a shorter or different search term.',
  '搜索并执行当前工作区中的快捷操作。':
    'Search and run quick actions in the current workspace.',
  快速操作: 'Quick actions',
  打开命令面板: 'Open command palette',
  分组与选项: 'Groups and options',
  '每个 group 使用 heading 标记分组标题，并通过 options 配置命令值、标签、检索关键词、图标、快捷键、禁用状态和执行回调。':
    'Each group uses heading for its title and options to configure command values, labels, search keywords, icons, shortcuts, disabled states, and execution callbacks.',
  搜索输入提示: 'Search input placeholder',
  'placeholder 只描述搜索输入框尚未输入内容时的预期查询，不负责空结果反馈。':
    'placeholder describes the expected query before anything is entered; it does not provide empty-result feedback.',
  空结果内容: 'Empty result content',
  'emptyText 仅在过滤后没有匹配命令时显示，可以是纯文本，也可以是包含图标、标题和建议的 ReactNode。':
    'emptyText appears only when filtering finds no matching command and can be plain text or a ReactNode with an icon, title, and suggestion.',
  命令弹窗: 'Command dialog',
  'dialog 是 Command 对通用 Dialog 的组合入口，用来把同一份命令列表放入模态层；它负责触发器、标题、说明和开关状态，groups 仍负责命令内容。':
    'dialog composes Command with the shared Dialog to place the same command list in a modal layer; it owns the trigger, title, description, and open state while groups still define the commands.',
  '配置一组或多组命令；每组通过 heading 和 options 描述内容。':
    'Configure one or more command groups; each group describes its content with heading and options.',
  '传入 Dialog 配置后把命令列表放入模态层，并配置触发器、标题、说明及打开状态；省略时渲染内联列表。':
    'Pass Dialog configuration to place the command list in a modal and configure its trigger, title, description, and open state; omit it to render an inline list.',
  '设置搜索输入框没有内容时显示的提示。':
    'Set the hint shown when the search input has no content.',
  '设置过滤后没有匹配命令时显示的内容。':
    'Set the content shown when filtering finds no matching command.',
  没有找到命令: 'No command found',
  '配置搜索输入框的原生属性，并通过 value 与 onChange 管理搜索关键词。':
    'Configure native search input attributes and manage the search term through value and onChange.',
  '管理当前选中的命令值，不表示搜索关键词。':
    'Manage the currently selected command value, not the search term.',
  '以受控方式设置当前搜索关键词。':
    'Set the current search query in controlled mode.',
  '搜索关键词变化时接收新的字符串值。':
    'Receive the next string value when the search query changes.',
  '设置命令列表供辅助技术读取的可访问名称。':
    'Set an accessible name for assistive technologies to identify the command list.',
  '控制首尾循环、Vim 导航键以及指针悬停是否改变当前命令。':
    'Control wraparound navigation, Vim navigation keys, and whether pointer hover changes the current command.',
  '设置当前命令分组的可选标题。':
    'Set the optional title of the current command group.',
  '设置当前分组内按顺序展示的命令。':
    'Set the commands displayed in order within the current group.',
  '设置命令的唯一值，并参与默认文本匹配。':
    'Set the unique command value, which also participates in default text matching.',
  '设置命令列表中显示的主要内容；纯文本标签会自动参与过滤匹配。':
    'Set the primary content displayed in the command list; plain-text labels automatically participate in filtering.',
  '补充不显示但可参与过滤匹配的别名；标签为复杂 ReactNode 时也可在这里提供可搜索文本。':
    'Add hidden aliases for filtering; when the label is a complex ReactNode, searchable text can also be provided here.',
  '设置显示在命令标签前的图标。':
    'Set the icon displayed before the command label.',
  '设置显示在命令右侧的快捷键提示。':
    'Set the shortcut hint displayed on the right side of the command.',
  '禁用命令并阻止选择。': 'Disable a command and prevent selection.',
  '选择该命令时执行回调并接收命令值。':
    'Run a callback with the command value when the command is selected.',
  '渲染搜索输入、过滤结果和键盘可导航的命令列表。':
    'Render a search input, filtered results, and a keyboard-navigable command list.',
  '描述一个可选标题和该分组包含的命令选项。':
    'Describe an optional title and the command options contained in the group.',
  '描述单条命令的值、内容、搜索关键词、状态和执行行为。':
    'Describe the value, content, search keywords, state, and execution behavior of one command.',
  '需要从较多页面、文件、设置或操作中快速搜索并执行命令。':
    'Use when people need to quickly search and run commands across many pages, files, settings, or actions.',
  '需要同时支持键盘导航、快捷键提示和模糊检索。':
    'Use when keyboard navigation, shortcut hints, and fuzzy search are all required.',
  '需要在页面内嵌列表与模态命令面板之间复用同一组命令数据。':
    'Use when the same command data must be shared between an inline list and a modal command palette.',
  '使用 label 为命令列表提供明确的可访问名称。':
    'Use label to provide a clear accessible name for the command list.',
  '键盘用户可以输入关键词，并通过方向键移动、Enter 执行命令。':
    'Keyboard users can enter a search term, move with the arrow keys, and run a command with Enter.',
  '禁用命令需要使用 disabled，不要仅通过颜色表达不可用状态。':
    'Use disabled for unavailable commands instead of communicating the state with color alone.',
  'placeholder 描述可搜索内容，emptyText 说明搜索无结果，两者不要混用。':
    'placeholder describes what can be searched, while emptyText explains that no results were found; do not mix their roles.',
  'value 管理当前命令选择；搜索关键词应通过 inputProps 管理。':
    'value manages the current command selection; manage the search term through inputProps.',
  'shortcut 只负责展示提示，应用仍需自行注册对应的全局快捷键。':
    'shortcut only displays a hint; the application must still register the corresponding global keyboard shortcut.',
  'items 同时体现分组标题、图标、快捷键、禁用项、分隔线和危险操作；选择后结果会显示在触发区域下方。':
    'items demonstrates group labels, icons, shortcuts, disabled entries, separators, and destructive actions; the selected result appears below the trigger area.',
  勾选与单选状态: 'Checkbox and radio states',
  'checkbox entry 管理独立布尔状态，radio entry 管理互斥选项；关闭菜单后结果仍保留在触发区域中。':
    'A checkbox entry manages an independent boolean state, while a radio entry manages mutually exclusive options; the result remains visible in the trigger area after the menu closes.',
  嵌套子菜单: 'Nested submenu',
  '普通 item 提供 children 时形成子菜单，适合将同一动作的多个格式或目标收进第二层。':
    'A regular item with children becomes a submenu, suitable for placing multiple formats or targets of the same action in a second level.',
  开关状态与禁用: 'Open state and disabled',
  '比较默认非受控、通过 open 与 onOpenChange 管理的受控模式，以及 disabled 阻止触发的状态。':
    'Compare the default uncontrolled mode, controlled mode managed through open and onOpenChange, and the state where disabled prevents triggering.',
  非受控: 'Uncontrolled',
  受控: 'Controlled',
  '控制指针高亮，以及键盘焦点是否在首尾循环。':
    'Control pointer highlighting and whether keyboard focus loops between the first and last item.',
  '设置菜单键盘导航的排列方向。':
    'Set the orientation used for keyboard navigation in the menu.',
  '扩展菜单浮层的样式。': 'Extend the menu popup styles.',
  右键菜单已禁用: 'Context menu disabled',
  单击右键或按菜单键: 'Right-click or press the Menu key',
  页面操作: 'Page actions',
  '已选择：复制链接': 'Selected: Copy link',
  复制内部链接: 'Copy internal link',
  删除页面: 'Delete page',
  '已选择：删除页面': 'Selected: Delete page',
  '设计系统 / 菜单规范': 'Design system / Menu guidelines',
  显示评论: 'Show comments',
  隐藏评论: 'Hide comments',
  访问范围: 'Access scope',
  页面可见性: 'Page visibility',
  '季度复盘.pdf': 'Quarterly review.pdf',
  文件预览: 'File preview',
  查看详情: 'View details',
  菜单已打开: 'Menu open',
  菜单已关闭: 'Menu closed',
  不可打开: 'Cannot open',
  等待右键操作: 'Waiting for a right-click',
  当前对象: 'Current object',
  受控对象: 'Controlled object',
  禁用对象: 'Disabled object',
  非受控对象: 'Uncontrolled object',
  '使用 Accordion.Indicator 统一设置位置；children 状态函数接收当前条目的 open、disabled 和 value，由调用方决定展示内容。':
    'Use Accordion.Indicator to set the position in one place. Its children state function receives the current item’s open, disabled, and value state so the caller controls what is rendered.',
  "import { Accordion } from '@heliannuuthus/ui'\nimport { Minus, Plus } from 'lucide-react'\n\n<Accordion\n  defaultValue={['deployment']}\n  indicator={\n    <Accordion.Indicator position=\"start\">\n      {({ open }) => (open ? <Minus /> : <Plus />)}\n    </Accordion.Indicator>\n  }\n  items={[\n    {\n      value: 'deployment',\n      title: '部署策略',\n      content: '先灰度 10%，观察后全量发布。',\n    },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\nimport { Minus, Plus } from 'lucide-react'\n\n<Accordion\n  defaultValue={['deployment']}\n  indicator={\n    <Accordion.Indicator position=\"start\">\n      {({ open }) => (open ? <Minus /> : <Plus />)}\n    </Accordion.Indicator>\n  }\n  items={[\n    {\n      value: 'deployment',\n      title: 'Deployment strategy',\n      content: 'Roll out to 10% first, observe, then release to everyone.',\n    },\n  ]}\n/>",
  '设置 Accordion.Indicator；省略时使用位于末端、随展开状态旋转的默认箭头，传入 null 时隐藏。':
    'Set Accordion.Indicator. When omitted, a default arrow at the end rotates with the open state; pass null to hide it.',
  '传入静态节点时随展开状态旋转；传入状态函数时接收 open、disabled 与 value，并完全控制展示内容。':
    'A static node rotates with the open state. A state function receives open, disabled, and value and fully controls the rendered content.',
  '将指示器放在标题起始侧或末端。':
    'Place the indicator at the start or end of the title.',
  '关闭面板后仍保留其 DOM，适合保留内部状态；不能与 hiddenUntilFound 同时使用。':
    'Keep a closed panel in the DOM to preserve internal state; it cannot be used together with hiddenUntilFound.',
  '通过 hidden="until-found" 保留关闭面板，使浏览器页内查找可以定位并展开内容；不能与 keepMounted 同时使用。':
    'Keep closed panels with hidden="until-found" so the browser’s find-in-page can locate and expand their content; it cannot be used together with keepMounted.',
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  indicator={\n    <Accordion.Indicator position=\"start\">\n      {({ open }) => (open ? <Minus /> : <Plus />)}\n    </Accordion.Indicator>\n  }\n  items={[\n    { value: 'deployment', title: '部署策略', content: '先灰度 10%，观察后全量发布。' },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  indicator={\n    <Accordion.Indicator position=\"start\">\n      {({ open }) => (open ? <Minus /> : <Plus />)}\n    </Accordion.Indicator>\n  }\n  items={[\n    { value: 'deployment', title: 'Deployment strategy', content: 'Roll out to 10% first, observe, then release to everyone.' },\n  ]}\n/>",
  '当前条目的面板是否已展开。': 'Whether the current item’s panel is open.',
  '当前条目或整个 Accordion 是否已禁用。':
    'Whether the current item or the entire Accordion is disabled.',
  '当前条目的稳定标识。': 'The stable identifier of the current item.',
  '管理展开值并根据 items 渲染一组关联面板。':
    'Manage open values and render a set of related panels from items.',
  '读取当前条目状态，并在标题起始侧或末端渲染展开指示器。':
    'Read the current item state and render an expansion indicator at the start or end of the title.',
  读取当前展开状态: 'Reads the current open state',
  '默认一次只展开一个条目，打开新条目时关闭前一个。':
    'By default, only one item is open at a time; opening another item closes the previous one.',
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['preflight']}\n  items={[\n    {\n      value: 'preflight',\n      title: '预检结果',\n      content: '42 项检查均已通过。',\n    },\n    {\n      value: 'rollback',\n      title: '回滚方案',\n      content: '异常时切回上一版本。',\n    },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['preflight']}\n  items={[\n    {\n      value: 'preflight',\n      title: 'Preflight results',\n      content: 'All 42 checks passed.',\n    },\n    {\n      value: 'rollback',\n      title: 'Rollback plan',\n      content: 'Switch back to the previous version if an issue occurs.',\n    },\n  ]}\n/>",
  '设置 multiple 后允许多个条目同时保持展开。':
    'Set multiple to allow several items to remain open at the same time.',
  默认指示器: 'Default indicator',
  '省略 indicator 时在标题末端显示默认箭头，并随展开状态旋转。':
    'Omit indicator to show the default arrow at the end of the title and rotate it with the open state.',
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['deployment']}\n  items={[\n    {\n      value: 'deployment',\n      title: '部署策略',\n      content: '先灰度 10%，观察后全量发布。',\n    },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  defaultValue={['deployment']}\n  items={[\n    {\n      value: 'deployment',\n      title: 'Deployment strategy',\n      content: 'Roll out to 10% first, observe, then release to everyone.',\n    },\n  ]}\n/>",
  起始位置: 'Start position',
  '通过 Accordion.Indicator 的 position 将默认箭头放到标题起始侧。':
    'Use Accordion.Indicator position to place the default arrow at the start of the title.',
  状态函数指示器: 'State function indicator',
  禁用单个条目: 'Disable one item',
  '在 AccordionItem 上设置 disabled，仅阻止该条目的触发交互。':
    'Set disabled on an AccordionItem to prevent trigger interaction for that item only.',
  "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  items={[\n    {\n      value: 'preflight',\n      title: '预检结果',\n      content: '42 项检查均已通过。',\n      disabled: true,\n    },\n    {\n      value: 'rollback',\n      title: '回滚方案',\n      content: '异常时切回上一版本。',\n    },\n  ]}\n/>":
    "import { Accordion } from '@heliannuuthus/ui'\n\n<Accordion\n  items={[\n    {\n      value: 'preflight',\n      title: 'Preflight results',\n      content: 'All 42 checks passed.',\n      disabled: true,\n    },\n    {\n      value: 'rollback',\n      title: 'Rollback plan',\n      content: 'Switch back to the previous version if an issue occurs.',\n    },\n  ]}\n/>",
  禁用整个组件: 'Disable the entire component',
  '在 Accordion 上设置 disabled，统一阻止所有条目的展开与收起。':
    'Set disabled on Accordion to prevent every item from opening or closing.',
  '设置条目的唯一标识，并用于受控展开值。':
    'Set the unique item identifier used by the controlled open value.',
  '设置触发按钮中显示的标题内容。':
    'Set the title content displayed in the trigger button.',
  '设置条目展开后显示的面板内容。':
    'Set the panel content displayed when the item is open.',
  '仅禁用当前条目的展开与收起交互。':
    'Disable opening and closing for the current item only.',
  '禁用整个 Accordion 的所有条目。': 'Disable every item in the Accordion.',
  '描述单个条目的标识、标题、面板内容与禁用状态。':
    'Describe one item’s identifier, title, panel content, and disabled state.',
  '设置附件名称。': 'Set the attachment name.',
  '设置文件大小、处理状态或错误原因等辅助说明。':
    'Set supporting details such as file size, processing state, or error reason.',
  '设置文件类型图标或缩略图。': 'Set a file-type icon or thumbnail.',
  '设置与附件直接相关的下载、重试或移除操作。':
    'Set attachment actions such as download, retry, or remove.',
  '设置气泡中的消息内容。': 'Set the message content inside the bubble.',
  '设置回应、已读状态或其他边缘内容。':
    'Set reactions, read status, or other edge content.',
  '控制回应内容的边缘位置并扩展容器属性。':
    'Control the edge position of reaction content and extend its container props.',
  '为头像图片和默认回退文字提供可访问名称。':
    'Provide an accessible name for the avatar image and default fallback text.',
  '设置头像图片资源地址。': 'Set the avatar image source URL.',
  '设置图片不可用时显示的姓名缩写或图标。':
    'Set initials or an icon to display when the image is unavailable.',
  '配置回退内容的延迟显示和原生 span 属性。':
    'Configure the fallback delay and native span props.',
  '配置头像图片的加载状态回调和原生 img 属性。':
    'Configure the avatar image loading callback and native img props.',
  '配置头像集合及每个项目的稳定 key。':
    'Configure the avatar collection and a stable key for each item.',
  '为组内头像和自动计数项设置统一形状。':
    'Set a consistent shape for avatars and the generated count item in the group.',
  '为组内头像和自动计数项设置统一尺寸。':
    'Set a consistent size for avatars and the generated count item in the group.',
  '设置列表项起始侧的媒体内容。': 'Set media content at the start of the item.',
  '声明媒体内容是普通内容、图标还是图片。':
    'Declare whether the media content is default content, an icon, or an image.',
  '设置列表项的主要标题。': 'Set the primary item title.',
  '设置列表项的辅助说明。': 'Set the supporting item description.',
  '在标题和说明之外添加自定义内容。':
    'Add custom content beyond the title and description.',
  '设置列表项末尾的相关操作。': 'Set related actions at the end of the item.',
  '添加横跨整行的前置内容。': 'Add leading content that spans the full row.',
  '添加横跨整行的后置内容。': 'Add trailing content that spans the full row.',
  '按语义槽位扩展列表项内部样式。':
    'Extend internal item styles by semantic slot.',
  '配置一组列表项及每个项目的稳定 key。':
    'Configure a collection of items and a stable key for each entry.',
  '根据当前项目和索引完全自定义列表项渲染。':
    'Fully customize item rendering from the current entry and index.',
  '在相邻列表项之间显示默认分隔线或自定义内容。':
    'Show the default separator or custom content between adjacent items.',
  '分别扩展图标与内容槽位样式。':
    'Extend the icon and content slot styles independently.',
  '提供轮播数据或直接渲染的节点列表。':
    'Provide carousel data or a list of nodes to render directly.',
  '根据当前数据项和索引渲染轮播内容。':
    'Render carousel content from the current data item and index.',
  '扩展轮播内容轨道的样式。': 'Extend the carousel content track styles.',
  '为每个轮播项设置统一样式。': 'Set shared styles for every carousel item.',
  '配置上一页按钮的外观、可访问名称和原生属性。':
    'Configure the previous button appearance, accessible name, and native props.',
  '配置下一页按钮的外观、可访问名称和原生属性。':
    'Configure the next button appearance, accessible name, and native props.',
  '将分页内容放在轮播轨道之前或之后。':
    'Place pagination content before or after the carousel track.',
  '根据点位索引和选中状态自定义分页点。':
    'Customize a pagination dot from its index and selected state.',
  '以受控方式设置当前展开状态。':
    'Set the current open state in controlled mode.',
  '设置非受控模式的初始展开状态。':
    'Set the initial open state in uncontrolled mode.',
  '图片尚未完成加载时，延迟显示回退内容的毫秒数。':
    'Delay fallback content by this many milliseconds while the image is still loading.',
  '头像图片加载状态变化时调用。':
    'Called when the avatar image loading status changes.',
  '在头像集合中为当前项目提供稳定标识。':
    'Provide a stable identifier for the current avatar group item.',
  '将回应内容对齐到气泡边缘的起始侧或末尾侧。':
    'Align reaction content to the start or end of the bubble edge.',
  '将回应内容放在气泡顶部或底部边缘。':
    'Place reaction content on the top or bottom edge of the bubble.',
  '暂停自动播放。': 'Pause autoplay.',
  '恢复自动播放。': 'Resume autoplay.',
  '滚动到下一个轮播项。': 'Scroll to the next carousel item.',
  '滚动到上一个轮播项。': 'Scroll to the previous carousel item.',
  '根据索引滚动到指定轮播项。':
    'Scroll to the carousel item at the given index.',
  '当前是否可以滚动到下一项。':
    'Whether the carousel can currently scroll to the next item.',
  '当前是否可以滚动到上一项。':
    'Whether the carousel can currently scroll to the previous item.',
  '当前页码，从 1 开始。': 'The current page number, starting at 1.',
  '自动播放当前是否正在运行。': 'Whether autoplay is currently running.',
  '轮播总页数。': 'The total number of carousel pages.',
  '当前轮播项的零起始索引。':
    'The zero-based index of the current carousel item.',
  '底层滚动对齐点集合。': 'The underlying collection of scroll snap positions.',
  '当前分页点对应的零起始索引。':
    'The zero-based index represented by the current pagination dot.',
  '当前分页点是否对应已选中轮播项。':
    'Whether the current pagination dot represents the selected carousel item.',
  '设置按钮的语义外观。': 'Set the semantic button appearance.',
  '设置按钮尺寸。': 'Set the button size.',
  '让按钮填满容器可用宽度。':
    'Make the button fill the available container width.',
  '禁用按钮交互。': 'Disable button interaction.',
  '设置独立触发按钮的语义外观。':
    'Set the semantic appearance of the standalone trigger button.',
  '设置独立触发按钮的尺寸。': 'Set the size of the standalone trigger button.',
  '禁用触发按钮并阻止展开状态变化。':
    'Disable the trigger button and prevent the open state from changing.',
  '为仅图标触发按钮提供可访问名称。':
    'Provide an accessible name for an icon-only trigger button.',
  '处理触发按钮的原生点击事件。':
    'Handle the native click event from the trigger button.',
  '扩展对应语义槽位的 className。':
    'Extend the className of the corresponding semantic slot.',
  '在列表项集合中为当前项目提供稳定标识。':
    'Provide a stable identifier for the current item in the collection.',
  '扩展标记内容槽位的 className。': 'Extend the marker content slot className.',
  '扩展标记图标槽位的 className。': 'Extend the marker icon slot className.',
  基础附件: 'Basic attachment',
  'title、description 与 media 分别承载文件名称、辅助信息和类型图标。':
    'Use title, description, and media for the file name, supporting information, and file-type icon.',
  媒体内容类型: 'Media content type',
  'mediaType 明确声明 media 是图标还是图片，让缩略图获得正确的尺寸、裁切与状态样式。':
    'mediaType declares whether media is an icon or an image so thumbnails receive the correct size, crop, and state styling.',
  媒体类型: 'Media type',
  图标: 'Icon',
  处理状态: 'Processing states',
  'state 分别表达等待、上传、处理、失败和完成阶段；状态文案仍由 description 明确说明。':
    'state represents waiting, uploading, processing, failed, and completed phases; use description to state the status explicitly.',
  等待上传: 'Waiting to upload',
  正在上传: 'Uploading',
  正在处理: 'Processing',
  上传失败: 'Upload failed',
  附件尺寸: 'Attachment sizes',
  'size 只控制单个附件的整体密度；不同尺寸通过分段控件逐项预览。':
    'size controls the density of one attachment; preview each size individually with the segmented control.',
  超小: 'Extra small',
  附件方向: 'Attachment orientation',
  'horizontal 适合文件列表，vertical 以缩略卡形式突出媒体内容。':
    'horizontal suits file lists, while vertical emphasizes media in a thumbnail card.',
  附件操作: 'Attachment actions',
  'actions 只放置与当前附件直接相关的下载、重试或移除操作。':
    'Use actions only for download, retry, or remove operations that directly affect the current attachment.',
  整卡触发: 'Full-card trigger',
  'trigger 接收链接或按钮元素，在保留正确元素语义的同时让整个附件可点击。':
    'trigger accepts a link or button element and makes the whole attachment clickable while preserving the correct element semantics.',
  附件集合: 'Attachment collection',
  'Attachment.Group 通过 items 渲染一组附件，并为横向溢出提供滚动与吸附行为。':
    'Attachment.Group renders a collection from items and provides scrolling and snapping for horizontal overflow.',
  '2.1 MB · 图片预览': '2.1 MB · Image preview',
  '8.4 MB · 压缩文件': '8.4 MB · Archive',
  附件缩略图: 'Attachment thumbnail',
  '8.4 MB · 已完成': '8.4 MB · Complete',
  '8.4 MB · 上传失败': '8.4 MB · Upload failed',
  '8.4 MB · 等待上传': '8.4 MB · Waiting to upload',
  '8.4 MB · 正在上传': '8.4 MB · Uploading',
  '下载 web-console.tgz': 'Download web-console.tgz',
  单击附件打开预览: 'Click the attachment to open a preview',
  '预览 release-notes.md': 'Preview release-notes.md',
  'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  media={<FileArchive />}\n  mediaType="icon"\n  title="web-console.tgz"\n/>\n\n<Attachment\n  media={<img alt="附件缩略图" src="/cover.jpg" />}\n  mediaType="image"\n  title="cover.jpg"\n/>':
    'import { Attachment } from \'@heliannuuthus/ui\'\n\n<Attachment\n  media={<FileArchive />}\n  mediaType="icon"\n  title="web-console.tgz"\n/>\n\n<Attachment\n  media={<img alt="Attachment thumbnail" src="/cover.jpg" />}\n  mediaType="image"\n  title="cover.jpg"\n/>',
  '<Attachment\n  actions={<Button aria-label="下载附件"><Download /></Button>}\n  title="web-console.tgz"\n/>':
    '<Attachment\n  actions={<Button aria-label="Download attachment"><Download /></Button>}\n  title="web-console.tgz"\n/>',
  '<Attachment\n  title="release-notes.md"\n  trigger={<a aria-label="预览 release-notes.md" href="/files/release-notes.md" />}\n/>':
    '<Attachment\n  title="release-notes.md"\n  trigger={<a aria-label="Preview release-notes.md" href="/files/release-notes.md" />}\n/>',
  '<Avatar size="sm" alt="林默" fallback="林" />\n<Avatar size="default" alt="林默" fallback="林" />\n<Avatar size="lg" alt="林默" fallback="林" />':
    '<Avatar size="sm" alt="Lin Mo" fallback="L" />\n<Avatar size="default" alt="Lin Mo" fallback="L" />\n<Avatar size="lg" alt="Lin Mo" fallback="L" />',
  头像形状: 'Avatar shapes',
  'shape 在圆形和圆角方形之间切换，每种形状作为独立 case 展示。':
    'shape switches between circle and rounded-square avatars, with each shape shown as an independent case.',
  形状: 'Shape',
  头像尺寸: 'Avatar sizes',
  'size 提供小、中、大三档尺寸，并同步调整文字与状态标记。':
    'size provides small, medium, and large avatars while scaling text and status indicators with them.',
  触发方式: 'Trigger mode',
  'variant 的每种语义外观都作为独立 case 展示，避免在同一个预览区域混合比较。':
    'Each semantic variant is shown as an independent case instead of mixing multiple appearances in one preview.',
  透明: 'Ghost',
  危险: 'Destructive',
  气泡预览: 'Bubble preview',
  'import { Bubble } from \'@heliannuuthus/ui\'\n\n<Bubble\n  align="end"\n  content="已经补充完成，可以重新评审。"\n  reactions="✓ 2"\n  variant="elevated"\n/>':
    'import { Bubble } from \'@heliannuuthus/ui\'\n\n<Bubble\n  align="end"\n  content="The update is complete and ready for another review."\n  reactions="✓ 2"\n  variant="elevated"\n/>',
  图片与回退内容: 'Image and fallback content',
  'src 提供头像图片；加载失败时显示 fallback，并通过 imageProps 与 fallbackProps 配置加载回调和延迟。':
    'src provides the avatar image; fallback is shown when loading fails, while imageProps and fallbackProps configure loading callbacks and delay.',
  图片状态: 'Image status',
  图片可用: 'Image available',
  显示回退: 'Show fallback',
  '<Avatar\n  alt="林默"\n  src="/avatars/lin.png"\n  fallback="林"\n  fallbackProps={{ delay: 200 }}\n  imageProps={{ onLoadingStatusChange: setStatus }}\n/>':
    '<Avatar\n  alt="Lin Mo"\n  src="/avatars/lin.png"\n  fallback="L"\n  fallbackProps={{ delay: 200 }}\n  imageProps={{ onLoadingStatusChange: setStatus }}\n/>',
  自定义剩余数量: 'Custom overflow count',
  'renderCount 接收未展示数量并替换默认 +N，同时继承分组的 shape 与 size。':
    'renderCount receives the hidden count and replaces the default +N while inheriting the group shape and size.',
  剩余数量: 'Overflow count',
  自定义: 'Custom',
  '显式传入 title 说明当前为空的对象；默认图标仅提供辅助视觉，不替代状态文案。':
    'Pass title explicitly to identify what is empty; the default icon is only a visual aid and does not replace the status text.',
  'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty title="暂无内容" />':
    'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty title="No content" />',
  'value 表示当前展开条目，onChange 接收用户操作后的完整值数组。':
    'value represents the currently expanded items, and onChange receives the complete value array after user interaction.',
  关闭面板保留策略: 'Closed panel retention',
  '默认关闭时卸载面板；keepMounted 保留内部状态；hiddenUntilFound 保留内容并允许浏览器页内查找定位。':
    'Closed panels unmount by default; keepMounted preserves internal state, while hiddenUntilFound retains searchable content for the browser find feature.',
  保留策略: 'Retention strategy',
  默认卸载: 'Unmount by default',
  保持挂载: 'Keep mounted',
  支持页内查找: 'Support browser find',
  'controls 决定是否渲染上一项和下一项按钮；按钮属性通过 previousButtonProps 与 nextButtonProps 独立扩展。':
    'controls determines whether previous and next buttons are rendered; previousButtonProps and nextButtonProps extend each button independently.',
  显示: 'Show',
  隐藏: 'Hide',
  分页点: 'Pagination dots',
  'pagination 控制默认点位或隐藏分页，renderDot 只改写单个点位的内容。':
    'pagination enables the default dots or hides pagination, while renderDot replaces only the content of each dot.',
  外部控制: 'External control',
  '通过 ref 调用 scrollPrev、scrollNext、scrollTo、play 与 pause，不暴露底层轮播实例。':
    'Use the ref to call scrollPrev, scrollNext, scrollTo, play, and pause without exposing the underlying carousel instance.',
  受控与禁用状态: 'Controlled and disabled states',
  'open 与 onOpenChange 管理受控展开状态；disabled 阻止触发器改变状态。':
    'open and onOpenChange manage controlled expansion, while disabled prevents the trigger from changing state.',
  标题与说明: 'Title and description',
  'title 必须明确说明当前为空的对象，description 再补充原因、筛选建议或下一步。':
    'title must identify what is empty, while description adds a reason, filtering suggestion, or next step.',
  '尝试缩短关键词或清除当前筛选条件。':
    'Try shortening the keyword or clearing the current filters.',
  'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  title="没有匹配的发布记录"\n  description="尝试缩短关键词或清除当前筛选条件。"\n/>':
    'import { Empty } from \'@heliannuuthus/ui\'\n\n<Empty\n  title="No matching release records"\n  description="Try shortening the keyword or clearing the current filters."\n/>',
  'icon 默认使用通用收件箱图标，也可以替换为场景图标或传 null 隐藏。':
    'icon uses a generic inbox by default; replace it with a contextual icon or pass null to hide it.',
  操作区域: 'Action area',
  列表项尺寸: 'Item sizes',
  'size 分别提供默认、小和超小三档内容密度。':
    'size provides default, small, and extra-small content densities.',
  'mediaType 明确区分普通内容、图标和图片，避免调用方依赖节点形态推断样式。':
    'mediaType explicitly distinguishes plain content, icons, and images so callers do not rely on node-shape inference.',
  普通内容: 'Plain content',
  内容槽位: 'Content slots',
  'header、content、actions 与 footer 各自占据独立语义区域，不再把多个结构字段塞进同一行说明。':
    'header, content, actions, and footer each occupy an independent semantic region instead of being compressed into one combined property row.',
  链接列表项: 'Linked item',
  '传入 href 时 Item 使用原生 a 元素承载整项导航，未传时保持普通 div。':
    'When href is provided, Item uses a native anchor for whole-item navigation; otherwise it remains a regular div.',
  列表项集合: 'Item group',
  'Item.Group 通过 items 渲染集合，separator 独立控制无分隔、默认分隔线或自定义分隔内容。':
    'Item.Group renders a collection from items, while separator independently selects no separator, the default divider, or custom content.',
  分隔内容: 'Separator content',
  无分隔: 'No separator',
  默认分隔线: 'Default divider',
  自定义内容: 'Custom content',
  链接与槽位样式: 'Link and slot styles',
  'href 让整个 Marker 使用原生链接语义，classNames 分别扩展 icon 与 content 槽位。':
    'href gives the entire Marker native link semantics, while classNames extends the icon and content slots independently.',
  消息对齐: 'Message alignment',
  'align 只控制单个气泡位于消息流的起始侧或末端，不隐含发送者身份。':
    'align only places a bubble at the start or end of the message flow and does not imply sender identity.',
  对齐: 'Alignment',
  起始侧: 'Start side',
  末端: 'End side',
  回应位置: 'Reaction position',
  'reactionsProps 的 side 与 align 分别控制回应位于气泡上下侧和左右边缘。':
    'The side and align fields in reactionsProps place reactions on the top or bottom and at either horizontal edge.',
  顶部起始侧: 'Top start',
  顶部末端: 'Top end',
  底部起始侧: 'Bottom start',
  底部末端: 'Bottom end',
  '明确说明当前为空的对象或结果。':
    'Clearly identifies the object or result that is empty.',
  '在附件集合中为当前项目提供稳定标识。':
    'Provides a stable identifier for the current item in an attachment group.',
  受控展开状态: 'Controlled expansion',
  全部关闭: 'All closed',
  关闭面板的保留策略: 'Closed panel retention strategy',
  图片头像: 'Image avatar',
  回退内容: 'Fallback content',
  加载状态: 'Loading status',
  '这条消息靠末端对齐。': 'This message is aligned to the end.',
  '这条消息靠起始端对齐。': 'This message is aligned to the start.',
  '回应内容可以锚定在气泡的四个边角。':
    'Reactions can be anchored to any of the four bubble corners.',
  分页点示例: 'Pagination dot example',
  外部控制的轮播: 'Externally controlled carousel',
  '展开状态由调用方读取和更新。':
    'The caller reads and updates the expansion state.',
  不可展开的摘要: 'Disabled summary',
  受控的摘要: 'Controlled summary',
  已展开: 'Expanded',
  已收起: 'Collapsed',
  '图标只辅助说明状态，标题始终明确表达结果。':
    'The icon only supports the status visually; the title always states the result explicitly.',
  没有匹配结果: 'No matching results',
  '不同密度不会改变内容语义。':
    'Changing density does not change the content semantics.',
  发布说明已更新: 'Release notes updated',
  '媒体类型决定起始内容的尺寸和裁切方式。':
    'The media type determines the size and cropping of leading content.',
  发布封面: 'Release cover',
  发布资料: 'Release material',
  '每个结构字段都拥有独立的语义槽位。':
    'Each structural field has its own semantic slot.',
  '更新于 2 分钟前': 'Updated 2 minutes ago',
  生产发布: 'Production release',
  '传入 href 后根节点使用原生链接语义。':
    'Providing href gives the root native link semantics.',
  查看发布详情: 'View release details',
  构建完成: 'Build completed',
  进入生产阶段: 'Entering production',
  查看完整发布记录: 'View the complete release history',
  轨道与项目样式: 'Track and item styles',
  'classNames 按 content 与 item 语义槽位扩展轮播轨道和项目样式。':
    'classNames extends the carousel track and items through the content and item semantic slots.',
  自定义列表项渲染: 'Custom item rendering',
  'renderItem 接收当前 ItemGroupEntry 和索引，用于改写整项渲染，而不是修改 Item 的基础属性。':
    'renderItem receives the current ItemGroupEntry and index to replace whole-item rendering without changing the base Item contract.',
  内容节点属性: 'Content node properties',
  'contentProps 向内部内容节点传递标准 HTML、ARIA、data 属性、事件和 className。':
    'contentProps passes standard HTML, ARIA, data attributes, events, and className to the inner content node.',
  '内容节点可以接收语义、事件和样式扩展。':
    'The content node can receive semantic, event, and style extensions.',
  自定义轨道与项目宽度: 'Custom track and item width',
  预检完成: 'Preflight completed',
  日期分段: 'Date section',
  '标记连续内容中的分段位置或状态。':
    'Mark a boundary, position, or state within continuous content.',
  '今天 · 8 月 6 日': 'Today · Aug 6',
  '在消息、动态或更新记录中分隔日期，让标签成为内容边界而不是时间线节点。':
    'Separate dates in messages, activity feeds, or update logs so the label reads as a content boundary rather than a timeline node.',
  'import { Marker } from \'@heliannuuthus/ui\'\n\n<article>昨天的更新内容</article>\n<Marker content="今天" variant="separator" />\n<article>今天的更新内容</article>':
    'import { Marker } from \'@heliannuuthus/ui\'\n\n<article>Yesterday’s updates</article>\n<Marker content="Today" variant="separator" />\n<article>Today’s updates</article>',
  未读边界: 'Unread boundary',
  '把未读数量放在已读与未读内容之间；图标强化状态，底边框保持紧凑。':
    'Place the unread count between read and unread content; the icon reinforces status while the bottom border keeps the layout compact.',
  'import { Marker } from \'@heliannuuthus/ui\'\nimport { CircleDot } from \'lucide-react\'\n\n<Marker\n  variant="border"\n  icon={<CircleDot />}\n  content="2 条未读消息"\n/>':
    'import { Marker } from \'@heliannuuthus/ui\'\nimport { CircleDot } from \'lucide-react\'\n\n<Marker\n  variant="border"\n  icon={<CircleDot />}\n  content="2 unread messages"\n/>',
  状态说明: 'Status note',
  '在一组相关设置之间说明后续内容的共同状态，不把 Marker 当作警告或通知容器。':
    'Describe the shared state of subsequent content within a related settings group without treating Marker as an alert or notification container.',
  "import { Marker } from '@heliannuuthus/ui'\nimport { CheckCircle2 } from 'lucide-react'\n\n<Marker\n  icon={<CheckCircle2 />}\n  content=\"以下设置已同步到生产环境\"\n/>":
    "import { Marker } from '@heliannuuthus/ui'\nimport { CheckCircle2 } from 'lucide-react'\n\n<Marker\n  icon={<CheckCircle2 />}\n  content=\"The following settings are synced to production\"\n/>",
  链接标记: 'Linked marker',
  '传入 href 后，标记可以指向文档锚点或另一段连续内容，并保留原生链接语义。':
    'With href, a marker can point to a document anchor or another section of continuous content while preserving native link semantics.',
  'import { Marker } from \'@heliannuuthus/ui\'\nimport { Archive } from \'lucide-react\'\n\n<Marker\n  href="#archived-release-notes"\n  icon={<Archive />}\n  content="定位到归档说明"\n  variant="separator"\n/>':
    'import { Marker } from \'@heliannuuthus/ui\'\nimport { Archive } from \'lucide-react\'\n\n<Marker\n  href="#archived-release-notes"\n  icon={<Archive />}\n  content="Jump to archived notes"\n  variant="separator"\n/>',
  '在连续内容中标记日期、未读边界、状态切换或可跳转位置。':
    'Mark dates, unread boundaries, state transitions, or navigable positions within continuous content.',
  '需要一条带文字或图标的轻量分隔规则时使用。':
    'Use when you need a lightweight dividing rule with text or an icon.',
  '装饰性图标会自动从辅助技术中隐藏，状态含义必须同时写入 content。':
    'Decorative icons are hidden from assistive technology automatically; include the state meaning in content as well.',
  '需要跳转时传入 href，让组件保留原生链接语义和键盘操作。':
    'Pass href when navigation is needed so the component preserves native link semantics and keyboard behavior.',
  '不要用 Marker 表达具有节点、连接线和顺序关系的完整时间线。':
    'Do not use Marker to represent a complete timeline with nodes, connectors, and sequential relationships.',
  '不要用颜色或图标单独表达状态，也不要把长段说明塞进标记文字。':
    'Do not communicate status through color or icons alone, and do not put long explanations in marker text.',
  昨天: 'Yesterday',
  发布说明已完成评审: 'Release notes review completed',
  '数据库迁移和回滚入口已经补充完整。':
    'Database migration details and the rollback entry point are now complete.',
  发布窗口已经确认: 'Release window confirmed',
  '生产变更将在今晚 22:00 开始。':
    'Production changes will begin tonight at 22:00.',
  预检结果已更新: 'Preflight results updated',
  '构建、类型检查和安全扫描均已通过。':
    'Build, type checking, and security scanning have all passed.',
  '2 条未读消息': '2 unread messages',
  周一补充了观察指标: 'Zhou Yi added observation metrics',
  '重点关注错误率和数据库连接数。':
    'Focus on the error rate and database connection count.',
  发布区域: 'Release region',
  以下设置已同步到生产环境: 'The following settings are synced to production',
  流量策略: 'Traffic strategy',
  '灰度 10%': '10% canary',
  '15 分钟': '15 minutes',
  历史发布说明: 'Historical release notes',
  已归档: 'Archived',
  '归档内容保持只读，可通过标记链接快速返回这一位置。':
    'Archived content remains read-only, and the marker link provides a quick way back to this location.',
  定位到归档说明: 'Jump to archived notes',
  '用 Item.Group 组织同类动态，并通过分隔线维持连续列表的阅读节奏。':
    'Use Item.Group to organize related activity and separators to maintain the reading rhythm of a continuous list.',
  "import { Tag, Item } from '@heliannuuthus/ui'\n\n<Item.Group\n  separator\n  items={[\n    {\n      media: <MessageCircle />,\n      mediaType: 'icon',\n      title: '林默回复了检查项',\n      description: '确认索引变更不会锁表。',\n      actions: <Tag>2 分钟前</Tag>,\n    },\n  ]}\n/>":
    "import { Tag, Item } from '@heliannuuthus/ui'\n\n<Item.Group\n  separator\n  items={[\n    {\n      media: <MessageCircle />,\n      mediaType: 'icon',\n      title: 'Lin Mo replied to the review item',\n      description: 'Confirmed that the index change will not lock the table.',\n      actions: <Tag>2 minutes ago</Tag>,\n    },\n  ]}\n/>",
  成员目录: 'Member directory',
  '头像、身份说明和成员状态保持同一行对齐，描边外观明确每个成员的点击区域。':
    'Keep avatars, role descriptions, and member status aligned on one row; the outlined appearance makes each member’s hit area explicit.',
  'import { Avatar, Tag, Item } from \'@heliannuuthus/ui\'\n\n<Item\n  variant="outline"\n  media={<Avatar alt="林默" fallback="林" />}\n  title="林默"\n  description="平台工程 · 发布管理员"\n  actions={<Tag type="success">在线</Tag>}\n/>':
    'import { Avatar, Tag, Item } from \'@heliannuuthus/ui\'\n\n<Item\n  variant="outline"\n  media={<Avatar alt="Lin Mo" fallback="L" />}\n  title="Lin Mo"\n  description="Platform engineering · Release administrator"\n  actions={<Tag type="success">Online</Tag>}\n/>',
  '把开关放入 actions，让标题解释设置、描述说明影响范围，整行本身不重复承担点击行为。':
    'Place the switch in actions so the title names the setting and the description explains its scope; the row itself does not duplicate the click behavior.',
  'import { Item, Switch } from \'@heliannuuthus/ui\'\n\n<Item\n  variant="muted"\n  media={<Cloud />}\n  mediaType="icon"\n  title="自动部署预览环境"\n  description="合并到 main 后自动更新预览环境。"\n  actions={<Switch aria-label="自动部署预览环境" />}\n/>':
    'import { Item, Switch } from \'@heliannuuthus/ui\'\n\n<Item\n  variant="muted"\n  media={<Cloud />}\n  mediaType="icon"\n  title="Automatically deploy preview environment"\n  description="Update the preview environment after merging into main."\n  actions={<Switch aria-label="Automatically deploy preview environment" />}\n/>',
  资源入口: 'Resource entry',
  '使用 href 把整个资源项变成原生链接；header 和 footer 承载辅助元数据。':
    'Use href to make the entire resource item a native link; header and footer carry supporting metadata.',
  'import { Tag, Item } from \'@heliannuuthus/ui\'\n\n<Item\n  href="/release-notes/v0.12.0"\n  variant="outline"\n  header={<Tag>发布说明</Tag>}\n  media={<FileText />}\n  mediaType="icon"\n  title="v0.12.0-release-notes.md"\n  description="Markdown · 18 KB"\n  footer={<span>许澄维护 · 8 分钟前更新</span>}\n/>':
    'import { Tag, Item } from \'@heliannuuthus/ui\'\n\n<Item\n  href="/release-notes/v0.12.0"\n  variant="outline"\n  header={<Tag>Release notes</Tag>}\n  media={<FileText />}\n  mediaType="icon"\n  title="v0.12.0-release-notes.md"\n  description="Markdown · 18 KB"\n  footer={<span>Maintained by Xu Cheng · Updated 8 minutes ago</span>}\n/>',
  '展示成员、动态、文件、设置等具有一致骨架的行级内容。':
    'Display row-level content with a consistent structure, such as members, activity, files, and settings.',
  '需要组合媒体、主次文字、尾部操作或跨行元数据时使用。':
    'Use when composing media, primary and secondary text, trailing actions, or full-row metadata.',
  'Item.Group 默认提供列表与列表项语义；使用 renderItem 时需要保留等价语义。':
    'Item.Group provides list and list-item semantics by default; preserve equivalent semantics when using renderItem.',
  '整行需要跳转时传入 href；行内已有按钮或开关时不要再把整行设为链接。':
    'Pass href when the whole row navigates; do not also make the row a link when it already contains a button or switch.',
  '不要只为比较 variant 创建脱离业务上下文的重复列表。':
    'Do not create repetitive, context-free lists solely to compare variants.',
  '不要在一个列表项中堆叠过多操作；保留一个主要操作，其余收进菜单。':
    'Do not stack too many actions in one list item; keep one primary action and move the rest into a menu.',
  发布成员: 'Release members',
  '平台工程 · 发布管理员': 'Platform engineering · Release administrator',
  组件维护者: 'Component maintainer',
  '产品设计 · 设计系统': 'Product design · Design system',
  发布设置: 'Release settings',
  自动部署预览环境: 'Automatically deploy preview environment',
  '合并到 main 后自动更新预览环境。':
    'Update the preview environment after merging into main.',
  发布前安全审计: 'Pre-release security audit',
  '生产发布必须通过全部安全检查。':
    'Production releases must pass every security check.',
  许澄维护: 'Maintained by Xu Cheng',
  评审通过: 'Review approved',
  '8 分钟前更新': 'Updated 8 minutes ago',
  '默认组合搜索、排序、固定列、操作列、Footer 和 Pagination；业务只需要提供 data 与 Table.Column。':
    'The default composition includes search, sorting, fixed columns, actions, Footer, and Pagination; applications only provide data and Table.Column.',
  '在 Table.Column 中嵌套 columns 即可形成多级表头；Table 会计算跨列、层级和空状态宽度。':
    'Nest columns in Table.Column to create grouped headers; Table calculates spans, levels, and empty-state width.',
  '受控排序、分页与行选择': 'Controlled sorting, pagination, and row selection',
  分页摘要: 'Pagination summary',
  'Primitive 行展开': 'Primitive row expansion',
  服务端数据模式: 'Server data mode',
  'search、sorting 与 pagination 的 manual 模式只管理公开状态，不在客户端二次处理服务端返回的数据。':
    'The manual modes for search, sorting, and pagination manage only public state and do not process server-returned data again on the client.',
  '搜索服务端数据…': 'Search server data…',
  '选择当前页 ': 'Select the current page of ',
  选择当前页: 'Select current page',
  ' 条发布记录': ' release records',
  'sorting、pagination 和 rowSelection 都可以由业务受控；每次交互都会返回公开状态，不暴露底层表格实例。':
    'Applications can control sorting, pagination, and rowSelection; every interaction returns public state without exposing the underlying table instance.',
  加载与外部状态组合: 'Loading and external state composition',
  'Table 只内置布尔 loading；定制空结果和请求错误分别组合 Empty 与 Alert。':
    'Table only provides boolean loading; compose Empty and Alert for custom empty results and request errors.',
  加载中: 'Loading',
  空结果: 'Empty result',
  '使用库自有的列模型定义访问器、表头、单元格和嵌套列组。':
    'Use the library-owned column model to define accessors, headers, cells, and nested column groups.',
  '统一为渲染、选择、展开和虚拟滚动提供稳定的业务行标识。':
    'Provide one stable business row identifier for rendering, selection, expansion, and virtualization.',
  '配置搜索字段、自定义 predicate、受控值和 client/manual 数据处理模式。':
    'Configure searchable fields, a custom predicate, controlled value, and client or manual data processing.',
  '关闭排序，或配置受控/非受控排序状态与 client/manual 模式。':
    'Disable sorting or configure controlled or uncontrolled state with client or manual processing.',
  '使用标准 Pagination 管理当前页；manual 模式必须提供服务端 total。':
    'Use the standard Pagination to manage the current page; manual mode requires the server total.',
  '自动生成选择列，支持受控/非受控 key、禁用行、全选标签和变更回调。':
    'Generate the selection column with controlled or uncontrolled keys, disabled rows, select-all labels, and change callbacks.',
  '只渲染可视范围附近的等高单行数据；类型上与 expandable 互斥。':
    'Render only fixed-height rows near the viewport; the type is mutually exclusive with expandable.',
  '显示内置加载状态；空数据由 Table 自动展示默认提示。':
    'Show the built-in loading state; Table automatically displays the default message for empty data.',
  '按 toolbar、container、table、header、body、footer、state 与 pagination 定制内部语义区域。':
    'Customize internal semantic regions by toolbar, container, table, header, body, footer, state, and pagination.',
  '向内部 Table.Primitive 传递原生 table 与容器引用、样式；Table 会自动计算内容宽度，并在翻页时保持已经得到的列宽。':
    'Pass native table attributes plus container refs and styles to the internal Table.Primitive. Table automatically sizes content and preserves the resulting column widths across pages.',
  'Table.Primitive 创建原生 table 与滚动容器。':
    'Table.Primitive creates the native table and scroll container.',
  'Table.Primitive 是不管理数据状态的语义表格根：业务直接组合 Table.Header、Table.Row 和 Table.Cell，精确控制原生结构。':
    'Table.Primitive is a semantic table root without data state; compose Table.Header, Table.Row, and Table.Cell for exact native structure control.',
  '数据已经是可直接渲染的行列结构，不需要 Table 的列模型和数据状态。':
    'Use it when data is already a renderable row-column structure and does not need the Table column model or state.',
  '从 Primitive 根建立原生表格、滚动容器和表头、表体、汇总区域。':
    'Start from the Primitive root to create the native table, scroll container, header, body, and summary regions.',
  '手动分页时只把当前页数据传给 Table.Primitive，由 Pagination 或服务端请求管理页码。':
    'For manual pagination, pass only the current page to Table.Primitive and let Pagination or the server request manage page state.',
  '需要搜索、排序、选择或自动分页时使用数据驱动的 Table，不要把这些状态塞进 Table.Primitive。':
    'Use data-driven Table for search, sorting, selection, or automatic pagination; do not put that state into Table.Primitive.',
  'Table 是数据驱动的完整表格：搜索、排序、分页、选择和展开都有受控与非受控闭环，并提供固定列、状态与虚拟滚动。':
    'Table is a complete data-driven table with controlled and uncontrolled search, sorting, pagination, selection, and expansion plus fixed columns, states, and virtualization.',
  '常规业务数据列表默认使用 Table，由 data 与 Table.Column 驱动完整表格。':
    'Use Table for typical application data lists, driven by data and Table.Column.',
  '通过 accessor、header、render、columns 和直接列属性声明数据访问、结构与布局。':
    'Declare data access, structure, and layout with accessor, header, render, columns, and direct column properties.',
  '展开按钮自动同步 aria-expanded；rowKey 应返回可以辨认且稳定的业务标识。':
    'Expand buttons synchronize aria-expanded; rowKey should return a stable, recognizable business identifier.',
  '不要在 Table 内硬编码业务操作；通过 Table.Column.render 读取当前 row 后组合业务按钮。':
    'Do not hardcode application actions in Table; compose them after reading the row in Table.Column.render.',
  'Table 只负责数据驱动的完整交互；需要完全控制原生表格结构时，从 Table.Primitive 开始并组合 Table.Header、Table.Row 与 Table.Cell。':
    'Table handles complete data-driven interactions; for full native structure control, start with Table.Primitive and compose Table.Header, Table.Row, and Table.Cell.',
  '常规业务数据列表使用 data 与 Table.Column，快速获得搜索、排序、分页、选择、展开和虚拟滚动。':
    'Use data and Table.Column for typical data lists with search, sorting, pagination, selection, expansion, and virtualization.',
  '数据已经完成加工，或结构无法由列模型表达时，使用 Table.Primitive 作为根并组合 Table.Header、Table.Body、Table.Row 与 Table.Cell。':
    'When data is already processed or the structure cannot be expressed by columns, use Table.Primitive as the root and compose Table.Header, Table.Body, Table.Row, and Table.Cell.',
  '悬停、聚焦或点击右侧属性行，查看 className 与 Table.ClassNames 各字段对应的真实数据表区域。':
    'Hover, focus, or click a property row to see the actual region mapped to className and each Table.ClassNames field.',
  当前排序: 'Current sorting',
  '当前排序：': 'Current sorting: ',
  '· 已选择': '· selected',
  无: 'None',
  选择: 'Select',
  '发布记录加载失败，请稍后重试。':
    'Release records failed to load. Please try again later.',
  '数据表根区域，组织工具栏、表格容器和分页。':
    'The data-table root that arranges the toolbar, table container, and pagination.',
  '搜索等表格级操作所在的工具栏区域。':
    'The toolbar region for table-level actions such as search.',
  '承载横向或纵向滚动、边框和圆角的容器。':
    'The container that provides horizontal or vertical scrolling, borders, and rounding.',
  '原生 table 节点，可设置布局、宽度与表格样式。':
    'The native table element for layout, width, and table styling.',
  '由 columns 自动生成的表头区域。':
    'The header region generated from columns.',
  '数据行、展开行或状态行所在的表体区域。':
    'The body region containing data, expanded, or state rows.',
  '接收当前可见行并展示汇总信息的表尾区域。':
    'The footer region that receives visible rows and displays a summary.',
  '总数摘要与翻页控件所在的分页区域。':
    'The pagination region containing the total summary and page controls.',
  '最近的发布记录。': 'Recent release records.',
  条记录: 'records',
  '搜索发布单…': 'Search releases…',
  'Table 语义区域': 'Table semantic regions',
  'import { Alert, Empty, Table } from \'@heliannuuthus/ui\'\n\nif (request.error) {\n  return <Alert variant="error" title="发布记录加载失败" />\n}\n\nif (!request.pending && records.length === 0) {\n  return <Empty title="没有匹配记录" />\n}\n\n<Table\n  columns={columns}\n  data={records}\n  loading={request.pending}\n/>':
    'import { Alert, Empty, Table } from \'@heliannuuthus/ui\'\n\nif (request.error) {\n  return <Alert variant="error" title="Failed to load release records" />\n}\n\nif (!request.pending && records.length === 0) {\n  return <Empty title="No matching records" />\n}\n\n<Table\n  columns={columns}\n  data={records}\n  loading={request.pending}\n/>',
  'import { Form, Input } from \'@heliannuuthus/ui\'\n\n<Form.Field\n  name="handle"\n  label="个人标识"\n  description="用于生成公开资料地址。"\n  rules={{ pattern: /^[a-z0-9-]+$/ }}\n>\n  <Input />\n</Form.Field>':
    'import { Form, Input } from \'@heliannuuthus/ui\'\n\n<Form.Field\n  name="handle"\n  label="Handle"\n  description="Used to generate the public profile URL."\n  rules={{ pattern: /^[a-z0-9-]+$/ }}\n>\n  <Input />\n</Form.Field>',
  'Form.Field 自动关联标签与真实控件，并统一生成必填标记和辅助说明。':
    'Form.Field automatically associates labels with controls and consistently generates required markers and supporting descriptions.',
  'import { Form, Input } from \'@heliannuuthus/ui\'\n\n<Form.Field name="teamName" label="团队名称" required>\n  <Input />\n</Form.Field>\n\n<Form.Field name="role" label="职位" description="可选">\n  <Input />\n</Form.Field>':
    'import { Form, Input } from \'@heliannuuthus/ui\'\n\n<Form.Field name="teamName" label="Team name" required>\n  <Input />\n</Form.Field>\n\n<Form.Field name="role" label="Role" description="Optional">\n  <Input />\n</Form.Field>',
  '从视口或指定父容器的任意边缘打开抽屉，并根据 behavior 调整稳定面板与手势呈现。':
    'Open a drawer from any edge of the viewport or a specified container, using behavior to choose stable panel or gesture presentation.',
  '透传标准 HTML、ARIA、data 属性和原生事件。':
    'Pass standard HTML, ARIA, data attributes, and native events through to the input.',
  '除 children 外，可直接传入 nav 元素支持的 id、className、style、ARIA、data 属性和原生事件。':
    'Apart from children, accepts id, className, style, ARIA and data attributes, and native events supported by the nav element.',
  '使用行内样式扩展分隔线。': 'Extend the separator with inline styles.',
  '设置折叠菜单触发器供辅助技术读取的名称。':
    'Set the accessible name announced for the collapsed breadcrumb trigger.',
  "'显示完整路径'": "'Show full path'",
  '配置组件的公开状态、行为或扩展点。':
    'Configure the component public state, behavior, or extension point.',
  '设置右上角关闭控件；true 使用默认图标，ReactNode 自定义图标，false 隐藏控件。':
    'Configure the top-right close control: true uses the default icon, a ReactNode provides a custom icon, and false hides the control.',
  '由 Form.Field 自动注入自定义控件的字段契约。':
    'Field contract automatically injected into custom controls by Form.Field.',
  '使用 orientation 和 gap 完成最基础的横向间距布局。':
    'Use orientation and gap to create the simplest horizontal layout with consistent spacing.',
  'import { Button, Stack } from \'@heliannuuthus/ui\'\n\n<Stack gap={8} orientation="horizontal">\n  <Button>保存</Button>\n  <Button variant="outline">取消</Button>\n</Stack>':
    'import { Button, Stack } from \'@heliannuuthus/ui\'\n\n<Stack gap={8} orientation="horizontal">\n  <Button>Save</Button>\n  <Button variant="outline">Cancel</Button>\n</Stack>',
  '提供语义明确的标题、正文、引用和行内代码，并让文本语义与视觉层级独立组合。':
    'Provides semantic titles, text, quotations, and inline code while keeping text semantics independent from visual hierarchy.',
  '页面需要使用连续的 h1–h6 标题层级。':
    'The page needs a continuous h1–h6 heading hierarchy.',
  '正文需要独立组合语义元素、字号、颜色层级与字重。':
    'Body text needs to compose semantic elements, size, color hierarchy, and weight independently.',
  '引用与行内代码需要保留原生 HTML 语义。':
    'Quotations and inline code need to preserve native HTML semantics.',
  标题层级: 'Heading levels',
  'level 同时选择 h1–h6 语义元素和对应视觉层级，页面应从 h1 开始保持连续顺序。':
    'level selects both the h1–h6 semantic element and its visual hierarchy. Start with h1 and keep the page order continuous.',
  文本定制: 'Text customization',
  'as 选择真实语义元素；size、tone 与 weight 分别控制字号、颜色层级和字重，可以按内容需要自由组合。':
    'as selects the semantic element, while size, tone, and weight independently control font size, color hierarchy, and font weight.',
  默认行内正文: 'Default inline text',
  '大号次要段落适合承载页面导语。':
    'Large muted paragraphs work well for page introductions.',
  块级强调文字: 'Emphasized block text',
  较小的辅助信息: 'Small supporting text',
  引用与行内代码: 'Quotations and inline code',
  'Blockquote 保留引用来源，Code 在正文中标记短代码；多行代码块应使用独立的 pre 与 code 结构。':
    'Blockquote preserves the citation source, while Code marks short inline code. Use a separate pre and code structure for multiline blocks.',
  '语义先于视觉，视觉服务于内容层级。':
    'Semantics come before visuals, and visuals serve the content hierarchy.',
  安装命令为: 'The installation command is',
  '通过 level 渲染 h1–h6 语义标题和对应视觉层级。':
    'Renders h1–h6 semantic headings and their visual hierarchy through level.',
  '组合文本语义元素、字号、颜色层级与字重。':
    'Composes the text element, size, color hierarchy, and weight.',
  '使用原生 blockquote 表达带来源的引用内容。':
    'Uses a native blockquote for cited content.',
  '使用原生 code 标记正文中的短代码。':
    'Uses a native code element for short inline code.',
  '设置标题语义元素和对应视觉层级。':
    'Sets the semantic heading element and its visual hierarchy.',
  '标题内容。': 'Heading content.',
  '扩展标题元素样式。': 'Extends the heading element styles.',
  '扩展标题元素行内样式。': 'Extends the heading element inline styles.',
  '设置真实文本元素，不改变视觉属性。':
    'Sets the rendered text element without changing visual properties.',
  '设置字号与匹配的行高。': 'Sets the font size and matching line height.',
  '设置默认或次要正文颜色。': 'Sets the default or muted text color.',
  '设置正文的字重。': 'Sets the text font weight.',
  '文本内容。': 'Text content.',
  '扩展文本元素样式。': 'Extends the text element styles.',
  '扩展文本元素行内样式。': 'Extends the text element inline styles.',
  '设置引用内容的来源 URL。': 'Sets the source URL for the quotation.',
  '引用内容。': 'Quotation content.',
  '扩展引用元素样式。': 'Extends the quotation element styles.',
  '扩展引用元素行内样式。': 'Extends the quotation element inline styles.',
  '行内代码内容。': 'Inline code content.',
  '扩展代码元素样式。': 'Extends the code element styles.',
  '扩展代码元素行内样式。': 'Extends the code element inline styles.',
  '页面从 h1 开始保持标题层级连续，不要因为视觉大小跳过级别。':
    'Start the page at h1 and keep heading levels continuous; do not skip levels for visual size.',
  '根据内容语义选择 Text 的 as，而不是根据默认外观选择元素。':
    'Choose Text as from content semantics instead of the default appearance.',
  '次要文字仍需满足对比度要求，不要仅依靠颜色表达信息。':
    'Muted text must still meet contrast requirements; do not communicate information through color alone.',
  '不要使用 Title.level 只追求字号；标题级别首先表达文档结构。':
    'Do not use Title.level only for font size; heading levels primarily express document structure.',
  '不要用 Text.as 调整视觉，字号、颜色和字重分别使用对应属性。':
    'Do not use Text.as to change appearance; use the dedicated size, tone, and weight properties.',
  'Code 用于行内短代码；多行代码块应组合原生 pre 与 code。':
    'Code is for short inline code; compose native pre and code elements for multiline blocks.',
  'import { Typography } from \'@heliannuuthus/ui\'\n\nexport const TypographyStory = () => {\n  return (\n    <article className="grid gap-4">\n      <Typography.Title level={2}>让界面语言保持清晰</Typography.Title>\n      <Typography.Text as="p" size="xl" tone="muted">\n        稳定的排版让用户先理解内容，再自然地注意到设计。\n      </Typography.Text>\n      <Typography.Text as="p">\n        一致的标题层级和正文节奏，让内容清晰、可信且易于阅读。\n      </Typography.Text>\n      <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">\n        一致的界面，来自每一次一致的内容决策。\n      </Typography.Blockquote>\n      <Typography.Text as="p">\n        使用 <Typography.Code>@heliannuuthus/ui</Typography.Code> 组合内容。\n      </Typography.Text>\n      <Typography.Text as="small" size="sm" tone="muted">\n        设计系统札记 · 5 分钟阅读\n      </Typography.Text>\n    </article>\n  )\n}':
    'import { Typography } from \'@heliannuuthus/ui\'\n\nexport const TypographyStory = () => {\n  return (\n    <article className="grid gap-4">\n      <Typography.Title level={2}>Keep interface language clear</Typography.Title>\n      <Typography.Text as="p" size="xl" tone="muted">\n        Stable typography lets users understand content before noticing design.\n      </Typography.Text>\n      <Typography.Text as="p">\n        Consistent heading hierarchy and body rhythm make content clear and readable.\n      </Typography.Text>\n      <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">\n        A consistent interface comes from consistent content decisions.\n      </Typography.Blockquote>\n      <Typography.Text as="p">\n        Compose content with <Typography.Code>@heliannuuthus/ui</Typography.Code>.\n      </Typography.Text>\n      <Typography.Text as="small" size="sm" tone="muted">\n        Design system notes · 5 min read\n      </Typography.Text>\n    </article>\n  )\n}',
  'import { Typography } from \'@heliannuuthus/ui\'\n\n<Typography.Text>默认行内正文</Typography.Text>\n<Typography.Text as="p" size="xl" tone="muted">\n  大号次要段落适合承载页面导语。\n</Typography.Text>\n<Typography.Text as="div" size="lg" weight="semibold">\n  块级强调文字\n</Typography.Text>\n<Typography.Text as="small" size="sm" tone="muted" weight="medium">\n  较小的辅助信息\n</Typography.Text>':
    'import { Typography } from \'@heliannuuthus/ui\'\n\n<Typography.Text>Default inline text</Typography.Text>\n<Typography.Text as="p" size="xl" tone="muted">\n  Large muted paragraphs work well for page introductions.\n</Typography.Text>\n<Typography.Text as="div" size="lg" weight="semibold">\n  Emphasized block text\n</Typography.Text>\n<Typography.Text as="small" size="sm" tone="muted" weight="medium">\n  Small supporting text\n</Typography.Text>',
  'import { Typography } from \'@heliannuuthus/ui\'\n\n<Typography.Blockquote cite="https://ui.heliannuuthus.com/design">\n  语义先于视觉，视觉服务于内容层级。\n</Typography.Blockquote>\n<Typography.Text as="p">\n  安装命令为 <Typography.Code>pnpm add @heliannuuthus/ui</Typography.Code>\n</Typography.Text>':
    'import { Typography } from \'@heliannuuthus/ui\'\n\n<Typography.Blockquote cite="https://ui.heliannuuthus.com/design">\n  Semantics come before visuals, and visuals serve the content hierarchy.\n</Typography.Blockquote>\n<Typography.Text as="p">\n  Install with <Typography.Code>pnpm add @heliannuuthus/ui</Typography.Code>\n</Typography.Text>',
  '用简短文本表达对象的状态、分类或属性。':
    'Express an object status, category, or attribute with short text.',
  '标记对象的状态、分类或稳定属性。':
    'Mark an object status, category, or stable attribute.',
  '在列表、卡片和详情中提供便于扫描的短文本。':
    'Provide scannable short text in lists, cards, and detail views.',
  'Tag 是纯展示元素，始终渲染为 span。':
    'Tag is presentation-only and always renders as a span.',
  默认标签: 'Default tag',
  "import { Tag } from '@heliannuuthus/ui'\n\n<Tag>默认标签</Tag>":
    "import { Tag } from '@heliannuuthus/ui'\n\n<Tag>Default tag</Tag>",
  语义类型: 'Semantic types',
  'type 表达标签的语义，不要只为了颜色选择与内容无关的类型。':
    'type expresses the tag semantics; do not choose an unrelated type only for its color.',
  主要: 'Primary',
  'import { Tag } from \'@heliannuuthus/ui\'\n\n<Tag>默认</Tag>\n<Tag type="primary">主要</Tag>\n<Tag type="info">信息</Tag>\n<Tag type="success">成功</Tag>\n<Tag type="warning">警告</Tag>\n<Tag type="error">错误</Tag>':
    'import { Tag } from \'@heliannuuthus/ui\'\n\n<Tag>Default</Tag>\n<Tag type="primary">Primary</Tag>\n<Tag type="info">Info</Tag>\n<Tag type="success">Success</Tag>\n<Tag type="warning">Warning</Tag>\n<Tag type="error">Error</Tag>',
  '设置标签表达的语义类型。': 'Sets the semantic type expressed by the tag.',
  '标签中的简短文本或辅助图标。':
    'Short text or a supporting icon inside the tag.',
  '扩展标签样式。': 'Extends the tag styles.',
  '扩展标签行内样式。': 'Extends the tag inline styles.',
  '状态不能只依靠颜色表达，标签文本必须保留完整含义。':
    'Do not communicate status through color alone; tag text must preserve the full meaning.',
  'Tag 支持标准 span、ARIA、data 属性和事件，并转发 span ref。':
    'Tag supports standard span, ARIA, and data attributes and events, and forwards a span ref.',
  '不要把 Tag 用作按钮或链接；交互场景应组合 Button 或原生链接。':
    'Do not use Tag as a button or link; compose Button or a native link for interaction.',
  '避免在 Tag 中放入长句或复杂操作。':
    'Avoid long sentences or complex actions inside Tag.',
  '在对象角落或独立位置展示通知数字与状态红点。':
    'Displays notification counts and status dots over an object or independently.',
  '在按钮、头像或其他对象上叠加未读数量。':
    'Overlay an unread count on a button, avatar, or other object.',
  '只需提示存在新内容，或需要独立展示简短计数。':
    'Use when only the presence of new content or a short standalone count is needed.',
  独立数字: 'Standalone counts',
  '没有 children 时独立显示通知；数字 0 会保留，超过 max 时显示封顶文案。':
    'Without children, the notification renders independently. Zero remains visible and values above max use capped text.',
  锚点通知: 'Anchored notifications',
  '传入 children 后，通知会定位到对象的 inline-end 顶角；offset 可微调逻辑方向位置。':
    'With children, the notification is positioned at the inline-end top corner; offset fine-tunes its logical position.',
  'import { Badge, Button } from \'@heliannuuthus/ui\'\nimport { Mail } from \'lucide-react\'\n\n<Badge indicator={5} indicatorLabel="5 条未读消息">\n  <Button aria-label="查看消息" size="icon" variant="outline">\n    <Mail />\n  </Button>\n</Badge>\n\n<Badge dir="rtl" indicator={12} offset={[3, -2]}>\n  <Button variant="outline">收件箱</Button>\n</Badge>':
    'import { Badge, Button } from \'@heliannuuthus/ui\'\nimport { Mail } from \'lucide-react\'\n\n<Badge indicator={5} indicatorLabel="5 unread messages">\n  <Button aria-label="View messages" size="icon" variant="outline">\n    <Mail />\n  </Button>\n</Badge>\n\n<Badge dir="rtl" indicator={12} offset={[3, -2]}>\n  <Button variant="outline">Inbox</Button>\n</Badge>',
  状态红点: 'Status dot',
  'indicator 为 true 时只显示红点；因为没有可见内容，必须提供 indicatorLabel。':
    'When indicator is true, only a dot is displayed. Because it has no visible content, indicatorLabel is required.',
  'import { Badge, Button } from \'@heliannuuthus/ui\'\n\n<Badge indicator indicatorLabel="有新的系统通知">\n  <Button variant="outline">系统通知</Button>\n</Badge>':
    'import { Badge, Button } from \'@heliannuuthus/ui\'\n\n<Badge indicator indicatorLabel="New system notification">\n  <Button variant="outline">System notifications</Button>\n</Badge>',
  样式扩展: 'Style extensions',
  '根节点使用 className 与 style，通知标记使用对应的 classNames 和 styles 插槽。':
    'Use className and style for the root, and the matching classNames and styles slot for the indicator.',
  '设置通知内容；true 显示红点，节点显示内容，false、null 或 undefined 隐藏。':
    'Sets notification content: true displays a dot, a node displays content, and false, null, or undefined hides it.',
  '设置数字通知的显示上限，超出时追加加号。':
    'Sets the numeric notification maximum and appends a plus sign above it.',
  '微调通知相对锚点的水平与垂直位置。':
    'Fine-tunes the horizontal and vertical position relative to the anchor.',
  '设置通知的无障碍名称；红点模式必须提供。':
    'Sets the accessible notification name and is required for dot mode.',
  '设置通知标记的锚点；省略时独立显示。':
    'Sets the notification anchor; omit it for standalone display.',
  '扩展 indicator 语义插槽样式。':
    'Extends the indicator semantic slot styles.',
  '扩展 indicator 语义插槽行内样式。':
    'Extends the indicator semantic slot inline styles.',
  '红点没有可见文字，必须通过 indicatorLabel 说明通知含义。':
    'A dot has no visible text, so indicatorLabel must describe the notification.',
  '数字已有可见文本；含义不明确时仍应补充 indicatorLabel。':
    'Counts have visible text; add indicatorLabel when their meaning is still unclear.',
  'Badge 支持标准 span、ARIA、data 属性和事件，并转发 span ref。':
    'Badge supports standard span, ARIA, and data attributes and events, and forwards a span ref.',
  'Badge 只表示通知；状态、分类和简短属性应使用 Tag。':
    'Badge only represents notifications; use Tag for status, categories, and short attributes.',
  '不要把 Badge 本身当作交互控件，应把 Button 或链接作为 children。':
    'Do not use Badge itself as an interactive control; pass a Button or link as children.',
  '与 Tag 和 Badge 组合': 'Composed with Tag and Badge',
  'badge 插槽可放置 Tag 状态标签或 Badge 通知标记，并始终锚定在头像右下角。':
    'The badge slot accepts Tag status labels or Badge notification indicators and keeps them anchored to the avatar corner.',
  '8 条未读消息': '8 unread messages',
  'import { Avatar, Badge } from \'@heliannuuthus/ui\'\n\n<Avatar\n  alt="陈序"\n  badge={<Badge indicator={8} indicatorLabel="8 条未读消息" />}\n  fallback="陈"\n  size="lg"\n/>':
    'import { Avatar, Badge } from \'@heliannuuthus/ui\'\n\n<Avatar\n  alt="Chen Xu"\n  badge={<Badge indicator={8} indicatorLabel="8 unread messages" />}\n  fallback="Chen"\n  size="lg"\n/>',
  '在头像右下角放置在线点、认证图标或 Tag 等状态节点。':
    'Places an online dot, verification icon, Tag, or other status node at the avatar bottom corner.',
  自定义过滤: 'Custom filter',
  受控打开态: 'Controlled open state',
  工作区导航: 'Workspace navigation',
  收起侧边栏: 'Collapse sidebar',
  展开侧边栏: 'Expand sidebar',
  响应式折叠: 'Responsive collapse',
  'Sidebar 在 lg 以下自动折叠，也可以通过内置触发器手动切换；collapsedWidth 决定折叠后保留的宽度。':
    'The Sidebar collapses automatically below lg and can also be toggled manually with its built-in trigger; collapsedWidth controls the remaining width.',
  '低于指定视口断点时自动折叠；使用与 Tailwind 默认断点一致的 token。':
    'Collapse automatically below the selected viewport breakpoint using tokens aligned with the default Tailwind breakpoints.',
  '受控的折叠状态。': 'The controlled collapsed state.',
  '折叠后的侧边栏宽度；数字按像素处理，设置为 0 时隐藏内容。':
    'The collapsed sidebar width; numbers are treated as pixels and 0 hides its content.',
  '启用内置折叠触发器；传入 ReactNode 可以替换默认图标。':
    'Enable the built-in collapse trigger; pass a ReactNode to replace the default icon.',
  '非受控模式下的初始折叠状态。':
    'The initial collapsed state in uncontrolled mode.',
  '进入或离开 breakpoint 范围时调用。':
    'Called when entering or leaving the breakpoint range.',
  '折叠状态请求变化时调用，并说明变化来自断点还是触发器。':
    'Called when the collapsed state is requested to change, including whether the request came from the breakpoint or trigger.',
  '声明侧边栏位于逻辑起始侧或结束侧，用于调整内置触发器的位置与图标。':
    'Declare whether the sidebar sits on the logical start or end side so the built-in trigger uses the matching position and icon.',
  '设置内置折叠触发器在展开和折叠状态下的可访问名称。':
    'Set the accessible names of the built-in collapse trigger in its expanded and collapsed states.',
  '文字导航在窄屏下通常不适合压成图标栏；将 collapsedWidth 设置为 0，并组合 Drawer 提供完整导航。':
    'Text navigation usually should not be compressed into an icon rail on narrow screens; set collapsedWidth to 0 and compose Drawer for complete navigation.',
  "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Sidebar\n    breakpoint=\"lg\"\n    collapsible\n    collapsedWidth={64}\n    labels={{\n      collapse: '收起侧边栏',\n      expand: '展开侧边栏',\n    }}\n  >\n    Navigation\n  </Layout.Sidebar>\n  <Layout.Content>Content</Layout.Content>\n</Layout>":
    "import { Layout } from '@heliannuuthus/ui'\n\n<Layout>\n  <Layout.Sidebar\n    breakpoint=\"lg\"\n    collapsible\n    collapsedWidth={64}\n    labels={{\n      collapse: 'Collapse sidebar',\n      expand: 'Expand sidebar',\n    }}\n  >\n    Navigation\n  </Layout.Sidebar>\n  <Layout.Content>Content</Layout.Content>\n</Layout>",
  尚未执行操作: 'No action yet',
  表单已提交: 'Form submitted',
  草稿已预览: 'Draft previewed',
  垂直: 'Vertical',
  宽度: 'Width',
  内容宽度: 'Content width',
  填满容器: 'Fill container',
  继续: 'Continue',
  表单与点击事件: 'Form and click events',
  '使用 block 让单个按钮占满父容器的可用宽度。':
    'Use block to make one button fill the available width of its parent.',
  '原生 type 保留表单语义；onClick 适合处理不依赖表单提交的即时操作。':
    'Native type preserves form semantics; use onClick for immediate actions that do not depend on form submission.',
  外链与下载: 'External links and downloads',
  '新窗口外链同时声明 target 与 rel；download 用于下载同源资源并可指定文件名。':
    'External links that open a new window declare both target and rel; download saves a same-origin resource and can specify its filename.',
  新窗口打开: 'Open in a new window',
  下载样式文件: 'Download stylesheet',
  元素分隔: 'Item separators',
  'separator 在相邻元素之间插入一致的视觉分隔，不需要为每个子元素重复编写。':
    'separator inserts a consistent visual divider between adjacent items without repeating it on every child.',
  活动: 'Activity',
  外观: 'Appearance',
  阴影: 'Elevated',
  初始状态: 'Initial state',
  结束侧: 'End side',
  等待侧边栏变化: 'Waiting for a sidebar change',
  已进入窄屏断点: 'Entered the narrow breakpoint',
  已离开窄屏断点: 'Left the narrow breakpoint',
  '侧边栏已收起（': 'Sidebar collapsed (',
  '侧边栏已展开（': 'Sidebar expanded (',
  '<Button block>继续</Button>': '<Button block>Continue</Button>',
  'import { useState } from \'react\'\n\nexport const FormActions = () => {\n  const [message, setMessage] = useState(\'尚未执行操作\')\n\n  return (\n    <form className="flex flex-wrap items-center justify-center gap-3" onSubmit={(event) => {\n      event.preventDefault()\n      setMessage(\'表单已提交\')\n    }}>\n      <Button type="submit">保存</Button>\n      <Button type="button" variant="outline" onClick={() => setMessage(\'草稿已预览\')}>\n        预览\n      </Button>\n      <output aria-live="polite">{message}</output>\n    </form>\n  )\n}':
    'import { useState } from \'react\'\n\nexport const FormActions = () => {\n  const [message, setMessage] = useState(\'No action yet\')\n\n  return (\n    <form className="flex flex-wrap items-center justify-center gap-3" onSubmit={(event) => {\n      event.preventDefault()\n      setMessage(\'Form submitted\')\n    }}>\n      <Button type="submit">Save</Button>\n      <Button type="button" variant="outline" onClick={() => setMessage(\'Draft previewed\')}>\n        Preview\n      </Button>\n      <output aria-live="polite">{message}</output>\n    </form>\n  )\n}',
  '<Button\n  href="https://ui.heliannuuthus.com"\n  target="_blank"\n  rel="noreferrer"\n  variant="outline"\n>\n  新窗口打开\n</Button>\n\n<Button href="/styles.css" download="heliannuuthus-ui.css">\n  下载样式文件\n</Button>':
    '<Button\n  href="https://ui.heliannuuthus.com"\n  target="_blank"\n  rel="noreferrer"\n  variant="outline"\n>\n  Open in a new window\n</Button>\n\n<Button href="/styles.css" download="heliannuuthus-ui.css">\n  Download stylesheet\n</Button>',
  'import { Stack } from \'@heliannuuthus/ui\'\n\n<Stack orientation="horizontal" separator={<span aria-hidden>·</span>}>\n  <span>概览</span>\n  <span>活动</span>\n  <span>设置</span>\n</Stack>':
    'import { Stack } from \'@heliannuuthus/ui\'\n\n<Stack orientation="horizontal" separator={<span aria-hidden>·</span>}>\n  <span>Overview</span>\n  <span>Activity</span>\n  <span>Settings</span>\n</Stack>',
  [`import { Button, Card, Input } from '@heliannuuthus/ui'

export const UpdateCard = () => {
  return (
    <Card header={{ title: '设计系统更新' }} variant="elevated">
      <p>本周补充了组件示例与无障碍说明。</p>
    </Card>
  )
}

<Card header={{ title: '描边卡片' }} variant="outline" />
<Card header={{ title: '透明卡片' }} variant="ghost" />`]:
    `import { Card } from '@heliannuuthus/ui'

export const UpdateCard = () => {
  return (
    <Card header={{ title: 'Design system update' }} variant="elevated">
      <p>This week adds component examples and accessibility guidance.</p>
    </Card>
  )
}

<Card header={{ title: 'Outlined card' }} variant="outline" />
<Card header={{ title: 'Ghost card' }} variant="ghost" />`,
  [`import { Card } from '@heliannuuthus/ui'

export const WorkspaceCard = () => {
  return (
    <Card
      header={{
        title: '工作区资料',
        description: '修改成员看到的工作区名称。',
        action: <Button variant="ghost">更多操作</Button>,
      }}
      footer={
        <>
          <span>上次保存于 10:24</span>
          <Button>保存修改</Button>
        </>
      }
    >
      <label>
        工作区名称
        <Input defaultValue="Heliannuuthus UI" />
      </label>
    </Card>
  )
}`]: `import { Button, Card, Input } from '@heliannuuthus/ui'

export const WorkspaceCard = () => {
  return (
    <Card
      header={{
        title: 'Workspace information',
        description: 'Change the workspace name visible to members.',
        action: <Button variant="ghost">More actions</Button>,
      }}
      footer={
        <>
          <span>Last saved at 10:24</span>
          <Button>Save changes</Button>
        </>
      }
    >
      <label>
        Workspace name
        <Input defaultValue="Heliannuuthus UI" />
      </label>
    </Card>
  )
}`,
  '统一配置标题、辅助说明与右侧操作；不再占用根节点原生 title 属性。':
    'Configure the title, supporting description, and trailing action together without occupying the native title attribute on the root.',
  '卡片标题；传入 header 时必须提供。':
    'The card title; required whenever header is provided.',
  'header.action 和 footer 中的图标按钮需要提供可访问名称。':
    'Icon buttons in header.action and footer need accessible names.',
  "import { Layout } from '@heliannuuthus/ui'\nimport { useState } from 'react'\n\nexport const ResponsiveLayout = () => {\n  const [status, setStatus] = useState('')\n\n  return (\n    <Layout>\n      <Layout.Sidebar\n        breakpoint=\"lg\"\n        collapsible\n        collapsedWidth={64}\n        defaultCollapsed={false}\n        side=\"start\"\n        labels={{\n          collapse: '收起侧边栏',\n          expand: '展开侧边栏',\n        }}\n        onBreakpointChange={(below) => setStatus(below ? '窄屏' : '宽屏')}\n        onChange={(collapsed, reason) =>\n          setStatus(\n            (collapsed ? '已收起' : '已展开') + '：' + reason\n          )\n        }\n      >\n        Navigation\n      </Layout.Sidebar>\n      <Layout.Content>{status}</Layout.Content>\n    </Layout>\n  )\n}":
    "import { Layout } from '@heliannuuthus/ui'\nimport { useState } from 'react'\n\nexport const ResponsiveLayout = () => {\n  const [status, setStatus] = useState('')\n\n  return (\n    <Layout>\n      <Layout.Sidebar\n        breakpoint=\"lg\"\n        collapsible\n        collapsedWidth={64}\n        defaultCollapsed={false}\n        side=\"start\"\n        labels={{\n          collapse: 'Collapse sidebar',\n          expand: 'Expand sidebar',\n        }}\n        onBreakpointChange={(below) => setStatus(below ? 'Narrow' : 'Wide')}\n        onChange={(collapsed, reason) =>\n          setStatus(\n            (collapsed ? 'Collapsed' : 'Expanded') + ': ' + reason\n          )\n        }\n      >\n        Navigation\n      </Layout.Sidebar>\n      <Layout.Content>{status}</Layout.Content>\n    </Layout>\n  )\n}",
  '触发操作或事件的基础控件；设置 href 时切换为使用相同视觉样式的原生链接。':
    'A foundational control for triggering actions or events; setting href switches it to a native link with the same visual styles.',
  文字按钮: 'Text button',
  [`export const ButtonVariants = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>主要操作</Button>
      <Button variant="secondary">次要操作</Button>
      <Button variant="outline">描边按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="link">文字按钮</Button>
      <Button variant="destructive">危险操作</Button>
    </div>
  )
}`]: `export const ButtonVariants = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Primary action</Button>
      <Button variant="secondary">Secondary action</Button>
      <Button variant="outline">Outline button</Button>
      <Button variant="ghost">Ghost button</Button>
      <Button variant="link">Text button</Button>
      <Button variant="destructive">Destructive action</Button>
    </div>
  )
}`,
  链接模式: 'Link mode',
  'href 会把根节点切换为原生 a 元素；target、rel 与 download 都是原生链接属性，variant 和 size 只负责视觉样式。':
    'href switches the root to a native a element; target, rel, and download are native link attributes, while variant and size only control visual styling.',
  [`import { ArrowRight } from 'lucide-react'

<Button href="/components/card" variant="outline">
  查看 Card 文档
  <ArrowRight data-icon="inline-end" />
</Button>

<Button
  href="https://ui.heliannuuthus.com"
  target="_blank"
  rel="noreferrer"
  variant="outline"
>
  新窗口打开
</Button>

<Button href="/styles.css" download="heliannuuthus-ui.css">
  下载样式文件
</Button>`]: `import { ArrowRight } from 'lucide-react'

<Button href="/components/card" variant="outline">
  View Card documentation
  <ArrowRight data-icon="inline-end" />
</Button>

<Button
  href="https://ui.heliannuuthus.com"
  target="_blank"
  rel="noreferrer"
  variant="outline"
>
  Open in a new window
</Button>

<Button href="/styles.css" download="heliannuuthus-ui.css">
  Download stylesheet
</Button>`,
  '未设置 href 时渲染原生 button；设置 href 时渲染原生 a 元素。':
    'Renders a native button without href and a native a element when href is set.',
  '执行操作时不要设置 href；页面导航也不要通过 onClick 手动修改地址。':
    'Do not set href for actions, and do not implement page navigation by manually changing the address in onClick.',
  '按钮或链接的视觉样式；不参与决定根元素的语义。':
    'The visual style of a button or link; it does not determine the semantics of the root element.',
  '导航地址与根元素判别字段；设置后渲染为 a，未设置时渲染为原生 button。':
    'The navigation destination and root-element discriminator; renders an a element when set and a native button when omitted.',
  'import { Button } from \'@heliannuuthus/ui\'\n\nexport const GroupedButtons = () => {\n  return (\n    <div className="mx-auto w-80 max-w-full">\n      <Button.Group aria-label="分页操作" block orientation="horizontal">\n        <Button variant="outline">上一项</Button>\n        <Button>下一项</Button>\n      </Button.Group>\n    </div>\n  )\n}':
    'import { Button } from \'@heliannuuthus/ui\'\n\nexport const GroupedButtons = () => {\n  return (\n    <div className="mx-auto w-80 max-w-full">\n      <Button.Group aria-label="Pagination actions" block orientation="horizontal">\n        <Button variant="outline">Previous</Button>\n        <Button>Next</Button>\n      </Button.Group>\n    </div>\n  )\n}',
  '在受限区域内承载长内容，并通过封装后的原生滚动视口提供一致的滚动体验。':
    'Contains long content within a constrained region and provides consistent scrolling through an encapsulated native viewport.',
  '需要保持原生滚动、键盘操作和触控惯性，同时统一滚动条样式。':
    'Use it to preserve native scrolling, keyboard access, and touch momentum while keeping scrollbar styling consistent.',
  '内容可能横向溢出，或需要配置滚动条的尺寸与显隐策略。':
    'Use it when content may overflow horizontally or scrollbar size and visibility need configuration.',
  基础滚动区域: 'Basic scroll area',
  '组件内部创建可滚动视口和所需滚动条；业务只需提供尺寸、滚动条配置与内容。':
    'The component creates the scrollable viewport and required scrollbars internally; applications only provide dimensions, scrollbar configuration, and content.',
  '封装根容器、可聚焦滚动视口、滚动条与双轴交汇角，无需业务手动组合内部部件。':
    'Encapsulates the root, focusable scroll viewport, scrollbars, and two-axis corner so applications do not assemble internal parts.',
  '集中配置滚动条尺寸与显隐策略。':
    'Configures scrollbar size and visibility in one place.',
  '设置滚动条粗细；预设分别为 6、10、14 像素，数字按像素处理。':
    'Sets scrollbar thickness; the presets are 6, 10, and 14 pixels, and numeric values are interpreted as pixels.',
  '自动按悬停或滚动显示、始终显示，或完全隐藏滚动条。':
    'Shows the scrollbar automatically on hover or scroll, keeps it always visible, or hides it completely.',
  '内部视口只在内容溢出时进入 Tab 顺序，并保留浏览器原生键盘滚动行为。':
    'The internal viewport enters the tab order only when content overflows and preserves native keyboard scrolling.',
  '列表、日志等内容语义应声明在子内容容器上，不需要操作内部 viewport。':
    'Declare list, log, and similar content semantics on the child content container without accessing the internal viewport.',
  '隐藏滚动条前应确认界面仍有足够线索表明内容可以滚动。':
    'Before hiding the scrollbar, ensure the interface still provides enough indication that the content is scrollable.',
  '不要依赖或覆盖内部 viewport、thumb 与 corner；它们不是公共组合 API。':
    'Do not depend on or override the internal viewport, thumb, or corner; they are not public composition APIs.',
  [`import { Bubble } from '@heliannuuthus/ui'
import { Avatar } from '@heliannuuthus/ui'
import { ScrollArea } from '@heliannuuthus/ui'

<ScrollArea
  className="h-80"
  scrollbar={{ size: 'sm', visibility: 'auto' }}
>
  <div role="list" aria-label="协作消息">
    {messages.map((message) => (
      <div className="flex gap-2" role="listitem">
        <Avatar alt={message.author} fallback={message.avatar} />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <span>{message.author} · {message.time}</span>
          <Bubble content={message.content} variant="elevated" />
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`]: `import { Bubble } from '@heliannuuthus/ui'
import { Avatar } from '@heliannuuthus/ui'
import { ScrollArea } from '@heliannuuthus/ui'

<ScrollArea
  className="h-80"
  scrollbar={{ size: 'sm', visibility: 'auto' }}
>
  <div role="list" aria-label="Collaboration messages">
    {messages.map((message) => (
      <div className="flex gap-2" role="listitem">
        <Avatar alt={message.author} fallback={message.avatar} />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <span>{message.author} · {message.time}</span>
          <Bubble content={message.content} variant="elevated" />
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`,
  默认名称: 'Default labels',
  本地化名称: 'Localized labels',
  'header 可以组合任意摘要内容；indicator 在两种触发模式下统一控制状态图标，传 false 时隐藏。':
    'The header can compose any summary content; indicator controls the status icon in both trigger modes, and false hides it.',
  默认摘要: 'Default summary',
  自定义摘要: 'Custom summary',
  隐藏摘要: 'Hidden summary',
  限制展开: 'Restricted expansion',
  '统一设置 Header 或独立触发按钮的状态图标；true 使用默认图标，false 隐藏，也可传入自定义节点。':
    'Sets the status icon for either the Header or a separate trigger; true uses the default icon, false hides it, and a custom node replaces it.',
  '控制右上角关闭操作；true 使用默认图标，false 隐藏，也可传入自定义节点。':
    'Controls the top-right close action; true uses the default icon, false hides it, and a custom node replaces it.',
  '通过 indicator 替换默认图标，Header 内容保持不变。':
    'Replace the default icon through indicator without changing the Header content.',
  '传入 indicator=false，保留触发能力但不显示指示图标。':
    'Pass indicator=false to keep the trigger behavior without showing an indicator.',
  '· 共': '· Total',
};
