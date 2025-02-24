'use client';

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastCLick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

export default function ActiveSectionContextProvider({
	children
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');
	const [timeOfLastClick, setTimeOfLastCLick] = useState(0); // we need keep track of this to temporarrily block the observer

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastCLick
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
