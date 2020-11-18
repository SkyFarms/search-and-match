import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export default styled(Grid)`
	padding: 20px;
	width: 100%;
	height: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	.option {
		flex-grow: 1;
		width: 100%;
		height: 200px;
		background-size: contain;
		background-position: center;
		background-color: #cacaca;
		background-repeat: no-repeat;
	}
	
`;