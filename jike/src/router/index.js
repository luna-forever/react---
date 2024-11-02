import {createBrowserRouter} from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import AuthRoute from '@/components/AuthRoute'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'

const router=createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<AuthRoute><Layout/></AuthRoute>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'article',
                element:<Article/>
            },
            {
                path:'publish',
                element:<Publish/>
            }
        ]
    }
])

export default router