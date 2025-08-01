import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
type WelcomeMsgProp={
    userName:string
}
function WelcomeMsg({userName}:WelcomeMsgProp){
    return <View>
        <Text> {userName+""}</Text>
    </View>
}

export default function UserInfo(){
    const[isLogin,logOut]=useState(false);
    const[userName, setUserName]=useState("Sonu");
    return <View style={styles.container}>
        {isLogin?<View><WelcomeMsg userName={userName}/> <Button title="Change name" onPress={()=>{setUserName("Name changed")}}></Button></View>:<Text>Plz Login First</Text>}
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