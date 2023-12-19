import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './navigation/BottomTabs';

import './i18n/i18next';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
