'use client';
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { sendEmail } from '@/actions/sendEmail';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

const FaPaperPlaneIcon = FaPaperPlane as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

export default function Contact() {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			id="contact"
			ref={ref}
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity: 1
			}}
			viewport={{
				once: true
			}}
			transition={{ duration: 1 }}
			className="text-center scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)]"
		>
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{' '}
				<a
					className="underline"
					href="mailto:example@gmail.com"
				>
					example@gmail.com
				</a>{' '}
				or through this form.
			</p>
			<form
				className="mt-10 flex flex-col"
				action={async formData => await sendEmail(formData)}
			>
				<input
					type="email"
					name="senderEmail"
					placeholder="Your email"
					className="h-14 px-4 bg-white borderBlack   rounded-lg"
					required
					maxLength={500}
				></input>
				<textarea
					name="message"
					placeholder="Your message"
					className="h-52 bg-white borderBlack my-3 rounded-lg p-4"
					required
					maxLength={5000}
				></textarea>
				<button
					type="submit"
					className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all px-7 py-3 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition=all"
				>
					Submit
					<FaPaperPlaneIcon className="opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
				</button>
			</form>
		</motion.section>
	);
}
