'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import toast from 'react-hot-toast';

import { createAccountAction } from '@/actions/users';

import CreateAccountButton from '@/components/creat-account-btn';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';

function CreateAccount() {
	const [isPending, startTransition] = useTransition();
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const handleClickCreateAccountButton = (formData: FormData) => {
		startTransition(async () => {
			const { errorMessage } = await createAccountAction(formData);
			if (errorMessage) {
				toast.error(errorMessage);
			} else {
				toast.success('A verification link has been sent to your email.');
				setSubmitSuccess(true);
			}
		});
	};

	return (
		<>
			{submitSuccess ? (
				<>
					<motion.div
						className=""
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.125 }}
					>
						<SectionHeading>Almost there!</SectionHeading>
						<div className="flex flex-col justify-center items-center gap-2 sm:gap-0  min-h-5 text-center">
							<p className="text-gray-700 ">
								Follow the verification link we sent to your email.
							</p>
							<p className="text-gray-500 text-sm ">
								Once you have verified your email, you can return to the site
								and login.
							</p>
						</div>
					</motion.div>
				</>
			) : (
				<div className="bg-gray-100 border border-black/5 w-full max-w-sm rounded-lg p-8">
					<h1 className="text-2xl text-center mb-2">Create Account </h1>
					<p className="text-center text-sm mt-2 mb-6 px-4">
						Please create an account or{' '}
						<Link
							href="/account/login"
							className="underline"
						>
							Login
						</Link>{' '}
						to leave your Review.
					</p>

					<form
						className="flex flex-col bg-gray-100 gap-4"
						action={handleClickCreateAccountButton}
					>
						<input
							type="email"
							name="email"
							className="h-14 px-4 bg-white borderBlack rounded-lg"
							placeholder="Email"
							disabled={isPending}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="h-14 px-4 bg-white borderBlack rounded-lg"
							disabled={isPending}
						/>
						<div className="mx-auto">
							<CreateAccountButton />
						</div>
					</form>

					<p className="text-center text-sm mt-4">
						Already have an account?{' '}
						<Link
							href="/account/login"
							className="underline"
						>
							Login
						</Link>
					</p>
				</div>
			)}
		</>
	);
}

export default CreateAccount;
