import styled from 'styled-components';

export const SectionContainer = styled.div`
	padding: 40px 20px 80px;
	&.featuredSection {
		background-color: #fcfcfc;
	}
`;

export default styled.div`
	.section {
		.sectionContent {
			max-width: 1080px;
			margin: 0 auto;
			.title {
				margin: 0px 0px 36px;
				text-align: left;
			}
			.textItem {
				text-align: left;
				& > *:first-child {
					font-weight: 500;
					margin-bottom: 12px;
				}
			}
		}
	}

	@media (max-width: 480px) {
		.section {
			.sectionContent {
				.title {
					margin-bottom: 40px;
				}
			}
		}
	}
`;