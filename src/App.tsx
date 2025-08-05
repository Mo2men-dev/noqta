import { Link } from "react-router-dom";
import { FaCheckCircle, FaGithub, FaRegCopy } from "react-icons/fa";
import { useEffect, useState } from "react";
import NoqtaEditor from "noqta";

export const NoqtaIcon = ({ size, animated = false }: { size: number; animated?: boolean }) => {
	return (
		<div
			style={{
				width: `${size}px`,
				height: `${size}px`,
			}}
			className={`aspect-square bg-gradient-to-tr from-transparent`}>
			<span
				className={`${
					animated ? "animated-icon" : "bg-gradient-to-tr from-transparent to-black hover:bg-black"
				} rounded-full block w-full h-full`}></span>
		</div>
	);
};

export const NavBarElement = ({ children }: { children: React.ReactNode }) => {
	return <li className="p-2 hover:bg-gray-200 rounded-lg">{children}</li>;
};

export const LinkComponent = ({
	className = "",
	to,
	blank = false,
	children,
}: {
	className?: string;
	to: string;
	blank?: boolean;
	children: React.ReactNode;
}) => {
	return (
		<Link
			to={to}
			className={`text-black hover:underline ${className}`}
			target={blank ? "_blank" : undefined}
			rel="noopener noreferrer">
			{children}
		</Link>
	);
};

export const CodeSnippet = ({ text }: { text: string }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, [copied]);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<div className="text-white bg-[#222] p-3 rounded-lg w-full flex items-center justify-between">
			<code className="font-mono">{text}</code>
			<button className="p-1 text-white rounded-lg cursor-pointer" onClick={copyToClipboard}>
				{!copied ? <FaRegCopy /> : <FaCheckCircle className="text-green-400" />}
			</button>
		</div>
	);
};

export const NavBar = () => {
	return (
		<nav className="p-4 text-black absolute top-0 left-0 w-full bg-white z-50">
			<div className="flex shadow-md w-1/4 mx-auto justify-center p-2 rounded-xl max-sm:w-full max-md:w-1/2">
				<ul className="flex items-center flex-1/2">
					<NavBarElement>
						<Link to="/noqta/docs/getting-started">Docs</Link>
					</NavBarElement>
				</ul>
				<div className="flex justify-center items-center flex-1/5">
					<LinkComponent to="/noqta">
						<NoqtaIcon size={32} />
					</LinkComponent>
				</div>
				<ul className="flex flex-1/2 items-center justify-end">
					<NavBarElement>
						<LinkComponent to="https://github.com/Mo2men-dev/noqta-editor" blank>
							<FaGithub />
						</LinkComponent>
					</NavBarElement>
				</ul>
			</div>
		</nav>
	);
};

function App() {
	return (
		<>
			<NavBar />
			<main className="h-screen py-20 w-1/2 m-auto max-lg:w-full">
				<header className="flex flex-col my-10 font-family-heading items-center">
					<h1 className="text-5xl font-bold flex p-2 items-center justify-center">
						N<NoqtaIcon size={32} animated />
						qta Editor
					</h1>
					<p className="text-2xl text-center">
						A <span className="font-extralight italic">flexible</span>,{" "}
						<LinkComponent className="font-bold text-blue-400" to="https://react.dev/">
							React
						</LinkComponent>
						-based{" "}
						<span className="bg-black text-white px-1 rounded-lg">
							<span className="text-blue-400">W</span>
							<span className="text-red-400">Y</span>
							<span className="text-yellow-400">S</span>
							<span className="text-green-400">I</span>
							<span className="text-blue-400">W</span>
							<span className="text-red-400">Y</span>
							<span className="text-pink-400">G</span>
						</span>{" "}
						editor built with{" "}
						<LinkComponent className="font-bold text-pink-400" to="https://tiptap.dev/" blank>
							Tiptap
						</LinkComponent>{" "}
						– easy to use, customize, and extend.
					</p>
					<div className="my-2 w-1/4 max-sm:w-1/2">
						<CodeSnippet text="npm i noqta" />
					</div>
				</header>
				<section className="w-full h-1/2">
					<NoqtaEditor />
				</section>
				<section></section>
			</main>
		</>
	);
}

export default App;
