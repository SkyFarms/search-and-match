import styled from 'styled-components';

export default styled.div`
	max-width: 1080px;
  margin: 0 auto;
  .title {
    margin: 0px 0px 36px;
    max-width: 776px;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -1px;
    text-align: left;
  }
  .itemsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      width: 320px;
      text-decoration: none !important;
      display: flex;
      flex-direction: column;
      margin: 20px;
      &.photoItem {
        .image {
          position: relative;
          height: 200px;
          width: 100%;
          margin: 0 auto;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
          transition: all 0.3s ease;
          &:hover {
            transform: scale(1.1);
          }
        }
        .name {
          margin-top: 20px;
          color: #4a4a4a;
          font-weight: 500;
          font-size: 24px;
        }
      }
      &.textItem {
        text-align: left;
        .title {
          font-size: 24px;
          letter-spacing: normal;
          margin: 0px;
        }
        .description {
          font-size: 20px;
        }
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
