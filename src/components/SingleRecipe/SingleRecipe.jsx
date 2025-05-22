
import { CiHeart } from "react-icons/ci";

const SingleRecipe = ({recipe}) => {

    const {_id, title, cuisine, image, likes} = recipe || {};
    

	return (
		<div>
			<div className="card bg-base-100 shadow-sm">
				<figure>
					<img
						src={
                            image
                        }
						alt={`image of ${title}`}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>
						A card component has a figure, a body part, and inside
						body there are title and actions parts
					</p>
					<div className="flex gap-1 items-center">
                        <button className="btn border-0">
                            <CiHeart className="text-xl"></CiHeart>
                        </button>
                        <h4 className="text-xl">
                            {likes}
                        </h4>
                    </div>

                    <p>
                        cuisine : {cuisine}
                    </p>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
