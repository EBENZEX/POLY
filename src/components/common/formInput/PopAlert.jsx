import { useState } from "react";

export default function PopAlert({ title, state, setState, open, children, ...rest }) {
	return (
		<div
			className={`fixed top-0 left-0 transition-all duration-500 ease-in-out ${
				state ? "opacity-100 z-[9999999]" : "opacity-0 -z-50"
			} backdrop-blur-sm w-full h-full flex justify-center items-center`}
		>
			<div className=" mx-10 bg-white grid shadow-2xl rounded-[2rem] w-3/4 sm:w-1/2 lg:w-1/3">
				<div className="row-start-1 text-white bg-[#836FFF] rounded-t-[2rem] font-bold text-xl flex justify-center items-center py-2 ">
					<h1>{title}</h1>
				</div>

				<div className="flex flex-col my-8 text-sm gap-5 mx-8 justify-between items-center border-black">
					{children}
				</div>

				<div
					className={`rounded-b-[2rem] cursor-pointer hover:bg-green-900 bg-green-700 py-2 flex justify-center items-center text-white font-bold`}
					{...rest}
				>
					<span>{open}</span>
				</div>
			</div>
		</div>
	);
}
