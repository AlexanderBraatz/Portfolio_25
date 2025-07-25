'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BiErrorAlt } from 'react-icons/bi';
import SectionHeading from '@/components/section-heading';
import { useSearchParams } from 'next/navigation';

export default function SingInError() {
	const BiErrorAltIcon = BiErrorAlt as React.ComponentType<
		React.HTMLAttributes<HTMLElement>
	>;
	const searchParams = useSearchParams();
	const errorMessage = searchParams.get('errorMessage');
	return (
		<motion.div
			className=""
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125 }}
		>
			<div className="w-full flex flex-row justify-center mb-6">
				<div className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white bg-slate-100 shadow-xl">
					<BiErrorAltIcon className=" relative left-[1.4rem] top-[1rem] my-auto opacity-70 w-12 h-12" />
				</div>
			</div>

			<SectionHeading>Unfortunately there has been an Error!</SectionHeading>
			<div className="flex gap-2 flex-row justify-center items-center h-5 -mt-6 mb-6">
				<p className="text-gray-700 ">{`Error: ${errorMessage}`}</p>
			</div>
			<div className="flex gap-2 flex-row justify-center items-center h-5 ">
				<p className="text-gray-700 ">- - -</p>
			</div>
		</motion.div>
	);
}
