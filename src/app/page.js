import CardProfile from "../../components/card_profile";
import Experience from "../../components/Experience";
import Links from "../../components/Links";

export default function Home() {
	return (
		<>
			<div className="bg-gray-100">
				<div className="container mx-auto py-8">
					<div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
						<div className="col-span-4 sm:col-span-3">
							<CardProfile />
						</div>
						<div className="col-span-4 sm:col-span-9  flex ">
							<div className="bg-white shadow rounded-lg p-6 flex-1 ">
								<div>
									<h2 className="text-xl font-bold mb-4">About Me</h2>
									<p className="text-gray-700">
										My name is dr/Mostafa Salem... <br /> All my life i work as
										a professional salesman i started from .. <br />
										normal sales man ,sales supervisor ,sales manger ,marketing
										manger <br /> all this years in this field makes me know
										quality when i see one encourage creativity and working as a
										team member to achieve high goals pf our aims
									</p>

									<h3 className="font-semibold text-center mt-10 -mb-2">
										Find me on
									</h3>
								</div>
								<div className="">
									<Links />
								</div>
								<div className="mt-24">
									<Experience />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
