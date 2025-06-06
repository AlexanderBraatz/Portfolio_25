'use client';

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types/types';
import { links, linksTestimonials, type LinksType } from '@/lib/data';
import { usePathname } from 'next/navigation';

type ActiveSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastCLick: React.Dispatch<React.SetStateAction<number>>;
	headerSections: typeof links | typeof linksTestimonials;
	setHeaderSections:
		| React.Dispatch<React.SetStateAction<typeof links>>
		| React.Dispatch<React.SetStateAction<typeof linksTestimonials>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

export default function ActiveSectionContextProvider({
	children
}: ActiveSectionContextProviderProps) {
	const pathname = usePathname();
	const onTestimonials = pathname.startsWith('/testimonials');
	const onAccount = pathname.startsWith('/account');
	const [activeSection, setActiveSection] = useState<SectionName>(
		onAccount ? 'Account' : onTestimonials ? 'Review' : 'Home'
	);
	const [timeOfLastClick, setTimeOfLastCLick] = useState(0); // we need keep track of this to temporarrily block the observer
	const [headerSections, setHeaderSections] = useState(
		onAccount || onTestimonials ? linksTestimonials : links
	);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastCLick,
				headerSections,
				setHeaderSections
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within an ActiveSectionContextProvider'
		);
	}
	return context;
}
