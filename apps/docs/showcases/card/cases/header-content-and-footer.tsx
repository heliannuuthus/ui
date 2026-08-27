import '@heliannuuthus/ui/styles.css';
import { Button, Card, Input } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const WorkspaceCard = () => {
    return (
      <Card
        header={{
          title: '工作区资料',
          description: '修改成员看到的工作区名称。',
          action: <Button variant="ghost">更多操作</Button>,
        }}
        footer={
          <>
            <span>上次保存于 10:24</span>
            <Button>保存修改</Button>
          </>
        }
      >
        <label>
          工作区名称
          <Input defaultValue="Heliannuuthus UI" />
        </label>
      </Card>
    );
  };

  return WorkspaceCard;
})();

const EnExample = (() => {
  const WorkspaceCard = () => {
    return (
      <Card
        header={{
          title: 'Workspace information',
          description: 'Change the workspace name visible to members.',
          action: <Button variant="ghost">More actions</Button>,
        }}
        footer={
          <>
            <span>Last saved at 10:24</span>
            <Button>Save changes</Button>
          </>
        }
      >
        <label>
          Workspace name
          <Input defaultValue="Heliannuuthus UI" />
        </label>
      </Card>
    );
  };

  return WorkspaceCard;
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
