'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import HeadingSection from './heading-section';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { holidayRentalLinks } from '@/lib/data';

const sectionMotion = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 }
};

function BlogImage({
	src,
	alt,
	caption,
	className
}: {
	src: string;
	alt: string;
	caption?: string;
	className?: string;
}) {
	return (
		<figure className="w-full">
			<Image
				src={src}
				alt={alt}
				width={800}
				height={500}
				className={`rounded-lg border border-black/5 w-full mt-10 object-cover ${
					caption ? 'mb-2' : 'mb-20'
				} ${className}`}
			/>
			{caption && (
				<figcaption className="text-sm text-gray-600 mb-20  italic">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}

export default function HolidayRentalPage() {
	const { setHeaderSections, setActiveSection } = useActiveSectionContext();
	const introRef = useSectionInView('Intro', 0.2);
	const aimRef = useSectionInView('Aim', 0.1);
	const solutionRef = useSectionInView('Solution', 0.1);
	const architectureRef = useSectionInView('Architecture', 0.1);
	const impactRef = useSectionInView('Impact', 0.5);
	const learningsRef = useSectionInView('Learnings', 0.1);
	const aiRef = useSectionInView('AI', 0.1);

	useEffect(() => {
		setHeaderSections(holidayRentalLinks);
		setActiveSection('Intro');
	}, [setHeaderSections, setActiveSection]);

	return (
		<article className="max-w-[49rem]  mb-28 scroll-mt-[100rem] [&_p]:text-lg/8 [&_p]:color-gray-900 [&_li]:color-gray-900 [&_li]:text-lg/8">
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
						id="outline-heading"
						className="text-2xl scroll-mt-28 font-medium mb-4 text-left"
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
								href="#the-aim-of-the-project"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								The Aim of the Project
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
								href="#ai"
								className="text-gray-800 hover:text-gray-600 hover:underline focus:underline focus:outline-none [&:not(:hover)]:no-underline"
							>
								AI vs Handcoding
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

			<div className=" max-w-[49rem] mx-auto py-4 md:px-6  rounded-lg  border-black/5 ">
				{/* 1. Introduction */}
				<motion.section
					ref={introRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.2 }}
				>
					<h2
						id="introduction"
						className="text-3xl scroll-mt-28 font-medium capitalize mb-8 text-left"
					>
						Introduction
					</h2>
					<div className="text-left space-y-8 text-gray-700 leading-relaxed mb-20">
						<p>
							This project involved the end-to-end design and development of a
							fully custom booking platform that enabled my client to move away
							from Airbnb and reclaim the 16% platform fee previously deducted
							from every booking. The aim was to build a streamlined, branded,
							and highly automated inquiry-to-book system tailored precisely to
							the client’s business needs.
						</p>
						<p>
							Through close collaboration, we mapped the ideal user journey for
							both guests and host, eliminating manual admin work while
							preserving the sense of trust and professionalism that third-party
							platforms typically provide. The result is a lean, event-driven
							booking solution combining a premium marketing website with a
							private management dashboard, automated payments and automated
							email workflows.
						</p>
						<p>
							In this article, I’ll break down the architecture, user experience
							decisions, technical trade-offs, and measurable business impact of
							delivering a robust, fully independent booking ecosystem.
						</p>
					</div>
				</motion.section>

				{/* 2. The Aim of the Project */}
				<motion.section
					ref={aimRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.3 }}
				>
					<h2
						id="the-aim-of-the-project"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						The Aim of the Project
					</h2>
					<div className="text-left space-y-8 text-gray-700 leading-relaxed mb-20">
						<p>
							The primary aim of this project was to give the client full
							independence from third-party booking platforms while preserving
							the trust, simplicity, and reliability those platforms provide.
						</p>
						<p>More specifically, the project set out to:</p>
						<ol className="list-none list-inside space-y-4 ml-4">
							<li>
								<strong>Increase Revenue Per Booking</strong>
								<br />
								Eliminate Airbnb’s 16% platform fee and allow the client to
								retain more profit from every confirmed stay.
							</li>
							<li>
								<strong>Replace Platform Trust with Brand Trust</strong>
								<br />
								Design a premium, cohesive digital experience that would inspire
								the same level of confidence guests typically associate with
								large booking platforms.
							</li>
							<li>
								<strong>Automate the Inquiry-to-Book Workflow</strong>
								<br />
								Remove manual email coordination, bank transfer tracking, and
								repetitive admin tasks by building an event-driven, automated
								system.
							</li>
							<li>
								<strong>Centralise Booking Management</strong>
								<br />
								Provide a private dashboard where all inquiries, payments, guest
								details, and booking records are stored in one secure location.
							</li>
							<li>
								<strong>Deliver a Lean, Intuitive User Experience</strong>
								<br />
								Reduce friction for both guests and host, ensuring the custom
								solution felt simpler than Airbnb.
							</li>
						</ol>
					</div>
				</motion.section>

				{/* 3. The solution */}
				<motion.section
					ref={solutionRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.4 }}
				>
					<h2
						id="the-solution"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						The solution
					</h2>

					<div className="text-left space-y-8 text-gray-700 leading-relaxed mb-20">
						<p>
							I designed a lean custom web app. In collaboration with the client
							i was able to tailer an inquiry-to-book workflow to their precise
							needs. I reduced the number of manual emails needed per booking to
							zero and gave the business a premium and consistent brand
							identity.
						</p>

						<p>This private booking platform has 2 main parts. </p>

						<p className="">
							<strong>Marketing website:</strong> a custom designed custom built
							client facing marketing website accompanied by matching email
							templates. This site provides prospect guests with the information
							they need to make a booking decision. The consistent and
							professional branding inspires confidence and trust in the booking
							process. This is a crucial substitute for the inherent customer
							trust that Airbnb provides.
						</p>
						<BlogImage
							src="/hero.png"
							alt="Hero section of the booking site"
							caption="Hero section of the custom booking site: main marketing message and clear call-to-action."
						/>

						<p className="">
							<strong>Booking management platform:</strong> a private booking
							management platform consisting of a private admin dashboard and
							automated workflows for sending emails and taking payments. The
							design provides a lean version of the traditional inquiry-to-book
							workflow.
						</p>
						<BlogImage
							src="/bookings-table.png"
							alt="Bookings table in admin dashboard"
							caption="The admin dashboard shows a table of all bookings with their status, dates, and guest details in one place."
						/>
						<BlogImage
							src="/price-breakdown-and-accept-button.png"
							alt="Price breakdown and accept button"
							caption="The host can view a price breakdown for each inquiry and accept or decline the booking with a single click."
						/>

						<p>
							Outstanding User Experience design was crucial in delivering an
							intuitive and effective solution. By reducing friction for both
							the host and the guests i was able to make the site an enjoyable
							alternative to Airbnb.
						</p>
						<p>
							<strong>For guests</strong>, the experience is strait forward:
						</p>
						<ul className="list-decimal list-inside space-y-2 ml-4">
							<li>Explore the reviews, amenities, and property details</li>
							<li>
								See a clear price estimate breakdown before they send the
								request
							</li>
							<li>Select a date range and submit an inquiry</li>
							<li>
								Receive an email when the host confirms, with a link to payment
							</li>
							<li>
								After payment, receive a pre-arrival email (scheduled for one
								day before check-in)
							</li>
						</ul>

						<BlogImage
							src="/video-of-site-form-rooms-till-form.png"
							alt="Video of site from rooms till form"
							caption="An interactive card stack and Polaroid stack showing the rooms."
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
							caption="The bookings table gives the host a single view of every inquiry and paid booking without switching tools."
						/>
						<p className="font-bold">
							Accepting a standard booking now takes two clicks!!
						</p>
						<div>
							<p className="">No manual copying of customer info.</p>
							<p className="">No chasing bank transfers.</p>
							<p className="">No repetitive emails.</p>
						</div>
					</div>
				</motion.section>

				{/* 4. Architecture */}
				<motion.section
					ref={architectureRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.5 }}
				>
					<h2
						id="architecture"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						Architecture
					</h2>
					<p className="font-medium">
						<strong>Customer-facing site:</strong>
					</p>

					<div className="grid items-end grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4 space-y-8">
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

					<div className="text-left space-y-8 text-gray-700 leading-relaxed">
						<ul className="list-disc mt-4 list-inside space-y-2 ml-4">
							<li>Next.js</li>
							<li>React</li>
							<li>Tailwind CSS</li>
							<li>Framer Motion</li>
							<li>Figma</li>
						</ul>
						<p>
							This Stack let me translate my Figma design into a responsive site
							that works smoothly on desktop, tablet and mobile, with unique
							interactivity at great performance.
						</p>
						<p className="font-medium pt-6">
							<strong>Admin dashboard + automated workflows:</strong>
						</p>
						<div className="grid items-end grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4">
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
							<li>Serverless functions + cron jobs for scheduled emails</li>
						</ul>
						<p>
							<strong>The workflow is event-driven</strong> a successful Stripe
							payment triggers a webhook that updates booking state and sends
							confirmation emails automatically.
						</p>
					</div>
				</motion.section>

				{/* 5. Impact */}
				<motion.section
					ref={impactRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.6 }}
				>
					<h2
						id="impact"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						Impact
					</h2>
					<div className="text-left space-y-8 text-gray-700 leading-relaxed mb-20">
						<p className="font-bold">Financial impact</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>16% more revenue per booking</li>
							<li>
								Equivalent to one extra booking’s earnings per six bookings
							</li>
						</ul>

						<BlogImage
							src="/coffee-stamp-graphic-3.png"
							alt="Coffee stamp graphic"
							caption="Illustration of the 16% revenue gain: one extra booking’s earnings for every six bookings."
						/>

						<p className="font-bold mt-6">Operational impact</p>
						<p>
							Compared to organising a booking manually without Airbnb, we made
							the admin process <strong>36 times faster!</strong> The Host can
							now do in 5 minutes what would have taken 3 hours of email
							coordination and tracking bank transfers and other sensitive user
							data.
						</p>
					</div>
				</motion.section>

				{/* 6. What I learned */}
				<motion.section
					ref={learningsRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.7 }}
				>
					<h2
						id="what-i-learned"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						What I learned
					</h2>
					<div className="text-left space-y-8 text-gray-700 leading-relaxed mb-20">
						<p className="font-bold">Frontend</p>
						<p>
							<strong>Building a stacking cards UI using scroll.</strong> I
							built an animation where cards stack on top of each other as the
							user scrolls down the page. To get this right, I had to pay close
							attention to how position sticky, the scroll container height,
							card height, top alignment, and top margins all interact. The
							final effect uses position sticky plus Framer Motion tracking of
							scroll progress to drive the stacking behavior.
						</p>
						<p>
							<strong>Building a user-controlled shuffle animation.</strong> I
							also created a playful “Polaroid shuffle” animation so users can
							click through different room images. The main challenge was
							choosing the right moment in the animation to change z-index to
							avoid visible clipping as images overlap. Instead of using CSS
							keyframes, I tracked animation progress in component state so the
							user can drive the shuffle by clicking from one photo to the next.
						</p>
						<p className="font-bold">Trade-offs</p>
						<p>
							<strong>
								Custom dashboard instead of a stitched-together SaaS workflow.
							</strong>{' '}
							I chose to build a custom dashboard where the client can manage
							bookings and customer details in one place, rather than stitching
							together existing tools (e.g. google forms + manual tracking +
							manual emails). This required more upfront work, but the result
							was a simpler and more automated workflow. The client valued
							having everything in one place and not needing to learn multiple
							systems.
						</p>
						<p className="font-bold">Backend</p>
						<p>
							<strong>Designing a robust event-driven architecture.</strong> I
							designed the booking system to tolerate failures and remain
							eventually consistent across distributed parts of the workflow. I
							did this by using idempotency keys to prevent duplicate email
							sends, and retry logic to ensure emails and database updates still
							complete after transient failures. I achieved this without adding
							explicit job queues by leaning on Stripe and Resend’s built-in
							retry and idempotency features.
						</p>
						<p>
							<strong>Leveraging TypeScript generics.</strong> For the
							email-sending layer, I used TypeScript generics to strongly couple
							each email template with the props it expects. This makes it easy
							to add new templates while keeping type safety. TypeScript can
							validate at build time that the template and props match, which
							reduces the risk of runtime bugs and time-consuming email
							debugging. A union-based approach could work, but generics scale
							more cleanly as the number of templates grows.
						</p>
						<p>
							<strong>Integrating Stripe.</strong> I chose Stripe for its
							developer experience and the quality of its dashboard (useful if
							the client ever needs to handle refunds). I implemented dynamic
							pricing on the server and embedded Stripe Checkout components into
							a custom checkout page, instead of using a redirect-to-Stripe URL
							flow. This kept the user experience cohesive, and it let the
							client set or adjust pricing from the admin dashboard rather than
							managing prices directly in Stripe.
						</p>
						<p>
							<strong>Ensuring database security.</strong> I protected user data
							while still supporting database writes from unauthenticated users.
							I did this with RLS policies in PostgreSQL, combined with tightly
							controlled usage of the service role key from server-only function
							calls.
						</p>
						<p className="font-bold">Trade-offs</p>
						<ol className="list-decimal list-inside space-y-2 ml-4">
							<li>
								<strong>No explicit rate limiting:</strong> Unauthenticated
								users can trigger certain writes, but I assessed the likelihood
								and business impact of abuse as low for this project. Adding
								rate limiting infrastructure was not justified at this stage.
							</li>
							<li>
								<strong>No separate email job queue:</strong> I relied on Resend
								retry logic plus idempotency keys, because the expected email
								volume is low enough that a dedicated queue would add complexity
								without clear upside.
							</li>
						</ol>
						<p className="font-bold">Project delivery</p>
						<p>
							<strong>Agile iteration with the client using prototypes.</strong>{' '}
							Close collaboration with the client improved the final outcome.
							Getting feedback early surfaced important insights while changes
							were still cheap, and reduced the amount of work I had to throw
							away later.
						</p>
						<p>
							I also learned that details matter, even during early exploration.
							Keeping spelling, tone, and placeholder copy on-brand helped
							feedback sessions stay focused on the product, instead of getting
							distracted by avoidable rough edges.
						</p>
					</div>
				</motion.section>

				{/* 7. AI */}
				<motion.section
					ref={aiRef.ref}
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.6 }}
				>
					<h2
						id="ai"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						Balancing genAI with Handcoding.
					</h2>
					<div className="text-left space-y-8 text-gray-700 leading-relaxed mb-20">
						<p>
							For the customer-facing site, I wrote everything by hand. The
							design was highly intentional, with complex animations and
							delicate responsive breakpoints in the hero section, and I wanted
							full control over the implementation.
						</p>
						<p>
							For the admin interface, I took a different approach. I used genAI
							(Cursor’s Composer in agentic mode) to accelerate scaffolding and
							repetitive sections, while giving very explicit guidance on
							structure and constraints. I found AI most effective when
							extending an existing patterns like wiring up existing form inputs
							with zod and React Hook Form and Zod based, or for generating
							email templates that followed the established front-end styles.
						</p>
						<p className="font-bold">Trade-offs</p>
						<p>
							I spent a longer time coding features by hand where precision was
							important for brand experience or data security and sped up
							iteration where how things worked was more important then how they
							looked, selectively adding extra polish by hand afterwards.
						</p>
					</div>
				</motion.section>

				{/* 8. What I'd do differently */}
				<motion.section
					className="mb-12"
					initial={sectionMotion.initial}
					animate={sectionMotion.animate}
					transition={{ delay: 0.8 }}
				>
					<h2
						id="what-id-do-differently"
						className="text-3xl/10 font-medium capitalize mb-8 text-left scroll-mt-28"
					>
						What I’d do differently
					</h2>
					<div className="text-left space-y-8 text-gray-700 leading-relaxed">
						<p>
							If I were starting again, I would likely choose a less custom
							approach for the marketing site. While the bespoke animations and
							interactions add personality and polish, the additional
							development time wasn’t fully justified by the extra “wow” factor.
							A simpler design system like <strong>Relume</strong> could have
							delivered nearly the same user confidence with significantly less
							effort.
						</p>
					</div>
				</motion.section>
			</div>
		</article>
	);
}
