import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const RecipeDetails = () => {
	const recipe = useLoaderData();

	const {
		_id,
        chef,
		title,
		image,
		instructions,
		category,
        cuisine,
		ingredients,
		preparationTime,
        email,
		likes,
	} = recipe || {};

	const [likeCount, setLikeCount] = useState(likes);
	console.log(recipe);

	const handleLike = () => {
		setLikeCount((prev) => prev + 1);

		fetch(`http://localhost:3000/recipes/${_id}/like`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("likes updated in db : ", data);
			})
			.catch((error) => {
				console.log("failed to update like : ", error);
			});
	};

	return (
		<div className="my-20">
			<h2 className="text-center text-3xl font-bold my-6">
				Recipe Details
			</h2>

			<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
				<img
					className="w-full h-[300px] object-cover p-2 rounded-2xl"
					src={image}
					alt={title}
				/>

				{/* like button  */}
				<div className="flex gap-1 items-center mt-4 px-4">
					<button
						onClick={handleLike}
						className=" bg-red-100 hover:bg-gray-200 p-1 rounded border-0"
					>
						<CiHeart className="text-[1.4rem] "></CiHeart>
					</button>
					<h4 className="text-[1rem] font-medium">{likeCount}</h4>
				</div>


				<div className="p-4">
					<h2 className="text-xl font-bold text-gray-800 mb-2">
						{title}
					</h2>

					<div className="text-sm text-gray-600 mb-1">
						<span className="font-semibold">Chef:</span>{" "}
						{chef}
					</div>
					<div className="text-sm text-gray-600 mb-1">
						<span className="font-semibold">Cuisine:</span>{" "}
						{cuisine}
					</div>
					<div className="flex gap-2 text-sm text-gray-600 items-center">
						<span className="font-semibold">Category:</span>
						<div className="flex gap-2 ">
							{Array.isArray(category) ? (
								category.map((cat, index) => (
									<h4
										className="bg-blue-200 px-3 py-1 rounded"
										key={index}
									>
										{cat}
									</h4>
								))
							) : (
								<h4 className="bg-blue-200 px-3 py-1 rounded">
									{category}
								</h4>
							)}
						</div>
					</div>

					<div className="text-sm text-gray-600 mb-1">
						<span className="font-semibold">Preparation Time:</span>{" "}
						{preparationTime} minutes
					</div>
					<div className="text-sm text-gray-600 mb-1">
						<span className="font-semibold">Submitted By:</span>{" "}
						{recipe.person} (
						<a
							href={`mailto:${recipe.email}`}
							className="text-blue-500 underline"
						>
							{email}
						</a>
						)
					</div>

					<div className="mt-3">
						<h3 className="font-semibold text-gray-800">
							Ingredients:
						</h3>
						<p className="text-sm text-gray-700">
							{ingredients}
						</p>
					</div>

					<div className="mt-2">
						<h3 className="font-semibold text-gray-800">
							Instructions:
						</h3>
						<p className="text-sm text-gray-700">
							{instructions}
						</p>
					</div>

				</div>
			</div>

			{/* <div className="card bg-base-100 shadow-sm p-4">
				<figure>
					<img
						className="w-full object-cover rounded"
						src={image}
						alt={`image of ${title}`}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<div>
						instructions:
						<p>{instructions}</p>
					</div>

					<div>
						Ingredients :<p>{ingredients}</p>
					</div>

					<div className="flex gap-1">
						Preparation time:
						<p>{preparationTime} minutes</p>
					</div>

					<div className="flex gap-2 items-center">
						Category :
						<div className="flex gap-2 ">
							{Array.isArray(category) ? (
								category.map((cat, index) => (
									<h4
										className="bg-blue-200 px-3 py-1 rounded"
										key={index}
									>
										{cat}
									</h4>
								))
							) : (
								<h4 className="bg-blue-200 px-3 py-1 rounded">
									{category}
								</h4>
							)}
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default RecipeDetails;
