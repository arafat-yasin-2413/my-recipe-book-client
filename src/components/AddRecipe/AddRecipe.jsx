import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const AddRecipe = () => {

    const {user} = use(AuthContext);
    // console.log(user);
    // console.log(user.displayName);
    // console.log(user.email);

	const handleAddRecipe = (e) => {
		e.preventDefault();

		// console.log("form submit check");

		const form = e.target;
		const formData = new FormData(form);

		const newRecipe = Object.fromEntries(formData.entries());

		newRecipe.category = formData.getAll("category");

		newRecipe.likes = 0;
		newRecipe.person = user?.displayName;
		newRecipe.email = user?.email;

		// console.log(newRecipe);

		// send recipe data to the db
		fetch("https://b11a10-server-side-arafat-yasin-2413.vercel.app/recipes", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newRecipe),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
                    
                    // console.log("after adding recipe to the db ", data);


					Swal.fire({
						// position: "top-end",
						icon: "success",
						title: "Recipe Added to DB",
						showConfirmButton: false,
						timer: 1500,
					});

                    form.reset();
				}
			});
	};

	return (
		<div className="my-10 ">
			<section className="bg-blue-100 p-8 rounded-2xl">
				<h2 className="text-3xl dark:text-black font-bold text-center mb-6">
					Add Recipe Form
				</h2>

				<form onSubmit={handleAddRecipe}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
						{/* title */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">Title</label>
							<input
								type="text"
								className="input w-full"
								placeholder="recipe title"
								name="title"
							/>
						</fieldset>

                        
                        {/* image */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">Image</label>
							<input
								type="text"
								className="input w-full"
								placeholder="Image URL"
								name="image"
							/>
						</fieldset>

						

						{/* ingredients */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">
								Ingredients
							</label>
							<input
								type="text"
								className="input w-full"
								placeholder="salt, oil"
								name="ingredients"
							/>
						</fieldset>

						{/* instructions */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">
								Instructions
							</label>
							<textarea
								className="textarea w-full"
								placeholder="instructions for this recipe"
								name="instructions"
							></textarea>
						</fieldset>

						{/* preparation time */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">
								Preparation Time
							</label>
							<input
                                type="number"
								className="input "
								placeholder="prep. time in minutes"
								name="preparationTime"
							></input>
						</fieldset>
						{/* chef */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">Chef</label>
							<input
								className="input "
								placeholder="chef name"
								name="chef"
							></input>
						</fieldset>

						{/* cuisine */}
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">Cuisine</label>
							<select
								size={4}
								className="select px-2 min-h-[6rem] w-full"
								name="cuisine"
							>
								<option>Bangladeshi</option>
								<option>Italian</option>
								<option>Chinese</option>
								<option>Mexican</option>
							</select>
						</fieldset>

						{/* category */}
						<fieldset className="fieldset w-full mr-20 bg-base-200 border-base-300 rounded-box border p-4">
							<label className="label ">Category</label>

							<div className="flex flex-col gap-2 ml-2">
								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="breakfast"
										className="checkbox mr-2"
									/>
									Breakfast
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="lunch"
										className="checkbox mr-2"
									/>
									Lunch
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="dinner"
										className="checkbox mr-2"
									/>
									Dinner
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="dessert"
										className="checkbox mr-2"
									/>
									Dessert
								</label>

								<label className="cursor-pointer">
									<input
										type="checkbox"
										name="category"
										value="vegan"
										className="checkbox mr-2"
									/>
									Vegan
								</label>
							</div>
						</fieldset>
					</div>
					<input
						className="btn w-full mt-4 border-2 border-gray-100"
						type="submit"
						value="Add Recipe"
					/>
				</form>
			</section>
		</div>
	);
};

export default AddRecipe;
