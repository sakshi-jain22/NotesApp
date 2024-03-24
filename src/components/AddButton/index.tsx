import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import useTheme from '../../hooks/useTheme';

import { COLOR } from '../../constants/color';
import { SCREENS, StackNavigation } from '../../constants/path';

import { getStyles } from './styles';

const AddButton: React.FC = () => {
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);
  const { navigate } = useNavigation<StackNavigation>();

  const btnPressHandler = () => {
    navigate(SCREENS.NOTES, { shouldCreateNote: true });
  };

  return (
    <TouchableWithoutFeedback onPress={btnPressHandler}>
      <View style={styles.container}>
        <AntDesign name="plus" size={30} color={COLOR.WHITE} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddButton;
