import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateRecipe = () => {
	const recipe = useLoaderData();
	console.log(recipe);
	const {
		_id,
		title,
		image,
		ingredients,
		category,
		chef,
		cuisine,
		instructions,
		preparationTime,
	} = recipe || {};

	const handleUpdateRecipe = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const updatedRecipe = Object.fromEntries(formData.entries());

        updatedRecipe.category = formData.getAll("category");

		console.log(updatedRecipe);

		fetch(`http://localhost:3000/recipes/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedRecipe),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log("data after update ", data);

					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Your recipe has been updated",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div className="my-10 ">
			<section className="bg-blue-100 p-8 rounded-2xl">
				<h2 className="text-3xl font-bold text-center mb-6">
					Update Recipe Form
				</h2>

				<form onSubmit={handleUpdateRecipe}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
						{/* image */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">Image</label>
							<input
								type="text"
								className="input w-full"
								placeholder="Image URL"
								name="image"
								defaultValue={image}
							/>
						</fieldset>

						{/* title */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">Title</label>
							<input
								type="text"
								className="input w-full"
								placeholder="recipe title"
								name="title"
								defaultValue={title}
							/>
						</fieldset>

						{/* ingredients */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">
								Ingredients
							</label>
							<input
								type="text"
								className="input w-full"
								placeholder="salt, oil"
								name="ingredients"
								defaultValue={ingredients}
							/>
						</fieldset>

						{/* instructions */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">
								Instructions
							</label>
							<textarea
								className="textarea w-full"
								placeholder="instructions for this recipe"
								name="instructions"
								defaultValue={instructions}
							></textarea>
						</fieldset>

						{/* preparation time */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">
								Preparation Time
							</label>
							<input
								type="number"
								className="input "
								placeholder="prep. time in minutes"
								name="preparationTime"
								defaultValue={preparationTime}
							></input>
						</fieldset>
						{/* chef */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">Chef</label>
							<input
								className="input "
								placeholder="chef name"
								name="chef"
								defaultValue={chef}
							></input>
						</fieldset>

						{/* cuisine */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">Cuisine</label>
							<select
								size={4}
								className="select px-2 min-h-[6rem] w-full"
								name="cuisine"
								defaultValue={cuisine}
							>
								<option>Bangladeshi</option>
								<option>Italian</option>
								<option>Chinese</option>
								<option>Mexican</option>
							</select>
						</fieldset>

						{/* category */}
						<fieldset className="fieldset w-full mr-20 bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label text-black">Category</label>

							<div className="flex flex-col gap-2 ml-2">
								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="breakfast"
										className="checkbox mr-2"
										defaultChecked={
											Array.isArray(category) &&
											category.includes("breakfast")
										}
									/>
									Breakfast
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="lunch"
										className="checkbox mr-2"
										defaultChecked={
											Array.isArray(category) &&
											category.includes("lunch")
										}
									/>
									Lunch
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="dinner"
										className="checkbox mr-2"
										defaultChecked={
											Array.isArray(category) &&
											category.includes("dinner")
										}
									/>
									Dinner
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="dessert"
										className="checkbox mr-2"
										defaultChecked={
											Array.isArray(category) &&
											category.includes("dessert")
										}
									/>
									Dessert
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="vegan"
										className="checkbox mr-2"
										defaultChecked={
											Array.isArray(category) &&
											category.includes("vegan")
										}
									/>
									Vegan
								</label>
							</div>
						</fieldset>
					</div>
					<input
						className="btn w-full mt-4 border-2 border-gray-100"
						type="submit"
						value="Update Recipe"
					/>
				</form>
			</section>
		</div>
	);
};

export default UpdateRecipe;
