import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export default styled(AppBar)`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  .sectionWrapper {
	  display: flex;
	  justify-content: space-between;
	.section {
		border-width: 0px 0px 5px 0px;
		border-style: solid;
		border-color: transparent;
		transition: all .3s ease;
		&:hover {
			border-color: rgb(192, 57, 43);
		}
		&.rightSection > a {
			font-size: 18px;
			&: hover {
				color: #8c291e;
			}
		}
		& > a {
			padding: 12px 20px;
			height: 100%;
			display: flex;
			align-items: center;
			text-decoration: none;
			font-size: 20px;
			font-weight: 500;
			color: rgb(192, 57, 43);
			transition: all .3s ease;
			&.addLink {
				&::before {
					content: '+';
					padding-right: 2px;
				}
			}
		}
	}
  }

  @media(max-width: 480px) {
	  .sectionWrapper {
		  .section {
			& > a {
				font-size: 18px;
			}
			&.rightSection > a {
				font-size: 16px;
			}
		}
	  }
  }
`;
