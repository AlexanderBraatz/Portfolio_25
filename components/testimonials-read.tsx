'use client';

import React from 'react';
import SectionHeading from './section-heading';

import { motion } from 'framer-motion';

import TestimonialSlider from '@/components/testimonials-slider';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { Testimonial } from '@/lib/types/testimonial';
import { useActiveSectionContext } from '@/context/active-section-context';
import { testimonialLinks } from '@/lib/data';
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
	userIsLoggedIn: boolean;
}

export default function Testimonials({
	testimonials,
	userIsLoggedIn
}: TestimonialsProps) {
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
			<motion.div
				className="flex flex-col items-center justify-center "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<SectionHeading>My Reviews</SectionHeading>
				<div className="container relative bg-gray-100 rounded-lg max-w-[42rem] border border-black/5">
					<TestimonialSlider testimonials={testimonials} />
				</div>
				<Link
					href={
						userIsLoggedIn ? '/testimonials/new' : '/account/create-account'
					}
					// className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm sm:text-lg font-medium"
					className="group text-sm sm:text-lg font-medium bg-white mt-8  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
					onClick={() => {
						setTimeOfLastCLick(Date.now());
						if (userIsLoggedIn) {
							setActiveSection('Review');
						} else {
							setActiveSection('Account');
						}
						setHeaderSections(testimonialLinks);
					}}
				>
					Share Your Experience
					<ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
			</motion.div>
		</section>
	);
}
