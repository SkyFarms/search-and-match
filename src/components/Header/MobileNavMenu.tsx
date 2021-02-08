import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';

import NavMenu from './NavMenu';

import { MobileNav } from './styles';

const MobileNavMenu: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const location = useLocation();

	useEffect(() => {
		setShowMenu(false);
	}, [location.pathname])

	const openMenu = useCallback(() => {
		setShowMenu(true)
	}, []);
	const closeMenu = useCallback(() => {
		setShowMenu(false);
	}, []);

	return (
		<Hidden lgUp>
			<Grid item xs={2} className="mdMenuTrigger">
				<IconButton onClick={openMenu}>
					<MenuIcon />
				</IconButton>

				<MobileNav anchor="right" open={showMenu} onClose={closeMenu}>
					<NavMenu forMobile onClose={closeMenu} />
				</MobileNav>
			</Grid>
		</Hidden>
	);
};

export default MobileNavMenu;
