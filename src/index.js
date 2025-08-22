import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <ConfigProvider theme={{ token: { colorPrimary: '#1E223B' } }}>
  <App />
    </ConfigProvider>
  </BrowserRouter>
  </React.StrictMode>
);