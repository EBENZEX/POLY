import { useState } from "react";
import Image from "../assets/contoh.jpg";
import { container, form } from "../datas/style";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Register() {
	const [userField, setUserField] = useState(false);
	const [passwordField, setPasswordField] = useState(false);
	const [confirmField, setConfirmField] = useState(false);
	const [birthdayField, setBirthdayField] = useState(false);
	const [genderField, setGenderField] = useState(false);
	const [emailField, setEmailField] = useState(false);

	function handleUser(event) {
		setUserField(event ? true : !userField);
	}

	function handleEmail(event) {
		setEmailField(event ? true : !emailField);
	}

	function handleConfirm(event) {
		setConfirmField(event ? true : !confirmField);
	}

	function handleBirthday(event) {
		setBirthdayField(event ? true : !birthdayField);
	}

	function handleGender(event) {
		setGenderField(event ? true : !genderField);
	}

	function handlePassword(event) {
		setPasswordField(event ? true : !passwordField);
	}
	return (
		<section className={`${container.fluid} min-h-screen`}>
			<div className={`${container.box1}  md:grid-cols-2`}>
				{/* IMG */}
				<div className="h-[85vh] md:h-fit">
					<img src={Image} className="w-full h-full" alt="" />
				</div>

				{/* SIGN UP */}
				<div className={`${form.box} rounded-b-xl md:rounded-r-xl md:rounded-bl-none`}>
					<h1 className="text-center font-bold text-4xl mb-5">Sign Up</h1>

					<div className="grid md:grid-cols-2 gap-5 -ml-6">
						{/* USERNAME */}
						<label htmlFor="username" className="grid order-1 md:order-1">
							<input
								className={form.input}
								onFocus={(event) => handleUser(event.target.value)}
								onBlur={(event) => handleUser(event.target.value)}
								id="username"
								name="username"
								type="text"
							/>
							<h2 className={`font-bold text-md ${!userField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}>
								Username
							</h2>
						</label>

						{/* PASSWORD */}
						<label htmlFor="passwordField" className="grid order-2 md:order-3">
							<input
								className={form.input}
								onFocus={(event) => handlePassword(event.target.value)}
								onBlur={(event) => handlePassword(event.target.value)}
								id="passwordField"
								name="passwordField"
								type="password"
							/>
							<h2
								className={`font-bold text-md ${!passwordField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}
							>
								Password
							</h2>
						</label>

						{/* CONFIRM PASSWORD */}
						<label htmlFor="confirmField" className="grid order-3 md:order-5">
							<input
								className={form.input}
								onFocus={(event) => handleConfirm(event.target.value)}
								onBlur={(event) => handleConfirm(event.target.value)}
								id="confirmField"
								name="confirmField"
								type="password"
							/>
							<h2
								className={`font-bold text-md ${!confirmField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}
							>
								Confirm Password
							</h2>
						</label>

						{/* BIRTHDAY */}
						<label htmlFor="birthdayField"  className="grid order-4 md:order-2">
							<input
								className={`${form.input} text-transparent focus:text-black`}
								placeholder=""
								onFocus={(event) => handleBirthday(event.target.value)}
								onBlur={(event) => handleBirthday(event.target.value)}
								id="birthdayField"
								name="birthdayField"
								type="date"
							/>
							<h2
								className={`font-bold text-md ${!birthdayField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}
							>
								Birthday
							</h2>
						</label>

						{/* GENDER */}
						<label htmlFor="genderField" className="grid order-5 md:order-4">
							<input
								className={`${form.input} placeholder:text-transparent placeholder:focus:text-black`}
								placeholder="pria/wanita"
								onFocus={(event) => handleGender(event.target.value)}
								onBlur={(event) => handleGender(event.target.value)}
								id="genderField"
								name="genderField"
								type="text"
							/>
							<h2
								className={`font-bold text-md ${!genderField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}
							>
								Gender
							</h2>
						</label>

						{/* EMAIL */}
						<label htmlFor="emailField" className="grid order-6 md:order-6">
							<input
								className={form.input}
								onFocus={(event) => handleEmail(event.target.value)}
								onBlur={(event) => handleEmail(event.target.value)}
								id="emailField"
								name="emailField"
								type="email"
							/>
							<h2
								className={`font-bold text-md ${!emailField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}
							>
								Email
							</h2>
						</label>
					</div>
					<button className={form.btn}>Register</button>

					<span className="text-center">Or Try Login In Another Way</span>
					<div className="flex justify-center items-center gap-5 -mt-5">
						<a target="_blank" href="https://facebook.com">
							<FaFacebook className="size-6 hover:text-blue-600" />
						</a>
						<a target="_blank" href="https://instagram.com">
							<FaInstagram className="size-6 hover:text-red-600" />
						</a>
						<a target="_blank" href="https://twitter.com">
							<FaTwitter className="size-6 hover:text-blue-600" />
						</a>
						<a target="_blank" href="https://google.com">
							<FaGoogle className="size-6 hover:text-red-600" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
