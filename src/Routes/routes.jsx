import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {   
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'addRecipe',
                element: <h2>Add Coffee Page</h2>,
            },
            {
                path: 'updateCoffee',
                element: <h2>Update Coffee Page</h2>
            },
        ]

    },





    {
        path: "/*",
        element: <h2>This is error page</h2>
    },
])


export default router;