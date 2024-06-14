export default function Income({ bg, header, text }) {
	return (
		<div className={`rounded-xl grid row-span- bg-[${bg}] grid items-center py-4 px-10 shadow-xl`}>
			<div className="row-span-3 grid gap-16">
				<span className="font-medium">{header}</span>
				<h1 className="font-bold text-4xl mb-6">{text}</h1>
			</div>
		</div>
	);
}
