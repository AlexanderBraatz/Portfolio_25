import React from 'react';
import SectionHeading from './section-heading';
import { supabase } from '@/lib/supabaseClient';

import TestimonialSlider from '@/components/testimonials-slider';
import TestimonialSliderCard from '@/components/testimonials-slider-card';

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

export default async function Testimonials() {
	let { data: testimonials, error } = await supabase
		.from('Testimonials')
		.select('name,quote,role,imgSrc');

	//remove these early return statments , they are only hee to make typescript happy, probably form gpt origionally
	if (error) {
		console.error('Error fetching testimonials:', error.message);
		return <p>Error loading testimonials.</p>;
	}
	if (testimonials === null) {
		console.error('No testimonials available.');
		return <p>No testimonials available.</p>;
	}

	return (
		<section>
			<SectionHeading>Kind words from my cowerkers and clients</SectionHeading>
			{/* <div>
				{testimonials.map((testimonial, i) => (
					<React.Fragment key={i}>
						<p>{testimonial.user_name}</p>
						<p>{testimonial.user_testimonial}</p>
						<p>{testimonial.user_location}</p>
					</React.Fragment>
				))}
			</div> */}
			<div className="container">
				<TestimonialSlider testimonials={testimonials} />
			</div>
			{/* <div className="container">
				<h1>shadcn cards</h1>
				<TestimonialSliderCard testimonials={testimonialz} />
			</div> */}
		</section>
	);
}
