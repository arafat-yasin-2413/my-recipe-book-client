import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import LoaderSpinner from "../components/Loader/LoaderSpinner";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import UpdateRecipe from "../components/UpdateRecipe/UpdateRecipe";
import Login from "../components/Login/Login";
import SignUp from "../components/SingnUp/SignUp";


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
                path: 'recipe/:id',
                loader: ({params})=> fetch(`http://localhost:3000/recipes/${params.id}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: RecipeDetails,
            },  
        
            {
                path: 'updateRecipe/:id',
                loader: ({params})=> fetch(`http://localhost:3000/recipes/${params.id}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                element: <UpdateRecipe></UpdateRecipe>,
            },
            {
                path: 'myRecipe',
                element: <h2>My Recipe Page</h2>
            },



            {
                path: 'login',
                Component: Login,

            },

            {
                path: 'signup',
                Component: SignUp,
                
            }
        ]

    },





    {
        path: "/*",
        element: <h2>This is error page</h2>
    },
])


export default router;