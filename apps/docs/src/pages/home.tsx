import {
  Button,
  Card,
  Checkbox,
  Collapsible,
  Input,
  Stack,
  Tag,
  Typography,
} from '@heliannuuthus/ui';
import { ArrowRight } from 'lucide-react';
import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { componentCatalog } from '../component-catalog';
import { handbookSections } from '../handbook-navigation';
import { resources } from '../i18n/resources';
import { InternalButtonLink } from '../../theme/internal-link';
import { TableOfContents, type TocItem } from '../../theme/table-of-contents';
import { useActiveToc } from '../../theme/use-active-toc';
import { localPath, useDocsPageLocale } from './page-locale';
import { InstallTabs, PageEyebrow } from './shared';

const pageCopy = {
  zh: {
    eyebrow: 'React 19 · @heliannuuthus/ui',
    getStarted: '快速开始',
    install: '选择你的包管理器',
    live: '可交互预览',
    previewTitle: '新建工作区',
    previewDescription: 'Card、Input、Checkbox 与 Button 的组合示例。',
    workspace: '工作区名称',
    option: '启用严格的无障碍检查',
    cancel: '取消',
    create: '创建工作区',
    proofLabel: '项目基线',
    chaptersTitle: '使用指南',
    chaptersDescription: '按需导入、样式、主题与交互实践，可以在这里连续阅读。',
    contentsTitle: '本页内容',
    closingTitle: '快速开始',
    closingDescription: '导入一次样式，再从包根入口选择组件。',
  },
  en: {
    eyebrow: 'React 19 · @heliannuuthus/ui',
    getStarted: 'Get started',
    install: 'Choose your package manager',
    live: 'Interactive preview',
    previewTitle: 'Create workspace',
    previewDescription: 'A composition of Card, Input, Checkbox, and Button.',
    workspace: 'Workspace name',
    option: 'Enable strict accessibility checks',
    cancel: 'Cancel',
    create: 'Create workspace',
    proofLabel: 'Project baseline',
    chaptersTitle: 'Guides',
    chaptersDescription:
      'Read through imports, styling, themes, and interaction guidance below.',
    contentsTitle: 'On this page',
    closingTitle: 'Get started',
    closingDescription:
      'Import the stylesheet once, then choose components from the package root.',
  },
} as const;

export const HomePage = ({ children }: { children: ReactNode }) => {
  const locale = useDocsPageLocale();
  const common = resources[locale].common;
  const home = common.home;
  const copy = pageCopy[locale];
  const fallbackContents = useMemo(
    () =>
      handbookSections.flatMap((section) =>
        section.items
          .filter((item) => item.slug !== 'getting-started')
          .map((item) => ({
            id: item.slug,
            text: item.labels[locale],
            depth: 2,
          }))
      ),
    [locale]
  );
  const contentRef = useRef<HTMLDivElement>(null);
  const [sectionContents, setSectionContents] = useState<TocItem[] | null>(
    null
  );
  const contents = sectionContents ?? fallbackContents;

  useLayoutEffect(() => {
    const headings = contentRef.current?.querySelectorAll<HTMLElement>(
      '.home-handbook-chapter h3[id], .home-handbook-chapter h4[id]'
    );
    if (!headings) return;
    setSectionContents(
      Array.from(headings, (heading) => {
        const isChapter = heading.tagName === 'H3';
        return {
          id: isChapter
            ? heading.closest<HTMLElement>('.home-handbook-chapter')!.id
            : heading.id,
          text: heading.textContent?.trim() ?? '',
          depth: isChapter ? 2 : 3,
        };
      })
    );
  }, [locale]);

  const activeTocId = useActiveToc(contents);
  const [contentsOpen, setContentsOpen] = useState(false);

  return (
    <div className="docs-marketing-page docs-home-page">
      <div className="home-intro">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-inner">
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
              </Stack>
              <div className="home-install">
                <Typography.Text as="p" size="sm" tone="muted">
                  {copy.install}
                </Typography.Text>
                <InstallTabs
                  codeToolsLabel={common.demo.codeTools}
                  copiedLabel={common.actions.copied}
                  copyLabel={common.actions.copy}
                  unwrapLabel={common.demo.unwrapCode}
                  wrapLabel={common.demo.wrapCode}
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
            </div>
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
      </div>

      <section
        className="docs-page-section home-handbook"
        aria-labelledby="guides-title"
        id="guides"
      >
        <div className="home-handbook-inner">
          <div className="home-handbook-content" ref={contentRef}>
            <div className="docs-section-heading">
              <Typography.Title id="guides-title" level={2}>
                {copy.chaptersTitle}
              </Typography.Title>
              <Typography.Text as="p" tone="muted">
                {copy.chaptersDescription}
              </Typography.Text>
            </div>
            <Collapsible
              className="home-mobile-toc"
              content={
                <TableOfContents
                  activeId={activeTocId}
                  items={contents}
                  locale={locale}
                  onNavigate={() => setContentsOpen(false)}
                />
              }
              header={copy.contentsTitle}
              onOpenChange={setContentsOpen}
              open={contentsOpen}
              trigger={{ variant: 'ghost' }}
            />
            {children}
          </div>
          <aside className="home-toc">
            <TableOfContents
              activeId={activeTocId}
              items={contents}
              locale={locale}
            />
          </aside>
        </div>
      </section>

      <section className="home-closing" aria-labelledby="closing-title">
        <div className="home-closing-copy">
          <Typography.Title id="closing-title" level={2}>
            {copy.closingTitle}
          </Typography.Title>
          <Typography.Text as="p" size="lg" tone="muted">
            {copy.closingDescription}
          </Typography.Text>
        </div>
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
