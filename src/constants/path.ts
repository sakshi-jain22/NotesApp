import { NavigationProp } from '@react-navigation/native';

export enum SCREENS {
  NOTES = 'Notes',
  HOME = 'Home',
  HOME_STACK = 'HomeStack',
  TODO = 'Todo',
}

export type StackScreenNames = [SCREENS.HOME, SCREENS.NOTES];
export type TabScreenNames = [SCREENS.HOME_STACK, SCREENS.TODO];

export type RootStackParamList = Record<
  StackScreenNames[number],
  { shouldCreateNote?: boolean }
>;
export type RootTabsParamList = Record<TabScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;
export type TabNavigation = NavigationProp<RootTabsParamList>;
