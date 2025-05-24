import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
	const { _id, title, cuisine, image, likes } = recipe || {};
	const [likeCount, setLikeCount] = useState(likes);

	console.log(recipe);

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
				// console.log("failed to update like : ", error);
			});
	};

	return (
		<div>
			<div className="card bg-base-100 border-4 border-gray-500  shadow-sm rounded-2xl">
				<figure>
					<img
						className="object-cover w-full md:w-[150px] md:h-[150px] py-2  rounded-xl"
						src={image}
						alt={`image of ${title}`}
					/>
				</figure>
				<div className="card-body">
					{/* like button  */}
					<div className="flex gap-1 items-center">
						<button
							onClick={handleLike}
							className=" bg-red-100 hover:bg-gray-200 p-1 rounded border-0"
						>
							<CiHeart className="text-[1.4rem] "></CiHeart>
						</button>
						<h4 className="text-[1rem] font-medium">{likeCount}</h4>
					</div>
					<h2 className="card-title">{title}</h2>

					<p>cuisine : {cuisine}</p>

					

					<div className="flex gap-1">
						<Link to={`/recipe/${_id}`}>
							<button className="btn btn-sm">See Details</button>
						</Link>

						{/* <Link to={`updateRecipe/${_id}`}>
							<button className="btn btn-sm">
								<FaRegEdit className="text-xl"></FaRegEdit>
							</button>
						</Link>

						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-sm"
						>
							<MdDelete className="text-xl"></MdDelete>
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
