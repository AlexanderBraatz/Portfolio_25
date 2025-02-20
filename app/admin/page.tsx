'use client';

import React from 'react';
import { revalidatePage } from '@/actions/revalidatePage';

// this button can be used to manually update the next.js cash avoiding unnecessary revalidation
// it should be replaced by a display of new un moderated testimonials, a accept and delete testimonials button, which also revalidate the cash
//it should also be safeguarded by needing user log in
export default function Authorize() {
	return (
		<form
			action={async () => {
				await revalidatePage();
				console.log('revlaidated');
			}}
		>
			<button className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
				Revalidate Home Page
			</button>
		</form>
	);
}
