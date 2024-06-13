import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import Header from "../partials/Header";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";

export default function Dashboard() {
	return (
		<div className="w-screen h-screen flex">
			{/* SIDE NAVBAR */}
			<div className="flex">
				<Sidebar>
					<SidebarItem icon={<Home color="#fff" size={20} />} text="Home" alert/>
					<SidebarItem icon={<LayoutDashboard color="#fff" size={20} />} text="Dashboard"  active/>
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
				{/*  Site header */}
				<Header />

				<main>
					<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
						{/* Cards */} 
						<div className="grid grid-cols-12 gap-6">
							{/* Line chart (Acme Plus) */}
							<DashboardCard01 />
							{/* Line chart (Acme Advanced) */}
							<DashboardCard02 />
							{/* Line chart (Acme Professional) */}
							<DashboardCard03 />
							{/* Bar chart (Direct vs Indirect) */}
							<DashboardCard04 />
							{/* Line chart (Real Time Value) */}
							<DashboardCard05 />
							{/* Doughnut chart (Top Countries) */}
							<DashboardCard06 />
							{/* Table (Top Channels) */}
							<DashboardCard07 />
							{/* Line chart (Sales Over Time) */}
							<DashboardCard08 />
							{/* Stacked bar chart (Sales VS Refunds) */}
							<DashboardCard09 />
							{/* Card (Customers) */}
							<DashboardCard10 />
							{/* Card (Reasons for Refunds) */}
							<DashboardCard11 />
							{/* Card (Recent Activity) */}
							<DashboardCard12 />
							{/* Card (Income/Expenses) */}
							<DashboardCard13 />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
