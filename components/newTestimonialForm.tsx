'use client';
import React, { MutableRefObject, useRef, useState } from 'react';
import SectionHeading from './section-heading';
import { addNewTestimonial } from '@/actions/addNewTestimonial';

import { motion } from 'framer-motion';

import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import ImageUploader from './image-uploader';

export default function NewTestimonialForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const imgSrcRef: MutableRefObject<string | null> = useRef<string>(null);
	return (
		<motion.section
			id="NewTestimonialForm"
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
			<div className="h-8"></div>
			<SectionHeading>New Review</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please leave a short testimonial about our work
			</p>
			<form
				ref={formRef}
				className="mt-10 flex flex-col"
				action={async formData => {
					const { data, error } = await addNewTestimonial(
						formData,
						imgSrcRef.current
					);

					if (error) {
						toast.error(error);
						return;
					}
					formRef.current?.reset();
					toast.success('addNewTestimonial submitted successfully!!');
				}}
			>
				<input
					type="name"
					name="name"
					placeholder="Full Name"
					className="h-14 px-4 bg-white borderBlack rounded-lg"
					required
					maxLength={500}
				></input>
				<input
					type="role"
					name="role"
					placeholder="Your role at the time of our collaboration"
					className="h-14 mt-3  px-4 bg-white borderBlack rounded-lg"
					required
					maxLength={500}
				></input>
				<textarea
					name="quote"
					placeholder="Your Testimonial"
					className="h-52 bg-white borderBlack my-3 rounded-lg p-4"
					required
					maxLength={5000}
				></textarea>
				<SubmitBtn />
			</form>
			<ImageUploader imgSrcRef={imgSrcRef} />
		</motion.section>
	);
}
