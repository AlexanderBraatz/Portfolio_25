import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const FaUserPlusIcon = FaUserPlus as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

export default function LoginButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			transform-gpu
			className=" transform-gpu group h-[3rem] w-32 bg-gray-900 text-white rounded-full outline-none transition-all px-7 py-3 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-[65%]"
			disabled={pending}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Login{' '}
					<FaUserPlusIcon className="transform-gpu opacity-70   transition-all" />
				</>
			)}
		</button>
	);
}
