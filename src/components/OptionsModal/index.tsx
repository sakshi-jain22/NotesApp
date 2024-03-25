import React, { useCallback, useMemo } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';

import useTheme from '../../hooks/useTheme';
import { COLOR } from '../../constants/color';

import { getStyles } from './styles';

interface IOptionsModal {
  isModalVisible: boolean;
  updateModalVisible: (isVisible: boolean) => void;
  options: Array<{
    label: string;
    id: number;
    pressHandler?: Function;
    icon?: string;
  }>;
}

const OptionsModal: React.FC<IOptionsModal> = (props) => {
  const { t } = useTranslation();
  const { isModalVisible, updateModalVisible, options } = props;
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  const closeModal = useCallback(() => {
    updateModalVisible(false);
  }, []);

  const renderModalOptions = useMemo(() => {
    return options.map((option) => (
      <TouchableOpacity
        key={option.id}
        onPress={() => {
          if (option?.pressHandler) option?.pressHandler();
        }}
        onPressOut={closeModal}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{t(option.label)}</Text>
        {option.icon && (
          <AntDesign
            name={option.icon}
            style={styles.optionIcon}
            size={14}
            color={isDarkMode ? COLOR.SNOW_WHITE : COLOR.EERIE_BLACK}
          />
        )}
      </TouchableOpacity>
    ));
  }, [options]);

  if (!isModalVisible) return null;

  return (
    <View onTouchEnd={closeModal} style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
        style={styles.modalStyle}>
        <View style={styles.modalContainer}>{renderModalOptions}</View>
      </Modal>
    </View>
  );
};

export default OptionsModal;
