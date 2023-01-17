import React, { useEffect, useState } from 'react';
import TopBar from './Navigators/TopBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationListner, requestUserPermission } from './src/utils/NotificationHandlers';
import InternetCheck from './src/utils/InternetCheck';
import PendingOrder from './Screen/PendingOrder';
const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    requestUserPermission();
    NotificationListner()
  }, [])
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="pendingOrder" component={PendingOrder} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

      <InternetCheck />
    </>
  );
};


export default App;
