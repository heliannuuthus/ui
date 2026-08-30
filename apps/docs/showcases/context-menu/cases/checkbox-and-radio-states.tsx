import '@heliannuuthus/ui/styles.css';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { ContextMenu } from '@heliannuuthus/ui';
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

  const ContextMenuSelectionDemo = () => {
    const [showComments, setShowComments] = useState(true);
    const [access, setAccess] = useState('team');
    const accessLabel =
      access === 'private' ? copy('仅自己') : copy('团队成员');

    return (
      <ContextMenu
        items={[
          { type: 'label', label: copy('显示内容') },
          {
            checked: showComments,
            label: copy('显示评论'),
            onChange: setShowComments,
            type: 'checkbox',
          },
          { type: 'separator' },
          { type: 'label', label: copy('访问范围') },
          {
            items: [
              { label: copy('仅自己'), value: 'private' },
              { label: copy('团队成员'), value: 'team' },
            ],
            onChange: setAccess,
            type: 'radio',
            value: access,
          },
        ]}
        trigger={
          <ContextMenuTarget
            detail={copy(
              `${showComments ? '显示评论' : '隐藏评论'} · ${accessLabel}`
            )}
            title={copy('页面可见性')}
          />
        }
      />
    );
  };

  return ContextMenuSelectionDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ContextMenuCase02({
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
