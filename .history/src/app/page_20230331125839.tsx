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
				<div className="p-2 grid grid-flow-col auto-cols-[1fr] gap-0">
					<NavButton url="https://chat.gnsq.org" title="Chat" />
					<NavButton
						url="https://discord.gg/UKF34DVKUj"
						title="Discord"
						target="_blank"
					/>
					<NavButton url="/events" title="Events" />
				</div>
			</div>

			<div className="mt-5 lg:mt-10 w-full max-w-[95%] lg:max-w-4xl rounded">
				<div className="flex flex-col md:flex-row">
					<div className="bg-green-800 w-full m-2 rounded md:max-w-[50%]">
						<div className="p-2">
							<h2 className="text-white text-lg font-semibold">
								Latest News
							</h2>
							<div className="mt-4">
								<NewsArticle
									title="Infamous 'Goon Captian' Tato (lil bitch McGee) to come out as **straight?**"
									body={`We all know our 'Goon Captain' as the Cock hungry slut he is.
									But, what if I told you, he wasn't a gay?
									Well I think`}
									date={new Date().toISOString()}
									author="Goon High VP"
								/>
							</div>
						</div>
					</div>

					<div className="bg-green-800 w-full m-2 rounded md:max-w-[50%]">
						<div className="p-2">
							<h2 className="text-white text-lg font-semibold">
								Upcoming Events
							</h2>
							<div className="mt-4"></div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

function NewsArticle({
	title,
	body,
	date,
	author,
}: {
	title: string;
	body: string;
	date: string;
	author: string;
}) {
	return (
		<article className="relative p-2 w-full rounded group/article border border-transparent bg-green-900 flex flex-col">
			<h3 className="text-sm font-semibold text-white max-w-[90%]">
				{title}
			</h3>
			<p className="text-slate-50 mt-2 truncate">{body}</p>
			<div className="items-right">
				<button className="text-white text-xs">View More</button>
			</div>
		</article>
	);
}

function NavButton({
	url,
	title,
	target,
}: {
	url: string;
	title: string;
	target?: string;
}) {
	return (
		<Link
			className="p-1 transition-all border border-transparent font-semibold text-center text-white hover:bg-green-500 hover:border-green-400 hover rounded"
			href={url}
			target={target}
		>
			{title}
		</Link>
	);
}
