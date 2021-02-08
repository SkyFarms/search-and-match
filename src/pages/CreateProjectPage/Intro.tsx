import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { IntroContainer } from './styles';

interface Props {
	onFinish: () => void;
}

const Intro: React.FC<Props> = ({ onFinish }) => (
	<IntroContainer>
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Fade in>
					<Typography variant="h3">Start your journey toward a food secure community.</Typography>
				</Fade>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Fade in>
							<Typography variant="h4" className="transitionDelay700">Tell us about the things you are interested in and </Typography>
						</Fade>
					</Grid>
					<Grid item xs={12}>
						<Fade in>
							<Typography variant="h4" className="transitionDelay1000">get your FREE AgOpportunity Guide today!</Typography>
						</Fade>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Fade in>
					<Button onClick={onFinish} className="transitionDelay1500 startBtn">
						<Typography variant="h6">Let's Start!</Typography>
					</Button>
				</Fade>
			</Grid>
		</Grid>
	</IntroContainer>
);

export default Intro;
