import { StyleSheet } from 'react-native';

import { COLOR } from '../../constants/color';

export const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? COLOR.MINESHAFT_BLACK : COLOR.WHITE,
      borderRadius: 10,
      elevation: 3,
      padding: 12,
      shadowColor: isDarkMode ? COLOR.GRANITE_GRAY : COLOR.BLACK,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.05,
      shadowRadius: 3,
    },
    subContainer: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      maxHeight: 50,
      minHeight: 24,
      justifyContent: 'space-between',
    },
    imageContainer: {
      borderRadius: 10,
      width: '15%',
      height: '100%',
    },
    imgStyles: {
      height: '100%',
      width: '100%',
      borderRadius: 5,
    },
    titleContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 5,
    },
    titleIcon: {
      marginRight: 4,
    },
    title: {
      color: isDarkMode ? COLOR.WHITE : COLOR.BLACK,
      fontSize: 15,
      paddingTop: 2,
      textAlign: 'center',
      fontWeight: '700',
    },
    subTitle: {
      color: isDarkMode ? COLOR.QUICK_SILVER : COLOR.GRAY,
      fontSize: 12,
      lineHeight: 20,
      marginRight: 5,
      width: '30%',
    },
    dateContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    dateText: {
      color: isDarkMode ? COLOR.GRANITE_GRAY : COLOR.ALTO_GRAY,
      fontSize: 10,
      marginRight: 5,
    },
  });
