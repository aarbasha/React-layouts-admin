import Singup from "../layouts/auth/Singup"
import Login from "../layouts/auth/Login"
import Home from '../components/frontend/Home'
import About from '../components/frontend/About'
// import Card from "../components/frontend/Card"
import MasterUsers from "../layouts/frontend/MasterUsers"
import {RouteAuthUser} from "./RouteAuthUser"

export const RouterUser = () => {
    return (
        [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
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
            {
                path: 'user',
                element: <MasterUsers />,
                children: RouteAuthUser()

            }
        ]
    )
}