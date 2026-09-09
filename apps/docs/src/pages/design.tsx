import { Card, Separator, Stack, Tag, Typography } from '@heliannuuthus/ui';
import {
  ArrowRight,
  Box,
  CheckCircle2,
  CircleDashed,
  Layers3,
} from 'lucide-react';
import { resources } from '../i18n/resources';
import { InternalButtonLink } from '../../theme/internal-link';
import { localPath, useDocsPageLocale } from './page-locale';
import { PageEyebrow } from './shared';

const pageCopy = {
  zh: {
    kicker: '组件设计规则',
    manifesto: '相同的界面问题使用相同的组件和交互约定。',
    principleLabels: ['解释结构', '减少选择', '守住边界', '覆盖现实'],
    boundaryKicker: '职责边界',
    boundaryTitle: '组件库与业务项目分别负责什么',
    boundaryDescription: '先判断能力是否领域无关，再决定它应该放在哪一层。',
    sharedTitle: '公共 UI 层',
    sharedDescription: '维护领域无关的行为、样式和无障碍基础。',
    sharedItems: [
      '交互与键盘行为',
      '语义 Token',
      '状态与尺寸',
      '类型、事件与 ref',
    ],
    productTitle: '产品业务层',
    productDescription: '维护具体产品的数据、权限、路由和流程。',
    productItems: ['业务文案与数据', '权限和路由', '领域状态', '流程编排'],
    checklistKicker: '完成标准',
    checklistTitle: '合并公共组件前逐项检查',
    checklistItems: [
      '键盘和屏幕阅读器可用',
      '加载、空、错误、禁用状态明确',
      '长内容和窄容器不破坏布局',
      '受控与非受控边界清楚',
      'API 能向后兼容地生长',
    ],
    closing: '规则必须同时落实在实现、测试和文档中。',
    action: '查看组件目录',
  },
  en: {
    kicker: 'Component design rules',
    manifesto:
      'Use the same components and interaction conventions for the same interface problems.',
    principleLabels: [
      'Explain structure',
      'Reduce choices',
      'Protect boundaries',
      'Cover reality',
    ],
    boundaryKicker: 'Ownership',
    boundaryTitle: 'What belongs to the library and to product applications',
    boundaryDescription:
      'Decide whether a capability is domain-neutral before choosing its layer.',
    sharedTitle: 'Shared UI layer',
    sharedDescription:
      'Maintains domain-neutral behavior, styles, and accessibility.',
    sharedItems: [
      'Interaction and keyboard behavior',
      'Semantic tokens',
      'States and sizes',
      'Types, events, and refs',
    ],
    productTitle: 'Product layer',
    productDescription:
      'Maintains product data, permissions, routing, and flows.',
    productItems: [
      'Product copy and data',
      'Permissions and routing',
      'Domain state',
      'Workflow orchestration',
    ],
    checklistKicker: 'Definition of done',
    checklistTitle: 'Check each item before merging a shared component',
    checklistItems: [
      'Keyboard and screen-reader access works',
      'Loading, empty, error, and disabled states are explicit',
      'Long content and narrow containers remain sound',
      'Controlled and uncontrolled boundaries are clear',
      'The API can evolve compatibly',
    ],
    closing: 'Apply these rules in implementation, tests, and documentation.',
    action: 'Open the component catalog',
  },
} as const;

export const DesignPage = () => {
  const locale = useDocsPageLocale();
  const common = resources[locale].common;
  const design = common.design;
  const copy = pageCopy[locale];
  const principles = [
    [design.clarity, design.clarityDescription],
    [design.convention, design.conventionDescription],
    [design.composition, design.compositionDescription],
    [design.details, design.detailsDescription],
  ] as const;

  return (
    <div className="docs-marketing-page docs-design-page">
      <header className="design-hero">
        <PageEyebrow>{copy.kicker}</PageEyebrow>
        <Typography.Title>{design.title}</Typography.Title>
        <Typography.Text as="p" className="design-manifesto" size="xl">
          {copy.manifesto}
        </Typography.Text>
        <Typography.Text as="p" size="lg" tone="muted">
          {design.description}
        </Typography.Text>
      </header>

      <section className="design-principles" aria-label={design.title}>
        {principles.map(([title, description], index) => (
          <article
            className="design-principle"
            id={`principle-${index + 1}`}
            key={title}
          >
            <div className="design-principle-index">0{index + 1}</div>
            <div>
              <Tag type={index === 0 ? 'primary' : 'default'}>
                {copy.principleLabels[index]}
              </Tag>
              <Typography.Title level={2}>{title}</Typography.Title>
              <Typography.Text as="p" size="lg" tone="muted">
                {description}
              </Typography.Text>
            </div>
          </article>
        ))}
      </section>

      <section
        className="docs-page-section design-boundary"
        aria-labelledby="boundary-title"
      >
        <div className="docs-section-heading">
          <PageEyebrow>{copy.boundaryKicker}</PageEyebrow>
          <Typography.Title id="boundary-title" level={2}>
            {copy.boundaryTitle}
          </Typography.Title>
          <Typography.Text as="p" size="lg" tone="muted">
            {copy.boundaryDescription}
          </Typography.Text>
        </div>
        <div className="design-boundary-map">
          <Card className="design-boundary-card" variant="outline">
            <Box aria-hidden="true" />
            <Typography.Title level={3}>{copy.sharedTitle}</Typography.Title>
            <Typography.Text as="p" tone="muted">
              {copy.sharedDescription}
            </Typography.Text>
            <Separator />
            <ul>
              {copy.sharedItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <div className="design-boundary-divider" aria-hidden="true">
            <span>API</span>
            <CircleDashed />
          </div>
          <Card className="design-boundary-card" variant="outline">
            <Layers3 aria-hidden="true" />
            <Typography.Title level={3}>{copy.productTitle}</Typography.Title>
            <Typography.Text as="p" tone="muted">
              {copy.productDescription}
            </Typography.Text>
            <Separator />
            <ul>
              {copy.productItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="design-checklist" aria-labelledby="checklist-title">
        <div>
          <PageEyebrow>{copy.checklistKicker}</PageEyebrow>
          <Typography.Title id="checklist-title" level={2}>
            {copy.checklistTitle}
          </Typography.Title>
        </div>
        <ol>
          {copy.checklistItems.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <Typography.Text as="span">{item}</Typography.Text>
            </li>
          ))}
        </ol>
      </section>

      <section className="design-closing">
        <Typography.Title level={2}>{copy.closing}</Typography.Title>
        <Stack align="center" gap={12} orientation="horizontal" wrap>
          <InternalButtonLink href={localPath(locale, '/components')} size="lg">
            {copy.action}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </InternalButtonLink>
          <InternalButtonLink
            href={localPath(locale, '/docs/getting-started')}
            size="lg"
            variant="outline"
          >
            {common.navigation.gettingStarted}
          </InternalButtonLink>
        </Stack>
      </section>
    </div>
  );
};
