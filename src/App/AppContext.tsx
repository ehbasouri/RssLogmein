import React, {createContext} from 'react';

export interface AppContextType {
  feeds: any[];
  loading: boolean;
  feedDetails: any;
  fetchRss: (e: string, navigation: any) => void;
  addOrRemoveFromFavourites: (e: string, add: boolean) => void;
  favouriteFeeds: string[];
  onEntryPress: (e: string) => void;
}

interface AppContextProviderProps {
  children?: React.ReactNode;
  value: AppContextType;
}

export const AppContext = createContext<Partial<AppContextType>>({});

export function AppContextProvider({children, value}: AppContextProviderProps) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
