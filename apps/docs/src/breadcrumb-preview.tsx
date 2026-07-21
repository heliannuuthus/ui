'use client';

import { useState } from 'react';
import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import { Box, Folder, Package, Settings } from 'lucide-react';

type PlaygroundOptionProps = {
  checked: boolean;
  description: string;
  label: string;
  onChange: (checked: boolean) => void;
};

function PlaygroundOption({
  checked,
  description,
  label,
  onChange,
}: PlaygroundOptionProps) {
  return (
    <Checkbox
      checked={checked}
      className="breadcrumb-playground-option"
      onChange={onChange}
    >
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
    </Checkbox>
  );
}

const workspaceItems = [
  { label: '首页', href: '#' },
  { label: '产品', href: '#' },
  { label: '设计系统', href: '#' },
  { label: '组件库', href: '#' },
  {
    label: '导航',
    icon: <Folder />,
    menu: [
      { label: 'Breadcrumb', icon: <Box />, onSelect: () => undefined },
      {
        label: 'Navigation Menu',
        icon: <Package />,
        onSelect: () => undefined,
      },
      { label: '导航设置', icon: <Settings />, onSelect: () => undefined },
    ],
  },
  { label: 'Breadcrumb' },
];

export function BreadcrumbPlaygroundDemo() {
  const [homeIcon, setHomeIcon] = useState(true);
  const [pill, setPill] = useState(false);
  const [large, setLarge] = useState(false);
  const [dotSeparator, setDotSeparator] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const enabledCount = [homeIcon, pill, large, dotSeparator, collapse].filter(
    Boolean
  ).length;

  return (
    <div className="breadcrumb-playground">
      <aside className="breadcrumb-playground-controls">
        <header>
          <div>
            <span>实时配置</span>
            <strong>面包屑样式</strong>
          </div>
          <small>{enabledCount} / 5</small>
        </header>
        <div className="breadcrumb-playground-options">
          <PlaygroundOption
            checked={homeIcon}
            label="首页图标"
            description="为第一级路径增加视觉锚点"
            onChange={setHomeIcon}
          />
          <PlaygroundOption
            checked={pill}
            label="胶囊样式"
            description="增强路径项的独立点击区域"
            onChange={setPill}
          />
          <PlaygroundOption
            checked={large}
            label="大号尺寸"
            description="适合空间充足的页面头部"
            onChange={setLarge}
          />
          <PlaygroundOption
            checked={dotSeparator}
            label="圆点分隔"
            description="切换为更轻量的分隔符"
            onChange={setDotSeparator}
          />
          <PlaygroundOption
            checked={collapse}
            label="折叠深层路径"
            description="把中间层级收进省略菜单"
            onChange={setCollapse}
          />
        </div>
      </aside>

      <section className="breadcrumb-page-window">
        <header className="breadcrumb-page-topbar">
          <div className="breadcrumb-page-brand">
            <span>H</span>
            <strong>Heliannuuthus</strong>
          </div>
          <div className="breadcrumb-page-avatar">UI</div>
        </header>
        <div className="breadcrumb-page-body">
          <aside className="breadcrumb-page-sidebar">
            <strong>设计系统</strong>
            <span>基础规范</span>
            <span className="active">组件库</span>
            <span>模式</span>
            <span>资源</span>
          </aside>
          <main className="breadcrumb-page-content">
            <Breadcrumb
              items={workspaceItems}
              homeIcon={homeIcon}
              variant={pill ? 'pill' : 'default'}
              size={large ? 'lg' : 'default'}
              separator={dotSeparator ? 'dot' : 'chevron'}
              maxItems={collapse ? 4 : undefined}
            />
            <div className="breadcrumb-page-heading">
              <div>
                <span>导航组件</span>
                <h3>Breadcrumb</h3>
                <p>帮助用户理解当前位置，并快速返回任意上级页面。</p>
              </div>
              <button type="button">查看规范</button>
            </div>
            <div className="breadcrumb-page-metrics">
              <article>
                <span>可见层级</span>
                <strong>{collapse ? '3 + 菜单' : '6'}</strong>
              </article>
              <article>
                <span>当前样式</span>
                <strong>{pill ? '胶囊' : '标准'}</strong>
              </article>
              <article>
                <span>组件状态</span>
                <strong>可交互</strong>
              </article>
            </div>
            <div className="breadcrumb-page-panel">
              <span>页面内容</span>
              <strong>面包屑应当依附于真实页面层级，而不是独立悬浮。</strong>
              <p>尝试左侧选项，观察路径密度、分隔符和折叠行为。</p>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
