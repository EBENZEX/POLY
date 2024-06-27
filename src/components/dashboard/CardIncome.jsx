export default function Income({ bg, header, text, type }) {
	return (
		<div
			style={{ backgroundColor: bg }}
			className={`rounded-xl md:col-span-6 lg:col-span-1 flex flex-col flex-1 justify-center py-4 px-5 shadow-xl`}
		>
			<div className="row-span-3 grid gap-10">
				<span className="font-medium">{header}</span>
				<h1 className="font-bold text-3xl mb-6">
					{type === "income" ? "+" : "-"}{' '}{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(text)}
				</h1>
			</div>
		</div>
	);
}
