import styled from 'styled-components';

export default styled.div`
  padding: 40px;
  width: 100%;
  max-width: 1440px;
  max-height: 800px;
  min-height: 600px;
  height: calc(70vh - 72px);
  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('https://www.ibizapropertyguide.com/wp-content/uploads/2017/09/ibiza-property-guide-garden-vegetables.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 60px 0px;
    .bannerContent {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      max-width: 1124px;
      padding: 0 36px;
      .actionTitle {
        font-size: 72px;
        font-weight: 600;
        color: #fff;
        max-width: 700px;
        text-align: left;
        line-height: 72px;
        margin-top: 25px;
        margin-bottom: 31px;
      }
      .actionDescription {
        max-width: 700px;
        margin: 0 0 63px;
        font-size: 20px;
        line-height: 32px;
        font-weight: 600;
        color: #fff;
        text-align: left;
      }
      .action {
        display: block;
        width: 260px;
        min-height: 65px;
        margin: 0;
        padding: 20px 0 0;
        border: none;
        border-radius: 2px;
        background-color: #c0392b;
        color: #fff;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.3px;
      }
    }
  }
`;
