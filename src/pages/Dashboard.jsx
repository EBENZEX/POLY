import Logo from "../images/dashboard/logo.png";
import { Home, X, HandCoins, Bell, CircleHelp, User } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import DashboardHome from "../components/dashboard/Home";
import DashboardProfile from "../components/dashboard/Profile";
import DashboardCash from "../components/dashboard/TrashToCash";
import { useState } from "react";

export default function Dashboard() {
	const [notif, setNotif] = useState(false);
	const [support, setSupport] = useState(false);

	function handleNotif() {
		setNotif(!notif);
	}

	function handleSupport() {
		setSupport(!support);
	}
	return (
		<div className="w-screen h-screen flex">
			{/* Notification */}
			<div
				className={`absolute transition-all duration-500 ease-in-out ${
					notif ? "opacity-100" : "opacity-0 -z-50"
				} backdrop-blur-sm z-50 w-full h-full flex justify-center items-center`}
			>
				<div className=" mx-10 bg-white z-50 grid shadow-2xl rounded-[2rem] gap-8 w-3/4 sm:w-1/2 lg:w-1/3 h-3/4 md:h-1/2">
					<div className="text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-3">
						<h1>Notification</h1>
					</div>

					<div className="flex gap-5 mx-8 mb-60 md:mb-20 justify-between items-center border-b border-black">
						<img src={Logo} className="w-16" alt="" />
						<p>Selamat Datang Di POLY!. Jika anda terdapat keluhan dari masalah silahkan hubungi contact kami.</p>
					</div>

					<div
						onClick={handleNotif}
						className="rounded-b-[2rem] cursor-pointer hover:bg-red-900 bg-red-700 py-3 flex justify-center items-center text-white font-bold"
					>
						<X />
					</div>
				</div>
			</div>

			{/* Support */}
			<div
				className={`absolute transition-all duration-500 ease-in-out ${
					support ? "opacity-100" : "opacity-0 -z-50"
				} backdrop-blur-sm z-50 w-full h-full flex justify-center items-center`}
			>
				<div className=" mx-10 bg-white  z-50 grid shadow-2xl rounded-[2rem] gap-8 w-3/4 sm:w-1/2 lg:w-1/3 min-h-1/2">
					<div className="text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-3">
						<h1>Notification</h1>
					</div>

					<div className="flex flex-col gap-3 font-bold mx-8 mb-20 justify-center items-center border-b border-black">
						<img src={Logo} className="w-16" alt="" />
						<h1>JL. M.H Thamrin No.140</h1>
						<h1>Phone : (061) 4573767</h1>
						<h1>Email : mikroskil@gmail.com</h1>
					</div>

					<div
						onClick={handleSupport}
						className="rounded-b-[2rem] cursor-pointer hover:bg-red-900 bg-red-700 py-3 flex justify-center items-center text-white font-bold"
					>
						<X />
					</div>
				</div>
			</div>

			{/* SIDEBAR */}
			<div className="flex">
				<Sidebar>
					<SidebarItem path="/dashboard-home" icon={<Home color="#fff" size={20} />} text="Home" />
					<SidebarItem path="/dashboard-profile" icon={<User color="#fff" size={20} />} text="Profile" />
					<SidebarItem path="/dashboard-cash" icon={<HandCoins color="#fff" size={20} />} text="Trade" />
					<hr className="my-3" />
					<div onClick={handleNotif}>
						<SidebarItem icon={<Bell color="#fff" size={20} />} text="Notification" />
					</div>
					<div onClick={handleSupport}>
						<SidebarItem icon={<CircleHelp color="#fff" size={20} />} text="Help" />
					</div>
				</Sidebar>
			</div>

			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				<Header />
				<div>
					{location.pathname === "/dashboard-home" && <DashboardHome />}
					{location.pathname === "/dashboard-profile" && <DashboardProfile />}
					{location.pathname === "/dashboard-cash" && <DashboardCash />}
				</div>
			</div>
		</div>
	);
}
