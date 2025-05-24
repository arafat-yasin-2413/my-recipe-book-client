import React from "react";
import { Link } from "react-router";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { AuthContext } from "../../contexts/AuthContext";
import Banner from "../Banner/Banner";
import Top6Recipes from "../Top6Recipes/Top6Recipes";
import CookingTips from "../CookingTips/CookingTips";

const Home = () => {
	// const initialRecipes = useLoaderData();
	// const [recipes, setRecipes] = useState(initialRecipes);
	// const { user } = use(AuthContext);
	// console.log(user);

	// console.log(user?.photoURL);

	// console.log(recipes);
	// console.log(user?.displayName);

	return (
		<div>
			<Banner></Banner>

			<Top6Recipes></Top6Recipes>

            {/* Show All button */}
			<div  className="flex justify-center items-center">
                <Link to="/allRecipe">
				<button className="relative inline-block text-lg group">
					<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
						<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
						<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 text-white group-hover:-rotate-180 ease"></span>
						<span className="relative font-bold">Show All Recipe</span>
					</span>
					<span
						className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
						data-rounded="rounded-lg"
					></span>
				</button>
                </Link>
			</div>

            <CookingTips></CookingTips>
            
			
		</div>
	);
};

export default Home;
