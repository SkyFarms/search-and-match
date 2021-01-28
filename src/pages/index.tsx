import React from 'react';

import PageContainer from './styles';

const Pages: React.FC = ({children}) => (
	<PageContainer className="pageContainer">
		{children}
	</PageContainer>
);

export default Pages;
