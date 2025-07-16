'use client';
import React, { useEffect, useState, useTransition } from 'react';

import { motion } from 'framer-motion';
import { FaUserCheck } from 'react-icons/fa';
import SectionHeading from '@/components/section-heading';
import { useRouter } from 'next/navigation';
import { useActiveSectionContext } from '@/context/active-section-context';
import { testimonialLinks } from '@/lib/data';
import { getUserEmailFormLocalStorage } from '@/auth/client';
import toast from 'react-hot-toast';

export default function AlmostTherePopUp() {
	const FaUserCheckIcon = FaUserCheck as React.ComponentType<
		React.HTMLAttributes<HTMLElement>
	>;
	const router = useRouter();
	const { setActiveSection, setHeaderSections } = useActiveSectionContext();

	useEffect(() => {
		// start a timer to redirect after 3 seconds
		const timeoutID = setTimeout(() => {
			router.push('/testimonials/new');
			setActiveSection('Review');
			setHeaderSections(testimonialLinks);
		}, 3000);

		// cleanup if component unmounts before timeout fires
		return () => clearTimeout(timeoutID);
	}, [router, setActiveSection, setHeaderSections]);

	const [userEmail, setUserEmail] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		const getUserEmail = async () => {
			setLoading(true);
			try {
				const { userEmail, error } = await getUserEmailFormLocalStorage();
				setUserEmail(userEmail);
				if (error) throw error;
			} catch (err) {
				setErrorMessage((err as Error).message || 'Unknown error'); // type assertion is safe as nothing but an Error will bet thrown here and AuthError extends Error
				if (errorMessage) {
					toast.error(errorMessage);
				}
			} finally {
				setLoading(false);
			}
		};
		getUserEmail();
	}, []);
	return (
		<motion.div
			className=""
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125 }}
		>
			<div className="w-full flex flex-row justify-center mb-6">
				<div className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white bg-slate-100 shadow-xl">
					<FaUserCheckIcon className=" relative left-[1.4rem] top-[1rem] my-auto opacity-70 w-12 h-12" />
				</div>
			</div>

			<SectionHeading>Successfully Signed in!</SectionHeading>
			<div className="flex gap-2 flex-row justify-center items-center h-5 -mt-6 mb-6">
				<p className="text-gray-700 ">
					Signed in as:{' '}
					{loading ? 'loading…' : errorMessage ? '--' : userEmail ?? 'x'}
				</p>
			</div>
			<div className="flex gap-2 flex-row justify-center items-center h-5 ">
				<div className="h-5 w-5  animate-spin rounded-full border-b-2 border-black"></div>
				<p className="text-gray-700 ">You are being redirected ...</p>
			</div>
		</motion.div>
	);
}
