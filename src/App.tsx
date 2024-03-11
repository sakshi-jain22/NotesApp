import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './navigation/BottomTabs';
import { StoreProvider } from './models';

import './i18n/i18next';

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
