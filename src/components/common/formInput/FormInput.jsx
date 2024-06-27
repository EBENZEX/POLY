import { form } from "../../../css/style";

export const FormInput = ({ htmlFor, label, type, state, value, ...rest }) => {
	return (
		<label htmlFor={htmlFor} className="grid px-4 md:px-12 mt-1">
			<input value={value} id={htmlFor} name={htmlFor} type={type} className={form.input} {...rest} />
			<div>
				<h2
					className={`font-medium transition-all ml-3 px-2 text-sm md:text-lg bg-[#E2E8FF] w-max ${
						!state
							? "-translate-y-7 md:-translate-y-9 cursor-pointer text-slate-600"
							: "-translate-y-12 md:-translate-y-[3.75rem]"
					}`}
				>
					{label}
				</h2>
			</div>
		</label>
	);
};
