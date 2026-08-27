import '@heliannuuthus/ui/styles.css';
import { useState, type ReactNode } from 'react';
import { Menubar } from '@heliannuuthus/ui';
import { Archive, FileCode2, FileText, FolderOpen, Image } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

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
          <span>{copy('组件文档 · 本地预览')}</span>
        </div>
      </div>
    );
  };

  const MenubarNestedDemo = () => {
    const [status, setStatus] = useState(copy('选择组件文档或导出格式'));

    return (
      <DemoWindow title={copy('组件发布工作台')} status={status}>
        <Menubar
          size="lg"
          className="menubar-demo-control"
          menus={[
            {
              label: copy('组件'),
              items: [
                {
                  label: copy('最近编辑'),
                  icon: <FolderOpen />,
                  children: [
                    {
                      label: 'Menubar',
                      icon: <FileCode2 />,
                      onSelect: () => setStatus(copy('已打开 Menubar 文档')),
                    },
                    {
                      label: 'Navigation Menu',
                      icon: <FileText />,
                      onSelect: () =>
                        setStatus(copy('已打开 Navigation Menu 文档')),
                    },
                  ],
                },
                {
                  label: copy('归档草稿'),
                  icon: <Archive />,
                  onSelect: () => setStatus(copy('文档草稿已归档')),
                },
              ],
            },
            {
              label: copy('导出'),
              items: [
                {
                  label: copy('导出为'),
                  children: [
                    {
                      label: copy('PDF 文档'),
                      icon: <FileText />,
                      onSelect: () => setStatus(copy('已导出 PDF')),
                    },
                    {
                      label: copy('PNG 图片'),
                      icon: <Image />,
                      onSelect: () => setStatus(copy('已导出 PNG')),
                    },
                  ],
                },
              ],
            },
            { label: copy('发布'), disabled: true, items: [] },
          ]}
        />
        <div className="menubar-demo-workspace menubar-demo-project">
          <aside className="menubar-demo-sidebar">
            <span>{copy('最近组件')}</span>
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
                <span>{copy('当前组件')}</span>
                <strong>Menubar</strong>
                <p>
                  {copy('通过二级菜单切换组件文档，或导出当前组件的规范说明。')}
                </p>
              </div>
            </div>
            <div className="menubar-demo-project-meta">
              <span>{copy('3 个示例')}</span>
              <span>{copy('文档草稿')}</span>
              <span>{copy('发布暂不可用')}</span>
            </div>
          </main>
        </div>
      </DemoWindow>
    );
  };

  return MenubarNestedDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function MenubarCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-menubar">
      <Example />
    </div>
  );
}
