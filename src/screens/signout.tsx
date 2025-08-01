import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SignOut(){
    const[isLogin,logOut]=useState(true);
    const[userName, setUserName]=useState("Sonu");
    return <View style={styles.container}>
        {isLogin?<Button title="SignOut" onPress={()=>{logOut(true)}}/>:<Button title="SIgn In" onPress={()=>logOut(false)}/>}
    </View>
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    }
})