import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
import { getToken,setToken as _setToken } from '@/utils'

const userStore=createSlice({
    name:'user',
    initialState:{
        token:getToken()||''
    },
    reducers:{
        setToken(state,action){
            state.token=action.payload
            _setToken(action.payload)
        }
    }
})

const {setToken}=userStore.actions
const userReducer=userStore.reducer

const fetchToken=(form)=>{
    return async (dispatch)=>{
        const res=await request.post('/authorizations',form)
        console.log(res)
        console.log(res.data.data.token)
        dispatch(setToken(res.data.data.token))
    }
}

export {setToken,fetchToken}
export default userReducer