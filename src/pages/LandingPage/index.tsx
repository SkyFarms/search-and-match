import React, { useCallback } from 'react';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import Pages from 'pages';
import HeroBanner from 'components/HeroBanner';
import ProjectCard from 'components/ProjectCard';
import Section from './Section';

import Projects from 'pages/ProjectsListPage/Projects';

import Root from './styles';

const LandingPage  = () => {
	const getProjectsToShow = useCallback(() => Projects.sort(() => Math.random() - 0.5).slice(0, 3).map((project, index) => (
		<Fade in timeout={{ enter: 300*index }}>
			<ProjectCard name={project.name} images={project.images} />
		</Fade>
	)), []);

	const getHowItWorksSteps = useCallback(() => {
		const steps = [
			{
				title: '1. SHARE',
				description: 'Find, start, join, share, local farming projects'
			},
			{
				title: '2. CONNECT',
				description: `with community of information volunteers, experts, empty space product's ideas`
			},
			{
				title: '3. GROW',
				description: 'food security in your area with access to sustainable agriculture'
			}
		];
		return steps.map((step, index) => (
			<Fade in timeout={{ enter: 300*index }}>
				<div className="item textItem">
					<Typography variant="h5">{step.title}</Typography>
					<Typography variant="h6">{step.description}</Typography>
				</div>
			</Fade>
		));
	}, []);

	return (
		<Pages>
			<Root>
				<HeroBanner />
				<Section className="featuredSection" title="Check out where we are growing" items={getProjectsToShow()} />
				<Section className="howItWorksSection" title="CONNECT with Agriculture Global Resources to GROW Local Food Secure Communities." items={getHowItWorksSteps()} />
			</Root>
		</Pages>
	);
};

export default LandingPage;