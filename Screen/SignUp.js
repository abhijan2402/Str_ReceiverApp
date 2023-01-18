import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {
  return (
    <View>
    <View style={styles.header}>
   
  <Text style={styles.main}>SignUp</Text>
  </View>
  <View style={{marginTop:50,marginLeft:15}}>
  
   
    <View>
   <TextInput style={{ backgroundColor: '#ededed', height: 60,width:250,marginLeft:50,marginTop:100 }} placeholder={"Email"} />
   </View>
   <View>
   <TextInput style={{ backgroundColor: '#ededed', height: 60,width:250,marginLeft:50,marginTop:30 }} placeholder={"Password"}   secureTextEntry={true}/>
   </View> 
  </View>
  <TouchableOpacity style={{ height: 50,width: 250,marginLeft:70,marginTop: 20,backgroundColor: 'green',borderRadius:20,marginBottom:150}}>
<Text style={{textAlign:'center',marginTop:15,color:"white",fontFamily:"SourceSansPro-Bold",fontSize:15}} onPress={()=>{navigation.navigate("pendingOrder")}}>SignUp</Text>
</TouchableOpacity>
</View>
)
}

export default SignUp

const styles = StyleSheet.create({
header:{
    display:"flex",
    flexDirection:"row",
    marginTop:25,
    justifyContent:"center"
},
 main:{
   textAlign:"center",
   fontSize:30,
  paddingBottom:10,
  color:"green",
  fontFamily:"SourceSansPro-BoldItalic"
},
})