import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type WelcomeMsgProp={
    userName:string
}
function WelcomeMsg({userName}:WelcomeMsgProp){
    return <View>
        <Text>Welcome {userName+""}</Text>
    </View>
}

export default function Home(){
    const[isLogin,logOut]=useState(true);
    const[userName, setUserName]=useState("Sonu");
    return <View style={styles.container}>
        {isLogin?<WelcomeMsg userName={userName}/>:<View><Text>Plz SignIn</Text></View>}
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