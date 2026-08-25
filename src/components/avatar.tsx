import * as React from 'react';
import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type AvatarSize = 'default' | 'sm' | 'lg';
type AvatarShape = 'circle' | 'square';
type AvatarImageLoadingStatus = 'error' | 'idle' | 'loaded' | 'loading';

type AvatarGroupContextValue = {
  shape?: AvatarShape;
  size?: AvatarSize;
};

const AvatarGroupContext = React.createContext<AvatarGroupContextValue>({});

type AvatarImageProps = Omit<
  React.ComponentProps<'img'>,
  'alt' | 'children' | 'src'
> & {
  onLoadingStatusChange?: (status: AvatarImageLoadingStatus) => void;
};

type AvatarFallbackProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  delay?: number;
};

type AvatarProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  alt: string;
  badge?: React.ReactNode;
  fallback?: React.ReactNode;
  fallbackProps?: AvatarFallbackProps;
  imageProps?: AvatarImageProps;
  shape?: AvatarShape;
  size?: AvatarSize;
  src?: string;
};

type AvatarProviderDefaults = Pick<AvatarProps, 'shape' | 'size'>;

const Avatar = ({
  alt,
  badge,
  className,
  fallback,
  fallbackProps,
  imageProps,
  shape: shapeProp,
  size: sizeProp,
  src,
  ...props
}: AvatarProps) => {
  const group = React.useContext(AvatarGroupContext);
  const defaults = useComponentDefaults('Avatar');
  const shape = shapeProp ?? group.shape ?? defaults.shape ?? 'circle';
  const size = sizeProp ?? group.size ?? defaults.size ?? 'default';

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-shape={shape}
      data-size={size}
      className={cn(
        'group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken data-[shape=square]:rounded-lg data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten',
        className
      )}
      {...props}
    >
      {src != null ? <AvatarImage {...imageProps} alt={alt} src={src} /> : null}
      <AvatarFallback {...fallbackProps}>
        {fallback ?? alt.slice(0, 1).toUpperCase()}
      </AvatarFallback>
      {badge != null ? <AvatarBadge>{badge}</AvatarBadge> : null}
    </AvatarPrimitive.Root>
  );
};

const AvatarImage = ({ className, ...props }: AvatarPrimitive.Image.Props) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        'aspect-square size-full rounded-[inherit] object-cover',
        className
      )}
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-[inherit] bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs',
        className
      )}
      {...props}
    />
  );
};

const AvatarBadge = ({
  className,
  render,
  ...props
}: useRender.ComponentProps<'span'>) => {
  const hasCustomRender = render != null;

  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(
          'absolute right-0 bottom-0 z-10 inline-flex items-center justify-center select-none',
          hasCustomRender
            ? 'translate-x-1/4 translate-y-1/4'
            : [
                'rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background',
                'group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden',
                'group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2',
                'group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2',
              ],
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: 'avatar-badge',
    },
  });
};

type AvatarGroupItem = AvatarProps & {
  key?: React.Key;
};

type AvatarGroupProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  items: readonly AvatarGroupItem[];
  max?: number;
  overlap?: number;
  renderCount?: (count: number) => React.ReactNode;
  shape?: AvatarShape;
  size?: AvatarSize;
};

const AvatarGroup = ({
  className,
  items,
  max,
  overlap = 8,
  renderCount,
  shape,
  size,
  style,
  ...props
}: AvatarGroupProps) => {
  const defaults = useComponentDefaults('Avatar');
  const resolvedShape = shape ?? defaults.shape;
  const resolvedSize = size ?? defaults.size;
  const limit = max == null ? items.length : Math.max(1, Math.trunc(max) || 1);
  const visibleItems = items.slice(0, limit);
  const overflowCount = Math.max(0, items.length - visibleItems.length);
  const count =
    overflowCount > 0 ? (
      renderCount ? (
        renderCount(overflowCount)
      ) : (
        <AvatarGroupCount key="avatar-group-overflow">
          +{overflowCount}
        </AvatarGroupCount>
      )
    ) : null;

  return (
    <AvatarGroupContext.Provider
      value={{ shape: resolvedShape, size: resolvedSize }}
    >
      <div
        data-slot="avatar-group"
        data-shape={resolvedShape}
        data-size={resolvedSize}
        className={cn(
          'group/avatar-group flex items-center *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
          className
        )}
        style={
          {
            '--avatar-group-overlap': `${Math.max(0, overlap)}px`,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {visibleItems.map((item, index) => (
          <Avatar
            {...item}
            key={item.key ?? item.src ?? `${item.alt}-${index}`}
          />
        ))}
        {count}
      </div>
    </AvatarGroupContext.Provider>
  );
};

const AvatarGroupCount = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const group = React.useContext(AvatarGroupContext);
  const defaults = useComponentDefaults('Avatar');
  const shape = group.shape ?? defaults.shape ?? 'circle';
  const size = group.size ?? defaults.size ?? 'default';

  return (
    <div
      data-slot="avatar-group-count"
      data-shape={shape}
      data-size={size}
      className={cn(
        'relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background data-[shape=square]:rounded-lg data-[size=lg]:size-10 data-[size=sm]:size-6 data-[size=sm]:text-xs [&>svg]:size-4 data-[size=lg]:[&>svg]:size-5 data-[size=sm]:[&>svg]:size-3',
        className
      )}
      {...props}
    />
  );
};

const AvatarCompound = Object.assign(Avatar, {
  Group: AvatarGroup,
});

export { AvatarCompound as Avatar };

export type {
  AvatarGroupItem,
  AvatarGroupProps,
  AvatarFallbackProps,
  AvatarImageLoadingStatus,
  AvatarImageProps,
  AvatarProps,
  AvatarProviderDefaults,
  AvatarShape,
  AvatarSize,
};
