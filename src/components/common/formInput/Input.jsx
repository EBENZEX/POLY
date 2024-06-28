export default function FormInput({ htmlFor, label, ...rest }) {
	return (
		<label htmlFor={htmlFor} className="grid w-full gap-1">
			<span className="text-base px-1 font-semibold">{label}</span>
			<input
				className="focus:outline-none border-2 focus:ring-2 ring-green-400 rounded-lg px-2 py-1"
				name={htmlFor}
				id={htmlFor}
				{...rest}
			/>
		</label>
	);
}
