import React, { useCallback, useMemo } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import useTheme from '../../hooks/useTheme';

import { getStyles } from './styles';

interface IOptionsModal {
  isModalVisible: boolean;
  updateModalVisible: (isVisible: boolean) => void;
  options: Array<{ label: string; id: number; pressHandler?: Function }>;
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
      </TouchableOpacity>
    ));
  }, []);

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
