import Logo from "../images/dashboard/logo.png";
import { Home, X, HandCoins, Bell, CircleHelp, User } from "lucide-react";
import PageTitle from "../components/PageTitle";
import Sidebar, { SidebarItem } from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import DashboardHome from "../components/dashboard/Home";
import DashboardProfile from "../components/dashboard/Profile";
import DashboardCash from "../components/dashboard/TrashToCash";
import { useState } from "react";

export default function Dashboard() {
	const [notif, setNotif] = useState(false);
	const [support, setSupport] = useState(false);
	const [withdraw, setWithdraw] = useState(false);
	const [changeProfile, setChangeProfile] = useState(false);

	return (
		<div className="w-screen h-screen flex">
			{/* WITHDRAW */}
			<div
				className={`absolute transition-all duration-500 ease-in-out ${
					notif ? "opacity-100 z-50" : "opacity-0 -z-50"
				} backdrop-blur-sm w-full h-full flex justify-center items-center`}
			>
				<div className=" mx-10 bg-white grid grid-rows-9 shadow-2xl rounded-[2rem] w-3/4 sm:w-1/2 lg:w-1/3 h-3/4">
					<div className="row-start-1 text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-2 ">
						<h1>Notification</h1>
					</div>

					<div className="row-start-3 row-span-5 flex mt-[2.8rem] mb-[9rem] text-sm gap-5 mx-8 justify-between items-center border-b border-black">
						<img src={Logo} className="w-10 md:w-20" alt="" />
						<p>Selamat Datang Di POLY!. Jika anda terdapat keluhan dari masalah silahkan hubungi contact kami.</p>
					</div>

					<div
						onClick={() => setNotif((cur) => !cur)}
						className="row-start-9 rounded-b-[2rem] cursor-pointer hover:bg-red-900 bg-red-700 py-2 flex justify-center items-center text-white font-bold"
					>
						<X />
					</div>
				</div>
			</div>

			{/* Notification */}
			<div
				className={`absolute transition-all duration-500 ease-in-out ${
					notif ? "opacity-100 z-50" : "opacity-0 -z-50"
				} backdrop-blur-sm w-full h-full flex justify-center items-center`}
			>
				<div className=" mx-10 bg-white grid grid-rows-9 shadow-2xl rounded-[2rem] w-3/4 sm:w-1/2 lg:w-1/3 h-3/4">
					<div className="row-start-1 text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-2 ">
						<h1>Notification</h1>
					</div>

					<div className="row-start-3 row-span-5 flex mt-[2.8rem] mb-[9rem] text-sm gap-5 mx-8 justify-between items-center border-b border-black">
						<img src={Logo} className="w-10 md:w-20" alt="" />
						<p>Selamat Datang Di POLY!. Jika anda terdapat keluhan dari masalah silahkan hubungi contact kami.</p>
					</div>

					<div
						onClick={() => setNotif((cur) => !cur)}
						className="row-start-9 rounded-b-[2rem] cursor-pointer hover:bg-red-900 bg-red-700 py-2 flex justify-center items-center text-white font-bold"
					>
						<X />
					</div>
				</div>
			</div>

			{/* Support */}
			<div
				className={`absolute transition-all duration-500 ease-in-out ${
					support ? "opacity-100 z-50 " : "opacity-0 -z-50"
				} backdrop-blur-sm w-full h-full flex justify-center items-center`}
			>
				<div className=" mx-10 bg-white grid shadow-2xl rounded-[2rem] gap-8 w-3/4 sm:w-1/2 lg:w-1/3 min-h-1/2">
					<div className="text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-3">
						<h1>Notification</h1>
					</div>

					<div className="flex flex-col gap-3 text-xs font-bold mx-8 mb-20 justify-center items-center border-b border-black">
						<img src={Logo} className="w-16" alt="" />
						<h1>JL. M.H Thamrin No.140</h1>
						<h1>Phone : (061) 4573767</h1>
						<h1>Email : mikroskil@gmail.com</h1>
					</div>

					<div
						onClick={() => setSupport((cur) => !cur)}
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
					<div onClick={() => setNotif((cur) => !cur)}>
						<SidebarItem icon={<Bell color="#fff" size={20} />} text="Notification" />
					</div>
					<div onClick={() => setSupport((cur) => !cur)}>
						<SidebarItem icon={<CircleHelp color="#fff" size={20} />} text="Help" />
					</div>
				</Sidebar>
			</div>

			{/* SECTION */}
			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				<Header />
				<div className="bg-[#F0F3FF]">
					{location.pathname === "/dashboard-home" && (
						<>
							<PageTitle title={"POLY | DASHBOARD HOME"} />
							<DashboardHome />
						</>
					)}
					{location.pathname === "/dashboard-profile" && (
						<>
							<PageTitle title={"POLY | Profile"} />
							<DashboardProfile />
						</>
					)}
					{location.pathname === "/dashboard-cash" && (
						<>
							<PageTitle title={"POLY | Trash To Cash"} />
							<DashboardCash />
						</>
					)}
				</div>
			</div>
		</div>
	);
}
