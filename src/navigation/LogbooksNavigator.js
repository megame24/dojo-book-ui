import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import constants from '../config/constants';
import LogbooksScreen from '../screens/LogbooksScreen';
import CreateLogbookScreen from '../screens/CreateLogbookScreen';

const Stack = createNativeStackNavigator();

function LogbooksNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={constants.LOGBOOKS_SCREEN}
        component={LogbooksScreen}
      />
      <Stack.Screen
        name={constants.CREATE_LOGBOOK_SCREEN}
        component={CreateLogbookScreen}
      />
    </Stack.Navigator>
  );
}

export default LogbooksNavigator;
