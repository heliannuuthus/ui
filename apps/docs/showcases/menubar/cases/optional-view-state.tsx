import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Menubar } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const ViewMenubar = () => {
    const [sidebar, setSidebar] = useState(true);
    const [theme, setTheme] = useState('system');

    return (
      <Menubar
        menus={[
          {
            label: '视图',
            items: [
              {
                type: 'checkbox',
                label: '显示侧栏',
                checked: sidebar,
                onChange: setSidebar,
              },
              { type: 'separator' },
              {
                type: 'radio',
                value: theme,
                onChange: setTheme,
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
    );
  };

  return ViewMenubar;
})();

const EnExample = (() => {
  const ViewMenubar = () => {
    const [sidebar, setSidebar] = useState(true);
    const [theme, setTheme] = useState('system');

    return (
      <Menubar
        menus={[
          {
            label: 'view',
            items: [
              {
                type: 'checkbox',
                label: 'Show sidebar',
                checked: sidebar,
                onChange: setSidebar,
              },
              { type: 'separator' },
              {
                type: 'radio',
                value: theme,
                onChange: setTheme,
                items: [
                  { label: 'Follow the system', value: 'system' },
                  { label: 'light', value: 'light' },
                  { label: 'dark', value: 'dark' },
                ],
              },
            ],
          },
        ]}
      />
    );
  };

  return ViewMenubar;
})();

export default function ExampleCase({
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
