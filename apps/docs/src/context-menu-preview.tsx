import { docsCopy } from './i18n/content';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { ContextMenu, type DropdownMenuEntry } from '@heliannuuthus/ui';
import {
  Archive,
  Copy,
  FileImage,
  FileSpreadsheet,
  FileText,
  Link2,
  Share2,
  Trash2,
} from 'lucide-react';

type ContextMenuTargetProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
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
        {docsCopy(disabled ? '右键菜单已禁用' : '单击右键或按菜单键')}
      </small>
    </div>
  )
);

export const ContextMenuActionsDemo = () => {
  const [lastAction, setLastAction] = useState(docsCopy('等待选择'));
  const items: DropdownMenuEntry[] = [
    { type: 'label', label: docsCopy('页面操作') },
    {
      icon: <Copy />,
      label: docsCopy('复制链接'),
      onSelect: () => setLastAction(docsCopy('已选择：复制链接')),
      shortcut: '⌘C',
    },
    {
      disabled: true,
      icon: <Link2 />,
      label: docsCopy('复制内部链接'),
    },
    { type: 'separator' },
    {
      icon: <Archive />,
      label: docsCopy('归档'),
      onSelect: () => setLastAction(docsCopy('已选择：归档')),
    },
    {
      destructive: true,
      icon: <Trash2 />,
      label: docsCopy('删除页面'),
      onSelect: () => setLastAction(docsCopy('已选择：删除页面')),
    },
  ];

  return (
    <div className="context-menu-demo-stack">
      <ContextMenu
        items={items}
        trigger={
          <ContextMenuTarget
            detail={docsCopy('设计系统 / 菜单规范')}
            title={docsCopy('组件文档')}
          />
        }
      />
      <p aria-live="polite" className="data-result">
        {lastAction}
      </p>
    </div>
  );
};

export const ContextMenuSelectionDemo = () => {
  const [showComments, setShowComments] = useState(true);
  const [access, setAccess] = useState('team');
  const accessLabel =
    access === 'private' ? docsCopy('仅自己') : docsCopy('团队成员');

  return (
    <ContextMenu
      items={[
        { type: 'label', label: docsCopy('显示内容') },
        {
          checked: showComments,
          label: docsCopy('显示评论'),
          onChange: setShowComments,
          type: 'checkbox',
        },
        { type: 'separator' },
        { type: 'label', label: docsCopy('访问范围') },
        {
          items: [
            { label: docsCopy('仅自己'), value: 'private' },
            { label: docsCopy('团队成员'), value: 'team' },
          ],
          onChange: setAccess,
          type: 'radio',
          value: access,
        },
      ]}
      trigger={
        <ContextMenuTarget
          detail={docsCopy(
            `${showComments ? '显示评论' : '隐藏评论'} · ${accessLabel}`
          )}
          title={docsCopy('页面可见性')}
        />
      }
    />
  );
};

export const ContextMenuSubmenuDemo = () => {
  const [lastAction, setLastAction] = useState(docsCopy('尚未选择格式'));

  return (
    <div className="context-menu-demo-stack">
      <ContextMenu
        items={[
          {
            children: [
              {
                icon: <FileText />,
                label: docsCopy('PDF 文档'),
                onSelect: () => setLastAction(docsCopy('已选择：PDF 文档')),
              },
              {
                icon: <FileImage />,
                label: docsCopy('PNG 图片'),
                onSelect: () => setLastAction(docsCopy('已选择：PNG 图片')),
              },
              {
                icon: <FileSpreadsheet />,
                label: docsCopy('CSV 表格'),
                onSelect: () => setLastAction(docsCopy('已选择：CSV 表格')),
              },
            ],
            icon: <Share2 />,
            label: docsCopy('导出为'),
          },
          { type: 'separator' },
          {
            icon: <Copy />,
            label: docsCopy('复制链接'),
            onSelect: () => setLastAction(docsCopy('已选择：复制链接')),
          },
        ]}
        trigger={
          <ContextMenuTarget
            detail={docsCopy('季度复盘.pdf')}
            title={docsCopy('文件预览')}
          />
        }
      />
      <p aria-live="polite" className="data-result">
        {lastAction}
      </p>
    </div>
  );
};

export const ContextMenuStateDemo = ({
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
      items={[{ label: docsCopy('查看详情') }]}
      trigger={
        <ContextMenuTarget
          detail={
            mode === 'controlled'
              ? docsCopy(open ? '菜单已打开' : '菜单已关闭')
              : docsCopy(disabled ? '不可打开' : '等待右键操作')
          }
          disabled={disabled}
          title={docsCopy(
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
