import { createRef } from 'react';
import {
  Badge,
  Tag,
  type BadgeProps,
  type TagProps,
  type TagType,
} from '../index';

const badgeRef = createRef<HTMLSpanElement>();
const tagRef = createRef<HTMLSpanElement>();

const tagType: TagType = 'success';
const tagProps: TagProps = {
  'aria-label': 'Release state',
  className: 'release-tag',
  children: 'Published',
  style: { marginInlineStart: 4 },
  type: tagType,
};
const badgeProps: BadgeProps = {
  className: 'notification-badge',
  classNames: { indicator: 'notification-indicator' },
  indicator: 5,
  indicatorLabel: '5 unread messages',
  max: 99,
  offset: [2, -1],
  style: { verticalAlign: 'middle' },
  styles: { indicator: { minWidth: 24 } },
};

export const validBadgeTagUsage = (
  <>
    <Tag {...tagProps} data-release="stable" ref={tagRef} />
    <Badge {...badgeProps} ref={badgeRef}>
      <button type="button">Messages</button>
    </Badge>
    <Badge indicator={true} indicatorLabel="New notification" />
    <Badge indicator={<span>New</span>}>Inbox</Badge>
    <Badge indicator={0} />
    <Badge indicator={false} />
  </>
);

// @ts-expect-error Tag only accepts semantic types.
const invalidTagType = <Tag type="secondary" />;
// @ts-expect-error A dot has no visible content and requires an accessible label.
const unlabeledDot = <Badge indicator={true} />;
// @ts-expect-error The legacy visual variant API was removed from Badge.
const legacyBadgeVariant = <Badge indicator={1} variant="secondary" />;
// @ts-expect-error The legacy count API was replaced by indicator.
const legacyBadgeCount = <Badge count={1} />;
// @ts-expect-error The legacy dot API was replaced by indicator=true.
const legacyBadgeDot = <Badge dot />;
// @ts-expect-error Zero is explicit, so the legacy showZero switch was removed.
const legacyBadgeShowZero = <Badge indicator={0} showZero />;
// @ts-expect-error Badge is not a link; compose an interactive child instead.
const legacyBadgeLink = <Badge href="/notifications" indicator={1} />;

void invalidTagType;
void unlabeledDot;
void legacyBadgeVariant;
void legacyBadgeCount;
void legacyBadgeDot;
void legacyBadgeShowZero;
void legacyBadgeLink;
