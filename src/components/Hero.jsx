import React from "react";

import { styles } from "../styles";
import { Tilt } from "react-tilt";

import { heropict } from "../assets";
import { herovector } from "../assets";
import { socialLinks } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto'>
			<div
				className={`${styles.paddingX} h-screen mx-auto justify-between flex items-center gap-5`}
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.25, 0.75)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='flex flex-col gap-3'
				>
					<div className='text-white leading-tight'>
						<h2 className='font-medium text-[32px]'>Greetings, I am</h2>
						<h1 className='font-black text-[48px]'>Pramana</h1>
						<p className='font-semibold text-[24px]'>
							I'm a <span className='text-accent'>Frontend Developer</span>
						</p>
					</div>

					<div className='flex gap-6'>
						{socialLinks.map((social) => (
							<a key={social.name} href={social.href}>
								<img
									height={35}
									width={35}
									src={social.logo}
									alt={social.name}
								/>
							</a>
						))}
					</div>
				</motion.div>

				<motion.div
					variants={fadeIn("left", "spring", 0.25, 0.75)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<Tilt className='relative' options={{ scale: 1, max: 10 }}>
						<img src={herovector} />
						<img className='absolute bottom-0 left-0' src={heropict} />
					</Tilt>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
