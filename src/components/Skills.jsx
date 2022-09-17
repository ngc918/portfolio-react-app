import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import Firebase from "../assets/firebase.png";
import Angular from "../assets/angular.jpg";
import TS from "../assets/typescript.png";

const Skills = () => {
	return (
		<div name="skills" className="bg-[#0a192f] text-gray-300">
			{/*Container*/}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 text-gray-300">
						Skills
					</p>
					<p className="py-4">These are the technologies I've worked with:</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="html icon" />
						<p className="my-4">HTML</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="css icon" />
						<p className="my-4">CSS</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={JS} alt="js icon" />
						<p className="my-4">JavaScript</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
						<p className="my-4">React</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Mongo} alt="mongo icon" />
						<p className="my-4">MongoDB</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Node} alt="node icon" />
						<p className="my-4">Node.js</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Bootstrap} alt="node icon" />
						<p className="my-4">Bootstrap</p>
					</div>

					<div className="shadow-mid shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Tailwind} alt="node icon" />
						<p className="my-4">Tailwind</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
