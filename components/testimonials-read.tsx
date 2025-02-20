import React from 'react';
import SectionHeading from './section-heading';
import { supabase } from '@/lib/supabaseClient';

export default async function Testimonials() {
	let { data: testimonials, error } = await supabase
		.from('Testimonials')
		.select('user_name,user_testimonial,user_location');

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
			<SectionHeading>Testimonials</SectionHeading>
			<div>
				{testimonials.map((testimonial, i) => (
					<React.Fragment key={i}>
						<p>{testimonial.user_name}</p>
						<p>{testimonial.user_testimonial}</p>
						<p>{testimonial.user_location}</p>
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
