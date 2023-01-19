import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit =async()=>{
    try {
      const loginuser = await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("pendingOrder")
          console.log(loginuser)
    } catch (error) {
      
    }
  }

  return (
    <View>
       <View style={styles.header}>
         <Text style={styles.main}>Login</Text>
       </View>

       <View style={{marginTop: 150, marginLeft: 15}}>
          <View>
             <TextInput style={{backgroundColor: '#ededed',height: 60,width: 250,marginLeft: 50,marginTop: 30,}}
             value={email} onChangeText={value=>setEmail(value)}
                 placeholder={'Email'}
       />
          </View>
          <View>
             <TextInput style={{ backgroundColor: '#ededed', height: 60, width: 250, marginLeft: 50, marginTop: 30,}}secureTextEntry={true}
             value={password} onChangeText={value=>setPassword(value)}
               placeholder={'Password'}/>
      </View>
    </View>
   
    <TouchableOpacity style={{height: 50,width: 250,marginLeft: 70,marginTop: 20,backgroundColor: 'green',borderRadius: 20,marginBottom: 10,}}>
       <Text style={{textAlign: 'center',marginTop: 15,color: 'white',fontFamily: 'SourceSansPro-Bold',fontSize: 15,}} 
        onPress={()=>submit()}
        >Login</Text>  
    </TouchableOpacity>

    <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <Text>Don't Have an Account?</Text>
      <Text style={{color:"blue"}} onPress={()=>{navigation.navigate("SignUp")}}>Sign Up</Text>
      </View>

  </View>
);
}


export default Login;

const styles = StyleSheet.create({
header: {
display: 'flex',
flexDirection: 'row',
marginTop: 25,
justifyContent:"center"
},
main: {
textAlign: 'center',
fontSize: 30,
color: 'green',
fontFamily: 'SourceSansPro-BoldItalic',
},
});
