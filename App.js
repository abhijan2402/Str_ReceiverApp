// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ProductDetials from './src/Screens/ProductDetails';
// import ProductForm from './src/Screens/ProductForm';
// import OrderConfirm from './src/Screens/OrderConfirm';
// import Splash from './src/Screens/Splash';
import { requestUserPermission, NotificationListner } from './src/utils/NotificationHandlers';
import InternetCheck from './src/utils/InternetCheck';
import SignIn from './Screen/Login';
import SignUp from './Screen/SignUp';
// import ForgotPass from './Screen';
import auth from '@react-native-firebase/auth';
import PendingOrder from './Screen/PendingOrder';

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    requestUserPermission()
    NotificationListner()
  }, [])
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
          {
            user == null ?
              <>
                <Stack.Screen name="signup" component={SignUp} />
                <Stack.Screen name="login" component={SignIn} />
              </>
              :
              <>
                <Stack.Screen name="PendingOrder" component={PendingOrder} />

              </>
          }
        </Stack.Navigator>
      </NavigationContainer>
      <InternetCheck />
    </>

  );
}

export default App;