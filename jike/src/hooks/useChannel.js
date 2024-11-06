import {useState,useEffect} from 'react'
import { getChannelAPI } from '@/apis/article'

function useChannel(){
    const [channelList,setChannelList]=useState([])
    useEffect(()=>{
        async function fetchChannel(){
        const res=await getChannelAPI()
        setChannelList(res.data.data.channels)
        }
        fetchChannel()
    },[])
    return {channelList}
}

export {useChannel}