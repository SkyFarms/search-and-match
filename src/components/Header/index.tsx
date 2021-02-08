import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import MobileNavMenu from './MobileNavMenu';
import NavMenu from './NavMenu';

import AppBar from './styles';

const Header: React.FC = () => {
	return (
		<>
			<AppBar position="fixed">
				<Toolbar>
					<Grid container spacing={0} className="header">
						<Grid item xs={2} sm={2}>
							<div>Connect & Grow</div>
						</Grid>
						<Hidden mdDown>
							<Grid item xs={2} sm={10}>
								<NavMenu onClose={() => {}} />
							</Grid>
						</Hidden>

						<MobileNavMenu />
					</Grid>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	)
}

export default Header;