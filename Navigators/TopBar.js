import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllOrder from '../Screen/AllOrder';
import PendingOrder from '../Screen/PendingOrder';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TopBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllOrder" component={AllOrder} />
      <Tab.Screen name="PendingOrder" component={PendingOrder} />
    </Tab.Navigator>
  )
}

export default TopBar

const styles = StyleSheet.create({})