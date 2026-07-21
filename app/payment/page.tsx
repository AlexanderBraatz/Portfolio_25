'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import headshot from '@/public/headshot.jpeg';

const ADD_ON_STRIPE_URL = 'https://buy.stripe.com/aFadRa4Lx1Sf0ybasv3wQ04';

const basisFeatures = [
	'Hosting- und Verwaltung der Website',
	'Hosting der bearbeitbaren Inhalte Ihrer (Bilder & Texte)',
	'Hosting von auf der Website eingebundenen Videos',
	'Hosting und Wartung des E-Mail-Versandservers für Formulare und automatisierte E-Mail-Kommunikation',
	'Laufende Spam-Schutz- und Sicherheitsmaßnahmen (u. a. reCAPTCHA)',
	'Laufende Sicherheits- und Framework-Updates',
	'Behebung technischer Fehler, sofern diese im Rahmen der Wartung entstehen'
];

const plans = [
	{
		name: 'Basis Betreuung',
		price: '77,00 €',
		period: 'pro Monat',
		stripeUrl: 'https://buy.stripe.com/cNi28s91N9kHgx93033wQ03',
		recommended: false,
		extras: [] as string[]
	},
	{
		name: 'Premium Betreuung',
		price: '149,00 €',
		period: 'pro Monat',
		stripeUrl: 'https://buy.stripe.com/bJe5kEguf7cz80D0RV3wQ01',
		recommended: true,
		extras: [
			'2 Stunden pro Monat für kleinere Anpassungen an der Website ohne separates Angebot'
		]
	},
	{
		name: 'Business Betreuung',
		price: '329,00 €',
		period: 'pro Monat',
		stripeUrl: 'https://buy.stripe.com/9B66oIguf1Sf6Wz1VZ3wQ02',
		recommended: false,
		extras: [
			'Bis zu 4 Stunden Inhaltsänderungen oder kleinere Weiterentwicklungen pro Monat inklusive',
			'Regelmäßige Optimierung der Website hinsichtlich Performance',
			'Reaktionszeit innerhalb von 24 Stunden (an Werktagen)'
		]
	}
];

const addOnFeatures = [
	'Einrichtung von PostHog',
	'Analyse des Nutzerverhaltens',
	'Monatliche Optimierung von Texten, Layout und CTAs',
	'Abschlussbericht mit Empfehlungen'
];

const cardSurfaceClass =
	'bg-gradient-to-br from-[#fde2e3]/25 via-[#e9e7fa] to-[#f4f3fd]';

function FeatureList({ features }: { features: string[] }) {
	return (
		<ul className="space-y-2">
			{features.map(feature => (
				<li
					key={feature}
					className="flex gap-2 text-sm text-gray-700"
				>
					<span className="mt-0.5 shrink-0 text-gray-900">✓</span>
					<span>{feature}</span>
				</li>
			))}
		</ul>
	);
}

function BookButton() {
	return (
		<span className="relative z-10 mt-6 block w-full text-center bg-gray-900 text-white px-7 py-3 rounded-full transition-colors group-hover:bg-gray-950">
			Jetzt buchen
		</span>
	);
}

type PaymentCardProps = {
	href: string;
	recommended?: boolean;
	delay?: number;
	className?: string;
	children: React.ReactNode;
};

function PaymentCard({
	href,
	recommended = false,
	delay = 0,
	className,
	children
}: PaymentCardProps) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={clsx(
				'group relative flex flex-col  rounded-xl border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2',
				cardSurfaceClass,
				recommended
					? 'border-gray-800 ring-2 ring-gray-800'
					: 'border-[#dbd7fb]/60',
				className
			)}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, type: 'spring', stiffness: 260, damping: 24 }}
			whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
			whileTap={{ scale: 0.98 }}
		>
			<div className="relative flex flex-col flex-1">{children}</div>
		</motion.a>
	);
}

export default function PaymentPage() {
	return (
		<div className="w-full max-w-5xl mx-auto mb-28">
			<section className="mb-16 max-w-[49rem] mx-auto text-center">
				<div className="flex items-center justify-center">
					<div className="relative">
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ type: 'tween', duration: 0.2 }}
						>
							<Image
								src={headshot}
								alt="Alexander Braatz"
								width="192"
								height="192"
								quality="95"
								priority
								className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
							/>
						</motion.div>
						<motion.span
							className="absolute bottom-0 right-0 text-4xl"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								type: 'spring',
								stiffness: 125,
								delay: 0.1,
								duration: 0.7
							}}
						>
							👋
						</motion.span>
					</div>
				</div>
				<motion.h1
					className="mb-4 mt-4 px-4 text-2xl font-medium !leading-[1.5em] sm:text-4xl"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<span className="font-bold">Schön, dass wir zusammenarbeiten.</span>{' '}
					Ich freue mich auf{' '}
					<span className="font-bold">alles, was noch kommt.</span> Hier finden
					Sie die passenden Betreuungsoptionen für Ihre Website.
				</motion.h1>
			</section>

			<motion.div
				className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				{plans.map((plan, index) => (
					<PaymentCard
						key={plan.name}
						href={plan.stripeUrl}
						recommended={plan.recommended}
						delay={0.1 + index * 0.05}
						className="p-6"
					>
						{plan.recommended && (
							<span className="absolute -top-[36px] left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
								Empfohlen
							</span>
						)}
						<h2 className="text-xl font-medium mb-1">{plan.name}</h2>
						<p className="mb-6">
							<span className="text-2xl font-bold">{plan.price}</span>{' '}
							<span className="text-sm text-gray-600">{plan.period}</span>
						</p>

						<div className="flex-1 space-y-4">
							<div>
								<p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
									Basis-Leistungen
								</p>
								<FeatureList features={basisFeatures} />
							</div>

							{plan.extras.length > 0 && (
								<div className="border-t border-black/10 pt-4">
									<p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
										Zusätzliche Leistungen
									</p>
									<FeatureList features={plan.extras} />
								</div>
							)}
						</div>

						<BookButton />
					</PaymentCard>
				))}
			</motion.div>

			<PaymentCard
				href={ADD_ON_STRIPE_URL}
				delay={0.3}
				className="p-6 sm:p-8"
			>
				<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
					<div>
						<span className="inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-full mb-3">
							Empfohlenes Add-On
						</span>
						<h2 className="text-2xl font-medium mb-1">
							Conversion Optimierung Add-On
						</h2>
						<p className="text-sm text-gray-600 italic">
							empfohlen für die ersten 3 Monate nach dem Launch einer neuen
							Website
						</p>
					</div>
					<p className="shrink-0">
						<span className="text-2xl font-bold">640,00 €</span>{' '}
						<span className="text-sm text-gray-600">für 3 Monate</span>
					</p>
				</div>
				<FeatureList features={addOnFeatures} />
				<BookButton />
			</PaymentCard>
		</div>
	);
}
