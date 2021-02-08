import styled from 'styled-components';
import Container from '@material-ui/core/Container';

export const IntroContainer = styled(Container)`
	display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    color: #EE8033;
	.transitionDelay700 {
		transition-delay: 700ms !important;
	}
	.transitionDelay1000 {
		transition-delay: 1000ms !important;
	}
	.transitionDelay1500 {
		transition-delay: 1500ms !important;
	}
	.startBtn {
		color: #fff;
		background-color: #ff8100;
		padding: 12px 16px;
		border-radius: 24px;
	}
`;

export const ContactInfoGridContainer = styled(Container)`
	padding: 40px 20px;
	& > .MuiGrid-container {
		min-width: 320px;
		max-width: 480px;
		margin: 0 auto;
	}
	.inputWrapper {
		margin: 32px 0px;
		input {
			font-size: 24px;
		}
	}
	.submitBtnWrapper {
		text-align: right;
		button {
			opacity: 1;
			text-transform: uppercase;
			border: none;
			outline: none;
			font-weight: 600;
			cursor: pointer;
			transition: all 0.5s ease;
			background-color: #ff8100;
			color: #fff;
			&:disabled {
				color: #9e9e9e;
				pointer-events: none;
				background-color: transparent;
			}
		}
	}
`;
