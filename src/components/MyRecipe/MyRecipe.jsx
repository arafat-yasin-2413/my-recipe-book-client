import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import MyRecipeCard from '../MyRecipeCard/MyRecipeCard';

const MyRecipe = () => {


    const initialRecipes = useLoaderData();
    
    
	const { user } = use(AuthContext);
    const userEmail = user.email;
    
    
    const myRecipesOnly = initialRecipes.length > 0 ? 
    initialRecipes.filter((recipe)=> recipe.email === userEmail) : [];
	
    const [recipes, setRecipes] = useState(myRecipesOnly);


    

    // console.log(initialRecipes);

    


    console.log(myRecipesOnly);

    return (
        <div>

            <section className='bg-blue-100 p-4 rounded-2xl my-10'>
				<h2 className="text-3xl text-center font-bold mt-10">
					My Recipes
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
					{recipes.length > 0 &&
						recipes.map((recipe) => (
							<MyRecipeCard
								key={recipe._id}
								recipe={recipe}
								recipes={recipes}
								setRecipes={setRecipes}
							></MyRecipeCard>
						))}
				</div>
			</section>
            
        </div>
    );
};

export default MyRecipe;