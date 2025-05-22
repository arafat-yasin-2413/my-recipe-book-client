import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const RecipeDetails = () => {
	const recipe = useLoaderData();
	console.log(recipe);

	const { _id,title, image,instructions, category , ingredients, preparationTime } = recipe || {};

	return (
		<div className="my-20">

            <h2 className="text-center text-3xl font-bold my-6">Recipe Details</h2>
			<div className="card bg-base-100 shadow-sm p-4">
				<figure>
					<img
                        className="w-full rounded"
						src={image}
						alt={`image of ${title}`}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{title}
						
					</h2>
					<div>
                        instructions: 
						<p>

                        {instructions}
                        </p>
					</div>


                    <div>
                        Ingredients : 
                        <p>
                            {ingredients}
                        </p>
                    </div>

                    <div className="flex gap-1">
                        Preparation time: 
                        <p>{preparationTime} minutes</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        Category : 
                        <div className="flex gap-2 ">
                            {category.map((cat,index)=> (
                                <h4 className="bg-blue-200 px-3 py-1 rounded" key={index}>{cat}</h4>
                            ))}
                        </div>
                    </div>




                    <div className="flex gap-1">
						

						<Link to={`updateRecipe/${_id}`}>
							<button className="btn btn-sm">
								<FaRegEdit className="text-xl"></FaRegEdit>
							</button>
						</Link>

						
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
