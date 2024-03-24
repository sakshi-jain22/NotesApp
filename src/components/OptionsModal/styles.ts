import { StyleSheet } from 'react-native';

import { COLOR } from '../../constants/color';

export const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      position: 'absolute',
      backgroundColor: 'yellow',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 20,
      position: 'absolute',
      backgroundColor: isDarkMode ? COLOR.EERIE_BLACK : COLOR.WHITE,
      borderRadius: 10,
      right: 10,
      top: 10,
      minWidth: 150,
    },
    modalStyle: {
      margin: 80,
      borderRadius: 10,
      padding: 35,
      alignItems: 'center',
      shadowColor: isDarkMode ? COLOR.GRANITE_GRAY : COLOR.BLACK,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonStyle: {
      margin: 8,
    },
    textStyle: {
      color: isDarkMode ? COLOR.SNOW_WHITE : COLOR.EERIE_BLACK,
      fontSize: 14,
      fontWeight: '500',
    },
  });
