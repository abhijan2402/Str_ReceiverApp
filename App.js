import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

const App = () => {

  return (
    <ScrollView style={styles.MainView}>
      <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 20, color: "black", fontWeight: "700" }}>Order Details</Text>
      </View>
      <View style={styles.BoxView}>
        <View>
          <Text style={{ fontSize: 17, color: "black", fontWeight: "700" }}>Order Details:</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>1) Cheese Momos</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>2) Veg Momos</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>3) Spicy Momos</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order By: Abhishek</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order ID: 46215823</Text>
        </View>
        <View style={styles.DetailView}>
          <Text style={styles.TextPrice}>Amount : 464/-</Text>
          <TouchableOpacity style={styles.Amount}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Ok</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.OrderReadyView}>
            <Text style={styles.OrderReadyText}>Ready</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.OrderReadyView, { backgroundColor: "red" }]}>
            <Text style={styles.OrderReadyText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BoxView}>
        <View>
          <Text style={{ fontSize: 17, color: "black", fontWeight: "700" }}>Order Details:</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>1) Cheese Momos</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>2) Veg Momos</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>3) Spicy Momos</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order By: Abhishek</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order ID: 46215823</Text>
        </View>
        <View style={styles.DetailView}>
          <Text style={styles.TextPrice}>Amount : 464/-</Text>
          <TouchableOpacity style={styles.Amount}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Ok</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.OrderReadyView}>
            <Text style={styles.OrderReadyText}>Ready</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.OrderReadyView, { backgroundColor: "red" }]}>
            <Text style={styles.OrderReadyText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BoxView}>
        <View>
          <Text style={{ fontSize: 17, color: "black", fontWeight: "700" }}>Order Details:</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>1) Cheese Momos</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>2) Veg Momos</Text>
          <Text style={{ fontSize: 20, color: "black", margin: 5 }}>3) Spicy Momos</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order By: Abhishek</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order ID: 46215823</Text>
        </View>
        <View style={styles.DetailView}>
          <Text style={styles.TextPrice}>Amount : 464/-</Text>
          <TouchableOpacity style={styles.Amount}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Ok</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.OrderReadyView}>
            <Text style={styles.OrderReadyText}>Ready</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.OrderReadyView, { backgroundColor: "red" }]}>
            <Text style={styles.OrderReadyText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: "#BEFBC9"
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
    // borderWidth: 1,
    padding: 6,
    borderRadius: 8,
    paddingHorizontal: 20,
    backgroundColor: "#09A124"
  },
  TextPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "black"
  },
  OrderReadyView: {
    borderRadius: 8,
    paddingVertical: 7,
    marginVertical: 20,
    backgroundColor: "#18B900",
    alignItems: "center",
    paddingHorizontal: 6,
    width: windoWidth / 2.5,
  },
  OrderReadyText: {
    fontSize: 15,
    color: "white"
  }
});

export default App;
