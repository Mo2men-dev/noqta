import { Link, useParams } from "react-router-dom";
import { NavBar } from "./App";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import docsList from "./constants/docs";
import NotFound from "./NotFound";

function Docs() {
	const { slug } = useParams<{ slug?: string }>();
	const filename = slug || "getting-started";
	const docFileData = docsList.find((doc) => doc.slug === filename);
	document.title = docFileData ? `Noqta Docs - ${docFileData.title}` : "Noqta Docs";
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		if (slug) {
			fetch(`/noqta/docs/${filename}.md`)
				.then((res) => res.text())
				.then((text) => setContent(text));
		}
	}, [slug]);

	return (
		<>
			{docFileData ? (
				<>
					<NavBar />
					<main className="flex p-20 gap-4 my-10 max-sm:flex-col max-md:w-full max-md:p-10 relative">
						<nav className="left-0 h-full w-1/5 py-4 z-50 text-nowrap max-sm:w-full max-sm:text-xs max-sm:px-1">
							<ul className="max-md:text-sm max-sm:flex max-sm:items-center max-sm:justify-center">
								{docsList.map((doc) => (
									<li key={doc.slug} className="my-1">
										<Link
											to={`/noqta/docs/${doc.slug}`}
											className={`flex p-2 rounded-lg hover:bg-gray-200 ${
												doc.slug === filename ? "bg-slate-100 text-blue-500 font-semibold" : ""
											}`}>
											{doc.title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<section className="prose max-sm:prose-sm">
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings]}>
								{content}
							</ReactMarkdown>
							<div className="w-full flex justify-around gap-2">
								{
									<Link
										to={docFileData?.prev ? `/noqta/docs/${docFileData.prev?.slug}` : ""}
										className="p-4 bg-slate-200 flex-1 rounded-xl hover:bg-slate-100 hover:text-blue-500">
										Prev {`${docFileData?.prev ? `- ${docFileData.prev.title}` : ""}`}
									</Link>
								}
								{
									<Link
										to={docFileData?.next ? `/noqta/docs/${docFileData.next?.slug}` : ""}
										className="p-4 bg-slate-200 flex-1 rounded-xl hover:bg-slate-100 hover:text-blue-500 text-end">
										Next {`${docFileData?.next ? `- ${docFileData.next.title}` : ""}`}
									</Link>
								}
							</div>
						</section>
						<nav className="flex-1 py-4 max-sm:hidden max-lg:text-sm text-nowrap">
							<h2 className="text-lg font-semibold max-lg:text-md">Table of Contents:</h2>
							<ul>
								{docFileData?.headers?.map((header) => (
									<li key={header}>
										<a
											href={`#${header.toLowerCase().replace(/\s+/g, "-")}`}
											className="block p-1 rounded-lg hover:text-blue-500 transition-colors">
											{header}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</main>
				</>
			) : (
				<NotFound />
			)}
		</>
	);
}

export default Docs;
