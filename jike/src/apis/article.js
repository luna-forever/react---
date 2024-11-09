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

export function getArticleAPI(params){
    return request({
        url:'/mp/articles',
        method:'GET',
        params
    })
}

export function deleteAPI(data){
    return request({
        url:`/mp/articles/${data.id}`,
        method:'DELETE'
    })
}

export function getArticleByIdAPI(id){
    return request({
        url:`/mp/articles/${id}`,
        method:'GET'
    })
}

export function updateAPI(data){
    return request({
        url:`/mp/articles/${data.id}?draft=false`,
        method:'PUT',
        data
    })
}