import styled from 'styled-components';

import HeroBannerDesktop from '../../assets/images/HeroBanner_desktop.jpg';
import HeroBannerMobile from '../../assets/images/HeroBanner_phone.jpg';
import HeroBannerTab from '../../assets/images/HeroBanner_tab.jpg';

export default styled.div`
  width: 100%;
  max-width: 1440px;
  max-height: 800px;
  min-height: 600px;
  height: calc(70vh - 72px);
  background-color: #FCFCFC;
  margin-bottom: 40px;
	.banner {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url('${HeroBannerDesktop}');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		.action {
			position: absolute;
			width: 260px;
			padding: 20px;
			border: none;
			text-decoration: none !important;
			text-decoration: none !important;
			color: #fff;
			cursor: pointer;
			background-color: #DD4446;
			box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.3);
			text-align: center;
			display: block;
			left: 180px;
			margin-top: 140px;
			h5 {
				font-weight: 500;
			}
		}
	}
	@media (max-width: 1024px) {
		.banner {
			background-image: url('${HeroBannerTab}');
			.action {
				left: 40px;
			}
		}
	}
	@media (max-width: 480px) {
		.banner {
			background-image: url('${HeroBannerMobile}');
			justify-content: center;
			.action {
				left: unset;
				margin-top: 0px;
				bottom: 0px;
			}
		}
	}
`;
