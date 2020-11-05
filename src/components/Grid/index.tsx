import React from 'react';
import Grid from '@material-ui/core/Grid';

import Root from './styles';

import PhotoGridItem, { PhotoGridItemProps } from './PhotoGridItem';
import TextGridItem, { TextGridItemProps } from './TextGridItem';

// type GridItemProps = PhotoGridItemProps | TextGridItemProps;

interface GridProps {
  title?: string;
  type: 'text' | 'photo';
  items: any[]; // TODO: fix type for property
}

const GridLayout: React.FC<GridProps> = ({ type, title, items }) => {
  return (
    <Root className="gridWrapper">
      {title ? <div className="title">{title}</div> : null}
      <Grid container className="itemsWrapper">
        {type === 'photo'
          ? items.map((item: PhotoGridItemProps, index: number) => (
              <Grid item key={`grid_item_${index}`}>
				        <PhotoGridItem image={item.image} name={item.name} />
			        </Grid>
            ))
          : items.map((item: TextGridItemProps, index: number) => (
              <Grid item key={`grid_item_${index}`}>
				        <TextGridItem title={item.title} description={item.description} />
			        </Grid>
            ))}
		  </Grid>    
    </Root>
  );
};

export default GridLayout;