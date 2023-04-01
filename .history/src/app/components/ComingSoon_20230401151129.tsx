export default function ComingSoon() {
	return (
		<main className="bg-gray-900 flex flex-col min-h-screen">
			<button className="fixed top-3 left-3 flex items-center text-slate-200 hover:text-slate-50 hover:underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 mr-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
				Home
			</button>
			<p className="italic text-xl font-semibold text-slate-200 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				Coming Soon
			</p>
		</main>
	);
}
