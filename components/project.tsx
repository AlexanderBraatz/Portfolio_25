'use client';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FaLink } from 'react-icons/fa6';
const FaLinkIcon = FaLink as React.ComponentType<
	React.HTMLAttributes<HTMLElement>
>;

// the less specific way you might use if you get variable data from a API

// type ProjectProps = {
// 	title: string;
// 	description: string;
// 	tags: string[];
// 	imageUrl: StaticImageData;
// };

// to be as more specific we can use the static data as the type reference

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	link
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1']
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			className=" group mb-3 sm:mb-8 last:mb-0"
			style={{
				scale: scaleProgress,
				opacity: opacityProgress
			}}
			ref={ref}
		>
			<Link
				href={link}
				className=""
				target="_blank"
			>
				<section className="rounded-lg  sm:group-even:pl-8 flex relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem]  hover:bg-gray-200 transition">
					<div className="sm:group-even:ml-[18rem] flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
						<h3 className="text-2xl">
							{title}{' '}
							<div className="flex flex-row gap-x-1 items-center">
								<span className="text-base underline text-blue-500">
									open live site
								</span>
								<FaLinkIcon className="inline text-base underline text-blue-500 " />
							</div>
						</h3>

						<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
						<ul className="sm:mt-auto flex flex-wrap mt-4 gap-2">
							{tags.map((tag, index) => (
								<li
									className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
									key={index}
								>
									{tag}
								</li>
							))}
						</ul>
					</div>

					<Image
						className="hidden sm:block
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-hover:scale-[1.04]
                transition
                group-even:right-[initial] group-even:-left-40 absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
						src={imageUrl}
						alt="Project I worked on"
						quality={95}
					/>
				</section>
			</Link>
		</motion.div>
	);
}
