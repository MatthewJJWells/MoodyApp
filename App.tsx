import React from 'react';
import Home from './Screens/Home/Home.screen';
import { Provider } from 'react-redux';
import userReducer from './Redux/reducers/userReducer';
import { createStore } from 'redux';
import * as d3 from 'd3';

const store = createStore(userReducer);
const App: React.FC<Record<string, never>> = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
