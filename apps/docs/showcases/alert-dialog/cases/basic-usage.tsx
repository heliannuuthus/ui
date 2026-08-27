import '@heliannuuthus/ui/styles.css';
import { AlertDialog } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Trash2 } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const AlertDialogDeleteDemo = ({
    size = 'default',
  }: {
    size?: 'default' | 'sm';
  }) => {
    return (
      <AlertDialog
        cancelText={copy('保留环境')}
        confirmText={copy('确认删除')}
        confirmVariant="destructive"
        description={copy('运行日志和临时域名会一并移除，此操作无法撤销。')}
        media={<Trash2 />}
        size={size}
        title={copy('删除 preview-142？')}
        trigger={
          <Button variant="destructive">
            <Trash2 />
            {copy('删除预览环境')}
          </Button>
        }
      />
    );
  };

  return AlertDialogDeleteDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AlertDialogCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-alert-dialog">
      <Example />
    </div>
  );
}
