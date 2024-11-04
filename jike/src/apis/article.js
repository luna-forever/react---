import { request } from "@/utils";

export function getChannelAPI(){
    return request({
        url:'/channels',
        method:'GET'
    })
}

export function publishAPI(data){
    return request({
        url:'/mp/articles?draft=false',
        method:'POST',
        data
    })
}