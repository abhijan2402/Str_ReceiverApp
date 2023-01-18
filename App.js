import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationListner, requestUserPermission } from './src/utils/NotificationHandlers';
import InternetCheck from './src/utils/InternetCheck';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp'
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="pendingOrder" component={PendingOrder} />
        </Stack.Navigator>
      </NavigationContainer>

      <InternetCheck />
    </>
  );
};


export default App;
