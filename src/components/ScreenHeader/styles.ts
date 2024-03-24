import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '20%',
  },
  rightContainer: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  headerIconHighlight: {
    borderRadius: 50,
    height: '100%',
    width: '36%',
    alignItems: 'center',
    display: 'flex',
    padding: 3,
    marginVertical: 5,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 3,
  },
});
