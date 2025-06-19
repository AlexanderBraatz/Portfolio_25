import { allLinks, homePageLinks, testimonialLinks } from '@/lib/data';
export type SectionName =
	| (typeof homePageLinks)[number]['name']
	| (typeof testimonialLinks)[number]['name'];
