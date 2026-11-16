import { Table, Typography } from '@heliannuuthus/ui';
import { resources } from '../i18n/resources';
import { InternalButtonLink } from '../../theme/internal-link';
import { localPath, useDocsPageLocale } from './page-locale';

const pageCopy = {
  zh: {
    sections: [
      {
        id: 'purpose',
        title: '为什么维护这套库',
        paragraphs: [
          '不同项目里的界面需求，经常有相同的基础：表单如何组织、列表如何筛选、编辑操作如何展开，以及加载、空和错误状态如何呈现。只复用单个控件，仍然需要在每个项目里重新组合这些结构、处理相近的交互细节。',
          '维护这套库，是希望把这些已经解决过的问题持续沉淀下来。基础交互、常用界面结构和视觉规范放在同一处维护，后续项目能够从已有成果继续开发；一次改进也能回到公共实现，逐步形成适合自身产品的界面风格。',
        ],
      },
      {
        id: 'layers',
        title: '底层组件与上层套件',
        paragraphs: [
          '底层组件复用独立的交互与展示能力，上层套件复用经过打磨的界面组织方式。两层使用相同的视觉规范与组件契约，让控件级的改进能够自然传递到组合后的界面。',
        ],
      },
      {
        id: 'suite-scope',
        title: '套件需要沉淀什么',
        paragraphs: [
          '以列表界面为例，筛选条件、结果展示、分页、加载和空状态之间存在稳定的组合关系。套件需要沉淀这类结构、局部交互与状态呈现规则，并提供数据输入、操作事件和内容定制入口。',
          '套件保留领域无关的界面模式，具体的数据请求、权限判断、路由跳转和业务流程由应用接入。这样，同一种界面结构可以用于不同项目，同时保持各自的业务语义。',
          '上层套件从实际项目中反复出现的组合逐步提炼。是否值得抽取，取决于结构和交互是否稳定、能否明确描述复用边界，以及下一次使用时能减少哪些重复工作。',
        ],
      },
      {
        id: 'ai-usage',
        title: '让 AI 复用已有的界面能力',
        paragraphs: [
          'AI 编程工具也是这套库的使用者。底层组件为它提供明确的控件能力，上层套件则提供更完整的界面结构，使页面开发能够优先从现有组合开始，再围绕具体需求调整。',
          '因此，文档既需要说明组件的属性、事件和状态，也需要说明套件的适用场景、组合关系和扩展边界。类型定义与真实示例共同提供依据，让 AI 在已有设计上继续实现，并保留统一的视觉与交互约定。',
        ],
      },
      {
        id: 'evolution',
        title: '在自己的项目中持续验证',
        paragraphs: [
          '这套库优先服务维护者自己的产品，能力来自实际需求，风格来自持续的使用与调整。基础组件和上层套件都需要回到真实页面，检查键盘、无障碍、长文本、窄屏以及适用的加载、空、错误和禁用状态。',
          '通用改进回到组件库统一维护，业务差异通过组合与扩展表达。组件、套件、类型、文档和示例随实现一起演进，使后续项目能够复用此前积累的经验。',
        ],
      },
    ],
    layerLabel: '层级',
    responsibilityLabel: '建设内容与复用范围',
    layers: [
      {
        name: '底层 UI 组件',
        responsibility:
          '提供独立、可组合的控件能力，统一类型接口、基础交互、状态、无障碍和样式扩展。',
        examples: '例如 Button、Input、Select、Dialog、Table。',
      },
      {
        name: '上层 UI 套件',
        responsibility:
          '将基础组件组合为可复用的界面模式，沉淀布局、组件配合、局部交互与完整状态。',
        examples: '逐步提炼筛选与列表、表单区块、列表工具栏、编辑面板等组合。',
      },
    ],
    references: '相关文档',
    components: '组件目录',
    configuration: '全局配置',
  },
  en: {
    sections: [
      {
        id: 'purpose',
        title: 'Why maintain this library',
        paragraphs: [
          'Interfaces across projects often share the same foundations: how forms are organized, how lists are filtered, how editing is presented, and how loading, empty, and error states appear. Reusing individual controls still leaves each project assembling these structures and implementing similar interaction details.',
          'The purpose of this library is to retain those solved problems. Shared interactions, recurring interface structures, and visual conventions are maintained together, so later projects can build on previous work. Improvements return to the shared implementation and gradually establish a visual language suited to the maintainer’s products.',
        ],
      },
      {
        id: 'layers',
        title: 'UI components and reusable UI kits',
        paragraphs: [
          'Base components reuse individual interactions and presentation capabilities. Higher-level UI kits reuse refined ways of organizing interfaces. Both layers share visual conventions and component contracts, allowing improvements to primitives to carry through to the composed interface.',
        ],
      },
      {
        id: 'suite-scope',
        title: 'What belongs in a UI kit',
        paragraphs: [
          'A list interface, for example, has recurring relationships between filters, results, pagination, and loading or empty states. A kit should capture that structure, local interactions, and state presentation, with inputs for data, operation events, and content customization.',
          'Kits retain domain-neutral interface patterns. Applications supply data fetching, permission checks, navigation, and business workflows. The same interface structure can then serve different projects while preserving each product’s business meaning.',
          'Higher-level kits are gradually extracted from compositions that recur in actual projects. Extraction depends on stable structure and behavior, a clear reuse boundary, and identifiable work that can be avoided the next time the pattern is needed.',
        ],
      },
      {
        id: 'ai-usage',
        title: 'Help AI reuse existing interface capabilities',
        paragraphs: [
          'AI coding tools are also consumers of this library. Base components give them explicit control-level capabilities. Higher-level kits provide more complete interface structures, allowing page development to start from existing compositions and adapt them to the task.',
          'Documentation therefore needs to cover component props, events, and states as well as kit use cases, composition, and extension boundaries. Type definitions and real examples provide references for AI to build on existing design decisions while preserving consistent visuals and interactions.',
        ],
      },
      {
        id: 'evolution',
        title: 'Validate continuously in the maintainer’s projects',
        paragraphs: [
          'The library prioritizes the maintainer’s own products. Capabilities come from actual needs, and its style develops through use and refinement. Both components and kits need verification in real pages for keyboard use, accessibility, long text, narrow layouts, and applicable loading, empty, error, and disabled states.',
          'Maintain reusable improvements in the library and express business differences through composition and extension. Components, kits, types, documentation, and examples evolve with the implementation so later projects can reuse the experience already gained.',
        ],
      },
    ],
    layerLabel: 'Layer',
    responsibilityLabel: 'Scope and reusable capabilities',
    layers: [
      {
        name: 'Base UI components',
        responsibility:
          'Independent, composable controls with consistent type contracts, interactions, states, accessibility, and styling extensions.',
        examples: 'For example, Button, Input, Select, Dialog, and Table.',
      },
      {
        name: 'Higher-level UI kits',
        responsibility:
          'Reusable interface patterns composed from primitives, capturing layout, component coordination, local interactions, and complete states.',
        examples:
          'Gradually extract patterns such as filtered lists, form sections, list toolbars, and editing panels.',
      },
    ],
    references: 'Related documentation',
    components: 'Component catalog',
    configuration: 'Global configuration',
  },
} as const;

