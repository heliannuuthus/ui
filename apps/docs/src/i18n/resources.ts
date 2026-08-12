const zh = {
  common: {
    language: {
      current: '中文',
      switchLabel: 'Switch to English',
    },
    navigation: {
      home: '首页',
      gettingStarted: '快速开始',
      design: '设计理念',
      components: '组件库',
      main: '主导航',
      open: '打开导航',
      close: '关闭导航',
    },
    actions: {
      getStarted: '开始使用',
      browseComponents: '浏览组件',
      viewAllComponents: '查看全部组件',
      viewSource: '查看源码',
      viewOnGitHub: '在 GitHub 查看源码',
      toggleTheme: '切换主题',
      cancel: '取消',
      save: '保存修改',
      copy: '复制当前写法',
      copied: '代码已复制',
    },
    search: {
      trigger: '搜索组件',
      title: '搜索组件',
      description: '搜索并打开 Heliannuuthus UI 组件文档',
      placeholder: '搜索组件名称或用途…',
      emptyTitle: '没有匹配的组件',
      emptyDescription: '试试 Button、表单、导航或反馈。',
      select: '选择',
      open: '打开',
      close: '关闭',
      overviewPlaceholder: '搜索组件',
      overviewEmpty: '换一个组件名称试试，或清除搜索查看完整目录。',
      clear: '清除搜索',
      noResult: '没有找到“{{query}}”',
    },
    groups: {
      general: '通用',
      layout: '布局',
      navigation: '导航',
      forms: '表单',
      actions: '操作与菜单',
      content: '内容展示',
      dataDisplay: '数据展示',
      overlays: '浮层',
      feedback: '反馈',
    },
    components: {
      label: '组件',
      count: '{{count}} 个组件',
      overviewTitle: '组件总览',
      overviewDescription:
        '覆盖界面构建中的常见场景，并持续从真实产品中沉淀更好的实践。',
      navigation: '组件导航',
      openNavigation: '打开组件导航',
      related: '相关组件',
      examples: '示例',
      parts: '组成组件',
      purpose: '用途',
      properties: '属性',
      inheritedPropsNotice:
        '属性按必填项、普通属性、事件、ref 与样式扩展的顺序排列。className 与 style 单独列出；其余继承自根节点或底层 primitive 的 HTML、ARIA、data 属性和原生事件，以导出的 TypeScript 类型为准。',
      description: '说明',
      type: '类型',
      defaultValue: '默认值',
      accessibility: '无障碍',
      pitfalls: '避免这样使用',
      draftSummary: '该组件的完整使用场景正在按组件目录顺序整理。',
    },
    docs: {
      onThisPage: '本页目录',
      typeDefinition: '类型定义',
      field: '{{component}} 字段',
      scope: '作用域',
      constraint: '约束',
      internalNode: '{{component}} 内部语义节点',
      required: '必填字段',
      optional: '可选字段',
      usage: '用法',
      typeAccess: '类型访问',
      previewType: '预览 {{type}} 类型',
    },
    demo: {
      copied: '已复制',
      copyCode: '复制代码',
      openCodeSandbox: '在 CodeSandbox 打开',
      openStackBlitz: '在 StackBlitz 打开',
      collapseCode: '收起代码',
      expandCode: '展开代码',
    },
    home: {
      componentCount: '{{count}} 个可组合组件',
      title: '构建清晰、一致的产品界面',
      description:
        'Heliannuuthus UI 提供稳定的 React 组件、明确的 API 与可访问交互，让产品团队把注意力留给真正的业务问题。',
      previewTitle: '组件组合预览',
      previewDescription: '使用公共组件完成真实界面，而不是绘制静态示意图。',
      workspaceName: '工作区名称',
      features: '项目特性',
      baseComponents: '个基础组件',
      accessibilityFirst: '可访问性优先',
      openSource: '源码完全可控',
      philosophyTitle: '让每一个产品共享同一套界面语言',
      philosophyDescription:
        '公共组件负责稳定的行为和表达，业务项目专注自己的流程与语义。',
      philosophyAction: '了解设计理念',
      componentsTitle: '从基础控件到完整交互',
      clarity: '清晰',
      clarityDescription: '信息层级先于装饰，让状态、操作与反馈始终可理解。',
      consistency: '一致',
      consistencyDescription: '相同的问题提供相同的解法，跨产品也保持熟悉感。',
      composable: '可组合',
      composableDescription: '小而稳定的能力可以自由组合，业务语义留在业务中。',
      evolvable: '可生长',
      evolvableDescription: 'API 为真实场景保留扩展点，并尊重长期兼容性。',
    },
    gettingStarted: {
      title: '快速开始',
      kicker: '接入指南',
      description: '用几分钟把 Heliannuuthus UI 接入你的 React 项目。',
      installation: '安装',
      installationDescription:
        '选择项目正在使用的包管理器安装。推荐使用 pnpm。',
      importStyles: '导入样式',
      importStylesDescription:
        '在应用入口导入一次共享样式，确保所有组件都能正确显示。',
      usage: '使用组件',
      usageDescription: '从 @heliannuuthus/ui 导入所需组件并在页面中使用。',
      next: '下一步',
      nextTitle: '浏览完整组件目录',
      nextDescription: '继续查看组件示例、API 与具体使用建议。',
    },
    design: {
      title: '设计理念',
      description:
        '组件不是终点。我们建立的是一套让产品持续保持清晰、一致和可维护的共同语言。',
      clarity: '清晰胜过表现',
      clarityDescription:
        '视觉的首要职责是解释结构。颜色、间距和动效都应服务于理解，而不是争夺注意力。',
      convention: '约定创造效率',
      conventionDescription:
        '一致的命名、状态和反馈让团队少做无谓选择，把注意力留给真正的产品问题。',
      composition: '组合保持边界',
      compositionDescription:
        '公共组件提供可靠能力，业务层负责语义与流程。两者清楚分工，系统才能自由生长。',
      details: '细节建立信任',
      detailsDescription:
        '键盘操作、窄屏布局、加载与错误状态并非补充，它们共同决定一个组件是否值得依赖。',
    },
  },
} as const;

