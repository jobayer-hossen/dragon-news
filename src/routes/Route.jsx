import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Category from "../pages/Home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/news/News";
import LoginLayout from "../layouts/LoginLayout";
import LogIn from "../pages/login/LogIn";
import Resister from "../pages/resister/Resister";
import PrivateRoute from "./PrivateRoute";
import Tarms from "./Tarms";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0' ></Navigate>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            },
            {
                path:'/terms',
                element:<Tarms></Tarms>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[

            // {
            //     path:'/',
            //     element:<Category></Category>,
            //     loader:()=>fetch('http://localhost:5000/news')
            // },
            {
                path:':id',
                element:<Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <PrivateRoute><News></News></PrivateRoute> ,
                loader :({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router ;