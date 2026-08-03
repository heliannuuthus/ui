import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'lxgw-wenkai-screen-webfont/lxgwwenkaigbscreen.css';
import 'lxgw-wenkai-webfont/lxgwwenkai-regular.css';
import 'lxgw-wenkai-webfont/lxgwwenkai-bold.css';
import 'lxgw-wenkai-webfont/lxgwwenkaimono-regular.css';
import 'lxgw-wenkai-webfont/lxgwwenkaimono-bold.css';
import '@heliannuuthus/ui/_internal/styles/global.css';
import { Showcase } from './showcase';
import './tailwind.css';
import './showcase.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      basename={window.location.hostname.endsWith('github.io') ? '/ui' : '/'}
    >
      <Routes>
        <Route path="/" element={<Showcase page="home" />} />
        <Route
          path="/docs/getting-started"
          element={<Showcase page="getting-started" />}
        />
        <Route path="/design" element={<Showcase page="design" />} />
        <Route path="/components" element={<Showcase page="components" />} />
        <Route
          path="/components/:component"
          element={<Showcase page="component" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
