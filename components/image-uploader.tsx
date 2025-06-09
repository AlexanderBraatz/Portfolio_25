'use client';

import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

export default function ImageUploader() {
	const imageInputRef = useRef<HTMLInputElement>(null);
	const [imageUrls, setImageUrls] = useState<string[]>([]);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files);
			const newImageUrls = filesArray.map(file => URL.createObjectURL(file));

			setImageUrls([...imageUrls, ...newImageUrls]);
		}
	};
	return (
		<div className="bg-slate-50 min-h-screen flex justify-center items-center flex-col gap-8">
			<input
				type="file"
				multiple
				ref={imageInputRef}
				onChange={handleImageChange}
				hidden
			/>
			<button
				onClick={() => imageInputRef.current?.click()}
				className="bg-slate-600 py-2 w-40 rounded-lg"
			>
				Select Images
			</button>
			<div className="flex gap-4">
				{imageUrls.map((url, index) => (
					<Image
						key={url}
						src={url}
						width={300}
						height={300}
						alt={`image-${index}`}
					/>
				))}
			</div>
			<button className="bg-slate-600 py-2 w-40 rounded-lg">
				Upload Images
			</button>
		</div>
	);
}
