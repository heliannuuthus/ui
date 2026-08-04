import { docsCopy } from './i18n/content';
import { useState, type ReactNode } from 'react';
import { Menubar } from '@heliannuuthus/ui';
import {
  Archive,
  FileCode2,
  FilePlus2,
  FileText,
  FolderOpen,
  Image,
  Monitor,
  RotateCcw,
  Save,
  Trash2,
} from 'lucide-react';

const DemoWindow = ({
  title,
  status,
  children,
}: {
  title: string;
  status: string;
  children: ReactNode;
}) => {
  return (
    <div className="menubar-demo-window">
      <div className="menubar-demo-chrome">
        <div className="menubar-demo-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <strong>{title}</strong>
        <small>Heliannuuthus UI</small>
      </div>
      {children}
      <div className="menubar-demo-status">
        <span>{status}</span>
        <span>{docsCopy('组件文档 · 本地预览')}</span>
      </div>
    </div>
  );
};

export const MenubarCommandsDemo = () => {
  const [status, setStatus] = useState(docsCopy('文档已保存'));

  return (
    <DemoWindow title={docsCopy('Menubar 组件文档')} status={status}>
      <Menubar
        className="menubar-demo-control"
        menus={[
          {
            label: docsCopy('文件'),
            items: [
              { type: 'label', label: docsCopy('文档') },
              {
                label: docsCopy('新建文档'),
                icon: <FilePlus2 />,
                shortcut: '⌘N',
                onSelect: () => setStatus(docsCopy('已新建空白文档')),
              },
              {
                label: docsCopy('打开文件'),
                icon: <FolderOpen />,
                shortcut: '⌘O',
                onSelect: () => setStatus(docsCopy('正在打开文件')),
              },
              {
                label: docsCopy('保存'),
                icon: <Save />,
                shortcut: '⌘S',
                onSelect: () => setStatus(docsCopy('文档已保存')),
              },
              { type: 'separator' },
              {
                label: docsCopy('移至废纸篓'),
                icon: <Trash2 />,
                destructive: true,
                onSelect: () => setStatus(docsCopy('已移至废纸篓')),
              },
            ],
          },
          {
            label: docsCopy('编辑'),
            items: [
              {
                label: docsCopy('撤销'),
                icon: <RotateCcw />,
                shortcut: '⌘Z',
                onSelect: () => setStatus(docsCopy('已撤销上一步')),
              },
              { label: docsCopy('重做'), shortcut: '⇧⌘Z', disabled: true },
            ],
          },
          {
            label: docsCopy('视图'),
            items: [
              { label: docsCopy('显示侧栏'), shortcut: '⌘B' },
              { label: docsCopy('进入全屏'), shortcut: '⌃⌘F' },
            ],
          },
          {
            label: docsCopy('帮助'),
            items: [
              { label: docsCopy('命令面板'), shortcut: '⇧⌘P' },
              { label: docsCopy('键盘快捷键'), shortcut: '⌘K ⌘S' },
            ],
          },
        ]}
      />
      <div className="menubar-demo-workspace">
        <aside className="menubar-demo-sidebar">
          <span>{docsCopy('资源管理器')}</span>
          <strong>HELIANNUUTHUS UI</strong>
          <div className="active">
            <FileText />
            menubar.mdx
          </div>
          <div>
            <FileCode2 />
            menubar.tsx
          </div>
          <div>
            <FolderOpen />
            components
          </div>
        </aside>
        <main className="menubar-demo-editor">
          <div className="menubar-demo-tabs">
            <FileText />
            menubar.mdx
          </div>
          <article className="menubar-demo-document">
            <span>COMPONENT GUIDELINE</span>
            <h4>Menubar</h4>
            <p>
              {docsCopy(
                '将跨内容生效的应用命令放在稳定的顶层位置，并为高频命令提供快捷键。'
              )}
            </p>
          </article>
        </main>
      </div>
    </DemoWindow>
  );
};

