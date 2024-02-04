import React, { useCallback, useState, useRef } from 'react';
import { View, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import ScreenHeader from '../../components/ScreenHeader';

import useTheme from '../../hooks/useTheme';
import { StackNavigation } from '../../types';

import { getStyles } from './styles';

interface INotesScreen {
  navigation: StackNavigation;
  route: {
    params: {
      note: string;
      title: string;
      shouldCreateNote?: boolean;
    };
  };
}

const NOTE_MAX_LENGTH = 1000;

const NotesScreen: React.FC<INotesScreen> = (props) => {
  const { navigation, route } = props;
  const { note, title, shouldCreateNote = false } = route.params;
  const { t } = useTranslation();

  const { backgroundStyle, isDarkMode } = useTheme();
  const [titleText, setTitleText] = useState(title);
  const [shouldRenderSaveBtn, updateRenderSaveBtn] = useState(false);
  const [noteText, setNoteText] = useState(note);
  const titleRef = useRef<TextInput>(null);
  const noteRef = useRef<TextInput>(null);
  const styles = getStyles(isDarkMode);

  const backPressHandler = useCallback(() => {
    navigation.goBack();
  }, []);

  const menuPressHandler = useCallback(() => {
    console.log('pressed');
  }, []);

  const savePressHandler = useCallback(() => {
    console.log('saved: ', titleText, noteText);
    updateRenderSaveBtn(false);
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
    console.log('ref: ', titleRef.current);
    setTitleText(text);
    if (titleRef.current) titleRef.current.value = text;
  };

  const handleOnNoteChange = (text: string) => {
    console.log('ref: ', noteRef.current);
    setNoteText(text);
    if (noteRef.current) noteRef.current.value = text;
  };

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
          ref={titleRef}
          onFocus={showSaveBtnOnFocus}
          onBlur={hideSaveBtnOnBlur}
        />
        <TextInput
          style={styles.inputNote}
          onChangeText={handleOnNoteChange}
          placeholder={t('screens.notes.placeHolderText')}
          multiline
          maxLength={NOTE_MAX_LENGTH}
          ref={noteRef}
          onFocus={showSaveBtnOnFocus}
          onBlur={hideSaveBtnOnBlur}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotesScreen;
