import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Item } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const ItemStructureDemo = ({
    slot = 'content',
  }: {
    slot?: 'actions' | 'content' | 'footer' | 'header';
  }) => (
    <Item
      actions={
        slot === 'actions' ? <Button size="xs">{copy('查看')}</Button> : null
      }
      content={slot === 'content' ? <Tag>production</Tag> : null}
      description={copy('每个结构字段都拥有独立的语义槽位。')}
      classNames={
        slot === 'content'
          ? { content: 'rounded-xl bg-muted/50 p-2' }
          : undefined
      }
      footer={
        slot === 'footer' ? <small>{copy('更新于 2 分钟前')}</small> : null
      }
      header={slot === 'header' ? <Tag>v0.12.0</Tag> : null}
      title={copy('生产发布')}
      variant="outline"
    />
  );

  return ItemStructureDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ItemCase07({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-item">
      <Example />
    </div>
  );
}
