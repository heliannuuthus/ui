import {
  DirectionProvider as BaseDirectionProvider,
  useDirection as useBaseDirection,
} from '@base-ui/react/direction-provider';

type TextDirection = 'ltr' | 'rtl';

type DirectionProviderProps = {
  children?: React.ReactNode;
  direction?: TextDirection;
};

function DirectionProvider(props: DirectionProviderProps) {
  return <BaseDirectionProvider {...props} />;
}

function useDirection(): TextDirection {
  return useBaseDirection();
}

export {
  DirectionProvider,
  useDirection,
  type DirectionProviderProps,
  type TextDirection,
};
