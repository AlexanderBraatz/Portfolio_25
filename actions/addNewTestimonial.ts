'use server';
import { getUser } from '@/auth/server';
import { createSupabaseClient } from '@/auth/server';
import { revalidatePath } from 'next/cache';

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
	formData: FormData,
	imgSrc: string | null
): Promise<addNewTestimonialResponse> => {
	//i am using type cooersion here becasue i know these inputs are strings not files formData gives a FormDataEntryValue type back which could be a file too
	const name = formData.get('name')?.toString() || null;
	const quote = formData.get('quote')?.toString() || null;
	const role = formData.get('role')?.toString() || null;
	const hasPassedModeration = false;
	const user = await getUser();
	const supabase = await createSupabaseClient();
	const { data, error } = await supabase
		.from('Testimonials')
		.insert([
			{
				name,
				quote,
				role,
				imgSrc,
				hasPassedModeration,
				createdByUserEmail:  null, // this can be removed but it has to be removed from the data base as well
				createdByUserID: user?.id || null
			}
		])
		.select();
	revalidatePath('/');
	if (error) {
		console.log('error->', error);
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
