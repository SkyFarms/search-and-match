import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Link as LinkElement } from './styles';

interface Link {
	label: string;
	href: string;
	target?: string;
}

interface Props {
	sectionTitle: string;
	links: Link[];
}

const FooterSection: React.FC<Props> = ({ sectionTitle, links }) => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} className="sectionTitle">
					<Typography variant="subtitle1">{sectionTitle}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						{links.map(({ href, label, target }) => (
							<Grid key={label} item xs={12}>
								<LinkElement target={target} href={href}>
									<Typography variant="subtitle2">{label}</Typography>
								</LinkElement>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
			
		</>
	)
};

export default FooterSection;
