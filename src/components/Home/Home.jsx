import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
	const initialRecipes = useLoaderData();
	const [recipes, setRecipes] = useState(initialRecipes);
    const {user} = use(AuthContext)
    console.log(user);


    // console.log(user?.photoURL);


	console.log(recipes);
    console.log(user?.displayName);

	return (
		<div className="my-10">


            

			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				{
                
                recipes.length > 0 &&
                recipes.map((recipe) => (
					<SingleRecipe
						key={recipe._id}
						recipe={recipe}
						recipes={recipes}
						setRecipes={setRecipes}
					></SingleRecipe>
				))}
			</div>
		</div>
	);
};

export default Home;
