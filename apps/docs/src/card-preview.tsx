import { Card } from '@heliannuuthus/ui/card';
import { Button } from '@heliannuuthus/ui/button';
import { Input } from '@heliannuuthus/ui/input';
import { Label } from '@heliannuuthus/ui/form';
import { TypographyLarge, TypographySmall } from '@heliannuuthus/ui/typography';
import { MoreHorizontal } from 'lucide-react';

export function CardAnatomyDemo({ size = 'sm' }: { size?: 'default' | 'sm' }) {
  return (
    <div className="card-composition-demo">
      <Card
        className="card-showcase"
        size={size}
        title="工作区资料"
        description="修改成员看到的工作区名称。"
        action={
          <Button aria-label="更多操作" size="icon-sm" variant="outline">
            <MoreHorizontal />
          </Button>
        }
        footer={
          <>
            <span>上次保存于 10:24</span>
            <div>
              <Button size="sm" variant="outline">
                取消
              </Button>
              <Button size="sm">保存修改</Button>
            </div>
          </>
        }
        classNames={{
          content: 'card-showcase-content',
          footer:
            'card-showcase-footer -mb-(--card-spacing) mt-auto pb-(--card-spacing)',
        }}
      >
        <Label htmlFor="card-workspace-name">工作区名称</Label>
        <Input id="card-workspace-name" defaultValue="Heliannuuthus UI" />
      </Card>

      <aside className="card-composition-map" aria-label="Card 属性结构">
        <Card
          className="card-composition-map-card"
          radius="sm"
          size="sm"
          variant="outline"
        >
          <TypographySmall className="card-composition-map-kicker">
            PROPS
          </TypographySmall>
          <TypographyLarge className="card-composition-map-title">
            Card
          </TypographyLarge>
          <ul>
            <li>
              <code>title / description / action</code>
              <span>头部信息</span>
              <div>
                <code>ReactNode</code>
              </div>
            </li>
            <li>
              <code>children</code>
              <span>主体内容</span>
            </li>
            <li>
              <code>footer</code>
              <span>整卡操作</span>
            </li>
          </ul>
        </Card>
      </aside>
    </div>
  );
}
