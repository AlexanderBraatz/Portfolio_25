import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseClient() {
	const cookieStore = await cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options)
						);
					} catch {}
				}
			}
		}
	);
}

// related helper functions

// for getting the user all across my app
export async function getUser() {
	const supabaseClient = createSupabaseClient();
	const user = (await (await supabaseClient).auth.getUser()).data.user;
	return user;
}

// to be used to protect paths from being accessed by unauthorized Users
export async function protectRoute() {
	const user = getUser();
	if (!user) {
		throw new Error('Unauthorized!');
	}
}
