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
  Avatar: { shape: 'square', size: 'sm' },
  Button: { size: 'sm', variant: 'outline' },
  Card: { variant: 'outline' },
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
