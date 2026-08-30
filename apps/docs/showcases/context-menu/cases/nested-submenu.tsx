import '@heliannuuthus/ui/styles.css';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { ContextMenu } from '@heliannuuthus/ui';
import {
  Copy,
  FileImage,
  FileSpreadsheet,
  FileText,
  Share2,
} from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type ContextMenuTargetProps = Omit<
    ComponentPropsWithoutRef<'div'>,
    'title'
  > & {
    detail: string;
    disabled?: boolean;
    title: string;
  };

  const ContextMenuTarget = forwardRef<HTMLDivElement, ContextMenuTargetProps>(
    ({ className, detail, disabled = false, title, ...props }, ref) => (
      <div
        {...props}
        aria-label={title}
        className={`context-menu-demo-target${className ? ` ${className}` : ''}`}
        data-disabled={disabled || undefined}
        ref={ref}
        tabIndex={0}
      >
        <span>{title}</span>
        <strong>{detail}</strong>
        <small>
          {copy(disabled ? '右键菜单已禁用' : '单击右键或按菜单键')}
        </small>
      </div>
    )
  );

  const ContextMenuSubmenuDemo = () => {
    const [lastAction, setLastAction] = useState(copy('尚未选择格式'));

    return (
      <div className="context-menu-demo-stack">
        <ContextMenu
          items={[
            {
              children: [
                {
                  icon: <FileText />,
                  label: copy('PDF 文档'),
                  onSelect: () => setLastAction(copy('已选择：PDF 文档')),
                },
                {
                  icon: <FileImage />,
                  label: copy('PNG 图片'),
                  onSelect: () => setLastAction(copy('已选择：PNG 图片')),
                },
                {
                  icon: <FileSpreadsheet />,
                  label: copy('CSV 表格'),
                  onSelect: () => setLastAction(copy('已选择：CSV 表格')),
                },
              ],
              icon: <Share2 />,
              label: copy('导出为'),
            },
            { type: 'separator' },
            {
              icon: <Copy />,
              label: copy('复制链接'),
              onSelect: () => setLastAction(copy('已选择：复制链接')),
            },
          ]}
          trigger={
            <ContextMenuTarget
              detail={copy('季度复盘.pdf')}
              title={copy('文件预览')}
            />
          }
        />
        <p aria-live="polite" className="data-result">
          {lastAction}
        </p>
      </div>
    );
  };

  return ContextMenuSubmenuDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ContextMenuCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-context-menu">
      <Example />
    </div>
  );
}
