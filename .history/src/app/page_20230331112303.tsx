import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-slate-800 flex min-h-screen min-w-full">
			<Image
				src="/gnsq logo.svg"
				height={500}
				width={500}
				alt="GNSQ Logo"
			/>
		</main>
	);
}
