import React from "react";
import { Link } from "react-router";

const errorPage = '/assets/error2.jpg'


const ErrorPage = () => {
	return (
		<div className="w-11/12 mx-auto">
			{/* <section className="bg-white dark:bg-gray-900"> */}
			
            <section>
                <img className="w-full relative rounded my-20" src={errorPage} alt="error page" />
            </section>
            
            
            <section className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-white">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl ">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl ">
							Page Not Found
						</p>
						<p className="mb-4 text-lg font-light ">
							Sorry, we can't find that page. You'll find lots to
							explore on the home page.{" "}
						</p>
						<Link
							to="/"
							className="btn border-0 hover:bg-red-500 hover:text-white  bg-white inline-flex   font-bold text-xl rounded-lg px-5 py-2.5 text-center  my-4"
						>
							Back to Homepage
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ErrorPage;
