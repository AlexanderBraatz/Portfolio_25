'use client';

import React from 'react';
import NewTestimonialForm from '@/components/newTestimonialForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import headshot from '@/public/headshot.jpeg';

export default async function NewTestimonial() {
	// let { data: testimonials, error } = await supabase
	// 	.from('Testimonials')
	// 	.select('name,quote,role,imgSrc');

	// //remove these early return statments , they are only hee to make typescript happy, probably form gpt origionally
	// if (error) {
	// 	console.error('Error fetching testimonials:', error.message);
	// 	return <p>Error loading testimonials.</p>;
	// }
	// if (testimonials === null) {
	// 	console.error('No testimonials available.');
	// 	return <p>No testimonials available.</p>;
	// }
	return (
		<>
			{/* <Header
				links={linksTestimonials}
				headerWidth={'sm:w-[18rem]'}
			/> */}
			{/* <AuthStatusPanel /> */}
			<section className="scroll-mt-[100rem] mb-28 max-w-[49rem] text-center sm:mb-0">
				<div className="flex items-center justify-center ">
					<div className="relative">
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ type: 'tween', duration: 0.2 }}
						>
							<Image
								src={headshot}
								alt="placholder headshot"
								width="192"
								height="192"
								quality="95"
								priority={true}
								className="h-24 w-24 rounded-full  object-cover border-[0.35rem] border-white shadow-xl"
							/>
						</motion.div>
						<motion.span
							className="absolute bottom-0 right-0 text-4xl"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								type: 'spring',
								stiffness: 125,
								delay: 0.1,
								duration: 0.7
							}}
						>
							👋
						</motion.span>
					</div>
				</div>
			</section>
			<NewTestimonialForm />
			{/* <Testimonials /> */}
			{/* <div className="container">
				<TestimonialSlider testimonials={testimonials} />
			</div> */}
			<div className=" w-1 h-16 my-24 rounded-full hidden sm:block "></div>
		</>
	);
}
