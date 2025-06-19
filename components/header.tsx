'use client';

import React, { useRef, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import { homePageLinks } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { usePathname } from 'next/navigation';

export default function Header() {
	const {
		activeSection,
		setActiveSection,
		setTimeOfLastCLick,
		headerSections,
		setHeaderSections
	} = useActiveSectionContext();
	const isPastFirstLoadRef = useRef(false);
	// ... reset it after first render
	useEffect(() => {
		isPastFirstLoadRef.current = true;
	}, []);
	const pathname = usePathname();
	console.log('header ', pathname);

	const headerWidth =
		headerSections === homePageLinks ? 'sm:w-[41rem]' : 'sm:w-[18rem]';
	return (
		<header className="z-[999] relative">
			<motion.div
				className={` ${headerWidth} w-full fixed top-0 left-1/2 h-[4.5rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]  sm:rounded-full`}
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			></motion.div>

			<nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
					{headerSections.map(link => (
						<motion.li
							className={'flex justify-center items-center h-3/4 relative '}
							initial={
								isPastFirstLoadRef.current
									? { y: 0, opacity: 100 }
									: { y: -100, opacity: 0 }
							}
							animate={{ y: 0, opacity: 100 }}
							key={link.hash}
						>
							<Link
								className={clsx(
									'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',
									{
										'text-gray-950': activeSection === link.name
									}
								)}
								href={link.hash}
								onClick={() => {
									if (link.hash === '/testimonials/new') {
										if (
											pathname === '/account/create-account' ||
											pathname === '/login'
										) {
											//do nothing
										} else {
											link.name == 'Home' && setHeaderSections(homePageLinks);
											setActiveSection(link.name);
											setTimeOfLastCLick(Date.now());
										}
									} else {
										// wait what am is doing hereeeere
										link.name == 'Home' && setHeaderSections(homePageLinks);
										setActiveSection(link.name);
										setTimeOfLastCLick(Date.now());
									}
								}}
							>
								{link.name}
								{activeSection === link.name && (
									<motion.span
										className="bg-gray-100 rounded-full absolute inset-0 -z-10"
										layoutId="activeSection"
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
}
