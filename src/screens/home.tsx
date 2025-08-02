import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/stores";

type WelcomeMsgProp={
    userName:string
}
function WelcomeMsg({userName}:WelcomeMsgProp){
    return <View>
        <Text>Welcome {userName+""}</Text>
    </View>
}

export default function Home(){
    const {userName, isSignedIn}=useSelector((state:RootState)=>state.userData);
    return <View style={styles.container}>
        {isSignedIn?<WelcomeMsg userName={userName}/>:<View><Text>Plz SignIn</Text></View>}
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