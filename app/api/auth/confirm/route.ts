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

	if (token_hash && type) {
		try {
			if (!siteURL) {
			throw new Error('Missing SITE_URL env var');
		  }
			const supabaseServerClient = await createSupabaseClient();
			const { data ,error } = await supabaseServerClient.auth.verifyOtp({
				type,
				token_hash
			});
			 userEmail = data.session?.user.email || "missing email error"
			if (error) throw error;
		} catch(err){
			const msg = (err as Error).message || 'an unknown error has occurred'; // type assertion is safe as nothing but an Error will bet thrown here and AuthError extends Error
			console.log(msg);
			const errorURL = new URL('/account/error', siteURL )
			errorURL.searchParams.set("getErrorMessage",msg)
			return NextResponse.redirect(errorURL);
		}
		const successURL = new URL(redirect_to)
			successURL.searchParams.set("userEmail",userEmail)
		return NextResponse.redirect(redirect_to);

	} else {
		const errorURL = new URL('/account/error', siteURL )
			errorURL.searchParams.set("getErrorMessage","no Token_hash or type")
		return NextResponse.redirect(new URL('/account/error', siteURL ));
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
