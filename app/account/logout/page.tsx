import { loginAction } from '@/actions/users';
import LoginButton from '@/components/login-btn';
import { useActiveSectionContext } from '@/context/active-section-context';
import { linksTestimonials } from '@/lib/data';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import toast from 'react-hot-toast';
import UserLogoutText from './user-logout-text';
import Wrapper from './wrapper';
import SignOutButton from '@/components/SignOutButton';

function LogoutPage() {
	return (
		<div className="bg-gray-100 border border-black/5 w-96 rounded-lg p-8">
			<h1 className="text-2xl text-center mb-2">Account</h1>
			<UserLogoutText />
			<p className="text-center text-sm mt-2 mb-3">
				I’ve kept my portfolio streamlined for now. If you have any questions
				regarding your account or any ideas, feel free to reach out!
			</p>
			<div className="mx-auto max-w-fit">
				<SignOutButton />
			</div>
		</div>
	);
}

export default LogoutPage;
