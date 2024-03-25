import React, { useState, useCallback } from 'react';
import { Text, SafeAreaView, View, StatusBar } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import AddButton from '../../components/AddButton';
import NotesList from '../../components/NotesList';
import OptionsModal from '../../components/OptionsModal';
import ScreenHeader from '../../components/ScreenHeader';

import useTheme from '../../hooks/useTheme';
import { useStores } from '../../models';
import { NotesScreenNavigationProp } from '../../types';
import { SCREENS } from '../../constants/path';

import { getStyles } from './styles';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = () => {
  const { t } = useTranslation();
  const { backgroundStyle, isDarkMode } = useTheme();
  const navigation = useNavigation<NotesScreenNavigationProp>();
  const rootStore = useStores();
  const [isModalVisible, setModalVisible] = useState(false);
  const [sortByCreateOrder, updateSortByCreateOrder] = useState(false);
  const [sortByEditOrder, updateSortByEditOrder] = useState(false);
  const styles = getStyles(isDarkMode);

  const menuBtnPressHandler = () => {
    setModalVisible(!isModalVisible);
  };

  const onSortByCreatePress = useCallback(() => {
    rootStore.sortByTimeCreated(sortByCreateOrder);
    updateSortByCreateOrder(!sortByCreateOrder);
    navigation.navigate(SCREENS.HOME, {});
  }, [sortByCreateOrder]);

  const onSortByEditPress = useCallback(() => {
    rootStore.sortByTimeEdited(sortByEditOrder);
    updateSortByEditOrder(!sortByEditOrder);
    navigation.navigate(SCREENS.HOME, {});
  }, [sortByEditOrder]);

  const screenOptions = [
    {
      label: 'options.sortCreated',
      id: 1,
      pressHandler: onSortByCreatePress,
      icon: sortByCreateOrder ? 'arrowup' : 'arrowdown',
    },
    {
      label: 'options.sortEdited',
      id: 2,
      pressHandler: onSortByEditPress,
      icon: sortByEditOrder ? 'arrowup' : 'arrowdown',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScreenHeader
        showSearch
        handleMenuPress={menuBtnPressHandler}
        handleSearchPress={() => console.log('hi')}
      />
      <OptionsModal
        isModalVisible={isModalVisible}
        updateModalVisible={setModalVisible}
        options={screenOptions}
      />
      <View style={styles.bodyStyles}>
        <Text style={styles.title}>{t('screens.home.title')}</Text>
        <Text style={styles.subTitle}>
          {t('screens.home.subTitle', { count: rootStore.notesCount })}
        </Text>
        <NotesList data={rootStore.Notes} />
      </View>
      <AddButton />
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
