import React from "react";

const FAQ = () => {
	return (
		<div>
			<section className="bg-blue-50 p-6 my-10 rounded-2xl shadow-md mx-auto mt-12">
				<h2 className="text-3xl font-bold mb-6 text-center">
					Frequently Asked Questions
				</h2>

				<div className="space-y-4">
					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" defaultChecked />
						<div className="collapse-title font-semibold ">
							How do I submit my own recipe?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							Go to the "Add Recipe" page, fill in your recipe
							details, and submit the form.
						</div>
					</div>

					

					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" />
						<div className="collapse-title font-semibold ">
							Are the recipes beginner-friendly?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							Absolutely! Most of the recipes include step-by-step
							instructions, making them suitable for beginners.
						</div>
					</div>


					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" />
						<div className="collapse-title font-semibold ">
							What's the best way to cook rice perfectly every time?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							Rinse the rice 2–3 times to remove excess starch, then soak for 15–20 minutes. Use a 1:2 ratio of rice to water, bring to a boil, then simmer on low heat with the lid on until all the water is absorbed.
						</div>
					</div>
					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" />
						<div className="collapse-title font-semibold ">
							How can I make meat softer and juicier while cooking?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							Marinate the meat for at least 30 minutes with ingredients like yogurt, lemon juice, or raw papaya. Slow cooking over low heat or pressure cooking can also help tenderize the meat.


						</div>
					</div>
					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" />
						<div className="collapse-title font-semibold ">
							Why does my curry taste too bland sometimes?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							Check your spice proportions — under-roasting spices or not sautéing onions and garlic properly can reduce flavor. Adding a pinch of sugar or lemon juice at the end can balance the taste.
						</div>
					</div>
					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" />
						<div className="collapse-title font-semibold ">
							What should I do if I accidentally over-salt a dish?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							You can add a raw peeled potato to absorb excess salt, or mix in unsalted ingredients like boiled rice, mashed veggies, or a bit of water/cream to balance the flavor.
						</div>
					</div>
					<div className="collapse collapse-arrow bg-white border border-blue-200 rounded-lg shadow-sm">
						<input type="radio" name="faq" />
						<div className="collapse-title font-semibold ">
							Do I need an account to view recipes?
						</div>
						<div className="collapse-content text-sm text-gray-700">
							No account is needed to browse recipes, but you’ll
							need one to manage your recipes.
						</div>
					</div>

					
				</div>
			</section>
		</div>
	);
};

export default FAQ;