export const DesignPage = () => {
  const locale = useDocsPageLocale();
  const design = resources[locale].common.design;
  const copy = pageCopy[locale];

  return (
    <div className="docs-design-page">
      <header>
        <Typography.Title>{design.title}</Typography.Title>
        <Typography.Text as="p" className="design-purpose">
          {design.description}
        </Typography.Text>
      </header>

      {copy.sections.map((section) => (
        <section aria-labelledby={section.id} key={section.id}>
          <Typography.Title id={section.id} level={2}>
            {section.title}
          </Typography.Title>
          {section.paragraphs.map((paragraph) => (
            <Typography.Text as="p" key={paragraph}>
              {paragraph}
            </Typography.Text>
          ))}
          {section.id === 'layers' ? (
            <Table.Primitive
              aria-labelledby={section.id}
              classes={{ table: 'design-layer-table' }}
            >
              <colgroup>
                <col className="design-layer-name" />
                <col />
              </colgroup>
              <Table.Header>
                <Table.Row>
                  <Table.Head className="design-layer-cell" scope="col">
                    {copy.layerLabel}
                  </Table.Head>
                  <Table.Head className="design-layer-cell" scope="col">
                    {copy.responsibilityLabel}
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {copy.layers.map((layer) => (
                  <Table.Row key={layer.name}>
                    <Table.Head className="design-layer-cell" scope="row">
                      <Typography.Text weight="semibold">
                        {layer.name}
                      </Typography.Text>
                    </Table.Head>
                    <Table.Cell className="design-layer-cell">
                      <Typography.Text as="p">
                        {layer.responsibility}
                      </Typography.Text>
                      <Typography.Text
                        as="p"
                        className="design-layer-example"
                        tone="muted"
                      >
                        {layer.examples}
                      </Typography.Text>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Primitive>
          ) : null}
        </section>
      ))}

      <nav aria-label={copy.references} className="design-references">
        <InternalButtonLink
          href={localPath(locale, '/components')}
          size="sm"
          variant="link"
        >
          {copy.components}
        </InternalButtonLink>
        <InternalButtonLink
          href={localPath(locale, '/docs/provider')}
          size="sm"
          variant="link"
        >
          {copy.configuration}
        </InternalButtonLink>
      </nav>
    </div>
  );
};
