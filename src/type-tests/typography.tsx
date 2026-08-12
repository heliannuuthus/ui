import { createRef } from 'react';
import {
  Typography,
  type TypographyBlockquoteProps,
  type TypographyCodeProps,
  type TypographyTextProps,
  type TypographyTitleProps,
} from '../index';

const headingRef = createRef<HTMLHeadingElement>();
const spanRef = createRef<HTMLSpanElement>();
const paragraphRef = createRef<HTMLParagraphElement>();
const quoteRef = createRef<HTMLQuoteElement>();
const codeRef = createRef<HTMLElement>();

const titleProps: TypographyTitleProps = {
  children: 'Release notes',
  level: 2,
};
const paragraphProps: TypographyTextProps<'p'> = {
  as: 'p',
  children: 'A readable paragraph.',
  size: 'lg',
  tone: 'muted',
  weight: 'medium',
};
const blockquoteProps: TypographyBlockquoteProps = {
  children: 'A cited passage.',
  cite: 'https://example.com/source',
};
const codeProps: TypographyCodeProps = { children: 'pnpm build' };

export const validTypographyUsage = (
  <>
    <Typography.Title {...titleProps} id="release-notes" ref={headingRef} />
    <Typography.Text ref={spanRef}>Inline text</Typography.Text>
    <Typography.Text {...paragraphProps} ref={paragraphRef} />
    <Typography.Text as="div" role="note" size="xl" weight="semibold">
      Emphasized text
    </Typography.Text>
    <Typography.Text as="small" size="sm">
      Supporting text
    </Typography.Text>
    <Typography.Blockquote {...blockquoteProps} ref={quoteRef} />
    <Typography.Code {...codeProps} ref={codeRef} />
  </>
);

// @ts-expect-error Title levels match the six semantic heading elements.
const invalidTitleLevel = <Typography.Title level={7} />;
// @ts-expect-error Text only renders the supported semantic text elements.
const invalidTextElement = <Typography.Text as="section" />;
// @ts-expect-error Text sizes use the public typography scale.
const invalidTextSize = <Typography.Text size="2xl" />;
// @ts-expect-error Text tones use semantic foreground tokens.
const invalidTextTone = <Typography.Text tone="danger" />;
// @ts-expect-error Text weights use the supported font-weight scale.
const invalidTextWeight = <Typography.Text weight="bold" />;

void invalidTitleLevel;
void invalidTextElement;
void invalidTextSize;
void invalidTextTone;
void invalidTextWeight;
