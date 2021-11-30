import {Feed} from 'feed';
import React from 'react';
import {FlatList, View} from 'react-native';
import {FavouriteNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {FeedItem} from '../feed/item';
import {FavouriteHooks} from './favouriteHooks';

function Favourite({navigation}: FavouriteNavigationProps) {
  const {addOrRemoveFromFavourites, favouriteFeeds} = FavouriteHooks();

  function onBackPress() {
    navigation.goBack();
  }

  function onFeedItemPress(feed: Feed): void {
    navigation.navigate('entry', feed);
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <RssHeader
            showBack
            onBackPress={onBackPress}
            title={'Favourite List'}
          />
        }
        data={favouriteFeeds}
        renderItem={({item}) => (
          <FeedItem
            isFav
            onFavePress={() => addOrRemoveFromFavourites(item)}
            onPress={() => onFeedItemPress(item)}
            feed={item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

export default Favourite;
