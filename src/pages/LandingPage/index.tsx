import React, { useCallback } from 'react';
import Fade from '@material-ui/core/Fade';

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
				title: '1. FIND, start',
				description: 'join, share, local farming projects'
			},
			{
				title: '2. CONNECT',
				description: `with community of information volunteers, experts, empty space product's ideas`
			},
			{
				title: '3. GROW food',
				description: 'security in your area ith access to sustainable agriculture'
			}
		];
		return steps.map((step, index) => (
			<Fade in timeout={{ enter: 300*index }}>
				<div className="item textItem">
					<div className="title">{step.title}</div>
					<div className="description">{step.description}</div>
				</div>
			</Fade>
		));
	}, []);

	return (
		<Pages>
			<Root>
				<HeroBanner />
				<Section className="featuredSection" title="Check out where we are growing" items={getProjectsToShow()} />
				<Section className="howItWorksSection" title="Growing Food, Feeding People, and Saving the Planet is as easy as 1, 2, 3." items={getHowItWorksSteps()} />
			</Root>
		</Pages>
	);
};

export default LandingPage;