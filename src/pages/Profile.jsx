import heroImage from "../images/dashboard/dashboardHero.png";
import { Home,Wallet, HandCoins, Bell,LogOut, CircleHelp } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/DashboardHeader";
import Profile from "../components/dashboard/DashboardProfile";
import DashboardChart from "../components/dashboard/DashboardChart";
import Income from "../components/dashboard/DashboardIncome";
import Balance from "../components/dashboard/DashboardBalance";
import Activity from "../components/dashboard/DashboardActivity";

export default function Dashboard() {
	return (
		<div className="w-screen h-screen flex">
			{/* SIDE NAVBAR */}
			<div className="flex">
				<Sidebar>
					<SidebarItem icon={<Home color="#fff" size={20} />} text="Home" />
					<SidebarItem icon={<Wallet color="#fff" size={20} />} text="Wallet" />
					<SidebarItem icon={<HandCoins color="#fff" size={20} />} text="Trade" />
					<hr className="my-3" />
					<SidebarItem icon={<Bell color="#fff" size={20} />} text="Notification" />
					<SidebarItem icon={<CircleHelp color="#fff" size={20} />} text="Help" />
					<SidebarItem icon={<LogOut color="#fff" size={20} />} text="Logout" />
				</Sidebar>
			</div>

			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				<Header />

				<main className="w-full h-full grid gap-4">
					{/* BG COVER */}
					<div className="hidden lg:grid w-full h-1/3">
						<img src={heroImage} alt="" />
					</div>

					{/* BOX */}
					<div className="hidden md:grid grid-cols-5 pr-4">
						<Profile />
						<div className="col-span-4 grid grid-cols-3 gap-4">
							<Balance />
							<Income bg="#C4FFAF" header="Income" text="+Rp 50,000" />
							<Income bg="#FF8E8E" header="Outcome" text="-Rp 50,000" />
							<DashboardChart />
							<Activity />
						</div>
					</div>

					{/* box 2 */}
					<div className="lg:hidden grid gap-6 px-8">
						<div className="grid gap-4">
							<Profile />
							<Balance />
							<Income bg="#C4FFAF" header="Income" text="+Rp 50,000" />
							<Income bg="#FF8E8E" header="Outcome" text="-Rp 50,000" />
						</div>
						<DashboardChart />
						<Activity />
					</div>
					<div className="m-[100px]"></div>
				</main>
			</div>
		</div>
	);
}
