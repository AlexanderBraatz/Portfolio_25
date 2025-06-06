'use client';

import React from 'react';

import { addNewTestimonial } from '@/actions/addNewTestimonial';
import toast from 'react-hot-toast';

export default function InputTestimonials() {
	return (
		<form
			action={async formData => {
				const { data, error } = await addNewTestimonial(formData);
				if (error) {
					toast.error(error);
					console.log('error');
					return;
				}
				if (data) {
					toast.success('Testimonial submitted successfully!!');
					return;
				}
			}}
		>
			<input
				type="text"
				name="user_name"
				placeholder="user_name"
				className="h-14 px-4 bg-white borderBlack   rounded-lg"
			/>
			<input
				type="text"
				name="user_testimonial"
				placeholder="user_testimonial"
				className="h-14 px-4 bg-white borderBlack   rounded-lg"
			/>
			<input
				type="text"
				name="user_location"
				placeholder="user_location"
				className="h-14 px-4 bg-white borderBlack   rounded-lg"
			/>
			<button type="submit">Submit NewTestimonial</button>
		</form>
	);
}
