import React from 'react';
import ReactDOM from 'react-dom/client';
import { IDProvider } from './IDContext';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IDProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </IDProvider>
);


