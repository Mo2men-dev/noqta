import { Link } from "react-router-dom";
import { NavBar } from "./App";

export default function NotFound() {
	return (
		<>
			<NavBar />
			<div className="h-screen w-full flex flex-col items-center justify-center text-center p-4">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<p className="text-xl text-gray-600 mb-6">Page not found</p>
				<Link to="/" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
					Go Home
				</Link>
			</div>
		</>
	);
}
