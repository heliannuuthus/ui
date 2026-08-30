import '@heliannuuthus/ui/styles.css';
import { Avatar } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Popover } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const PopoverOwnerPreviewDemo = () => {
    return (
      <div className="display-hover-stage">
        {copy('发布负责人是')}{' '}
        <Popover
          triggerMode="hover"
          side="bottom"
          trigger={
            <Button className="display-inline-person" size="xs" variant="link">
              @linmo
            </Button>
          }
          content={
            <>
              <div className="display-profile">
                <Avatar
                  alt={copy('林默')}
                  badge={<span />}
                  fallback={copy('林')}
                  size="lg"
                />
                <div>
                  <strong>{copy('林默')}</strong>
                  <span>{copy('平台工程 · 当前在线')}</span>
                </div>
              </div>
              <p className="display-profile-description">
                {copy('负责生产发布、监控确认与紧急回滚。')}
              </p>
              <div className="display-profile-meta">
                <span>{copy('本月 18 次发布')}</span>
                <span>{copy('98% 成功率')}</span>
              </div>
            </>
          }
        />
        {copy('，悬停或聚焦名字查看详情。')}
      </div>
    );
  };

  return PopoverOwnerPreviewDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function PopoverCase02({
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
