import { MessageCircle } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Item, Tag } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Item.Group
      separator
      items={[
        {
          media: <MessageCircle />,
          mediaType: 'icon',
          title: '林默回复了检查项',
          description: '确认索引变更不会锁表。',
          actions: <Tag>2 分钟前</Tag>,
        },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Item.Group
      separator
      items={[
        {
          media: <MessageCircle />,
          mediaType: 'icon',
          title: 'Lin Mo replied to the review item',
          description:
            'Confirmed that the index change will not lock the table.',
          actions: <Tag>2 minutes ago</Tag>,
        },
      ]}
    />
  );
})();

export default function ExampleCase({
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
