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
		<article className="relative p-2 w-full rounded group/article border border-transparent bg-green-900 flex flex-col hover:bg-green-950 hover:border-green-700 transition-colors">
			<h3 className="text-sm font-semibold text-white max-w-[90%]">
				{title}
			</h3>
			<p className="text-slate-50 mt-2 truncate">{body}</p>
			<button className="text-white text-xs ml-auto mt-2 p-1 hover:bg-green-500 rounded transition-colors flex items-baseline">
				View More
				<div className="relative overflow-hidden inline-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-4 h-4"
					>
						<path
							fillRule="evenodd"
							d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clipRule="evenodd"
						/>
						<path
							fillRule="evenodd"
							d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</button>
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
