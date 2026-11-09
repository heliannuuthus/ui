import {
  Avatar,
  Button,
  Card,
  Provider,
  Sonner,
  Toast,
  toast,
  useToast,
  useProvider,
  type ProviderComponents,
  type ProviderTheme,
  type ToastAction,
  type ToastApi,
  type ToastClasses,
  type ToastDefaults,
  type ToastOptions,
  type ToastPromiseHandle,
  type ToastPromiseOptions,
  type ToastStyles,
} from '..';

const components = {
  Alert: { variant: 'success' },
  AlertDialog: { size: 'sm' },
  Attachment: { size: 'sm' },
  Avatar: { shape: 'square', size: 'sm' },
  Breadcrumb: { size: 'sm', variant: 'underline' },
  Bubble: { variant: 'muted' },
  Button: { size: 'sm', variant: 'outline' },
  Card: { variant: 'outline' },
  Checkbox: { variant: 'task' },
  Collapsible: { size: 'sm', variant: 'ghost' },
  DropdownMenu: { size: 'sm' },
  Input: { Number: { size: 'sm' }, OTP: { variant: 'separated' } },
  Item: { size: 'sm', variant: 'muted' },
  Marker: { variant: 'separator' },
  Menubar: { size: 'sm' },
  Pagination: { size: 'sm' },
  Progress: { effect: 'sparkle' },
  ScrollArea: { scrollbar: { size: 'sm', visibility: 'always' } },
  Segmented: { block: true, size: 'sm' },
  Slider: { effect: 'none' },
  Spinner: { size: 'sm' },
  Tabs: { animation: 'slide', centered: true, variant: 'line' },
  Tag: { type: 'primary' },
  Toggle: { variant: 'outline' },
  Typography: { Text: { size: 'sm', tone: 'muted', weight: 'medium' } },
} satisfies ProviderComponents;

const theme = {
  colors: {
    base: {
      primary: 'oklch(0.55 0.17 155)',
      primaryForeground: 'white',
    },
    dark: {
      primary: 'oklch(0.72 0.15 155)',
    },
  },
  radius: '0.75rem',
} satisfies ProviderTheme;

const ProviderConsumer = () => {
  const config = useProvider();

  config.direction satisfies 'ltr' | 'rtl';
  config.resolvedAppearance satisfies 'dark' | 'light';
  return null;
};

void (
  <Provider
    appearance="system"
    className="min-h-screen"
    components={components}
    direction="ltr"
    theme={theme}
  >
    <Avatar alt="Heliannuuthus" />
    <Button size="lg">Explicit props win</Button>
    <Card variant="ghost">Card content</Card>
    <ProviderConsumer />
  </Provider>
);

const toastClasses = {
  toast: 'toast',
  description: 'description',
  close: 'close',
  cancel: 'cancel',
  action: 'action',
} satisfies ToastClasses;

const toastStyles = {
  cancel: { color: 'gray' },
  action: { color: 'green' },
} satisfies ToastStyles;

const toastAction = {
  label: 'Undo',
  onClick: (event) => event.preventDefault(),
  style: { fontWeight: 600 },
} satisfies ToastAction;

const toastDefaults = {
  classes: toastClasses,
  styles: toastStyles,
  closable: true,
  closeButtonAriaLabel: 'Close notification',
  duration: 4000,
} satisfies ToastDefaults;

const toastOptions = {
  classes: toastClasses,
  styles: toastStyles,
  action: toastAction,
  cancel: <Button>Dismiss</Button>,
  closable: false,
  rich: false,
  toasterId: 'workspace',
  onDismiss: (item) => {
    void item.id;
  },
  onAutoClose: (item) => {
    void item.duration;
  },
} satisfies ToastOptions;

const promiseOptions = {
  ...toastOptions,
  loading: 'Saving',
  success: (result) => ({
    message: result.name,
    classes: toastClasses,
    styles: toastStyles,
    action: toastAction,
  }),
  error: () => ({ message: 'Failed', closable: true }),
  description: () => 'Async result',
  finally: () => undefined,
} satisfies ToastPromiseOptions<{ name: string }>;

toast('Saved', toastOptions);
toast.success('Saved', toastOptions);
toast.info('Saved', toastOptions);
toast.warning('Saved', toastOptions);
toast.error('Saved', toastOptions);
toast.loading('Saving', toastOptions);
toast.message('Saved', toastOptions);
toast.custom((id) => <span>{id}</span>, toastOptions);
const promiseHandle: ToastPromiseHandle<{ name: string }> = toast.promise(
  Promise.resolve({ name: 'Saved' }),
  promiseOptions
);
void promiseHandle;
toast.getHistory();
toast.getToasts();

const ScopedToastConsumer = () => {
  const { toast: scopedToast } = useToast();
  scopedToast satisfies ToastApi;
  scopedToast.promise(Promise.resolve({ name: 'Saved' }), promiseOptions);
  return null;
};

toast.promise(Promise.resolve('Saved'), {
  success: async (result) => ({ message: result, ...toastOptions }),
  error: (error: Error) => ({ message: error.message, ...toastOptions }),
});

void (
  <Toast.Provider
    scope="local"
    id="workspace"
    limit={4}
    rich
    closable
    defaults={toastDefaults}
    swipe={['left', 'right']}
    label="Notifications"
    offset={{ base: { top: 24, right: '1rem' }, mobile: { bottom: 12 } }}
  >
    <ScopedToastConsumer />
    <Toast limit={2} defaults={toastDefaults} />
    <Toast.Toaster defaults={toastDefaults} />
    <Sonner rich closable limit={3} defaults={toastDefaults} />
  </Toast.Provider>
);

// @ts-expect-error 旧容器配置已移除。
void (<Sonner richColors />);
// @ts-expect-error 旧容器配置已移除。
void (<Toast toastOptions={{}} />);
// @ts-expect-error 旧描述样式入口已合并到 classes。
toast('Saved', { descriptionClassName: 'description' });
// @ts-expect-error 旧按钮槽位已改为短名。
toast('Saved', { classes: { actionButton: 'action' } });
toast('Saved', {
  action: {
    label: 'Undo',
    onClick() {},
    // @ts-expect-error Action 使用 style。
    actionButtonStyle: {},
  },
});
// @ts-expect-error 深色颜色已并入 colors.dark。
void (<Provider theme={{ darkColors: { primary: 'green' } }} />);
// @ts-expect-error 上游仅支持操作与取消按钮的行内样式。
toast('Saved', { styles: { description: { color: 'red' } } });
// @ts-expect-error 单条 rich 配置不能作为全局 defaults 字段。
void (<Sonner defaults={{ rich: true }} />);
