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

function DemoWindow({
  title,
  status,
  children,
}: {
  title: string;
  status: string;
  children: ReactNode;
}) {
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
        <span>组件文档 · 本地预览</span>
      </div>
    </div>
  );
}

export function MenubarCommandsDemo() {
  const [status, setStatus] = useState('文档已保存');

  return (
    <DemoWindow title="Menubar 组件文档" status={status}>
      <Menubar
        className="menubar-demo-control"
        menus={[
          {
            label: '文件',
            items: [
              { type: 'label', label: '文档' },
              {
                label: '新建文档',
                icon: <FilePlus2 />,
                shortcut: '⌘N',
                onSelect: () => setStatus('已新建空白文档'),
              },
              {
                label: '打开文件',
                icon: <FolderOpen />,
                shortcut: '⌘O',
                onSelect: () => setStatus('正在打开文件'),
              },
              {
                label: '保存',
                icon: <Save />,
                shortcut: '⌘S',
                onSelect: () => setStatus('文档已保存'),
              },
              { type: 'separator' },
              {
                label: '移至废纸篓',
                icon: <Trash2 />,
                destructive: true,
                onSelect: () => setStatus('已移至废纸篓'),
              },
            ],
          },
          {
            label: '编辑',
            items: [
              {
                label: '撤销',
                icon: <RotateCcw />,
                shortcut: '⌘Z',
                onSelect: () => setStatus('已撤销上一步'),
              },
              { label: '重做', shortcut: '⇧⌘Z', disabled: true },
            ],
          },
          {
            label: '视图',
            items: [
              { label: '显示侧栏', shortcut: '⌘B' },
              { label: '进入全屏', shortcut: '⌃⌘F' },
            ],
          },
          {
            label: '帮助',
            items: [
              { label: '命令面板', shortcut: '⇧⌘P' },
              { label: '键盘快捷键', shortcut: '⌘K ⌘S' },
            ],
          },
        ]}
      />
      <div className="menubar-demo-workspace">
        <aside className="menubar-demo-sidebar">
          <span>资源管理器</span>
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
              将跨内容生效的应用命令放在稳定的顶层位置，并为高频命令提供快捷键。
            </p>
          </article>
        </main>
      </div>
    </DemoWindow>
  );
}

export function MenubarViewDemo() {
  const [sidebar, setSidebar] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(true);
  const [theme, setTheme] = useState('system');

  return (
    <DemoWindow
      title="界面偏好设置"
      status={`${sidebar ? '侧栏开启' : '侧栏关闭'} · ${theme === 'system' ? '跟随系统' : theme === 'light' ? '浅色' : '深色'}`}
    >
      <Menubar
        className="menubar-demo-control"
        menus={[
          {
            label: '视图',
            items: [
              { type: 'label', label: '布局' },
              {
                type: 'checkbox',
                label: '显示侧栏',
                checked: sidebar,
                onCheckedChange: setSidebar,
              },
              {
                type: 'checkbox',
                label: '显示行号',
                checked: lineNumbers,
                onCheckedChange: setLineNumbers,
              },
              { type: 'separator' },
              { type: 'label', label: '主题' },
              {
                type: 'radio',
                value: theme,
                onValueChange: setTheme,
                items: [
                  { label: '跟随系统', value: 'system' },
                  { label: '浅色', value: 'light' },
                  { label: '深色', value: 'dark' },
                ],
              },
            ],
          },
        ]}
      />
      <div className="menubar-demo-workspace">
        {sidebar && (
          <aside className="menubar-demo-sidebar menubar-demo-outline">
            <span>文档大纲</span>
            <div className="active">设计目标</div>
            <div>组件结构</div>
            <div>无障碍</div>
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
              <code>{'export function MenubarPreview() {'}</code>
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
}

export function MenubarNestedDemo() {
  const [status, setStatus] = useState('选择组件文档或导出格式');

  return (
    <DemoWindow title="组件发布工作台" status={status}>
      <Menubar
        size="lg"
        className="menubar-demo-control"
        menus={[
          {
            label: '组件',
            items: [
              {
                label: '最近编辑',
                icon: <FolderOpen />,
                children: [
                  {
                    label: 'Menubar',
                    icon: <FileCode2 />,
                    onSelect: () => setStatus('已打开 Menubar 文档'),
                  },
                  {
                    label: 'Navigation Menu',
                    icon: <FileText />,
                    onSelect: () => setStatus('已打开 Navigation Menu 文档'),
                  },
                ],
              },
              {
                label: '归档草稿',
                icon: <Archive />,
                onSelect: () => setStatus('文档草稿已归档'),
              },
            ],
          },
          {
            label: '导出',
            items: [
              {
                label: '导出为',
                children: [
                  {
                    label: 'PDF 文档',
                    icon: <FileText />,
                    onSelect: () => setStatus('已导出 PDF'),
                  },
                  {
                    label: 'PNG 图片',
                    icon: <Image />,
                    onSelect: () => setStatus('已导出 PNG'),
                  },
                ],
              },
            ],
          },
          { label: '发布', disabled: true, items: [] },
        ]}
      />
      <div className="menubar-demo-workspace menubar-demo-project">
        <aside className="menubar-demo-sidebar">
          <span>最近组件</span>
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
              <span>当前组件</span>
              <strong>Menubar</strong>
              <p>通过二级菜单切换组件文档，或导出当前组件的规范说明。</p>
            </div>
          </div>
          <div className="menubar-demo-project-meta">
            <span>3 个示例</span>
            <span>文档草稿</span>
            <span>发布暂不可用</span>
          </div>
        </main>
      </div>
    </DemoWindow>
  );
}
