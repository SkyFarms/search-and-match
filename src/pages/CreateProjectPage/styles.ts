import styled from 'styled-components';

export default styled.div`
	.contactInfoContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 20px;
		max-width: 1280px;
		margin: 0 auto;
		.inputWrapper {
			margin: 32px 0px;
			width: 400px;
			input {
				font-size: 24px;
			}
		}
		.actionWrapper {
			margin-top: 48px;
			button {
				opacity: 1;
				text-transform: uppercase;
				border: none;
				outline: none;
				font-size: 24px;
				font-weight: 600;
				cursor: pointer;
				transition: all 0.5s ease;
				background-color: #42A5F5;
				color: #fff;
				&:disabled {
					color: #9e9e9e;
					pointer-events: none;
					background-color: transparent;
				}
			}
		}
	}
`;

