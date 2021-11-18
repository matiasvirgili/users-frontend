import React from 'react';
import ReactDOM from 'react-dom';
import UsersApp from './UsersApp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UsersApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
