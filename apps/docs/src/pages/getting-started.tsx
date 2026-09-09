import { Tag, Typography } from '@heliannuuthus/ui';
import { Code2, Layers3, PackagePlus, SlidersHorizontal } from 'lucide-react';
import { resources } from '../i18n/resources';
import { useDocsPageLocale } from './page-locale';
import { CodePanel, InstallTabs } from './shared';

const pageCopy = {
  zh: {
    styleNote: '样式只导入一次。组件模块不会在运行时隐式注入 CSS。',
    providerNote: '组件上显式传入的属性会覆盖 Provider 中的默认值。',
    usageNote: '所有公共组件都从包根入口导入。组件子路径是私有实现细节。',
  },
  en: {
    styleNote:
      'Import styles once. Component modules never inject CSS implicitly at runtime.',
    providerNote:
      'Props passed directly to a component override Provider defaults.',
    usageNote:
      'Import every public component from the package root. Component subpaths are private.',
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
    </div>
  );
};
