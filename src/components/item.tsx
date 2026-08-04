import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';
import { Separator } from './separator';

const itemVariants = cva(
  'group/item flex w-full flex-wrap items-center rounded-2xl border text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted',
  {
    variants: {
      variant: {
        default: 'border-transparent',
        outline: 'border-border',
        muted: 'border-transparent bg-muted/50',
      },
      size: {
        default: 'gap-3.5 px-4 py-3.5',
        sm: 'gap-3.5 px-3.5 py-3',
        xs: 'gap-2.5 px-3 py-2.5 in-data-[slot=dropdown-menu-content]:p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 overflow-hidden rounded-xl group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 group-data-[size=xs]/item:rounded-lg [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type ItemClassNames = {
  actions?: string;
  content?: string;
  description?: string;
  footer?: string;
  header?: string;
  media?: string;
  title?: string;
};

type ItemSharedProps = VariantProps<typeof itemVariants> & {
  actions?: React.ReactNode;
  classNames?: ItemClassNames;
  content?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  media?: React.ReactNode;
  mediaVariant?: VariantProps<typeof itemMediaVariants>['variant'];
  title?: React.ReactNode;
};

type ItemDivProps = Omit<React.ComponentProps<'div'>, 'children' | 'title'> &
  ItemSharedProps & {
    href?: never;
  };

type ItemLinkProps = Omit<
  React.ComponentProps<'a'>,
  'children' | 'href' | 'media' | 'title'
> &
  ItemSharedProps & {
    href: string;
  };

type ItemProps = ItemDivProps | ItemLinkProps;

type ItemGroupEntry = ItemProps & {
  key?: React.Key;
};

type ItemGroupProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  items: readonly ItemGroupEntry[];
  renderItem?: (item: ItemGroupEntry, index: number) => React.ReactNode;
  separator?: boolean | React.ReactNode;
};

const Item = ({
  actions,
  className,
  classNames,
  content,
  description,
  footer,
  header,
  media,
  mediaVariant = 'default',
  size = 'default',
  title,
  variant = 'default',
  ...props
}: ItemProps) => {
  const hasContent = title != null || description != null || content != null;

  const children = (
    <>
      {header != null ? (
        <div
          className={cn(
            'flex basis-full items-center justify-between gap-2',
            classNames?.header
          )}
          data-slot="item-header"
        >
          {header}
        </div>
      ) : null}
      {media != null ? (
        <div
          className={cn(
            itemMediaVariants({
              className: classNames?.media,
              variant: mediaVariant,
            })
          )}
          data-slot="item-media"
          data-variant={mediaVariant}
        >
          {media}
        </div>
      ) : null}
      {hasContent ? (
        <div
          className={cn(
            'flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0.5 [&+[data-slot=item-content]]:flex-none',
            classNames?.content
          )}
          data-slot="item-content"
        >
          {title != null ? (
            <div
              className={cn(
                'line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4',
                classNames?.title
              )}
              data-slot="item-title"
            >
              {title}
            </div>
          ) : null}
          {description != null ? (
            <p
              className={cn(
                'line-clamp-2 text-left text-sm font-normal text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
                classNames?.description
              )}
              data-slot="item-description"
            >
              {description}
            </p>
          ) : null}
          {content}
        </div>
      ) : null}
      {actions != null ? (
        <div
          className={cn('flex items-center gap-2', classNames?.actions)}
          data-slot="item-actions"
        >
          {actions}
        </div>
      ) : null}
      {footer != null ? (
        <div
          className={cn(
            'flex basis-full items-center justify-between gap-2',
            classNames?.footer
          )}
          data-slot="item-footer"
        >
          {footer}
        </div>
      ) : null}
    </>
  );
  const rootProps = {
    className: cn(itemVariants({ className, size, variant })),
    'data-size': size,
    'data-slot': 'item',
    'data-variant': variant,
  };

  if (typeof props.href === 'string') {
    return (
      <a {...props} {...rootProps}>
        {children}
      </a>
    );
  }

  return (
    <div {...props} {...rootProps}>
      {children}
    </div>
  );
};

const Group = ({
  className,
  items,
  renderItem,
  separator = false,
  ...props
}: ItemGroupProps) => {
  return (
    <div
      className={cn(
        'group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2',
        className
      )}
      data-slot="item-group"
      role="list"
      {...props}
    >
      {items.map((item, index) => {
        const { key, ...itemProps } = item;
        return (
          <React.Fragment key={key ?? index}>
            {index > 0 && separator ? (
              separator === true ? (
                <Separator
                  className="my-2"
                  data-slot="item-separator"
                  orientation="horizontal"
                />
              ) : (
                separator
              )
            ) : null}
            {renderItem ? renderItem(item, index) : <Item {...itemProps} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const ItemCompound = Object.assign(Item, {
  Group,
});

export {
  ItemCompound as Item,
  type ItemDivProps,
  type ItemClassNames,
  type ItemGroupEntry,
  type ItemGroupProps,
  type ItemLinkProps,
  type ItemProps,
};
