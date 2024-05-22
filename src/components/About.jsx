import React from "react";

import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section className='w-full min-h-screen'>
			<div className={`${styles.paddingX} flex flex-col`}>
				<div className='w-full flex items-center'>
					<h3 className={`${styles.sectionHeadText} text-white w-3/5`}>
						A little introduction of myself.
					</h3>
					<div className='w-full h-1 bg-accent' />
				</div>

				<div>
					<motion.div>
						<p>I'm a passionate Frontend Developer based in Indonesia.</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
