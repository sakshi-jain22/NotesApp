import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

import TodoScreen from '../../screens/TodoScreen';
import HomeStack from '../HomeStack';

import useTheme from '../../hooks/useTheme';
import { COLOR } from '../../constants/color';
import { RootTabsParamList } from '../../types';
import { SCREENS } from '../../constants/path';

const Tab = createBottomTabNavigator<RootTabsParamList>();

const BottomTabs: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: isDarkMode
          ? COLOR.ALTO_GRAY_DC
          : COLOR.EERIE_BLACK,
        tabBarInactiveTintColor: isDarkMode
          ? COLOR.ZAMBEZI_GRAY
          : COLOR.NOBEL_GRAY,
        tabBarActiveBackgroundColor: !isDarkMode ? COLOR.WHITE : COLOR.BLACK,
        tabBarInactiveBackgroundColor: !isDarkMode ? COLOR.WHITE : COLOR.BLACK,
      }}>
      <Tab.Screen
        name={SCREENS.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: t('tabs.notes'),
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="note-text"
                color={color}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons
                name="note-text-outline"
                color={color}
                size={size}
              />
            ),
        }}
      />
      <Tab.Screen
        name={SCREENS.TODO}
        component={TodoScreen}
        options={{
          tabBarLabel: t('tabs.todos'),
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="clipboard-check"
                color={color}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons
                name="clipboard-check-outline"
                color={color}
                size={size}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
