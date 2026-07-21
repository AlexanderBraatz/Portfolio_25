'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { useActiveSectionContext } from '@/context/active-section-context';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';

type AppShellProps = {
	children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
	const { showHeader } = useActiveSectionContext();

	return (
		<>
			{showHeader && <Header />}
			<main
				className={clsx(
					'flex flex-col items-center px-4 -mb-20 min-h-screen',
					showHeader ? 'pt-28 sm:pt-36' : 'pt-16'
				)}
			>
				{children}
				<div className="h-20"></div>
			</main>
			<Toaster position="top-right" />
			<Footer />
		</>
	);
}
