const Balance = ({ balance, state, ...rest }) => {
	return (
		<div className="rounded-xl bg-white md:col-span-7 lg:col-span-1 p-4 flex flex-col gap-2 shadow-xl">
			<div className="grid gap-2">
				<div className="flex justify-between items-center px-1">
					<h1 className="font-bold">Balance</h1>
					<button
						{...rest}
						className="rounded-full px-4 py-1 bg-gray-300 hover:bg-gray-400 font-semibold focus:outline-none"
					>
						Withdraw
					</button>
				</div>

				<div className="flex flex-col flex-1 gap-8 bg-red-500 rounded-lg p-5 md:p-6 justify-between text-white">
					<div className="grid gap-2">
						<span className="text-sm font-light font-mono">Current Balance</span>
						<h1 className=" font-bold text-xl md:translate-y-8">
							{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(balance)}
						</h1>
					</div>

					<div className="w-full flex flex-row gap-4 md:gap-28 lg:gap-8 mt-3 justify-between text-sm lg:text-xs">
						<span className="">5294 2346 4780 2468</span>
						<span className="text-right">12/24</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Balance;
