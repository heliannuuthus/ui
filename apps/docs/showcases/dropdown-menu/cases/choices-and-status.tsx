import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button, DropdownMenu } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const ViewSettings = () => {
    const [sidebar, setSidebar] = useState(true);
    const [density, setDensity] = useState('comfortable');

    return (
      <DropdownMenu
        trigger={<Button variant="outline">视图设置</Button>}
        items={[
          {
            type: 'checkbox',
            label: '显示侧栏',
            checked: sidebar,
            onChange: setSidebar,
          },
          { type: 'separator' },
          {
            type: 'radio',
            value: density,
            onChange: setDensity,
            items: [
              { label: '紧凑', value: 'compact' },
              { label: '舒适', value: 'comfortable' },
            ],
          },
        ]}
      />
    );
  };

  return ViewSettings;
})();

const EnExample = (() => {
  const ViewSettings = () => {
    const [sidebar, setSidebar] = useState(true);
    const [density, setDensity] = useState('comfortable');

    return (
      <DropdownMenu
        trigger={<Button variant="outline">View settings</Button>}
        items={[
          {
            type: 'checkbox',
            label: 'Show sidebar',
            checked: sidebar,
            onChange: setSidebar,
          },
          { type: 'separator' },
          {
            type: 'radio',
            value: density,
            onChange: setDensity,
            items: [
              { label: 'compact', value: 'compact' },
              { label: 'comfortable', value: 'comfortable' },
            ],
          },
        ]}
      />
    );
  };

  return ViewSettings;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-dropdown-menu">
      <Example />
    </div>
  );
}
