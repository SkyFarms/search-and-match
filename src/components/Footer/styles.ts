import styled from 'styled-components';

export const Link = styled.a`
	color: #dd9933;
	text-decoration: none !important;
`;

export default styled.div`
	width: 100%;
	background-color: #677a8a;
	padding: 60px 20px;
	.sectionTitle {
		h6 {
			color: #fff;
			text-transform: uppercase;
			font-weight: 700;
		}
	}
	.lastLine {
		color: #9e9e9e;
		& > * {
			display: inline-block;
			vertical-align: middle;
			&.separator {
				margin: 0px 4px;
			}
		}
	}
`;