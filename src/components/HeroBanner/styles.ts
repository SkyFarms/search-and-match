import styled from 'styled-components';

export default styled.div`
  padding: 40px;
  width: 100%;
  max-width: 1440px;
  .banner {
    width: 100%;
    height: 600px;
    background-image: url('https://www.ibizapropertyguide.com/wp-content/uploads/2017/09/ibiza-property-guide-garden-vegetables.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .bannerContent {
      .actionTitle {
        font-size: 72px;
        font-weight: 600;
        color: #fff;
      }
      .action {
        background-color: red;
      }
    }
  }
`;
