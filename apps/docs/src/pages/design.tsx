import { Typography } from '@heliannuuthus/ui';
import { resources } from '../i18n/resources';
import { InternalButtonLink } from '../../theme/internal-link';
import { localPath, useDocsPageLocale } from './page-locale';

const pageCopy = {
  zh: {
    introduction:
      '组件根据实际项目需求持续演进。设计与实现保持统一，类型、文档和示例同时作为开发与 AI 编程的使用依据。',
    sections: [
      {
        id: 'scope',
        title: '项目范围',
        paragraphs: [
          '组件库优先满足维护者自有项目的需求，组件能力和视觉取舍由实际使用场景决定。对外提供相同的组件与文档。',
          '领域无关的交互、展示和无障碍能力在组件库中维护；业务数据、权限、路由和流程由各项目负责。',
        ],
      },
      {
        id: 'visual',
        title: '视觉规范',
        paragraphs: [
          '颜色、排版、间距、圆角和状态反馈保持一致，形成自有项目间稳定的视觉语言。视觉调整应落实到可复用的配置与样式中。',
          '颜色和圆角通过语义 Token 与 Provider 配置，常用尺寸通过组件默认值统一。字体、布局和内容密度由应用样式控制，组件提供明确的样式扩展点。',
        ],
      },
      {
        id: 'contracts',
        title: '组件契约',
        paragraphs: [
          '相同能力采用一致的属性、事件和状态命名。受控与非受控模式、事件参数、ref 和样式扩展边界应有明确的类型定义。',
          '组件需要覆盖键盘操作、无障碍、长文本和窄容器，以及适用的加载、空、错误和禁用状态。行为与类型契约保持一致。',
        ],
      },
      {
        id: 'ai-usage',
        title: 'AI 使用',
        paragraphs: [
          'AI 编程工具通过组件文档、TypeScript 类型和真实示例了解现有能力。开发时应基于项目安装的版本复用组件，并遵循已有的主题与交互约定。',
          '组件 API 或行为发生变化时，同步更新类型、文档和示例，使 AI 与人工开发使用相同的依据。',
        ],
      },
      {
        id: 'evolution',
        title: '演进原则',
        paragraphs: [
          '新增能力应有实际需求支撑。通用能力的扩展和缺陷修复回到组件库统一维护，避免在各项目中形成重复实现。',
          '组件通过真实页面持续验证。调整视觉或 API 时，检查已有使用场景与兼容性，保留必要的设计取舍和迁移说明。',
        ],
      },
    ],
    references: '相关文档',
    components: '组件目录',
    configuration: '全局配置',
  },
  en: {
    introduction:
      'Components evolve with actual project needs. Design and implementation stay aligned, while types, documentation, and examples provide references for both manual and AI-assisted development.',
    sections: [
      {
        id: 'scope',
        title: 'Project scope',
        paragraphs: [
          'The library prioritizes the maintainer’s own projects. Component capabilities and visual decisions follow actual usage. The same components and documentation are available to other users.',
          'Domain-neutral interactions, presentation, and accessibility belong in the library. Product data, permissions, routing, and workflows remain in each application.',
        ],
      },
      {
        id: 'visual',
        title: 'Visual conventions',
        paragraphs: [
          'Colors, typography, spacing, radius, and state feedback form a consistent visual language across the maintainer’s projects. Visual refinements should be expressed through reusable configuration and styles.',
          'Configure colors and radius through semantic tokens and Provider. Set common sizes through component defaults. Application styles control typography, layout, and density, with explicit component styling extension points.',
        ],
      },
      {
        id: 'contracts',
        title: 'Component contracts',
        paragraphs: [
          'Equivalent capabilities use consistent prop, event, and state names. Types define controlled and uncontrolled modes, event arguments, refs, and styling boundaries.',
          'Components cover keyboard use, accessibility, long text, and narrow containers, along with applicable loading, empty, error, and disabled states. Behavior must match the type contract.',
        ],
      },
      {
        id: 'ai-usage',
        title: 'AI usage',
        paragraphs: [
          'AI coding tools use component documentation, TypeScript types, and real examples to understand existing capabilities. Development should reuse components from the installed version and follow existing theme and interaction conventions.',
          'Update types, documentation, and examples whenever component APIs or behavior change, so AI-assisted and manual development share the same references.',
        ],
      },
      {
        id: 'evolution',
        title: 'Evolution',
        paragraphs: [
          'New capabilities need a concrete use case. Maintain reusable extensions and fixes in the library to avoid duplicate implementations across projects.',
          'Verify components continuously in real pages. Check existing usage and compatibility when changing visuals or APIs, and record relevant tradeoffs and migration guidance.',
        ],
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
        <Typography.Text as="p">{design.description}</Typography.Text>
        <Typography.Text as="p">{copy.introduction}</Typography.Text>
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
