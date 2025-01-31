import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import linkedinScreenshot1 from '@/public/linkedin-screenshot-3.png';
import winsorScreenshot1 from '@/public/winsor-screenshot-1.jpg';
import protfolioScreenshot1 from '@/public/protfolio-screenshot-1.png';

export const links = [
	{
		name: 'Home',
		hash: '#home'
	},
	{
		name: 'Projects',
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
] as const; //makes the object read only and gives typescript intelesense

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
		date: '2024 - present'
	}
] as const;

export const projectsData = [
	{
		title: 'AI Image Generator',
		description:
			'Developed this web app for a convention showcase, where users designed and downloaded 200+ LinkedIn cover images.',
		tags: ['Next.js', 'JavaScript', 'API', 'Figma', 'CI/CD'],
		imageUrl: linkedinScreenshot1,
		link: 'https://linkedin-banner-image-generator.vercel.app'
	},
	{
		title: 'Architecture Firm',
		description:
			'Led technical implementation of the website redesign, seamlessly displaying 30+ projects, driving conversion.',
		tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
		imageUrl: winsorScreenshot1,
		link: 'https://www.winsorleaman.com'
	},
	{
		title: 'This Portfolio',
		description:
			'Built my personal Portfolio site while Learning new technologies, by following a Tutorial and then expanding on what i learned.',
		tags: ['TypeScript', 'Tailwind', 'Next.js', 'Framer', 'CI/CD'],
		imageUrl: protfolioScreenshot1,
		link: 'https://alexander-braatz-portfolio-2025.vercel.app'
	}
] as const;

export const skillsData = [
	'ReactJS',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Tailwind',
	'AI-Integration',
	'AI-Tooling',
	'Figma',
	'Git',
	'HTML5',
	'CSS3',
	'Node.js',
	'Redux',
	'Agile / Scrum',
	'Web Hosting',
	// 'Styled-Components',
	'Debugging',
	'RESTful API',
	'CI/CD',
	'Client Engagement'
] as const;
