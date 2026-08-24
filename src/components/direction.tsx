import {
  DirectionProvider as BaseDirectionProvider,
  useDirection as useBaseDirection,
} from '@base-ui/react/direction-provider';

type TextDirection = 'ltr' | 'rtl';

type DirectionProviderProps = {
  children?: React.ReactNode;
  direction?: TextDirection;
};

const DirectionProvider = (
  props: DirectionProviderProps
): React.JSX.Element => {
  return <BaseDirectionProvider {...props} />;
};

const useDirection = (): TextDirection => {
  return useBaseDirection();
};

export {
  DirectionProvider,
  useDirection,
  type DirectionProviderProps,
  type TextDirection,
};
