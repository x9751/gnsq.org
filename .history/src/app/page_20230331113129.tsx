import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-slate-800 flex min-h-screen min-w-full justify-center">
			<div className="mt-10 w-full max-w-2xl">
				<Image
					src="/gnsq logo.svg"
					height={250}
					width={250}
					alt="GNSQ Logo"
					className="mx-auto"
				/>
			</div>
		</main>
	);
}
