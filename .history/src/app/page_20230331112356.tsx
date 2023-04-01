import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-slate-800 flex min-h-screen min-w-full">
			<div className="max-w-sm m-auto">
				<Image
					src="/gnsq logo.svg"
					height={500}
					width={500}
					alt="GNSQ Logo"
					className=""
				/>
			</div>
		</main>
	);
}
