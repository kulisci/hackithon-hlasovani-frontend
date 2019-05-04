import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { StoreProvider } from './Store';
import './styles.css';

const jsx = (
  <StoreProvider>
    <AppRouter />
  </StoreProvider>
);

ReactDOM.render(jsx, document.getElementById('root'));
