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
	const [btn, setBtn] = useState(false);
	const render = {
		false: (
			<div className="rounded-2xl px-4 py-2 bg-white shadow-xl fixed top-20 left-1/2 transform -translate-x-1/2 translate-y-0 transition-transform duration-300 ease-out">
				<h1 className="font-bold text-red-500 text-xl">Semua Field Harus Diisi</h1>
			</div>
		),
		true: (
			<div className="rounded-2xl px-4 py-2 bg-white shadow-xl fixed top-20 left-1/2 transform -translate-x-1/2 translate-y-0 transition-transform duration-300 ease-out">
				<h1 className="font-bold text-green-500 text-xl">Login Berhasil</h1>
			</div>
		),
	};

	function handleUser(event) {
		setUser(event.target.value);
		console.log(user);
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
			setBtn(true);
		} else {
			setIsValid(false);
			setShowMessage(true);
			setBtn(false);
		}
	}

	useEffect(() => {
		if (btn && isValid) {
			const timer = setTimeout(() => {
				navigate("/dashboard-profile");
			}, 1500);

			return () => clearTimeout(timer);
		}
	}, [btn, isValid, navigate]);

	return (
		<section className={`${container.fluid} px-0 min-h-screen`}>
			<div className={`${container.box1} px-0 w-[90vw] grid md:grid-cols-2`}>
				<div
					className={`${form.box} h-[80vh] rounded-b-xl md:rounded-br-none md:rounded-l-xl  lg:h-fit order-2 md:order-1`}
				>
					<h1 className="text-center font-bold text-4xl mb-8">Sign In</h1>

					<label htmlFor="username" className="grid ">
						<input
							className={form.input}
							onFocus={(event) => handleOpenUser(event.target.value)}
							onBlur={(event) => handleOpenUser(event.target.value)}
							onChange={(event) => handleUser(event.target.value)}
							defaultValue={user}
							id="username"
							name="username"
							type="text"
						/>
						<h2 className={`font-bold text-md ${!userField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}>
							Username
						</h2>
					</label>

					<label htmlFor="passwordField" className="grid">
						<input
							className={form.input}
							onFocus={(event) => handleOpenPassword(event.target.value)}
							onBlur={(event) => handleOpenPassword(event.target.value)}
							onChange={(event) => handlePassword(event.target.value)}
							value={password}
							id="passwordField"
							name="passwordField"
							type="password"
						/>
						<h2 className={`font-bold text-md ${!passwordField ? "-translate-y-8 cursor-pointer" : "-translate-y-14"}`}>
							Password
						</h2>
					</label>

					<button className={`${form.btn} text-center`} onClick={handleBtn}>
						Login
					</button>

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

				{/* IMG */}
				<div className={`order-2 flex md:order-1`}>
					<img src={Image} alt="" />
				</div>
			</div>
			{/* POP OUT */}
			{showMessage && render[isValid]}
		</section>
	);
}
