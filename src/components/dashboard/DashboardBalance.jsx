export default function Balance() {
	return (
		<div className="rounded-xl md:col-span-7 lg:col-span-1 p-4 flex flex-col gap-2 shadow-xl">
			<h1 className="font-bold">Balance</h1>

			<div className="grid gap-8 bg-red-500 rounded-lg p-4 justify-between text-white">
				<div className="grid gap-2">
					<span className="text-sm font-light font-mono">Current Balance</span>
					<h1 className=" font-bold text-xl">Rp 15,000,00</h1>
				</div>

				<div className="flex gap-28 lg:gap-8 mt-3 pr-6 text-sm lg:text-xs">
					<span>5294 2346 4780 2468</span>
					<span>12/24</span>
				</div>
			</div>
		</div>
	);
}
