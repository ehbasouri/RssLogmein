import React from 'react';
import {Text, View} from 'react-native';
import {componentStyles} from './componentStyles';

interface Props {
  title: string | undefined;
  onBackPress: () => void | undefined;
  showBack?: boolean | undefined;
}

export function RssHeader({title, showBack, onBackPress}: Props) {
  return (
    <View style={componentStyles.headerContainer}>
      <Text onPress={onBackPress} style={componentStyles.back}>
        {showBack && 'BACK'}
      </Text>
      <Text style={componentStyles.title}>{title}</Text>
      <View style={componentStyles.back} />
    </View>
  );
}
