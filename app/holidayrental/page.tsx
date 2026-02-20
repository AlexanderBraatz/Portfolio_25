'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import HeadingSection from './heading-section';

const sectionMotion = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 }
};

function BlogImage({
	src,
	alt,
	className
}: {
	src: string;
	alt: string;
	className?: string;
}) {
	return (
		<figure className="w-full">
			<Image
				src={src}
				alt={alt}
				width={800}
				height={500}
				className={`rounded-lg border border-black/5 w-full mb-20 mt-10 object-cover ${className}`}
			/>
		</figure>
	);
}

export default function HolidayRentalPage() {
	return (
		<article className="max-w-[49rem] mb-28">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				{/* <SectionHeading>
					Replacing Airbnb with a custom booking site increased my client’s
					revenue by 16%.
				</SectionHeading>
				<p className="text-gray-500 text-center text-sm mt-2">
					(4 minute read)
				</p> */}
				<HeadingSection />
				<nav
					className="mb-20 mt-20 text-left bg-gray-100 p-4 px-6 rounded-lg border border-black/5 "
					aria-label="Article outline"
				>
					<h2
						id="introduction"
						className="text-2xl font-medium mb-4 text-left scroll-mt-6"
					>
						Outline
					</h2>
					<ol className="list-decimal list-inside space-y-1 text-gray-700">
						<li>
							<a
								href="#introduction"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								Introduction
							</a>
						</li>
						<li>
							<a
								href="#the-business-problem"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								The business problem
							</a>
						</li>
						<li>
							<a
								href="#the-solution"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								The solution
							</a>
						</li>
						<li>
							<a
								href="#the-hardest-technical-challenge"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								The hardest technical challenge
							</a>
						</li>
						<li>
							<a
								href="#architecture"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								Architecture
							</a>
						</li>
						<li>
							<a
								href="#impact"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								Impact
							</a>
						</li>
						<li>
							<a
								href="#what-i-learned"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								What I learned
							</a>
						</li>
						<li>
							<a
								href="#what-id-do-differently"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								What I'd do differently
							</a>
						</li>
					</ol>
				</nav>
			</motion.div>

			{/* <BlogImage
				src="/picture-of-me-and-the-client.jpeg"
				alt="Picture of me and the client"
			/> */}

			{/* 1. Introduction */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.2 }}
			>
				<h2
					id="introduction"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
					// text-3xl font-medium  text-center
				>
					Introduction
				</h2>
				<div className="text-left space-y-4 text-gray-700 leading-relaxed mb-20">
					<p>My client approached me with a tricky situation.</p>
					<p>
						One day, while rifling through their mail, they found an
						official-looking letter from the local council. Inside was a €2000
						(£1780) fine.
					</p>
					<p>
						The reason? The council had introduced legislation to cap short-term
						letting to 8 weeks per year, as part of a crackdown on high-volume
						holiday rentals (Airbnbs). That initially left my client feeling
						confused then angry, because they had only had paying guests stay
						for around 6 weeks that year.
					</p>
					<p>
						The property was meant to be used primarily by them, plus friends
						and family. Renting to paying guests was just a way to fill gaps and
						help cover the mortgage.
					</p>
					<p>So why were they being fined?</p>
				</div>
			</motion.section>

			{/* 2. The business problem */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.3 }}
			>
				<h2
					id="the-business-problem"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					The business problem
				</h2>
				<div className="text-left space-y-4 text-gray-700 leading-relaxed mb-20">
					<p>The issue was how the council decided to measure “letting”.</p>
					<p>
						They treat any dates marked as “unavailable” on Airbnb as booked
						days, assuming they were unavailable because they had already been
						booked. No distinction was made between genuine bookings and days
						the host blocked off for personal use.
					</p>

					{/* <BlogImage
						src="/airbnb-check-availability-button.png"
						alt="Airbnb check availability button"
					/> */}
					<BlogImage
						src="/airbnb-availability-calendar-2.png"
						alt="Airbnb availability calendar"
					/>

					<p>
						For the council this made enforcement easy. They could look at
						availability online and issue fines. But this placed the burden of
						proof on the landlord costing them time to defend the lawful use of
						their own property.
					</p>
					<p>
						In this regulatory environment, Airbnb was no longer the right tool
						for two main reasons:
					</p>
					<p className="ml-10">
						<strong>Financial:</strong> Airbnb’s fees are around 16% of revenue
						this reduces earnings considerably. When you only have a limited
						number of weeks you’re allowed to rent, that cut becomes a painfully
						large share of profits once fixed costs are deducted. In practice,
						it’s like giving up 2 weeks of booking’s worth of earnings form the
						8 week allowance.
					</p>
					<p className="ml-10">
						<strong>Legal compliance:</strong> Airbnb doesn’t allow hosts to
						hide availability. So even if the host is operating legally, they’re
						pushed into a cycle of administrative overhead due to the legal
						disputes required to present evidence just to avoid or challenge
						unjustified fines.
					</p>
					<p>
						Using a booking management Saas like Lodgify was not an option as
						all-in-one platforms like these are also built around the UX of
						showing availability publicly, just like Airbnb. Enterprise tools
						like Bookinglayer can support custom workflows, but their
						subscription costs don’t make sense for a single property.
					</p>
				</div>
			</motion.section>

			{/* 3. The solution */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.4 }}
			>
				<h2
					id="the-solution"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					The solution
				</h2>

				<div className="text-left space-y-4 text-gray-700 leading-relaxed mb-20">
					<p>
						I designed a lean custom web app. In collaboration with the client i
						was able to tailer an inquiry-to-book workflow to their precise
						needs. I reduced the number of manual emails needed per booking to
						zero and gave the property a premium and consistent brand identity.
					</p>

					<p>This private booking platform has 2 main parts. </p>

					<p className="">
						<strong>Marketing website:</strong> a custom designed custom built
						client facing marketing website accompanied by email templates. This
						site provides prospect guests with the information they need and the
						consistency in professional branding to build trust and confidently
						make a booking decision.
					</p>
					<BlogImage
						src="/hero.png"
						alt="Hero section of the booking site"
					/>

					<p className="">
						<strong>Booking management platform: </strong> a private booking
						management platform which consists of a admin dashboard and
						automated sending of emails and taking payments. The design provides
						a lean version of the traditional inquiry-to-book workflow and
						crucially keeps availability hidden while aggregating all booking
						data in one place for regulatory transparency.
					</p>
					<BlogImage
						src="/bookings-table.png"
						alt="Bookings table in admin dashboard"
					/>

					<p>
						Outstanding User Experience design was crucial in delivering an
						intuitive and effective solution. By reducing friction for both the
						host and the guests i was able to make the site an enjoyable
						alternative to Airbnb.
					</p>
					<p>
						<strong>For guests</strong>, the experience is strait forward:
					</p>
					<ul className="list-decimal list-inside space-y-2 ml-4">
						<li>Explore the reviews, amenities, and property details</li>
						<li>
							See a clear price estimate breakdown before they send the request
						</li>
						<li>Select a date range and submit an inquiry</li>
						<li>
							Receive an email when the host confirms, with a link to payment
						</li>
						<li>
							After payment, receive a pre-arrival email (one day before
							check-in)
						</li>
					</ul>

					<BlogImage
						src="/video-of-site-form-rooms-till-form.png"
						alt="Video of site from rooms till form"
						className="!mb-10"
					/>

					<p className="pb-20">
						Consistent branding is used across the website, emails, and the
						payment pages. This makes the experience feel professional and
						builds user trust in the site.
					</p>
					<p>
						<strong>For the host</strong>, I removed all manual admin work:
					</p>
					<ul className="list-decimal list-inside space-y-2 ml-4">
						<li>They get an email when a new inquiry is submitted</li>
						<li>
							They click through to a private dashboard to inspect details
						</li>
						<li>They choose or adjust the price, then accept (or decline)</li>
						<li>
							Once paid, the booking is automatically marked as “paid” and all
							info is stored centrally
						</li>
					</ul>

					{/* <BlogImage
						src="/host-inquiry-notification-email.png"
						alt="Host inquiry notification email"
					/>
					<BlogImage
						src="/hosts-price-breakdown-and-accept-button.png"
						alt="Host's price breakdown and accept button"
					/>
					<BlogImage
						src="/paid-booking-state-highlight.png"
						alt="Paid booking state highlight"
					/> */}
					<BlogImage
						src="/bookings-table.png"
						alt="Bookings table"
						className="!mb-10"
					/>
					<p>Accepting a standard booking takes two clicks!!</p>
					<div>
						<p>No manual copying of customer info.</p>
						<p>No chasing bank transfers.</p>
						<p>No repetitive emails.</p>
					</div>

					<p>
						If booking data is ever requested, the host can export accurate
						records showing which days were actually paid guest stays versus
						private use.
					</p>

					<BlogImage
						src="/image-of-export-button.png"
						alt="Image of export button"
					/>
				</div>
			</motion.section>

			{/* 4. The hardest technical challenge */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.5 }}
			>
				<h2
					id="the-hardest-technical-challenge"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					The hardest technical challenge
				</h2>
				<div className="text-left space-y-4 text-gray-700 leading-relaxed mb-20">
					<p>
						The hardest part was redesigning a traditional booking flow without
						a public calendar.
					</p>
					<p>
						Normally, booking sites use availability as the foundation of the
						UX. Here, showing availability created legal risk. So the system
						needed to feel clear and trustworthy for guests without offering
						them the convince of instant booking and visible availability.
					</p>
					<p>
						That meant getting the language, flow, and price breakdown right.
						Guests need enough confidence to submit an inquiry, while the host
						keeps full control and compliance stays intact.
					</p>
					<p>
						<strong>
							Getting the underlying access control and database design right
							was crucial so private bookings stayed private.
						</strong>
					</p>
				</div>
			</motion.section>

			{/* 5. Architecture */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.6 }}
			>
				<h2
					id="architecture"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					Architecture
				</h2>
				<p className="font-medium">
					<strong>Customer-facing site:</strong>
				</p>

				<div className="grid items-end grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4 space-y-4">
					{[
						{ src: '/logo-next.png', alt: 'Next.js' },
						{ src: '/logo-react.webp', alt: 'React' },
						{ src: '/logo-tailwind.png', alt: 'Tailwind CSS' },
						{ src: '/logo-framer.png', alt: 'Framer Motion' },
						{ src: '/logo-figma.png', alt: 'Figma' }
						// { src: '/logo-supabase.png', alt: 'Supabase' },
						// { src: '/logo-PostgreSQL.png', alt: 'PostgreSQL' },
						// { src: '/logo-stripe.png', alt: 'Stripe' },
						// { src: '/logo-resend.png', alt: 'Resend' }
					].map(logo => (
						<figure
							key={logo.src}
							className=" rounded-lg max-h-[80px]  h-[80px]  "
						>
							<div className="overflow-hidden rounded-xl  max-h-[80px] mx-auto w-fit h-full bg-white border border-black/5">
								<Image
									src={logo.src}
									alt={logo.alt}
									width={200}
									height={200}
									className="object-contain max-h-[80px] w-full rounded-xl overflow-hidden  h-full"
								/>
							</div>
						</figure>
					))}
				</div>

				<div className="text-left space-y-4 text-gray-700 leading-relaxed">
					<ul className="list-disc mt-4 list-inside space-y-2 ml-4">
						<li>Next.js</li>
						<li>React</li>
						<li>Tailwind CSS</li>
						<li>Framer Motion</li>
					</ul>
					<p>
						This Stack let me translate my Figma design into a responsive site
						that works smoothly on desktop, tablet and mobile, with unique
						interactivity at great performance ( 95 mobile light house score).
					</p>
					<p className="font-medium pt-6">
						<strong>Admin + backend workflows:</strong>
					</p>
					<div className="grid items-end grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4 space-y-4">
						{[
							// { src: '/logo-next.png', alt: 'Next.js' },
							// { src: '/logo-typescript.png', alt: 'TypeScript' },
							// { src: '/logo-tailwind.png', alt: 'Tailwind CSS' },
							// { src: '/logo-framer-motion.jpeg', alt: 'Framer Motion' }

							{ src: '/logo-typescript.png', alt: 'TypeScript' },
							{ src: '/logo-supabase.png', alt: 'Supabase' },
							{ src: '/logo-PostgreSQL.png', alt: 'PostgreSQL' },
							{ src: '/logo-stripe.png', alt: 'Stripe' },
							{ src: '/logo-resend.png', alt: 'Resend' }
						].map(logo => (
							<figure
								key={logo.src}
								className=" rounded-lg max-h-[80px]  h-[80px]  "
							>
								<div className="overflow-hidden rounded-xl  max-h-[80px] mx-auto w-fit h-full bg-white border border-black/5">
									<Image
										src={logo.src}
										alt={logo.alt}
										width={200}
										height={200}
										className="object-contain max-h-[80px] w-full rounded-xl overflow-hidden  h-full"
									/>
								</div>
							</figure>
						))}
					</div>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Next.js + TypeScript (type-safe server actions)</li>
						<li>Supabase (Postgres + Auth)</li>
						<li>Stripe for dynamic payments</li>
						<li>Resend for email delivery</li>
						<li>
							Serverless functions + cron jobs for scheduled emails (e.g.
							pre-arrival instructions)
						</li>
					</ul>
					<p>
						<strong>The workflow is event-driven in practice:</strong> for
						example, a successful Stripe payment triggers a webhook that updates
						booking state and sends confirmation emails automatically.
					</p>
				</div>
			</motion.section>

			{/* 6. Impact */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.7 }}
			>
				<h2
					id="impact"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					Impact
				</h2>
				<div className="text-left space-y-4 text-gray-700 leading-relaxed mb-20">
					<p className="font-bold">Financial impact</p>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>16% more revenue per booking</li>
						<li>Equivalent to one extra booking’s earnings per six bookings</li>
					</ul>

					<BlogImage
						src="/coffee-stamp-graphic-3.png"
						alt="Coffee stamp graphic"
					/>

					<p className="font-bold mt-6">Operational impact</p>
					<p>
						Compared to organising a booking manually without Airbnb, we made
						the admin process <strong>36 times faster!</strong> The Host can now
						do in 5 minutes what would have taken 3 hours of email coordination
						and tracking bank transfers and other sensitive user data.
					</p>
					<p className="font-bold mt-4">Strategic impact</p>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Independence from third-party platforms</li>
						<li>
							Reduced regulatory exposure (no public availability calendar)
						</li>
						<li>Full control over branding and customer experience</li>
					</ul>
				</div>
			</motion.section>

			{/* 7. What I learned */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.8 }}
			>
				<h2
					id="what-i-learned"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					What I learned
				</h2>
				<div className="text-left space-y-4 text-gray-700 leading-relaxed mb-20">
					<p>
						The biggest learning was how much better outcomes get when you treat
						this as product work, not “a website”.
					</p>
					<p>
						Weekly feedback loops helped us refine the journey as soon as the UI
						became tangible. The legal constraint forced a different
						architecture, and having full control meant we didn’t need to
						compromise UX or add manual admin work just to fit a SaaS template.
					</p>
					<p>
						I also learned a lot about making event-driven workflows reliable
						using API idempotency and retry logic.
					</p>
					<p>
						And finally, AI-assisted coding while useful I found to be a
						trade-off. I hand-coded the marketing site where brand and
						interaction quality mattered most, and used AI to accelerate the
						speed of admin features rollout and testing, while keeping security
						and authorisation rules firmly under my control by setting them by
						hand as well.
					</p>
					<p>
						Also: I learned how to use position sticky and scroll containers to
						create the stacking cards animation for the rooms section.
					</p>
				</div>
			</motion.section>

			{/* 8. What I'd do differently */}
			<motion.section
				className="mb-12"
				initial={sectionMotion.initial}
				animate={sectionMotion.animate}
				transition={{ delay: 0.9 }}
			>
				<h2
					id="what-id-do-differently"
					className="text-3xl font-medium capitalize mb-8 text-left scroll-mt-6"
				>
					What I’d do differently
				</h2>
				<div className="text-left space-y-4 text-gray-700 leading-relaxed">
					<p>
						If I were starting again, I would likely choose a less custom
						approach for the marketing site. While the bespoke animations and
						interactions add personality and polish, the additional development
						time wasn’t fully justified by the incremental “wow” factor. A
						simpler design system like <strong>Relume</strong> could have
						delivered nearly the same user confidence with significantly less
						effort.
					</p>
				</div>
			</motion.section>
		</article>
	);
}
