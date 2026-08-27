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
    <main className="locale-redirect">
      <h1>Heliannuuthus UI</h1>
      <p>Choose a documentation language.</p>
      <nav>
        <a href="/zh/">中文</a>
        <a href="/en/">English</a>
      </nav>
    </main>
  );
};
