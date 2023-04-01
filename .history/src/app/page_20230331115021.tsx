import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-slate-900 flex min-h-screen min-w-full justify-center items-start flex-col">
			<div className="mt-5 lg:mt-10 w-full max-w-[95%] lg:max-w-4xl bg-green-800 flex-none inline-block rounded">
				<Image
					src="/gnsq logo.svg"
					height={250}
					width={250}
					alt="GNSQ Logo"
					className="mx-auto"
				/>
			</div>

			<div className="mt-5 lg:mt-10 w-full max-w-[95%] lg:max-w-4xl bg-green-800"></div>
		</main>
	);
}
