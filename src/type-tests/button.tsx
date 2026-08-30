import { createRef, type MouseEvent } from 'react';

import {
  Button,
  type ButtonLinkProps,
  type ButtonNativeProps,
} from '../components/button';

const nativeRef = createRef<HTMLButtonElement>();
const anchorRef = createRef<HTMLAnchorElement>();

const nativeProps = {
  onClick: (_event: MouseEvent<HTMLButtonElement>) => {},
  type: 'submit',
  variant: 'link',
} satisfies ButtonNativeProps;

const linkProps = {
  download: 'release-notes.pdf',
  href: '/release-notes.pdf',
  onClick: (_event: MouseEvent<HTMLAnchorElement>) => {},
  rel: 'noreferrer',
  target: '_blank',
  variant: 'outline',
} satisfies ButtonLinkProps;

export const ButtonTypeTest = () => (
  <>
    <Button {...nativeProps} ref={nativeRef}>
      Submit
    </Button>
    <Button {...linkProps} ref={anchorRef}>
      Download
    </Button>
    <Button href="/docs" variant="default">
      Button-styled link
    </Button>
    <Button onClick={() => {}} variant="link">
      Link-styled action
    </Button>
    <Button size="md">Medium button</Button>

    {/* @ts-expect-error Anchor-only attributes require href. */}
    <Button target="_blank">Invalid native button</Button>
    {/* @ts-expect-error Button-only form attributes are unavailable with href. */}
    <Button formAction="/submit" href="/docs">
      Invalid link
    </Button>
    {/* @ts-expect-error The medium size is named md; default is a visual variant. */}
    <Button size="default">Invalid legacy size</Button>
  </>
);

// @ts-expect-error Link props require a navigation destination.
const missingHref: ButtonLinkProps = { target: '_blank' };

void missingHref;
