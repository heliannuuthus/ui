import { Attachment } from '../components/attachment';
import { Avatar } from '../components/avatar';
import { Bubble } from '../components/bubble';
import { Carousel } from '../components/carousel';
import { Collapsible } from '../components/collapsible';
import { Empty } from '../components/empty';
import { Item } from '../components/item';
import { Marker } from '../components/marker';

export const ContentDisplayTypeTest = () => (
  <>
    <Attachment mediaType="icon" title="release-notes.md" />
    <Attachment.Group items={[{ key: 'notes', title: 'release-notes.md' }]} />
    <Avatar alt="Lin" imageProps={{ onLoadingStatusChange: () => {} }} />
    <Avatar.Group items={[{ alt: 'Lin', key: 'lin' }]} />
    <Bubble
      content="Ready"
      reactions="2"
      reactionsProps={{ align: 'start', side: 'top' }}
    />
    <Carousel items={['One', 'Two']} pagination="dots" />
    <Collapsible content="Details" header="Summary" />
    <Empty title="No results" />
    <Item mediaType="default" title="Release notes" />
    <Marker content="Release started" variant="separator" />

    {/* @ts-expect-error Attachment only supports icon and image media. */}
    <Attachment mediaType="video" title="release.mp4" />
    {/* @ts-expect-error Empty states must explain what is empty. */}
    <Empty />
    {/* @ts-expect-error Item media type must match a supported rendering mode. */}
    <Item mediaType="video" title="Release video" />
  </>
);
