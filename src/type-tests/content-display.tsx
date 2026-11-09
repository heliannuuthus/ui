import { Attachment } from '../components/attachment';
import { Avatar } from '../components/avatar';
import { Bubble } from '../components/bubble';
import { Carousel } from '../components/carousel';
import { Collapsible } from '../components/collapsible';
import { Empty } from '../components/empty';
import { Item } from '../components/item';
import { Marker } from '../components/marker';
import { Counter } from '../components/counter';
import { Progress } from '../components/progress';

export const ContentDisplayTypeTest = () => (
  <>
    <Attachment
      media={{ content: undefined, type: 'icon' }}
      title="release-notes.md"
    />
    <Attachment.Group items={[{ key: 'notes', title: 'release-notes.md' }]} />
    <Avatar alt="Lin" image={{ onStatusChange: () => {} }} />
    <Avatar.Group items={[{ alt: 'Lin', key: 'lin' }]} />
    <Bubble
      content={{ children: 'Ready' }}
      reactions={{ children: '2', ...{ align: 'start', side: 'top' } }}
    />
    <Carousel items={['One', 'Two']} pagination={{ position: 'before' }} />
    <Collapsible content="Details" header="Summary" />
    <Empty title="No results" />
    <Item
      media={{ content: undefined, type: 'default' }}
      title="Release notes"
    />
    <Marker content="Release started" variant="separator" />
    <Counter
      value={12}
      spring={{ stiffness: 120 }}
      size={48}
      weight={600}
      classes={{ digit: 'digit' }}
    />
    <Progress value={50} display={(value) => `${value}%`} />
    <Avatar
      alt="Lin"
      fallback={{ children: 'L', delay: 0 }}
      image={{ onLoad: () => {}, onStatusChange: () => {} }}
    />
    <Avatar.Group items={[{ alt: 'Lin' }]} overflow={(count) => `+${count}`} />
    <Item.Group
      items={[{ title: 'Notes', media: { content: 'N', type: 'default' } }]}
      render={(item) => <Item {...item} />}
    />
    <Bubble
      content={{
        children: 'Ready',
        ref: () => {},
        onClick: (event) => event.currentTarget.focus(),
      }}
      reactions={{ children: '2', align: 'start', side: 'top' }}
    />

    <Attachment
      media={{
        content: undefined,
        // @ts-expect-error 附件媒体仅支持图标和图片。
        type: 'video',
      }}
      title="release.mp4"
    />
    {/* @ts-expect-error Empty states must explain what is empty. */}
    <Empty />
    {/* @ts-expect-error Item media type must match a supported rendering mode. */}
    <Item media={{ content: undefined, type: 'video' }} title="Release video" />
  </>
);
