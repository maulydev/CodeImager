import { BsGithub } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<nav className="py-4">
			<div className="flex justify-between items-center container mx-auto border-b p-4">
				<a className="flex items-center gap-2 cursor-pointer font-black text-xl brand before:bg-gradient-to-r before:from-red-600 before:via-blue-200 before:to-blue-600">
					<img
						className="w-14"
						src={logo}
						alt=""
					/>
					<span>CodeImager</span>
				</a>
				<a
					target="_blank"
					href="https://github.com/maulydev"
				>
					<BsGithub className="text-2xl" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
