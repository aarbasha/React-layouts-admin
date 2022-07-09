
import Card from "../components/frontend/Card"
import Login from "../layouts/auth/Login"
import Favorite from "../components/frontend/Favorite"

export const RouteAuthUser = () => {


    return (
        [
            {
                path: "card",
                element: localStorage.getItem("auth") ? <Card /> : <Login />
            },
            {
                path: "favorite",
                element: localStorage.getItem("auth") ? <Favorite /> : <Login />
            }
        ]
    )

}