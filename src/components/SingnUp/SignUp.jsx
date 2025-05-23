import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const SignUp = () => {

    const { createUser } = use(AuthContext);


    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get('password')
        // console.log(email);
        // console.log(password);


        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error=> {
            console.log(error);
        })
    }
    

	return (
		<div>
			<div className="card mt-24 bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl border border-blue-200">
				<div className="card-body">
					<h1 className="text-5xl font-bold text-center mb-6">
						Sign Up now!
					</h1>
					<form onSubmit={handleSignUp} className="fieldset">
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
						<button className="btn btn-neutral mt-4">Sign Up</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
