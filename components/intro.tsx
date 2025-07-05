'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import headshot from '@/public/headshot.jpeg';

// changes had to be made here to fix type differences between the react-icons and React (this fix is adequate for now)
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const ArrowRightIcon = BsArrowRight as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;
// const HiDownloadIcon = HiDownload as React.ComponentType;
const HiDownloadIcon = HiDownload as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;
const BsLinkedinIcon = BsLinkedin as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;
const FaGithubSquareIcon = FaGithubSquare as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

export default function Intro() {
	const { activeSection, setActiveSection, setTimeOfLastCLick } =
		useActiveSectionContext();
	const { ref } = useSectionInView('Home', 0.5);

	return (
		<section
			ref={ref}
			id="home"
			className="scroll-mt-[100rem] mb-28 max-w-[49rem] text-center sm:mb-0"
		>
			<div className="flex items-center justify-center ">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'tween', duration: 0.2 }}
					>
						<Image
							src={headshot}
							alt="placholder headshot"
							width="192"
							height="192"
							quality="95"
							priority={true}
							className="h-24 w-24 rounded-full  object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7
						}}
					>
						👋
					</motion.span>
				</div>
			</div>
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5em] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Alexander.</span> I'm a{' '}
				<span className="font-bold">full-stack developer</span> with{' '}
				<span className="font-bold">2 years</span> of experience. I enjoy
				building <span className="italic">AI-powered web apps</span>. My focus
				is <span className="font-bold">React (Next.js)</span>.
				{/* <span className="font-bold">Hello, I'm Alexander.</span> I'm a{' '}
				<span className="font-bold">full-stack developer</span> with{' '}
				<span className="font-bold">2 years</span> of experience. I enjoy
				building <span className="italic">sites & apps</span>. My focus is{' '}
				<span className="underline">React (Next.js)</span>. */}
			</motion.h1>
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					onClick={() => {
						setActiveSection('Contact');
						setTimeOfLastCLick(Date.now());
					}}
					href="#contact"
					className="transform-gpu group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					Contact me here{' '}
					<ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a
					className="transform-gpu group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
					href="/CV_Alexander_Braatz_2025.pdf"
					download
				>
					Download CV{' '}
					<HiDownloadIcon className="opacity-60 group-hover:translate-y-1 transition" />
				</a>
				<a
					className="transform-gpu bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
					href="https://linkedin.com/in/alexander-braatz-90436a109"
					target="_blank"
				>
					<BsLinkedinIcon />
				</a>
				{/* <a
					className="transform-gpu bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
					href="https://github.com/AlexanderBraatz"
					target="_blank"
				>
					<FaGithubSquareIcon />
				</a> */}
			</motion.div>
		</section>
	);
}
