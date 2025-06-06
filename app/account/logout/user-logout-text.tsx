import React from 'react';
import { getUser } from '@/auth/server';

export default async function UserLogoutText() {
	const user = await getUser();
	return (
		<>
			{user ? (
				<p className="text-center text-sm mt-2 mb-6 px-4">
					{' '}
					Hello there, you are currently logged in as {user.email}
				</p>
			) : (
				<p className="text-center text-sm mt-2 mb-6 px-4">Not logged in</p>
			)}
		</>
	);
}
