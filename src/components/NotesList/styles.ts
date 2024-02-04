import { StyleSheet } from 'react-native';

export const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    list: { flexGrow: 0 },
    listItem: {
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 7,
    },
  });
