import { Carousel, type CarouselPaginationOptions } from '..';

const badPagination = { render: () => null, renderDot: () => null };

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
