import React from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import {Feed} from 'feed';
import {feedStyles} from '../feedStyles';
import moment from 'moment';

interface Props {
  feed: Feed;
  onPress: () => void;
  onFavePress: () => void;
}

export function FeedItem({feed, onFavePress, onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID="feed-item"
      style={feedStyles.feedItemContainer}>
      <Text testID="feed-title">{feed?.options?.title}</Text>
      <Text>{feed?.options?.description}</Text>
      <Text>
        {moment(feed?.options?.updated).subtract(10, 'days').calendar()}
      </Text>
      <Button title={'fave'} onPress={onFavePress} />
    </TouchableOpacity>
  );
}
