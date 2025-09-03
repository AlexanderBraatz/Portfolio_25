'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkSlash } from 'react-icons/fa6';
import SectionHeading from '@/components/section-heading';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-context';
import { testimonialLinks } from '@/lib/data';

export default function InvalidOrExpiredLinkURL() {
	const {
		activeSection,
		setActiveSection,
		setTimeOfLastCLick,
		setHeaderSections
	} = useActiveSectionContext();
	const FaLinkSlashIcon = FaLinkSlash as React.ComponentType<
		React.HTMLAttributes<HTMLElement>
	>;
	return (
		<motion.div
			className=""
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125 }}
		>
			<div className="w-full flex flex-row justify-center mb-8">
				<div className=" flex justify-center items-center h-24 w-24 rounded-full object-cover border-[0.35rem] border-white bg-slate-100 shadow-xl">
					<FaLinkSlashIcon className="opacity-70 w-12 h-12" />
				</div>
			</div>

			<SectionHeading>Oops, this link isn’t working!</SectionHeading>

			<div className="max-w-md mx-auto text-center mb-8">
				<p className="text-gray-700 text-base leading-relaxed mb-4">
					It looks like your magic link has either{' '}
					<span className="font-semibold">expired</span> or is{' '}
					<span className="font-semibold">invalid</span>.
				</p>
				<p className="text-gray-700 text-base leading-relaxed">
					These links time out automatically for your security.
				</p>
			</div>

			<p className="text-gray-900 font-semibold text-lg text-center mb-6">
				Make sure to click the <span className="underline">link</span> in the
				most recent email you received.
			</p>
			<div className="flex flex-col items-center gap-4">
				<Link
					onClick={() => {
						setTimeOfLastCLick(Date.now());
						setActiveSection('Account');
						setHeaderSections(testimonialLinks);
					}}
					href="/account/create-account/magic-link"
					className="transform-gpu group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					Try Again
					{/* <ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition" /> */}
				</Link>
				<p className="text-gray-700 text-sm leading-relaxed max-w-xs text-center">
					Still stuck? Please contact me directly at{' '}
					<a
						className="underline"
						href="mailto:alex_braatz@icloud.com"
					>
						alex_braatz@icloud.com
					</a>
				</p>
			</div>
		</motion.div>
	);
}
