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
          <Stack.Screen name="TopBar" component={TopBar} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <AllOrder /> */}
    </>
  );
};

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: "white",
    width: windoWidth,
    height: windoHeight
  },
  BoxView: {
    // borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FEF8FB"
  },
  DetailView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
    // justifyContent: "space-around"
  },
  Amount: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 4,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderColor: "green"
  },
  TextPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "black"
  },
  OrderReadyView: {
    borderRadius: 4,
    paddingVertical: 7,
    marginVertical: 20,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 6,
    width: windoWidth / 2.5,
    borderColor: "#09A124",
    borderWidth: 1
  },
  OrderReadyText: {
    fontSize: 15,
    color: "green"
  }
});

export default App;
