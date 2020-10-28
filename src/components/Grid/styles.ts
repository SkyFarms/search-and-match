import styled from 'styled-components';

export default styled.div`
  .title {
    margin-bottom: 24px;
    margin-top: 0;
    max-width: 735px;
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -2px;
    text-align: left;
  }
  .itemsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 56px;
    .item {
      margin: 0px 40px 0px 0px;
      width: 320px;
      text-decoration: none !important;
      &.photoItem {
        .image {
          position: relative;
          height: 200px;
          width: 100%;
          margin: 0 auto;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
        }
        .name {
          margin-top: 20px;
          color: #4a4a4a;
          line-height: 32px;
          font-weight: 600;
          font-size: 24px;
          letter-spacing: -0.3px;
        }
      }
      &.textItem {
        text-align: left;
      }
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 30px;
      line-height: 36px;
      letter-spacing: -1px;
      margin-bottom: 18px;
    }
    .itemsWrapper {
      margin-top: 32px;
      flex-direction: column;
      .item {
        margin: 24px 0px 0px;
        &.photoItem {
          .name {
            margin-top: 16px;
            line-height: 30px;
          }
        }
      }
    }
  }
`;
