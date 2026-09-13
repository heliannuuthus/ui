import { Card, Separator, Stack, Typography } from '@heliannuuthus/ui';
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
    introduction:
      '这份规则用于设计、实现和评审公共组件。遇到新需求时，先确认它是否属于共享能力，再检查 API、状态和文档是否完整。',
    principlesTitle: '设计和评审时看这四件事',
    principlesDescription:
      '每条规则都对应一个常见的决策。不需要全凭审美判断，先看结构、约定、边界和真实使用状态。',
    principleGuidance: [
      {
        doLabel: '应当',
        doText: '用标题层级、间距和语义状态说明关系。',
        avoidLabel: '避免',
        avoidText: '不要靠颜色、阴影或动效掩盖结构不清。',
      },
      {
        doLabel: '应当',
        doText: '相同操作保持同名、同位置和同一类反馈。',
        avoidLabel: '避免',
        avoidText: '没有明确收益时，不增加新变体或另一套命名。',
      },
      {
        doLabel: '应当',
        doText: '组件处理通用行为、样式、类型和无障碍。',
        avoidLabel: '避免',
        avoidText: '不把业务数据、权限、路由或流程下沉到公共包。',
      },
      {
        doLabel: '应当',
        doText: '同时检查键盘、窄屏、长文本和各类数据状态。',
        avoidLabel: '避免',
        avoidText: '不只用一个正常案例证明组件已经完成。',
      },
    ],
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
    introduction:
      'Use these rules when designing, implementing, and reviewing shared components. For each new request, first decide whether it is a shared capability, then verify its API, states, and documentation.',
    principlesTitle: 'Review four things before approving a component',
    principlesDescription:
      'Each rule answers a recurring decision. Start with structure, conventions, ownership, and real usage states instead of relying on taste alone.',
    principleGuidance: [
      {
        doLabel: 'Do',
        doText:
          'Use heading hierarchy, spacing, and semantic states to explain relationships.',
        avoidLabel: 'Avoid',
        avoidText:
          'Do not use color, shadow, or motion to hide unclear structure.',
      },
      {
        doLabel: 'Do',
        doText:
          'Keep the same name, position, and feedback for the same action.',
        avoidLabel: 'Avoid',
        avoidText:
          'Do not add another variant or term without a concrete benefit.',
      },
      {
        doLabel: 'Do',
        doText:
          'Keep reusable behavior, styles, types, and accessibility in the library.',
        avoidLabel: 'Avoid',
        avoidText:
          'Do not move product data, permissions, routing, or flows into the shared package.',
      },
      {
        doLabel: 'Do',
        doText:
          'Check keyboard use, narrow screens, long text, and every data state.',
        avoidLabel: 'Avoid',
        avoidText:
          'Do not call a component complete after testing only its happy path.',
      },
    ],
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
        <PageEyebrow>{design.title}</PageEyebrow>
        <Typography.Title>{copy.kicker}</Typography.Title>
        <Typography.Text as="p" className="design-manifesto" size="xl">
          {copy.manifesto}
        </Typography.Text>
        <Typography.Text as="p" className="design-introduction" tone="muted">
          {copy.introduction}
        </Typography.Text>
      </header>

      <section
        className="docs-page-section design-boundary"
        aria-labelledby="boundary-title"
      >
        <div className="docs-section-heading">
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

      <section
        className="docs-page-section design-principles-section"
        aria-labelledby="principles-title"
      >
        <div className="docs-section-heading">
          <Typography.Title id="principles-title" level={2}>
            {copy.principlesTitle}
          </Typography.Title>
          <Typography.Text as="p" tone="muted">
            {copy.principlesDescription}
          </Typography.Text>
        </div>
        <div className="design-principles">
          {principles.map(([title, description], index) => {
            const guidance = copy.principleGuidance[index];

            return (
              <article
                className="design-principle"
                id={`principle-${index + 1}`}
                key={title}
              >
                <div className="design-principle-heading">
                  <Typography.Title level={3}>{title}</Typography.Title>
                  <Typography.Text as="p" tone="muted">
                    {description}
                  </Typography.Text>
                </div>
                <dl className="design-principle-guidance">
                  <div>
                    <dt>{guidance.doLabel}</dt>
                    <dd>{guidance.doText}</dd>
                  </div>
                  <div>
                    <dt>{guidance.avoidLabel}</dt>
                    <dd>{guidance.avoidText}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section className="design-checklist" aria-labelledby="checklist-title">
        <div>
          <Typography.Title id="checklist-title" level={2}>
            {copy.checklistTitle}
          </Typography.Title>
        </div>
        <ul>
          {copy.checklistItems.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" />
              <Typography.Text as="span">{item}</Typography.Text>
            </li>
          ))}
        </ul>
      </section>

      <section className="design-closing">
        <Typography.Text as="p" size="lg" weight="semibold">
          {copy.closing}
        </Typography.Text>
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
