import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import FooterSection from './FooterSection';

import Root, { Link } from './styles';

const Footer: React.FC = () => {
	return  (
		<Root>
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Grid container spacing={8}>
							<Grid item xs={12} sm={6}>
								<Grid container spacing={6}>
									<Grid item xs={12} sm={6}>
										<FooterSection
											sectionTitle="Information Points"
											links={[
												{
													href: 'https://skyfarms.io/services/',
													label: 'Services'
												},
												{
													href: 'https://skyfarms.io/product/',
													label: 'Products'
												},
												{
													href: 'https://skyfarms.io/kumu/',
													label: 'Agsphere'
												},
												{
													href: 'https://skyfarms.io/mooc/',
													label: 'MOOC'
												},
												{
													href: 'https://skyfarms.io/make/',
													label: "DIY's"
												}
											]}  
										/>
									</Grid>

									<Grid item xs={12} sm={6}>
										<FooterSection
											sectionTitle="Community"
											links={[
												{
													label: 'Forum',
													href: 'https://skyfarms.io/community/'
												},
												{
													label: 'Code',
													href: 'https://skyfarms.io/code/'
												},
												{
													label: 'Makers',
													href: 'https://skyfarms.io/make/'
												}
											]}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Grid container spacing={6}>
									<Grid item xs={12} sm={6}>
										<FooterSection
											sectionTitle="Skyfarms"
											links={[
												{
													label: 'About',
													href: 'https://skyfarms.io/about/'
												},
												{
													label: 'Coming Soon',
													href: 'https://skyfarms.io/coming-soon/'
												},
												{
													label: 'Donate to Skyfarms',
													href: 'https://donorbox.org/crowdsourcing-for-crops',
													target: '_blank'
												},
												{
													label: 'Sign our Change.org Petition',
													href: 'http://chng.it/hm9qWwHDNn',
													target: '_blank'
												},
												{
													label: 'Subscribe To Our Newsletter',
													href: 'https://skyfarms.us13.list-manage.com/subscribe/post?u=7989a2cb1797735db26151f0e&amp;id=add9f59d25'
												}
											]}
										/>
									</Grid>

									<Grid item xs={12} sm={6}>
										<FooterSection
											sectionTitle="Socials"
											links={[
												{
													label: 'Facebook',
													href: 'https://www.facebook.com/skyfarms.io/',
													target: '_blank'
												},
												{
													label: 'Twiiter',
													href: 'https://twitter.com/skyfarmsio/',
													target: '_blank'
												},
												{
													label: 'Youtube',
													href: 'https://www.youtube.com/channel/UCsIMmCRSfluhL1YKZJQ6n8g',
													target: '_blank'
												},
												{
													label: 'Instagram',
													href: 'https://www.instagram.com/skyfarms.io/',
													target: '_blank'
												},
												{
													label: 'Pinterest',
													href: 'https://in.pinterest.com/Skyfarms/',
													target: '_blank'
												}
											]}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className="lastLine">
						<Typography variant="subtitle2">Copyright SkyFarms 2019</Typography>
						<span className="separator">|</span>
						<Link href="http://skyfarms.io/privacy-policy/">
							<Typography variant="subtitle2">Privacy Policy</Typography>
						</Link>
						<span className="separator">|</span>
						<Link href="mailto:info@skyfarms.io?Subject=SkyFarmsSite">
							<Typography variant="subtitle2">Contact Us</Typography>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Root>
	)
};

export default Footer;
