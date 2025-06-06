import { createServerClient } from '@supabase/ssr';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import { NextResponse, type NextRequest } from 'next/server';
import { useActiveSectionContext } from './context/active-section-context';

export async function middleware(request: NextRequest) {
	let response = NextResponse.next({
		request: { headers: request.headers }
	});
	const path = new URL(request.url).pathname;
	const protectedRoutes = [
		'/protected',
		'/testimonials/new',
		'/account/logout'
	];
	const authRoutes = ['/account/login', '/account/create-account'];

	const isProtectedRoute = protectedRoutes.includes(path);
	const isAuthRoute = authRoutes.includes(path);
	if (isProtectedRoute || isAuthRoute) {
		const user = await getUser(response, request);

		// comented fo now to see testimonial form while i am signed out
		if (isProtectedRoute && !user) {
			// revalidatePath('/blog/post-1')

			return NextResponse.redirect(
				new URL('/account/create-account', request.url)
			);
		}

		if (isAuthRoute && user) {
			return NextResponse.redirect(new URL('/testimonials/new', request.url));
		}
	}
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
	]
};

async function getUser(supabaseResponse: NextResponse, request: NextRequest) {
	const supabaseClient = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) =>
						request.cookies.set(name, value)
					);
					supabaseResponse = NextResponse.next({
						request
					});
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options)
					);
				}
			}
		}
	);

	const user = (await supabaseClient.auth.getUser()).data.user;

	return user;
}
