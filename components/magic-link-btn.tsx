import React from 'react';
import { FaUserCheck } from 'react-icons/fa';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const FaUserCheckIcon = FaUserCheck as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

export default function MagicLinkButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className=" transform-gpu group h-[3rem] text-sm xss:text-base xs:w-[18rem] bg-gray-900 text-white rounded-full outline-none transition-all px-7 py-3 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-[65%]"
			disabled={pending}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Send verification link{' '}
					<FaUserCheckIcon className="transform-gpu opacity-70   transition-all" />
				</>
			)}
		</button>
	);
}
