import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Drawer } from '@heliannuuthus/ui';
import { ArrowLeft } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DrawerReleaseDemo = () => {
    return (
      <Drawer
        behavior="adaptive"
        closeText={copy('关闭')}
        description={copy('22:00–23:00')}
        footer={<Button>{copy('进入发布中心')}</Button>}
        side="right"
        title={copy('今晚的发布窗口')}
        trigger={
          <Button variant="outline">
            <ArrowLeft />
            {copy('从右侧')}
          </Button>
        }
      >
        <DrawerReleaseContent />
      </Drawer>
    );
  };

  const DrawerReleaseContent = () => {
    return (
      <div className="feedback-drawer-list">
        <ReleaseRow label="Web Console" meta={copy('已通过 · 21:42')} ready />
        <ReleaseRow label="Auth API" meta={copy('已通过 · 21:46')} ready />
        <ReleaseRow label="Worker" meta={copy('等待负责人确认')} />
      </div>
    );
  };

  const ReleaseRow = ({
    label,
    meta,
    ready = false,
  }: {
    label: string;
    meta: string;
    ready?: boolean;
  }) => {
    return (
      <div className="feedback-release-row">
        <span className={ready ? 'is-ready' : undefined} />
        <div>
          <strong>{label}</strong>
          <small>{meta}</small>
        </div>
        <Tag type={ready ? 'success' : 'warning'}>
          {ready ? copy('就绪') : copy('待确认')}
        </Tag>
      </div>
    );
  };

  return DrawerReleaseDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function DrawerCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-drawer">
      <Example />
    </div>
  );
}
