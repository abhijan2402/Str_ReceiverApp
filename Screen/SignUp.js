import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onsubmit = async () => {
    try {

      if (email === '')
        throw "Enter email"
      if (password === '')
        throw "Enter Password"
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          firestore().collection('Users').doc(user.uid).set({
            UserFcmToken: userFcmToken
          })
            .then(() => {
              console.log('User added!');
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          // console.error(error);
        });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View>
      <View style={styles.header}>

        <Text style={styles.main}>SignUp</Text>
      </View>
      <View style={{ marginTop: 50, marginLeft: 15 }}>


        <View>
          <TextInput style={{ backgroundColor: '#ededed', height: 60, width: 250, marginLeft: 50, marginTop: 100 }}
            value={email} onChangeText={value => setEmail(value)}
            placeholder={"Email"} />
        </View>
        <View>
          <TextInput style={{ backgroundColor: '#ededed', height: 60, width: 250, marginLeft: 50, marginTop: 30 }} placeholder={"Password"}
            value={password} onChangeText={value => setPassword(value)}
            secureTextEntry={true} />
        </View>
      </View>
      <TouchableOpacity style={{ height: 50, width: 250, marginLeft: 70, marginTop: 20, backgroundColor: 'green', borderRadius: 20, marginBottom: 150 }}>
        <Text style={{ textAlign: 'center', marginTop: 15, color: "white", fontFamily: "SourceSansPro-Bold", fontSize: 15 }} onPress={() => onsubmit()}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center"
  },
  main: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 10,
    color: "green",
    fontFamily: "SourceSansPro-BoldItalic"
  },
});