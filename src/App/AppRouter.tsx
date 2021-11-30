import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ENTRY, FEED_LIST} from '../consts';
import FeedList from '../screens/feed/FeedList';
import Entry from '../screens/entry/Entry';

const Stack = createNativeStackNavigator();

function AppRouter(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={FEED_LIST} component={FeedList} />
        <Stack.Screen name={ENTRY} component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
