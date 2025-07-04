import SignOutButton from '@/components/SignOutButton';
import Link from 'next/link';

async function HomePage() {
	const user = null;

	return (
		<>
			{user ? (
				<div className="flex flex-col items-center gap-4">
					<p>User is logged in as</p>

					<SignOutButton />
				</div>
			) : (
				<div className="flex flex-col items-center gap-4">
					<p>Not logged in</p>

					<Link
						href={'/account/login'}
						className="bg-emerald-700 p-2 w-40 text-white rounded-lg text-center"
					>
						Login
					</Link>
				</div>
			)}
		</>
	);
}

export default HomePage;
