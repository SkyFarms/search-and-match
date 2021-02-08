import React, { useCallback } from 'react';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Pages from 'pages';
import GridLayout from 'components/GridLayout';
import ProjectCard from 'components/ProjectCard';

import Projects from './Projects';
import Root from './styles';

const ProjectsListPage = () => {
	const projectsToShow = useCallback(() => {
		return Projects.sort(() => Math.random() - 0.5).map((project: any) => (
			<Fade in>
				<ProjectCard name={project.name} images={project.images} />
			</Fade>
		));
	}, []);

	return (
		<Pages>
			<Root>
				<GridLayout items={projectsToShow()} />
				<Grid container spacing={2} className="moreInfoWrapper">
					<Grid item xs={12}>
						<Fade in>
							<Typography variant="h6">Want to know more about these projects or meet our farmers?</Typography>
						</Fade>
					</Grid>
					<Grid item xs={12}>
						<Fade in>
							<Typography variant="h6">
								<a target="_blank" rel="noreferrer" href="https://facebook.com/groups/skyfarms" className="actionBtn">
									Connect now!
								</a>
							</Typography>
						</Fade>
					</Grid>
				</Grid>
			</Root>
		</Pages>
	);
};

export default ProjectsListPage;