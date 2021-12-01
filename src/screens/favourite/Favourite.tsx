import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {AppContext} from '../../App/AppContext';
import {FavouriteNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {FeedItem} from '../feed/item';

function Favourite({navigation}: FavouriteNavigationProps) {
  const {addOrRemoveFromFavourites, favouriteFeeds, fetchRss} =
    useContext(AppContext);

  function onBackPress() {
    navigation.goBack();
  }

  function onFeedItemPress(feed: string): void {
    fetchRss && fetchRss(feed, navigation);
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
            onFavouritePress={() =>
              addOrRemoveFromFavourites &&
              addOrRemoveFromFavourites(item, false)
            }
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
