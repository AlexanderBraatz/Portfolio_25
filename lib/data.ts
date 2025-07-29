import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import renewableExchangeTeam from '@/public/renewable-Exchange-team.jpeg';
import linkedinScreenshot1 from '@/public/linkedin-screenshot-3.png';
import winsorScreenshot1 from '@/public/winsor-screenshot-1.jpg';
import protfolioScreenshot1 from '@/public/protfolio-screenshot-1.png';

// fixing the structure by using enums and genric types rather than as const

export type LinkName =
	| 'Home'
	| 'Reviews'
	| 'Work'
	| 'About'
	| 'Skills'
	| 'Experience'
	| 'Contact'
	| 'Review'
	| 'Account';

export type LinkHash =
	| '/#home'
	| '#reviews'
	| '#projects'
	| '#about'
	| '#skills'
	| '#experience'
	| '#contact'
	| '/'
	| '/testimonials/new'
	| '/account/logout';

export interface LinkType {
	readonly name: LinkName;
	readonly hash: LinkHash;
}

export const homePageLinks: LinkType[] = [
	{
		name: 'Home',
		hash: '/#home'
	},
	{
		name: 'Reviews',
		hash: '#reviews'
	},
	{
		name: 'Work',
		hash: '#projects'
	},
	{
		name: 'About',
		hash: '#about'
	},
	{
		name: 'Skills',
		hash: '#skills'
	},
	{
		name: 'Experience',
		hash: '#experience'
	},
	{
		name: 'Contact',
		hash: '#contact'
	}
];

export const testimonialLinks: LinkType[] = [
	{
		name: 'Home',
		hash: '/'
	},
	{
		name: 'Review',
		hash: '/testimonials/new'
	},
	{
		name: 'Account',
		hash: '/account/logout'
	}
];
export const experiencesData = [
	{
		title: 'DevelopMe bootcamp',
		location: 'Bristol, UK',
		description:
			'I graduated after 4 months of studying. I continued building Projects during the Pandemic.',
		icon: React.createElement(LuGraduationCap),
		date: '2020'
	},
	{
		title: 'Web Developer',
		location: 'Bristol, UK',
		description:
			'I acquire an Architectural firm as a client and built a Portfolio site to display 30+ Projects.',
		icon: React.createElement(CgWorkAlt),
		date: '2023'
	},
	{
		title: 'Full-Stack Developer & AI-tech advocate',
		location: 'Berlin, GER (remote) ',
		description:
			'I promote company wide AI adoption by developing web apps for hundreds of conferences attendees and lessons for 30+ colleagues every month. ',
		icon: React.createElement(CgWorkAlt),
		date: '2024'
	},
	{
		title: 'Contract Software Engineer',
		location: 'Bristol, UK',
		description:
			'Brought in to accelerate a B2B marketplace platform launch, achieving a two-month early rollout through critical UI contributions and swift collaboration.',
		icon: React.createElement(CgWorkAlt),
		date: '2025'
	}
] as const;

export const projectsData = [
	{
		title: 'Contractor at Scale-up',
		description:
			'Delivered key UI components and translation pipelines for a B2B trading platform, enabling launch 2 months earlier.',
		tags: ['Typescript', 'React', 'Node.js', 'GraphQL', 'CircleCI', 'MUI'],
		imageUrl: renewableExchangeTeam,
		link: 'https://renewable.exchange/platform-3-demo-request/',
		linkText: 'Get a Demo'
	},
	{
		title: 'AI Image Generator',
		description:
			'Developed this web app for a convention showcase, where users designed and downloaded 200+ LinkedIn cover images.',
		tags: ['Next.js', 'JavaScript', 'API', 'Figma', 'CI/CD'],
		imageUrl: linkedinScreenshot1,
		link: 'https://linkedin-banner-image-generator.vercel.app',
		linkText: 'open live site'
	},
	{
		title: 'Architecture Firm',
		description:
			'Led technical implementation of the website redesign, seamlessly displaying 30+ projects, driving conversion.',
		tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Figma'],
		imageUrl: winsorScreenshot1,
		link: 'https://www.winsorleaman.com',
		linkText: 'open live site'
	}
	// {
	// 	title: 'This Portfolio',
	// 	description:
	// 		'Built my personal Portfolio site while Learning new technologies, by following a Tutorial and then expanding on what i learned.',
	// 	tags: ['TypeScript', 'Tailwind', 'Next.js', 'Framer'],
	// 	imageUrl: protfolioScreenshot1,
	// 	link: 'https://alexander-braatz-portfolio-2025.vercel.app',
	// 	linkText: 'open live site'
	// }
] as const;

export const skillsData = [
	'ReactJS',
	'Next.js',
	'TypeScript',
	'Tailwind CSS',
	'Node.js',
	'GraphQL',
	'Supabase',
	'PostgreSQL',
	'CI/CD',
	'Git',
	'Jest',
	'Figma',
	'Technical & Non-technical Communication'
] as const;

// below is a mostlye extensive list , above is more concise for impact
// export const skillsData = [
// 	'ReactJS',
// 	'Next.js',
// 	'TypeScript',
// 	'JavaScript',
// 	'Tailwind',
// 	'AI-Integration',
// 	'AI-Tooling',
// 	'Figma',
// 	'Git',
// 	'HTML5',
// 	'CSS3',
// 	'Node.js',
// 	'Redux',
// 	'Agile / Scrum',
// 	'Web Hosting',
// 	// 'Styled-Components',
// 	'Debugging',
// 	'RESTful API',
// 	'CI/CD',
// 	'Client Engagement',
// 	'GraphQL',
// 	'Apollo',
// 	'Neo4j',
// 	'Material UI(MUI)',
// 	'Jest',
// 	'Playwright',
// 	'Testing',
// 	'CircleCi',
// 	'react-hook-form',
// 	'Echarts',
// 	'Supabase',
// 	'PostgreSQL',
// 	'Node.js'
// ] as const;
