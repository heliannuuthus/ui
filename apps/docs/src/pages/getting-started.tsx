import { Button, Card, Stack, Tag, Typography } from '@heliannuuthus/ui';
import {
  ArrowRight,
  Check,
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
    intro: '从安装到第一个可运行界面，只需要完成下面 4 个明确步骤。',
    requirements: '开始之前',
    requirementItems: [
      'React 19',
      '支持 ESM 的构建工具',
      '应用入口可导入全局 CSS',
    ],
    styleNote: '样式只导入一次。组件模块不会在运行时隐式注入 CSS。',
    providerNote:
      'Provider 管理外观、书写方向、语义 Token 和组件默认值；业务状态仍留在业务层。',
    usageNote: '所有公共组件都从包根入口导入。组件子路径是私有实现细节。',
    nextKicker: 'READY TO BUILD',
    nextTitle: '接入完成。现在从真实组件开始。',
  },
  en: {
    intro: 'Move from installation to a working interface in 4 explicit steps.',
    requirements: 'Before you begin',
    requirementItems: [
      'React 19',
      'An ESM-aware build tool',
      'A global CSS import at the app entry',
    ],
    styleNote:
      'Import styles once. Component modules never inject CSS implicitly at runtime.',
    providerNote:
      'Provider manages appearance, direction, semantic tokens, and component defaults. Product state stays in the product layer.',
    usageNote:
      'Import every public component from the package root. Component subpaths are private.',
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
      <header className="guide-hero">
        <div>
          <PageEyebrow>{guide.kicker}</PageEyebrow>
          <Typography.Title>{guide.title}</Typography.Title>
          <Typography.Text
            as="p"
            className="guide-hero-description"
            size="xl"
            tone="muted"
          >
            {copy.intro}
          </Typography.Text>
        </div>
        <Card className="guide-requirements" variant="outline">
          <Typography.Title level={2}>{copy.requirements}</Typography.Title>
          <ul>
            {copy.requirementItems.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </header>

      <nav
        className="guide-index"
        aria-label={locale === 'zh' ? '接入步骤' : 'Integration steps'}
      >
        {steps.map(([number, id, title]) => (
          <Button href={`#${id}`} key={id} size="sm" variant="ghost">
            <span>{number}</span>
            {title}
          </Button>
        ))}
      </nav>

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
