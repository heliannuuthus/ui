import { Stack, Tag, Typography } from '@heliannuuthus/ui';
import {
  ArrowRight,
  Code2,
  Layers3,
  PackagePlus,
  SlidersHorizontal,
} from 'lucide-react';
import { resources } from '../i18n/resources';
import { InternalButtonLink } from '../../theme/internal-link';
import { localPath, useDocsPageLocale } from './page-locale';
import { CodePanel, InstallTabs, PageEyebrow } from './shared';

const pageCopy = {
  zh: {
    styleNote: '样式只导入一次。组件模块不会在运行时隐式注入 CSS。',
    providerNote:
      'Provider 管理外观、书写方向、语义 Token 和组件默认值；业务状态仍留在业务层。',
    usageNote: '所有公共组件都从包根入口导入。组件子路径是私有实现细节。',
    explanationLabels: {
      purpose: '为什么要做',
      outcome: '完成后',
    },
    stepExplanations: {
      installation: {
        purpose:
          '把组件、交互依赖和完整的 TypeScript 类型加入当前项目，后续无需复制组件源码。',
        outcome:
          'package.json 中会出现 @heliannuuthus/ui，包管理器的锁文件也会同步更新。',
      },
      styles: {
        purpose:
          '共享样式包含语义色、排版、间距和所有组件的结构规则，是组件正确呈现的基础。',
        outcome:
          '应用只维护一个全局样式入口，组件在浅色、深色及不同状态下都能获得一致外观。',
      },
      provider: {
        purpose:
          '在应用根部集中声明主题、书写方向和组件默认值，避免在每个页面重复配置。',
        outcome:
          'Provider 范围内的组件共享同一套视觉约定，同时仍可通过组件属性进行局部覆盖。',
      },
      usage: {
        purpose:
          '通过公开根入口组合真实组件，获得稳定的类型提示、交互语义和后续升级路径。',
        outcome:
          '页面已经具备第一个可运行界面，可以继续查阅组件目录并替换为实际业务内容。',
      },
    },
    nextKicker: 'READY TO BUILD',
    nextTitle: '接入完成。现在从真实组件开始。',
  },
  en: {
    styleNote:
      'Import styles once. Component modules never inject CSS implicitly at runtime.',
    providerNote:
      'Provider manages appearance, direction, semantic tokens, and component defaults. Product state stays in the product layer.',
    usageNote:
      'Import every public component from the package root. Component subpaths are private.',
    explanationLabels: {
      purpose: 'Why this matters',
      outcome: 'After this step',
    },
    stepExplanations: {
      installation: {
        purpose:
          'Add the components, interaction dependencies, and complete TypeScript types without copying component source into your app.',
        outcome:
          '@heliannuuthus/ui appears in package.json and your package-manager lockfile is updated.',
      },
      styles: {
        purpose:
          'The shared stylesheet provides semantic colors, typography, spacing, and the structural rules every component needs.',
        outcome:
          'Your app keeps one global style entry and components render consistently across themes and states.',
      },
      provider: {
        purpose:
          'Declare theme, writing direction, and component defaults once at the application root instead of repeating them on every page.',
        outcome:
          'Components inside Provider share the same visual conventions while explicit component props can still override them locally.',
      },
      usage: {
        purpose:
          'Compose real components from the public root entry to retain stable types, interaction semantics, and a clear upgrade path.',
        outcome:
          'You have a working first screen and can continue into the component catalog to replace the sample with product content.',
      },
    },
    nextKicker: 'READY TO BUILD',
    nextTitle: 'Integration complete. Start with a real component.',
  },
} as const;

const styleCode = "import '@heliannuuthus/ui/styles.css';\nimport './app.css';";
const providerCode = `import { Provider } from '@heliannuuthus/ui';

export function App() {
  return (
    <Provider appearance="system" direction="ltr">
      <YourProduct />
    </Provider>
  );
}`;

