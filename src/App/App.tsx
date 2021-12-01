import React from 'react';
import AppRouter from './AppRouter';
import {CustomHooks} from './customHooks';
import {AppContextProvider} from './AppContext';

export default function App(): JSX.Element {
  const appcontext = CustomHooks();
  return (
    <AppContextProvider value={appcontext}>
      <AppRouter />
    </AppContextProvider>
  );
}
