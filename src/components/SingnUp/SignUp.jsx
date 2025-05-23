import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {
	const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
	const { createUser, updateUserProfile, user, setUser, googleLogin } = use(AuthContext);
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
        setSuccess(false);
        const { email, password, ...rest } = Object.fromEntries(
			formData.entries()
		);

		const haveDigitExp = /(?=.*\d)/;
		const haveLowerCase = /(?=.*[a-z])/;
		const haveUpperCase = /(?=.*[A-Z])/;
		const haveLength = /^.{6,}$/;

		if (!haveLength.test(password)) {
			setError("Password must be at least 6 character or long.");
            toast.error("Password must be at least 6 character or long.");

			return;
		} else if (!haveDigitExp.test(password)) {
			setError("Password must have at least one Digit!!!");
            toast.error("Password must have at least one Digit!!!");
			return;
		} else if (!haveLowerCase.test(password)) {
			setError("Password must have one Lowercase Letter!");
            toast.error("Password must have one Lowercase Letter!");
			return;
		} else if (!haveUpperCase.test(password)) {
			setError("Password must have one Uppercase Letter!");
            toast.error("Password must have one Uppercase Letter!");
			return;
		}

		

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
                // setSuccess(true);
                // toast.success("User created Successfully!");



                result.user.photURL= formData.get("photo");

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
                toast.error(`User creation failed : ${error.message}`)
			});
	};



    const handleGoogleLogin = (e) => {
		e.preventDefault();
		// console.log("google diye login korbo");
		googleLogin()
			.then((result) => {
                toast.success("Login with Google Successfull!")
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((error) => {
				// console.log(error);
				setError(error.code);
                toast.error(`Google Login failed: ${error.message}`)
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

                        {/* Google */}
						<button
							onClick={handleGoogleLogin}
							className="btn w-full mt-3 bg-white text-black border-[#e5e5e5] hover:bg-amber-300"
						>
							<svg
								aria-label="Google logo"
								width="16"
								height="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g>
									<path d="m0 0H512V512H0" fill="#fff"></path>
									<path
										fill="#34a853"
										d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
									></path>
									<path
										fill="#4285f4"
										d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
									></path>
									<path
										fill="#fbbc02"
										d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
									></path>
									<path
										fill="#ea4335"
										d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
									></path>
								</g>
							</svg>
							Sign in with Google
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
