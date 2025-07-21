import { createServerClient } from '@supabase/ssr';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	let response = NextResponse.next({
		request: { headers: request.headers }
	});
	const path = new URL(request.url).pathname;
	const { pathname, searchParams } = request.nextUrl;

	const protectedRoutes = [
		'/protected',
		'/testimonials/new',
		'/account/logout'
	];
	const authRoutes = ['/account/login', '/account/create-account'];
	const afterEmailURL = 'code'; // this is hacky but solution for MVP
	// http://localhost:3000/?code=e2b80af1-0e93-4ee7-9a26-187ee2f4a644

	const isProtectedRoute = protectedRoutes.includes(path);
	const isAuthRoute = authRoutes.includes(path);
	const isEmailValidationURL = path.includes(afterEmailURL);

	// if (isEmailValidationURL) {
	// 	return NextResponse.redirect(new URL('/account/login', request.url));
	// }
	// if (searchParams.has('code')) {
	// 	// redirect everyone who hits ?code=... to login
	// 	console.log('-quick fix work around');
	// 	console.log('-quick fix work around');
	// 	console.log('-quick fix work around');
	// 	return NextResponse.redirect(
	// 		new URL('/account/login/password', request.url)
	// 	);
	// }
	if (isProtectedRoute || isAuthRoute) {
		const user = await getUser(response, request);
		console.log('isProtectedRoute', isProtectedRoute);
		// console.log('user', user);
		// comented fo now to see testimonial form while i am signed out
		if (isProtectedRoute && !user) {
			// revalidatePath('/blog/post-1')

			return NextResponse.redirect(
				new URL('/account/create-account/magic-link', request.url)
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
