import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from 'react-native';
import AllOrder from './Screen/AllOrder';
import PendingOrder from './Screen/PendingOrder';
import TopBar from './Navigators/TopBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
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
