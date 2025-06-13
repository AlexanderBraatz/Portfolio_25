'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';

import TestimonialSlider from '@/components/testimonials-slider';
import TestimonialSliderCard from '@/components/testimonials-slider-card';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { Testimonial } from '@/lib/types/testimonial';
import { useActiveSectionContext } from '@/context/active-section-context';
import { linksTestimonials } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
const ArrowRightIcon = BsArrowRight as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

const testimonialz = [
	{
		quote:
			'Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.',
		name: 'Rose Roberson',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=1'
	},
	{
		quote:
			'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.',
		name: 'Chace Rodgers',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=10'
	},
	{
		quote:
			'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
		name: 'Cornelius Sheppard',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=9'
	},
	{
		quote:
			'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
		name: 'Chace Rodgers',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=7'
	},
	{
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
		name: 'Cornelius Sheppard',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=8'
	},
	{
		quote:
			'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
		name: 'Chace Rodgers',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=2'
	},
	{
		quote:
			'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
		name: 'Cornelius Sheppard',
		role: 'CEO at Company',
		imgSrc: 'https://i.pravatar.cc/120?img=3'
	}
];

interface TestimonialsProps {
	testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
	const {
		activeSection,
		setActiveSection,
		setTimeOfLastCLick,
		setHeaderSections
	} = useActiveSectionContext();

	const { ref } = useSectionInView('Reviews', 0.8);
	return (
		<section
			ref={ref}
			id="reviews"
			className=" scroll-mt-28 mb-28 sm:mb-40 "
		>
			{/* <section> */}
			<SectionHeading>My Reviews</SectionHeading>
			{/* <p className="mb-8 -mt-4 text-center text-gray-700 ">
				Flick through all the lovely things colleagues & clients had to say.
			</p> */}
			{/* <SectionHeading>What Colleagues & Clients Are Saying</SectionHeading> */}
			{/* <div>
				{testimonials.map((testimonial, i) => (
					<React.Fragment key={i}>
						<p>{testimonial.user_name}</p>
						<p>{testimonial.user_testimonial}</p>
						<p>{testimonial.user_location}</p>
					</React.Fragment>
				))}
			</div> */}
			{/* <div className="container relative overflow-hidden rounded-lg max-w-[42rem] border border-black/5"> */}
			<div className="container relative bg-gray-100 rounded-lg max-w-[42rem] border border-black/5">
				<TestimonialSlider testimonials={testimonials} />
				{/* <TestimonialSliderCard testimonials={testimonials} /> */}
				{/* <div
					className=" bg-[#fde2e3] absolute top-[-2rem] -z-10 right-[-2rem] h-[11.25rem] w-[11.25rem] blur-[rem]  rounded-full "
					// sm:w-[68.75rem]"
				></div>
				<div
					className=" bg-[#dbd7fb] absolute bottom-[-2rem] -z-10 left-[-2rem] h-[11.25rem] w-[10rem] blur-[5rem] rounded-full"
					// sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left=[-15rem] 2xl:left-[-5rem]"
				></div> */}
			</div>
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="/account/create-account"
					className="group bg-white mt-8  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
					onClick={() => {
						// @ts-ignore: Argument of type 'string' is not assignable to union type
						setHeaderSections(linksTestimonials);
						setActiveSection('Account');
						setTimeOfLastCLick(Date.now());
					}}
				>
					Share Your Experience
					<ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
			</motion.div>
			{/* <div className="container">
				<h1>shadcn cards</h1>
				<TestimonialSliderCard testimonials={testimonialz} />
			</div> */}
		</section>
	);
}
