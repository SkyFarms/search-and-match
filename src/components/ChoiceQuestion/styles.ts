import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export default styled(Grid)`
	padding: 40px 20px;
	flex-direction: row;
	flex-wrap: wrap;
	max-width: 1280px;
	margin: 0 auto;
	.question {
		font-size: 24px;
		font-weight: 500;
	}
	.option {
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid;
		border-color: transparent;
		&.selected {
			border-color: #000;
		}
		.image {
			flex-grow: 1;
			width: 100%;
			height: 200px;
			background-size: contain;
			background-position: center;
			background-color: #fafafa;
			background-repeat: no-repeat;
		}
		.text {
			padding: 20px;
		}
	}
	
`;