import { useState, useEffect } from "react";
import heroImage from "../../images/dashboard/dashboardHero.png";
import CardProfile from "./CardProfile";
import CardChart from "./CardChart";
import CardIncome from "./CardIncome";
import CardBalance from "./CardBalance";
import CardActivity from "./CardActivity";

export default function DashboardProfile() {
	const [data, setData] = useState([]);
	const [balance, setBalance] = useState(0);
	const [outcome, setOutcome] = useState(0);
	const [tarikTunai, setTarikTunai] = useState(false);

	useEffect(() => {
		const storedData = localStorage.getItem("data");
		if (storedData) {
			const parsedData = JSON.parse(storedData);
			setData(parsedData);
			const balance = parsedData.reduce((acc, curr) => acc + curr[5], 0);
			setBalance(balance);
		}
	}, []);
	return (
		<main className="w-full h-full grid">
			{/* BG COVER */}
			<div className="hidden lg:grid w-full h-1/3">
				<img className="w-full" src={heroImage} alt="" />
			</div>

			{/* BOX */}
			<div className="hidden lg:grid grid-cols-12 gap-3 pr-2">
				<CardProfile />
				<div className="col-span-9 grid grid-cols-3 gap-4 lg:mt-3">
					<CardBalance balance={balance} state={tarikTunai} onClick={() => setTarikTunai((prev) => !prev)} />
					<CardIncome bg="#C4FFAF" header="Income" type="income" text={balance} />
					<CardIncome bg="#FF7878" header="Outcome" type="outcome" text={outcome} />
					<CardChart money={balance} />
					<CardActivity />
				</div>
			</div>

			{/* box 2 */}
			<div className="lg:hidden flex flex-col flex-1 gap-6  pl-4 pr-[5.75rem] w-screen">
				<div className="flex flex-col md:grid md:grid-cols-12 mt-10 lg:mt-0 gap-4">
					<CardProfile />
					<CardBalance balance={balance} state={tarikTunai} onClick={() => setTarikTunai((prev) => !prev)} />
					<CardIncome bg="#C4FFAF" header="Income" type="income" text={balance} />
					<CardIncome bg="#FF7878" header="Outcome" type="outcome" text={outcome} />
				</div>
				<CardChart money={balance} />
				<CardActivity />
			</div>
		</main>
	);
}
