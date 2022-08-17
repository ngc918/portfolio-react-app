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
						<p>
							Hi, I'm Nicolas, nice to meet you. Please feel free to look
							around.
						</p>
					</div>
					<div>
						<p>
							I am a passionate developer looking to build excellent and
							effecient software that improves the lives of others. Looking to
							work with a wide range of clientele and improve my skillset.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
