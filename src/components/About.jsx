import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="w-max-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4">About</p>
					</div>
					<div></div>
				</div>
				<div className="w-max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Please feel free to look around.</p>
					</div>
					<div>
						<p>
							I began my coding journey in late 2021 in an attempt to learn
							something. When I started, I didn't realize how much I would truly
							enjoy it. Designing an application from the ground up is an
							amazing experience, even throught the ups and downs. With each
							passing day I try to learn, discover, and improve my skills as a
							developer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
