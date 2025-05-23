import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
	const { createUser } = use(AuthContext);

	const handleSignUp = (e) => {
		e.preventDefault();

		const form = e.target;

		const formData = new FormData(form);
		// const email = formData.get("email");
		// const password = formData.get('password')
		// console.log(email);
		// console.log(password);

		const { email, password, ...rest } = Object.fromEntries(
			formData.entries()
		);

		createUser(email, password)
			.then((result) => {
				console.log(result.user);

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

						{/* phone */}
						<label className="label">Phone</label>
						<input
							type="text"
							className="input w-full"
							placeholder="your phone no."
							name="phone"
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
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
