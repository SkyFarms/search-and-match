import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { IntroContainer } from './styles';

const Outro: React.FC = () => (
	<IntroContainer>
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Fade in>
					<Typography variant="h4">Let's Get GROWING!</Typography>
				</Fade>
			</Grid>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={12}>
						<Fade in>
							<Typography variant="h5" className="transitionDelay700">
								We will contact you shortly with personal consultation
							</Typography>
						</Fade>
					</Grid>
					<Grid item xs={12}>
						<Fade in>
							<Typography variant="h5" className="transitionDelay1500">
								so we can add your farm project idea to our community platform.
							</Typography>
						</Fade>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</IntroContainer>
);

export default Outro;