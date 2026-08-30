import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Popover } from '@heliannuuthus/ui';
import { Mail, Users } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const PopoverOwnersDemo = () => {
    return (
      <Popover
        description={copy('发布开始和回滚时会通知以下成员。')}
        side="bottom"
        title={copy('发布负责人')}
        trigger={
          <Button variant="outline">
            <Users />
            {copy('3 位负责人')}
          </Button>
        }
        content={
          <div className="feedback-owner-list">
            {[
              [copy('林夏'), copy('发布协调')],
              [copy('周一'), copy('前端值班')],
              [copy('陈青'), copy('后端值班')],
            ].map(([name, role]) => (
              <div key={name}>
                <span>{name.slice(0, 1)}</span>
                <p>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </p>
                <Button
                  aria-label={copy(`联系${name}`)}
                  size="icon-sm"
                  variant="ghost"
                >
                  <Mail />
                </Button>
              </div>
            ))}
          </div>
        }
      />
    );
  };

  return PopoverOwnersDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function PopoverCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-popover">
      <Example />
    </div>
  );
}
