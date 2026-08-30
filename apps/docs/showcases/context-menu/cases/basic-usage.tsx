import '@heliannuuthus/ui/styles.css';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { ContextMenu, type DropdownMenuEntry } from '@heliannuuthus/ui';
import { Archive, Copy, Link2, Trash2 } from 'lucide-react';
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

  const ContextMenuActionsDemo = () => {
    const [lastAction, setLastAction] = useState(copy('等待选择'));
    const items: DropdownMenuEntry[] = [
      { type: 'label', label: copy('页面操作') },
      {
        icon: <Copy />,
        label: copy('复制链接'),
        onSelect: () => setLastAction(copy('已选择：复制链接')),
        shortcut: '⌘C',
      },
      {
        disabled: true,
        icon: <Link2 />,
        label: copy('复制内部链接'),
      },
      { type: 'separator' },
      {
        icon: <Archive />,
        label: copy('归档'),
        onSelect: () => setLastAction(copy('已选择：归档')),
      },
      {
        destructive: true,
        icon: <Trash2 />,
        label: copy('删除页面'),
        onSelect: () => setLastAction(copy('已选择：删除页面')),
      },
    ];

    return (
      <div className="context-menu-demo-stack">
        <ContextMenu
          items={items}
          trigger={
            <ContextMenuTarget
              detail={copy('设计系统 / 菜单规范')}
              title={copy('组件文档')}
            />
          }
        />
        <p aria-live="polite" className="data-result">
          {lastAction}
        </p>
      </div>
    );
  };

  return ContextMenuActionsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ContextMenuCase01({
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
