import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { Item } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const ItemGroupRenderDemo = () => (
    <Item.Group
      className="display-activity-list"
      items={[
        { key: 'preflight', title: copy('预检完成') },
        { key: 'release', title: copy('发布完成') },
      ]}
      renderItem={({ key, ...item }, index) => (
        <Item
          {...item}
          actions={<Tag>0{index + 1}</Tag>}
          key={key}
          variant="outline"
        />
      )}
    />
  );

  return ItemGroupRenderDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ItemCase10({
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
