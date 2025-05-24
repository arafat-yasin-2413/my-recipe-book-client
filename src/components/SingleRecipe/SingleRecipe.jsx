import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SingleRecipe = ({ recipe, recipes, setRecipes }) => {
    const { _id, title, cuisine, image, likes } = recipe || {};
    const [likeCount, setLikeCount] = useState(likes);

    const handleLike=()=>{
        setLikeCount((prev) => prev + 1);

        fetch(`http://localhost:3000/recipes/${_id}/like`, {
            method: "PATCH",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('likes updated in db : ', data);
        })
        .catch((error)=>{
            console.log('failed to update like : ', error);
        });
    };

	const handleDelete = (id) => {
		console.log("id to delete", id);

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			// console.log(result.isConfirmed);
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/recipes/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						// console.log('after delete ', data);
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your recipe has been deleted.",
								icon: "success",
							});

                            // remove the recipe from the state
                            const remainingRecipes = recipes.filter((rec) => rec._id !== _id);
                            setRecipes(remainingRecipes);
						}
					});
			}
		});
	};

	return (
		<div>
			<div className="card bg-base-100 shadow-sm">
				<figure>
					<img className="w-full h-[200px] object-cover px-2 py-2 rounded-2xl" src={image} alt={`image of ${title}`} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>
						A card component has a figure, a body part, and inside
						body there are title and actions parts
					</p>

                    {/* like button  */}
					<div className="flex gap-1 items-center">
						<button onClick={handleLike} className="btn border-0">
							<CiHeart className="text-xl"></CiHeart>
						</button>
						<h4 className="text-xl">{likeCount}</h4>
					</div>

					<p>cuisine : {cuisine}</p>

					<div className="flex gap-1">
						<Link to={`/recipe/${_id}`}>
							<button className="btn btn-sm">View Details</button>
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

export default SingleRecipe;
