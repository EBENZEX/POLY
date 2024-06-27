import { X } from "lucide-react";
import { Context } from "../common/Context";
import { useContext } from "react";

export default function Withdraw({ state, onClick }) {
	const { setBalance } = useContext(Context);

	function handleWithdraw() {
		setBalance((prev) => prev - 1000);
	}
	return (
		<>
			{state && (
				<div className={state ? "visible" : "hidden"}>
					<button onClick={handleWithdraw}>Withdraw 1000</button>
					<button onClick={onClick}>Close</button>
				</div>
			)}
		</>
	);
	// 	<div
	// 		className={`w-screen h-screen absolute top-0 left-0 z-[9999999] backdrop-blur-md transition-all duration-500 ease-in-out ${
	// 			state ? "opacity-100 z-50" : "opacity-0 -z-50"
	// 		} backdrop-blur-sm w-full h-full flex justify-center items-center`}
	// 	>
	// 		<div className=" mx-10 bg-white grid grid-rows-9 shadow-2xl rounded-[2rem] w-3/4 sm:w-1/2 lg:w-1/3 h-3/4">
	// 			<div className="row-start-1 text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-2 ">
	// 				<h1>Notification</h1>
	// 			</div>
	// 			{/*
	//   <div className="row-start-3 row-span-5 flex mt-[2.8rem] mb-[9rem] text-sm gap-5 mx-8 justify-between items-center border-b border-black">
	//   <img src={Logo} className="w-10 md:w-20" alt="" />
	//   <p>Selamat Datang Di POLY!. Jika anda terdapat keluhan dari masalah silahkan hubungi contact kami.</p>
	//   </div> */}

	// 			<div
	// 				className="row-start-9 rounded-b-[2rem] cursor-pointer hover:bg-red-900 bg-red-700 py-2 flex justify-center items-center text-white font-bold"
	// 				{...rest}
	// 			>
	// 				<X />
	// 			</div>
	// 		</div>
	// 	</div>
	// )}
}