export const MenubarViewDemo = () => {
  const [sidebar, setSidebar] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(true);
  const [theme, setTheme] = useState('system');

  return (
    <DemoWindow
      title={docsCopy('界面偏好设置')}
      status={`${sidebar ? docsCopy('侧栏开启') : docsCopy('侧栏关闭')} · ${theme === 'system' ? docsCopy('跟随系统') : theme === 'light' ? docsCopy('浅色') : docsCopy('深色')}`}
    >
      <Menubar
        className="menubar-demo-control"
        menus={[
          {
            label: docsCopy('视图'),
            items: [
              { type: 'label', label: docsCopy('布局') },
              {
                type: 'checkbox',
                label: docsCopy('显示侧栏'),
                checked: sidebar,
                onChange: setSidebar,
              },
              {
                type: 'checkbox',
                label: docsCopy('显示行号'),
                checked: lineNumbers,
                onChange: setLineNumbers,
              },
              { type: 'separator' },
              { type: 'label', label: docsCopy('主题') },
              {
                type: 'radio',
                value: theme,
                onChange: setTheme,
                items: [
                  { label: docsCopy('跟随系统'), value: 'system' },
                  { label: docsCopy('浅色'), value: 'light' },
                  { label: docsCopy('深色'), value: 'dark' },
                ],
              },
            ],
          },
        ]}
      />
      <div className="menubar-demo-workspace">
        {sidebar && (
          <aside className="menubar-demo-sidebar menubar-demo-outline">
            <span>{docsCopy('文档大纲')}</span>
            <div className="active">{docsCopy('设计目标')}</div>
            <div>{docsCopy('组件结构')}</div>
            <div>{docsCopy('无障碍')}</div>
          </aside>
        )}
        <main className="menubar-demo-editor">
          <div className="menubar-demo-tabs">
            <Monitor />
            preview.tsx
          </div>
          <div className="menubar-demo-code">
            <div>
              {lineNumbers && <span>16</span>}
              <code>{'export const MenubarPreview = () => {'}</code>
            </div>
            <div className="active">
              {lineNumbers && <span>17</span>}
              <code>{'  return <Menubar menus={menus} />'}</code>
            </div>
            <div>
              {lineNumbers && <span>18</span>}
              <code>{'}'}</code>
            </div>
          </div>
        </main>
      </div>
    </DemoWindow>
  );
};

export const MenubarNestedDemo = () => {
  const [status, setStatus] = useState(docsCopy('选择组件文档或导出格式'));

  return (
    <DemoWindow title={docsCopy('组件发布工作台')} status={status}>
      <Menubar
        size="lg"
        className="menubar-demo-control"
        menus={[
          {
            label: docsCopy('组件'),
            items: [
              {
                label: docsCopy('最近编辑'),
                icon: <FolderOpen />,
                children: [
                  {
                    label: 'Menubar',
                    icon: <FileCode2 />,
                    onSelect: () => setStatus(docsCopy('已打开 Menubar 文档')),
                  },
                  {
                    label: 'Navigation Menu',
                    icon: <FileText />,
                    onSelect: () =>
                      setStatus(docsCopy('已打开 Navigation Menu 文档')),
                  },
                ],
              },
              {
                label: docsCopy('归档草稿'),
                icon: <Archive />,
                onSelect: () => setStatus(docsCopy('文档草稿已归档')),
              },
            ],
          },
          {
            label: docsCopy('导出'),
            items: [
              {
                label: docsCopy('导出为'),
                children: [
                  {
                    label: docsCopy('PDF 文档'),
                    icon: <FileText />,
                    onSelect: () => setStatus(docsCopy('已导出 PDF')),
                  },
                  {
                    label: docsCopy('PNG 图片'),
                    icon: <Image />,
                    onSelect: () => setStatus(docsCopy('已导出 PNG')),
                  },
                ],
              },
            ],
          },
          { label: docsCopy('发布'), disabled: true, items: [] },
        ]}
      />
      <div className="menubar-demo-workspace menubar-demo-project">
        <aside className="menubar-demo-sidebar">
          <span>{docsCopy('最近组件')}</span>
          <div className="active">
            <FileCode2 />
            Menubar
          </div>
          <div>
            <FileText />
            Navigation Menu
          </div>
        </aside>
        <main className="menubar-demo-editor">
          <div className="menubar-demo-project-card">
            <Archive />
            <div>
              <span>{docsCopy('当前组件')}</span>
              <strong>Menubar</strong>
              <p>
                {docsCopy(
                  '通过二级菜单切换组件文档，或导出当前组件的规范说明。'
                )}
              </p>
            </div>
          </div>
          <div className="menubar-demo-project-meta">
            <span>{docsCopy('3 个示例')}</span>
            <span>{docsCopy('文档草稿')}</span>
            <span>{docsCopy('发布暂不可用')}</span>
          </div>
        </main>
      </div>
    </DemoWindow>
  );
};
