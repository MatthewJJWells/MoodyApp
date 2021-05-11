import React from 'react';
import { Home } from './Screens/index';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import userReducer from './reducers/userReducer';
import { createStore } from 'redux';

const store = createStore(userReducer);
const App: React.FC<Record<string, never>> = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
