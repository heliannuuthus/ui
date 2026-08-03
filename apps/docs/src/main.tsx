import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'lxgw-wenkai-screen-webfont/lxgwwenkaigbscreen.css';
import 'lxgw-wenkai-webfont/lxgwwenkai-regular.css';
import 'lxgw-wenkai-webfont/lxgwwenkai-bold.css';
import 'lxgw-wenkai-webfont/lxgwwenkaimono-regular.css';
import 'lxgw-wenkai-webfont/lxgwwenkaimono-bold.css';
import '@heliannuuthus/ui/styles.css';
import './i18n';
import { DocsApp } from './docs-app';
import './tailwind.css';
import './showcase.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      basename={window.location.hostname.endsWith('github.io') ? '/ui' : '/'}
    >
      <DocsApp />
    </BrowserRouter>
  </React.StrictMode>
);
