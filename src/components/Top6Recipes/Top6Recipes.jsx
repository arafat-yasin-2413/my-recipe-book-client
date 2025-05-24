import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { Typewriter } from "react-simple-typewriter";

const Top6Recipes = () => {
	const initialRecipes = useLoaderData();
	const [recipes, setRecipes] = useState(initialRecipes);
	// const { user } = use(AuthContext);

	// console.log(recipes);

	return (
		<div className="">
			<section className="bg-gray-200 px-4 my-10 py-4 rounded-2xl">
				<h2 className="text-3xl dark:text-black text-center font-bold">
					<Typewriter
						words={["Our Top Recipes"]}
						loop={true}
                        cursor
						cursorStyle='|' 
                        typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
                        >
					</Typewriter>
					
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
					{recipes.length > 0 &&
						recipes.map((recipe) => (
							<SingleRecipe
								key={recipe._id}
								recipe={recipe}
								recipes={recipes}
								setRecipes={setRecipes}
							></SingleRecipe>
						))}
				</div>
			</section>
		</div>
	);
};

export default Top6Recipes;
