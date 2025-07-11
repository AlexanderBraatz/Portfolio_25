'use client';

import { loginAction } from '@/actions/users';
import LoginButton from '@/components/login-btn';
import { useActiveSectionContext } from '@/context/active-section-context';
import { testimonialLinks } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import toast from 'react-hot-toast';

function LoginPage() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const { setActiveSection, setHeaderSections } = useActiveSectionContext();

	const handleClickLoginButton = (formData: FormData) => {
		startTransition(async () => {
			const { errorMessage } = await loginAction(formData);
			if (errorMessage) {
				toast.error(errorMessage);
			} else {
				router.push('/testimonials/new');
				setActiveSection('Review');
				setHeaderSections(testimonialLinks);
				toast.success('Successfully logged in.');
			}
		});
	};

	return (
		<div className="bg-gray-100 border border-black/5 w-full max-w-sm rounded-lg p-8">
			<h1 className="text-2xl text-center mb-2 font-semibold">Sign In</h1>
			{/* <p className="text-center text-sm mt-2 mb-6 px-4">
				Knock knock. who’s there? You! Log in to update your Review.
			</p> */}
			<p className="text-center text-sm mt-2 mb-6 px-4">
				First time here?{' '}
				<Link href="/account/create-account/password">
					<span className="underline">Sign up.</span>
				</Link>
			</p>

			<form
				className="flex flex-col bg-gray-100 gap-4"
				action={handleClickLoginButton}
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
					<LoginButton />
				</div>
			</form>

			{/* <p className="text-center text-sm mt-4">
				Don't have an account?{' '}
				<Link
					href="/account/create-account/password"
					className="underline"
				>
					Create Account
				</Link>
			</p> */}
			<p className="text-center text-sm mt-4">
				<Link href="/account/login/magic-link">
					<span className="underline">Sign in using email only</span>
				</Link>
			</p>
		</div>
	);
}

export default LoginPage;
