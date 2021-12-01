import React, {useContext} from 'react';
import {FlatList, View, Text} from 'react-native';
import {AppContext} from '../../App/AppContext';
import {FeedListNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {feedStyles} from './feedStyles';
import {FeedItem} from './item';

function FeedList({navigation}: FeedListNavigationProps): JSX.Element {
  const {feeds, loading, fetchRss, addOrRemoveFromFavourites} =
    useContext(AppContext);

  function onFeedItemPress(feed: string): void {
    fetchRss && fetchRss(feed, navigation);
  }

  function onRighButtonPress() {
    navigation.navigate('favourite_list');
  }

  return loading ? (
    <View style={feedStyles.loadingContainer}>
      <Text>loading ...</Text>
    </View>
  ) : (
    <View>
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
            onFavouritePress={() =>
              addOrRemoveFromFavourites && addOrRemoveFromFavourites(item, true)
            }
            onPress={() => onFeedItemPress(item)}
            feed={item}
            favouriteFeeds={[]}
          />
        )}
        keyExtractor={item => item}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

export default FeedList;
