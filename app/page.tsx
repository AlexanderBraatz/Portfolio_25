import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import InputTestimonials from '@/components/testimonials-write';
import TestimonialsWithData from '@/components/testimonials-read-ssr-data-fetch';

import SignOutButton from '@/components/SignOutButton';
import Link from 'next/link';
import { getUser } from '@/auth/server';
import AuthStatusPanel from '@/components/authStatusPanel';
import Header from '@/components/header';
import { links } from '@/lib/data';

export default function Home() {
	return (
		<>
			{/* <Header
				// @ts-ignore: readonly array cannot be assigned to mutable LinksTypeGeneric[]
				links={links}
				headerWidth={'sm:w-[36rem]'}
			/> */}
			{/* <AuthStatusPanel /> */}
			{/* <InputTestimonials /> */}
			<Intro />
			<SectionDivider />
			<TestimonialsWithData />
			{/* <SectionDivider /> */}
			<Projects />
			<About />
			<Skills />
			<Experience />
			<Contact />
		</>
	);
}