export const GettingStartedPage = () => {
  const locale = useDocsPageLocale();
  const common = resources[locale].common;
  const copy = pageCopy[locale];
  const guide = common.gettingStarted;
  const usageCode = `import { Button, Card } from '@heliannuuthus/ui';

export function Welcome() {
  return (
    <Card header={{ title: '${locale === 'zh' ? '准备就绪' : 'Ready to build'}' }}>
      <Button>${locale === 'zh' ? '创建项目' : 'Create project'}</Button>
    </Card>
  );
}`;
  const steps = [
    [
      '01',
      'installation',
      guide.installation,
      guide.installationDescription,
      PackagePlus,
    ],
    ['02', 'styles', guide.importStyles, guide.importStylesDescription, Code2],
    [
      '03',
      'provider',
      guide.configuration,
      guide.configurationDescription,
      SlidersHorizontal,
    ],
    ['04', 'usage', guide.usage, guide.usageDescription, Layers3],
  ] as const;

  return (
    <div className="docs-marketing-page docs-guide-page">
      <Typography.Title className="guide-visually-hidden-title">
        {guide.title}
      </Typography.Title>

      <div className="guide-steps">
        {steps.map(([number, id, title, description, Icon]) => (
          <section className="guide-step" id={id} key={id}>
            <div className="guide-step-marker">
              <span>{number}</span>
              <Icon aria-hidden="true" />
            </div>
            <div className="guide-step-content">
              <Typography.Title level={2}>{title}</Typography.Title>
              <Typography.Text as="p" size="lg" tone="muted">
                {description}
              </Typography.Text>
              <dl className="guide-step-explanation">
                <div>
                  <dt>{copy.explanationLabels.purpose}</dt>
                  <dd>{copy.stepExplanations[id].purpose}</dd>
                </div>
                <div>
                  <dt>{copy.explanationLabels.outcome}</dt>
                  <dd>{copy.stepExplanations[id].outcome}</dd>
                </div>
              </dl>
              {id === 'installation' ? (
                <InstallTabs
                  copiedLabel={common.actions.copied}
                  copyLabel={common.actions.copy}
                />
              ) : null}
              {id === 'styles' ? (
                <>
                  <CodePanel
                    code={styleCode}
                    copiedLabel={common.actions.copied}
                    copyLabel={common.actions.copy}
                    title="main.tsx"
                  />
                  <Typography.Text as="p" className="guide-note" size="sm">
                    {copy.styleNote}
                  </Typography.Text>
                </>
              ) : null}
              {id === 'provider' ? (
                <>
                  <CodePanel
                    code={providerCode}
                    copiedLabel={common.actions.copied}
                    copyLabel={common.actions.copy}
                    title="app.tsx"
                  />
                  <div className="guide-contract-grid">
                    {[
                      'appearance',
                      'direction',
                      'theme.colors',
                      'theme.darkColors',
                      'theme.radius',
                      'components',
                    ].map((property) => (
                      <Tag key={property}>{property}</Tag>
                    ))}
                  </div>
                  <Typography.Text as="p" className="guide-note" size="sm">
                    {copy.providerNote}
                  </Typography.Text>
                </>
              ) : null}
              {id === 'usage' ? (
                <>
                  <CodePanel
                    code={usageCode}
                    copiedLabel={common.actions.copied}
                    copyLabel={common.actions.copy}
                    title="welcome.tsx"
                  />
                  <Typography.Text as="p" className="guide-note" size="sm">
                    {copy.usageNote}
                  </Typography.Text>
                </>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      <section className="guide-next" id="next-step">
        <PageEyebrow>{copy.nextKicker}</PageEyebrow>
        <Typography.Title level={2}>{copy.nextTitle}</Typography.Title>
        <Typography.Text as="p" size="lg" tone="muted">
          {guide.nextDescription}
        </Typography.Text>
        <Stack align="center" gap={12} orientation="horizontal" wrap>
          <InternalButtonLink href={localPath(locale, '/components')} size="lg">
            {guide.nextTitle}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </InternalButtonLink>
          <InternalButtonLink
            href={localPath(locale, '/design')}
            size="lg"
            variant="outline"
          >
            {common.navigation.design}
          </InternalButtonLink>
        </Stack>
      </section>
    </div>
  );
};
