import heroImage from "../../images/dashboard/dashboardHero.png";
import CardProfile from "./CardProfile";
import CardChart from "./CardChart";
import CardIncome from "./CardIncome";
import CardBalance from "./CardBalance"; 
import CardActivity from "./CardActivity";

export default function DashboardProfile() {
	return (
		<main className="w-full h-full grid">
			{/* BG COVER */}
			<div className="hidden lg:grid w-full h-1/3">
				<img src={heroImage} alt="" />
			</div>

			{/* BOX */}
			<div className="hidden lg:grid grid-cols-12 gap-3 pr-2">
				<CardProfile />
				<div className="col-span-9 grid grid-cols-3 gap-4 lg:mt-3">
					<CardBalance />
					<CardIncome bg="#C4FFAF" header="CardIncome" text="+Rp 50,000" />
					<CardIncome bg="#FF7878" header="Outcome" text="-Rp 50,000" />
					<CardChart />
					<CardActivity />
				</div>
			</div>

			{/* box 2 */}
			<div className="lg:hidden flex flex-col flex-1 gap-6  pl-4 pr-24 w-screen">
				<div className="flex flex-col md:grid md:grid-cols-12 mt-10 lg:mt-0 gap-4">
					<CardProfile />
					<CardBalance />
					<CardIncome bg="#C4FFAF" header="CardIncome" text="+Rp 50,000" />
					<CardIncome bg='#FF7878' header="Outcome" text="-Rp 50,000" />
				</div>
				<CardChart />
				<CardActivity />
			</div>
		</main>
	);
}
