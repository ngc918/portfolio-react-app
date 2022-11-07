import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
	return (
		<div className="bg-[#0a192f]">
			<Navbar />
			<Home />
			<Gallery />
			<About />
			<Skills />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
