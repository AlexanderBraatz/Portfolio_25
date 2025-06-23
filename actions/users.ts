'use server';

import { createSupabaseClient } from '@/auth/server';
import { getErrorMessageWithDefaultMessage } from '@/lib/utils';

export async function createAccountAction(formData: FormData) {
	try {
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const supabaseServerClient = createSupabaseClient();
		const response = (await supabaseServerClient).auth.signUp({
			email,
			password
		});
		const error = (await response).error;
		if (error) throw error;
		return { errorMessage: null };
	} catch (error) {
		return { errorMessage: getErrorMessageWithDefaultMessage(error) };
	}
}
export async function loginAction(formData: FormData) {
	try {
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const supabaseServerClient = createSupabaseClient();
		const response = (await supabaseServerClient).auth.signInWithPassword({
			email,
			password
		});
		const error = (await response).error;
		if (error) throw error;
		return { errorMessage: null };
	} catch (error) {
		return { errorMessage: getErrorMessageWithDefaultMessage(error) };
	}
}
export async function signOutAction() {
	try {
		const supabaseServerClient = createSupabaseClient();
		const response = (await supabaseServerClient).auth.signOut();
		const error = (await response).error;
		if (error) throw error;
		return { errorMessage: null };
	} catch (error) {
		return { errorMessage: getErrorMessageWithDefaultMessage(error) };
	}
}
