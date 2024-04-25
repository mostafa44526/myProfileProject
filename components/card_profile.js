import Image from "next/image";
import Link from "next/link";
export default function CardProfile() {
	return (
		<>
			<div className="bg-white shadow rounded-lg p-6">
				<div className="flex flex-col items-center">
					<Image
						src="/yalla.jpg"
						alt={"myImage"}
						className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
						width={50}
						height={50}
					></Image>
					<h1 className="text-xl font-bold">Mostafa Hassan</h1>
					<p className="text-gray-700">frontend Developer</p>
					<div className="mt-6 flex flex-wrap gap-4 justify-center">
						<Link
							href="#"
							className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
						>
							Contact
						</Link>
						<Link
							href="#"
							className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
						>
							Resume
						</Link>
					</div>
				</div>
				<hr className="my-6 border-t border-gray-300" />
				<div className="flex flex-col">
					<span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
						Skills
					</span>
					<ul>
						<li className="mb-2">JavaScript</li>
						<li className="mb-2">React</li>
						<li className="mb-2">Next.js</li>
						<li className="mb-2">Python</li>
						<li className="mb-2">HTML/CSS</li>
					</ul>
				</div>
			</div>
		</>
	);
}
