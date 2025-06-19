'use client';

import { signOutAction } from '@/actions/users';
import { useActiveSectionContext } from '@/context/active-section-context';
import { homePageLinks } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import toast from 'react-hot-toast';
import { FaUserTimes } from 'react-icons/fa';

const FaUserTimesIcon = FaUserTimes as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

export default function SignOutButton() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const { setHeaderSections } = useActiveSectionContext();
	const handleClickSignOutButton = () => {
		startTransition(async () => {
			const { errorMessage } = await signOutAction();
			if (errorMessage) {
				toast.error(errorMessage);
			} else {
				setHeaderSections(homePageLinks);
				router.push('/');
				toast.success('Successfully signed out.');
			}
		});
	};

	return (
		<button
			onClick={handleClickSignOutButton}
			className=" transform-gpu group h-[3rem] w-40 bg-gray-900 text-white rounded-full outline-none transition-all px-7 py-3 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-[65%]"
			disabled={isPending}
		>
			{isPending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Sign Out{' '}
					<FaUserTimesIcon className="transform-gpu opacity-70   transition-all" />
				</>
			)}
		</button>
	);
}
