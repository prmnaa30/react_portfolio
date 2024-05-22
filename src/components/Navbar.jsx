import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`${styles.paddingX} ${
				scrolled ? "backdrop-blur-lg" : "backdrop-blur-0"
			} flex items-center w-full h-16 fixed top-0 z-20 transition duration-250 ease-in`}
		>
			<div className='flex justify-between items-center w-full mx-auto'>
				<Link
					to='/'
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='prmnaa' />
				</Link>
				<ul className='list-none flex gap-5 px-7'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.id ? "text-white" : "text-gray-300"
							} pl-3  hover:text-white`}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
