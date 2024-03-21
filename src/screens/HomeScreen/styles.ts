import { StyleSheet } from 'react-native';

import { COLOR } from '../../constants/color';

export const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? COLOR.NERO : COLOR.SNOW_WHITE,
      height: '100%',
    },
    bodyStyles: {
      paddingTop: 10,
      paddingHorizontal: 10,
      flex: 1,
    },
    title: {
      color: isDarkMode ? COLOR.WHITE : COLOR.BLACK,
      fontSize: 24,
    },
    subTitle: {
      color: isDarkMode ? COLOR.WHITE : COLOR.BLACK,
      fontSize: 10,
    },
  });
