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

export default function Home() {
	return (
		<>
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
