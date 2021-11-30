import {Item} from 'feed';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {entryStyles} from '../entryStyles';

interface Props {
  entry: Item;
  onPress: () => void;
}

export function EntryItem({entry, onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={'entry-item'}
      style={entryStyles.entryItemContainer}>
      <Text>{entry?.title}</Text>
      <Text style={entryStyles.link}>{entry?.link}</Text>
    </TouchableOpacity>
  );
}
