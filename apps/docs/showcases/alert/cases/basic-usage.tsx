import '@heliannuuthus/ui/styles.css';
import { Alert, Button } from '@heliannuuthus/ui';
import { TriangleAlert } from 'lucide-react';
import { useState } from 'react';

export default function AlertBasicCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const [visible, setVisible] = useState(true);
  const copy =
    locale === 'zh'
      ? {
          close: '关闭',
          description: '建议在发布前重新构建。',
          restore: '重新显示提示',
          title: '回滚镜像即将过期',
        }
      : {
          close: 'Close',
          description: 'Rebuild it before the next release.',
          restore: 'Show alert again',
          title: 'The rollback image will expire soon',
        };

  return (
    <div className="demo-preview demo-preview-alert">
      {visible ? (
        <Alert
          action={
            <Button onClick={() => setVisible(false)} size="sm" variant="ghost">
              {copy.close}
            </Button>
          }
          description={copy.description}
          icon={<TriangleAlert aria-hidden="true" />}
          title={copy.title}
          variant="warning"
        />
      ) : (
        <Button onClick={() => setVisible(true)} variant="outline">
          {copy.restore}
        </Button>
      )}
    </div>
  );
}
