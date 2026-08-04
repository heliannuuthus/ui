import { Drawer, type DrawerProps } from './drawer';

/** @deprecated Use Drawer with behavior="panel" instead. */
type SheetProps = Omit<DrawerProps, 'behavior'>;

/** @deprecated Use Drawer with behavior="panel" instead. */
const Sheet = (props: SheetProps) => {
  return <Drawer behavior="panel" {...props} />;
};

export { Sheet, type SheetProps };
