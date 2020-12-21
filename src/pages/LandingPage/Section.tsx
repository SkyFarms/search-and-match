import React, { ReactElement } from 'react';

import GridLayout from 'components/GridLayout';

interface Props {
	title: string;
	items: ReactElement[];
	className?: string;
}

const Section: React.FC<Props> = ({ title, className = '', items }) => {
	return (
		<div className={`section ${className}`}>
			<div className="sectionContent">
				<div className="title">{title}</div>
				<GridLayout items={items} />
			</div>
		</div>
	);
};

export default Section;
