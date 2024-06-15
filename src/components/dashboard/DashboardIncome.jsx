export default function Income({ bg, header, text }) {
	console.log(bg);
	return (
		<div style={{backgroundColor:bg}} className={`rounded-xl md:col-span-6 lg:col-span-1 grid items-center py-4 px-10 shadow-xl`}>
			<div className="row-span-3 grid gap-10">
				<span className="font-medium">{header}</span>
				<h1 className="font-bold text-3xl mb-6">{text}</h1>
			</div>
		</div>
	);
}
