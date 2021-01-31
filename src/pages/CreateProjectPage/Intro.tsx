import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { IntroContainer } from './styles';

interface Props {
	onFinish: () => void;
}

const Intro: React.FC<Props> = ({ onFinish }) => {
	useEffect(() => {

	});

	return (
		<IntroContainer>
			<Grid container>
				<Grid item xs={12}>
					<Fade in>
						<div className="transitionDelay2000">Start your journey toward a food secure community.</div>
					</Fade>
				</Grid>
				<Grid item xs={12}>
					<Fade in>
						<div>Tell us about the things you are interested in and </div>
					</Fade>
				</Grid>
				<Grid item xs={12}>
					<Fade in>
						<div>get your FREE AgOpportunity Guide today!</div>
					</Fade>
				</Grid>
			</Grid>
		</IntroContainer>
	)
};

export default Intro;
