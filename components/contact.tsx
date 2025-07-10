'use client';
import React, { useRef, useState } from 'react';
import SectionHeading from './section-heading';
import { sendEmail } from '@/actions/sendEmail';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';

import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
	const { ref } = useSectionInView('Contact');
	const formRef = useRef<HTMLFormElement>(null);

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
					href="mailto:alex_braatz@icloud.com"
				>
					alex_braatz@icloud.com
				</a>{' '}
				or through this form.
			</p>
			<form
				ref={formRef}
				className="mt-10 flex flex-col"
				action={async formData => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}
					formRef.current?.reset();
					toast.success('Email sent successfully!!');
				}}
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
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
