import React from 'react'
import { useRoutes } from 'react-router-dom'
import MasterAdmin from '../layouts/admin/MasterAdmin'

import MasterUsers from "../layouts/frontend/MasterUsers"

// import Login from ""
import Singup from "../layouts/auth/Singup"
import Login from "../layouts/auth/Login"
import Home from '../components/frontend/Home'
import About from '../components/frontend/About'
// import MasterAuth from '../layouts/auth/MasterAuth'

import Dashborde from "../components/admin/Dashborde"
import Index2 from "../components/admin/Index2"
import Error_404 from "../components/admin/Error_404"
const Router = () => {

    const RouterAdmin = () => {
        return (
            [
                {
                    path: "index",
                    element: <Dashborde />,
                },
                {
                    path: "app",
                    element: <Index2 />,
                },
            ]
        )
    }

    const RouterUser = () => {
        return (
            [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'singup',
                    element: <Singup />
                },
            ]
        )
    }

    const Router = useRoutes([
        {
            path: "/admin",
            element: <MasterAdmin />,
            children: RouterAdmin()
        },
        {
            path: "/",
            element: <MasterUsers />,
            children: RouterUser()
        },
        {
            path: "*",
            element: <Error_404 />
        }
    ])

    return Router
}

export default Router