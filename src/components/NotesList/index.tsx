import React from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NotesItem from '../NotesItem';

import useTheme from '../../hooks/useTheme';
import { INotesItem } from '../../types';
import { SCREENS } from '../../../src/constants/path';
import { NotesScreenNavigationProp } from '../../types';

import { getStyles } from './styles';

interface INotesList {
  data: Array<INotesItem>;
}

const NotesList: React.FC<INotesList> = (props) => {
  const { data } = props;
  const navigation = useNavigation<NotesScreenNavigationProp>();
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

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
      data={data}
      renderItem={renderItem}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NotesList;
