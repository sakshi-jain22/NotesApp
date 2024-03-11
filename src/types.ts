import {
  NavigationProp,
  CompositeNavigationProp,
} from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

import { SCREENS } from './constants/path';

export interface INotesItem {
  title: string;
  note: string;
  date: string;
  image?: ImageSourcePropType;
  showImage?: boolean;
  id?: string;
}

export type StackScreenNames = [SCREENS.HOME, SCREENS.NOTES];
export type TabScreenNames = [SCREENS.HOME_STACK, SCREENS.TODO];

export type RootStackParamList = Record<
  StackScreenNames[number],
  { shouldCreateNote?: boolean; note?: string; title?: string }
>;
export type RootTabsParamList = Record<TabScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;
export type TabNavigation = BottomTabNavigationProp<RootTabsParamList>;

export type NotesScreenNavigationProp = CompositeNavigationProp<
  TabNavigation,
  StackNavigation
>;
