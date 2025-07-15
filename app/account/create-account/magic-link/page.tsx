'use client';
import React, { startTransition, useState, useTransition } from 'react';
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
				console.log(errorMessage);
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
						Verify your email to continue
					</h1>
					<p className="text-center text-sm mt-2 mb-6 px-4">
						Already verified?{' '}
						<Link href="/account/login/magic-link">
							<span className="underline">Sign in.</span>
						</Link>
					</p>

					{!submitted ? (
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
									<span className="underline">Sign up using password</span>
								</Link>
							</p>
						</form>
					) : (
						<div className="text-center">
							<h2 className="text-xl font-semibold mb-2">Check your inbox</h2>
							<p className="text-sm text-gray-600">
								We’ve sent a magic link to{' '}
								<span className="font-medium">{email}</span>. Click it to log
								in.
							</p>
						</div>
					)}
				</div>
			)}
		</>
	);
}
