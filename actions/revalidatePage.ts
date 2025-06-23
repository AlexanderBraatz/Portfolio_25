'use server';

import { revalidatePath } from 'next/cache';

export const revalidatePage = async () => {
	revalidatePath('/');
	console.log('-----Path revalidated on the server.');
};
