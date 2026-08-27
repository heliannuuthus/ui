import { Button, Command, Kbd } from '@heliannuuthus/ui';
import { useLocation, useNavigate } from '@rspress/core/runtime';
import { ArrowRight, Box, Search as SearchIcon, SearchX } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  componentGroups,
  componentSlug,
  localizedComponentName,
} from '../src/component-catalog';
import { componentSearchMetadata } from '../src/component-metadata';

const groupNames = {
  actions: { en: 'Actions and menus', zh: '操作与菜单' },
  content: { en: 'Content', zh: '内容展示' },
  dataDisplay: { en: 'Data display', zh: '数据展示' },
  feedback: { en: 'Feedback', zh: '反馈' },
  forms: { en: 'Forms', zh: '表单' },
  general: { en: 'General', zh: '通用' },
  layout: { en: 'Layout', zh: '布局' },
  navigation: { en: 'Navigation', zh: '导航' },
  overlays: { en: 'Overlays', zh: '浮层' },
} as const;

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const locale = location.pathname.startsWith('/en') ? 'en' : 'zh';

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectComponent = (slug: string) => {
    setOpen(false);
    void navigate(`/${locale}/components/${slug}`);
  };

  return (
    <>
      <Button
        aria-label={locale === 'zh' ? '搜索组件' : 'Search components'}
        className="docs-search-trigger"
        onClick={() => setOpen(true)}
        size="sm"
        variant="outline"
      >
        <SearchIcon aria-hidden="true" />
        <span>{locale === 'zh' ? '搜索组件' : 'Search components'}</span>
        <Kbd>
          {typeof navigator !== 'undefined' &&
          navigator.platform.includes('Mac')
            ? '⌘ K'
            : 'Ctrl K'}
        </Kbd>
      </Button>
      <Command
        className="docs-component-command"
        dialog={{
          closable: false,
          description:
            locale === 'zh'
              ? '搜索并打开 Heliannuuthus UI 组件文档'
              : 'Search and open Heliannuuthus UI component documentation',
          onOpenChange: setOpen,
          open,
          title: locale === 'zh' ? '搜索组件' : 'Search components',
        }}
        emptyText={
          <span className="docs-search-empty">
            <SearchX aria-hidden="true" />
            {locale === 'zh' ? '没有匹配的组件' : 'No matching components'}
          </span>
        }
        groups={componentGroups.map((group) => ({
          heading: groupNames[group.key][locale],
          options: group.items.map((item) => {
            const slug = componentSlug(item);
            const [summary, zhAliases, enAliases] =
              componentSearchMetadata[slug];

            return {
              icon: <Box aria-hidden="true" />,
              keywords: [
                item,
                localizedComponentName(item, locale),
                groupNames[group.key][locale],
                summary,
                ...(locale === 'zh' ? zhAliases : enAliases),
              ],
              label: (
                <span className="docs-search-result">
                  <strong>{localizedComponentName(item, locale)}</strong>
                  <small>{locale === 'en' ? summary : item}</small>
                </span>
              ),
              onSelect: () => selectComponent(slug),
              shortcut: <ArrowRight aria-hidden="true" />,
              value: slug,
            };
          }),
        }))}
        placeholder={
          locale === 'zh' ? '搜索组件名称或用途…' : 'Search components…'
        }
      />
    </>
  );
};
