import React from "react";
import BrickBreak from "../assets/brick-breaker.PNG";
import GameRealms from "../assets/game-realms.PNG";
import GameRant from "../assets/project-img.png";
import Portfolio from "../assets/portfolio.PNG";

const Work = () => {
	return (
		<div
			name="work"
			className="w-full md:h-screen text-gray-300 bg-[#0a192f] flex justify-center"
		>
			<div className="max-w-[1000px] mx-auo p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300">
						Work
					</p>
					<p className="py-6">Here's some of my most recent work</p>
				</div>
				{/*Container*/}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/*Grid Item*/}
					<div
						style={{ backgroundImage: `url(${BrickBreak})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/*Hover Effect*/}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Brick Breaker
							</span>
							<div className="pt-8 text-center">
								<a href="https://ngc918.github.io/brick-breaker-project/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/ngc918/brick-breaker-project">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${GameRealms})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/*Hover Effect*/}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Game Realms
							</span>
							<div className="pt-8 text-center">
								<a href="https://game-realms.herokuapp.com/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/ngc918/game-realms">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${GameRant})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/*Hover Effect*/}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Game Rant
							</span>
							<div className="pt-8 text-center">
								<a href="https://game-rant.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Portfolio})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/*Hover Effect*/}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								My Portfolio
							</span>
							<div className="pt-8 text-center">
								<a href="https://celadon-jalebi-94db3f.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/ngc918/portfolio-react-app">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
