
import Card from "../components/frontend/Card"
import Login from "../layouts/auth/Login"

export const RouteAuthUser = () => {


    return (
        [
            {
                path: "card",
                element: localStorage.getItem("auth") ? <Card /> : <Login />
            }
        ]
    )

}