type LocaleShape<T> = {
  [Key in keyof T]: T[Key] extends string ? string : LocaleShape<T[Key]>;
};

const en = {
  common: {
    language: {
      current: 'English',
      switchLabel: '切换到中文',
    },
    navigation: {
      home: 'Home',
      gettingStarted: 'Getting started',
      design: 'Design',
      components: 'Components',
      main: 'Main navigation',
      open: 'Open navigation',
      close: 'Close navigation',
    },
    actions: {
      getStarted: 'Get started',
      browseComponents: 'Browse components',
      viewAllComponents: 'View all components',
      viewSource: 'View source',
      viewOnGitHub: 'View source on GitHub',
      toggleTheme: 'Toggle theme',
      cancel: 'Cancel',
      save: 'Save changes',
      copy: 'Copy this usage',
      copied: 'Code copied',
    },
    search: {
      trigger: 'Search components',
      title: 'Search components',
      description: 'Search and open Heliannuuthus UI component documentation',
      placeholder: 'Search by component name or use case…',
      emptyTitle: 'No matching components',
      emptyDescription: 'Try Button, forms, navigation, or feedback.',
      select: 'Select',
      open: 'Open',
      close: 'Close',
      overviewPlaceholder: 'Search components',
      overviewEmpty:
        'Try another component name, or clear the search to view the full catalog.',
      clear: 'Clear search',
      noResult: 'No results for “{{query}}”',
    },
    groups: {
      general: 'General',
      layout: 'Layout',
      navigation: 'Navigation',
      forms: 'Forms',
      actions: 'Actions & menus',
      content: 'Content display',
      dataDisplay: 'Data display',
      overlays: 'Overlays',
      feedback: 'Feedback',
    },
    components: {
      label: 'Components',
      count: '{{count}} components',
      overviewTitle: 'Component overview',
      overviewDescription:
        'Common interface building blocks refined continuously through real product work.',
      navigation: 'Component navigation',
      openNavigation: 'Open component navigation',
      related: 'Related components',
      examples: 'Examples',
      parts: 'Component parts',
      purpose: 'Purpose',
      properties: 'Properties',
      inheritedPropsNotice:
        'Properties are ordered as required inputs, regular properties, events, refs, and styling extensions. className and style are listed explicitly. Other HTML, ARIA, data attributes, and native events inherited from the root element or underlying primitive follow the exported TypeScript type.',
      description: 'Description',
      type: 'Type',
      defaultValue: 'Default',
      accessibility: 'Accessibility',
      pitfalls: 'Avoid these patterns',
      draftSummary:
        'Complete guidance for this component is being prepared in catalog order.',
    },
    docs: {
      onThisPage: 'On this page',
      typeDefinition: 'Type definition',
      field: '{{component}} fields',
      scope: 'Scope',
      constraint: 'Constraint',
      internalNode: 'Semantic node inside {{component}}',
      required: 'Required field',
      optional: 'Optional field',
      usage: 'Usage',
      typeAccess: 'Type access',
      previewType: 'Preview the {{type}} type',
    },
    demo: {
      copied: 'Copied',
      copyCode: 'Copy code',
      openCodeSandbox: 'Open in CodeSandbox',
      openStackBlitz: 'Open in StackBlitz',
      collapseCode: 'Collapse code',
      expandCode: 'Expand code',
    },
    home: {
      componentCount: '{{count}} composable components',
      title: 'Build clear, consistent product interfaces',
      description:
        'Heliannuuthus UI provides stable React components, deliberate APIs, and accessible interactions so product teams can focus on real business problems.',
      previewTitle: 'Component composition preview',
      previewDescription:
        'Build a real interface from shared components instead of drawing a static mockup.',
      workspaceName: 'Workspace name',
      features: 'Project features',
      baseComponents: 'base components',
      accessibilityFirst: 'Accessibility first',
      openSource: 'Fully controlled source',
      philosophyTitle: 'Give every product a shared interface language',
      philosophyDescription:
        'Shared components own stable behavior and expression; product applications focus on their workflows and semantics.',
      philosophyAction: 'Explore the design principles',
      componentsTitle: 'From primitives to complete interactions',
      clarity: 'Clear',
      clarityDescription:
        'Information hierarchy comes before decoration, keeping state, actions, and feedback understandable.',
      consistency: 'Consistent',
      consistencyDescription:
        'Solve the same problem in the same way and preserve familiarity across products.',
      composable: 'Composable',
      composableDescription:
        'Small, stable capabilities combine freely while business semantics stay in the product.',
      evolvable: 'Evolvable',
      evolvableDescription:
        'APIs preserve extension points for real scenarios and respect long-term compatibility.',
    },
    gettingStarted: {
      title: 'Getting started',
      kicker: 'INTEGRATION GUIDE',
      description:
        'Add Heliannuuthus UI to your React project in a few minutes.',
      installation: 'Install',
      installationDescription:
        'Install with the package manager used by your project. pnpm is recommended.',
      importStyles: 'Import styles',
      importStylesDescription:
        'Import the shared stylesheet once at your application entry point so every component renders correctly.',
      usage: 'Use components',
      usageDescription:
        'Import the components you need from @heliannuuthus/ui and use them in your page.',
      next: 'Next step',
      nextTitle: 'Browse the full component catalog',
      nextDescription:
        'Continue to component examples, APIs, and detailed usage guidance.',
    },
    design: {
      title: 'Design principles',
      description:
        'Components are not the destination. We are building a shared language that keeps products clear, consistent, and maintainable as they grow.',
      clarity: 'Clarity over spectacle',
      clarityDescription:
        'The first job of visual design is to explain structure. Color, spacing, and motion should support understanding rather than compete for attention.',
      convention: 'Conventions create efficiency',
      conventionDescription:
        'Consistent naming, state, and feedback reduce unnecessary choices and preserve attention for actual product problems.',
      composition: 'Composition preserves boundaries',
      compositionDescription:
        'Shared components provide dependable capabilities while product layers own semantics and workflows.',
      details: 'Details build trust',
      detailsDescription:
        'Keyboard access, narrow layouts, loading, and error states are part of what makes a component dependable.',
    },
  },
} as const satisfies LocaleShape<typeof zh>;

export const resources = {
  en,
  zh,
} as const;

export type DocsLocale = keyof typeof resources;

export const defaultLocale: DocsLocale = 'zh';
export const supportedLocales = Object.keys(resources) as DocsLocale[];

export const isDocsLocale = (
  value: string | undefined
): value is DocsLocale => {
  return supportedLocales.includes(value as DocsLocale);
};

export const htmlLanguage = (locale: DocsLocale) => {
  return locale === 'zh' ? 'zh-Hans' : 'en';
};
