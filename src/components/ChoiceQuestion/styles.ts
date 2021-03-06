import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export default styled(Grid)`
	padding: 40px 20px;
	max-width: 1280px;
	margin: 0 auto;
	.question {
		text-align: center;
	}
	.option {
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid;
		border-color: transparent;
		&.selected {
			border-color: #ff8100;
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
			text-align: center;
		}
	}
	.actionsWrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		button {
			opacity: 1;
			text-transform: uppercase;
			border: none;
			outline: none;
			font-weight: 600;
			background-color: transparent;
			cursor: pointer;
			color: #ff8100;
			transition: all 0.5s ease;
			text-decoration: underline;
			&:disabled {
				color: #9e9e9e;
				pointer-events: none;
			}
			&:hover {
				text-decoration: none;
				background-color: #ff8100;
				color: #fff;
			}
			&.hidden {
				opacity: 0;
				pointer-events: none;
			}
		}
	}
`;