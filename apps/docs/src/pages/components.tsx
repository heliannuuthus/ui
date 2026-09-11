import { Button, Card, Input, Tag, Typography } from '@heliannuuthus/ui';
import { Link } from '@rspress/core/theme-original';
import { ArrowUpRight, Boxes, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  componentCatalog,
  componentGroups,
  componentSlug,
  localizedComponentName,
  type ComponentSlug,
} from '../component-catalog';
import { componentSearchMetadata } from '../component-metadata';
import { resources } from '../i18n/resources';
import { localPath, useDocsPageLocale } from './page-locale';
import { PageEyebrow } from './shared';

const copy = {
  zh: {
    eyebrow: '公共组件',
    title: '组件总览',
    description:
      '按用途浏览组件。每个页面包含运行示例、属性表、键盘行为和使用说明。',
    countLabel: '公共组件',
    groupLabel: '能力分组',
    runtimeLabel: '运行基线',
    searchLabel: '搜索全部组件',
    searchPlaceholder: '搜索名称、用途或关键词…',
    clear: '清除搜索',
    match: (count: number) => `${count} 个匹配组件`,
    emptyTitle: '没有找到匹配的组件',
    emptyDescription: '换一个名称或用途试试，或者清除搜索查看完整目录。',
    open: '查看组件',
  },
  en: {
    eyebrow: 'Public components',
    title: 'Component overview',
    description:
      'Browse components by purpose. Each page includes live examples, prop tables, keyboard behavior, and usage notes.',
    countLabel: 'public components',
    groupLabel: 'capability groups',
    runtimeLabel: 'runtime baseline',
    searchLabel: 'Search all components',
    searchPlaceholder: 'Search by name, purpose, or keyword…',
    clear: 'Clear search',
    match: (count: number) => `${count} matching components`,
    emptyTitle: 'No matching components',
    emptyDescription:
      'Try another name or purpose, or clear the search to see the full catalog.',
    open: 'View component',
  },
} as const;

const groupDescriptions = {
  general: {
    zh: '形成界面语言最常用的基础表达。',
    en: 'The foundational expressions used across an interface.',
  },
  layout: {
    zh: '组织页面区域、内容尺寸与空间关系。',
    en: 'Organize page regions, content sizing, and spatial relationships.',
  },
  navigation: {
    zh: '帮助用户理解位置并在内容间移动。',
    en: 'Help people understand location and move between content.',
  },
  forms: {
    zh: '采集、校验并提交结构化输入。',
    en: 'Collect, validate, and submit structured input.',
  },
  actions: {
    zh: '承载即时操作、命令与上下文选择。',
    en: 'Present immediate actions, commands, and contextual choices.',
  },
  content: {
    zh: '以稳定结构呈现对象、媒体与层级内容。',
    en: 'Present objects, media, and hierarchical content in stable structures.',
  },
  dataDisplay: {
    zh: '让数字、状态与结构化数据易于扫描。',
    en: 'Make numbers, status, and structured data easy to scan.',
  },
  overlays: {
    zh: '在当前上下文上承载聚焦任务与补充信息。',
    en: 'Layer focused tasks and supplementary information over context.',
  },
  feedback: {
    zh: '清楚传达进度、结果、风险与系统状态。',
    en: 'Communicate progress, outcomes, risk, and system state clearly.',
  },
} as const;

