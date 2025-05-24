import React from "react";

const cookingTips = [
	"Adding a little salt while frying onions helps them brown faster.",
	"Soaking rice before cooking makes it fluffier.",
	"Raw papaya can help tenderize meat quickly.",
	"Add a little water before boiling milk to prevent sticking.",
	"Use a non-stick pan to reduce oil usage.",
	"Store ginger-garlic paste in the fridge to save prep time.",
	"If a dish is too salty, add a raw potato to absorb some salt.",
];

const CookingTips = () => {
	return (
		<div className="my-10">
			<section className=" bg-red-50 p-6 rounded-2xl shadow-md  mx-auto mt-8">
				<h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
					Cooking Tips
				</h2>

                <div className="border border-b border-gray-200 mb-4">

                </div>
				<ul className="list-disc list-inside space-y-2 text-gray-800 text-[17px]">
					{cookingTips.map((tip, index) => (
						<li
							key={index}
							className="hover:text-orange-600 transition duration-200"
						>
							{tip}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default CookingTips;
