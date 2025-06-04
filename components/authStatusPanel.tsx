import React from 'react';
import { getUser } from '@/auth/server';
import SignOutButton from './SignOutButton';
import Link from 'next/link';

export default async function AuthStatusPanel() {
	const user = await getUser();
	return (
		<>
			{user ? (
				<div className="flex flex-col items-center gap-4">
					<p>User is logged in as {user.email}</p>

					<SignOutButton />
				</div>
			) : (
				<div className="flex flex-col items-center gap-4">
					<p>Not logged in</p>

					<Link
						href={'/login'}
						className="bg-emerald-700 p-2 w-40 text-white rounded-lg text-center"
					>
						Login
					</Link>
				</div>
			)}
		</>
	);
}
