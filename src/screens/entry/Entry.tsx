import React from 'react';
import {FlatList, Linking, View} from 'react-native';
import {EntryNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {EntryItem} from './item';

export default function Entry({navigation, route}: EntryNavigationProps) {
  const {options, items} = route.params;
  function onBackPress() {
    navigation.goBack();
  }

  function onEntryPress(url: string) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <RssHeader showBack onBackPress={onBackPress} title={options.title} />
        }
        data={items}
        renderItem={({item}) => {
          return (
            <EntryItem onPress={() => onEntryPress(item.link)} entry={item} />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}
