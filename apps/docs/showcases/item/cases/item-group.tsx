import '@heliannuuthus/ui/styles.css';
import { Item } from '@heliannuuthus/ui';
import { Marker } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const ItemGroupDemo = ({
    separator = 'default',
  }: {
    separator?: 'custom' | 'default' | 'none';
  }) => (
    <Item.Group
      className="display-activity-list"
      items={[
        { key: 'build', title: copy('构建完成') },
        { key: 'release', title: copy('发布完成') },
      ]}
      separator={
        separator === 'custom' ? (
          <Marker content={copy('进入生产阶段')} variant="separator" />
        ) : (
          separator === 'default'
        )
      }
    />
  );

  return ItemGroupDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ItemCase09({
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
