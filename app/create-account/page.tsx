'use client';

import Link from 'next/link';
import { useTransition } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'; // ! /navigation not /router!
import { createAccountAction } from '@/actions/users';
import { Loader2 } from 'lucide-react';
import SubmitBtn from '@/components/submit-btn';
import CreateAccountButton from '@/components/creat-account-btn';

function CreateAccount() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleClickCreateAccountButton = (formData: FormData) => {
		startTransition(async () => {
			const { errorMessage } = await createAccountAction(formData);
			if (errorMessage) {
				toast.error(errorMessage);
			} else {
				router.push('/testimonials/pending');
				toast.success('A verification link has been sent to your email.');
			}
		});
	};

	return (
		<div className="bg-gray-100 border border-black/5 w-96 rounded-lg p-8">
			<h1 className="text-2xl text-center mb-2">Create Account </h1>
			<p className="text-center text-sm mt-2 mb-6 px-4">
				Please create an account or{' '}
				<Link
					href="/login"
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
					href="/login"
					className="underline"
				>
					Login
				</Link>
			</p>
		</div>
	);
}

export default CreateAccount;
