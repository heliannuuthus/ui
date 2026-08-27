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

  const ContextMenuStateDemo = ({
    mode,
  }: {
    mode: 'controlled' | 'disabled' | 'uncontrolled';
  }) => {
    const [open, setOpen] = useState(false);
    const disabled = mode === 'disabled';
    const stateProps =
      mode === 'controlled'
        ? { onOpenChange: setOpen, open }
        : { defaultOpen: false };

    return (
      <ContextMenu
        {...stateProps}
        disabled={disabled}
        items={[{ label: copy('查看详情') }]}
        trigger={
          <ContextMenuTarget
            detail={
              mode === 'controlled'
                ? copy(open ? '菜单已打开' : '菜单已关闭')
                : copy(disabled ? '不可打开' : '等待右键操作')
            }
            disabled={disabled}
            title={copy(
              mode === 'controlled'
                ? '受控对象'
                : disabled
                  ? '禁用对象'
                  : '非受控对象'
            )}
          />
        }
      />
    );
  };

  return ContextMenuStateDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ContextMenuCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-context-menu">
      <Example mode="controlled" />
    </div>
  );
}
