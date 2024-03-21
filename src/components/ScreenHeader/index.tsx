import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useTheme from '../../hooks/useTheme';

import { COLOR } from '../../constants/color';

import { styles } from './styles';

interface IScreenHeaderProps {
  handleBackPress?: () => void;
  handleMenuPress: () => void;
  handleSavePress?: () => void;
  handleSearchPress?: () => void;
  handleSharePress?: () => void;
  showBack?: boolean;
  showCloseIcon?: boolean;
  showSave?: boolean;
  showSearch?: boolean;
  showShare?: boolean;
}

const ScreenHeader: React.FC<IScreenHeaderProps> = (props) => {
  const {
    handleBackPress,
    handleMenuPress,
    handleSavePress,
    handleSearchPress,
    handleSharePress,
    showBack = false,
    showCloseIcon = false,
    showSave = false,
    showSearch = false,
    showShare = false,
  } = props;
  const { isDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableHighlight
            style={styles.headerIconHighlight}
            activeOpacity={0.6}
            underlayColor={
              isDarkMode ? COLOR.MINESHAFT_BLACK : COLOR.GAINSBORO_GRAY
            }
            onPress={handleBackPress}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={showCloseIcon ? 'close' : 'keyboard-backspace'}
                size={20}
                color={isDarkMode ? COLOR.WHITE : COLOR.BLACK}
              />
            </View>
          </TouchableHighlight>
        )}
      </View>
      <View style={styles.rightContainer}>
        {showSave && (
          <TouchableHighlight
            style={styles.headerIconHighlight}
            activeOpacity={0.6}
            underlayColor={
              isDarkMode ? COLOR.MINESHAFT_BLACK : COLOR.GAINSBORO_GRAY
            }
            onPress={handleSavePress}>
            <View style={styles.iconContainer}>
              <Feather
                name="check"
                size={20}
                color={isDarkMode ? COLOR.WHITE : COLOR.BLACK}
              />
            </View>
          </TouchableHighlight>
        )}
        {showSearch && (
          <TouchableHighlight
            style={styles.headerIconHighlight}
            activeOpacity={0.6}
            underlayColor={
              isDarkMode ? COLOR.MINESHAFT_BLACK : COLOR.GAINSBORO_GRAY
            }
            onPress={handleSearchPress}>
            <View style={styles.iconContainer}>
              <AntDesign
                name="search1"
                size={20}
                color={isDarkMode ? COLOR.WHITE : COLOR.BLACK}
              />
            </View>
          </TouchableHighlight>
        )}
        {showShare && (
          <TouchableHighlight
            style={styles.headerIconHighlight}
            activeOpacity={0.6}
            underlayColor={
              isDarkMode ? COLOR.MINESHAFT_BLACK : COLOR.GAINSBORO_GRAY
            }
            onPress={handleSharePress}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="share-variant-outline"
                size={20}
                color={isDarkMode ? COLOR.WHITE : COLOR.BLACK}
              />
            </View>
          </TouchableHighlight>
        )}
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={
            isDarkMode ? COLOR.MINESHAFT_BLACK : COLOR.GAINSBORO_GRAY
          }
          style={styles.headerIconHighlight}
          onPress={handleMenuPress}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color={isDarkMode ? COLOR.WHITE : COLOR.BLACK}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ScreenHeader;
