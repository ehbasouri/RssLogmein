import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ENTRY, FEED_LIST} from '../consts';
import FeedList from '../screens/feed/FeedList';
import Entry from '../screens/entry/Entry';
import {Feed} from 'feed';

type FeedListParams = {
  feed_list: any;
  entry: Feed;
};

export type FeedListNavigationProps = NativeStackScreenProps<
  FeedListParams,
  'feed_list'
>;
export type EntryNavigationProps = NativeStackScreenProps<
  FeedListParams,
  'entry'
>;

const Stack = createNativeStackNavigator();

function AppRouter(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={FEED_LIST} component={FeedList} />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name={ENTRY}
          component={Entry}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
