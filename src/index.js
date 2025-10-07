import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element to mount React app.');
}

const enableConcurrentRoot = typeof ReactDOM.createRoot === 'function';

if (enableConcurrentRoot) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
  );
}

// Register the service worker to enable offline caching and faster reloads.
// Learn more about potential trade-offs: https://bit.ly/CRA-PWA
serviceWorker.register();
