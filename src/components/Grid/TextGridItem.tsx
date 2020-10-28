import React from 'react';

export interface TextGridItemProps {
  title: string;
  description: string;
}

const TextGridItem: React.FC<TextGridItemProps> = ({ title, description }) => {
  return (
    <div className="item textItem">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default TextGridItem;
