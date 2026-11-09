import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Sonner } from '@heliannuuthus/ui';
import { toast as sonnerToast } from '@heliannuuthus/ui';
import { Rocket } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const SonnerPublishDemo = () => {
    const publish = () => {
      sonnerToast.promise(
        new Promise<string>((resolve) => {
          window.setTimeout(() => resolve('v0.12.0'), 1200);
        }),
        {
          loading: copy('正在发布到生产环境…'),
          success: (version) => copy(`${version} 已发布`),
          error: copy('发布失败，请检查构建日志'),
          classes: { description: 'text-sm' },
          styles: { action: { fontWeight: 600 } },
        }
      );
    };

    return (
      <>
        <Button onClick={publish}>
          <Rocket />
          {copy('模拟异步发布')}
        </Button>
        <Sonner
          position="bottom-right"
          rich
          closable
          limit={3}
          swipe={['right']}
          offset={{ base: 24, mobile: 12 }}
          defaults={{ classes: { toast: 'cn-toast' } }}
        />
      </>
    );
  };

  return SonnerPublishDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SonnerCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-sonner">
      <Example />
    </div>
  );
}
