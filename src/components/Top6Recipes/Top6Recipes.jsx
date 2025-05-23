import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const Top6Recipes = () => {

    const initialRecipes = useLoaderData();
	const [recipes, setRecipes] = useState(initialRecipes);
	const { user } = use(AuthContext);

    console.log(recipes);

    return (
        <div>


            <section>
				<h2 className="text-3xl text-center font-bold mt-24">
					Our Top 6 Recipes 
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