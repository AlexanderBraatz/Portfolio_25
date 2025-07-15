'use client';

import { Button } from '@/components/ui/button';
import {
	FileUpload,
	FileUploadDropzone,
	FileUploadItem,
	FileUploadItemDelete,
	FileUploadItemMetadata,
	FileUploadItemPreview,
	FileUploadItemProgress,
	FileUploadList,
	type FileUploadProps,
	FileUploadTrigger
} from '@/components/ui/file-upload';
import { uploadImage } from '@/supabase/storage/client';
import { Upload, X } from 'lucide-react';
import * as React from 'react';
// import { toast } from 'sonner';
import toast from 'react-hot-toast';

export function FileUploadDirectUpload({
	imgSrcRef,
	isPending,
	startTransition
}: {
	imgSrcRef: React.MutableRefObject<string | null>;
	isPending: boolean;
	startTransition: Function;
}) {
	const [files, setFiles] = React.useState<File[]>([]);

	const onUpload: NonNullable<FileUploadProps['onUpload']> = React.useCallback(
		async (files, { onProgress, onSuccess, onError }) => {
			startTransition(async () => {
				try {
					// Process each file individually
					let urls = [] as string[];
					const uploadPromises = files.map(async file => {
						try {
							const { imageUrl, error } = await uploadImage({
								file,
								bucket: 'avatar-pics'
							});
							urls.push(imageUrl);
							// Simulate file upload with progress
							const totalChunks = 10;
							let uploadedChunks = 0;

							// Simulate chunk upload with delays
							for (let i = 0; i < totalChunks; i++) {
								// Simulate network delay (100-300ms per chunk)
								await new Promise(resolve =>
									setTimeout(resolve, Math.random() * 200 + 100)
								);

								// Update progress for this specific file
								uploadedChunks++;
								const progress = (uploadedChunks / totalChunks) * 100;
								onProgress(file, progress);
							}

							imgSrcRef.current = urls[0];
							// Simulate server processing delay
							await new Promise(resolve => setTimeout(resolve, 500));
							onSuccess(file);
						} catch (error) {
							onError(
								file,
								error instanceof Error ? error : new Error('Upload failed')
							);
						}
					});

					// Wait for all uploads to complete
					await Promise.all(uploadPromises);
				} catch (error) {
					// This handles any error that might occur outside the individual upload processes
					console.error('Unexpected error during upload:', error);
				}
			});
		},
		[]
	);

	const onFileReject = React.useCallback((file: File, message: string) => {
		toast(
			`${message},"${
				file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
			}" has been rejected`
		);
	}, []);

	return (
		<FileUpload
			value={files}
			onValueChange={setFiles}
			onUpload={onUpload}
			onFileReject={onFileReject}
			maxFiles={1}
			className="w-full"
			multiple
		>
			{files.length > 0 ? (
				<FileUploadList>
					{files.map((file, index) => (
						<FileUploadItem
							key={index}
							value={file}
							className="flex-col bg-white"
						>
							<div className="flex w-full items-center gap-2 ">
								<FileUploadItemPreview />
								{/* <FileUploadItemMetadata /> */}
								<div className="flex min-w-0 flex-1 flex-col">
									<span className="font-medium text-sm">
										{isPending ? 'fetching file...' : 'Looks Great!'}
									</span>
								</div>
								<FileUploadItemDelete asChild>
									<Button
										variant="ghost"
										size="icon"
										className="size-7"
									>
										<X />
									</Button>
								</FileUploadItemDelete>
							</div>
							<FileUploadItemProgress />
						</FileUploadItem>
					))}
				</FileUploadList>
			) : (
				<FileUploadDropzone>
					<div className="flex flex-col items-center gap-1 text-center">
						<div className="flex items-center justify-center rounded-full border p-2.5">
							<Upload className="size-6 text-muted-foreground" />
						</div>
						<p className="font-medium text-sm">
							Drag & drop your Avatar Picture here
						</p>
						<p className="text-muted-foreground text-xs">
							Or leave this empty and I’ll use your LinkedIn profile picture.
						</p>
					</div>
					<FileUploadTrigger asChild>
						<Button
							variant="whiteButton"
							size="loginButton"
							className="mt-2 w-fit"
						>
							Browse files
						</Button>
					</FileUploadTrigger>
				</FileUploadDropzone>
			)}
		</FileUpload>
	);
}
