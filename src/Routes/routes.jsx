import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import LoaderSpinner from "../components/Loader/LoaderSpinner";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import UpdateRecipe from "../components/UpdateRecipe/UpdateRecipe";
import Login from "../components/Login/Login";
import SignUp from "../components/SingnUp/SignUp";
import PrivateRoute from "../providers/PrivateRoute";
import Top6Recipes from "../components/Top6Recipes/Top6Recipes";
import AllRecipe from "../components/AllRecipe/AllRecipe";
import ErrorPage from "../pages/ErrorPage";
import MyRecipe from "../components/MyRecipe/MyRecipe";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout></RootLayout>,
		children: [
			{
				index: true,
				loader: () => fetch("http://localhost:3000/recipes/top"),
				hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
				Component: Home,
			},

			{
				path: "allRecipe",
				loader: () => fetch("http://localhost:3000/recipes"),
				hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
				Component: AllRecipe,
			},
			{
				path: "addRecipe",
				element: (
					<PrivateRoute>
						<AddRecipe></AddRecipe>
					</PrivateRoute>
				),
			},

			{
				path: "recipe/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/recipes/${params.id}`),
				hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
				element: (
					<PrivateRoute>
						<RecipeDetails></RecipeDetails>
					</PrivateRoute>
				),
			},

			// {
			// 	path: "updateRecipe/:id",
			// 	loader: ({ params }) =>
			// 		fetch(`http://localhost:3000/recipes/${params.id}`),
			// 	hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
			// 	element: <UpdateRecipe></UpdateRecipe>,
			// },
			{
				path: "myRecipe",
                loader: () => fetch("http://localhost:3000/recipes"),
				hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
				element: (
					<PrivateRoute>
						<MyRecipe></MyRecipe>
					</PrivateRoute>
				),
			},

			{
				path: "login",
				Component: Login,
			},

			{
				path: "signup",
				Component: SignUp,
			},
		],
	},

	{
		path: "/*",
		element: <ErrorPage></ErrorPage>,
	},
]);

export default router;
