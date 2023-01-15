import React, { useEffect, useState } from 'react';
import TopBar from './Navigators/TopBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NotificationListner,requestUserPermission} from './src/utils/NotificationHandlers';
const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(()=>{
    requestUserPermission();
    NotificationListner()
  },[])
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TopBar" component={TopBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <AllOrder /> */}
    </>
  );
};


export default App;
