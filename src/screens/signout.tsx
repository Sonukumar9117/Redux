import {Button, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../store/userAction";
import { RootState } from "../store/stores";

export default function SignOut(){
    const {isSignedIn}=useSelector((state:RootState)=>state.userData);
    const dispatch=useDispatch();
    return <View style={styles.container}>
        {isSignedIn?<Button title="SignOut" onPress={()=>{dispatch(logoutAction())}}/>:<Button title="signIn" onPress={()=>{dispatch(loginAction())}}/>}
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