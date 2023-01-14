import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from 'react-native';
import AllOrder from './Screen/AllOrder';
import PendingOrder from './Screen/PendingOrder';

const App = () => {
  return (
    <>
      <PendingOrder />
      {/* <AllOrder /> */}
    </>
  );
};


export default App;
