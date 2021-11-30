import {Feed} from 'feed';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FavouriteNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {FeedItem} from '../feed/item';

function Favourite({navigation}: FavouriteNavigationProps) {
  const favouriteFeeds: Feed[] = useSelector(
    state => state?.general_reducer?.favouriteFeeds,
  );

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
          <FeedItem onPress={() => onFeedItemPress(item)} feed={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Favourite;
