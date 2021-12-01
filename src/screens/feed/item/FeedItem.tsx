import React from 'react';
import {
  Button,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Feed} from 'feed';
import {feedStyles} from '../feedStyles';

interface Props {
  feed?: string;
  onPress?: () => void;
  onFavouritePress?: (e: GestureResponderEvent) => void;
  isFav?: boolean;
  favouriteFeeds?: Feed[];
}

export function FeedItem({feed, onFavouritePress, onPress, isFav}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID="feed-item"
      style={feedStyles.feedItemContainer}>
      <Text testID="feed-title">{feed}</Text>
      <Button
        title={isFav ? 'remove from Favourite' : 'add To Favourite'}
        onPress={onFavouritePress}
        testID={'favourite-button'}
      />
    </TouchableOpacity>
  );
}
