import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import InputTestimonials from '@/components/testimonials-write';
import Testimonials from '@/components/testimonials-read';

import SignOutButton from '@/components/SignOutButton';
import Link from 'next/link';
import { getUser } from '@/auth/server';

export default async function Home() {
	const user = await getUser();
	return (
		<main className="flex flex-col items-center px-4">
			<>
				{user ? (
					<div className="flex flex-col items-center gap-4">
						<p>User is logged in as {user.email}</p>

						<SignOutButton />
					</div>
				) : (
					<div className="flex flex-col items-center gap-4">
						<p>Not logged in</p>

						<Link
							href={'/login'}
							className="bg-emerald-700 p-2 w-40 text-white rounded-lg text-center"
						>
							Login
						</Link>
					</div>
				)}
			</>
			<InputTestimonials />
			<Testimonials />
			<Intro />
			<SectionDivider />
			<Projects />
			<About />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
