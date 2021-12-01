import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {AppContext} from '../../App/AppContext';
import {EntryNavigationProps} from '../../App/AppRouter';
import {RssHeader} from '../../components/RssHeader';
import {EntryItem} from './item';

export default function Entry({navigation, route}: EntryNavigationProps) {
  const {onEntryPress} = useContext(AppContext);
  const {items, title} = route.params;
  function onBackPress() {
    navigation.goBack();
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <RssHeader showBack onBackPress={onBackPress} title={title} />
        }
        data={items}
        renderItem={({item}) => {
          return <EntryItem onPress={onEntryPress} entry={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}
