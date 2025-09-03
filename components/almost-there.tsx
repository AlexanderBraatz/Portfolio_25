import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function AlmostTherePopUp() {
	const FaPaperPlaneIcon = FaPaperPlane as React.ComponentType<
		React.HTMLAttributes<HTMLElement>
	>;
	return (
		<motion.div
			className=""
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125 }}
		>
			<div className="w-full flex flex-row justify-center mb-6">
				<div className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white bg-slate-100 shadow-xl">
					<FaPaperPlaneIcon className=" relative left-[0.5rem] top-[0.8rem] my-auto opacity-70 w-14 h-14" />
				</div>
			</div>

			<SectionHeading>Almost there!</SectionHeading>
			<div className="flex flex-col justify-center items-center gap-2 sm:gap-0  min-h-5 text-center">
				<p className="text-gray-700 ">
					Follow the verification link we sent to your email.
				</p>
				<p className="text-gray-500 text-sm ">
					It's a magic link that will sign you in automatically, no password
					needed!
				</p>
			</div>
		</motion.div>
	);
}
