import React from 'react';
import Link from '@material-ui/core/Link';

import Root from './styles';

interface GridItemProps {
  image: string;
  name: string;
}

interface PhotoGridItem extends GridItemProps {
  id: number;
}

interface PhotoGridProps {
  items: PhotoGridItem[];
}

const GridItem: React.FC<GridItemProps> = ({ image, name }) => (
  <Link href="#" className="item">
    <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="name">{name}</div>
  </Link>
);

const PhotoGrid: React.FC<PhotoGridProps> = ({ items }) => {
  return (
    <Root>
      <div className="title">Check out where we are growing</div>
      <div className="itemsWrapper">
        {items.map((item) => (
          <GridItem image={item.image} name={item.name} key={item.id} />
        ))}
      </div>
    </Root>
  );
};

export default PhotoGrid;
