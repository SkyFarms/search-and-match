import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';

export const Menu = styled.ul`
	list-style: none;
	padding: 0px;
	margin: 0px;
	&.menu {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		li {
			margin-right: 1.75rem;
			&:last-child {
				margin-right: 0px;
			}
		}
	}
	.link {
		display: block;
		color: #fff;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		padding: 8px 0px;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;
		&:hover {
			border-bottom-color: #ff8100;
		}

		&.createLink {
			display: block;
			width: 100%;
			height: 100%;
			background-color: #ff8100;
			border-radius: 32px;
			padding: 8px 16px;
			border: none;
			h6 {
				font-weight: 600;
			}
		}
		&.menuLink {
			h6 {
				display: flex;
				align-items: center;
				svg {
					font-size: 1.25rem;
					color: #ff8100;
					margin-left: 4px;
					transition: all 0.3s ease;
					&.open {
						transform: rotate(180deg);
					}
				}
			}
		}
	}
`;

export const MobileNav = styled(Drawer)`
	.MuiDrawer-paper {
		background-color: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
	}
	.menu {
		width: 100%;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 12px 24px;
		li {
			margin-right: 0px;
			margin-bottom: 1rem;
			&:last-child {
				margin-bottom: 0px;
			}
		}
		.closeBtn {
			position: absolute;
			right: 24px;
			top: 12px;
			color: #ff8100;

			@media (max-width: 375px) {
				&.closeBtn {
					right: 0px;
					top: 0px;
				}
			}
		}
	}
`;

export const SubMenu = styled.ul`
	list-style: none;
	padding: 0px;
	margin: 0px;
	background-color: #282828;
	padding: 12px;
	.link {
		display: block;
		color: #fff;
		text-transform: uppercase;
		text-decoration: none;
		padding: 8px 0px;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;
		&:hover {
			border-bottom-color: #ff8100;
		}
	}
`;

export default styled(AppBar)`
	background-color: #677A8A;
	.header {
		align-items: center;
		justify-content: space-between;
	}
	.mdMenuTrigger {
		text-align: right;
		button {
			color: #ff8100;
		}
	}
`;