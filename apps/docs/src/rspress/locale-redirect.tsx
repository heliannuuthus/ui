import { Button, Layout, Stack, Typography } from '@heliannuuthus/ui';
import { useEffect } from 'react';

export const LocaleRedirect = () => {
  useEffect(() => {
    let locale = navigator.language.toLowerCase().startsWith('zh')
      ? 'zh'
      : 'en';

    try {
      const stored = window.localStorage.getItem('heliannuuthus-ui-locale');
      if (stored === 'zh' || stored === 'en') locale = stored;
    } catch {
      // Storage availability must not block the route fallback.
    }

    window.location.replace(
      `/${locale}/${window.location.search}${window.location.hash}`
    );
  }, []);

  return (
    <Layout.Content className="locale-redirect">
      <Typography.Title level={1}>Heliannuuthus UI</Typography.Title>
      <Typography.Text as="p" tone="muted">
        Choose a documentation language.
      </Typography.Text>
      <nav>
        <Stack orientation="horizontal">
          <Button href="/zh/">中文</Button>
          <Button href="/en/" variant="outline">
            English
          </Button>
        </Stack>
      </nav>
    </Layout.Content>
  );
};
