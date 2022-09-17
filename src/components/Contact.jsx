import { useState } from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="bg-[#0a192f] flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/5a87e9c9-4748-4443-8652-ad5d847a1d96"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						Submit the form below to contact me or shoot me an email at
						nicolas.g9182@gmail.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
					required="true"
				></input>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					errorMessage="Please provide a valid email"
					name="email"
					required="true"
				></input>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"
					required="true"
				></textarea>
				<button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-white hover:border-white hover:text-[#0a192f]">
					Lets Connect
				</button>
			</form>
		</div>
	);
};

export default Contact;
