'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
	const { ref } = useSectionInView('About');
	const { setActiveSection, setTimeOfLastCLick } = useActiveSectionContext();

	return (
		<motion.section
			ref={ref}
			className="scroll-mt-28 mb-28 max-w-[44rem] text-center leading-8 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="mb-3">
				I’m a <span className="font-bold">curious</span> and{' '}
				<span className="font-bold">ambitious</span> software developer who
				loves bringing ideas to life on the web. I’ve{' '}
				<span className="font-bold">collaborated</span> with designers, clients,
				users, and fellow developers to tackle tough challenges, and I’m always{' '}
				<span className="font-bold">eager to learn </span> from mistakes and
				successes alike. If you’re looking for someone who can{' '}
				<span className="font-bold ">dive in</span>, adapt and help drive
				projects forward,{' '}
				<Link
					href="#contact"
					onClick={() => {
						setActiveSection('Contact');
						setTimeOfLastCLick(Date.now());
					}}
				>
					<span className="block">
						{' '}
						I’d love to <span className="font-bold underline">connect!</span>
					</span>
				</Link>
			</p>
		</motion.section>
	);
}
