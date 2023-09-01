import {createBrowserRouter} from "react-router-dom";
import {Test} from "../page/Test"

export const Router = createBrowserRouter([
    {
        path: "",
        element: "",
        children: [
            {
                path: "",
                element: <Test />
            }
        ]
    },
    {
        path: "*",
        element: <div>error</div>
    }
])