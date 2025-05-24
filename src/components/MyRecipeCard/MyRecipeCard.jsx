import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Modal from "../Modal/Modal";

const MyRecipeCard = ({ recipe, recipes, setRecipes }) => {
	const { _id, title, cuisine, image, likes,category,ingredients,preparationTime } = recipe || {};
	const [likeCount, setLikeCount] = useState(likes);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleRecipeUpdate = (updatedRecipe) => {
		const updatedRecipes = recipes.map((r) =>
			r._id === updatedRecipe._id ? updatedRecipe : r
		);
		setRecipes(updatedRecipes);
	};

	const handleLike = () => {
		setLikeCount((prev) => prev + 1);

		fetch(`http://localhost:3000/recipes/${_id}/like`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log("likes updated in db : ", data);
			})
			.catch((error) => {
				console.log("failed to update like : ", error);
			});
	};

	const handleDelete = (id) => {
		// console.log("id to delete", id);

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/recipes/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your recipe has been deleted.",
								icon: "success",
							});
							const remainingRecipes = recipes.filter(
								(rec) => rec._id !== _id
							);
							setRecipes(remainingRecipes);
						}
					});
			}
		});
	};

	return (
		<div>
			<div className="card bg-base-100 border-4 border-gray-500  shadow-sm rounded-2xl">
				<figure>
					<img
						className="object-cover w-full px-2 py-2  rounded-xl"
						src={image}
						alt={`image of ${title}`}
					/>
				</figure>
				<div className="card-body">
					<div className="flex gap-1 items-center">
						<button
							onClick={handleLike}
							className="btn btn-disabled bg-red-100  p-1 rounded border-0"
						>
							<CiHeart className="text-[1.4rem] " />
						</button>
						<h4 className="text-[1rem] font-medium">{likeCount}</h4>
					</div>
					<h2 className="card-title">{title}</h2>
					<p>cuisine : {cuisine}</p>

                    <div className="text-sm text-gray-600 mb-1">
						<span className="font-semibold">Preparation Time:</span>{" "}
						{preparationTime} minutes
					</div>

					<div className="text-sm text-gray-600 mb-1">
						<span className="font-semibold">Cuisine:</span>{" "}
						{cuisine}
					</div>
					<div className="flex gap-2 text-sm text-gray-600 items-center">
						<span className="font-semibold">Category:</span>
						<div className="flex flex-col gap-2 ">
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

                    <div className="mt-3">
						<h3 className="font-semibold text-gray-800">
							Ingredients:
						</h3>
						<p className="text-sm text-gray-700">
							{ingredients}
						</p>
					</div>

					<div className="flex gap-1">
						<Link to={`/recipe/${_id}`}>
							<button className="btn btn-sm">See Details</button>
						</Link>
						<button
							onClick={() => setIsModalOpen(true)}
							className="btn btn-sm"
						>
							<FaRegEdit className="text-xl" />
						</button>
						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-sm"
						>
							<MdDelete className="text-xl" />
						</button>
					</div>
					{/* 
					<button
						className="btn bg-yellow-500 text-white"
						onClick={() => setIsModalOpen(true)}
					>
						Update Recipe
					</button> */}

					<Modal
						recipe={recipe}
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						onUpdated={handleRecipeUpdate}
					></Modal>
				</div>
			</div>
		</div>
	);
};

export default MyRecipeCard;
