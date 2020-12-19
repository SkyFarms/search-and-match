import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import AppBar from './styles';

const NavBar: React.FC<any> = () => (
  <AppBar position="fixed">
		<Grid container className="sectionWrapper">
			<Grid item className="section leftSection" sm={6}>
				<Link to="/">Connect & Grow</Link>
			</Grid>
			<Grid item sm={6} className="section rightSection">
				<Link to="/create" className="addLink">Create your project</Link>
			</Grid>
		</Grid>
  </AppBar>
);

export default NavBar;
