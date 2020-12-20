import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Carousel from 'react-material-ui-carousel'

import Pages from 'pages';

import Projects from './Projects';
import Root, { ImageCarouselContainer } from './styles';

interface ImageCarouselProps {
	images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => (
	<ImageCarouselContainer>
		<Carousel indicators={false} animation={'fade'} interval={10000} navButtonsAlwaysInvisible>
			{images.map(image => (
				<div key={image} className="image" style={{ backgroundImage: `url('${image}')` }} />
			))}
		</Carousel>
	</ImageCarouselContainer>
);

const ProjectsListPage = () => {
	return (
		<Pages>
			<Root>
				<Grid container spacing={4}>
					{Projects.map((project, index) => (
						<Grid key={`grid_item_${project.id}`} item xs={12} sm={6} md={4}>
							<Fade in timeout={{ enter: 1000*index }}>
								<Paper>
									<ImageCarousel images={project.images} />
									<div className="projectName">{project.name}</div>
								</Paper>
							</Fade>
						</Grid>
					))}
				</Grid>
			</Root>
		</Pages>
	);
};

export default ProjectsListPage;