import { useState } from "react";
import PopAlert from "../common/formInput/PopAlert";
import Input from "../common/formInput/Input";
import Dana from '../../images/dashboard/dana.png'
import Ovo from '../../images/dashboard/ovo.png'
import Linkaja from '../../images/dashboard/linkaja.png'
import Gopay from '../../images/dashboard/gopay.png'

const Balance = ({ balance, ...rest }) => {
	const [open, setOpen] = useState(false);

	function handleWithdraw() {
		setOpen((prev) => !prev);
	}

	return (
		<div className="rounded-xl bg-white md:col-span-7 lg:col-span-1 p-4 flex flex-col gap-2 shadow-xl">
			<div className="grid gap-2">
				<div className="flex justify-between items-center px-1">
					<h1 className="font-bold">Balance</h1>
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="rounded-full px-4 py-1 bg-gray-300 hover:bg-gray-400 font-semibold focus:outline-none"
					>
						Withdraw
					</button>
				</div>

				<div className="flex flex-col gap-8 bg-red-500 rounded-lg p-5 md:p-6 justify-between text-white">
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
			{open && (
				<PopAlert title={"WITHDRAW"} state={open} onClick={handleWithdraw} open={"Confirm"}>
					<Input htmlFor={"nominal"} label={"Nominal Penarikan"} />
					<div className="grid grid-cols-3 items-center justify-items-center gap-8">
						<img className="w-20 cursor-pointer hover:scale-110 hover:drop-shadow-xl shadow-black" src={Dana} alt="" />
						<img className="w-12 cursor-pointer hover:scale-110 hover:drop-shadow-xl shadow-black" src={Ovo} alt="" />
						<img className="w-24 cursor-pointer hover:scale-110 hover:drop-shadow-xl shadow-black" src={Gopay} alt="" />
					</div>
				</PopAlert>
			)}
		</div>
	);
};

export default Balance;
