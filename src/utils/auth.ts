import { redirect } from "react-router-dom";

export const currentUser = ()=>{
    const currentUser = localStorage.getItem("currentUser");
    let user: object | null = null
    if(currentUser !== null){
        user = JSON.parse(currentUser);
    }
    return user
}

export const authTokenCheck = ()=>{
    const access_token = localStorage.getItem("accessToken");
    if(access_token === null){
        console.log("proteced")
        return redirect('/authentication/login')
    }
}