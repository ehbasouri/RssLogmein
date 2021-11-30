import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Feed} from 'feed';
import {feedStyles} from '../feedStyles';
import moment from 'moment';

interface Props {
  feed: Feed;
}

export function FeedItem({feed}: Props) {
  return (
    <TouchableOpacity testID="feed-item" style={feedStyles.feedItemContainer}>
      <Text testID="feed-title">{feed?.options?.title}</Text>
      <Text>{feed?.options?.description}</Text>
      <Text>
        {moment(feed?.options?.updated).subtract(10, 'days').calendar()}
      </Text>
    </TouchableOpacity>
  );
}
