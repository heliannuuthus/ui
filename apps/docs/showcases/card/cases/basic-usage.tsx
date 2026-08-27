import '@heliannuuthus/ui/styles.css';
import { Card } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const UpdateCard = () => {
    return (
      <Card header={{ title: '设计系统更新' }} variant="elevated">
        <p>本周补充了组件示例与无障碍说明。</p>
      </Card>
    );
  };

  return () => (
    <>
      <UpdateCard />
      <Card header={{ title: '描边卡片' }} variant="outline" />
      <Card header={{ title: '透明卡片' }} variant="ghost" />
    </>
  );
})();

const EnExample = (() => {
  const UpdateCard = () => {
    return (
      <Card header={{ title: 'Design system update' }} variant="elevated">
        <p>This week adds component examples and accessibility guidance.</p>
      </Card>
    );
  };

  return () => (
    <>
      <UpdateCard />
      <Card header={{ title: 'Outlined card' }} variant="outline" />
      <Card header={{ title: 'Ghost card' }} variant="ghost" />
    </>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-card">
      <Example />
    </div>
  );
}
