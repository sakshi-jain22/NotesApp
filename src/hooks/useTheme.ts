import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return { isDarkMode, backgroundStyle, Colors };
};

export default useTheme;
