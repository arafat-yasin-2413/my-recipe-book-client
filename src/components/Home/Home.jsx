import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { AuthContext } from "../../contexts/AuthContext";
import Banner from "../Banner/Banner";

const Home = () => {
	const initialRecipes = useLoaderData();
	const [recipes, setRecipes] = useState(initialRecipes);
	const { user } = use(AuthContext);
	console.log(user);

	// console.log(user?.photoURL);

	console.log(recipes);
	// console.log(user?.displayName);

	return (
		<div>

            <Banner></Banner>


			<div className="mt-10">
				<Link to="/recipes/top">
					<button className="btn py-12 px-2 text-4xl">
						Top 6 Recipes
					</button>
				</Link>
			</div>



            {/* All Recipe section */}
			<section>
				<h2 className="text-3xl text-center font-bold mt-24">
					All Recipes Home Page
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

export default Home;
