import {
  Button,
  Card,
  Checkbox,
  Input,
  Stack,
  Tag,
  Typography,
} from '@heliannuuthus/ui';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Component,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import { componentCatalog } from '../component-catalog';
import { resources } from '../i18n/resources';
import { InternalButtonLink } from '../../theme/internal-link';
import { localPath, useDocsPageLocale } from './page-locale';
import { InstallTabs, PageEyebrow } from './shared';

const pageCopy = {
  zh: {
    eyebrow: 'REACT 19 · 公共组件系统',
    getStarted: '开始接入',
    browse: '浏览组件',
    install: '选择你的包管理器',
    live: '真实组件，不是静态示意图',
    previewTitle: '新建工作区',
    previewDescription: '这块界面完全由公共组件组合而成。',
    workspace: '工作区名称',
    option: '启用严格的无障碍检查',
    cancel: '取消',
    create: '创建工作区',
    proofLabel: '组件系统基线',
    principlesEyebrow: 'SYSTEM CHARACTER',
    principlesTitle: '一套让产品长期保持清楚的界面语言',
    principlesDescription:
      '我们不替业务决定语义，只把通用交互、状态和表达做到稳定、可预测。',
    catalogEyebrow: 'COMPONENT CATALOG',
    catalogTitle: '从一个可靠的基础开始组合',
    catalogDescription:
      '每个组件都有真实示例、完整 API、无障碍说明和使用边界。',
    catalogAction: '查看全部组件',
    closingTitle: '先解决界面一致性，再把注意力还给产品。',
    closingDescription: '安装一次样式，从包根入口组合你需要的能力。',
  },
  en: {
    eyebrow: 'REACT 19 · SHARED COMPONENT SYSTEM',
    getStarted: 'Get started',
    browse: 'Browse components',
    install: 'Choose your package manager',
    live: 'Real components, not a static mockup',
    previewTitle: 'Create workspace',
    previewDescription:
      'This surface is composed entirely from public components.',
    workspace: 'Workspace name',
    option: 'Enable strict accessibility checks',
    cancel: 'Cancel',
    create: 'Create workspace',
    proofLabel: 'Component system baseline',
    principlesEyebrow: 'SYSTEM CHARACTER',
    principlesTitle:
      'A shared interface language that stays clear as products grow',
    principlesDescription:
      'We leave product semantics to product teams and make shared interactions, states, and expression dependable.',
    catalogEyebrow: 'COMPONENT CATALOG',
    catalogTitle: 'Compose from a dependable foundation',
    catalogDescription:
      'Every component includes real examples, a complete API, accessibility notes, and clear usage boundaries.',
    catalogAction: 'View all components',
    closingTitle:
      'Solve interface consistency, then return attention to the product.',
    closingDescription:
      'Import one stylesheet and compose capabilities from the package root.',
  },
} as const;

const principleIcons = [CheckCircle2, Layers3, Braces, ShieldCheck] as const;

