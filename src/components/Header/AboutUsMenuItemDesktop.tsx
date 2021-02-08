import React, { useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const BiggerDeviceAboutUsMenuItem: React.FC = ({ children }) => {
	const [aboutUsAnchorEl, setAboutUsAnchorEl] = useState(null);
	
	const handlePopoverOpen = useCallback((event: any) => {
    	setAboutUsAnchorEl(event.target);
	  }, []);
	const handlePopoverClose = useCallback(() => {
		setAboutUsAnchorEl(null);
	}, []);

	  const isAboutUsMenuOpen = Boolean(aboutUsAnchorEl);
	  
	return (
		<>
			<div className="link menuLink" onMouseEnter={handlePopoverOpen}>
				<Typography variant="subtitle2">
					About Us
					<KeyboardArrowDownIcon className={isAboutUsMenuOpen ? 'open' : ''} />
				</Typography>
			</div>
			<Popover
				open={isAboutUsMenuOpen}
				anchorEl={aboutUsAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				disableRestoreFocus
				onClose={handlePopoverClose}
			>
				{children}
			</Popover>
		</>
	)
};

export default BiggerDeviceAboutUsMenuItem;
