import { createBrowserClient } from '@supabase/ssr';

export function createSupabaseClient() {
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
}
// this function uses .getSession() which reads the user information form the token in local storage
// this is fine as i amcurrently ony using it to display the  user email after a magic login
// but if i was to use it to identefy the user i would have to use .getUser
export async function getUserEmailFormLocalStorage() {
	const supabase = createSupabaseClient();
	const { data, error } = await supabase.auth.getSession();
	// console.log(data)
	if (data?.session?.user?.email) {
		return { userEmail: data?.session?.user?.email, error };
	}
	return { userEmail: null, error };
}
