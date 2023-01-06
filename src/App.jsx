import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="bg-slate-900 text-white min-h-screen w-full p-4 scrollbar-thin scrollbar-thumb-blue-600">
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
