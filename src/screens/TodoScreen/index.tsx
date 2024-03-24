import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import ScreenHeader from '../../components/ScreenHeader';

const TodoScreen = () => {
  return (
    <SafeAreaView>
      <ScreenHeader handleMenuPress={() => {}} />
      <Text>TodoScreen</Text>
    </SafeAreaView>
  );
};

export default TodoScreen;
