import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {



    const links = 
        <>
        
            <li><NavLink to="/" className="nav">Home</NavLink></li>
            <li><NavLink to="/allRecipe" className="nav">All Recipe</NavLink></li>
            <li><NavLink to="/addRecipe" className="nav">Add Recipe</NavLink></li>
            <li><NavLink to="/myRecipe" className="nav">My Recipe</NavLink></li>
    
    
        </>

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<NavLink to="/" className={"flex justify-center items-center gap-1"}>
                    <img src="/assets/recipe.png" className="w-8" alt="" />
                    <h4 className="text-xl font-semibold">Recipe Book</h4>
                </NavLink>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">

					{links}
					
					
				</ul>
			</div>

			<div className="navbar-end gap-2">
				<Link to="/signup"> <button className="btn">SignUp</button> </Link>
				<Link to="/login"> <button className="btn">Login</button> </Link>
				<Link> <button className="btn">Logout</button> </Link>
			</div>
		</div>
	);
};

export default Navbar;
