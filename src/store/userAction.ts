import { CHANGE_NAME, LOGIN, LOGOUT } from "./type"

export function loginAction(){
    return {
        type:LOGIN,
        payload:true,
    }
}

export function logoutAction(){
    return {
        type:LOGOUT,
        payload:false,
    }
}

export function changeName(userName:string){
    return {
        type:CHANGE_NAME,
        payload:userName
    }
}