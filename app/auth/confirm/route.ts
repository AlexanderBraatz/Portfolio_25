import { createSupabaseClient } from '@/auth/server';
import { EmailOtpType } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const token_hash = searchParams.get('token_hash');
	const type = searchParams.get('type') as EmailOtpType;
	const redirect_to = searchParams.get('redirect_to') ?? '/';


	if (token_hash && type) {
		const supabaseServerClient = await createSupabaseClient();
		const { error } = await supabaseServerClient.auth.verifyOtp({
			type,
			token_hash
		});
		if (error) {
			console.log(error);
		}
		//handle error , probably rout conditionaly
	}
	// return NextResponse.redirect(new URL(next, req.url));
	return NextResponse.redirect(redirect_to);

}

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
