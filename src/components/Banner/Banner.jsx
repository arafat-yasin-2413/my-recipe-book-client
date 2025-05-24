import React from "react";
const bannerImage = "/assets/banner.jpg";

const Banner = () => {
	return (
		<div>
			<div className="relative mt-12">

                <img className="w-full h-full object-cover rounded " src={bannerImage} alt="banner image" />

				<div className="absolute top-0 w-full h-full text-white flex flex-col justify-center items-center   px-4 text-center bg-opacity-50">
					<h2 className="text-[1.3rem] md:text-4xl font-semibold">Taste the Happiness in Every Bite</h2>

					<p className="px-2 text-[0.8rem] md:px-12 md:text-xl mt-4">
						Made by food lovers, for food lovers. Discover
						comforting classics, exciting fusions, and secret family
						recipes. No matter your taste, there's something
						delicious waiting for you here.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
