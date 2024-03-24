import { StyleSheet } from 'react-native';

import { COLOR } from '../../constants/color';

export const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? COLOR.CARIBBEAN_GREEN : COLOR.GOLDEN_YELLOW,
      position: 'absolute',
      bottom: 10,
      right: 10,
      borderRadius: 50,
      height: 55,
      width: 55,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      shadowColor: isDarkMode ? COLOR.GRANITE_GRAY : COLOR.BLACK,
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
  });
