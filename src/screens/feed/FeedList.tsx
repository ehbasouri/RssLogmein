import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {FeedHooks} from './feedHooks';
import {FeedItem} from './item';

function FeedList(): JSX.Element {
  const {feeds, loading} = FeedHooks();

  return (
    <View>
      {loading && <Text testID={'loading'}>loading ...</Text>}
      <FlatList
        data={feeds}
        renderItem={({item}) => <FeedItem feed={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default FeedList;
