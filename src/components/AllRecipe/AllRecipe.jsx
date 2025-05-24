import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const AllRecipe = () => {

    const initialRecipes = useLoaderData();
	const [recipes, setRecipes] = useState(initialRecipes);
	// const { user } = use(AuthContext);

    return (
        <div>
          
            <section className='bg-blue-100 p-4 rounded-2xl my-10'>
				<h2 className="text-3xl text-center font-bold mt-10">
					All Recipes
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

export default AllRecipe;