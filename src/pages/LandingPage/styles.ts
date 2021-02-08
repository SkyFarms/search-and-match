import styled from 'styled-components';

export default styled.div`
	.section {
		&.featuredSection {
			padding: 20px 20px 96px;
			background-color: #fcfcfc;
		}
		&.howItWorksSection {
			padding: 96px 20px;
		}
		.sectionContent {
			max-width: 1080px;
			margin: 0 auto;
			.title {
				margin: 0px 0px 36px;
				/* max-width: 776px; */
				font-size: 48px;
				font-weight: 500;
				line-height: 56px;
				letter-spacing: -1px;
				text-align: left;
			}
			.textItem {
				text-align: left;
				.title {
					font-size: 24px;
					letter-spacing: normal;
					margin: 0px;
				}
				.description {
					font-size: 20px;
				}
			}
		}
	}

	@media (max-width: 480px) {
		.section {
			.sectionContent {
				.title {
					font-size: 30px;
					line-height: 36px;
					letter-spacing: -1px;
					margin-bottom: 40px;
				}
			}
		}
	}
`;