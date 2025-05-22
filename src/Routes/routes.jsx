import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import LoaderSpinner from "../components/Loader/LoaderSpinner";

const router = createBrowserRouter([
    {   
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                loader: ()=> fetch('http://localhost:3000/recipes'),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: Home,
            },
            {
                path: 'allRecipe',
                element: <h2>All Recipe Page</h2>
            },
            {
                path: 'addRecipe',
                element: <AddRecipe></AddRecipe>,
            },
            {
                path: 'updateRecipe',
                element: <h2>Update Recipe Page</h2>
            },
            {
                path: 'myRecipe',
                element: <h2>My Recipe Page</h2>
            },
        ]

    },





    {
        path: "/*",
        element: <h2>This is error page</h2>
    },
])


export default router;