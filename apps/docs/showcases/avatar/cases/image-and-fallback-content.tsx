import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Avatar } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const AvatarSourceDemo = ({
    source = 'image',
  }: {
    source?: 'fallback' | 'image';
  }) => {
    const [status, setStatus] = useState('idle');

    return (
      <div className="flex items-center gap-4 rounded-3xl border p-5">
        <Avatar
          alt={copy('林默')}
          fallback={copy('林')}
          fallbackProps={{ delay: 0 }}
          imageProps={{ onLoadingStatusChange: setStatus }}
          size="lg"
          src={
            source === 'image' ? '/heliannuuthus.jpg' : '/missing-avatar.jpg'
          }
        />
        <div className="grid gap-1 text-sm">
          <strong>
            {source === 'image' ? copy('图片头像') : copy('回退内容')}
          </strong>
          <span className="text-muted-foreground">
            {copy('加载状态')}：{status}
          </span>
        </div>
      </div>
    );
  };

  return AvatarSourceDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AvatarCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-avatar">
      <Example />
    </div>
  );
}
