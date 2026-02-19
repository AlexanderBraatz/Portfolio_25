'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import headshot from '@/public/picture-of-me-and-the-client.jpeg';

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

export default function HeadingSection() {
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
				{/* Replacing Airbnb with a custom booking site increased my client’s
					revenue by 16%. */}
				<span className="">Replacing</span>{' '}
				<span className="font-bold">Airbnb</span> with a{' '}
				<span className="font-bold">custom booking site</span> increased my
				client’s revenue by <span className="font-bold">16%.</span>
				<br />
				<span className="italic">Here is how </span>
				<span className="font-bold">I did it.</span>
			</motion.h1>
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<a
					href="https://staging.alexanderbraatz.com/"
					target="_blank"
					className="transform-gpu group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					Go to live site{' '}
					<ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition" />
				</a>

				<a
					className="transform-gpu group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
					href="https://staging.alexanderbraatz.com/admin/bookings"
					target="_blank"
				>
					Go to Admin Dashboard{' '}
					<ArrowRightIcon className="opacity-60 group-hover:translate-y-1 transition" />
				</a>
				<div className="flex flex-row gap-2">
					<a
						className="transform-gpu bg-white w-[56px] p-4 text-gray-700 flex items-center justify-center gap-2 rounded-full  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
						href="https://linkedin.com/in/alexander-braatz-90436a109"
						target="_blank"
					>
						<BsLinkedinIcon />
					</a>
					<a
						className="transform-gpu bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
						href="https://github.com/AlexanderBraatz/airbnb-integration-rental-booking_25"
						target="_blank"
					>
						<FaGithubSquareIcon />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
