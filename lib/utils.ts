export const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== 'string' || value.length > maxLength) {
		return false;
	} else {
		return true;
	}
};

export const getErrorMessage = (error: unknown): string => {
	let message: string;
	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === 'object' && 'message' in error) {
		message = String(error.message);
	} else if (typeof error === 'string') {
		message = error;
	} else message = 'Something went wrong ';
	return message;
};
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
