import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import Root from './styles';

const HeroBanner: React.FC = () => {
	const [showActionBtn, setShowActionBtn] = useState<boolean>(false);

	useEffect(() => {
		const showActionBtnTimeout = setTimeout(() => setShowActionBtn(true), 1000);

		return () => { showActionBtnTimeout && clearTimeout(showActionBtnTimeout); };
	});

	return (
		<Root>
			<div className="banner">
				<Fade in={showActionBtn}>
					<Link to="/projects" className="action">
						<Typography variant="h5">Browse Projects</Typography>
					</Link>
				</Fade>
			</div>
		</Root>
	);
};

export default HeroBanner;
