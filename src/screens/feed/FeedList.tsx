import {Feed} from 'feed';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {FeedListNavigationProps} from '../../App/AppRouter';
import {FeedHooks} from './feedHooks';
import {FeedItem} from './item';

function FeedList({navigation}: FeedListNavigationProps): JSX.Element {
  const {feeds, loading} = FeedHooks();

  function onFeedItemPress(feed: Feed): void {
    navigation.navigate('entry', feed);
  }

  return (
    <View>
      {loading && <Text testID={'loading'}>loading ...</Text>}
      <FlatList
        data={feeds}
        renderItem={({item}) => (
          <FeedItem onPress={() => onFeedItemPress(item)} feed={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default FeedList;
