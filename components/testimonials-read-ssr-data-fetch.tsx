import React from 'react';
import { supabase } from '@/lib/supabaseClient';
import * as motion from 'motion/react-client';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import Testimonials from './testimonials-read';
import { getUser } from '@/auth/server';
import { Testimonial } from '@/lib/types/testimonial';
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

export default async function TestimonialsWithData() {
	const user = await getUser();
	let { data: testimonials, error } = await supabase
		.from('Testimonials')
		.select('name,quote,role,imgSrc,hasPassedModeration,createdByUserEmail');

	//remove these early return statments , they are only hee to make typescript happy, probably form gpt origionally
	if (error) {
		console.error('Error fetching testimonials:', error.message);
		return <p>Error loading testimonials.</p>;
	}
	if (testimonials === null) {
		console.error('No testimonials available.');
		return <p>No testimonials available.</p>;
	}
	const fillterdTestimonials = testimonials.filter(testimonial => {
		// get new types to fix the ts complaint below
		if (testimonial.createdByUserEmail === user?.email) {
			console.log(testimonial.createdByUserEmail, user?.email);
			return true;
		}
		if (testimonial.hasPassedModeration) {
			console.log(testimonial.hasPassedModeration);
			return true;
		}
		console.log('other');
		return false;
	});
	// in here i want to use a reduce method to reorder the testemaoil
	const reorderedTestimonials = fillterdTestimonials.reduce(
		(acc, testimonial) => {
			if (testimonial.createdByUserEmail === user?.email) {
				acc.unshift(testimonial);
			} else {
				acc.push(testimonial);
			}
			return acc;
		},
		[] as Testimonial[]
	);

	return (
		<Testimonials
			testimonials={reorderedTestimonials}
			userIsLoggedIn={user ? true : false}
		/>
	);
}
