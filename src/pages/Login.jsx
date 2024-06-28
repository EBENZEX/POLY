import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from "../images/landingpage/login2.png";
import { container, form } from "../css/style";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Login() {
	const navigate = useNavigate();
	const [showMessage, setShowMessage] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [userField, setUserField] = useState(true);
	const [passwordField, setPasswordField] = useState(true);
	const [user, setUser] = useState("POLY_ADMIN");
	const [password, setPassword] = useState("PASSWORD123");

	const renderMessage = (isValid) => {
		const message = isValid ? "Login Berhasil" : "Semua Field Harus Diisi";
		const color = isValid ? "text-green-500" : "text-red-500 animate-pulse";
		return (
			<div className="rounded-2xl px-4 py-2 bg-white shadow-xl fixed top-10 z-[9999] left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-out">
				<h1 className={`font-bold text-xl ${color}`}>{message}</h1>
			</div>
		);
	};

	function handleUser(event) {
		setUser(event.target.value);
	}

	function handlePassword(event) {
		setPassword(event.target.value);
	}

	function handleOpenUser(event) {
		setUserField(event ? true : !userField);
	}

	function handleOpenPassword(event) {
		setPasswordField(event ? true : !passwordField);
	}

	function handleBtn() {
		if (user && password) {
			setIsValid(true);
			setShowMessage(true);
		} else {
			setIsValid(false);
			setShowMessage(true);
		}
	}

	useEffect(() => {
		if (showMessage && isValid) {
			const timer = setTimeout(() => {
				navigate("/dashboard-home");
			}, 1500);

			return () => clearTimeout(timer);
		}
	}, [showMessage, isValid, navigate]);

	return (
		<section className={`${container.fluid} pl-4 pr-7 min-h-screen`}>
			<div className={`${container.box1} px-0 grid md:grid-cols-5 lg:grid-cols-2`}>
				{/* <div> */}
				<div
					className={`${form.box} md:col-span-6 lg:col-span-1 h-[80vh] rounded-xl md:rounded-br-none md:rounded-l-xl lg:h-fit order-2 md:order-1`}
				>
					<h1 className="text-center font-bold text-2xl md:text-4xl mb-8">Sign In</h1>

					<label htmlFor="username" className="grid px-4 md:px-12 mt-4">
						<input
							className={form.input}
							onFocus={(event) => handleOpenUser(event.target.value)}
							onBlur={(event) => handleOpenUser(event.target.value)}
							onChange={handleUser}
							value={user}
							id="username"
							name="username"
							type="text"
						/>
						<h2
							className={`font-medium pl-2 text-sm md:text-lg ${
								!userField ? "-translate-y-6 md:-translate-y-9 cursor-pointer text-slate-600" : "-translate-y-12 md:-translate-y-20"
							}`}
						>
							Username
						</h2>
					</label>

					<label htmlFor="password" className="grid px-4 md:px-12">
						<input
							className={form.input}
							onFocus={(event) => handleOpenPassword(event.target.value)}
							onBlur={(event) => handleOpenPassword(event.target.value)}
							onChange={handlePassword}
							value={password}
							id="password"
							name="password"
							type="password"
						/>
						<h2
							className={`font-medium pl-2 text-sm md:text-lg ${
								!passwordField ? "-translate-y-6 md:-translate-y-9 cursor-pointer text-slate-600" : "-translate-y-12 md:-translate-y-20"
							}`}
						>
							Password
						</h2>
					</label>

					<button className={`${form.btn} mx-4 md:mx-12 text-center`} onClick={handleBtn}>
						Login
					</button>

					<span className="text-center text-xs md:text-lg">Or Try Login In Another Way</span>
					<div className="flex justify-center items-center gap-5 -mt-5">
						<a target="_blank" href="https://facebook.com" rel="noopener noreferrer">
							<FaFacebook className="size-4 md:size-6 hover:text-blue-600" />
						</a>
						<a target="_blank" href="https://instagram.com" rel="noopener noreferrer">
							<FaInstagram className="size-4 md:size-6 hover:text-red-600" />
						</a>
						<a target="_blank" href="https://twitter.com" rel="noopener noreferrer">
							<FaTwitter className="size-4 md:size-6 hover:text-blue-600" />
						</a>
						<a target="_blank" href="https://google.com" rel="noopener noreferrer">
							<FaGoogle className="size-4 md:size-6 hover:text-red-600" />
						</a>
					</div>
				</div>

				<div className={`order-2 hidden md:col-span-2 lg:col-span-1 lg:flex md:order-1`}>
					<img src={Image} alt="Login" />
				</div>
			</div>
			{showMessage && renderMessage(isValid)}
		</section>
	);
}