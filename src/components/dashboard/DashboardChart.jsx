import BarChart from "./charts/BarChart02";
import { tailwindConfig } from "../dashboard/utils/Utils";

function DashboardCard09() {
	const chartData = {
		labels: ["06-01-2024", "06-02-2024", "06-03-2024", "06-04-2024", "06-05-2024", "06-06-2024"],
		datasets: [
			// Light blue bars
			{
				label: "Stack 1",
				data: [6200, 9200, 6600, 8800, 5200, 9200],
				backgroundColor: tailwindConfig().theme.colors.indigo[500],
				hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
				barPercentage: 0.66,
				categoryPercentage: 0.66,
			},
			// Blue bars
			{
				label: "Stack 2",
				data: [-4000, -2600, -5350, -4000, -7500, -2000],
				backgroundColor: tailwindConfig().theme.colors.indigo[200],
				hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
				barPercentage: 0.66,
				categoryPercentage: 0.66,
			},
		],
	};

	return (
		<div className="flex flex-col rounded-xl sm:col-span-2 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700">
			<header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
				<h2 className="font-semibold text-slate-800 dark:text-slate-100">Week 1</h2>
			</header>

			<div className="px-5 py-3">
				<div className="flex justify-between font-bold text-slate-800 dark:text-slate-100 mb-4">
					<div className="text-3xl">+Rp 1,234,567</div>
					<div className="text-xl">Juni</div>
				</div>
			</div>

			<div className="grow">
				<BarChart data={chartData} width={595} height={248} />
			</div>
		</div>
	);
}

export default DashboardCard09;
