import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {TokensProvider} from './context/TokensContext'
import {HubProvider} from './context/HubContext'
import {NavigationsProvider} from './context/NavigationsContext'
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokensProvider>
      <HubProvider>
        <NavigationsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NavigationsProvider>
      </HubProvider>
    </TokensProvider>
  </React.StrictMode>
);


