import styled from 'styled-components';

export const ImageCarouselContainer = styled.div`
	.image {
		width: 100%;
		height: 300px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-color: #cecece;
	}
`;

export default styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 40px 20px;
	.projectName {
		padding: 32px 20px 20px;
		text-align: center;
		font-size: 20px;
		color: #4a4a4a;
		font-weight: 500;
	}
`;