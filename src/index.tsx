import React from 'react';
import ReactDOM from 'react-dom/client';

import "utils/roboto"

import './index.css';

import { App } from 'components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
