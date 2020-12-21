import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';

interface Props {
	items: ReactElement[];
}

const GridLayout: React.FC<Props> = ({ items }) => {
	return (
		<Grid container spacing={4}>
			{items.map((item, index) => (
				<Grid key={`grid_item_${index}`} item xs={12} sm={6} md={4}>
					{item}
				</Grid>
			))}
		</Grid>
	);
};

export default GridLayout;
