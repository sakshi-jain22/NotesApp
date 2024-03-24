import React from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import NotesItem from '../NotesItem';

import useTheme from '../../hooks/useTheme';
import { useStores } from '../../models';
import { INotesItem } from '../../types';
import { SCREENS } from '../../../src/constants/path';
import { NotesScreenNavigationProp } from '../../types';

import { getStyles } from './styles';

const NotesList = () => {
  const navigation = useNavigation<NotesScreenNavigationProp>();
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);
  const store = useStores();

  const notesPressHandler = (item: INotesItem) => () =>
    navigation.navigate(SCREENS.NOTES, {
      ...item,
      shouldCreateNote: false,
    });

  const renderItem = ({ item }: { item: INotesItem }) => {
    return (
      <TouchableHighlight
        key={item.id}
        onPress={notesPressHandler(item)}
        style={styles.listItem}>
        <View>
          <NotesItem {...item} />
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <FlatList
      data={store.Notes}
      renderItem={renderItem}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default observer(NotesList);
