'use client';

import { convertBlobUrlToFile } from '@/lib/utils';
import { uploadImage } from '@/supabase/storage/client';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState, useTransition } from 'react';

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

	const [isPending, startTransition] = useTransition();
	const handleUploadImagesButton = () => {
		startTransition(async () => {
			let urls = [];
			for (const url of imageUrls) {
				const imageFile = await convertBlobUrlToFile(url);
				const { imageUrl, error } = await uploadImage({
					file: imageFile,
					bucket: 'avatar-pics'
				});

				if (error) {
					console.error('error:', error);
					return;
				}
				//TODO: i will have to connect the url to the testimonial or user in the database
				urls.push(imageUrl);
			}
			console.log('urls:', urls);
			setImageUrls([]);
		});
	};
	return (
		<div className="bg-slate-50 min-h-screen flex justify-center items-center flex-col gap-8">
			<input
				type="file"
				multiple
				ref={imageInputRef}
				onChange={handleImageChange}
				hidden
				disabled={isPending}
			/>
			<button
				onClick={() => imageInputRef.current?.click()}
				className="bg-slate-600 py-2 w-40 rounded-lg"
				disabled={isPending}
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
			<button
				onClick={handleUploadImagesButton}
				className="bg-slate-600 py-2 w-40 rounded-lg"
			>
				{isPending ? 'Uploading...' : 'Upload Images'}
			</button>
		</div>
	);
}
