import React from 'react';

import Root from './styles';

import PhotoGridItem, { PhotoGridItemProps } from './PhotoGridItem';
import TextGridItem, { TextGridItemProps } from './TextGridItem';

type GridItemProps = PhotoGridItemProps | TextGridItemProps;

interface GridProps {
  title: string;
  type: 'text' | 'photo';
  items: any[]; // TODO: fix type for property
}

const Grid: React.FC<GridProps> = ({ type, title, items }) => {
  return (
    <Root>
      <div className="title">{title}</div>
      <div className="itemsWrapper">
        {type === 'photo'
          ? items.map((item: PhotoGridItemProps, index: number) => (
              <PhotoGridItem image={item.image} name={item.name} key={`grid_item_${index}`} />
            ))
          : items.map((item: TextGridItemProps, index: number) => (
              <TextGridItem title={item.title} description={item.description} key={`grid_item_${index}`} />
            ))}
      </div>
    </Root>
  );
};

export default Grid;
