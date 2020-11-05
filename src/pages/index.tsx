import React from 'react';

import NavBar from 'components/NavBar';

import PageContainer from './styles';

const Pages: React.FC = ({children}) => (
	<>
		<NavBar />
		<PageContainer>
			{children}
		</PageContainer>
	</>
);

export default Pages;
