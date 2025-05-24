import React from 'react';
import Swal from 'sweetalert2';



const Modal = ({recipe, isOpen, onClose, onUpdated }) => {


    if (!isOpen) return null;

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

		// console.log(updatedRecipe);

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
					// console.log("data after update ", data);
					onClose(); 

                    onUpdated({ ...recipe, ...updatedRecipe});


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
		<div className="max-w-3xl mx-auto fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
			<div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
				<h2 className="text-2xl font-bold mb-4 text-center">Update Recipe</h2>

				<form onSubmit={handleUpdateRecipe}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* image */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Image</label>
							<input
								type="text"
								name="image"
								defaultValue={image}
								className="input w-full"
							/>
						</fieldset>

						{/* title */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Title</label>
							<input
								type="text"
								name="title"
								defaultValue={title}
								className="input w-full"
							/>
						</fieldset>

						{/* ingredients */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Ingredients</label>
							<input
								type="text"
								name="ingredients"
								defaultValue={ingredients}
								className="input w-full"
							/>
						</fieldset>

						{/* instructions */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Instructions</label>
							<textarea
								name="instructions"
								defaultValue={instructions}
								className="textarea w-full"
							></textarea>
						</fieldset>

						{/* preparation time */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Preparation Time</label>
							<input
								type="number"
								name="preparationTime"
								defaultValue={preparationTime}
								className="input w-full"
							/>
						</fieldset>

						{/* chef */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Chef</label>
							<input
								type="text"
								name="chef"
								defaultValue={chef}
								className="input w-full"
							/>
						</fieldset>

						{/* cuisine */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-1">Cuisine</label>
							<select
								name="cuisine"
								defaultValue={cuisine}
								className="select w-full"
								size={4}
							>
								<option>Bangladeshi</option>
								<option>Italian</option>
								<option>Chinese</option>
								<option>Mexican</option>
							</select>
						</fieldset>

						{/* category */}
						<fieldset className="border p-4 rounded">
							<label className="block mb-2">Category</label>
							<div className="flex flex-col gap-2">
								{["breakfast", "lunch", "dinner", "dessert", "vegan"].map(
									(cat) => (
										<label key={cat} className="flex items-center">
											<input
												type="checkbox"
												name="category"
												value={cat}
												defaultChecked={
													Array.isArray(category) &&
													category.includes(cat)
												}
												className="mr-2"
											/>
											{cat.charAt(0).toUpperCase() + cat.slice(1)}
										</label>
									)
								)}
							</div>
						</fieldset>
					</div>

					<div className="flex justify-end mt-6 gap-2">
						<button
							type="button"
							onClick={onClose}
							className="btn bg-gray-300"
						>
							Cancel
						</button>
						<input
							type="submit"
							className="btn bg-blue-500 text-white"
							value="Update Recipe"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;