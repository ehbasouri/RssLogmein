import React from 'react';
import {Text, View} from 'react-native';
import {entryStyles} from '../entryStyles';
import * as rssParser from 'react-native-rss-parser';

interface Props {
  entry: rssParser.FeedItem;
  onPress?: (e: string) => void;
}

export function EntryItem({entry, onPress}: Props) {
  return (
    <View style={entryStyles.entryItemContainer}>
      <Text>{entry?.title}</Text>
      {entry.links.map(link => (
        <Text
          key={link.url}
          testID={'entry-item'}
          onPress={() => onPress && onPress(link.url)}
          style={entryStyles.link}>
          {link.url}
        </Text>
      ))}
    </View>
  );
}
