import {
  Avatar,
  Button,
  Card,
  Provider,
  useProvider,
  type ProviderComponents,
  type ProviderTheme,
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
  Slider: { effect: 'none' },
  Spinner: { size: 'sm' },
  Tabs: { animation: 'slide', centered: true, variant: 'line' },
  Tag: { type: 'primary' },
  Toggle: { variant: 'outline' },
  Typography: { Text: { size: 'sm', tone: 'muted', weight: 'medium' } },
} satisfies ProviderComponents;

const theme = {
  colors: {
    primary: 'oklch(0.55 0.17 155)',
    primaryForeground: 'white',
  },
  darkColors: {
    primary: 'oklch(0.72 0.15 155)',
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
