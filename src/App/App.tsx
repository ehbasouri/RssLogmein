import React from 'react';
import AppRouter from './AppRouter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducer';

export default function App(): JSX.Element {
  return (
    <Provider store={createStore(reducers, {})}>
      <AppRouter />
    </Provider>
  );
}
