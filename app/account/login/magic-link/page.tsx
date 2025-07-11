'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import MagicLinkButton from '@/components/magic-link-btn';

export default function MagicLinkLogin() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setIsPending(true);
		// TODO: integrate with your magic-link API
		console.log('Requesting magic link for', email);
		// simulate API call delay
		setTimeout(() => {
			setSubmitted(true);
			setIsPending(false);
		}, 1000);
	};

	return (
		<div className="bg-gray-100 border border-black/5 w-full max-w-sm rounded-lg p-8">
			<h1 className="text-2xl text-center mb-2 font-semibold">Welcome Back</h1>
			<p className="text-center text-sm mt-2 mb-6 px-4">
				First time here?{' '}
				<Link href="/account/create-account/magic-link">
					<span className="underline">Sign up.</span>
				</Link>
			</p>

			{!submitted ? (
				<form
					onSubmit={handleSubmit}
					className="flex flex-col bg-gray-100 gap-4"
				>
					<input
						type="email"
						name="email"
						className="h-14 px-4 bg-white borderBlack rounded-lg"
						placeholder="your-email@example.com"
						value={email}
						onChange={e => setEmail(e.target.value)}
						disabled={isPending}
						required
					/>

					<div className="mx-auto">
						<MagicLinkButton />
					</div>

					<p className="text-center text-sm mt-4">
						<Link href="/account/create-account/password">
							<span className="underline">Sign in using password</span>
						</Link>
					</p>
				</form>
			) : (
				<div className="text-center">
					<h2 className="text-xl font-semibold mb-2">Check your inbox</h2>
					<p className="text-sm text-gray-600">
						We’ve sent a magic link to{' '}
						<span className="font-medium">{email}</span>. Click it to log in.
					</p>
				</div>
			)}
		</div>
	);
}
