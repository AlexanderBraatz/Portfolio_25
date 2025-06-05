import { allLinks } from '@/lib/data';

export type SectionName =
	| (typeof allLinks.homepage)[number]['name']
	| (typeof allLinks.testimonials)[number]['name'];
