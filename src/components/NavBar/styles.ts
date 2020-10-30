import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export default styled(AppBar)`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  padding: 12px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  .section {
    &.logoSection {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
	  font-weight: 500;
	  color: #c0392b;
    }
  }
  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }
`;
