import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import AllOrder from '../Screen/AllOrder';
import PendingOrder from '../Screen/PendingOrder';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from 'react-native-vector-icons/Octicons';
const Tab = createBottomTabNavigator();

const TopBar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
     
      tabBarShowLabel: false,
      showIcon: false,
  
          tabBarStyle:[ {
            backgroundColor:"#FFFFFF",
            height:70,
          },],
          activeTintColor: 'pink',
        }}>
      <Tab.Screen name="AllOrder" component={AllOrder} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>AllOrder</Text>
          </View>
        )
      }}
      />
      <Tab.Screen  name="PendingOrder" component={PendingOrder} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>PendingOrder</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default TopBar

const styles = StyleSheet.create({})