import { createBrowserRouter } from "react-router";
import App from "../App";

const router = createBrowserRouter([
    {   
        path: '/',
        element: <App></App>,

    },





    {
        path: "/*",
        element: <h2>This is error page</h2>
    },
])


export default router;