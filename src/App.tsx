import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
