import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/media-content-type';
import Case03 from './cases/processing-states';
import Case04 from './cases/attachment-sizes';
import Case05 from './cases/attachment-orientation';
import Case06 from './cases/attachment-actions';
import Case07 from './cases/full-card-trigger';
import Case08 from './cases/attachment-collection';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use title, description, and media for the file name, supporting information, and file-type icon.',
      zh: 'title、description 与 media 分别承载文件名称、辅助信息和类型图标。',
    },
  },
  {
    component: Case02,
    title: { en: 'Media content type', zh: '媒体内容类型' },
    description: {
      en: 'mediaType declares whether media is an icon or an image so thumbnails receive the correct size, crop, and state styling.',
      zh: 'mediaType 明确声明 media 是图标还是图片，让缩略图获得正确的尺寸、裁切与状态样式。',
    },
  },
  {
    component: Case03,
    title: { en: 'Processing states', zh: '处理状态' },
    description: {
      en: 'state represents waiting, uploading, processing, failed, and completed phases; use description to state the status explicitly.',
      zh: 'state 分别表达等待、上传、处理、失败和完成阶段；状态文案仍由 description 明确说明。',
    },
  },
  {
    component: Case04,
    span: 'full' as const,
    title: { en: 'Attachment sizes', zh: '附件尺寸' },
    description: {
      en: 'size controls the density of one attachment; compare the three independent widths side by side.',
      zh: 'size 只控制单个附件的整体密度；三种尺寸使用独立宽度并排比较。',
    },
  },
  {
    component: Case05,
    title: { en: 'Attachment orientation', zh: '附件方向' },
    description: {
      en: 'horizontal suits file lists, while vertical emphasizes media in a thumbnail card.',
      zh: 'horizontal 适合文件列表，vertical 以缩略卡形式突出媒体内容。',
    },
  },
  {
    component: Case06,
    title: { en: 'Attachment actions', zh: '附件操作' },
    description: {
      en: 'Use actions only for download, retry, or remove operations that directly affect the current attachment.',
      zh: 'actions 只放置与当前附件直接相关的下载、重试或移除操作。',
    },
  },
  {
    component: Case07,
    title: { en: 'Full-card trigger', zh: '整卡触发' },
    description: {
      en: 'trigger accepts a link or button element and makes the whole attachment clickable while preserving the correct element semantics.',
      zh: 'trigger 接收链接或按钮元素，在保留正确元素语义的同时让整个附件可点击。',
    },
  },
  {
    component: Case08,
    title: { en: 'Attachment collection', zh: '附件集合' },
    description: {
      en: 'Attachment.Group renders a collection from items and provides scrolling and snapping for horizontal overflow.',
      zh: 'Attachment.Group 通过 items 渲染一组附件，并为横向溢出提供滚动与吸附行为。',
    },
  },
];

export default function AttachmentShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
