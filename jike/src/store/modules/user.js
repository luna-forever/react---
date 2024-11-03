import { createSlice } from '@reduxjs/toolkit'
import { clearToken } from '@/utils'
import { getToken,setToken } from '@/utils'
import { loginAPI, userAPI } from '@/apis/user'

const userStore=createSlice({
    name:'user',
    initialState:{
        token:getToken()||'',
        userInfo:{}
    },
    reducers:{
        setUserToken(state,action){
            state.token=action.payload
            setToken(action.payload)
        },
        setUserInfo(state,action){
            state.userInfo=action.payload
        },
        clearUserInfo(state){
            state.token=''
            state.userInfo={}
            clearToken()
        }
    }
})

const {setUserToken,setUserInfo,clearUserInfo}=userStore.actions
const userReducer=userStore.reducer

const fetchToken=(form)=>{
    return async (dispatch)=>{
        const res=await loginAPI(form)
        console.log(res)
        dispatch(setUserToken(res.data.data.token))
    }
}

const fetchUserInfo=()=>{
    return async (dispatch)=>{
        const res=await userAPI()
        console.log(res)
        dispatch(setUserInfo(res.data.data))
    }
}

export {setUserToken,fetchToken,fetchUserInfo,clearUserInfo}
export default userReducer