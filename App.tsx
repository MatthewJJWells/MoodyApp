import React from 'react';
import { Home } from './Screens/index';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';

const store = configureStore();

const App: React.FC<Record<string, never>> = () => {
  console.log('this is the state: ', store);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
