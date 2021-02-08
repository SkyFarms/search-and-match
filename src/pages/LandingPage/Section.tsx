import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import GridLayout from 'components/GridLayout';

import { SectionContainer } from './styles';

interface Props {
	title: string;
	items: ReactElement[];
	className?: string;
}

const Section: React.FC<Props> = ({ title, className = '', items }) => {
	return (
		<SectionContainer className={`section ${className}`}>
			<div className="sectionContent">
				<Typography variant="h3" className="title">{title}</Typography>
				<GridLayout items={items} />
			</div>
		</SectionContainer>
	);
};

export default Section;
