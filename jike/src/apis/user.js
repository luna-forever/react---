import { request } from "@/utils";

export function loginAPI(form){
    return request({
        url:'/authorizations',
        method:'POST',
        data:form
    })
}

export function userAPI(){
    return request({
        url:'/user/profile',
        method:'GET'
    })
}