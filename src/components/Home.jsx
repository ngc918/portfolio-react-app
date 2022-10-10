import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Gallery from "./Gallery";

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/*Container*/}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-white">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Nicolas Gonzalez
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Full Stack Developer
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I'm a full-stack developer, looking to specialze in building and
					designing amazing digital experiences. Focused on build and improving
					responsive full-stack web applications
				</p>
				<div>
					<Link to="work" smooth={true} duration={500}>
						<button className="text-white border-2 px-6 py-3 my-2 flex items-center  hover:bg-white hover:border-white hover:text-[#0a192f]">
							View Projects
							<HiArrowNarrowRight className="ml-3" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
