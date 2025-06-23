import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import TestimonialsWithData from '@/components/testimonials-read-ssr-data-fetch';

export default function Home() {
	return (
		<>
			{/* <Header
				links={links}
				headerWidth={'sm:w-[41rem]'}
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
