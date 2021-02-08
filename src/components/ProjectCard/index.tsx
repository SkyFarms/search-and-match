import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Typography from '@material-ui/core/Typography';

import Root, { ImageCarouselContainer } from './styles';

interface ImageCarouselProps {
	images: string[];
}

interface Props {
	name: string;
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

const ProjectCard: React.FC<Props> = ({ name, images }) => {
	return (
		<Root>
			<ImageCarousel images={images} />
			<Typography className="projectName" variant="h6" color="inherit">{name}</Typography>
		</Root>
	)
};

export default ProjectCard;
