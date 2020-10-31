import React from 'react';
import Link from '@material-ui/core/Link';

export interface PhotoGridItemProps {
  image: string;
  name: string;
}

const PhotoGridItem: React.FC<PhotoGridItemProps> = ({ image, name }) => (
  <Link href="#" className="item photoItem">
    <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="name">{name}</div>
  </Link>
);

export default PhotoGridItem;
