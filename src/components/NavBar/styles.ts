import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export default styled(AppBar)`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  padding: 12px 20px;
  .section {
    &.logoSection {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 600;
    }
  }
  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }
`;
