import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
const normalUser = "/assets/nUser.png";

const Navbar = () => {
	const { user, logOutUser } = use(AuthContext);
	const [showName, setShowName] = useState(false);

	const handleLogOut = () => {
		logOutUser()
			.then(() => {
				toast.success("You Logged Out Successfully.");
				// alert("You Logged Out Successfully.");
			})
			.catch((error) => {
				// console.log(error);
				toast.error("Logout Unsuccessfull!!");
			});
	};

	const links = (
		<>
			<li>
				<NavLink to="/" className="nav">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/allRecipe" className="nav">
					All Recipe
				</NavLink>
			</li>
			<li>
				<NavLink to="/addRecipe" className="nav">
					Add Recipe
				</NavLink>
			</li>
			<li>
				<NavLink to="/myRecipe" className="nav">
					My Recipe
				</NavLink>
			</li>
		</>
	);

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
				<NavLink
					to="/"
					className={"flex justify-center items-center gap-1"}
				>
					<img src="/assets/recipe.png" className="w-8" alt="" />
					<h4 className="text-xl font-semibold">Recipe Book</h4>
				</NavLink>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>

            <div>
                {
                    user && <h4 className="bg-red-100 px-4 py-1 rounded">{user?.email}</h4>
                }
            </div>

			<div className="navbar-end gap-2">
				{!user && <img className="w-8" src={normalUser} alt="" />}

				{
                    user && 
                

				<div className="relative group">
					<img
						src={user ? user.photoURL : ""}
						alt="User"
						className="w-8 h-8 rounded-full cursor-pointer border"
					/>

					<div
						className="absolute top-full -left-10 px-6 mt-2 max-w-[200px] bg-white border rounded-md shadow-lg z-50 text-center
                        opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200"
					>
						<p className="text-sm font-semibold text-red-500 py-2">
							{user?.displayName}
						</p>
						<button
							onClick={handleLogOut}
							className="btn btn-sm mb-2 text-black hover:bg-red-600 hover:text-white"
						>
							Logout
						</button>
					</div>
				</div>

                }

				{!user && (
					<>
						<Link to="/signup">
							{" "}
							<button className="btn">Register</button>{" "}
						</Link>
						<Link
							to="/login"
							className="btn text-black hover:bg-red-600 hover:text-white"
						>
							Login
						</Link>
					</>
				)}

				{/* {user ? (
					<Link
						onClick={handleLogOut}
						className="btn text-black hover:bg-red-600 hover:text-white"
					>
						Logout
					</Link>
				) : (
					""
				)} */}
			</div>
		</div>
	);
};

export default Navbar;
