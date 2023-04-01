import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-slate-900 flex min-h-screen min-w-full items-center flex-col">
			<div className="mt-5 lg:mt-10 w-full max-w-[95%] lg:max-w-4xl bg-green-800 flex-none inline-block rounded">
				<Image
					src="/gnsq logo.svg"
					height={250}
					width={250}
					alt="GNSQ Logo"
					className="mx-auto"
				/>
			</div>

			<div className="mt-5 lg:mt-10 w-full max-w-[95%] lg:max-w-4xl bg-green-800 rounded flex-none">
				<div className="p-2 grid grid-flow-col">
					<Link
						className="p-1 transition-all max-w-[150px] border border-transparent font-semibold text-center text-white hover:bg-orange-500 hover:border-orange-400 hover:shadow-orange-400 rounded"
						href="https://chat.gnsq.org"
					>
						Chat
					</Link>
				</div>
			</div>
		</main>
	);
}
