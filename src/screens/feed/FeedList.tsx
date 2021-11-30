import {Feed} from 'feed';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {FeedListNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {FeedHooks} from './feedHooks';
import {FeedItem} from './item';

function FeedList({navigation}: FeedListNavigationProps): JSX.Element {
  const {feeds, loading, addOrRemoveFromFavourites, favouriteFeeds} = FeedHooks();

  function onFeedItemPress(feed: Feed): void {
    navigation.navigate('entry', feed);
  }

  function onRighButtonPress() {
    navigation.navigate('favourite_list');
  }

  return (
    <View>
      {loading && <Text testID={'loading'}>loading ...</Text>}
      <FlatList
        ListHeaderComponent={
          <RssHeader
            onRighButtonPress={onRighButtonPress}
            title={'Feed List'}
            rightTitle={'Favourite'}
          />
        }
        data={feeds}
        renderItem={({item}) => (
          <FeedItem
            onFavePress={() => addOrRemoveFromFavourites(item)}
            onPress={() => onFeedItemPress(item)}
            feed={item}
            favouriteFeeds={favouriteFeeds}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderIndices={[0]}
        extraData={favouriteFeeds}
      />
    </View>
  );
}

export default FeedList;