const CatalogPreview = ({
  locale,
  slug,
}: {
  locale: 'zh' | 'en';
  slug: ComponentSlug;
}) => {
  const save = locale === 'zh' ? '保存' : 'Save';
  const choose = locale === 'zh' ? '请选择' : 'Select';

  const preview = (() => {
    switch (slug) {
      case 'button':
        return (
          <>
            <b>{save}</b>
            <i aria-hidden="true">＋</i>
          </>
        );
      case 'typography':
        return (
          <>
            <strong>Aa</strong>
            <span />
            <span />
            <span />
          </>
        );
      case 'tag':
        return (
          <>
            <em>React</em>
            <em>UI</em>
            <em>TypeScript</em>
          </>
        );
      case 'kbd':
        return (
          <>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </>
        );
      case 'aspect-ratio':
        return (
          <div className="preview-ratio">
            <span>16:9</span>
          </div>
        );
      case 'card':
        return (
          <div className="preview-card">
            <span />
            <span />
            <b>{save}</b>
          </div>
        );
      case 'layout':
        return (
          <div className="preview-layout">
            <i />
            <span />
            <span />
          </div>
        );
      case 'masonry':
        return (
          <div className="preview-masonry">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
        );
      case 'resizable':
        return (
          <div className="preview-split">
            <span />
            <i>⋮</i>
            <span />
          </div>
        );
      case 'scroll-area':
        return (
          <div className="preview-scroll">
            <span />
            <span />
            <span />
            <span />
            <i />
          </div>
        );
      case 'separator':
        return (
          <div className="preview-separator">
            <span />
            <i />
            <span />
          </div>
        );
      case 'stack':
        return (
          <div className="preview-stack">
            <span />
            <span />
            <span />
          </div>
        );
      case 'breadcrumb':
        return (
          <div className="preview-breadcrumb">
            <span>Docs</span>
            <i>/</i>
            <b>Button</b>
          </div>
        );
      case 'navigation-menu':
        return (
          <div className="preview-nav">
            <b>Docs</b>
            <span>Design</span>
            <span>Components</span>
          </div>
        );
      case 'pagination':
        return (
          <div className="preview-pages">
            <span>‹</span>
            <b>1</b>
            <span>2</span>
            <span>3</span>
            <span>›</span>
          </div>
        );
      case 'segmented':
        return (
          <div className="preview-segmented">
            <b>List</b>
            <span>Grid</span>
            <span>Board</span>
          </div>
        );
      case 'tabs':
        return (
          <div className="preview-tabs">
            <b>Preview</b>
            <span>Code</span>
            <i />
          </div>
        );
      case 'form':
        return (
          <div className="preview-form">
            <small>Email</small>
            <span />
            <small>Password</small>
            <span />
            <b>{save}</b>
          </div>
        );
      case 'input':
        return (
          <div className="preview-input">
            <span>name@example.com</span>
            <i />
          </div>
        );
      case 'input-number':
        return (
          <div className="preview-number">
            <i>−</i>
            <span>12</span>
            <i>＋</i>
          </div>
        );
      case 'date-picker':
        return (
          <div className="preview-date">
            <b>12</b>
            <span>Sep</span>
            <i>⌄</i>
          </div>
        );
      case 'select':
        return (
          <div className="preview-select">
            <span>{choose}</span>
            <i>⌄</i>
          </div>
        );
      case 'checkbox':
        return (
          <div className="preview-options">
            <b>✓</b>
            <span>Option</span>
            <i />
            <span>Option</span>
          </div>
        );
      case 'radio':
        return (
          <div className="preview-options preview-options--radio">
            <b />
            <span>A</span>
            <i />
            <span>B</span>
          </div>
        );
      case 'slider':
        return (
          <div className="preview-slider">
            <span />
            <i />
          </div>
        );
      case 'switch':
        return (
          <div className="preview-switch">
            <i />
          </div>
        );
      case 'dropdown-menu':
      case 'context-menu':
        return (
          <div className="preview-menu">
            <span />
            <b />
            <span />
            <i />
          </div>
        );
      case 'menubar':
        return (
          <div className="preview-menubar">
            <b>File</b>
            <span>Edit</span>
            <span>View</span>
          </div>
        );
      case 'command':
        return (
          <div className="preview-command">
            <span>⌘</span>
            <i />
            <b>↵</b>
          </div>
        );
      case 'toggle':
        return (
          <div className="preview-toggle">
            <b>B</b>
            <span>I</span>
            <span>U</span>
          </div>
        );
      case 'accordion':
      case 'collapsible':
        return (
          <div className="preview-disclosure">
            <b>
              <span />⌃
            </b>
            <i />
            <b>
              <span />⌄
            </b>
          </div>
        );
      case 'attachment':
        return (
          <div className="preview-attachment">
            <b>↗</b>
            <span>
              <i />
              report.pdf
            </span>
          </div>
        );
      case 'avatar':
        return (
          <div className="preview-avatars">
            <b>H</b>
            <span>U</span>
            <i>＋</i>
          </div>
        );
      case 'bubble':
        return (
          <div className="preview-bubble">
            <span />
            <b>Hello</b>
            <i />
          </div>
        );
      case 'carousel':
        return (
          <div className="preview-carousel">
            <span />
            <b />
            <span />
            <i>•••</i>
          </div>
        );
      case 'empty':
        return (
          <div className="preview-empty">
            <b>□</b>
            <span />
            <i />
          </div>
        );
      case 'item':
        return (
          <div className="preview-item">
            <b />
            <span>
              <i />
              <i />
            </span>
            <em>›</em>
          </div>
        );
      case 'marker':
        return (
          <div className="preview-marker">
            <span />
            <b>●</b>
            <i />
          </div>
        );
      case 'badge':
        return (
          <div className="preview-badge">
            <span>Inbox</span>
            <b>4</b>
          </div>
        );
      case 'counter':
        return (
          <div className="preview-counter">
            <b>128</b>
            <span>requests</span>
          </div>
        );
      case 'table':
        return (
          <div className="preview-table">
            {Array.from({ length: 9 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
        );
      case 'dialog':
      case 'alert-dialog':
        return (
          <div className="preview-modal">
            <span />
            <div>
              <b />
              <i />
              <em />
            </div>
          </div>
        );
      case 'drawer':
        return (
          <div className="preview-drawer">
            <span />
            <div>
              <b />
              <i />
              <i />
            </div>
          </div>
        );
      case 'popover':
      case 'tooltip':
        return (
          <div className={`preview-popover preview-popover--${slug}`}>
            <span />
            <b>{slug === 'tooltip' ? 'Tooltip' : 'Details'}</b>
            <i />
          </div>
        );
      case 'alert':
        return (
          <div className="preview-alert">
            <b>!</b>
            <span>
              <i />
              <i />
            </span>
          </div>
        );
      case 'progress':
        return (
          <div className="preview-progress">
            <span />
            <b>64%</b>
          </div>
        );
      case 'skeleton':
        return (
          <div className="preview-skeleton">
            <b />
            <span>
              <i />
              <i />
            </span>
          </div>
        );
      case 'sonner':
      case 'toast':
        return (
          <div className="preview-toast">
            <b>✓</b>
            <span>
              <i />
              <i />
            </span>
          </div>
        );
      case 'spinner':
        return <div className="preview-spinner" />;
    }
  })();

  return (
    <div aria-hidden="true" className="component-catalog-preview">
      {preview}
    </div>
  );
};

export const ComponentsPage = () => {
  const locale = useDocsPageLocale();
  const pageCopy = copy[locale];
  const common = resources[locale].common;
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const visibleGroups = useMemo(
    () =>
      componentGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((name) => {
            if (!normalizedQuery) return true;
            const slug = componentSlug(name);
            const [summary, zhAliases, enAliases] =
              componentSearchMetadata[slug];
            return [
              name,
              localizedComponentName(name, locale),
              summary,
              ...zhAliases,
              ...enAliases,
            ]
              .join(' ')
              .toLocaleLowerCase()
              .includes(normalizedQuery);
          }),
        }))
        .filter((group) => group.items.length > 0),
    [locale, normalizedQuery]
  );

  const visibleCount = visibleGroups.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <div className="docs-marketing-page docs-components-page">
      <section className="components-hero" aria-labelledby="components-title">
        <div className="components-hero-copy">
          <PageEyebrow>{pageCopy.eyebrow}</PageEyebrow>
          <Typography.Title id="components-title">
            {pageCopy.title}
          </Typography.Title>
          <Typography.Text as="p" size="xl" tone="muted">
            {pageCopy.description}
          </Typography.Text>
        </div>
        <dl className="components-stats">
          <div>
            <dt>{pageCopy.countLabel}</dt>
            <dd>{componentCatalog.length}</dd>
          </div>
          <div>
            <dt>{pageCopy.groupLabel}</dt>
            <dd>{componentGroups.length}</dd>
          </div>
          <div>
            <dt>{pageCopy.runtimeLabel}</dt>
            <dd>React 19</dd>
          </div>
        </dl>
      </section>

      <section className="components-browser" aria-label={pageCopy.title}>
        <div className="components-search-row">
          <label className="components-search-field">
            <Typography.Text as="span" className="sr-only">
              {pageCopy.searchLabel}
            </Typography.Text>
            <Search aria-hidden="true" />
            <Input
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder={pageCopy.searchPlaceholder}
              value={query}
            />
          </label>
          {query ? (
            <Button onClick={() => setQuery('')} size="sm" variant="ghost">
              <X aria-hidden="true" />
              {pageCopy.clear}
            </Button>
          ) : null}
          <Typography.Text as="p" size="sm" tone="muted">
            {pageCopy.match(visibleCount)}
          </Typography.Text>
        </div>

        {visibleGroups.length === 0 ? (
          <div className="components-empty">
            <Boxes aria-hidden="true" />
            <Typography.Title level={2}>{pageCopy.emptyTitle}</Typography.Title>
            <Typography.Text as="p" tone="muted">
              {pageCopy.emptyDescription}
            </Typography.Text>
            <Button onClick={() => setQuery('')} variant="outline">
              {pageCopy.clear}
            </Button>
          </div>
        ) : (
          <div className="components-groups">
            {visibleGroups.map((group) => (
              <section
                className="components-group"
                id={`catalog-${group.key}`}
                key={group.key}
              >
                <header className="components-group-heading">
                  <div>
                    <Typography.Title level={2}>
                      {common.groups[group.key]}
                    </Typography.Title>
                    <Typography.Text as="p" tone="muted">
                      {groupDescriptions[group.key][locale]}
                    </Typography.Text>
                  </div>
                  <Tag>
                    {common.components.count.replace(
                      '{{count}}',
                      String(group.items.length)
                    )}
                  </Tag>
                </header>

                <div className="components-card-grid">
                  {group.items.map((name) => {
                    const slug = componentSlug(name);
                    const displayName = localizedComponentName(name, locale);
                    return (
                      <Link
                        aria-label={`${pageCopy.open}: ${displayName}`}
                        className="component-catalog-link"
                        href={localPath(locale, `/components/${slug}`)}
                        key={name}
                      >
                        <Card
                          className="component-catalog-card"
                          variant="outline"
                        >
                          <CatalogPreview locale={locale} slug={slug} />
                          <div className="component-catalog-title">
                            <div>
                              <Typography.Title level={3}>
                                {displayName}
                              </Typography.Title>
                              <Typography.Text as="span" size="sm" tone="muted">
                                {locale === 'zh' ? name : slug}
                              </Typography.Text>
                            </div>
                            <ArrowUpRight aria-hidden="true" />
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
