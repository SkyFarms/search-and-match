import React, { useCallback, useState } from 'react';

import TextField from '@material-ui/core/TextField';

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
		onSubmit(contactInfo);
	}, [contactInfo, onSubmit]);

	return (
		<div className="contactInfoContainer">
			<div>
				<div className="inputWrapper">
					<TextField
						fullWidth
						required
						label="Who should we contact about this project?"
						name="name"
						value={contactInfo.name}
						onChange={onInputChange}
					/>
				</div>
				<div className="inputWrapper">
					<TextField
						fullWidth
						required
						label="What is your location?"
						name="city"
						value={contactInfo.city}
						onChange={onInputChange}
					/>
				</div>
				<div className="inputWrapper">
					<TextField
						fullWidth
						required
						label="What is the email to contact you?"
						helperText="We would send a FREE Agriculture Opportunities Report to this email"
						name="email"
						value={contactInfo.email}
						type="email"
						onChange={onInputChange}
					/>
				</div>
			</div>
			<div className="actionWrapper">
				<button disabled={!isValidToSubmit()} onClick={handleSubmitInfo}>Submit</button>
			</div>
		</div>
	)
};

export default ContactInfo;
