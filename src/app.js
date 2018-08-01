import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './router/AppRouter';

const jsx = (
  <AppRouter />
)


ReactDOM.render(<AppRouter />, document.getElementById("app"));
