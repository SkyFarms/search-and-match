import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AboutMenuItemDesktop from './AboutUsMenuItemDesktop';

import { Menu, SubMenu } from './styles';

const SubMenuForAboutUs = () => (
	<SubMenu>
		<li>
			<a target="_blank" rel="noreferrer" href="https://skyfarms.io/code" className="link">
				<Typography variant="subtitle2">Develop Code</Typography>
			</a>
		</li>
		<li>
			<a target="_blank" rel="noreferrer" href="https://skyfarms.io/coming-soon" className="link">
				<Typography variant="subtitle2">Coming Soon</Typography>
			</a>
		</li>
		<li>
			<a target="_blank" rel="noreferrer" href="https://skyfarms.io/privacy-policy" className="link">
				<Typography variant="subtitle2">Privacy Policy</Typography>
			</a>
		</li>
	</SubMenu>
)

interface Props {
	forMobile?: boolean;
	className?: string;
	onClose: () => void;
}

const NavMenu: React.FC<Props> = ({ forMobile = false, className = '', onClose }) => {
	const location = useLocation();

	return (
		<Menu className={`menu ${className}`}>
			<li>
				<a target="_blank" rel="noreferrer" href="https://skyfarms.io/services" className="link">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Services</Typography>
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://skyfarms.io/product" className="link">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Products</Typography>
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://skyfarms.io/make" className="link">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>DIY</Typography>
				</a>
			</li>
			<Hidden mdDown>
				<li>
					<AboutMenuItemDesktop>
						<SubMenuForAboutUs />
					</AboutMenuItemDesktop>
				</li>
			</Hidden>
			<Hidden lgUp>
				<li>
					<a target="_blank" rel="noreferrer" href="https://skyfarms.io/code" className="link">
						<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Develop Code</Typography>
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://skyfarms.io/coming-soon" className="link">
						<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Coming Soon</Typography>
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://skyfarms.io/privacy-policy" className="link">
						<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Privacy Policy</Typography>
					</a>
				</li>
			</Hidden>
			<li>
				<a target="_blank" rel="noreferrer" href="https://skyfarms.io/mooc" className="link">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Agsphere</Typography>
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://skyfarms.io/library" className="link">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Library</Typography>
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://skyfarms.io/covid-19" className="link">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>Covid-19</Typography>
				</a>
			</li>
			<li hidden={location.pathname === '/create-project'}>
				<Link to="/create-project" className="link createLink">
					<Typography variant={forMobile ? 'h6' : 'subtitle2'}>+Create Your Project</Typography>
				</Link>
			</li>
			{forMobile ? (
				<IconButton className="closeBtn" onClick={onClose}>
					<CloseIcon fontSize="large" />
				</IconButton>
			) : null}
		</Menu>
	);
}

export default NavMenu;