'use client';

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types/types';
import { homePageLinks, testimonialLinks, holidayRentalLinks, type LinkType } from '@/lib/data';
import { usePathname } from 'next/navigation';

type ActiveSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastCLick: React.Dispatch<React.SetStateAction<number>>;
	headerSections: LinkType[];
	setHeaderSections: React.Dispatch<React.SetStateAction<LinkType[]>>;
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
	const onHolidayRental = pathname.startsWith('/holidayrental');
	const [activeSection, setActiveSection] = useState<SectionName>(
		onAccount ? 'Account' : onTestimonials ? 'Review' : onHolidayRental ? 'Intro' : 'Home'
	);
	const [timeOfLastClick, setTimeOfLastCLick] = useState(0); // we need keep track of this to temporarrily block the observer
	const [headerSections, setHeaderSections] = useState(
		onAccount || onTestimonials ? testimonialLinks : onHolidayRental ? holidayRentalLinks : homePageLinks
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
