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
      previewType: '预览 {{type}} 类型',
      typeCard: {
        alias: '类型别名',
        declaration: '完整声明',
        fields: '字段',
        function: '函数类型',
        members: '{{count}} 个字段',
        object: '对象类型',
        optional: '可选',
        required: '必填',
        union: '联合类型',
      },
    },
    demo: {
      copied: '已复制',
      copyCode: '复制代码',
      preview: '预览',
      source: '源码',
      openCodeSandbox: '在 CodeSandbox 打开',
      openStackBlitz: '在 StackBlitz 打开',
      collapseCode: '收起代码',
      expandCode: '展开代码',
    },
    home: {
      componentCount: '{{count}} 个可组合组件',
      title: 'React 产品界面的公共组件',
      description:
        '统一维护基础组件、交互行为和 TypeScript API，业务项目直接安装使用。',
      previewTitle: '组件组合预览',
      previewDescription: '下面的工作区表单由已发布组件组合而成。',
      workspaceName: '工作区名称',
      features: '项目特性',
      baseComponents: '个基础组件',
      accessibilityFirst: '可访问性优先',
      openSource: '源码完全可控',
      philosophyTitle: '一套组件，供所有产品使用',
      philosophyDescription:
        '组件库维护基础行为和样式，业务项目维护自己的数据、路由和文案。',
      philosophyAction: '了解设计理念',
      componentsTitle: '从基础控件到完整交互',
      clarity: '清晰',
      clarityDescription: '先排清信息、状态和操作，再考虑装饰。',
      consistency: '一致',
      consistencyDescription: '同类操作使用同一套名称、状态和反馈。',
      composable: '可组合',
      composableDescription: '基础能力保持独立，由业务页面按需要组合。',
      evolvable: '可生长',
      evolvableDescription: '公共 API 保持兼容，并为常见场景提供扩展点。',
    },
    gettingStarted: {
      title: '快速开始',
      kicker: '接入指南',
      description: '完成安装、样式导入、全局配置和第一个组件。',
      installation: '安装',
      installationDescription:
        '在项目目录运行一条命令。选择与现有锁文件一致的包管理器。',
      importStyles: '导入样式',
      importStylesDescription:
        '在应用入口导入一次 styles.css，不要在页面或组件文件中重复导入。',
      usage: '使用组件',
      usageDescription:
        '从包根入口按名称导入组件。下面的示例可用于检查安装结果。',
      configuration: '全局配置',
      configurationDescription:
        '需要统一明暗模式、书写方向或组件默认值时，在应用根部添加 Provider。',
      configurationItems: '可配置项',
      appearanceDescription:
        '选择 light、dark 或跟随操作系统的 system，默认使用 system。',
      directionDescription: '设置 ltr 或 rtl，默认使用 ltr。',
      colorsDescription: '覆盖浅色模式的语义色；只设置需要改变的令牌即可。',
      darkColorsDescription:
        '覆盖深色模式的语义色，可配置项与 colors 完全相同；未设置的值继续使用 colors 或默认主题。',
      radiusDescription: '设置组件共享的基础圆角值。',
      componentDefaults: '组件默认属性',
      componentDefaultsDescription:
        '下面列出当前支持统一管理的全部组件和展示属性；未列出的状态、内容与事件仍由组件实例明确传入。',
      configurationBoundary: '配置边界',
      configurationBoundaryDescription:
        'Provider 只管理跨组件的视觉默认值，不管理文案、事件、业务状态或数据行为。组件显式传入的属性始终优先于全局默认值。',
    },
    design: {
      title: '设计理念',
      description:
        '这里记录组件的取舍标准，以及业务项目使用组件时应遵守的边界。',
      clarity: '清晰胜过表现',
      clarityDescription: '颜色、间距和动效用于区分结构、状态和操作优先级。',
      convention: '约定创造效率',
      conventionDescription: '相同的状态和操作采用相同的名称、位置与反馈。',
      composition: '组合保持边界',
      compositionDescription:
        '公共组件负责通用能力，业务层负责数据、权限、路由和流程。',
      details: '细节建立信任',
      detailsDescription:
        '每个组件都要覆盖键盘、窄屏、加载、空、错误和禁用状态。',
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
      previewType: 'Preview the {{type}} type',
      typeCard: {
        alias: 'Type alias',
        declaration: 'Full declaration',
        fields: 'Fields',
        function: 'Function type',
        members: '{{count}} fields',
        object: 'Object type',
        optional: 'Optional',
        required: 'Required',
        union: 'Union type',
      },
    },
    demo: {
      copied: 'Copied',
      copyCode: 'Copy code',
      preview: 'Preview',
      source: 'Source',
      openCodeSandbox: 'Open in CodeSandbox',
      openStackBlitz: 'Open in StackBlitz',
      collapseCode: 'Collapse code',
      expandCode: 'Expand code',
    },
    home: {
      componentCount: '{{count}} composable components',
      title: 'Shared components for React products',
      description:
        'One package for shared components, interaction behavior, and TypeScript APIs across product applications.',
      previewTitle: 'Component composition preview',
      previewDescription:
        'The workspace form below is composed from published components.',
      workspaceName: 'Workspace name',
      features: 'Project features',
      baseComponents: 'base components',
      accessibilityFirst: 'Accessibility first',
      openSource: 'Fully controlled source',
      philosophyTitle: 'One component set for every product',
      philosophyDescription:
        'The library owns base behavior and styles. Applications own data, routing, and product copy.',
      philosophyAction: 'Explore the design principles',
      componentsTitle: 'From primitives to complete interactions',
      clarity: 'Clear',
      clarityDescription:
        'Arrange information, state, and actions before adding decoration.',
      consistency: 'Consistent',
      consistencyDescription:
        'Use the same names, states, and feedback for the same operations.',
      composable: 'Composable',
      composableDescription:
        'Keep base capabilities independent and compose them in product pages.',
      evolvable: 'Evolvable',
      evolvableDescription:
        'Keep public APIs compatible and provide extension points for common cases.',
    },
    gettingStarted: {
      title: 'Getting started',
      kicker: 'INTEGRATION GUIDE',
      description:
        'Install the package, import its styles, configure the app, and render a component.',
      installation: 'Install',
      installationDescription:
        'Run one command in the project directory. Use the package manager that owns the existing lockfile.',
      importStyles: 'Import styles',
      importStylesDescription:
        'Import styles.css once at the application entry. Do not repeat it in pages or component files.',
      usage: 'Use components',
      usageDescription:
        'Use named imports from the package root. The example below verifies the installation.',
      configuration: 'Global configuration',
      configurationDescription:
        'Add Provider at the application root when you need shared appearance, direction, or component defaults.',
      configurationItems: 'Configurable properties',
      appearanceDescription:
        'Choose light, dark, or system to follow the operating system. The default is system.',
      directionDescription: 'Set ltr or rtl. The default is ltr.',
      colorsDescription:
        'Override semantic colors for light mode. Specify only the tokens you need to change.',
      darkColorsDescription:
        'Override semantic colors for dark mode with the same token set as colors. Unspecified values continue to use colors or the default theme.',
      radiusDescription: 'Set the shared base radius for components.',
      componentDefaults: 'Component defaults',
      componentDefaultsDescription:
        'This is the complete list of components and presentation props that can currently be managed globally. Unlisted state, content, and events remain explicit on each component instance.',
      configurationBoundary: 'Configuration boundary',
      configurationBoundaryDescription:
        'Provider manages cross-component visual defaults only. It does not manage copy, events, business state, or data behavior. Explicit component props always override global defaults.',
    },
    design: {
      title: 'Design principles',
      description:
        'These rules define component tradeoffs and the boundary between the library and product applications.',
      clarity: 'Clarity over spectacle',
      clarityDescription:
        'Use color, spacing, and motion to distinguish structure, state, and action priority.',
      convention: 'Conventions create efficiency',
      conventionDescription:
        'Use the same names, placement, and feedback for equivalent states and actions.',
      composition: 'Composition preserves boundaries',
      compositionDescription:
        'Shared components own generic behavior; products own data, permissions, routing, and workflows.',
      details: 'Details build trust',
      detailsDescription:
        'Every component must cover keyboard use, narrow layouts, loading, empty, error, and disabled states.',
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
