import Logo from "../../images/dashboard/logo.png";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { nav } from "../../css/style";

export default function Nav() {
	const [isClick, setIsClick] = useState(false);

	function handleIsClick() {
		setIsClick(!isClick);
	}
	return (
		<nav className="grid bg-[#F0F3FF] w-screen sticky top-0 shadow-lg z-10 px-8 py-4 -mt-2 rounded-bl-[1.5rem] rounded-br-[1.5rem]">
			<div className="w-full flex justify-between items-center">
				<NavLink to={"/"}>
					<img className="w-16 hover:scale-125" src={Logo} alt="" />
				</NavLink>

				{/* LG KEATAS */}
				<div className={`${nav.box} gap-8`}>
					<NavLink to={"/"} className={nav.link}>
						Home
					</NavLink>

					<NavLink to={"/#skenario"} className={nav.link}>
						Trade
					</NavLink>

					<NavLink to={"/#distribusi"} className={nav.link}>
						Distribution
					</NavLink>

					<NavLink to={"/#about"} className={nav.link}>
						About Us
					</NavLink>

					<NavLink to={"/#bussiness"} className={nav.link}>
						Business
					</NavLink>

					<NavLink to={"/#contact"} className={nav.link}>
						Contact
					</NavLink>
				</div>

				<div className={`${nav.box} gap-4`}>
					<NavLink to={"/register"} className={nav.link}>
						Register
					</NavLink>
					<span>|</span>
					<NavLink to={"/login"} className={nav.link}>
						Login
					</NavLink>
				</div>

				{/* LG KEBAWAH */}
				<div className="lg:hidden cursor-pointer hover:scale-125 p-2 rounded-xl" onClick={handleIsClick}>
					{isClick ? <FiX className="size-6" /> : <FiMenu className="size-6" />}
				</div>
			</div>

			{/* RENDER */}
			{isClick && (
				<div className="lg:hidden bg-[#F0F3FF] grid font-bold text-xl -mx-8 pt-4 text-[#836FFF]">
					<NavLink to={"/"} className={"hover:bg-slate-200 pl-8 py-3"}>
						Home
					</NavLink>

					<NavLink to={"/#skenario"} className={nav.linkSmall}>
						Trade
					</NavLink>

					<NavLink to={"/#distribusi"} className={nav.linkSmall}>
						Distribution
					</NavLink>

					<NavLink to={"/#about"} className={nav.linkSmall}>
						About Us
					</NavLink>

					<NavLink to={"/#bussiness"} className={nav.linkSmall}>
						Bussiness
					</NavLink>

					<NavLink to={"/#contact"} className={nav.linkSmall}>
						Contact
					</NavLink>

					<NavLink onClick={handleIsClick} to={"/login"} className={nav.linkSmall}>
						Login
					</NavLink>

					<NavLink onClick={handleIsClick} to={"/register"} className={nav.linkSmall}>
						Register
					</NavLink>
				</div>
			)}
		</nav>
	);
}
