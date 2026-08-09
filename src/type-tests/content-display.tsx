import { Attachment } from '../components/attachment';
import { Item } from '../components/item';

export const ContentDisplayTypeTest = () => (
  <>
    <Attachment mediaType="icon" title="release-notes.md" />
    <Item mediaType="default" title="Release notes" />

    {/* @ts-expect-error Attachment only supports icon and image media. */}
    <Attachment mediaType="video" title="release.mp4" />
    {/* @ts-expect-error Item media type must match a supported rendering mode. */}
    <Item mediaType="video" title="Release video" />
  </>
);
