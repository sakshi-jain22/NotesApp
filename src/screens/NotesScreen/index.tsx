import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TextInputProps,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import ScreenHeader from '../../components/ScreenHeader';

import useTheme from '../../hooks/useTheme';
import { useStores } from '../../models';
import { COLOR } from '../../constants/color';
import { SCREENS } from '../../constants/path';
import { StackNavigation } from '../../types';

import { getStyles } from './styles';

interface INotesScreen {
  navigation: StackNavigation;
  route: {
    params: {
      note: string;
      shouldCreateNote?: boolean;
      title: string;
      id: string;
    };
  };
}

const NOTE_MAX_LENGTH = 1000;

const NotesScreen: React.FC<INotesScreen> = (props) => {
  const { navigation, route } = props;
  const { note = '', title = '', shouldCreateNote = false, id } = route.params;
  const { t } = useTranslation();
  const store = useStores();

  const { backgroundStyle, isDarkMode } = useTheme();
  const [titleText, setTitleText] = useState(title);
  const [shouldRenderSaveBtn, updateRenderSaveBtn] = useState(false);
  const [noteText, setNoteText] = useState(note);
  const titleRef = useRef<TextInput & TextInputProps>(null);
  const noteRef = useRef<TextInput & TextInputProps>(null);
  const styles = getStyles(isDarkMode);

  const backPressHandler = useCallback(() => {
    navigation.goBack();
  }, []);

  const menuPressHandler = useCallback(() => {
    console.log('pressed');
  }, []);

  const savePressHandler = useCallback(() => {
    if (shouldCreateNote) {
      store.addNote({
        title: titleRef.current?.value || '',
        note: noteRef.current?.value || '',
        date: `${new Date().toLocaleString()}`,
      });
    } else {
      store.updateNote(
        {
          title: titleRef.current?.value || '',
          note: noteRef.current?.value || '',
          date: `${new Date().toLocaleString()}`,
        },
        id,
      );
    }
    updateRenderSaveBtn(false);
    if (titleRef.current) titleRef.current.value = '';
    if (noteRef.current) noteRef.current.value = '';
    navigation.navigate(SCREENS.HOME, {});
  }, []);

  const showSaveBtnOnFocus = () => {
    if (titleRef.current?.isFocused || noteRef.current?.isFocused) {
      console.log('showing on focus');
      updateRenderSaveBtn(true);
    }
  };

  const hideSaveBtnOnBlur = () => {
    if (!titleRef.current?.isFocused && !noteRef.current?.isFocused) {
      console.log('hiding on blur');
      updateRenderSaveBtn(false);
    }
  };

  const handleOnTitleChange = (text: string) => {
    setTitleText(text);
    if (titleRef.current) titleRef.current.value = text;
  };

  const handleOnNoteChange = (text: string) => {
    setNoteText(text);
    if (noteRef.current) noteRef.current.value = text;
  };

  useEffect(() => {
    if (titleRef.current) titleRef.current.value = title;
    if (noteRef.current) noteRef.current.value = note;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScreenHeader
        handleBackPress={backPressHandler}
        handleMenuPress={menuPressHandler}
        handleSavePress={savePressHandler}
        showBack
        showCloseIcon={shouldCreateNote}
        showShare={!shouldRenderSaveBtn}
        showSave={shouldRenderSaveBtn}
      />
      <View style={styles.bodyStyles}>
        <TextInput
          style={styles.inputTitle}
          onChangeText={handleOnTitleChange}
          placeholder={t('screens.notes.heading')}
          placeholderTextColor={
            isDarkMode ? COLOR.ZAMBEZI_GRAY : COLOR.NOBEL_GRAY
          }
          ref={titleRef}
          onFocus={showSaveBtnOnFocus}
          onBlur={hideSaveBtnOnBlur}
          value={titleText}
        />
        <TextInput
          style={styles.inputNote}
          onChangeText={handleOnNoteChange}
          placeholder={t('screens.notes.placeHolderText')}
          placeholderTextColor={
            isDarkMode ? COLOR.ZAMBEZI_GRAY : COLOR.NOBEL_GRAY
          }
          multiline
          maxLength={NOTE_MAX_LENGTH}
          ref={noteRef}
          onFocus={showSaveBtnOnFocus}
          onBlur={hideSaveBtnOnBlur}
          value={noteText}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(NotesScreen);
