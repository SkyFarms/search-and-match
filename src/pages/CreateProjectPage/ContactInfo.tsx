import React, { useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { ContactInfoGridContainer } from './styles';

export interface ContactInfoState {
	name: string;
	city: string;
	email: string;
}

interface Props {
	onSubmit: (info: ContactInfoState) => void;
}

const ContactInfo: React.FC<Props> = ({ onSubmit }) => {
	const [contactInfo, setContactInfo] = useState<ContactInfoState>({ name: '', city: '', email: '' });
	const [submitInProgress, setSubmitInProgress] = useState<boolean>(false);

	const isValidToSubmit = useCallback(() =>
		Boolean(contactInfo.name && contactInfo.city && contactInfo.email),
		[contactInfo]
	);

	const onInputChange = useCallback(({ target: { name, value } }) => {
		setContactInfo({
			...contactInfo,
			[name]: value
		})
	}, [contactInfo]);

	const handleSubmitInfo = useCallback(() => {
		setSubmitInProgress(true);
		onSubmit(contactInfo);
	}, [contactInfo, onSubmit]);

	return (
		<ContactInfoGridContainer>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<Grid container spacing={4}>
						<Grid item xs={12} md={12} className="inputWrapper">
							<Fade in>
								<TextField
									fullWidth
									required
									label="Who should we contact about this project?"
									name="name"
									value={contactInfo.name}
									onChange={onInputChange}
								/>
							</Fade>
						</Grid>
						<Grid item xs={12} md={12} className="inputWrapper">
							<Fade in>
								<TextField
									fullWidth
									required
									label="What is your location?"
									name="city"
									value={contactInfo.city}
									onChange={onInputChange}
								/>
							</Fade>
						</Grid>
						<Grid item xs={12} md={12} className="inputWrapper">
							<Fade in>
								<TextField
									fullWidth
									required
									label="What is the email to contact you?"
									helperText="We would like to send a FREE Agriculture Opportunities Report to this email"
									name="email"
									value={contactInfo.email}
									type="email"
									onChange={onInputChange}
								/>
							</Fade>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} className="submitBtnWrapper">
					{submitInProgress ? (
						<CircularProgress />
					) : (
						<button disabled={!isValidToSubmit()} onClick={handleSubmitInfo}>
							<Typography variant="h5">Submit</Typography>
						</button>
					)}
				</Grid>
			</Grid>
		</ContactInfoGridContainer>
	);
};

export default ContactInfo;
