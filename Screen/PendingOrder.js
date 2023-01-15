import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from 'react-native';
import { log } from 'react-native-reanimated';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function PendingOrder() {
    let [allOrderArray1, setallOrderArray1] = useState([])
    let NewData = []
    useEffect(() => {
        data();
    }, []);
    const data = async () => {
        await fetch(`https://ordermanagementserver-production.up.railway.app/orderPending`, {
            method: "GET",
            headers: {
                'Content-Type': 'application.json'
            },
        }).then((res) => res.json()).then((data) => {
            NewData.push(data);
            setallOrderArray1(NewData)
        })
    }
    const confirmOrder = (item) => {
        item.order.forEach(element => {
            fetch(`https://ordermanagementserver-production.up.railway.app/orderReady`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application.json'
                },
                body:JSON.stringify({
                    orderId:element._id
                })
            }).then((res) => res.json()).
            then((response) => {
                console.log(response)
            })
            .catch((e)=>{
                console.log(e)
            }) 
        });
    }
    return (
        <ScrollView style={styles.MainView}>
            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "700" }}>All Pending Order Details</Text>
            </View>
            {
                allOrderArray1.length == 0 ? null :
                    allOrderArray1.map((item,index) => (
                        <View key={index} style={styles.BoxView} >
                            <View>
                                <Text style={{ fontSize: 17, color: "black", fontWeight: "700", alignSelf: "center" }}>Order Details:</Text>
                                <Text style={{ fontSize: 16, color: "black", fontWeight: "700", marginVertical: 10, marginHorizontal: 10 }}>Item Details</Text>
                                {
                                    item.order.map((value) => (
                                        <>
                                            <Text key={value._id} style={{ fontSize: 20, color: "black", margin: 5 }}>dishName: {value.dishName}</Text>
                                            <Text style={{ fontSize: 20, color: "black", margin: 5 }}>quantity: {value.amount}</Text>
                                            <Text style={{ fontSize: 20, color: "black", margin: 5 }}>price: {value.price}</Text>
                                        </>

                                    ))
                                }
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order By: {item.name}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "green", margin: 10, fontWeight: "600" }}>Order ID: {item._id}</Text>
                            </View>
                            <View>
                                <Text style={[styles.TextPrice, { marginHorizontal: 10 }]}>Phone :{item.phone}</Text>
                            </View>
                            <View>
                                <Text style={[styles.TextPrice, { marginHorizontal: 10, marginVertical: 20 }]}>Address :{item.address}</Text>
                            </View>
                            <View style={styles.DetailView}>
                                <Text style={styles.TextPrice}>Amount :{item.totalAmount}</Text>
                                <TouchableOpacity style={styles.Amount}>
                                    <Text style={{ color: "green", fontSize: 20, fontWeight: "600" }}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity style={styles.OrderReadyView} onPress={()=>confirmOrder(item)}>
                                    <Text style={styles.OrderReadyText}>Ready</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.OrderReadyView, { backgroundColor: "red", borderColor: "white" }]}>
                                    <Text style={[styles.OrderReadyText, { color: "white" }]}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
            }




        </ScrollView >
    )
}
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
export default PendingOrder