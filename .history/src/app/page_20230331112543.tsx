import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-slate-800 flex min-h-screen min-w-full">
			<div className="flex items-center mt-10">
				<Image
					src="/gnsq logo.svg"
					height={250}
					width={250}
					alt="GNSQ Logo"
					className=""
				/>
			</div>
		</main>
	);
}
