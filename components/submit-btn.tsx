import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const FaPaperPlaneIcon = FaPaperPlane as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

export default function SubmitBtn({
	isPendingImageUpload = false,
	formIsValid = true
}: {
	isPendingImageUpload?: boolean;
	formIsValid?: boolean;
}) {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all px-7 py-3 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition=all disabled:scale-100 disabled:bg-opacity-[65%] my-3"
			disabled={pending || isPendingImageUpload || !formIsValid}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Submit
					<FaPaperPlaneIcon className="opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
				</>
			)}
		</button>
	);
}
