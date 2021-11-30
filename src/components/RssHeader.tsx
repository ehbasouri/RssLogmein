import React from 'react';
import {Text, View} from 'react-native';
import {componentStyles} from './componentStyles';

interface Props {
  title: string | undefined;
  onBackPress?: () => void;
  showBack?: boolean | undefined;
  onRighButtonPress?: () => void | undefined;
  rightTitle: string | undefined;
}

export function RssHeader({
  title,
  showBack,
  onBackPress,
  onRighButtonPress,
  rightTitle,
}: Props) {
  return (
    <View style={componentStyles.headerContainer}>
      <Text onPress={onBackPress} style={componentStyles.back}>
        {showBack && 'BACK'}
      </Text>
      <Text style={componentStyles.title}>{title}</Text>
      <Text onPress={onRighButtonPress} style={componentStyles.back}>
        {rightTitle}
      </Text>
    </View>
  );
}
