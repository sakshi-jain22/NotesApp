import React from 'react';
import { View, Text, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import useTheme from '../../hooks/useTheme';

import { COLOR } from '../../constants/color';
import { INotesItem } from '../../types';

import Logo from '../../../src/assets/images/tiny_logo.png';

import { getStyles } from './styles';

const NotesItem: React.FC<INotesItem> = (props) => {
  const { title = '', note = '', date = '', image, showImage = false } = props;
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle} numberOfLines={1} ellipsizeMode="tail">
          {note}
        </Text>
        {showImage && (
          <View style={styles.imageContainer}>
            <Image source={image || Logo} style={styles.imgStyles} />
          </View>
        )}
      </View>
      <View style={styles.dateContainer}>
        <AntDesign
          name="sync"
          style={styles.titleIcon}
          size={8}
          color={isDarkMode ? COLOR.GRANITE_GRAY : COLOR.ALTO_GRAY}
        />
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

export default NotesItem;
