import { createRef } from 'react';
import { Carousel, type CarouselPaginationOptions, type CarouselRef } from '..';

const badPagination = { render: () => null, renderDot: () => null };
const carouselRef = createRef<CarouselRef>();
const elementRef = createRef<HTMLDivElement>();

// @ts-expect-error Dot content and a custom pagination renderer are exclusive.
export const rejectedPagination: CarouselPaginationOptions = badPagination;

export const CarouselTypeTest = () => (
  <>
    <Carousel
      controls={{
        next: { 'aria-label': 'Next item' },
        previous: { 'aria-label': 'Previous item' },
      }}
      items={['One', 'Two']}
      pagination={{
        position: 'before',
        renderDot: ({ isSelected }) => (isSelected ? '●' : '○'),
      }}
    />
    <Carousel
      controls={false}
      items={['One', 'Two']}
      pagination={{ render: ({ currentPage }) => currentPage }}
    />
    <Carousel items={['One', 'Two']} pagination={false} />
    <Carousel
      items={[{ id: 1, title: 'One' }]}
      ref={carouselRef}
      renderItem={(item, index) =>
        `${index}: ${item.id.toFixed()} ${item.title.toUpperCase()}`
      }
    />

    {/* @ts-expect-error Object data requires a renderer, not raw object children. */}
    <Carousel items={[{ id: 1 }]} />
    {/* @ts-expect-error Carousel exposes navigation methods rather than a DOM ref. */}
    <Carousel items={['One']} ref={elementRef} />

    {/* @ts-expect-error Previous button options now live inside controls. */}
    <Carousel items={['One', 'Two']} previousButtonProps={{}} />
    {/* @ts-expect-error Next button options now live inside controls. */}
    <Carousel items={['One', 'Two']} nextButtonProps={{}} />
    {/* @ts-expect-error Pagination position now lives inside pagination. */}
    <Carousel items={['One', 'Two']} paginationPosition="before" />
    {/* @ts-expect-error Dot rendering now lives inside pagination. */}
    <Carousel items={['One', 'Two']} renderDot={() => null} />
    {/* @ts-expect-error Pagination no longer accepts the old string shorthand. */}
    <Carousel items={['One', 'Two']} pagination="dots" />
  </>
);
