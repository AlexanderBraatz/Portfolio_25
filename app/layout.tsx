import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'A. Braatz | Personal Portfolio',
	description:
		'Alexander Braatz is a full-stack developer with 2 years of experience'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
				<div
					className=" bg-[#fde2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem] rounded-full  
        sm:w-[68.75rem]"
				></div>
				<div
					className=" bg-[#dbd7fb] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] blur-[10rem] rounded-full 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left=[-15rem] 2xl:left-[-5rem]"
				></div>
				{children}
			</body>
		</html>
	);
}
