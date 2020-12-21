import React, { useCallback } from 'react';
import Fade from '@material-ui/core/Fade';

import Pages from 'pages';
import GridLayout from 'components/GridLayout';
import ProjectCard from 'components/ProjectCard';

import Projects from './Projects';
import Root from './styles';

const ProjectsListPage = () => {
	const projectsToShow = useCallback(() => {
		return Projects.sort(() => Math.random() - 0.5).map((project, index) => (
			<Fade in timeout={{ enter: 500*index }}>
				<ProjectCard name={project.name} images={project.images} />
			</Fade>
		));
	}, []);

	return (
		<Pages>
			<Root>
				<GridLayout items={projectsToShow()} />
			</Root>
		</Pages>
	);
};

export default ProjectsListPage;