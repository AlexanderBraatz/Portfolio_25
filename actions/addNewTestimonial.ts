'use server';

import { createSupabaseClient } from '@/auth/server';

type Testimonial = {
	created_at?: string;
	id?: number;
	image_url?: string | null;
	user_location?: string | null;
	user_name?: string | null;
	user_testimonial?: string | null;
};

type addNewTestimonialResponse = {
	data: Testimonial[] | null;
	error: string | null;
};

export const addNewTestimonial = async (
	formData: FormData
): Promise<addNewTestimonialResponse> => {
	//i am using type cooersion here becasue i know these inputs are strings not files formData gives a FormDataEntryValue type back which could be a file too
	const new_user_name = formData.get('user_name')?.toString() || null;
	const new_user_testimonial =
		formData.get('user_testimonial')?.toString() || null;
	const new_user_location = formData.get('user_location')?.toString() || null;
	const supabase = await createSupabaseClient();
	const { data, error } = await supabase
		.from('Testimonials')
		.insert([
			{
				user_name: new_user_name,
				user_testimonial: new_user_testimonial,
				user_location: new_user_location
			}
		])
		.select();

	if (error) {
		console.log('error---->', error);
		return {
			data: null,
			error: error.message ?? 'An unknown error has occurred'
		};
	}
	return {
		data: data,
		error: null
	};
};
