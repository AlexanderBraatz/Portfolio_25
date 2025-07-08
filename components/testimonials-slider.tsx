'use client';

import Image from 'next/image';
import { imageLoader } from '@/lib/imageLoader';

import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';

import { Testimonial } from '@/lib/types/testimonial';

interface TestimonialSliderProps {
	testimonials: Testimonial[];
}

export default function TestimonialSlider({
	testimonials
}: TestimonialSliderProps) {
	return (
		<>
			<section className="max-w-[18rem] xsss:max-w-[19rem] xss:max-w-[20rem]  xs:max-w-[26rem] sm:max-w-[37rem] mdd:max-w-full sm:w-full py-4">
				<div className="mx-auto lg:max-w-6xl px-3">
					<Carousel
						opts={{
							loop: true,
							align: 'start'
						}}
						plugins={[
							Autoplay({
								delay: 30000
							})
						]}
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className="basis-full max-w-full"
								>
									<div className="flex flex-col px-4 py-5 sm:p-6">
										<q className="flex-1">{testimonial.quote}</q>
										<div className="flex flex-col gap-4 sm:flex-row">
											<div className="mt-6 flex gap-3 ">
												<div className="block rounded-full h-10 w-10 min-w-min">
													{testimonial.imgSrc != null ? (
														<Image
															loader={imageLoader}
															className="h-10 w-10 min-w-min rounded-full   border-[0.05rem] border-black/50 "
															height={40}
															width={40}
															alt={testimonial.name as string}
															src={testimonial.imgSrc}
															loading="lazy"
														/>
													) : (
														<Image
															loader={imageLoader}
															className="h-10 w-10 min-w-min rounded-full   border-[0.05rem] border-black/50"
															height={40}
															width={40}
															alt="placeholder image"
															src="https://pyoalxsojnjucwmeddcz.supabase.co/storage/v1/object/public/avatar-pics/e67e519a-69cd-42d3-a1db-8137128a8c29.jpeg" // repcalce with plcholderimage
															loading="lazy"
														/>
													)}
												</div>
												<div className="max-w-[80%]">
													<p className="text-sm font-semibold text-gray-900">
														{testimonial.name}
													</p>
													<p className="text-sm text-gray-500 ">
														{testimonial.role}
													</p>
												</div>
											</div>
											<div className="flex-grow sm:mt-6">
												{!testimonial.hasPassedModeration ? (
													<div className="w-fit sm:float-right  rounded-md p-1 px-2 border bg-gray-200 border-black/5  ">
														<p className="text-sm text-gray-900// text-gray-900 w-48 ">
															Still pending approval, only you can see this
															right now.
														</p>
													</div>
												) : (
													<div></div>
												)}
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex  absolute left-[-30px] md:left-[-70px] top-1/2 -translate-y-1/2 fill-black" />
						{/* <CarouselPrevious className="sm:flex hidden absolute left-[-70px] top-1/2 -translate-y-1/2 fill-black" /> */}
						<CarouselNext className="flex absolute right-[-30px] md:right-[-70px] top-1/2 -translate-y-1/2 fill-black" />
						{/* <CarouselNext className="sm:flex hidden absolute right-[-70px] top-1/2 -translate-y-1/2 fill-black" /> */}
					</Carousel>
				</div>
			</section>
		</>
	);
}
