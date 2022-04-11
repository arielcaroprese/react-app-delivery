/* eslint-disable prettier/prettier */
import React from 'react';

import AppNavigation from './navigation/index';

import { Provider } from 'react-redux';

import store from './store/index';

const App = () => {

  return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
  );
};

export default App;
