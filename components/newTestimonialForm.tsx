'use client';
import React, { MutableRefObject, useRef, useState } from 'react';
import SectionHeading from './section-heading';
import { addNewTestimonial } from '@/actions/addNewTestimonial';

import { motion } from 'framer-motion';

import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { FileUploadDirectUpload } from './file-upload-component';
import { useRouter } from 'next/navigation';
import { homePageLinks } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function NewTestimonialForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const imgSrcRef: MutableRefObject<string | null> = useRef<string>(null);
	const [isPending, startTransition] = React.useTransition();
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const router = useRouter();
	const { setActiveSection, setHeaderSections } = useActiveSectionContext();
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
			{submitSuccess ? (
				<>
					<SectionHeading>Thank you for sharing your Review!</SectionHeading>
					<div className="flex gap-2 flex-row justify-center items-center h-5 -mt-6">
						<div className="h-5 w-5  animate-spin rounded-full border-b-2 border-black"></div>
						<p className="text-gray-700 ">You are being redirected ...</p>
					</div>
				</>
			) : (
				<>
					<SectionHeading>Share Your Experience</SectionHeading>
					<p className="text-gray-700 -mt-6">
						Just a couple of sentences about working together go a long way.
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
							toast.success('New Review submitted successfully!!');
							setSubmitSuccess(true);
							await new Promise(resolve => setTimeout(resolve, 2000));
							router.push('/#reviews');
							setActiveSection('Reviews');
							setHeaderSections(homePageLinks);
						}}
					>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							className="h-14 px-4 bg-white borderBlack rounded-lg"
							required
							maxLength={500}
						></input>
						<input
							type="text"
							name="role"
							placeholder="Your role, at the time of our collaboration"
							className="h-14 mt-3  px-4 bg-white borderBlack rounded-lg"
							required
							maxLength={500}
						></input>
						<textarea
							name="quote"
							placeholder="Your Testimonial"
							className="h-36 bg-white borderBlack my-3 rounded-lg p-4"
							required
							maxLength={300}
						></textarea>
						<FileUploadDirectUpload
							imgSrcRef={imgSrcRef}
							isPending={isPending}
							startTransition={startTransition}
						/>
						{/* if image upload iss till pending then disable the button */}
						<SubmitBtn isPendingImageUpload={isPending as boolean} />
					</form>
				</>
			)}
		</motion.section>
	);
}
