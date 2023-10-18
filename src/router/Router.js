import {createBrowserRouter} from "react-router-dom";
import {Home} from "../page/Home"

export const Router = createBrowserRouter([
    {
        path: "/user/:userId",
        element: <Home />
    }
])