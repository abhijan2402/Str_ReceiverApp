import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';

function PendingOrder() {
    let [allOrderArray1, setallOrderArray1] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const [fcmToken, setfcmToken] = useState(null);
    const [allUsersToken, setAllUsersToken] = useState([])


    let NewData = []
    useEffect(() => {
        data();
        getFcmToken()
        getAllUsers()
    }, []);
    const data = async () => {
        await fetch(`https://ordermanagementserver-production.up.railway.app/orderPending`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((data) => {
            NewData.push(data);
            setallOrderArray1(...NewData)
            // console.log(allOrderArray1, "I am new json")

        })
    }
    const confirmOrder = (item) => {
        console.log(item._id);
        fetch(`https://ordermanagementserver-production.up.railway.app/orderReady`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderId: item._id
            })
        })
            .then((res) => res.json())
            .then((response) => {
                alert(response.message)
                notificationHandler();
                data();
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const onRefresh = useCallback(() => {
        data()
    }, []);
    const getAllUsers = () => {
        firestore().collection('Users').get()
            .then(querySnapShot => {
                const user = querySnapShot._docs.map((token) => {
                    return token._data.UserFcmToken
                })
                setAllUsersToken(user)
            })
            .catch((e) => {
                console.log(e);
            })
    }
    const notificationHandler = () => {
        fetch('https://ordermanagementnotification-production.up.railway.app/triggerNotification', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                tokens: allUsersToken,
                notificationBody: "Order is ready"
            })
        })
            .then((res) => res.json())
            .then((data) => console.log(data.message))
            .catch((e) => {
                console.log(e);
            })
    }
    const getFcmToken = async () => {
        let FCMToken=await messaging().getToken();
        setfcmToken(FCMToken)
    }
    const logOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (
        <ScrollView style={styles.MainView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                <Text style={{ fontSize: 20, color: "black", fontFamily: "Ubuntu-Bold" }}>Pending Order Details</Text>
                <TouchableOpacity style={{ borderWidth: 1, padding: 10, marginVertical: 20, borderRadius: 5 }} onPress={logOut}><Text style={{color:"black"}}>LogOut</Text></TouchableOpacity>
            </View>
            {
                allOrderArray1.length == 0 ? null :
                    allOrderArray1.map((item, index) => (
                        <View key={index} style={styles.BoxView} >
                            <View>
                                <Text style={{ fontSize: 16, color: "black", fontFamily: "Ubuntu-Bold", marginVertical: 10, marginHorizontal: 10 }}>Item Details</Text>
                                {
                                    item.order.map((value) => (
                                        <>
                                            <Text key={value._id} style={{ fontSize: 20, color: "black", margin: 5, fontFamily: "Ubuntu-Regular" }}>dishName: {value.dishName} - (quantity: {value.amount})</Text>
                                        </>

                                    ))
                                }
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "green", margin: 10, fontFamily: "Ubuntu-Medium" }}>Order By: {item.name}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "green", margin: 10, fontFamily: "Ubuntu-Medium" }}>Order ID: {item._id}</Text>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.OrderReadyView} onPress={() => confirmOrder(item)}>
                                    <Text style={styles.OrderReadyText}>Ready</Text>
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
        fontFamily: "Ubuntu-Medium",
        color: "black"
    },
    OrderReadyView: {
        borderRadius: 4,
        paddingVertical: 7,
        marginVertical: 20,
        backgroundColor: "white",
        alignItems: "center",
        marginHorizontal: 30,
        borderColor: "#09A124",
        borderWidth: 1
    },
    OrderReadyText: {
        fontSize: 15,
        color: "green",
        fontFamily: "Ubuntu-Medium"
    }
});
export default PendingOrder