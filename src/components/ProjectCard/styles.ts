import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export default styled(Paper)`
	.projectName {
		padding: 32px 20px 20px;
		text-align: center;
		color: #4a4a4a;
	}
`;

export const ImageCarouselContainer = styled.div`
	.image {
		width: 100%;
		height: 300px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-color: #FAFAFA;
	}
`;