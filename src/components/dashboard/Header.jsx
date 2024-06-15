import UserMenu from "./DropdownProfile";

function Header() {
	return (
		<header className="sticky shadow-md top-0 bg-white border-b border-slate-200 dark:border-slate-700 z-30">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-end h-16 -mb-px">
					<UserMenu align="right" />
				</div>
			</div>
		</header>
	);
}

export default Header;
