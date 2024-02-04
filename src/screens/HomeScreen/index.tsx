import React from 'react';
import { Text, SafeAreaView, View, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';

import AddButton from '../../components/AddButton';
import NotesList from '../../components/NotesList';
import ScreenHeader from '../../components/ScreenHeader';

import useTheme from '../../hooks/useTheme';

import { getStyles } from './styles';

interface IHomeScreen {
  count?: number;
}

const HomeScreen: React.FC<IHomeScreen> = (props) => {
  const { count = 0 } = props;
  const { t } = useTranslation();
  const { backgroundStyle, isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScreenHeader
        showSearch
        handleMenuPress={() => console.log('bye')}
        handleSearchPress={() => console.log('hi')}
      />
      <View style={styles.bodyStyles}>
        <Text style={styles.title}>{t('screens.home.title')}</Text>
        <Text style={styles.subTitle}>
          {t('screens.home.subTitle', { count })}
        </Text>
        <NotesList />
      </View>
      <AddButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
