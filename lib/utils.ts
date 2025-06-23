import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function convertBlobUrlToFile(blobUrl: string) {
	const response = await fetch(blobUrl);
	const blob = await response.blob();
	const fileName = Math.random().toString(36).slice(2, 9);
	const mimeType = blob.type || 'application/octet-stream';
	const file = new File([blob], `${fileName}.${mimeType.split('/')[1]}`, {
		type: mimeType
	});
	return file;
}
export const getErrorMessageWithDefaultMessage = (
	error: unknown,
	defaultMessage: string = 'Something went wrong'
) => {
	console.error(error);
	let errorMessage = defaultMessage;
	if (error instanceof Error && error.message.length < 100) {
		errorMessage = error.message;
	}
	return errorMessage;
};
export const validateString = (
	value: unknown,
	maxLength: number
): value is string => {
	if (!value || typeof value !== 'string' || value.length > maxLength) {
		return false;
	}

	return true;
};

export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === 'object' && 'message' in error) {
		message = String(error.message);
	} else if (typeof error === 'string') {
		message = error;
	} else {
		message = 'Something went wrong';
	}

	return message;
};
