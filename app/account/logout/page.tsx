import UserLogoutText from './user-logout-text';
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
