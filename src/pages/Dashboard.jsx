import heroImage from "../images/dashboard/dashboardHero.png";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
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
					<SidebarItem icon={<Home color="#fff" size={20} />} text="Home" alert />
					<SidebarItem icon={<LayoutDashboard color="#fff" size={20} />} text="Dashboard" active />
					<SidebarItem icon={<StickyNote color="#fff" size={20} />} text="Projects" alert />
					<SidebarItem icon={<Calendar color="#fff" size={20} />} text="Calendar" />
					<SidebarItem icon={<Layers color="#fff" size={20} />} text="Tasks" />
					<SidebarItem icon={<Flag color="#fff" size={20} />} text="Reporting" />
					<hr className="my-3" />
					<SidebarItem icon={<Settings color="#fff" size={20} />} text="Settings" />
					<SidebarItem icon={<LifeBuoy color="#fff" size={20} />} text="Help" />
				</Sidebar>
			</div>

			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				<Header />

				<main className="hidden">
					<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
						{/* Cards */}
						<div className="grid grid-cols-12 gap-6">
							<DashboardChart />
						</div>
					</div>
				</main>

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
