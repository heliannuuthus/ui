import React from 'react';
import ReactDOM from 'react-dom/client';
import '@heliannuuthus/ui/styles.css';
import './showcase.css';
import { Showcase } from './showcase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Showcase />
  </React.StrictMode>
);
