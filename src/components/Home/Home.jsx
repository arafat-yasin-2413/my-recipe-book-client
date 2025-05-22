import React from "react";
import { useLoaderData } from "react-router";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const Home = () => {
	const recipes = useLoaderData();
	console.log(recipes);

	return (
		<div className="my-10">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            {
                recipes.map((recipe)=>(
                    <SingleRecipe key={recipe._id} recipe = {recipe}></SingleRecipe>
                ))
            }


            </div>
		</div>
	);
};

export default Home;
