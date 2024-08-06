// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/scss/main.scss';

// Import App Component
import App from './pages/main';
import appConfig from '../app-config.json';

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById('app')!);
root.render(React.createElement(App));