import { createSupabaseClient } from '@/auth/server';
import { EmailOtpType } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const token_hash = searchParams.get('token_hash');
	const type = searchParams.get('type') as EmailOtpType;
	const redirect_to = searchParams.get('redirect_to') ?? '/';
	const siteURL = process.env.SITE_URL
	let userEmail : string | undefined = ""

	//TODO: handle config error of missing site_url speratly to email link invlaid logic
	// if (!siteURL) {
	// 	throw new Error('Missing SITE_URL env var');
	//   }
	//https://alexanderbraatz.com/api/auth/confirm?token_hash=pkce_88d5ea86735bc7c7ed5061148d5cdf7b5c09946aad9ba0e43116d5a8&type=magiclink&redirect_to=https%3A%2F%2Falexanderbraatz.com%2Faccount%2Fconfirmed	
	if (token_hash && type) {
		try {
			const supabaseServerClient = await createSupabaseClient();
			const { data ,error } = await supabaseServerClient.auth.verifyOtp({
				type,
				token_hash
			});

			userEmail = data.session?.user.email || "missing email error"
			
			if (error) {
				// if there was a verification error then the sign in failed and if the error.message  is Email+link+is+invalid+or+has+expired i need to prompt the user to follow the correct link
				throw error;
			} 
		} catch (err) {
			const msg = (err as Error).message || 'an unknown error has occurred'; // type assertion is safe as nothing but an Error will bet thrown here and AuthError extends Error
			console.log(msg);

			if (msg == "Email link is invalid or has expired") {
				const invalidOrExpiredLinkURL = new URL('/account/invalid-or-expired-magic-link', siteURL)
				return NextResponse.redirect(invalidOrExpiredLinkURL);
			}

			const errorURL = new URL('/account/error', siteURL )
			errorURL.searchParams.set("errorMessage",msg)
			return NextResponse.redirect(errorURL);
		}

		const successURL = new URL(redirect_to)
		successURL.searchParams.set("userEmail",userEmail)
		return NextResponse.redirect(redirect_to);
	} else {
		const errorURL = new URL('/account/error', siteURL )
		errorURL.searchParams.set("errorMessage","no Token_hash or type")
		return NextResponse.redirect(new URL(errorURL ));
	}
}


// old comments form before i added the error handeling to figureo out why Ric wasnt able to log in
// I think

// i am getting the token and rerrouting path
// running the veryfyOtp method
// and routing us to the path

// verifyOtp must be making a note of the fact that the link has been clicked , so the email must be valid and the current user has access t it
// the deprecated example handles cockies like so

//import { cookies } from "next/headers";
//     const supabase = createRouteHandlerClient({ cookies: () => cookies() });

// but i am hoping that the way i have set up createSupabaseClient does that already
// the cockie must be sotrignt the clint side identification of the user that has just loged in
