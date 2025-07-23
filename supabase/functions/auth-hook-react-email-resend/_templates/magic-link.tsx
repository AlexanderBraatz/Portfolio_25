import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Text
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface MagicLinkEmailProps {
	supabase_url: string;
	site_url: string;
	email_action_type: string;
	redirect_to: string;
	token_hash: string;
	token: string;
}

export const MagicLinkEmail = ({
	token,
	supabase_url,
	site_url,
	email_action_type,
	redirect_to,
	token_hash
}: MagicLinkEmailProps) => (
	<Html>
		<Head />
		<Preview>Click here to sign in with this magic link</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Sign in to leave your Review!</Heading>
				<Link
					// the origional form github
					// href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
					//
					// href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`} the origional
					// href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=email&redirect_to=${redirect_to}`}
					// trying to route it to my own route handler

					// href={`https://alexanderbraatz.com/auth/confirm?token_hash=${token_hash}&type=email&next=&next={${redirect_to}`} double  &next
					// href={`https://alexanderbraatz.com/auth/confirm?token_hash=${token_hash}&type=email&next={${redirect_to}`}
					// also had a   double  &next !!! href={`${supabase_url}/auth/v1/confirm?token_hash=${token_hash}&type=email&next=&next={${redirect_to}`} this was me copying the link that supaabse uses on the implicit flow magic link email template

					// implicit folw got to complicated with updating the sesion form the tokes in the url , so im teyng PKCE
					// i was using this for implicit 					href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}

					// gpt sugestion for implicit flow , where the link goes to supabase whre:
					//  1. Reads the token and type from the query string
					//	2.	Validates the token, issues a session (sets the access/refresh tokens in the browser)
					//	3.	Redirects the user back to your client via the redirect_to URL you provided
					// href={
					// 	`${supabase_url}/auth/v1/verify` +
					// 	`?token=${encodeURIComponent(token)}` +
					// 	`&type=${encodeURIComponent(email_action_type)}` +
					// 	`&redirect_to=${encodeURIComponent(redirect_to)}`
					// }

					//
					// PCKE flow
					// href={
					// 	`https://alexanderbraatz.com/auth/confirm?` +
					// 	`token_hash=${encodeURIComponent(token_hash)}` +
					// 	`&type=${encodeURIComponent(email_action_type)}` +
					// 	`&redirect_to=${encodeURIComponent(redirect_to)}`
					// }
					// href={`https://alexanderbraatz.com/auth/confirm?token_hash=${token_hash}&type=email&next={${redirect_to}`}
					//
					// aperantly the {} are getting in the way
					href={
						// `https://alexanderbraatz.com/api/auth/confirm?` +
						// `http://localhost:3000/api/auth/confirm?` +
						`${site_url}/api/auth/confirm?` +
						`token_hash=${encodeURIComponent(token_hash)}` +
						`&type=${encodeURIComponent(email_action_type)}` +
						`&redirect_to=${encodeURIComponent(redirect_to)}`
					}
					style={{
						...link,
						display: 'block',
						marginBottom: '16px'
					}}
				>
					Click here to sign in with this magic link
				</Link>
				{/* <Text style={{ ...text, marginBottom: '14px' }}>
					Or, copy and paste this temporary login code:
				</Text>
				<code style={code}>{token}</code> */}
				<Text
					style={{
						...text,
						color: '#ababab',
						marginTop: '14px',
						marginBottom: '16px'
					}}
				>
					If you didn&apos;t try to login, you can safely ignore this email.
				</Text>
				<Text style={footer}>
					<Link
						href={`${site_url}`}
						target="_blank"
						style={{ ...link, color: '#898989' }}
					>
						ALEXANDER BRAATZ
					</Link>
					, your friendly neighbourhood web developer.
				</Text>
			</Container>
		</Body>
	</Html>
);

export default MagicLinkEmail;

const main = {
	backgroundColor: '#ffffff'
};

const container = {
	paddingLeft: '12px',
	paddingRight: '12px',
	margin: '0 auto'
};

const h1 = {
	color: '#333',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '24px',
	fontWeight: 'bold',
	margin: '40px 0',
	padding: '0'
};

const link = {
	color: '#2754C5',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '14px',
	textDecoration: 'underline'
};

const text = {
	color: '#333',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '14px',
	margin: '24px 0'
};

const footer = {
	color: '#898989',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '12px',
	lineHeight: '22px',
	marginTop: '12px',
	marginBottom: '24px'
};

const code = {
	display: 'inline-block',
	padding: '16px 4.5%',
	width: '90.5%',
	backgroundColor: '#f4f4f4',
	borderRadius: '5px',
	border: '1px solid #eee',
	color: '#333'
};
