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
    kicker: 'FOUNDATION / 04 PRINCIPLES',
    manifesto:
      '设计系统的价值，不是让所有页面长得一样，而是让相同的问题不必反复解决。',
    principleLabels: ['解释结构', '减少选择', '守住边界', '覆盖现实'],
    boundaryKicker: 'OWNERSHIP MODEL',
    boundaryTitle: '共享能力与产品语义必须有清楚边界',
    boundaryDescription: '边界越清楚，公共组件越稳定，业务表达也越自由。',
    sharedTitle: '公共 UI 层',
    sharedDescription: '负责可复用的行为、视觉语法和无障碍基础。',
    sharedItems: [
      '交互与键盘行为',
      '语义 Token',
      '状态与尺寸',
      '类型、事件与 ref',
    ],
    productTitle: '产品业务层',
    productDescription: '负责特定产品真正想表达和完成的事情。',
    productItems: ['业务文案与数据', '权限和路由', '领域状态', '流程编排'],
    checklistKicker: 'DEFINITION OF DONE',
    checklistTitle: '一个组件值得共享之前',
    checklistItems: [
      '键盘和屏幕阅读器可用',
      '加载、空、错误、禁用状态明确',
      '长内容和窄容器不破坏布局',
      '受控与非受控边界清楚',
      'API 能向后兼容地生长',
    ],
    closing: '这些原则最终都要在组件代码和文档里被看见。',
    action: '查看组件如何落地',
  },
  en: {
    kicker: 'FOUNDATION / 04 PRINCIPLES',
    manifesto:
      'A design system does not make every page look the same. It prevents teams from solving the same problem repeatedly.',
    principleLabels: [
      'Explain structure',
      'Reduce choices',
      'Protect boundaries',
      'Cover reality',
    ],
    boundaryKicker: 'OWNERSHIP MODEL',
    boundaryTitle:
      'Shared capability and product meaning need a clear boundary',
    boundaryDescription:
      'Clear ownership makes shared components more stable and product expression more flexible.',
    sharedTitle: 'Shared UI layer',
    sharedDescription:
      'Owns reusable behavior, visual grammar, and accessibility foundations.',
    sharedItems: [
      'Interaction and keyboard behavior',
      'Semantic tokens',
      'States and sizes',
      'Types, events, and refs',
    ],
    productTitle: 'Product layer',
    productDescription:
      'Owns what a specific product needs to express and accomplish.',
    productItems: [
      'Product copy and data',
      'Permissions and routing',
      'Domain state',
      'Workflow orchestration',
    ],
    checklistKicker: 'DEFINITION OF DONE',
    checklistTitle: 'Before a component deserves to be shared',
    checklistItems: [
      'Keyboard and screen-reader access works',
      'Loading, empty, error, and disabled states are explicit',
      'Long content and narrow containers remain sound',
      'Controlled and uncontrolled boundaries are clear',
      'The API can evolve compatibly',
    ],
    closing:
      'These principles must be visible in both component code and documentation.',
    action: 'See the principles in components',
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
