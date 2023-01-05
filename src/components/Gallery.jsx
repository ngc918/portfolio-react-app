import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Gallery = () => {
	const gallery = [
		{
			id: 1,
			img: "https://ik.imagekit.io/nicolasg/store_home.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1672895802242",
		},
		{
			id: 2,
			img: "https://ik.imagekit.io/nicolasg/shopping_cart.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1672895801866",
		},
		{
			id: 3,
			img: "https://ik.imagekit.io/nicolasg/checkout.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1672895801822",
		},
		{
			id: 4,
			img: "https://ik.imagekit.io/nicolasg/project-img.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667807889502",
		},
		{
			id: 5,
			img: "https://ik.imagekit.io/nicolasg/game-info.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667807204922",
		},
		{
			id: 6,
			img: "https://ik.imagekit.io/nicolasg/ngfitness_signup.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1667807198959",
		},
		{
			id: 7,
			img: "https://ik.imagekit.io/nicolasg/workout_progress.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1667807198732",
		},
		{
			id: 8,
			img: "https://ik.imagekit.io/nicolasg/game-realms.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1667807204305",
		},
		{
			id: 9,
			img: "https://ik.imagekit.io/nicolasg/portfolio.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1667807199130",
		},
		{
			id: 10,
			img: "https://ik.imagekit.io/nicolasg/brick-breaker.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1667807199478",
		},
	];

	const slideLeft = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<div className="bg-[#0a192f] relative flex flex-row justify-center items-center text px-12 mr-[75px] ml-[75px] fixed z-0">
				<MdChevronLeft
					className="opacity-50 cursor-pointer hover:opacity-100 fill-white"
					size={40}
					onClick={slideLeft}
				/>
				<div
					id="slider"
					className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
				>
					{gallery.map((item) => (
						<img
							className="w=[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 w-[400px] h-[350px] aspect-auto"
							src={item.img}
							alt="/"
						/>
					))}
				</div>
				<MdChevronRight
					className="opacity-50 cursor-pointer hover:opacity-100 fill-white"
					size={40}
					onClick={slideRight}
				/>
			</div>
		</>
	);
};

export default Gallery;
