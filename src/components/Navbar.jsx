import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/my-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] z-10 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div>
				<img src={Logo} alt="my logo" />
			</div>

			{/* menu */}
			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Works
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<div className="pt-40 py-6 text-3xl">
					<p className="uppercase tracking-widest">Lets Connect</p>
					<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
						<a href="https://www.linkedin.com/in/ngonz09/">
							<div className="rounded-full shadow-lg sh">
								<FaLinkedin />
							</div>
						</a>
						<a href="https://github.com/ngc918">
							<div className="rounded-full shadow-lg sh">
								<FaGithub />
							</div>
						</a>
						<a href="https://drive.google.com/file/d/1J2aYyY6Ub-OokriF5qnHC9DgVTjpnBV9/view?usp=sharing">
							<div className="rounded-full shadow-lg sh">
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
			</ul>

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/ngonz09/"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/ngc918"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300"
							href="https://drive.google.com/file/d/1S4hcl4V7wGC-233B1980gUksrE1EmuZI/view?usp=sharing"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
