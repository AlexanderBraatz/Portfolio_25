import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContext from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'A. Braatz | Personal Portfolio',
	description:
		'Alexander Braatz is a full-stack developer with 3 years of experience'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="!scroll-smooth"
		>
			<body className={`${inter.className} bg-gray-50 text-gray-950 relative `}>
				<div
					className=" bg-[#fde2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem] rounded-full  
        sm:w-[68.75rem]"
				></div>
				<div
					className=" bg-[#dbd7fb] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] blur-[10rem] rounded-full 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left=[-15rem] 2xl:left-[-5rem]"
				></div>
				<ActiveSectionContext>
					<Header />
					<main className="flex flex-col items-center px-4 -mb-20 min-h-screen pt-28 sm:pt-36">
						{children}
						<div className="h-20"></div>
					</main>
					<Toaster position="top-right" />
					<Footer />
				</ActiveSectionContext>
			</body>
		</html>
	);
}
