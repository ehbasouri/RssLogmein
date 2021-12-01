import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ENTRY, FAVOURITE_LIST, FEED_LIST} from '../consts';
import FeedList from '../screens/feed/FeedList';
import Entry from '../screens/entry/Entry';
import Favourite from '../screens/favourite/Favourite';
import * as rssParser from 'react-native-rss-parser';

const NullHeader = () => null;

type FeedListParams = {
  feed_list: any;
  entry: rssParser.Feed;
  favourite_list: any;
};

export type FeedListNavigationProps = NativeStackScreenProps<
  FeedListParams,
  'feed_list'
>;
export type EntryNavigationProps = NativeStackScreenProps<
  FeedListParams,
  'entry'
>;
export type FavouriteNavigationProps = NativeStackScreenProps<
  FeedListParams,
  'entry'
>;

const Stack = createNativeStackNavigator();

function AppRouter(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: NullHeader,
          }}
          name={FEED_LIST}
          component={FeedList}
        />
        <Stack.Screen
          options={{
            header: NullHeader,
          }}
          name={ENTRY}
          component={Entry}
        />
        <Stack.Screen
          options={{
            header: NullHeader,
          }}
          name={FAVOURITE_LIST}
          component={Favourite}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
