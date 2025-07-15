'use client';
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import MagicLinkButton from '@/components/magic-link-btn';
import { magicSigninAction } from '@/actions/users';
import toast from 'react-hot-toast';
import AlmostTherePopUp from '@/components/almost-there';

export default function MagicLinkLogin() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [isPending, startTransition] = useTransition();

	const handleMagicSubmit = (formData: FormData) => {
		startTransition(async () => {
			const { errorMessage } = await magicSigninAction(formData);
			if (errorMessage) {
				toast.error(errorMessage);
			} else {
				toast.success('A verification link has been sent to your email.');
				setSubmitted(true);
			}
		});
	};

	return (
		<>
			{!submitted ? (
				<>
					<AlmostTherePopUp />
				</>
			) : (
				<div className="bg-gray-100 border border-black/5 w-full max-w-sm rounded-lg p-8">
					<h1 className="text-2xl text-center mb-2 font-semibold">
						Welcome Back
					</h1>
					<p className="text-center text-sm mt-2 mb-6 px-4">
						First time here?{' '}
						<Link href="/account/create-account/magic-link">
							<span className="underline">Sign up.</span>
						</Link>
					</p>

					<form
						action={handleMagicSubmit}
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
				</div>
			)}
		</>
	);
}
