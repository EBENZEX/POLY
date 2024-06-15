import heroImage from "../../images/dashboard/dashboardHero.png";
import Profile from "./DashboardProfile";
import DashboardChart from "./DashboardChart";
import Income from "./DashboardIncome";
import Balance from "./DashboardBalance"; 
import Activity from "./DashboardActivity";

export default function DashboardProfile() {
	return (
		<main className="w-full h-full grid gap-4">
			{/* BG COVER */}
			<div className="hidden lg:grid w-full h-1/3">
				<img src={heroImage} alt="" />
			</div>

			{/* BOX */}
			<div className="hidden lg:grid grid-cols-7 gap-3 pr-4">
				<Profile />
				<div className="col-span-5 grid grid-cols-3 gap-4">
					<Balance />
					<Income bg="#C4FFAF" header="Income" text="+Rp 50,000" />
					<Income bg="#FF7878" header="Outcome" text="-Rp 50,000" />
					<DashboardChart />
					<Activity />
				</div>
			</div>

			{/* box 2 */}
			<div className="lg:hidden flex flex-col gap-6 pl-10 pr-28 w-screen">
				<div className="grid w-full md:grid-cols-12 mt-10 lg:mt-0 gap-4">
					<Profile />
					<Balance />
					<Income bg="#C4FFAF" header="Income" text="+Rp 50,000" />
					<Income bg='#FF7878' header="Outcome" text="-Rp 50,000" />
				</div>
				<DashboardChart />
				<Activity />
			</div>
		</main>
	);
}
