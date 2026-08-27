import { Button, Card, Input, Tag, Typography } from '@heliannuuthus/ui';
import { Link } from '@rspress/core/theme-original';
import { ArrowUpRight, Boxes, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  componentCatalog,
  componentGroups,
  componentSlug,
  localizedComponentName,
} from '../component-catalog';
import { componentSearchMetadata } from '../component-metadata';
import { resources } from '../i18n/resources';
import { localPath, useDocsPageLocale } from './page-locale';
import { PageEyebrow } from './shared';

const copy = {
  zh: {
    eyebrow: 'PUBLIC CATALOG · 组件能力地图',
    title: '组件总览',
    description:
      '按界面职责浏览全部公共组件。每个入口都包含真实示例、完整 API、无障碍约束和明确的使用边界。',
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
    keywordLabel: '适用场景',
  },
  en: {
    eyebrow: 'PUBLIC CATALOG · CAPABILITY MAP',
    title: 'Component overview',
    description:
      'Browse every public component by interface responsibility. Each entry includes real examples, a complete API, accessibility constraints, and clear usage boundaries.',
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
    keywordLabel: 'Use cases',
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
            {visibleGroups.map((group, groupIndex) => (
              <section
                className="components-group"
                id={`catalog-${group.key}`}
                key={group.key}
              >
                <header className="components-group-heading">
                  <span>0{groupIndex + 1}</span>
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
                    const [summary, zhAliases, enAliases] =
                      componentSearchMetadata[slug];
                    const keywords = locale === 'zh' ? zhAliases : enAliases;
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
                          {locale === 'en' ? (
                            <Typography.Text as="p" tone="muted">
                              {summary}
                            </Typography.Text>
                          ) : (
                            <div
                              aria-label={pageCopy.keywordLabel}
                              className="component-catalog-keywords"
                            >
                              {keywords.slice(0, 4).map((keyword) => (
                                <Tag key={keyword}>{keyword}</Tag>
                              ))}
                            </div>
                          )}
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
