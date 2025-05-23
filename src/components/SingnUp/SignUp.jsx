import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
	const [error, setError] = useState("");
	const { createUser, updateUserProfile, user, setUser } = use(AuthContext);
    const navigate = useNavigate();

	const handleSignUp = (e) => {
		e.preventDefault();

		const form = e.target;

		const formData = new FormData(form);
		// const email = formData.get("email");
		// const password = formData.get('password')
		// console.log(email);
		// console.log(password);

		setError("");
        const { email, password, ...rest } = Object.fromEntries(
			formData.entries()
		);

		const haveDigitExp = /(?=.*\d)/;
		const haveLowerCase = /(?=.*[a-z])/;
		const haveUpperCase = /(?=.*[A-Z])/;
		const haveLength = /^.{6,}$/;

		if (!haveLength.test(password)) {
			setError("Password must be at least 6 character or long.");

			return;
		} else if (!haveDigitExp.test(password)) {
			setError("Password must have at least one Digit!!!");
			return;
		} else if (!haveLowerCase.test(password)) {
			setError("Password must have one Lowercase Letter!");
			return;
		} else if (!haveUpperCase.test(password)) {
			setError("Password must have one Uppercase Letter!");
			return;
		}

		

		createUser(email, password)
			.then((result) => {
				console.log(result.user);

				// update user profile
				updateUserProfile({
					displayName: formData.get("name"),
					photoURL: formData.get("photo"),
				})
					.then(() => {
						setUser({
							...user,
							displayName: formData.get("name"),
							photoURL: formData.get("photo"),
						});
						// navigate("/");
					})
					.catch((error) => {
						// console.log(error);
						setUser(user);
					});
                    navigate("/");

				const userProfileInfo = {
					email,
					...rest,
					creationTime: result.user?.metadata?.creationTime,
					lastSignInTime: result.user?.metadata?.lastSignInTime,
				};

				// save profile info to the db
				fetch("http://localhost:3000/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(userProfileInfo),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.insertedId) {
							console.log(
								"after profile been saved to db : ",
								data
							);

							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Account Created Successfully",
								showConfirmButton: false,
								timer: 1500,
							});
							form.reset();
						}
					});
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};

	return (
		<div>
			<div className="card mt-24 bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl border border-blue-200">
				<div className="card-body">
					<h1 className="text-5xl font-bold text-center mb-6">
						Sign Up now!
					</h1>
					<form onSubmit={handleSignUp} className="fieldset">
						{/* name */}
						<label className="label">Name</label>
						<input
							type="text"
							className="input w-full"
							placeholder="your name"
							name="name"
						/>

						{/* photo */}
						<label className="label">Photo URL</label>
						<input
							type="text"
							className="input w-full"
							placeholder="your photo URL"
							name="photo"
						/>

						{/* email */}
						<label className="label">Email</label>
						<input
							type="email"
							className="input w-full"
							placeholder="Email"
							name="email"
						/>

						{/* password */}
						<label className="label">Password</label>
						<input
							type="password"
							className="input w-full"
							placeholder="Password"
							name="password"
						/>


                        {/* showing error */}
						{error && (
							<p className="text-red-400 font-semibold">
								{error}
							</p>
						)}


						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4">
							Sign Up
						</button>

						<p className="text-center text-sm font-semibold pt-5">
							Already have an account?{" "}
							<Link to="/login" className="text-secondary hover:underline hover:text-blue-600">
								Login
							</Link>{" "}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
