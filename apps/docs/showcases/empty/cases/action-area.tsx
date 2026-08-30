import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Empty } from '@heliannuuthus/ui';
import { ShieldCheck } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const EmptyCompositionDemo = () => {
    return (
      <Empty
        actions={
          <>
            <div className="display-empty-custom-meta">
              <span>{copy('12 项规则')}</span>
              <span>{copy('预计 4 分钟')}</span>
            </div>
            <Button size="sm" variant="outline">
              {copy('查看审计进度')}
            </Button>
          </>
        }
        className="display-empty display-empty-custom"
        description={copy('审计通过前，生产环境不会显示可发布版本。')}
        icon={<ShieldCheck />}
        title={copy('等待安全审计')}
      />
    );
  };

  return EmptyCompositionDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function EmptyCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-empty">
      <Example />
    </div>
  );
}
