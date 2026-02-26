import React from 'react';

export default function Footer() {
	return (
		<footer className="h-20 px-4 text-gray-400 text-center">
			<small className="mb-2 block text-xs">
				&copy; Alexander Braatz 2026 All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website : </span> Built with
				React & Next.js (Server Actions & App Router), Typescript, Supabase
				(User & Database Management), Framer Motion, React Email & Resend,
				Vercel hosting.
			</p>
		</footer>
	);
}
