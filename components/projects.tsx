'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Projects() {
	const { ref } = useSectionInView('Work', 0.5);

	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28 mb-28"
		>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<SectionHeading>My Work</SectionHeading>
			</motion.div>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
