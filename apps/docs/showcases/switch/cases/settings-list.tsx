import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Switch } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const SwitchSettingsDemo = () => {
    const [settings, setSettings] = useState({ digest: true, product: false });

    return (
      <div className="data-settings-card">
        <div className="data-card-heading">
          <div>
            <strong>{copy('通知偏好')}</strong>
            <p>{copy('开关应立即生效，并明确说明影响范围。')}</p>
          </div>
        </div>
        <div className="data-option-stack">
          <label className="data-switch-row">
            <span className="data-switch-copy">
              <strong>{copy('每周摘要')}</strong>
              <small>{copy('周一发送项目进展与风险汇总')}</small>
            </span>
            <Switch
              checked={settings.digest}
              onChange={(digest) => setSettings({ ...settings, digest })}
            />
          </label>
          <label className="data-switch-row">
            <span className="data-switch-copy">
              <strong>{copy('产品更新')}</strong>
              <small>{copy('新功能上线时发送站内通知')}</small>
            </span>
            <Switch
              checked={settings.product}
              onChange={(product) => setSettings({ ...settings, product })}
            />
          </label>
          <label className="data-switch-row" data-disabled="true">
            <span className="data-switch-copy">
              <strong>{copy('安全提醒')}</strong>
              <small>{copy('关键安全事件始终开启')}</small>
            </span>
            <Switch checked disabled />
          </label>
        </div>
      </div>
    );
  };

  return SwitchSettingsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SwitchCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-switch">
      <Example />
    </div>
  );
}
