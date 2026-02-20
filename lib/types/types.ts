import { homePageLinks, testimonialLinks, holidayRentalLinks } from '@/lib/data';
export type SectionName =
	| (typeof homePageLinks)[number]['name']
	| (typeof testimonialLinks)[number]['name']
	| (typeof holidayRentalLinks)[number]['name'];
