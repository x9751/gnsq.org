"use client";

import { useState } from "react";

export default function NewsArticle({
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
	const [expanded, setExpanded] = useState(false);
	return (
		<article className="relative p-2 w-full rounded group/article border border-transparent bg-green-900 flex flex-col hover:bg-green-950 hover:border-green-700 transition-colors">
			<h3 className="text-sm font-semibold text-white max-w-[90%]">
				{title}
			</h3>
			<p className="text-slate-50 mt-2 truncate">{body}</p>
			<button
				onClick={() => setExpanded(true)}
				className="text-white text-xs ml-auto mt-2 p-1 group/button hover:bg-green-500 rounded transition-colors flex items-center"
			>
				View More
				<div className="relative overflow-hidden inline-block ml-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-4 h-4 -translate-x-full group-hover/button:translate-x-px transition-transform"
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
			<div
				aria-expanded={expanded}
				className="hidden fixed top-0 bottom-0 left-0 right-0 bg-black overflow-y-auto bg-opacity-70 aria-expanded:block"
			>
				<div className="w-full max-w-[95%] absolute top-1/2 left-1/2 bg-slate-50 rounded md:max-w-md text-slate-900 -translate-x-1/2 -translate-y-1/2">
					<h3 className="p-4 text-lg font-semibold">{title}</h3>
					<div className="w-full border-b-black border-b border-opacity-70 mt-1"></div>
					<p className="p-4 text-basis mt-2 break-normal whitespace-pre-wrap">
						{body}
					</p>
					<div className="p-4 relative text-center">
						<button
							onClick={() => setExpanded(false)}
							className="mt-8 text-sm mx-auto bg-slate-800 transition-colors hover:bg-slate-700 text-white py-1 px-2 rounded"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}