export const HomePage = () => {
  const locale = useDocsPageLocale();
  const common = resources[locale].common;
  const home = common.home;
  const copy = pageCopy[locale];
  const principles = [
    [home.clarity, home.clarityDescription],
    [home.consistency, home.consistencyDescription],
    [home.composable, home.composableDescription],
    [home.evolvable, home.evolvableDescription],
  ] as const;

  return (
    <div className="docs-marketing-page docs-home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <PageEyebrow>{copy.eyebrow}</PageEyebrow>
          <Typography.Title id="home-title">{home.title}</Typography.Title>
          <Typography.Text
            as="p"
            className="home-hero-description"
            size="xl"
            tone="muted"
          >
            {home.description}
          </Typography.Text>
          <Stack align="center" gap={12} orientation="horizontal" wrap>
            <InternalButtonLink
              href={localPath(locale, '/docs/getting-started')}
              size="lg"
            >
              {copy.getStarted}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </InternalButtonLink>
            <InternalButtonLink
              href={localPath(locale, '/components')}
              size="lg"
              variant="outline"
            >
              {copy.browse}
            </InternalButtonLink>
          </Stack>
          <div className="home-install">
            <Typography.Text as="p" size="sm" tone="muted">
              {copy.install}
            </Typography.Text>
            <InstallTabs
              copiedLabel={common.actions.copied}
              copyLabel={common.actions.copy}
            />
          </div>
        </div>

        <div className="home-preview-frame">
          <div className="home-preview-caption">
            <span className="home-preview-status" aria-hidden="true" />
            <Typography.Text as="span" size="sm" weight="medium">
              {copy.live}
            </Typography.Text>
          </div>
          <Card
            className="home-preview-card"
            header={{
              title: copy.previewTitle,
              description: copy.previewDescription,
              action: <Tag type="success">Live</Tag>,
            }}
            footer={
              <Stack
                align="center"
                block
                gap={8}
                justify="end"
                orientation="horizontal"
              >
                <Button variant="ghost">{copy.cancel}</Button>
                <Button>{copy.create}</Button>
              </Stack>
            }
            variant="outline"
          >
            <Stack block gap={20}>
              <label
                className="home-preview-field"
                htmlFor="home-workspace-name"
              >
                <Typography.Text as="span" size="sm" weight="medium">
                  {copy.workspace}
                </Typography.Text>
                <Input
                  defaultValue="Heliannuuthus UI"
                  id="home-workspace-name"
                />
              </label>
              <Checkbox defaultChecked>{copy.option}</Checkbox>
            </Stack>
          </Card>
          <div
            className="home-preview-orbit home-preview-orbit--one"
            aria-hidden="true"
          />
          <div
            className="home-preview-orbit home-preview-orbit--two"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="home-proof" aria-label={copy.proofLabel}>
        <div>
          <strong>{componentCatalog.length}</strong>
          <span>{home.baseComponents}</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>TypeScript</span>
        </div>
        <div>
          <strong>A11y</strong>
          <span>{home.accessibilityFirst}</span>
        </div>
        <div>
          <strong>Open</strong>
          <span>{home.openSource}</span>
        </div>
      </section>

      <section
        className="docs-page-section home-principles"
        aria-labelledby="principles-title"
      >
        <div className="docs-section-heading">
          <PageEyebrow>{copy.principlesEyebrow}</PageEyebrow>
          <Typography.Title id="principles-title" level={2}>
            {copy.principlesTitle}
          </Typography.Title>
          <Typography.Text as="p" size="lg" tone="muted">
            {copy.principlesDescription}
          </Typography.Text>
        </div>
        <div className="home-principle-grid">
          {principles.map(([title, description], index) => {
            const Icon = principleIcons[index];
            return (
              <Card
                className="home-principle-card"
                key={title}
                variant="outline"
              >
                <div className="home-principle-number">0{index + 1}</div>
                <Icon aria-hidden="true" />
                <Typography.Title level={3}>{title}</Typography.Title>
                <Typography.Text as="p" tone="muted">
                  {description}
                </Typography.Text>
              </Card>
            );
          })}
        </div>
      </section>

      <section
        className="docs-page-section home-catalog"
        aria-labelledby="catalog-title"
      >
        <div className="home-catalog-copy">
          <PageEyebrow>{copy.catalogEyebrow}</PageEyebrow>
          <Typography.Title id="catalog-title" level={2}>
            {copy.catalogTitle}
          </Typography.Title>
          <Typography.Text as="p" size="lg" tone="muted">
            {copy.catalogDescription}
          </Typography.Text>
          <InternalButtonLink
            href={localPath(locale, '/components')}
            variant="link"
          >
            {copy.catalogAction}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </InternalButtonLink>
        </div>
        <div className="home-catalog-map" aria-hidden="true">
          <div>
            <Component />
            <span>Button</span>
          </div>
          <div>
            <Layers3 />
            <span>Layout</span>
          </div>
          <div>
            <Braces />
            <span>Form</span>
          </div>
          <div>
            <ShieldCheck />
            <span>Dialog</span>
          </div>
          <span className="catalog-map-line catalog-map-line--one" />
          <span className="catalog-map-line catalog-map-line--two" />
        </div>
      </section>

      <section className="home-closing" aria-labelledby="closing-title">
        <Typography.Title id="closing-title" level={2}>
          {copy.closingTitle}
        </Typography.Title>
        <Typography.Text as="p" size="lg" tone="muted">
          {copy.closingDescription}
        </Typography.Text>
        <InternalButtonLink
          href={localPath(locale, '/docs/getting-started')}
          size="lg"
        >
          {copy.getStarted}
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </InternalButtonLink>
      </section>
    </div>
  );
};
