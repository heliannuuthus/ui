import { Card } from '@heliannuuthus/ui/card';
import { Button } from '@heliannuuthus/ui/button';
import { Input } from '@heliannuuthus/ui/input';
import { Label } from '@heliannuuthus/ui/form';
import { MoreHorizontal } from 'lucide-react';

export function CardBasicDemo() {
  return (
    <Card className="card-basic-demo" title="设计系统更新">
      <p>本周补充了组件示例与无障碍说明，方便团队快速查阅和复用。</p>
    </Card>
  );
}

export function CardAnatomyDemo() {
  return (
    <Card
      className="card-showcase"
      title={
        <span className="card-region-heading">
          <span>Header</span>
          工作区资料
        </span>
      }
      description="修改成员看到的工作区名称。"
      action={
        <Button aria-label="更多操作" size="icon-sm" variant="outline">
          <MoreHorizontal />
        </Button>
      }
      footer={
        <>
          <span className="card-footer-meta">
            <span className="card-region-label">Footer</span>
            <span>上次保存于 10:24</span>
          </span>
          <span className="card-footer-actions">
            <Button size="sm" variant="outline">
              取消
            </Button>
            <Button size="sm">保存修改</Button>
          </span>
        </>
      }
      classNames={{
        content: 'card-showcase-content',
        footer: 'card-showcase-footer',
      }}
    >
      <span className="card-region-label">Content</span>
      <div className="card-showcase-field">
        <Label htmlFor="card-workspace-name">工作区名称</Label>
        <Input id="card-workspace-name" defaultValue="Heliannuuthus UI" />
      </div>
    </Card>
  );
}
